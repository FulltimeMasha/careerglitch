// api/pathcheck-lead.js — Vercel entry for the PathCheck lead writer.
// ---------------------------------------------------------------------------
// PathCheck (the gate on careerglitch.com + the pathcheck-cg.vercel.app
// mirror) collects two lead kinds: a verdict-strip lead (seat / grid) and
// a waitlist lead for professions not built yet. Both are written HERE —
// one writer endpoint on this host; the mirror posts cross-origin, so
// CORS is explicit (allowlist below, OPTIONS handled).
//
// Storage: the SAME Supabase table as the Matchmaker gate, public.cg_leads,
// via the service-role key in the server env (CG_SUPABASE_URL /
// CG_SUPABASE_KEY — see api/_lib/leads.mjs, whose config helper this file
// reuses). ADDITIVE ONLY: no schema change, no new columns. The PathCheck
// fields ride in the columns the mentor save already uses:
//   name / email  — as given (email validated, mentor's regex)
//   self_role     — the profession the visitor TYPED, verbatim (cleaned)
//   current_job   — the matched seat key, else the typed profession
//   recommended   — one-element array: { product:'pathcheck', kind, prof,
//                   seat, typed, personalize, slug, name } — the product
//                   marker lives here. personalize may carry a `target`
//                   object { typed, prof, seat } (email-first gate,
//                   2026-11-01): the profession the visitor wants to
//                   BECOME, matcher-resolved at the gate, stored verbatim
//                   alongside the checked profession (the demand map).
//   top1_slug     — seat, else prof cluster, else 'waitlist'
//   verdict_at    — set for seat/grid (a verdict was shown); null waitlist
//   ua            — 'mobile' | 'desktop' (the column's check constraint)
// RLS posture is unchanged: the table stays service-role-only.
// ---------------------------------------------------------------------------

const ALLOWED_ORIGINS = new Set([
  'https://careerglitch.com',
  'https://www.careerglitch.com',
  'https://pathcheck-cg.vercel.app',
]);

const EMAIL_RE = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']{2,}$/;
const KINDS = new Set(['seat', 'waitlist', 'grid']);

// Short plain-text fields: strip markup/control chars, collapse space, cap.
function clean(v, max) {
  if (typeof v !== 'string') return '';
  return v.replace(/[<>\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}

module.exports = async (req, res) => {
  const origin = typeof req.headers.origin === 'string' ? req.headers.origin : '';
  const corsOk = ALLOWED_ORIGINS.has(origin);
  if (corsOk) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  if (req.method === 'OPTIONS') {
    if (corsOk) {
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Access-Control-Max-Age', '86400');
    }
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'POST only.' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch { body = {}; }
    }
    if (!body || typeof body !== 'object') body = {};

    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    if (!EMAIL_RE.test(email) || email.length > 254) {
      return res.status(400).json({ ok: false, error: 'That email does not look right — check it and try again.' });
    }
    const kind = KINDS.has(body.kind) ? body.kind : null;
    if (!kind) {
      return res.status(400).json({ ok: false, error: 'That lead kind is not recognised.' });
    }
    const name = clean(body.name, 80);
    const typed = clean(body.typed, 300);
    const prof = clean(body.prof, 40) || null;
    const seat = clean(body.seat, 60) || null;
    if (kind === 'waitlist' && !typed) {
      return res.status(400).json({ ok: false, error: 'Tell us the profession you want researched.' });
    }

    let personalize = null;
    if (body.personalize && typeof body.personalize === 'object') {
      const p = {
        stage: clean(body.personalize.stage, 40) || null,
        state: clean(body.personalize.state, 60) || null,
        invested: clean(body.personalize.invested, 40) || null,
      };
      // Additive (2026-11-01, email-first gate): personalize.target —
      // { typed, prof, seat } for the "want to become" field. Accepted
      // and stored as given (cleaned); never required, never reshapes
      // the rest of the payload.
      const bt = body.personalize.target;
      if (bt && typeof bt === 'object') {
        const t = {
          typed: clean(bt.typed, 300) || null,
          prof: clean(bt.prof, 40) || null,
          seat: clean(bt.seat, 60) || null,
        };
        if (t.typed || t.prof || t.seat) p.target = t;
      }
      // Additive (2026-11-01, founder model): personalize.from —
      // { typed } = the visitor's CURRENT profession, context only.
      // It is never researched and never verdicted; the lead's
      // subject is the TARGET (the want string in `typed`), and
      // self_role below stays the SUBJECT, so the demand / creation
      // queue accumulates the professions people want to become.
      const bf = body.personalize.from;
      if (bf && typeof bf === 'object') {
        const f = {
          typed: clean(bf.typed, 300) || null,
          prof: clean(bf.prof, 40) || null,
          unbuilt: bf.unbuilt === true,
        };
        if (f.typed) p.from = f;
      }
      if (p.stage || p.state || p.invested || p.target || p.from) personalize = p;
    }

    const uaHeader = typeof req.headers['user-agent'] === 'string' ? req.headers['user-agent'] : '';
    const ua = body.ua === 'mobile' || body.ua === 'desktop'
      ? body.ua
      : (/Mobi|Android|iPhone|iPad/i.test(uaHeader) ? 'mobile' : 'desktop');

    const { leadStoreConfig } = await import('./_lib/leads.mjs');
    const cfg = leadStoreConfig();
    if (!cfg) {
      return res.status(503).json({ ok: false, error: 'Saving is not switched on yet.' });
    }

    const slug = seat || prof || 'waitlist';
    const row = {
      name,
      email,
      // self_role = the SUBJECT string verbatim (the target when one
      // was given, else the current profession). The current
      // profession, when different, lives only in personalize.from.
      self_role: typed || null,
      current_job: seat || typed || null,
      recommended: [{
        slug,
        name: typed || slug,
        product: 'pathcheck',
        kind,
        prof,
        seat,
        typed: typed || null,
        personalize,
      }],
      top1_slug: slug,
      ua,
    };
    if (kind !== 'waitlist') row.verdict_at = new Date().toISOString();

    // Same REST shape as api/_lib/leads.mjs sb(); return=representation so
    // the caller (and our verification) sees the row exactly as stored.
    const r = await fetch(`${cfg.url}/rest/v1/cg_leads`, {
      method: 'POST',
      headers: {
        apikey: cfg.key,
        Authorization: `Bearer ${cfg.key}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify(row),
    });
    if (!r.ok) {
      const t = await r.text().catch(() => '');
      console.error('pathcheck lead insert failed:', r.status, t.slice(0, 200));
      return res.status(502).json({ ok: false, error: 'That did not save — check the email and try again.' });
    }
    const out = await r.json().catch(() => null);
    const rec = Array.isArray(out) ? out[0] : out;
    if (!rec || typeof rec.id !== 'string') {
      console.error('pathcheck lead insert returned no row');
      return res.status(502).json({ ok: false, error: 'That did not save — check the email and try again.' });
    }
    return res.status(200).json({
      ok: true,
      lead_id: rec.id,
      saved: {
        id: rec.id,
        created_at: rec.created_at,
        email: rec.email,
        self_role: rec.self_role,
        top1_slug: rec.top1_slug,
        ua: rec.ua,
      },
    });
  } catch (e) {
    // No internal error text to the client — the failure is ours.
    console.error('pathcheck lead failed:', e && e.message);
    return res.status(500).json({ ok: false, error: 'That did not save — check the email and try again.' });
  }
};
