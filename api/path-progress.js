// api/path-progress.js — Vercel entry for the PathCheck dashboard.
// ---------------------------------------------------------------------------
// The dashboard (/app) is keyed by the cg_leads row id created by
// POST /api/pathcheck-lead. ALL game state lives inside that row:
//   recommended[0].progress — checks, days, quest, badges (see
//   api/_lib/pathstate.mjs; XP is a deterministic recompute:
//   10/check + 25/completed phase + 15/daily-quest bonus).
//   recommended[0].resume   — written by api/path-resume.js.
// No new tables, no schema change.
//
// Safety rule (founder brief): only rows whose recommended[0].product is
// 'pathcheck' may be read or written here — verified server-side on
// every call. Mentor rows are never touched by this endpoint.
//
//   GET  /api/path-progress?lead=<uuid>&d=<YYYY-MM-DD client-local>
//        -> { ok, lead:{…,createdAt,sub}, progress:{checks,days,xp,pct,
//             streak,badges,quest,questBonusToday,questDone,questLog,
//             resumeConfirmed, radarOpened}, resume:{fileName,uploadedAt,
//             chars,text}|null }
//
// Active profession (2026-11-01): when recommended[0].personalize.target
// names a built profession different from the checked one, the path
// works on the TARGET's track — toggle validation accepts the union of
// both tracks' steps, phase/XP math and the daily quest run on the
// target (see activeProfOf in _lib/pathstate.mjs). lead.createdAt and
// lead.sub (recommended[0].sub, e.g. {status:'active'}) ride along for
// the dashboard's freemium-week logic; enforcement is client-side for
// the pilot.
//   POST /api/path-progress { action:'toggle', leadId, stepId, done,
//                             clientDate, confirmResume? }
//   POST /api/path-progress { action:'quest', leadId, clientDate }
//        — completes today's MICRO-quest (a small 5–15 min action from
//          the pool in _lib/quests.mjs; +15 XP). Never checks a step.
//   POST /api/path-progress { action:'unquest', leadId, clientDate }
//        — undoes that day's micro-quest completion (founder ruling
//          2026-11-01: reading a quest must never complete it, and a
//          completion must be reversible). Removes the questDone entry,
//          its questLog entry and the quest's activity-day count; XP is
//          a pure recompute, so the +15 drops out on its own. Badges
//          are append-only by design and are NOT revoked.
//   POST /api/path-progress { action:'radar', leadId, clientDate }
//   POST /api/path-progress { action:'lang', leadId, lang:'en'|'ru' }
//        — dashboard language preference, stored in progress.lang.
//   POST /api/path-progress { action:'share', leadId, via }
//        — free Full Report unlock (founder ruling, 2026-11-01): the
//        share ITSELF unlocks the report; no referral completion is
//        counted or required. Stamps recommended[0].reportFree =
//        { via:'share'|'intent'|'download', at } once (first share
//        wins). GET returns lead.reportFree alongside lead.sub.
//        -> { ok, progress, events:{phaseCompletedIdx, questBonusEarned,
//             newBadges} } (toggle only)
// ---------------------------------------------------------------------------

const ALLOWED_ORIGINS = new Set([
  'https://careerglitch.com',
  'https://www.careerglitch.com',
  'https://pathcheck-cg.vercel.app',
]);

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

async function fetchLead(cfg, id) {
  const r = await fetch(
    `${cfg.url}/rest/v1/cg_leads?id=eq.${encodeURIComponent(id)}&select=id,email,recommended,created_at`,
    { headers: { apikey: cfg.key, Authorization: `Bearer ${cfg.key}` } }
  );
  if (!r.ok) throw new Error(`lead fetch -> ${r.status}`);
  const rows = await r.json().catch(() => null);
  return Array.isArray(rows) && rows.length ? rows[0] : null;
}

function pathcheckPayload(row) {
  const rec = row && Array.isArray(row.recommended) ? row.recommended[0] : null;
  if (!rec || rec.product !== 'pathcheck') return null;
  return rec;
}

function resumeOut(rec) {
  if (!rec.resume || typeof rec.resume !== 'object' || typeof rec.resume.text !== 'string') return null;
  return {
    fileName: rec.resume.fileName || 'resume',
    uploadedAt: rec.resume.uploadedAt || null,
    chars: rec.resume.chars || rec.resume.text.length,
    text: rec.resume.text,
  };
}

module.exports = async (req, res) => {
  const corsOk = cors(req, res);
  if (req.method === 'OPTIONS') {
    if (corsOk) {
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Access-Control-Max-Age', '86400');
    }
    return res.status(204).end();
  }
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'GET or POST only.' });
  }

  try {
    const { leadStoreConfig, updateLead } = await import('./_lib/leads.mjs');
    const PS = await import('./_lib/pathstate.mjs');
    const cfg = leadStoreConfig();
    if (!cfg) return res.status(503).json({ ok: false, error: 'Progress saving is not switched on yet.' });

    const todayOf = (v) => (typeof v === 'string' && PS.DATE_RE.test(v)) ? v : new Date().toISOString().slice(0, 10);

    if (req.method === 'GET') {
      const leadId = typeof req.query?.lead === 'string' ? req.query.lead : '';
      if (!UUID_RE.test(leadId)) return res.status(400).json({ ok: false, error: 'That path link does not look right.' });
      const today = todayOf(req.query?.d);
      const row = await fetchLead(cfg, leadId);
      const rec = row && pathcheckPayload(row);
      if (!rec) return res.status(404).json({ ok: false, error: 'We could not find that path.' });
      const progress = PS.normProgress(rec.progress);
      const aprof = PS.activeProfOf(rec);
      const arec = aprof === rec.prof ? rec : { ...rec, prof: aprof };
      const questChanged = PS.ensureQuest(progress, aprof, today, leadId);
      const newBadges = PS.awardBadges(arec, progress, today);
      if (questChanged || newBadges.length) {
        await updateLead(cfg, leadId, { recommended: [{ ...rec, progress }] });
      }
      return res.status(200).json({
        ok: true,
        lead: {
          id: row.id,
          email: row.email || null,
          kind: rec.kind || null,
          prof: rec.prof || null,
          seat: rec.seat || null,
          typed: rec.typed || null,
          personalize: rec.personalize || null,
          createdAt: row.created_at || null,
          sub: rec.sub || null,
          reportFree: rec.reportFree || null,
        },
        progress: PS.publicState(arec, progress, today),
        resume: resumeOut(rec),
      });
    }

    // POST
    let body = req.body;
    if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
    if (!body || typeof body !== 'object') body = {};
    const leadId = typeof body.leadId === 'string' ? body.leadId : '';
    if (!UUID_RE.test(leadId)) return res.status(400).json({ ok: false, error: 'That path link does not look right.' });
    const today = todayOf(body.clientDate);
    const row = await fetchLead(cfg, leadId);
    const rec = row && pathcheckPayload(row);
    if (!rec) return res.status(404).json({ ok: false, error: 'We could not find that path.' });
    const progress = PS.normProgress(rec.progress);
    const aprof = PS.activeProfOf(rec);
    const arec = aprof === rec.prof ? rec : { ...rec, prof: aprof };
    PS.ensureQuest(progress, aprof, today, leadId);
    const events = { phaseCompletedIdx: [], questBonusEarned: false, questBonusRemoved: false, newBadges: [], reportFreeSet: false };

    if (body.action === 'quest') {
      // Complete today's micro-quest ONLY: +15 XP and an activity day
      // (streak fuel). No track step is ever checked by the quest.
      if (progress.quest && progress.quest.date === today && progress.quest.questId
          && !progress.questDone[today] && !progress.questBonus[today]) {
        progress.questDone[today] = progress.quest.questId;
        // DNA strand progress reads the quest history: one entry per
        // day, capped at the last 200 (normProgress re-validates).
        progress.questLog = (progress.questLog || []).filter(e => e && e.date !== today);
        progress.questLog.push({ date: today, questId: progress.quest.questId });
        if (progress.questLog.length > 200) progress.questLog = progress.questLog.slice(-200);
        progress.days[today] = (progress.days[today] || 0) + 1;
        events.questBonusEarned = true;
      }
    } else if (body.action === 'unquest') {
      // Undo that day's micro-quest completion: the exact inverse of
      // action 'quest'. XP is recomputed from state (xpOf counts
      // questDone days), so removing the entry removes the +15.
      // Badges stay: awardBadges is append-only ("once earned, never
      // removed" — see _lib/pathstate.mjs), so an earned badge is
      // never revoked by an undo; the streak IS derived from days[],
      // so it re-derives honestly from the remaining activity.
      const qid = progress.questDone[today];
      if (qid) {
        delete progress.questDone[today];
        progress.questLog = (progress.questLog || []).filter(e => !(e && e.date === today && e.questId === qid));
        if (progress.days[today]) {
          progress.days[today] -= 1;
          if (progress.days[today] <= 0) delete progress.days[today];
        }
        events.questBonusRemoved = true;
      }
    } else if (body.action === 'share') {
      // Free Full Report unlock: a completed share action in the gate
      // share box stamps the lead once. Additive field riding on
      // recommended[0] (written by the shared updateLead below).
      if (!rec.reportFree || typeof rec.reportFree !== 'object') {
        const via = ['share', 'intent', 'download'].includes(body.via) ? body.via : 'share';
        rec.reportFree = { via, at: new Date().toISOString() };
        events.reportFreeSet = true;
      }
    } else if (body.action === 'lang') {
      progress.lang = body.lang === 'ru' ? 'ru' : 'en';
    } else if (body.action === 'radar') {
      if (!progress.radarOpenedAt) progress.radarOpenedAt = new Date().toISOString();
    } else {
      // toggle (default action) — valid steps are the UNION of the
      // checked track and (when present) the target track; phase math
      // runs on the ACTIVE track.
      const stepId = typeof body.stepId === 'string' ? body.stepId : '';
      const validSteps = PS.validStepsOf(rec);
      if (!validSteps.includes(stepId)) {
        return res.status(400).json({ ok: false, error: 'That step is not on the track.' });
      }
      const done = body.done === true;
      const wasChecked = !!progress.checks[stepId];
      const phasesBefore = [0, 1, 2].map(i => PS.phaseDone(progress, aprof, i));

      if (done && !wasChecked) {
        progress.checks[stepId] = new Date().toISOString();
        progress.checkDays[stepId] = today;
        progress.days[today] = (progress.days[today] || 0) + 1;
        if (body.confirmResume === true && rec.resume && rec.resume.text && !progress.resumeConfirmed.includes(stepId)) {
          progress.resumeConfirmed.push(stepId);
        }
      } else if (!done && wasChecked) {
        const day = progress.checkDays[stepId];
        delete progress.checks[stepId];
        delete progress.checkDays[stepId];
        if (day && progress.days[day]) {
          progress.days[day] -= 1;
          if (progress.days[day] <= 0) delete progress.days[day];
        }
        if (progress.questBonus[day] === stepId) delete progress.questBonus[day];
        progress.resumeConfirmed = progress.resumeConfirmed.filter(id => id !== stepId);
      }

      const phasesAfter = [0, 1, 2].map(i => PS.phaseDone(progress, aprof, i));
      phasesAfter.forEach((doneNow, i) => { if (doneNow && !phasesBefore[i]) events.phaseCompletedIdx.push(i); });
      phasesAfter.forEach((doneNow, i) => {
        if (doneNow && !progress.phaseBonus[i]) progress.phaseBonus[i] = new Date().toISOString();
      });
    }

    events.newBadges = PS.awardBadges(arec, progress, today);
    const patched = await updateLead(cfg, leadId, { recommended: [{ ...rec, progress }] });
    if (!patched) return res.status(404).json({ ok: false, error: 'We could not find that path.' });
    return res.status(200).json({ ok: true, progress: PS.publicState(arec, progress, today), events, reportFree: rec.reportFree || null, email: row.email || null });
  } catch (e) {
    console.error('path-progress failed:', e && e.message);
    return res.status(500).json({ ok: false, error: 'That did not save — try again.' });
  }
};
