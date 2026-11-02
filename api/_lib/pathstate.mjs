// api/_lib/pathstate.mjs — deterministic game state for the PathCheck
// dashboard. Everything derives from the lead row's recommended[0]:
//
//   progress = {
//     checks:        { stepId: ISO ts },          // the step is done
//     checkDays:     { stepId: 'YYYY-MM-DD' },    // local day it was checked
//     days:          { 'YYYY-MM-DD': count },     // activity per local day
//     phaseBonus:    { '0'|'1'|'2': ISO ts },     // phase completed (+25 XP)
//     questBonus:    { 'YYYY-MM-DD': stepId },    // LEGACY daily-quest bonus
//                                                 // (pre-2026-11-01: granted when
//                                                 // the quest STEP was checked)
//     questDone:     { 'YYYY-MM-DD': questId },   // daily MICRO-quest done (+15 XP)
//     questLog:      [ { date, questId } ],       // quest history, oldest first,
//                                                 // capped at the last 200 — the
//                                                 // DNA strand progress for
//                                                 // quest-fed strands reads this
//     quest:         { date, questId },           // today's offered micro-quest
//                                                 // (pool id from _lib/quests.mjs)
//     badges:        [badgeId],                   // append-only, earned forever
//     radarOpenedAt: ISO ts | null,
//     resumeConfirmed: [stepId]                   // human-confirmed matches
//   }
//   resume = { fileName, uploadedAt, chars, text } | absent
//
// XP is a pure recompute: 10 per check + 25 per phase bonus + 15 per
// daily-quest bonus. Badges are awarded deterministically from state —
// once earned, never removed. No social data, no other users: the game
// is the user vs. their own path.
import { STEP_ORDER, PHASE_STEPS } from './tracksteps.mjs';
import { questIdFor, questIdValid } from './quests.mjs';

export const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export function emptyProgress() {
  return { checks: {}, checkDays: {}, days: {}, phaseBonus: {}, questBonus: {},
           questDone: {}, questLog: [], quest: null, badges: [], radarOpenedAt: null,
           resumeConfirmed: [], lang: 'en' };
}

export function normProgress(p) {
  const base = emptyProgress();
  if (!p || typeof p !== 'object') return base;
  for (const k of ['checks', 'checkDays', 'days', 'phaseBonus', 'questBonus']) {
    if (p[k] && typeof p[k] === 'object' && !Array.isArray(p[k])) base[k] = p[k];
  }
  if (p.questDone && typeof p.questDone === 'object' && !Array.isArray(p.questDone)) {
    for (const [d, qid] of Object.entries(p.questDone)) {
      if (DATE_RE.test(d) && typeof qid === 'string') base.questDone[d] = qid;
    }
  }
  // Quest history for DNA strand progress. Validated entry by entry;
  // capped at the last 200. Legacy rows (questDone but no log yet)
  // synthesize the log from questDone so their history counts too.
  if (Array.isArray(p.questLog)) {
    for (const e of p.questLog) {
      if (e && typeof e === 'object' && DATE_RE.test(e.date || '') && typeof e.questId === 'string' && e.questId.length <= 40) {
        base.questLog.push({ date: e.date, questId: e.questId });
      }
    }
    base.questLog = base.questLog.slice(-200);
  }
  if (!base.questLog.length && Object.keys(base.questDone).length) {
    base.questLog = Object.keys(base.questDone).sort().map(d => ({ date: d, questId: base.questDone[d] })).slice(-200);
  }
  // Today's quest is a pool quest { date, questId }. A legacy stored
  // quest ({ date, stepId } — the old "next track step" quest) is
  // dropped here; ensureQuest re-derives the micro-quest for today.
  if (p.quest && typeof p.quest === 'object' && DATE_RE.test(p.quest.date || '') && typeof p.quest.questId === 'string') {
    base.quest = { date: p.quest.date, questId: p.quest.questId };
  }
  if (Array.isArray(p.badges)) base.badges = p.badges.filter(x => typeof x === 'string');
  if (typeof p.radarOpenedAt === 'string') base.radarOpenedAt = p.radarOpenedAt;
  if (Array.isArray(p.resumeConfirmed)) base.resumeConfirmed = p.resumeConfirmed.filter(x => typeof x === 'string');
  if (p.lang === 'ru' || p.lang === 'en') base.lang = p.lang;
  return base;
}

export function shiftDay(dateStr, delta) {
  const d = new Date(dateStr + 'T12:00:00Z');
  d.setUTCDate(d.getUTCDate() + delta);
  return d.toISOString().slice(0, 10);
}

export function streakOf(days, today) {
  let streak = 0;
  let cursor = today;
  if (!days[cursor]) cursor = shiftDay(cursor, -1); // today not started doesn't break it
  while (days[cursor] > 0) { streak++; cursor = shiftDay(cursor, -1); }
  return streak;
}

// --- Active profession -------------------------------------------------
// Leads made at the new gate (2026-11-01) may carry a TARGET profession
// in rec.personalize.target: the visitor's CURRENT profession was
// checked, but the path leads to the profession they want to become.
// When the target is a built profession different from the checked one,
// the ACTIVE profession is the target — step validation, phase/XP math
// and the quest pool all run on the target's track. Progress identity
// stays on the one lead; leads without a target behave exactly as
// before (active === checked).
export function targetOf(rec) {
  const tg = rec && rec.personalize && typeof rec.personalize === 'object' ? rec.personalize.target : null;
  return (tg && typeof tg === 'object') ? tg : null;
}

export function targetProfOf(rec) {
  const tg = targetOf(rec);
  const p = tg && typeof tg.prof === 'string' ? tg.prof : null;
  return (p && p !== rec.prof && STEP_ORDER[p]) ? p : null;
}

export function activeProfOf(rec) {
  return targetProfOf(rec) || rec.prof;
}

// Step ids a toggle may touch: the checked track's steps UNION the
// target track's steps when a built target is present.
export function validStepsOf(rec) {
  const out = new Set(STEP_ORDER[rec.prof] || []);
  const tp = targetProfOf(rec);
  if (tp) for (const id of STEP_ORDER[tp]) out.add(id);
  return [...out];
}

export function phaseDone(progress, prof, idx) {
  const steps = (PHASE_STEPS[prof] || [])[idx] || [];
  return steps.length > 0 && steps.every(id => progress.checks[id]);
}

export function firstUnchecked(progress, prof) {
  for (const id of STEP_ORDER[prof] || []) if (!progress.checks[id]) return id;
  return null;
}

// Ensure today's quest is set: the day's MICRO-quest from the pool
// (api/_lib/quests.mjs), picked deterministically by date + lead id.
// A quest is never a track step. Mutates + reports change.
export function ensureQuest(progress, prof, today, seed) {
  if (progress.quest && progress.quest.date === today && questIdValid(prof, progress.quest.questId)) return false;
  progress.quest = { date: today, questId: questIdFor(prof, seed, today) };
  return true;
}

export function xpOf(progress, prof) {
  let phases = 0;
  for (let i = 0; i < 3; i++) if (phaseDone(progress, prof, i)) phases++;
  // Daily-quest XP: legacy questBonus days (earned by checking the old
  // step-quest) and new questDone days both count, once per day.
  const questDays = new Set([...Object.keys(progress.questBonus || {}), ...Object.keys(progress.questDone || {})]);
  return 10 * Object.keys(progress.checks).length
       + 25 * phases
       + 15 * questDays.size;
}

export function pctOf(progress, prof) {
  const total = (STEP_ORDER[prof] || []).length;
  if (!total) return 0;
  const done = (STEP_ORDER[prof] || []).filter(id => progress.checks[id]).length;
  return Math.round((done / total) * 100);
}

// Award any newly-earned badges. Returns the new badge ids, in shelf order.
export function awardBadges(rec, progress, today) {
  const prof = rec.prof;
  const have = new Set(progress.badges);
  const earned = [];
  const give = (id) => { if (!have.has(id)) { have.add(id); earned.push(id); } };
  const checksN = Object.keys(progress.checks).length;
  if (checksN >= 1) give('first-step');
  for (let i = 0; i < 3; i++) if (phaseDone(progress, prof, i)) give('phase-' + (i + 1));
  const pct = pctOf(progress, prof);
  if (pct >= 50) give('halfway');
  if (pct >= 100) give('full-path');
  const streak = streakOf(progress.days, today);
  if (streak >= 3) give('streak-3');
  if (streak >= 7) give('streak-7');
  if (progress.radarOpenedAt) give('radar-reader');
  if (rec.resume && rec.resume.text) give('resume-loaded');
  if (progress.resumeConfirmed.length >= 3) give('proof-hunter');
  progress.badges = [...have];
  return earned;
}

// The client-facing state bundle.
export function publicState(rec, progress, today) {
  return {
    checks: progress.checks,
    days: progress.days,
    xp: xpOf(progress, rec.prof),
    pct: pctOf(progress, rec.prof),
    streak: streakOf(progress.days, today),
    badges: progress.badges,
    quest: progress.quest,
    questBonusToday: !!((progress.questDone && progress.questDone[today]) || progress.questBonus[today]),
    questDone: progress.questDone || {},
    questLog: progress.questLog || [],
    resumeConfirmed: progress.resumeConfirmed,
    radarOpened: !!progress.radarOpenedAt,
    lang: progress.lang || 'en',
  };
}
