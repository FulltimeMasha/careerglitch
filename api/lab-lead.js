// api/lab-lead.js — Vercel entry for Career Glitch Lab waitlist leads.
// ---------------------------------------------------------------------------
// Storage deliberately matches api/pathcheck-lead.js: the same Supabase
// table (public.cg_leads), the same server-only config helper, and an
// additive-only mapping into existing columns. The Lab marker and survey
// answers live in the one-element `recommended` object:
//   recommended = [{ product: 'lab', track, stage, country, deposit,
//                    barrier, src, ref }]
// Column mapping:
//   name / email  — as given (email validated with the gate's regex)
//   self_role     — selected Lab track
//   current_job   — 'lab-waitlist'
//   top1_slug     — 'lab'
//   ua            — 'mobile' | 'desktop'
// ---------------------------------------------------------------------------

const ALLOWED_ORIGINS = new Set([
  'https://careerglitch.com',
  'https://www.careerglitch.com',
  'https://pathcheck-cg.vercel.app',
]);

const EMAIL_RE = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']{2,}$/;

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

    const name = clean(body.name, 80);
    const track = clean(body.track, 40);
    const stage = clean(body.stage, 60);
    const country = clean(body.country, 40);
    const deposit = clean(body.deposit, 60);
    const barrier = clean(body.barrier, 1000);
    const src = clean(body.src, 80);
    const ref = clean(body.ref, 120);

    const uaHeader = typeof req.headers['user-agent'] === 'string' ? req.headers['user-agent'] : '';
    const ua = body.ua === 'mobile' || body.ua === 'desktop'
      ? body.ua
      : (/Mobi|Android|iPhone|iPad/i.test(uaHeader) ? 'mobile' : 'desktop');

    const { leadStoreConfig, insertLead } = await import('./_lib/leads.mjs');
    const cfg = leadStoreConfig();
    if (!cfg) {
      return res.status(503).json({ ok: false, error: 'Saving is not switched on yet.' });
    }

    const row = {
      name,
      email,
      self_role: track || null,
      current_job: 'lab-waitlist',
      recommended: [{
        product: 'lab',
        track: track || null,
        stage: stage || null,
        country: country || null,
        deposit: deposit || null,
        barrier: barrier || null,
        src: src || null,
        ref: ref || null,
      }],
      top1_slug: 'lab',
      ua,
    };

    const leadId = await insertLead(cfg, row);
    return res.status(200).json({ ok: true, lead_id: leadId });
  } catch (e) {
    // No internal error text to the client — the failure is ours.
    console.error('lab lead failed:', e && e.message);
    return res.status(500).json({ ok: false, error: 'That did not save — check the email and try again.' });
  }
};
