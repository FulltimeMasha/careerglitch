// api/watchdog.js — Vercel entry for Career Glitch Watchdog (/watchdog).
// ---------------------------------------------------------------------------
// The Watchdog onboarding is a CHAT with an agent on Muse Spark (Meta
// Model API, via api/_lib/engine/llm.mjs — the same client the mentor
// uses). The agent asks five questions; at the end it returns a strict
// JSON profile which is validated server-side (api/_lib/watchdog.mjs),
// and the AI-Proof Score is computed IN CODE from that profile — the
// model's own score is never used.
//
// Storage: the same Supabase table as every other product on this site,
// public.cg_leads, additive only. A Watchdog signup is one row:
//   recommended = [{ product:'watchdog', kind:'watchdog', prof,
//                    watchdog: <full state: profile, score, radar,
//                    scan info, trial> }]
//   self_role = the profession, current_job = 'watchdog',
//   top1_slug = 'watchdog'. No schema change, no new tables.
//
// Actions (all POST, JSON):
//   { action:'chat',    messages }            -> next agent message
//   { action:'build',   messages }            -> validated profile + state
//   { action:'save',    email, profile }      -> lead row + state
//   { action:'restore', email }               -> latest Watchdog by email
//   { action:'get',     leadId }              -> state for a saved lead
//   { action:'update',  leadId, profile }     -> persists checklist/task
//                                                flips; score recomputed
//                                                on the server
//   { action:'trial',   leadId }              -> records the Stripe
//                                                checkout start on the
//                                                lead (checkout_
//                                                started_at, ends_at,
//                                                provider 'stripe-link')
//                                                and switches the free
//                                                month on
//   { action:'scan',    leadId }              -> radar re-check; answers
//                                                honestly from the
//                                                sourced feed (no live
//                                                search key is configured)
// ---------------------------------------------------------------------------

const ALLOWED_ORIGINS = new Set([
  'https://careerglitch.com',
  'https://www.careerglitch.com',
  'https://pathcheck-cg.vercel.app',
]);

const EMAIL_RE = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']{2,}$/;
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function cors(req, res) {
  const origin = typeof req.headers.origin === 'string' ? req.headers.origin : '';
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    return true;
  }
  return false;
}

function parseBody(req) {
  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  return body && typeof body === 'object' ? body : {};
}

function cleanEmail(v) {
  const email = typeof v === 'string' ? v.trim().toLowerCase() : '';
  return EMAIL_RE.test(email) && email.length <= 254 ? email : '';
}

// Muse Spark reasons by default at effort "high", and reasoning shares
// the output-token budget — long answers were dying at max_output_tokens
// with no text at all (the mentor hit the same thing on Day 1). Ask for
// low-effort reasoning; if a key rejects the reasoning field outright,
// retry once without it.
async function callModel(metaRespond, args) {
  try {
    return await metaRespond({ ...args, reasoning: { effort: 'low' } });
  } catch (e) {
    if (/reasoning/i.test(e && e.message ? e.message : '')) {
      return metaRespond(args);
    }
    throw e;
  }
}

function extractJsonObject(text) {
  if (typeof text !== 'string') return null;
  const a = text.indexOf('{');
  const b = text.lastIndexOf('}');
  if (a < 0 || b <= a) return null;
  try { return JSON.parse(text.slice(a, b + 1)); } catch { return null; }
}

async function fetchLeadRow(cfg, id) {
  const r = await fetch(
    `${cfg.url}/rest/v1/cg_leads?id=eq.${encodeURIComponent(id)}&select=id,email,recommended,created_at`,
    { headers: { apikey: cfg.key, Authorization: `Bearer ${cfg.key}` } }
  );
  if (!r.ok) throw new Error(`lead fetch -> ${r.status}`);
  const rows = await r.json().catch(() => null);
  return Array.isArray(rows) && rows.length ? rows[0] : null;
}

function watchdogRec(row) {
  const rec = row && Array.isArray(row.recommended) ? row.recommended[0] : null;
  if (!rec || rec.product !== 'watchdog' || !rec.watchdog || typeof rec.watchdog !== 'object') return null;
  return rec;
}

// Defensive: the score in a stored state is always recomputed from the
// stored profile before it is shown or returned.
function withFreshScore(WD, state) {
  try { return { ...state, score: WD.computeScore(state.profile) }; } catch { return state; }
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

  const body = parseBody(req);
  const action = typeof body.action === 'string' ? body.action : '';

  try {
    const WD = await import('./_lib/watchdog.mjs');

    // ------------------------------------------------------------- chat
    if (action === 'chat') {
      const messages = Array.isArray(body.messages) ? body.messages.slice(-20) : [];
      const userCount = messages.filter((m) => m && m.role === 'user').length;
      if (userCount >= 5) {
        return res.status(200).json({ ok: true, say: WD.CHAT_CLOSING, chips: [], done: true });
      }
      const fallback = () => {
        const q = WD.CHAT_QUESTIONS[Math.min(userCount, WD.CHAT_QUESTIONS.length - 1)];
        return { ok: true, say: q.say, chips: q.chips, done: false, fallback: true };
      };
      try {
        const { metaRespond, MODELS, sanitizeUserText } = await import('./_lib/engine/llm.mjs');
        const transcript = WD.transcriptToText(messages);
        const input = transcript
          ? `Here is the chat so far:\n${transcript}\n\nReply with the next Watchdog message as the JSON object described in your instructions.`
          : 'The user just opened the chat. Greet them warmly in one line and ask question 1. Reply with the JSON object described in your instructions.';
        const { text } = await callModel(metaRespond, {
          model: MODELS.interview,
          instructions: WD.CHAT_INSTRUCTIONS,
          input,
          maxOutputTokens: 1500,
        });
        const out = extractJsonObject(text);
        if (!out || typeof out.say !== 'string' || !out.say.trim()) return res.status(200).json(fallback());
        const say = sanitizeUserText(out.say, 500);
        const chips = Array.isArray(out.chips)
          ? out.chips.filter((c) => typeof c === 'string').map((c) => sanitizeUserText(c, 40)).filter(Boolean).slice(0, 4)
          : [];
        if (!say) return res.status(200).json(fallback());
        return res.status(200).json({ ok: true, say, chips, done: false });
      } catch (e) {
        console.error('watchdog chat fell back:', e && e.message);
        return res.status(200).json(fallback());
      }
    }

    // ------------------------------------------------------------ build
    if (action === 'build') {
      const messages = Array.isArray(body.messages) ? body.messages.slice(-20) : [];
      const userAnswers = messages.filter((m) => m && m.role === 'user' && typeof m.text === 'string' && m.text.trim());
      if (userAnswers.length < 3) {
        return res.status(400).json({ ok: false, error: 'I still need a few answers before I can check your career — let\u2019s finish the questions.' });
      }
      const { metaRespond, MODELS } = await import('./_lib/engine/llm.mjs');
      const input = `${WD.answersToText(messages)}\n\nBuild the profile JSON now.`;
      let profile = null;
      let lastErrors = '';
      let rawText = '';
      for (let attempt = 0; attempt < 2 && !profile; attempt++) {
        const instructions = attempt === 0
          ? WD.PROFILE_INSTRUCTIONS
          : `${WD.PROFILE_INSTRUCTIONS}\n\nYour previous output failed validation with these errors: ${lastErrors}. Return the corrected JSON only — the full object, every key.`;
        const callInput = attempt === 0 ? input : `The onboarding answers:\n${WD.answersToText(messages)}\n\nYour previous (invalid) output was:\n${rawText.slice(0, 3000)}\n\nReturn the corrected JSON only.`;
        let text = '';
        try {
          ({ text } = await callModel(metaRespond, {
            model: MODELS.interview,
            instructions,
            input: callInput,
            maxOutputTokens: 6000,
          }));
        } catch (e) {
          lastErrors = `model call failed: ${e && e.message ? e.message.slice(0, 160) : 'unknown'}`;
          console.error('watchdog build attempt failed:', lastErrors);
          continue;
        }
        rawText = text;
        const parsed = extractJsonObject(text);
        if (!parsed) { lastErrors = 'output was not a JSON object'; continue; }
        try {
          // The model's radar and score are dropped on purpose: radar
          // comes from the sourced feed, the score is computed in code.
          const { radar: _r, score: _s, ...rest } = parsed;
          profile = WD.validateProfile(rest);
        } catch (e) {
          lastErrors = e.message;
          profile = null;
        }
      }
      if (!profile) {
        console.error('watchdog build failed validation:', lastErrors);
        return res.status(502).json({ ok: false, error: 'My nose glitched on that one — tap Try again and I\u2019ll re-check your career.' });
      }
      const state = WD.buildWatchdogState(profile, new Date().toISOString());
      return res.status(200).json({ ok: true, watchdog: state });
    }

    // ------------------------------------------- store-backed actions
    const { leadStoreConfig, insertLead, updateLead } = await import('./_lib/leads.mjs');
    const cfg = leadStoreConfig();
    if (!cfg) {
      return res.status(503).json({ ok: false, error: 'Saving is not switched on yet.' });
    }

    // ------------------------------------------------------------- save
    if (action === 'save') {
      const email = cleanEmail(body.email);
      if (!email) {
        return res.status(400).json({ ok: false, error: 'That email does not look right — check it and try again.' });
      }
      let profile;
      try {
        profile = WD.validateProfile(body.profile);
      } catch (e) {
        return res.status(400).json({ ok: false, error: 'That career profile did not check out — run the chat once more.' });
      }
      const state = WD.buildWatchdogState(profile, new Date().toISOString());
      const uaHeader = typeof req.headers['user-agent'] === 'string' ? req.headers['user-agent'] : '';
      const ua = /Mobi|Android|iPhone|iPad/i.test(uaHeader) ? 'mobile' : 'desktop';
      const row = {
        name: '',
        email,
        self_role: profile.profession,
        current_job: 'watchdog',
        recommended: [{
          product: 'watchdog',
          kind: 'watchdog',
          prof: WD.professionSlug(profile.profession),
          watchdog: state,
        }],
        top1_slug: 'watchdog',
        ua,
      };
      const leadId = await insertLead(cfg, row);
      return res.status(200).json({ ok: true, lead_id: leadId, watchdog: state });
    }

    // ---------------------------------------------------------- restore
    if (action === 'restore') {
      const email = cleanEmail(body.email);
      if (!email) {
        return res.status(400).json({ ok: false, error: 'That email does not look right — check it and try again.' });
      }
      const r = await fetch(
        `${cfg.url}/rest/v1/cg_leads?email=eq.${encodeURIComponent(email)}&order=created_at.desc&limit=10&select=id,email,recommended,created_at`,
        { headers: { apikey: cfg.key, Authorization: `Bearer ${cfg.key}` } }
      );
      if (!r.ok) return res.status(502).json({ ok: false, error: 'That did not work — try again.' });
      const rows = await r.json().catch(() => null);
      for (const row of Array.isArray(rows) ? rows : []) {
        const rec = watchdogRec(row);
        if (rec) {
          return res.status(200).json({ ok: true, lead_id: row.id, email: row.email || email, watchdog: withFreshScore(WD, rec.watchdog) });
        }
      }
      return res.status(404).json({ ok: false, error: 'No Watchdog is saved for that email yet — run the free check first.' });
    }

    // --------------------------------------- lead-keyed actions (below)
    const leadId = typeof body.leadId === 'string' ? body.leadId : '';
    if (!UUID_RE.test(leadId)) {
      return res.status(400).json({ ok: false, error: 'That Watchdog link is not valid.' });
    }
    const row = await fetchLeadRow(cfg, leadId);
    const rec = watchdogRec(row);
    if (!rec) {
      return res.status(404).json({ ok: false, error: 'That Watchdog could not be found.' });
    }
    const stored = rec.watchdog;

    if (action === 'get') {
      return res.status(200).json({ ok: true, lead_id: row.id, email: row.email || '', watchdog: withFreshScore(WD, stored) });
    }

    if (action === 'update') {
      let next;
      try {
        next = WD.refreshWatchdogState(stored, body.profile, new Date().toISOString());
      } catch (e) {
        return res.status(400).json({ ok: false, error: 'That change did not check out — reload and try again.' });
      }
      const okSave = await updateLead(cfg, leadId, { recommended: [{ ...rec, watchdog: next }] });
      if (!okSave) return res.status(404).json({ ok: false, error: 'That Watchdog could not be found.' });
      return res.status(200).json({ ok: true, watchdog: next });
    }

    if (action === 'trial') {
      // The user clicked through to the Stripe payment link to start
      // the free month. Record the checkout start on the lead — this
      // is what switches trial access on. Payment itself is
      // reconciled later against the link's client_reference_id
      // (= this leadId); there is deliberately no webhook yet.
      if (stored.trial && stored.trial.status === 'active') {
        return res.status(200).json({ ok: true, watchdog: withFreshScore(WD, stored) });
      }
      const now = new Date();
      const ends = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
      const next = {
        ...stored,
        trial: {
          status: 'active',
          started_at: now.toISOString(),
          checkout_started_at: now.toISOString(),
          ends_at: ends.toISOString(),
          provider: 'stripe-link',
        },
        updated_at: now.toISOString(),
      };
      const okSave = await updateLead(cfg, leadId, { recommended: [{ ...rec, watchdog: next }] });
      if (!okSave) return res.status(404).json({ ok: false, error: 'That Watchdog could not be found.' });
      return res.status(200).json({ ok: true, watchdog: withFreshScore(WD, next) });
    }

    if (action === 'scan') {
      const next = {
        ...stored,
        radar: WD.matchRadarFeed(stored.profile.profession),
        scan: { ...stored.scan, last_checked_at: new Date().toISOString() },
        updated_at: new Date().toISOString(),
      };
      const okSave = await updateLead(cfg, leadId, { recommended: [{ ...rec, watchdog: next }] });
      if (!okSave) return res.status(404).json({ ok: false, error: 'That Watchdog could not be found.' });
      return res.status(200).json({
        ok: true,
        watchdog: withFreshScore(WD, next),
        last_scanned: WD.RADAR_FEED_SCANNED_AT,
        mode: next.scan.mode || 'cached-feed',
      });
    }

    return res.status(400).json({ ok: false, error: 'That action is not recognised.' });
  } catch (e) {
    console.error('watchdog failed:', e && e.message);
    return res.status(500).json({ ok: false, error: 'The Watchdog stumbled — try again in a moment.' });
  }
};
