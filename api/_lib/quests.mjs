// api/_lib/quests.mjs — the daily-quest pools for the PathCheck
// dashboard. A daily quest is a MICRO-ACTION: 5–15 minutes, doable
// today, never a track step (no degrees, licenses, exams, jobs).
// The big multi-month moves live on the track and on the big-goal
// card — the quest is the small check that keeps the streak alive.
//
// The server owns ONLY the ids + the daily pick. The text lives in
// the client data (QUESTS in tracks.js) in the same order: pool index
// i <-> id '<prof>-q<i+1>'. Keep the two in sync when editing pools.
//
// Pick: deterministic by (date + lead id). The day number grows by 1
// each day, so the same lead never gets the same quest two days in a
// row; the lead hash spreads different leads across the pool.

export const QUEST_POOL = {
  law:     ['law-q1', 'law-q2', 'law-q3', 'law-q4', 'law-q5', 'law-q6', 'law-q7', 'law-q8', 'law-q9', 'law-q10'],
  cpa:     ['cpa-q1', 'cpa-q2', 'cpa-q3', 'cpa-q4', 'cpa-q5', 'cpa-q6', 'cpa-q7', 'cpa-q8', 'cpa-q9', 'cpa-q10'],
  nurse:   ['nurse-q1', 'nurse-q2', 'nurse-q3', 'nurse-q4', 'nurse-q5', 'nurse-q6', 'nurse-q7', 'nurse-q8', 'nurse-q9', 'nurse-q10'],
  fin:     ['fin-q1', 'fin-q2', 'fin-q3', 'fin-q4', 'fin-q5', 'fin-q6', 'fin-q7', 'fin-q8', 'fin-q9', 'fin-q10'],
  creator: ['creator-q1', 'creator-q2', 'creator-q3', 'creator-q4', 'creator-q5', 'creator-q6', 'creator-q7', 'creator-q8', 'creator-q9', 'creator-q10'],
  analyst: ['analyst-q1', 'analyst-q2', 'analyst-q3', 'analyst-q4', 'analyst-q5', 'analyst-q6', 'analyst-q7', 'analyst-q8', 'analyst-q9', 'analyst-q10'],
  dataanalyst: ['dataanalyst-q1', 'dataanalyst-q2', 'dataanalyst-q3', 'dataanalyst-q4', 'dataanalyst-q5', 'dataanalyst-q6', 'dataanalyst-q7', 'dataanalyst-q8', 'dataanalyst-q9', 'dataanalyst-q10'],
  businessanalyst: ['businessanalyst-q1', 'businessanalyst-q2', 'businessanalyst-q3', 'businessanalyst-q4', 'businessanalyst-q5', 'businessanalyst-q6', 'businessanalyst-q7', 'businessanalyst-q8', 'businessanalyst-q9', 'businessanalyst-q10'],
  aicreator: ['aicreator-q1', 'aicreator-q2', 'aicreator-q3', 'aicreator-q4', 'aicreator-q5', 'aicreator-q6', 'aicreator-q7', 'aicreator-q8', 'aicreator-q9', 'aicreator-q10'],
  healthadmin: ['healthadmin-q1', 'healthadmin-q2', 'healthadmin-q3', 'healthadmin-q4', 'healthadmin-q5', 'healthadmin-q6', 'healthadmin-q7', 'healthadmin-q8', 'healthadmin-q9', 'healthadmin-q10'],
  datascientist: ['datascientist-q1', 'datascientist-q2', 'datascientist-q3', 'datascientist-q4', 'datascientist-q5', 'datascientist-q6', 'datascientist-q7', 'datascientist-q8', 'datascientist-q9', 'datascientist-q10'],
  truckdriver: ['truckdriver-q1', 'truckdriver-q2', 'truckdriver-q3', 'truckdriver-q4', 'truckdriver-q5', 'truckdriver-q6', 'truckdriver-q7', 'truckdriver-q8', 'truckdriver-q9', 'truckdriver-q10'],
  counselor: ['counselor-q1', 'counselor-q2', 'counselor-q3', 'counselor-q4', 'counselor-q5', 'counselor-q6', 'counselor-q7', 'counselor-q8', 'counselor-q9', 'counselor-q10'],
  electrician: ['electrician-q1', 'electrician-q2', 'electrician-q3', 'electrician-q4', 'electrician-q5', 'electrician-q6', 'electrician-q7', 'electrician-q8', 'electrician-q9', 'electrician-q10'],
  hvac: ['hvac-q1', 'hvac-q2', 'hvac-q3', 'hvac-q4', 'hvac-q5', 'hvac-q6', 'hvac-q7', 'hvac-q8', 'hvac-q9', 'hvac-q10'],
  plumber: ['plumber-q1', 'plumber-q2', 'plumber-q3', 'plumber-q4', 'plumber-q5', 'plumber-q6', 'plumber-q7', 'plumber-q8', 'plumber-q9', 'plumber-q10'],
  cybersecurity: ['cybersecurity-q1', 'cybersecurity-q2', 'cybersecurity-q3', 'cybersecurity-q4', 'cybersecurity-q5', 'cybersecurity-q6', 'cybersecurity-q7', 'cybersecurity-q8', 'cybersecurity-q9', 'cybersecurity-q10'],
  aipm: ['aipm-q1', 'aipm-q2', 'aipm-q3', 'aipm-q4', 'aipm-q5', 'aipm-q6', 'aipm-q7', 'aipm-q8', 'aipm-q9', 'aipm-q10'],
};

function dayNumber(dateStr) {
  const ms = Date.parse(dateStr + 'T00:00:00Z');
  return Number.isFinite(ms) ? Math.floor(ms / 86400000) : 0;
}

function seedOf(seed) {
  const s = String(seed || '');
  let h = 2166136261; // FNV-1a
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function questIdFor(prof, seed, dateStr) {
  const pool = QUEST_POOL[prof] || [];
  if (!pool.length) return null;
  const idx = ((dayNumber(dateStr) + seedOf(seed)) % pool.length + pool.length) % pool.length;
  return pool[idx];
}

export function questIdValid(prof, questId) {
  return (QUEST_POOL[prof] || []).indexOf(questId) !== -1;
}
