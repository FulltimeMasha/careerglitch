// api/_lib/watchdogemail.mjs — the Watchdog card email.
// ---------------------------------------------------------------------------
// After the short entry flow saves a Watchdog lead, the visitor gets
// their full road map by email: profession, AI-Proof Score, the
// one-line reason, and the COMPLETE top-1% checklist — every item with
// its ✅/❗ status and, for the missing ones, a one-line
// "where to get it" plus the free option when there is one — and the
// link back to their Watchdog. Rendered from the VALIDATED profile +
// code-computed score only — the same numbers the page showed, never
// re-typed or model-invented.
//
// renderWatchdogCardEmail({ profession, score, scoreReason, profile,
//                            subjectPrefix })
//   -> { subject, html, text }
// ---------------------------------------------------------------------------

const PINK = '#F92A82';
const DEEP = '#c2185b';
const INK = '#1C1A1F';
const INK2 = '#3a2b4d';
const MUT = '#7a7285';
const PAPER = '#FFFCF6';
const SOFT = '#FFEEF5';

export const WATCHDOG_URL = 'https://careerglitch.com/watchdog';

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

// One line, whole words, for the "where to get it" snippets.
function oneLine(s, max = 150) {
  const t = String(s || '').replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const sp = cut.lastIndexOf(' ');
  return (sp > 40 ? cut.slice(0, sp) : cut).trim() + '…';
}

export function checklistItems(profile) {
  return profile && Array.isArray(profile.top1_profile) ? profile.top1_profile : [];
}

export function topMissingItems(profile, n = 3) {
  return checklistItems(profile).filter((i) => !i.user_has).slice(0, n);
}

export function renderWatchdogCardEmail({ profession, score, scoreReason, profile, subjectPrefix = '' }) {
  const prof = String(profession || 'Your profession');
  const items = checklistItems(profile);
  const subject = `${subjectPrefix}Your ${prof} card — AI-Proof Score ${score}/100`;

  // ---- plain text: the full road map, every item ---------------------
  const roadmapText = items.length
    ? items.map((i, n) => {
        if (i.user_has) return `${n + 1}. ✅ ${i.item}`;
        let line = `${n + 1}. ❗ ${i.item} (+${i.weight} pts)`;
        if (i.how_to_get) line += `\n   Where to get it: ${oneLine(i.how_to_get)}`;
        if (i.free_option) line += `\n   Free way in: ${oneLine(i.free_option)}`;
        return line;
      }).join('\n')
    : 'Your checklist is on its way — open your Watchdog to see it.';
  const text = [
    `Hi — your Watchdog checked ${prof}.`,
    '',
    `AI-PROOF SCORE: ${score}/100`,
    scoreReason || '',
    '',
    'This is the score for a typical ' + prof + ' today. Inside your Watchdog, you make it yours.',
    '',
    'Your full road map — what the top 1% ' + prof + ' has in 2027:',
    roadmapText,
    '',
    'Open your Watchdog any time with this email:',
    WATCHDOG_URL,
    '',
    'Your Watchdog keeps checking your profession every day — new AI tools, grants, jobs and rule changes — and sends one short briefing a week. The first month is free, then $9/month, cancel in one tap.',
    '',
    '— Career Glitch Watchdog ♥',
    'Insurance for your career in the age of AI.',
  ].join('\n');

  // ---- HTML: the full road map, every item ---------------------------
  const roadmapHtml = items.length
    ? items.map((i) => {
        if (i.user_has) {
          return `
      <tr><td style="padding:10px 0;border-bottom:1px solid #eedfe8">
        <div style="font-size:16px;color:${INK}">✅ <strong>${esc(i.item)}</strong></div>
      </td></tr>`;
        }
        return `
      <tr><td style="padding:10px 0;border-bottom:1px solid #eedfe8">
        <div style="font-size:16px;color:${INK}">❗ <strong>${esc(i.item)}</strong> <span style="color:${DEEP};font-size:13px">+${i.weight} pts</span></div>
        ${i.how_to_get ? `<div style="font-size:14.5px;color:${INK2};margin-top:3px">Where to get it: ${esc(oneLine(i.how_to_get))}</div>` : ''}
        ${i.free_option ? `<div style="font-size:14.5px;color:${INK2};margin-top:3px">Free way in: ${esc(oneLine(i.free_option))}</div>` : ''}
      </td></tr>`;
      }).join('')
    : `<tr><td style="padding:10px 0;font-size:15.5px;color:${INK2}">Your checklist is on its way — open your Watchdog to see it.</td></tr>`;

  const html = `<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:${PAPER}">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${PAPER}">
<tr><td align="center" style="padding:28px 16px 36px">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border:1px solid #eedfe8;border-radius:22px">
<tr><td style="padding:30px 30px 8px;text-align:center">
  <div style="font-family:monospace;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:${DEEP}">Career Glitch Watchdog</div>
  <div style="font-size:19px;color:${INK2};margin-top:14px">Your Watchdog checked</div>
  <div style="font-size:26px;font-weight:800;color:${INK}">${esc(prof)}</div>
  <div style="font-size:74px;font-weight:900;line-height:1;color:${INK};margin-top:10px">${score}<span style="font-size:28px;color:${MUT}">/100</span></div>
  <div style="font-family:monospace;font-size:11px;letter-spacing:.14em;color:${MUT};margin-top:4px">YOUR AI-PROOF SCORE</div>
  ${scoreReason ? `<p style="font-size:16.5px;color:${INK2};margin:14px auto 0;max-width:34em">${esc(scoreReason)}</p>` : ''}
  <p style="font-size:14px;color:${MUT};margin:10px auto 0">This is the score for a typical ${esc(prof)} today. Inside your Watchdog, you make it yours.</p>
</td></tr>
<tr><td style="padding:14px 30px 4px">
  <div style="font-family:monospace;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:${DEEP};background:${SOFT};display:inline-block;border-radius:999px;padding:6px 11px">Your full road map</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${roadmapHtml}</table>
</td></tr>
<tr><td style="padding:20px 30px 30px;text-align:center">
  <a href="${WATCHDOG_URL}" style="display:inline-block;background:${PINK};color:#ffffff;font-size:16.5px;font-weight:700;text-decoration:none;border-radius:999px;padding:14px 26px">Open my Watchdog ♥</a>
  <p style="font-size:14.5px;color:${INK2};margin:16px auto 0;max-width:32em">Open it any time with this email. Your Watchdog keeps checking your profession every day and sends one short briefing a week. First month free, then $9/month — cancel in one tap.</p>
  <p style="font-size:13px;color:${MUT};margin:14px 0 0">— Career Glitch Watchdog ♥ Insurance for your career in the age of AI.</p>
</td></tr>
</table>
</td></tr></table>
</body></html>`;

  return { subject, html, text };
}
