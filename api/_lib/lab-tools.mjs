// api/_lib/lab-tools.mjs — the radar -> Lab pipeline for NEW TOOLS.
// ---------------------------------------------------------------------------
// When the Watchdog radar catches a NEW TOOL for a profession (a feed
// item tagged kind:'tool' — see api/_lib/watchdog-radar.mjs), the Lab
// grows a learning package for it:
//
//   LESSON — what the tool is, what it changes in the daily work,
//            what it automates vs what the human now does, and how to
//            work with it. BOUND TO THE SOURCE ITEM: the lesson may
//            only use the item's headline / so_what / source link plus
//            generic profession practice — no invented features,
//            prices, dates or claims.
//   SCENE  — a playable Lab scene in the same schema as the cycle
//            scenes (api/_lib/lab-scenes-bookkeeper.mjs), whose work
//            is to USE / SUPERVISE the tool: review what it drafted,
//            catch the planted error, approve / fix / escalate. The
//            scene's own scenario numbers are the simulator's fiction
//            (like every Lab scene), and its rubric checks them
//            exactly. Tool scenes are STANDALONE: they never join the
//            10-scene cycle and never touch the graduate record.
//
// A package is generated ONCE per radar item and cached in cg_leads
// (same pattern as the profession profiles): one row with the
// synthetic email lab-tool+<item>@careerglitch.com and product
// 'lab-tool'. These rows are NOT users — anything counting users or
// leads must exclude product='lab-tool' rows. Generation is strict
// JSON via Muse Spark with the same repair-retry discipline as the
// profession profiles: an unparseable or invalid package is never
// cached — the caller gets an error and may retry later.
// ---------------------------------------------------------------------------

import { RADAR_FEEDS } from './watchdog-radar.mjs';
import { RADAR_EXTRA_ITEMS } from './watchdog-radar-extra.mjs';

function str(v, max) {
  if (typeof v !== 'string') return '';
  return v.replace(/[<>\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}

function strList(v, min, max, itemMax) {
  if (!Array.isArray(v)) return null;
  const out = v.map((x) => str(x, itemMax)).filter(Boolean);
  if (out.length < min || out.length > max) return null;
  return out;
}

// ---------------------------------------------------------------------
// Feed lookup
// ---------------------------------------------------------------------

// Find a radar item by id across the base feeds and the weekly-cycle
// extras. Returns { item, match } or null. `match` is the profession
// match-key list the feed uses.
export function findRadarItem(itemId) {
  if (typeof itemId !== 'string' || !itemId) return null;
  for (const feed of RADAR_FEEDS) {
    for (const item of feed.items) {
      if (item.id === itemId) return { item, match: feed.match };
    }
  }
  for (const item of RADAR_EXTRA_ITEMS) {
    if (item.id === itemId) return { item, match: Array.isArray(item.match) ? item.match : [] };
  }
  return null;
}

// Profession slug from a feed match-key list (mirrors the slugs the
// profile cache uses: bookkeeper / realtor / graphic-designer).
export function slugFromMatch(match) {
  const keys = Array.isArray(match) ? match : [];
  if (keys.some((k) => /book/i.test(k))) return 'bookkeeper';
  if (keys.some((k) => /realtor|real estate/i.test(k))) return 'realtor';
  if (keys.some((k) => /design/i.test(k))) return 'graphic-designer';
  return keys.length ? keys[0].toLowerCase().replace(/\s+/g, '-') : 'general';
}

// ---------------------------------------------------------------------
// Cache (cg_leads rows, product 'lab-tool')
// ---------------------------------------------------------------------

export function toolCacheEmail(itemId) {
  let local = String(itemId || '').toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '');
  if (local.length > 46) {
    // Deterministic short hash so long ids still fit an email local part.
    let h = 0;
    for (let i = 0; i < local.length; i += 1) h = ((h * 31) + local.charCodeAt(i)) >>> 0;
    local = `${local.slice(0, 38)}-${h.toString(16).padStart(6, '0')}`;
  }
  return `lab-tool+${local}@careerglitch.com`;
}

async function sbGet(cfg, path) {
  const r = await fetch(`${cfg.url}/rest/v1/${path}`, {
    headers: { apikey: cfg.key, Authorization: `Bearer ${cfg.key}` },
  });
  if (!r.ok) throw new Error(`lab-tool store read -> ${r.status}`);
  const t = await r.text();
  return t ? JSON.parse(t) : [];
}

const recOf = (row) => (row && Array.isArray(row.recommended) ? row.recommended[0] : null) || null;

// The cached package for one radar item, or null. A cached package is
// re-validated on the way out — a stale shape is treated as missing
// (and regenerated) rather than served broken.
export async function fetchToolPackage(cfg, itemId) {
  const rows = await sbGet(cfg,
    `cg_leads?email=eq.${encodeURIComponent(toolCacheEmail(itemId))}&select=id,recommended,created_at&order=created_at.asc&limit=5`
  );
  for (const row of Array.isArray(rows) ? rows : []) {
    const rec = recOf(row);
    if (rec && rec.product === 'lab-tool' && rec.item_id === itemId && rec.lesson && rec.scene) {
      const pkg = validateToolPackage({ lesson: rec.lesson, scene: rec.scene }, { id: itemId });
      if (pkg) return { ...pkg, slug: rec.slug || null, generated_at: rec.generated_at || null, cached: true };
    }
  }
  return null;
}

// The set of radar item ids that already have a Lab package cached.
export async function toolPackageIds(cfg) {
  const rows = await sbGet(cfg, `cg_leads?top1_slug=eq.lab-tool&select=recommended&limit=500`);
  const ids = new Set();
  for (const row of Array.isArray(rows) ? rows : []) {
    const rec = recOf(row);
    if (rec && rec.product === 'lab-tool' && typeof rec.item_id === 'string') ids.add(rec.item_id);
  }
  return ids;
}

// Compact profession context for generation: the cached profession
// profile's name + checklist (ids and labels), when one exists.
export async function fetchProfessionContext(cfg, slug) {
  try {
    const rows = await sbGet(cfg,
      `cg_leads?email=eq.${encodeURIComponent(`watchdog-cache+${slug}@careerglitch.com`)}&select=recommended&limit=1`
    );
    const rec = rows.length ? recOf(rows[0]) : null;
    const profile = rec && rec.profile ? rec.profile : null;
    if (!profile) return { profession: slug, checklist: [] };
    return {
      profession: typeof profile.profession === 'string' ? profile.profession : slug,
      checklist: (Array.isArray(profile.top1_profile) ? profile.top1_profile : [])
        .map((it) => ({ id: String(it.id || ''), item: String(it.item || '') }))
        .filter((it) => it.id),
    };
  } catch {
    return { profession: slug, checklist: [] };
  }
}

// ---------------------------------------------------------------------
// Generation (strict JSON, repair-retry, validated before caching)
// ---------------------------------------------------------------------

export const TOOL_PACKAGE_INSTRUCTIONS = [
  'You build ONE Lab learning package for a new AI tool that just entered a profession\'s stack. A radar item about the tool is your ONLY source about the tool itself.',
  '',
  'HARD RULES:',
  '- About the tool, use ONLY the facts in the radar item (headline + summary) given below. Never invent features, prices, dates, integrations, company claims or statistics that the item does not state.',
  '- The LESSON explains the tool to a working practitioner of the profession: what it is, what changes in their daily work, which tasks the tool takes over, what the human now does instead (operate it, verify its output, handle exceptions, own the client relationship), and 3-5 concrete "how to work with it" points. Tie the change directly to the item\'s summary.',
  '- The SCENE is a simulation, like a flight simulator: a fictional workplace scenario in which the practitioner must USE or SUPERVISE this tool and catch what it got wrong. The scenario\'s client, numbers and documents are the simulator\'s own practice material (invent them, concretely — like a training exercise), and the rubric must check those exact numbers. The scene must never present its invented scenario as facts about the real tool or a real company.',
  '- The scene persona is a manager or client who has adopted the tool and is handing the junior the tool\'s first real output to review before it goes out / posts.',
  '- Rubric: 4-6 lines, each one objectively checkable from the artifact against the scenario\'s exact figures and facts. Numbers in the rubric must be computed correctly from the setup.',
  '- Plain, direct English. No hype. No "AI is amazing" filler. The junior is an adult learning to stay valuable.',
  '',
  'Return ONLY a JSON object — no markdown fences, no prose — in exactly this shape:',
  '{"lesson":{"title":"...","what_it_is":"...","what_changes":"...","automates":["..."],"human_does":["..."],"how_to":["..."]},"scene":{"title":"...","from_name":"...","from_role":"...","setup":"...","pressure":"...","task":"...","answer_hint":"...","rubric":["..."],"artifact":"...","proof":"..."}}',
  'Field rules: lesson.title = the tool\'s name + what the lesson teaches, max 120 chars. what_it_is = 1-2 sentences, only source facts. what_changes = 2-3 sentences tied to the source summary. automates = 2-5 short items (tasks the source says the tool now does). human_does = 2-5 short items (the human\'s new work). how_to = 3-5 concrete working points. scene.from_name = a first name; from_role = e.g. "Marcus, your manager at the firm" style (name + role). scene.setup = the scenario with every exact number the rubric checks. scene.pressure = one complication that lands mid-work. scene.task = the deliverable, precisely. scene.answer_hint = the expected shape/length. scene.artifact = the deliverable\'s name. scene.proof = one factual sentence for the graduate record describing what the junior did (no praise words).',
].join('\n');

function extractJsonObject(text) {
  if (typeof text !== 'string') return null;
  const a = text.indexOf('{');
  const b = text.lastIndexOf('}');
  if (a < 0 || b <= a) return null;
  try { return JSON.parse(text.slice(a, b + 1)); } catch { return null; }
}

// Strictly validate a generated (or cached) package. Returns the
// normalized { lesson, scene } or null. The scene is normalized into
// the exact shape the Lab player + grader use; its id and tool flags
// are set HERE, never by the model.
export function validateToolPackage(raw, item) {
  if (!raw || typeof raw !== 'object') return null;
  const L = raw.lesson;
  const S = raw.scene;
  if (!L || typeof L !== 'object' || !S || typeof S !== 'object') return null;
  const lesson = {
    title: str(L.title, 140),
    what_it_is: str(L.what_it_is, 700),
    what_changes: str(L.what_changes, 900),
    automates: strList(L.automates, 2, 5, 220),
    human_does: strList(L.human_does, 2, 5, 220),
    how_to: strList(L.how_to, 3, 5, 260),
  };
  if (!lesson.title || !lesson.what_it_is || !lesson.what_changes || !lesson.automates || !lesson.human_does || !lesson.how_to) return null;
  const rubric = strList(S.rubric, 3, 6, 400);
  const scene = {
    id: `tool-${item.id}`,
    tool: true,
    item_id: item.id,
    checklist_id: null,
    title: str(S.title, 160),
    from_name: str(S.from_name, 40),
    from_role: str(S.from_role, 120),
    setup: str(S.setup, 2400),
    pressure: str(S.pressure, 900),
    task: str(S.task, 1400),
    answer_hint: str(S.answer_hint, 500),
    rubric: rubric || [],
    artifact: str(S.artifact, 160),
    proof: str(S.proof, 400),
  };
  if (!scene.title || !scene.from_name || !scene.from_role || !scene.setup || !scene.task || !scene.artifact || !rubric) return null;
  return { lesson, scene };
}

export async function generateToolPackage(item, context) {
  const { metaRespond, MODELS } = await import('./engine/llm.mjs');
  const checklist = (context && Array.isArray(context.checklist) ? context.checklist : [])
    .map((it) => `- ${it.id}: ${it.item}`)
    .join('\n');
  const input = [
    `THE PROFESSION: ${context && context.profession ? context.profession : 'the profession'}`,
    checklist ? `\nThe profession's top-1% checklist (for orientation only — the scene does not need to map to an item):\n${checklist}` : '',
    '\nTHE RADAR ITEM (your only source about the tool):',
    `Headline: ${item.headline}`,
    `Published: ${item.date || 'n/a'}`,
    `What it means (from our radar): ${item.so_what}`,
    `Source: ${item.source_url}`,
    '\nBuild the Lab package JSON now.',
  ].join('\n');

  let pkg = null;
  let lastErrors = '';
  let rawText = '';
  for (let attempt = 0; attempt < 2 && !pkg; attempt += 1) {
    const instructions = attempt === 0
      ? TOOL_PACKAGE_INSTRUCTIONS
      : `${TOOL_PACKAGE_INSTRUCTIONS}\n\nYour previous output failed validation: ${lastErrors}. Return the corrected JSON only — the full object, every key.`;
    const callInput = attempt === 0
      ? input
      : `${input}\n\nYour previous (invalid) output was:\n${rawText.slice(0, 3000)}\n\nReturn the corrected JSON only.`;
    let text = '';
    try {
      ({ text } = await metaRespond({
        model: MODELS.interview,
        instructions,
        input: callInput,
        maxOutputTokens: 5000,
        reasoning: { effort: 'low' },
      }));
    } catch (e) {
      lastErrors = `model call failed: ${e && e.message ? e.message.slice(0, 160) : 'unknown'}`;
      continue;
    }
    rawText = text;
    const parsed = extractJsonObject(text);
    if (!parsed) { lastErrors = 'output was not a JSON object'; continue; }
    pkg = validateToolPackage(parsed, item);
    if (!pkg) lastErrors = 'package failed field validation (missing/short fields, bad rubric, or wrong shape)';
  }
  if (!pkg) throw new Error(`tool package generation failed validation: ${lastErrors}`);
  return pkg;
}

// Cache-first: returns the package for a tool-tagged radar item,
// generating + caching it on first need. Throws for unknown items and
// for items that are not tool-tagged.
export async function getOrGenerateToolPackage(cfg, itemId, insertLeadFn) {
  const found = findRadarItem(itemId);
  if (!found) throw new Error(`unknown radar item: ${itemId}`);
  const { item, match } = found;
  if (item.kind !== 'tool') throw new Error(`radar item is not a tool item: ${itemId}`);
  const slug = slugFromMatch(match);

  const cached = await fetchToolPackage(cfg, itemId).catch(() => null);
  if (cached) return { ...cached, item, slug, source: 'cache' };

  const context = await fetchProfessionContext(cfg, slug);
  const pkg = await generateToolPackage(item, context);
  const generated_at = new Date().toISOString();
  try {
    await insertLeadFn(cfg, {
      name: '',
      email: toolCacheEmail(itemId),
      self_role: context.profession || slug,
      current_job: 'lab-tool',
      recommended: [{
        product: 'lab-tool',
        kind: 'tool-package',
        item_id: itemId,
        slug,
        item: {
          headline: item.headline,
          so_what: item.so_what,
          source_url: item.source_url,
          impact: item.impact,
          date: item.date,
        },
        lesson: pkg.lesson,
        scene: pkg.scene,
        generated_at,
      }],
      top1_slug: 'lab-tool',
      ua: null,
    });
  } catch (e) {
    // Caching is best-effort (same posture as the profile cache): a
    // failed store still returns the generated package for this call.
    console.error('lab-tool cache store failed:', e && e.message);
  }
  return { ...pkg, item, slug, generated_at, source: 'generated' };
}
