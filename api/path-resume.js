// api/path-resume.js — Vercel entry: store a PathCheck user's resume text.
// ---------------------------------------------------------------------------
// The dashboard parses the file IN THE BROWSER (pdf.js / mammoth / plain
// text) and posts the extracted text here. It is stored on the same lead
// row — recommended[0].resume = { fileName, uploadedAt, chars, text } —
// so the path (and its resume-mapped suggestions) survives device
// switches. Text is capped at 60,000 chars server-side. Re-upload
// replaces. Same guard as path-progress: only product:'pathcheck' rows.
//
//   POST /api/path-resume { leadId, fileName, text }
//        -> { ok, fileName, chars, uploadedAt }
// ---------------------------------------------------------------------------

const ALLOWED_ORIGINS = new Set([
  'https://careerglitch.com',
  'https://www.careerglitch.com',
  'https://pathcheck-cg.vercel.app',
]);

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const MAX_CHARS = 60000;

function cleanName(v) {
  if (typeof v !== 'string') return 'resume';
  const s = v.replace(/[<>\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 120);
  return s || 'resume';
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
    if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
    if (!body || typeof body !== 'object') body = {};
    const leadId = typeof body.leadId === 'string' ? body.leadId : '';
    if (!UUID_RE.test(leadId)) return res.status(400).json({ ok: false, error: 'That path link does not look right.' });
    const text = typeof body.text === 'string' ? body.text.trim() : '';
    if (!text) return res.status(400).json({ ok: false, error: 'That file gave us no text to map — try pasting the text instead.' });
    const capped = text.slice(0, MAX_CHARS);
    const fileName = cleanName(body.fileName);

    const { leadStoreConfig, updateLead } = await import('./_lib/leads.mjs');
    const cfg = leadStoreConfig();
    if (!cfg) return res.status(503).json({ ok: false, error: 'Resume saving is not switched on yet.' });

    const r = await fetch(
      `${cfg.url}/rest/v1/cg_leads?id=eq.${encodeURIComponent(leadId)}&select=id,recommended`,
      { headers: { apikey: cfg.key, Authorization: `Bearer ${cfg.key}` } }
    );
    if (!r.ok) throw new Error(`lead fetch -> ${r.status}`);
    const rows = await r.json().catch(() => null);
    const row = Array.isArray(rows) && rows.length ? rows[0] : null;
    const rec = row && Array.isArray(row.recommended) ? row.recommended[0] : null;
    if (!rec || rec.product !== 'pathcheck') {
      return res.status(404).json({ ok: false, error: 'We could not find that path.' });
    }

    const resume = { fileName, uploadedAt: new Date().toISOString(), chars: capped.length, text: capped };
    const patched = await updateLead(cfg, leadId, { recommended: [{ ...rec, resume }] });
    if (!patched) return res.status(404).json({ ok: false, error: 'We could not find that path.' });
    return res.status(200).json({ ok: true, fileName, chars: capped.length, uploadedAt: resume.uploadedAt });
  } catch (e) {
    console.error('path-resume failed:', e && e.message);
    return res.status(500).json({ ok: false, error: 'That did not save — try again.' });
  }
};
