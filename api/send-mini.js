// api/send-mini.js — Vercel entry for the PathCheck mini-report email.
// ---------------------------------------------------------------------------
// POST /api/send-mini { leadId } — renders the lead's mini-report email
// (api/_lib/miniemails.mjs) and sends it via Resend. The gate fires this
// fire-and-forget after a successful lead save; ANY failure here must
// never affect the visitor's flow — the response is informational only.
//
// Contract:
//   200 { ok:true, sent:true, id }            — Resend accepted it
//   200 { ok:true, sent:false, already:true } — idempotent: sent before
//   200 { ok:true, sent:false, queued:true, reason:'no-key' }
//                                             — RESEND_API_KEY not set:
//                                               nothing sent, nothing
//                                               marked; the manual pilot
//                                               (scripts/send_mini_manual.py)
//                                               renders these to the outbox
//   400 bad leadId · 404 unknown / non-PathCheck lead · 502 provider
//   error · 503 lead store unconfigured · 500 unexpected
//
// Idempotency: the send state lives on the lead itself, in
// recommended[0].miniEmail — the same additive-field pattern as
// recommended[0].progress / .resume (no schema change, no new columns).
// { status:'sent', at, id, via } blocks re-sends; { status:'failed' }
// records the last provider error and may be retried.
//
// FROM is path@careerglitch.com — the domain must be verified in Resend
// and RESEND_API_KEY added to this project's env before sends go live.
// ---------------------------------------------------------------------------

const ALLOWED_ORIGINS = new Set([
  'https://careerglitch.com',
  'https://www.careerglitch.com',
  'https://pathcheck-cg.vercel.app',
]);

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const FROM = 'Career Glitch <path@careerglitch.com>';

async function fetchLead(cfg, id) {
  const r = await fetch(
    `${cfg.url}/rest/v1/cg_leads?id=eq.${encodeURIComponent(id)}&select=id,email,name,self_role,recommended,created_at`,
    { headers: { apikey: cfg.key, Authorization: `Bearer ${cfg.key}` } }
  );
  if (!r.ok) throw new Error(`lead fetch -> ${r.status}`);
  const rows = await r.json().catch(() => null);
  return Array.isArray(rows) && rows.length ? rows[0] : null;
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
    if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
    if (!body || typeof body !== 'object') body = {};
    const leadId = typeof body.leadId === 'string' ? body.leadId : '';
    if (!UUID_RE.test(leadId)) {
      return res.status(400).json({ ok: false, error: 'That lead id does not look right.' });
    }

    const { leadStoreConfig, updateLead } = await import('./_lib/leads.mjs');
    const MINI = await import('./_lib/miniemails.mjs');
    const cfg = leadStoreConfig();
    if (!cfg) return res.status(503).json({ ok: false, error: 'Email is not switched on yet.' });

    const row = await fetchLead(cfg, leadId);
    const input = row && MINI.miniInputForLead(row);
    if (!input) return res.status(404).json({ ok: false, error: 'We could not find that check.' });
    const rec = row.recommended[0];

    if (rec.miniEmail && rec.miniEmail.status === 'sent') {
      return res.status(200).json({ ok: true, sent: false, already: true });
    }

    const apiKey = typeof process.env.RESEND_API_KEY === 'string' ? process.env.RESEND_API_KEY : '';
    if (!apiKey) {
      // Staged, not sent: the manual pilot renders pending leads to the
      // outbox until the founder adds the key (see ACTIVATION notes).
      return res.status(200).json({ ok: true, sent: false, queued: true, reason: 'no-key' });
    }

    const mail = MINI.renderMiniEmail(input);
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: [row.email],
        subject: mail.subject,
        html: mail.html,
        text: mail.text,
        tags: [{ name: 'kind', value: input.kind }, { name: 'product', value: 'pathcheck-mini' }],
      }),
    });
    if (!r.ok) {
      const t = await r.text().catch(() => '');
      console.error('send-mini provider error:', r.status, t.slice(0, 200));
      await updateLead(cfg, leadId, {
        recommended: [{ ...rec, miniEmail: { status: 'failed', at: new Date().toISOString(), error: `resend ${r.status}` } }],
      }).catch(() => {});
      return res.status(502).json({ ok: false, sent: false, error: 'The email did not send — it stays queued for the pilot.' });
    }
    const out = await r.json().catch(() => ({}));
    await updateLead(cfg, leadId, {
      recommended: [{ ...rec, miniEmail: { status: 'sent', at: new Date().toISOString(), id: out.id || null, via: 'resend' } }],
    });
    return res.status(200).json({ ok: true, sent: true, id: out.id || null });
  } catch (e) {
    console.error('send-mini failed:', e && e.message);
    return res.status(500).json({ ok: false, error: 'The email did not send — it stays queued for the pilot.' });
  }
};
