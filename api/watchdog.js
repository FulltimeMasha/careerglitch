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
//   { action:'chat',    messages, mode?, profession? }
//                                             -> next agent message.
//                                                mode 'personalize' runs
//                                                the post-payment 4-
//                                                question variant
//   { action:'build',   messages }            -> validated profile + state
//   { action:'card',    profession, email, test? }
//                                             -> SHORT entry (2026-11-03
//                                                evening): profession
//                                                profile (cached per
//                                                profession in cg_leads
//                                                as product 'watchdog-
//                                                profile' rows), lead
//                                                saved, card emailed
//   { action:'personalize-build', leadId, messages }
//                                             -> post-payment onboarding:
//                                                maps the user's answers
//                                                onto their stored
//                                                profession checklist
//                                                (trial must be active)
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

// ---------------------------------------------------------------------------
// Profession-profile cache. The short entry flow profiles a PROFESSION,
// not a person, so one validated generation serves every visitor with
// that profession. The cache lives in cg_leads itself (additive): one
// row per profession with a synthetic email and product
// 'watchdog-profile'. These rows are NOT users — anything counting
// users/leads must exclude product='watchdog-profile' rows (and the
// watchdog-cache+*@careerglitch.com emails).
// ---------------------------------------------------------------------------

const CARD_FROM = 'Career Glitch <path@careerglitch.com>';

function cacheEmailForSlug(slug) {
  return `watchdog-cache+${slug}@careerglitch.com`;
}

async function fetchCachedProfile(cfg, WD, slug) {
  const r = await fetch(
    `${cfg.url}/rest/v1/cg_leads?email=eq.${encodeURIComponent(cacheEmailForSlug(slug))}&order=created_at.asc&limit=5&select=id,email,recommended,created_at`,
    { headers: { apikey: cfg.key, Authorization: `Bearer ${cfg.key}` } }
  );
  if (!r.ok) return null;
  const rows = await r.json().catch(() => null);
  for (const row of Array.isArray(rows) ? rows : []) {
    const rec = row && Array.isArray(row.recommended) ? row.recommended[0] : null;
    if (rec && rec.product === 'watchdog-profile' && rec.profile) {
      try { return WD.validateProfile(rec.profile); } catch { /* stale shape — regenerate */ }
    }
  }
  return null;
}

async function generateProfessionProfile(WD, professionRaw) {
  const { metaRespond, MODELS } = await import('./_lib/engine/llm.mjs');
  const input = `The profession to profile: ${professionRaw}\n\nBuild the profession profile JSON now.`;
  let profile = null;
  let lastErrors = '';
  let rawText = '';
  for (let attempt = 0; attempt < 2 && !profile; attempt++) {
    const instructions = attempt === 0
      ? WD.PROFESSION_PROFILE_INSTRUCTIONS
      : `${WD.PROFESSION_PROFILE_INSTRUCTIONS}\n\nYour previous output failed validation with these errors: ${lastErrors}. Return the corrected JSON only — the full object, every key.`;
    const callInput = attempt === 0
      ? input
      : `The profession to profile: ${professionRaw}\n\nYour previous (invalid) output was:\n${rawText.slice(0, 3000)}\n\nReturn the corrected JSON only.`;
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
      continue;
    }
    rawText = text;
    const parsed = extractJsonObject(text);
    if (!parsed) { lastErrors = 'output was not a JSON object'; continue; }
    try {
      const { radar: _r, score: _s, ...rest } = parsed;
      profile = WD.validateProfile(WD.professionRawToBaseline(rest));
      // Profession baselines carry the full top-1% structure: 12–16
      // items, every DNA strand present, weights summing to 100.
      const problems = WD.professionProfileProblems(profile);
      if (problems.length) throw new Error(problems.join('; '));
    } catch (e) {
      lastErrors = e.message;
      profile = null;
    }
  }
  if (!profile) throw new Error(`profession profile failed validation: ${lastErrors}`);
  return profile;
}

async function getOrGenerateProfessionProfile(cfg, WD, professionRaw, insertLeadFn) {
  const cached = await fetchCachedProfile(cfg, WD, WD.professionSlug(professionRaw)).catch(() => null);
  if (cached) return { profile: cached, source: 'cache' };
  const profile = await generateProfessionProfile(WD, professionRaw);
  try {
    const slug = WD.professionSlug(profile.profession);
    await insertLeadFn(cfg, {
      name: '',
      email: cacheEmailForSlug(slug),
      self_role: profile.profession,
      current_job: 'watchdog-profile',
      recommended: [{ product: 'watchdog-profile', kind: 'profile-cache', prof: slug, profile }],
      top1_slug: 'watchdog-profile',
      ua: 'desktop',
    });
  } catch (e) {
    console.error('watchdog profile cache store failed:', e && e.message);
  }
  return { profile, source: 'generated' };
}

// Send the card email (same Resend pattern as api/send-mini.js) and
// record the outcome on the lead as recommended[0].cardEmail. NEVER
// throws: the visitor's flow does not depend on email delivery.
async function sendWatchdogCardEmail(cfg, MAIL, updateLeadFn, leadId, rec, email, state, isTest) {
  let cardEmail;
  const apiKey = typeof process.env.RESEND_API_KEY === 'string' ? process.env.RESEND_API_KEY : '';
  if (!apiKey) {
    cardEmail = { status: 'queued', reason: 'no-key', at: new Date().toISOString() };
  } else {
    try {
      const mail = MAIL.renderWatchdogCardEmail({
        profession: state.profile.profession,
        score: state.score,
        scoreReason: state.score_reason,
        profile: state.profile,
        subjectPrefix: isTest ? '[Watchdog test] ' : '',
      });
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: CARD_FROM,
          to: [email],
          subject: mail.subject,
          html: mail.html,
          text: mail.text,
          tags: [{ name: 'product', value: 'watchdog-card' }],
        }),
      });
      if (!r.ok) {
        const t = await r.text().catch(() => '');
        cardEmail = { status: 'failed', at: new Date().toISOString(), error: `resend ${r.status}: ${t.slice(0, 140)}` };
      } else {
        const out = await r.json().catch(() => ({}));
        cardEmail = { status: 'sent', at: new Date().toISOString(), id: out.id || null, via: 'resend' };
      }
    } catch (e) {
      cardEmail = { status: 'failed', at: new Date().toISOString(), error: String(e && e.message ? e.message : 'send failed').slice(0, 160) };
    }
  }
  try {
    await updateLeadFn(cfg, leadId, { recommended: [{ ...rec, cardEmail }] });
  } catch { /* recording is best-effort */ }
  return cardEmail;
}

// Defensive: what the client is shown is always the VIEW of the stored
// state — the effective Score (profile score + news adjustment + done
// news-task points) recomputed from the stored profile, with the
// merged display task list (checklist tasks + news tasks). The stored
// state itself keeps the canonical profile; see api/_lib/watchdog.mjs.
function withFreshScore(WD, state) {
  try { return WD.viewWatchdogState(state); } catch { return state; }
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
    const MAIL = await import('./_lib/watchdogemail.mjs');

    // ------------------------------------------------------------- chat
    if (action === 'chat') {
      const personalize = body.mode === 'personalize';
      const messages = Array.isArray(body.messages) ? body.messages.slice(-20) : [];
      const userCount = messages.filter((m) => m && m.role === 'user').length;
      const limit = personalize ? 4 : 5;
      if (userCount >= limit) {
        return res.status(200).json({
          ok: true,
          say: personalize ? WD.PERSONAL_CHAT_CLOSING : WD.CHAT_CLOSING,
          chips: [],
          done: true,
        });
      }
      const questions = personalize ? WD.PERSONAL_CHAT_QUESTIONS : WD.CHAT_QUESTIONS;
      const fallback = () => {
        const q = questions[Math.min(userCount, questions.length - 1)];
        return { ok: true, say: q.say, chips: q.chips, done: false, fallback: true };
      };
      try {
        const { metaRespond, MODELS, sanitizeUserText } = await import('./_lib/engine/llm.mjs');
        const transcript = WD.transcriptToText(messages);
        const opening = personalize
          ? 'The user just started the personal check-in. Greet them warmly in one line and ask question 1. Reply with the JSON object described in your instructions.'
          : 'The user just opened the chat. Greet them warmly in one line and ask question 1. Reply with the JSON object described in your instructions.';
        const input = transcript
          ? `Here is the chat so far:\n${transcript}\n\nReply with the next Watchdog message as the JSON object described in your instructions.`
          : opening;
        const { text } = await callModel(metaRespond, {
          model: MODELS.interview,
          instructions: personalize ? WD.personalChatInstructions(body.profession) : WD.CHAT_INSTRUCTIONS,
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

    // ------------------------------------------------------------- card
    // The SHORT entry: one profession + one email -> the card. The
    // profile is a profession baseline (cached per profession), the
    // lead is saved exactly like a chat signup, and the card is emailed
    // as a copy (best effort — the flow never depends on the send).
    if (action === 'card') {
      const email = cleanEmail(body.email);
      if (!email) {
        return res.status(400).json({ ok: false, error: 'That email does not look right — check it and try again.' });
      }
      const { sanitizeUserText } = await import('./_lib/engine/llm.mjs');
      const professionRaw = sanitizeUserText(typeof body.profession === 'string' ? body.profession : '', 60);
      if (professionRaw.length < 2) {
        return res.status(400).json({ ok: false, error: 'Tell me which profession to check first.' });
      }
      let got;
      try {
        got = await getOrGenerateProfessionProfile(cfg, WD, professionRaw, insertLead);
      } catch (e) {
        console.error('watchdog card profile failed:', e && e.message);
        return res.status(502).json({ ok: false, error: 'My nose glitched on that one — try again in a moment.' });
      }
      // A new card starts from the profession BASELINE: the cached
      // profile's checklist already carries user_has := typical_has
      // (see professionRawToBaseline) — the visitor starts from the
      // typical practitioner's claimed set and Score, and makes it
      // theirs via flips and personalization.
      const profile = got.profile;
      const state = WD.buildWatchdogState(profile, new Date().toISOString());
      const uaHeader = typeof req.headers['user-agent'] === 'string' ? req.headers['user-agent'] : '';
      const ua = /Mobi|Android|iPhone|iPad/i.test(uaHeader) ? 'mobile' : 'desktop';
      const rec = {
        product: 'watchdog',
        kind: 'watchdog',
        prof: WD.professionSlug(profile.profession),
        watchdog: state,
        ...(body.test === true ? { test: true } : {}),
      };
      const row = {
        name: '',
        email,
        self_role: profile.profession,
        current_job: 'watchdog',
        recommended: [rec],
        top1_slug: 'watchdog',
        ua,
      };
      const leadId = await insertLead(cfg, row);
      const cardEmail = await sendWatchdogCardEmail(cfg, MAIL, updateLead, leadId, rec, email, state, body.test === true);
      return res.status(200).json({
        ok: true,
        lead_id: leadId,
        watchdog: state,
        profile_source: got.source,
        email_status: cardEmail.status,
      });
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

    if (action === 'resume-scan') {
      // The résumé file was parsed in the browser; only its TEXT is
      // sent here, and the text itself is never stored — the model
      // maps evidence onto the lead's existing checklist ids, every
      // mark is validated (id exists + quote appears verbatim in the
      // text), and only the evidence quotes are kept on the state.
      // The flips themselves go through the normal 'update' action
      // from the client, exactly like a manual flip.
      const { sanitizeUserText } = await import('./_lib/engine/llm.mjs');
      const text = sanitizeUserText(typeof body.text === 'string' ? body.text : '', 12000);
      if (text.trim().length < 50) {
        return res.status(400).json({ ok: false, error: 'That file gave us almost no text to read — try a TXT copy, or a résumé with more detail.' });
      }
      const { metaRespond, MODELS } = await import('./_lib/engine/llm.mjs');
      const checklistContext = (stored.profile.top1_profile || []).map((i) => ({ id: i.id, item: i.item }));
      const input = `The profession: ${stored.profile.profession}\n\nThe checklist (mark ONLY these ids):\n${JSON.stringify(checklistContext)}\n\nThe résumé text:\n${text}\n\nReturn the marks JSON now.`;
      let marks = null;
      let lastErrors = '';
      let rawText = '';
      for (let attempt = 0; attempt < 2 && !marks; attempt++) {
        const instructions = attempt === 0
          ? WD.RESUME_SCAN_INSTRUCTIONS
          : `${WD.RESUME_SCAN_INSTRUCTIONS}\n\nYour previous output failed validation: ${lastErrors}. Return the corrected JSON only.`;
        let out = '';
        try {
          ({ text: out } = await callModel(metaRespond, {
            model: MODELS.interview,
            instructions,
            input: attempt === 0 ? input : `${input}\n\nYour previous (invalid) output was:\n${rawText.slice(0, 2000)}\n\nReturn the corrected JSON only.`,
            maxOutputTokens: 2500,
          }));
        } catch (e) {
          lastErrors = `model call failed: ${e && e.message ? e.message.slice(0, 160) : 'unknown'}`;
          continue;
        }
        rawText = out;
        const parsed = extractJsonObject(out);
        if (!parsed || !Array.isArray(parsed.marks)) { lastErrors = 'output was not the marks JSON'; continue; }
        marks = WD.validateResumeMarks(parsed, stored.profile, text);
      }
      if (!marks) {
        console.error('watchdog resume-scan failed:', lastErrors);
        return res.status(502).json({ ok: false, error: 'My nose glitched reading that — try the résumé once more.' });
      }
      // Keep only the evidence quotes on the state (never the text).
      try {
        const evidence = { ...((stored && stored.resume_evidence) || {}) };
        for (const m of marks) evidence[m.id] = m.evidence;
        const next = { ...stored, resume_evidence: evidence, updated_at: new Date().toISOString() };
        await updateLead(cfg, leadId, { recommended: [{ ...rec, watchdog: next }] });
      } catch { /* evidence keeping is best-effort; the marks still return */ }
      return res.status(200).json({ ok: true, marks });
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
      return res.status(200).json({ ok: true, watchdog: withFreshScore(WD, next) });
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

    if (action === 'personalize-build') {
      // Post-payment onboarding: the user's own answers mapped onto the
      // stored profession checklist. The free month must be on — that
      // is the moment this chat belongs to.
      if (!stored.trial || stored.trial.status !== 'active') {
        return res.status(403).json({ ok: false, error: 'The personal check-in opens with your free month — start it first, then come back.' });
      }
      const messages = Array.isArray(body.messages) ? body.messages.slice(-20) : [];
      const userAnswers = messages.filter((m) => m && m.role === 'user' && typeof m.text === 'string' && m.text.trim());
      if (userAnswers.length < 3) {
        return res.status(400).json({ ok: false, error: 'I still need a few answers before I can make your Score yours — let\u2019s finish the questions.' });
      }
      const { metaRespond, MODELS } = await import('./_lib/engine/llm.mjs');
      const checklistContext = (stored.profile.top1_profile || []).map((i) => ({
        id: i.id, item: i.item, category: i.category, weight: i.weight,
        typical_has: i.typical_has === true, how_to_get: i.how_to_get, free_option: i.free_option,
      }));
      const input = `The profession: ${stored.profile.profession}\n\nThe existing profession checklist (keep these items exactly — same ids, items, weights, how_to_get, free_option, typical_has):\n${JSON.stringify(checklistContext)}\n\nThe user\u2019s answers:\n${WD.personalAnswersToText(messages)}\n\nBuild the personalized profile JSON now.`;
      let profile = null;
      let lastErrors = '';
      let rawText = '';
      for (let attempt = 0; attempt < 2 && !profile; attempt++) {
        const instructions = attempt === 0
          ? WD.PERSONALIZE_INSTRUCTIONS
          : `${WD.PERSONALIZE_INSTRUCTIONS}\n\nYour previous output failed validation with these errors: ${lastErrors}. Return the corrected JSON only — the full object, every key, the checklist items unchanged except user_has.`;
        const callInput = attempt === 0 ? input : `${input}\n\nYour previous (invalid) output was:\n${rawText.slice(0, 3000)}\n\nReturn the corrected JSON only.`;
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
          continue;
        }
        rawText = text;
        const parsed = extractJsonObject(text);
        if (!parsed) { lastErrors = 'output was not a JSON object'; continue; }
        try {
          const { radar: _r, score: _s, ...rest } = parsed;
          profile = WD.validatePersonalizedProfile(rest, stored.profile);
        } catch (e) {
          lastErrors = e.message;
          profile = null;
        }
      }
      if (!profile) {
        console.error('watchdog personalize failed validation:', lastErrors);
        return res.status(502).json({ ok: false, error: 'My nose glitched on that one — tap Try again and I\u2019ll re-check with your answers.' });
      }
      const next = {
        ...stored,
        profile,
        score_reason: profile.score_reason,
        radar: WD.matchRadarFeed(profile.profession),
        updated_at: new Date().toISOString(),
      };
      // The news component survives personalization via the spread of
      // the stored state; the Score stays the effective one.
      next.score = WD.effectiveScore(next);
      const okSave = await updateLead(cfg, leadId, { recommended: [{ ...rec, watchdog: next }] });
      if (!okSave) return res.status(404).json({ ok: false, error: 'That Watchdog could not be found.' });
      return res.status(200).json({
        ok: true,
        watchdog: withFreshScore(WD, next),
        baseline_score: stored.baseline && typeof stored.baseline.score === 'number' ? stored.baseline.score : null,
      });
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
