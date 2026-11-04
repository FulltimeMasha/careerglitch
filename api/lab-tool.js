// api/lab-tool.js — Vercel entry for the radar -> Lab tool packages.
// ---------------------------------------------------------------------------
// Serves the Lab side of the "new tool" pipeline (see
// api/_lib/lab-tools.mjs):
//
//   { action:'package', item_id }
//       -> the radar item + its LESSON + its simulator SCENE for the
//          tool page (/lab/tool?id=<item_id>). The package is
//          generated once and cached in cg_leads (product 'lab-tool');
//          a first-ever request generates it on the spot.
//
//   { action:'list', profession }
//       -> the tool-tagged radar items for a profession, each flagged
//          with whether its Lab package already exists. Drives the
//          "New tools" block on the Lab profession page.
//
// Only tool-tagged radar items have packages — anything else is an
// honest 404/empty, never an invented lesson.
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

function clean(v, max) {
  if (typeof v !== 'string') return '';
  return v.replace(/[<>\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}

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

    const action = typeof body.action === 'string' ? body.action : '';
    const LT = await import('./_lib/lab-tools.mjs');
    const WD = await import('./_lib/watchdog.mjs');
    const { leadStoreConfig, insertLead } = await import('./_lib/leads.mjs');

    if (action === 'list') {
      const profession = clean(body.profession, 60) || 'bookkeeper';
      const items = WD.matchRadarFeed(profession).filter((it) => it.kind === 'tool');
      if (!items.length) return res.status(200).json({ ok: true, tools: [] });
      const cfg = leadStoreConfig();
      let have = new Set();
      if (cfg) {
        try { have = await LT.toolPackageIds(cfg); } catch { /* list still answers honestly without flags */ }
      }
      return res.status(200).json({
        ok: true,
        tools: items.map((it) => ({
          id: it.id,
          headline: it.headline,
          date: it.date || null,
          impact: typeof it.impact === 'number' ? it.impact : 0,
          has_package: have.has(it.id),
        })),
      });
    }

    if (action === 'package') {
      const itemId = clean(body.item_id, 90);
      if (!itemId) return res.status(400).json({ ok: false, error: 'Which tool? The link is missing its item id.' });
      const found = LT.findRadarItem(itemId);
      if (!found) return res.status(404).json({ ok: false, error: 'That radar item is not on file.' });
      if (found.item.kind !== 'tool') {
        return res.status(400).json({ ok: false, error: 'That radar item is news, not a new tool — there is no Lab lesson for it.' });
      }
      const cfg = leadStoreConfig();
      if (!cfg) return res.status(503).json({ ok: false, error: 'The Lab is not switched on yet.' });
      let pkg;
      try {
        pkg = await LT.getOrGenerateToolPackage(cfg, itemId, insertLead);
      } catch (e) {
        console.error('lab-tool package failed:', e && e.message);
        return res.status(502).json({ ok: false, error: 'The lesson for this tool glitched while being written — try again in a moment.' });
      }
      const { item } = pkg;
      return res.status(200).json({
        ok: true,
        slug: pkg.slug,
        package_source: pkg.source,
        item: {
          id: item.id,
          headline: item.headline,
          so_what: item.so_what,
          source_url: item.source_url,
          impact: typeof item.impact === 'number' ? item.impact : 0,
          date: item.date || null,
        },
        lesson: pkg.lesson,
        // The scene ships whole: the player shows the brief and the
        // public rubric, exactly like the cycle scenes.
        scene: pkg.scene,
      });
    }

    return res.status(400).json({ ok: false, error: 'Unknown action.' });
  } catch (e) {
    console.error('lab-tool failed:', e && e.message);
    return res.status(500).json({ ok: false, error: 'That did not go through — check your connection and try again.' });
  }
};
