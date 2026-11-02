// api/_lib/miniemails.mjs — the PathCheck mini-report emails.
// ---------------------------------------------------------------------------
// Founder decision (2026-11-01): the gate form "Send me this map + the
// full-report link" becomes TRUE. After a visitor saves a check, they get
// a real email: (1) the MINI version of their check — verdict, the 3
// facts, the door — with the exact digits the gate showed (data comes
// from ./minidata.mjs, GENERATED from the gate's own data — never
// retype a number here); (2) the Full Report offer; (3) the "Become
// top 1%" service story with the link into their path.
//
// Full Report price: $5 (founder decision 2026-11-01, replaces $19).
// FULL_REPORT_URL is the founder's real Stripe payment link for the
// "PathCheck Full Report" product (provided 2026-11-01, live-verified:
// $5.00, one-time). When the render context knows the lead, the lead
// rides along as Stripe's client_reference_id + prefilled_email
// params (fullReportUrlFor) so a payment ties back to that exact
// person — the same params the gate appends.
//
// renderMiniEmail({ kind, prof, seat, typed, name, leadId })
//   kind: 'seat' | 'grid' | 'waitlist'   (mirrors cg_leads kinds)
//   -> { subject, html, text }
// miniInputForLead(row) maps a cg_leads row to that input (or null).
// ---------------------------------------------------------------------------
import { PROFS, GRIDS, GV11, QUOTES } from './minidata.mjs';
import { SEATS } from './minidata-seats.mjs';
import { V11 } from './minidata-v11.mjs';

export const FULL_REPORT_URL = 'https://buy.stripe.com/4gM7sKaCF1Mt22IcUXeEo0t';

// The report link for one render: bare FULL_REPORT_URL when no lead is
// known (previews, identity-less renders); with the lead's id + email
// as Stripe params when the render context has them.
export function fullReportUrlFor(input) {
  const id = input && (input.leadId || input.id);
  const email = input && input.email;
  const parts = [];
  if (id) parts.push('client_reference_id=' + encodeURIComponent(id));
  if (email) parts.push('prefilled_email=' + encodeURIComponent(email));
  if (!parts.length) return FULL_REPORT_URL;
  return FULL_REPORT_URL + (FULL_REPORT_URL.includes('?') ? '&' : '?') + parts.join('&');
}
export const FULL_REPORT_PRICE = '$5';
export const GATE_URL = 'https://careerglitch.com/';
export const APP_BASE = 'https://careerglitch.com/app';

export const FOUNDER_APPEAL = '🥹 I\'m a girl solo founder, trying to grow this project. Your support will help me make something great. If you don\'t have the money — share this in your socials and get it free.';

const PINK = '#F92A82';
const INK = '#17122B';
const PAPER = '#FFFCF6';
const SOFT = '#FFEEF5';
const BUTTER = '#F0E6CF';
const FONT = "Outfit, 'Segoe UI', Arial, sans-serif";

/* ---------- text helpers ---------- */

const ENTITIES = {
  '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'",
  '&rsquo;': '’', '&lsquo;': '‘', '&ldquo;': '“', '&rdquo;': '”',
  '&nbsp;': ' ', '&middot;': '·', '&hellip;': '…',
};
export function decodeEntities(s) {
  return String(s || '').replace(/&[a-z#0-9]+;/gi, (m) => ENTITIES[m] || ENTITIES[m.toLowerCase()] || m);
}
export function stripHtml(s) {
  return decodeEntities(String(s || '').replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, ''))
    .replace(/\s+/g, ' ').trim();
}
// Gate inline HTML -> email-safe inline HTML (pink spans / bold become strong).
export function emailHtml(s) {
  return String(s || '')
    .replace(/<span class="pink">/g, `<strong style="color:${PINK}">`)
    .replace(/<\/span>/g, '</strong>')
    .replace(/<b>/g, '<strong>').replace(/<\/b>/g, '</strong>');
}
function esc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function humanLine(short) {
  if (!short) return '';
  const t = stripHtml(short);
  const c = t.charAt(0).toUpperCase() + t.slice(1);
  return c.endsWith('.') ? c : c + '.';
}
// Headline -> plain-words verdict clause for the subject line:
// "BOOKKEEPER — NO AS YOUR FINAL STOP." -> "NO as your final stop"
function verdictClause(head) {
  const plain = stripHtml(head);
  const idx = plain.indexOf('—');
  let rest = (idx >= 0 ? plain.slice(idx + 1) : plain).trim().replace(/\.$/, '');
  const firstSentence = rest.split(/(?<=\.)\s+/)[0].replace(/\.$/, '');
  let out = firstSentence.toLowerCase().replace(/\b(yes|no)\b/g, (m) => m.toUpperCase());
  out = out.charAt(0).toUpperCase() + out.slice(1);
  return out;
}
function shortLabel(label) {
  return stripHtml(label).split('—')[0].trim();
}
function capSubject(s, max = 97) {
  if (s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')) + '…';
}

/* ---------- shared blocks ---------- */

function fullReportBlockHtml(input) {
  return `<div style="background:${BUTTER};border-radius:16px;padding:20px;margin:26px 0;">
  <div style="font-size:19px;font-weight:800;margin-bottom:8px;">Want even more?</div>
  <p style="margin:0 0 14px;font-size:15px;line-height:1.55;">The Full Report shows what you still need for this job. It compares you with what employers really ask for. Then it gives you a step-by-step plan for the next 12 months. It uses the same job posts as this check.</p>
  <a href="${fullReportUrlFor(input)}" style="display:inline-block;background:linear-gradient(135deg,#F92A82,#FF8CBE);color:#ffffff;text-decoration:none;font-weight:800;font-size:16px;border-radius:999px;padding:12px 24px;">Get the Full Report — ${FULL_REPORT_PRICE}</a>
  <p style="margin:14px 0 0;font-size:14px;line-height:1.55;">${esc(FOUNDER_APPEAL)}</p>
  <p style="margin:8px 0 0;font-size:13px;line-height:1.5;color:#5b5470;">Share your card — and the Full Report is free.</p>
</div>`;
}
function fullReportBlockText(input) {
  return [
    'WANT EVEN MORE?',
    'The Full Report shows what you still need for this job. It compares you with what employers really ask for. Then it gives you a step-by-step plan for the next 12 months. It uses the same job posts as this check.',
    `Get the Full Report — ${FULL_REPORT_PRICE}: ${fullReportUrlFor(input)}`,
    FOUNDER_APPEAL,
    'Share your card — and the Full Report is free.',
  ].join('\n');
}

function serviceBlockHtml(appUrl, waitlist, typed) {
  const lines = waitlist
    ? [
        'Your answer is just the start.',
        `Your dashboard is already open. It keeps an eye on “${esc(typed || 'your profession')}” while we research it. When your answer is ready, your plan opens there.`,
        'Inside is the Become Top 1% service. It helps you grow into the best 1% in your field. You get small tasks every day. It also watches the job market for you.',
        'First week free. Then $9/month. Cancel any time.',
      ]
    : [
        'This answer is the start, not the end.',
        'The Become Top 1% service turns it into a daily plan. It leads you to the best 1% in this field. You do one small task a day.',
        'It also watches the job market for your work. So your plan always stays fresh. You’ve got this!',
        'First week free. Then $9/month. Cancel any time.',
      ];
  return `<div style="margin:26px 0;">
  <div style="font-size:19px;font-weight:800;margin-bottom:8px;">Your path to the top 1%</div>
  ${lines.map((l) => `<p style="margin:0 0 8px;font-size:15px;line-height:1.55;">${l}</p>`).join('')}
  <a href="${appUrl}" style="display:inline-block;background:${INK};color:#ffffff;text-decoration:none;font-weight:800;font-size:16px;border-radius:999px;padding:12px 24px;margin-top:6px;">${waitlist ? 'Follow the research →' : 'Open my path →'}</a>
</div>`;
}
function serviceBlockText(appUrl, waitlist, typed) {
  const lines = waitlist
    ? [
        'Your answer is just the start.',
        `Your dashboard is already open. It keeps an eye on "${typed || 'your profession'}" while we research it. When your answer is ready, your plan opens there.`,
        'Inside is the Become Top 1% service. It helps you grow into the best 1% in your field. You get small tasks every day. It also watches the job market for you.',
        'First week free. Then $9/month. Cancel any time.',
        `Follow the research: ${appUrl}`,
      ]
    : [
        'This answer is the start, not the end.',
        'The Become Top 1% service turns it into a daily plan. It leads you to the best 1% in this field. You do one small task a day.',
        'It also watches the job market for your work. So your plan always stays fresh. You’ve got this!',
        'First week free. Then $9/month. Cancel any time.',
        `Open my path: ${appUrl}`,
      ];
  return ['YOUR PATH TO THE TOP 1%', ...lines].join('\n');
}

function footerHtml(next) {
  return `<div style="border-top:1px solid #eee2ee;margin-top:30px;padding-top:14px;font-size:12.5px;line-height:1.6;color:#8a84a0;">
  <div style="font-weight:700;color:#5b5470;">PathCheck · Know before you pay for it.</div>
  ${next ? `<div>${esc(stripHtml(next))}</div>` : ''}
  <div>You got this email because you did a free PathCheck at careerglitch.com.</div>
</div>`;
}
function footerText(next) {
  const lines = ['—', 'PathCheck · Know before you pay for it.'];
  if (next) lines.push(stripHtml(next));
  lines.push('You got this email because you did a free PathCheck at careerglitch.com.');
  return lines.join('\n');
}

function wrapHtml(kick, inner) {
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;background:${PAPER};">
<div style="max-width:560px;margin:0 auto;padding:26px 18px 34px;font-family:${FONT};color:${INK};">
<div style="font-size:12px;letter-spacing:2.5px;font-weight:800;color:${PINK};margin-bottom:16px;">PATHCHECK · ${esc(String(kick || '').toUpperCase())}</div>
${inner}
</div></body></html>`;
}

/* ---------- variants ---------- */

function renderSeat({ prof, seat, name, leadId, email }) {
  const P = PROFS[prof], st = SEATS[seat], v = V11[seat] || {}, Q = QUOTES[prof];
  const appUrl = `${APP_BASE}#${leadId}`;
  const subject = capSubject(`${shortLabel(st.label)}: ${verdictClause(st.head)} — your map`);
  const factsHtml = st.facts.map(([lab, val]) =>
    `<div style="margin-bottom:12px;"><div style="font-size:11.5px;letter-spacing:1.6px;font-weight:700;color:#8a84a0;text-transform:uppercase;">${esc(stripHtml(lab))}</div><div style="font-size:16.5px;line-height:1.45;">${emailHtml(val)}</div></div>`).join('');
  const inner = `
${name ? `<p style="margin:0 0 10px;font-size:15px;">Hi ${esc(name)},</p>` : ''}
<div style="font-size:25px;line-height:1.25;font-weight:800;">${emailHtml(st.head)}</div>
${v.hook ? `<p style="margin:12px 0 0;font-size:16px;font-weight:700;color:${PINK};">${esc(stripHtml(v.hook))}</p>` : ''}
${v.conf ? `<p style="margin:8px 0 0;font-size:13px;color:#8a84a0;">How sure we are: ${esc(v.conf)}</p>` : ''}
<p style="margin:14px 0 0;font-size:15.5px;line-height:1.6;"><strong>In simple words:</strong> ${esc(humanLine(st.short))}</p>
<div style="background:${SOFT};border-radius:16px;padding:16px 18px 6px;margin:18px 0;">${factsHtml}</div>
${Q ? `<div style="border-left:3px solid ${PINK};padding:2px 0 2px 14px;margin:18px 0;font-size:15px;line-height:1.6;font-style:italic;">“${esc(stripHtml(Q.q))}”<div style="font-style:normal;font-size:13px;color:#8a84a0;margin-top:6px;">— ${esc(stripHtml(Q.by))}</div></div>` : ''}
<p style="margin:0;font-size:15.5px;line-height:1.6;">${emailHtml(st.door)}</p>
${v.coe ? `<p style="margin:12px 0 0;font-size:14px;line-height:1.55;color:#5b5470;">${esc(stripHtml(v.coe))}</p>` : ''}
${fullReportBlockHtml({ leadId, email })}
${serviceBlockHtml(appUrl, false)}
${footerHtml(v.next || (GV11[prof] && GV11[prof].next))}`;
  const factsText = st.facts.map(([lab, val]) => `${stripHtml(lab)}: ${stripHtml(val)}`).join('\n');
  const text = [
    name ? `Hi ${name},` : 'Hi,',
    '',
    stripHtml(st.head),
    v.hook ? stripHtml(v.hook) : null,
    v.conf ? `How sure we are: ${v.conf}` : null,
    '',
    `In simple words: ${humanLine(st.short)}`,
    '',
    factsText,
    Q ? `\n"${stripHtml(Q.q)}" — ${stripHtml(Q.by)}` : null,
    '',
    stripHtml(st.door),
    v.coe ? stripHtml(v.coe) : null,
    '',
    fullReportBlockText({ leadId, email }),
    '',
    serviceBlockText(appUrl, false),
    '',
    footerText(v.next || (GV11[prof] && GV11[prof].next)),
  ].filter((x) => x !== null && x !== '').join('\n');
  return { subject, html: wrapHtml(P.kick, inner), text };
}

function renderGrid({ prof, name, leadId, email }) {
  const P = PROFS[prof], G = GRIDS[prof], gv = GV11[prof] || {}, Q = QUOTES[prof];
  const appUrl = `${APP_BASE}#${leadId}`;
  const subject = capSubject(`${P.kick}: ${stripHtml(gv.hook || G.head)} — your map`);
  const rowsHtml = G.rows.map(([label, verdict, desc]) => {
    const yes = verdict.indexOf('YES') === 0;
    return `<div style="padding:10px 0;border-bottom:1px solid #f3e2ef;"><span style="display:inline-block;font-size:12px;font-weight:800;color:#ffffff;background:${yes ? '#1d9e75' : PINK};border-radius:999px;padding:3px 10px;margin-right:8px;">${esc(stripHtml(verdict))}</span><strong style="font-size:15.5px;">${esc(stripHtml(label))}</strong><div style="font-size:14px;color:#5b5470;margin-top:3px;">${esc(stripHtml(desc))}</div></div>`;
  }).join('');
  const inner = `
${name ? `<p style="margin:0 0 10px;font-size:15px;">Hi ${esc(name)},</p>` : ''}
<div style="font-size:25px;line-height:1.25;font-weight:800;">${emailHtml(G.head)}</div>
${gv.hook ? `<p style="margin:12px 0 0;font-size:16px;font-weight:700;color:${PINK};">${esc(stripHtml(gv.hook))}</p>` : ''}
<p style="margin:14px 0 0;font-size:15.5px;line-height:1.6;"><strong>In simple words:</strong> ${esc(humanLine(G.short))}</p>
<p style="margin:12px 0 0;font-size:15px;line-height:1.6;">${esc(stripHtml(G.sub))}</p>
<div style="margin:16px 0;">${rowsHtml}</div>
<p style="margin:0;font-size:15.5px;line-height:1.6;"><strong>Where the money is:</strong> ${emailHtml(G.corner)}</p>
${Q ? `<div style="border-left:3px solid ${PINK};padding:2px 0 2px 14px;margin:18px 0;font-size:15px;line-height:1.6;font-style:italic;">“${esc(stripHtml(Q.q))}”<div style="font-style:normal;font-size:13px;color:#8a84a0;margin-top:6px;">— ${esc(stripHtml(Q.by))}</div></div>` : ''}
${fullReportBlockHtml({ leadId, email })}
${serviceBlockHtml(appUrl, false)}
${footerHtml(gv.next)}`;
  const rowsText = G.rows.map(([label, verdict, desc]) => `- ${stripHtml(label)} — ${stripHtml(verdict)}: ${stripHtml(desc)}`).join('\n');
  const text = [
    name ? `Hi ${name},` : 'Hi,',
    '',
    stripHtml(G.head),
    gv.hook ? stripHtml(gv.hook) : null,
    '',
    `In simple words: ${humanLine(G.short)}`,
    stripHtml(G.sub),
    '',
    rowsText,
    '',
    `Where the money is: ${stripHtml(G.corner)}`,
    Q ? `\n"${stripHtml(Q.q)}" — ${stripHtml(Q.by)}` : null,
    '',
    fullReportBlockText({ leadId, email }),
    '',
    serviceBlockText(appUrl, false),
    '',
    footerText(gv.next),
  ].filter((x) => x !== null && x !== '').join('\n');
  return { subject, html: wrapHtml(P.kick, inner), text };
}

function renderWaitlist({ typed, name, leadId }) {
  const appUrl = `${APP_BASE}#${leadId}`;
  const t = stripHtml(typed || 'your profession');
  const subject = capSubject(`We’re checking “${t}” for you`);
  const clusters = Object.keys(PROFS).filter((k) => k !== 'analyst').map((k) => {
    const G = GRIDS[k];
    return { kick: PROFS[k].kick, head: stripHtml(G.head) };
  });
  const listHtml = clusters.map((c) =>
    `<div style="padding:9px 0;border-bottom:1px solid #f3e2ef;"><strong style="font-size:15.5px;">${esc(c.kick)}</strong><div style="font-size:14px;color:#5b5470;margin-top:2px;">${esc(c.head)}</div></div>`).join('');
  const inner = `
${name ? `<p style="margin:0 0 10px;font-size:15px;">Hi ${esc(name)},</p>` : ''}
<div style="font-size:25px;line-height:1.25;font-weight:800;">“${esc(t)}” is being checked right now.</div>
<p style="margin:14px 0 0;font-size:15.5px;line-height:1.6;">We check every job the same way, with 5 filters. We read real job posts. We look at official pay and growth numbers. We read hiring reports. Then a second team tries hard to prove our answer wrong. When your answer is ready, we’ll email it to you.</p>
<p style="margin:16px 0 4px;font-size:16px;font-weight:800;">While you wait, these checks are ready:</p>
<div style="margin:6px 0 16px;">${listHtml}</div>
<a href="${GATE_URL}" style="display:inline-block;background:linear-gradient(135deg,#F92A82,#FF8CBE);color:#ffffff;text-decoration:none;font-weight:800;font-size:16px;border-radius:999px;padding:12px 24px;">Run a free check now →</a>
${serviceBlockHtml(appUrl, true, t)}
${footerHtml(null)}`;
  const listText = clusters.map((c) => `- ${c.kick}: ${c.head}`).join('\n');
  const text = [
    name ? `Hi ${name},` : 'Hi,',
    '',
    `"${t}" is being checked right now.`,
    '',
    'We check every job the same way, with 5 filters. We read real job posts. We look at official pay and growth numbers. We read hiring reports. Then a second team tries hard to prove our answer wrong. When your answer is ready, we’ll email it to you.',
    '',
    'While you wait, these checks are ready:',
    listText,
    '',
    `Run a free check now: ${GATE_URL}`,
    '',
    serviceBlockText(appUrl, true, t),
    '',
    footerText(null),
  ].join('\n');
  return { subject, html: wrapHtml(t, inner), text };
}

/* ---------- public API ---------- */

export function renderMiniEmail(input) {
  const { kind } = input || {};
  if (kind === 'seat') return renderSeat(input);
  if (kind === 'grid') return renderGrid(input);
  if (kind === 'waitlist') return renderWaitlist(input);
  throw new Error(`renderMiniEmail: unknown kind ${kind}`);
}

// Map a cg_leads row (id, email, name, recommended[0]) to a render input.
// Returns null for non-PathCheck rows — those never get a mini email.
export function miniInputForLead(row) {
  const rec = row && Array.isArray(row.recommended) ? row.recommended[0] : null;
  if (!rec || rec.product !== 'pathcheck') return null;
  const kind = ['seat', 'grid', 'waitlist'].includes(rec.kind) ? rec.kind : null;
  if (!kind) return null;
  if (kind === 'seat' && !(rec.prof && SEATS[rec.seat])) return null;
  if (kind === 'grid' && !GRIDS[rec.prof]) return null;
  return {
    kind,
    prof: rec.prof || null,
    seat: rec.seat || null,
    typed: rec.typed || row.self_role || '',
    name: row.name || '',
    leadId: row.id,
    email: row.email || '',
  };
}

// Every renderable variant — used by the render tests.
export function listMiniVariants() {
  const out = [];
  for (const [seat, st] of Object.entries(SEATS)) out.push({ kind: 'seat', prof: st.prof, seat });
  for (const prof of Object.keys(GRIDS)) out.push({ kind: 'grid', prof });
  out.push({ kind: 'waitlist', typed: 'Welder' });
  return out;
}
