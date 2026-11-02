// api/path-restore.js — Vercel entry: find a PathCheck path by email.
// ---------------------------------------------------------------------------
// Device switching for the dashboard (/app): the visitor pastes the email
// they used at the gate and gets back the id of their LATEST PathCheck
// lead (kind seat/grid/waitlist) so the app can open /app#<id>.
// Only rows with recommended[0].product === 'pathcheck' qualify — the
// marker is verified server-side for every candidate row. Mentor leads
// on the same table are invisible to this endpoint.
//
//   POST /api/path-restore { email }
//        -> { ok, lead_id, kind, seat, typed, prof }  | 404 when none.
//
//   POST /api/path-restore { email, match: { kind, prof, seat, typed } }
//        -> same shape + { matched } — additive (2026-11-01, email-keyed
//        gate recognition): the caller's subject is compared against
//        this email's recent PathCheck leads (newest first); when one
//        lead's subject matches, THAT lead is returned with
//        matched:true so the gate can continue it instead of creating
//        a duplicate row. Without a match, the latest lead is returned
//        with matched:false. Callers that send no `match` (the /app
//        restore form) get byte-identical behavior to before.
// ---------------------------------------------------------------------------

const ALLOWED_ORIGINS = new Set([
  'https://careerglitch.com',
  'https://www.careerglitch.com',
  'https://pathcheck-cg.vercel.app',
]);

const EMAIL_RE = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']{2,}$/;

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
    if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
    if (!body || typeof body !== 'object') body = {};
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    if (!EMAIL_RE.test(email) || email.length > 254) {
      return res.status(400).json({ ok: false, error: 'That email does not look right — check it and try again.' });
    }

    // Optional subject match (see header). Sanitized the same way the
    // lead writer cleans its fields; an unusable match is ignored and
    // the endpoint falls back to plain latest-lead behavior.
    const normTyped = (s) => (typeof s === 'string' ? s.toLowerCase().replace(/\s+/g, ' ').trim().slice(0, 300) : '');
    let want = null;
    if (body.match && typeof body.match === 'object') {
      const mk = body.match.kind;
      if (mk === 'seat' || mk === 'grid' || mk === 'waitlist') {
        want = {
          kind: mk,
          prof: typeof body.match.prof === 'string' ? body.match.prof.trim().slice(0, 40) : null,
          seat: typeof body.match.seat === 'string' ? body.match.seat.trim().slice(0, 60) : null,
          typed: normTyped(body.match.typed),
        };
      }
    }
    const subjectMatches = (row, rec) => {
      if (!want) return false;
      if (want.kind === 'seat') return rec.kind === 'seat' && rec.prof === want.prof && rec.seat === want.seat;
      if (want.kind === 'grid') return rec.kind === 'grid' && rec.prof === want.prof;
      // waitlist: the typed subject string IS the identity.
      const t = (typeof rec.typed === 'string' && rec.typed) ? rec.typed
        : (typeof row.self_role === 'string' ? row.self_role : '');
      return rec.kind === 'waitlist' && want.typed !== '' && normTyped(t) === want.typed;
    };

    const { leadStoreConfig } = await import('./_lib/leads.mjs');
    const cfg = leadStoreConfig();
    if (!cfg) return res.status(503).json({ ok: false, error: 'Restore is not switched on yet.' });

    const r = await fetch(
      `${cfg.url}/rest/v1/cg_leads?email=eq.${encodeURIComponent(email)}&order=created_at.desc&limit=10&select=id,recommended,created_at,self_role`,
      { headers: { apikey: cfg.key, Authorization: `Bearer ${cfg.key}` } }
    );
    if (!r.ok) {
      console.error('path-restore query failed:', r.status);
      return res.status(502).json({ ok: false, error: 'That did not work — try again.' });
    }
    const rows = await r.json().catch(() => null);
    const list = Array.isArray(rows) ? rows : [];
    const candidates = [];
    for (const row of list) {
      const rec = Array.isArray(row.recommended) ? row.recommended[0] : null;
      if (rec && rec.product === 'pathcheck') candidates.push({ row, rec });
    }
    if (!candidates.length) {
      return res.status(404).json({ ok: false, error: 'No PathCheck path is saved for that email yet — run the free check first.' });
    }
    let picked = candidates[0];
    let matched = false;
    if (want) {
      const hit = candidates.find(({ row, rec }) => subjectMatches(row, rec));
      if (hit) { picked = hit; matched = true; }
    }
    const out = {
      ok: true,
      lead_id: picked.row.id,
      kind: picked.rec.kind || null,
      prof: picked.rec.prof || null,
      seat: picked.rec.seat || null,
      typed: picked.rec.typed || null,
    };
    if (want) out.matched = matched;
    return res.status(200).json(out);
  } catch (e) {
    console.error('path-restore failed:', e && e.message);
    return res.status(500).json({ ok: false, error: 'That did not work — try again.' });
  }
};
