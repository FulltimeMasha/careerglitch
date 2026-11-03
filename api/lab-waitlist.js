// api/lab-waitlist.js — waitlist writer for Career Glitch Lab (/lab).
// ---------------------------------------------------------------------------
// Demand test (2026-11-03, hypothesis 1): a 30-day "first rung" lab for
// juniors in accounting, marketing and data — real small-business clients,
// AI tools, a pro who checks the work, then intros to hiring companies.
// This endpoint only collects the waitlist; no payment is taken.
//
// Storage: the same Supabase table as PathCheck, public.cg_leads, with the
// service-role key from the server env (CG_SUPABASE_URL / CG_SUPABASE_KEY,
// see api/_lib/leads.mjs). ADDITIVE ONLY: no schema change. Lab rows are
// told apart by recommended[0].product === 'lab' — every PathCheck reader
// (path-restore, path-progress, path-resume, send-mini) already skips rows
// whose product is not 'pathcheck', so these rows never reach /app.
//   name / email  — as given
//   self_role     — 'lab:<track>'
//   current_job   — the stage the visitor picked (student, grad, ...)
//   recommended   — [{ product:'lab', kind:'waitlist', track, stage,
//                     deposit, country, blocker, src, utm_source,
//                     utm_campaign, ref, host }]
//   top1_slug     — 'lab-<track>'  (count demand per track with this)
//   ua            — 'mobile' | 'desktop'
//
// Count demand in the Supabase SQL editor:
//   select top1_slug, recommended->0->>'deposit' as deposit, count(*)
//   from cg_leads where recommended->0->>'product' = 'lab'
//   group by 1, 2 order by 1, 2;
// ---------------------------------------------------------------------------

const ALLOWED_ORIGINS = new Set([
  'https://careerglitch.com',
  'https://www.careerglitch.com',
  'https://pathcheck-cg.vercel.app',
]);

const EMAIL_RE = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']{2,}$/;
const TRACKS = new Set(['accounting', 'marketing', 'data', 'other']);
const STAGES = new Set(['student', 'graduate', 'switcher', 'working', 'other']);
const DEPOSITS = new Set(['yes', 'maybe', 'no']);
const COUNTRIES = new Set(['us', 'canada', 'other']);

function clean(v, max) {
  if (typeof v !== 'string') return '';
  return v.replace(/[<>\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}
function pick(v, set) {
  return typeof v === 'string' && set.has(v) ? v : null;
}

module.exports = async (req, res) => {
  const origin = typeof req.headers.origin === 'string' ? req.headers.origin : '';
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  if (req.method === 'OPTIONS') {
    if (ALLOWED_ORIGINS.has(origin)) {
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

    // Honeypot: bots fill every field. Pretend success, store nothing.
    if (clean(body.website, 200)) return res.status(200).json({ ok: true });

    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    if (!EMAIL_RE.test(email) || email.length > 254) {
      return res.status(400).json({ ok: false, error: 'That email does not look right. Check it and try again.' });
    }
    const track = pick(body.track, TRACKS);
    if (!track) {
      return res.status(400).json({ ok: false, error: 'Pick your track first.' });
    }
    const stage = pick(body.stage, STAGES);
    const deposit = pick(body.deposit, DEPOSITS);
    const country = pick(body.country, COUNTRIES);
    const name = clean(body.name, 80);
    const blocker = clean(body.blocker, 500) || null;
    const src = clean(body.src, 60) || null;
    const utm_source = clean(body.utm_source, 60) || null;
    const utm_campaign = clean(body.utm_campaign, 80) || null;
    const ref = clean(body.ref, 60) || null;
    const host = clean(typeof req.headers.host === 'string' ? req.headers.host : '', 80) || null;

    const uaHeader = typeof req.headers['user-agent'] === 'string' ? req.headers['user-agent'] : '';
    const ua = body.ua === 'mobile' || body.ua === 'desktop'
      ? body.ua
      : (/Mobi|Android|iPhone|iPad/i.test(uaHeader) ? 'mobile' : 'desktop');

    const { leadStoreConfig } = await import('./_lib/leads.mjs');
    const cfg = leadStoreConfig();
    if (!cfg) {
      return res.status(503).json({ ok: false, error: 'Saving is not switched on yet.' });
    }

    const row = {
      name,
      email,
      self_role: `lab:${track}`,
      current_job: stage,
      recommended: [{
        product: 'lab',
        kind: 'waitlist',
        slug: `lab-${track}`,
        name: 'Career Glitch Lab',
        track,
        stage,
        deposit,
        country,
        blocker,
        src,
        utm_source,
        utm_campaign,
        ref,
        host,
      }],
      top1_slug: `lab-${track}`,
      ua,
    };

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
      console.error('lab waitlist insert failed:', r.status, t.slice(0, 200));
      return res.status(502).json({ ok: false, error: 'That did not save. Try again in a moment.' });
    }
    const out = await r.json().catch(() => null);
    const rec = Array.isArray(out) ? out[0] : out;
    if (!rec || typeof rec.id !== 'string') {
      console.error('lab waitlist insert returned no row');
      return res.status(502).json({ ok: false, error: 'That did not save. Try again in a moment.' });
    }
    return res.status(200).json({ ok: true, lead_id: rec.id });
  } catch (e) {
    console.error('lab waitlist failed:', e && e.message);
    return res.status(500).json({ ok: false, error: 'That did not save. Try again in a moment.' });
  }
};
