// api/share-card.js — personalized share cards generated IN PRODUCT with
// Muse Image (Meta Model API, api/_lib/engine/image.mjs).
// ---------------------------------------------------------------------------
// POST { kind: 'watchdog' | 'lab', lead_id, fresh? }
//   -> { ok, b64, format, profession, headline, subline }
//
// The model draws the ART only (dark glitch background + watchdog dog,
// empty center panel — image models garble text). The page composites
// the person's real words (profession, Score / scenes) onto the art with
// canvas, so every number on the card is exact and typed, never painted.
//
// The generated art is cached on the lead (rec.share_card) — one
// generation per person, regeneration only with fresh: true.
// ---------------------------------------------------------------------------

const ALLOWED_ORIGINS = new Set([
  'https://careerglitch.com',
  'https://www.careerglitch.com',
  'https://pathcheck-cg.vercel.app',
]);

function cors(req, res) {
  const origin = typeof req.headers.origin === 'string' ? req.headers.origin : '';
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    return true;
  }
  return false;
}

const ART_PROMPT =
  'Dark moody square social-media poster background, deep purple-blue almost black (#150A20), ' +
  'neon pink glitch accents and thin scan lines, a cute cartoon watchdog dog with glowing pink eyes ' +
  'sitting guard in the bottom right corner, one large empty dark rounded rectangle panel in the center ' +
  'kept completely blank for text, subtle radar circles in the background, premium cyberpunk career vibe, ' +
  'absolutely no text, no letters, no numbers, no watermark';

module.exports = async (req, res) => {
  const corsOk = cors(req, res);
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

    const kind = body.kind === 'lab' ? 'lab' : 'watchdog';
    const leadId = typeof body.lead_id === 'string' ? body.lead_id.trim() : '';
    if (!/^[0-9a-f-]{36}$/i.test(leadId)) {
      return res.status(400).json({ ok: false, error: 'That id does not look right.' });
    }

    const { leadStoreConfig, updateLead } = await import('./_lib/leads.mjs');
    const cfg = leadStoreConfig();
    if (!cfg) return res.status(503).json({ ok: false, error: 'Cards are not switched on yet.' });

    const r = await fetch(`${cfg.url}/rest/v1/cg_leads?id=eq.${encodeURIComponent(leadId)}&select=id,recommended`, {
      headers: { apikey: cfg.key, Authorization: `Bearer ${cfg.key}` },
    });
    if (!r.ok) return res.status(500).json({ ok: false, error: 'That card could not be loaded.' });
    const found = await r.json();
    const row = Array.isArray(found) ? found[0] : null;
    const rec = row && Array.isArray(row.recommended) ? row.recommended[0] : null;
    if (!row || !rec) return res.status(404).json({ ok: false, error: 'No such card.' });

    let profession = '';
    let headline = '';
    let subline = '';
    if (kind === 'watchdog') {
      if (rec.product !== 'watchdog' || !rec.watchdog) {
        return res.status(404).json({ ok: false, error: 'No Watchdog card with that id.' });
      }
      const WD = await import('./_lib/watchdog.mjs');
      profession = rec.watchdog.profile.profession || 'My profession';
      headline = WD.effectiveScore(rec.watchdog) + ' / 100';
      subline = 'my AI-Proof Score';
    } else {
      if (rec.product !== 'lab' || !rec.cycle) {
        return res.status(404).json({ ok: false, error: 'No Lab record with that id.' });
      }
      profession = 'Bookkeeper';
      const n = (rec.cycle.passed || []).length;
      headline = n + ' / 10 scenes';
      subline = 'proved in the Lab simulator';
    }

    if (rec.share_card && rec.share_card.b64 && body.fresh !== true) {
      return res.status(200).json({
        ok: true, cached: true,
        b64: rec.share_card.b64, format: rec.share_card.format || 'webp',
        profession, headline, subline,
      });
    }

    const { metaImage } = await import('./_lib/engine/image.mjs');
    let img;
    try {
      img = await metaImage({ prompt: ART_PROMPT });
    } catch (e) {
      console.error('share card image failed:', e && e.message);
      return res.status(502).json({ ok: false, error: 'The picture could not be generated right now — try again in a minute.' });
    }

    await updateLead(cfg, row.id, {
      recommended: [{ ...rec, share_card: { b64: img.b64, format: img.format, at: new Date().toISOString(), model: 'muse-image-1.0' } }],
    }).catch(() => { /* caching is best-effort; the card itself is the result */ });

    return res.status(200).json({
      ok: true, cached: false,
      b64: img.b64, format: img.format,
      profession, headline, subline,
    });
  } catch (e) {
    console.error('share card failed:', e && e.message);
    return res.status(500).json({ ok: false, error: 'That did not work — try again.' });
  }
};
