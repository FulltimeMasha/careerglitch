#!/usr/bin/env node
// scripts/test_mini_emails.mjs — render-test every mini email variant.
// Asserts: all variants render; NO $19 anywhere (price is $5 since
// 2026-11-01); the $5 Full Report block + founder appeal present
// verbatim; every $ figure and count in a seat's gate data appears in
// its email (digit fidelity); subject lengths sane; the app link
// carries the lead id; the Full Report button points at the real
// Stripe payment link and — when the render knows the lead — carries
// client_reference_id + prefilled_email; identity-less renders keep
// the bare link. Exit 1 on any failure.
//   node scripts/test_mini_emails.mjs
import { renderMiniEmail, listMiniVariants, miniInputForLead, FOUNDER_APPEAL, FULL_REPORT_URL, stripHtml } from '../api/_lib/miniemails.mjs';
import { GRIDS, PROFS } from '../api/_lib/minidata.mjs';
import { SEATS } from '../api/_lib/minidata-seats.mjs';

const LEAD_ID = '62458602-5c22-4569-8c82-6c5a21e92d90';
let failures = 0;
const fail = (msg) => { failures++; console.error('FAIL:', msg); };

const moneyTokens = (s) => new Set((stripHtml(s).match(/\$[\d][\d,\.]*(?:[KM])?(?:–\$[\d][\d,\.]*(?:[KM])?)?/g) || []));
const countTokens = (s) => new Set((stripHtml(s).match(/\b\d[\d,\.]*\s?of\s?\d+\b|\b\d[\d,\.]*%/g) || []));

const variants = listMiniVariants();
console.log(`variants: ${variants.length} (expect 109 = 90 seats + 18 grids + 1 waitlist)`);
if (variants.length !== 109) fail(`variant count ${variants.length} != 109`);

const subjects = [];
for (const v of variants) {
  const input = { ...v, name: 'Test', leadId: LEAD_ID };
  let out;
  try { out = renderMiniEmail(input); } catch (e) { fail(`${v.kind}/${v.seat || v.prof}: threw ${e.message}`); continue; }
  const { subject, html, text } = out;
  const tag = `${v.kind}/${v.seat || v.prof || v.typed}`;
  subjects.push(`${tag} :: ${subject}`);
  if (!subject || subject.length > 100) fail(`${tag}: subject length ${subject && subject.length}`);
  // The $19 PRICE must never appear. A bare "$19" token (not followed by
  // another digit) is the price; "$195K" etc. are gate-data figures and
  // must stay (digit fidelity) — the regex separates the two.
  for (const [part, body] of [['subject', subject], ['html', html], ['text', text]]) {
    if (/\$19(?![\d,])/.test(body)) fail(`${tag}: $19 price found in ${part}`);
  }
  if (v.kind !== 'waitlist') {
    if (!text.includes('Get the Full Report — $5')) fail(`${tag}: text missing $5 Full Report line`);
    if (!html.includes('Get the Full Report — $5')) fail(`${tag}: html missing $5 button`);
    if (!text.includes(FOUNDER_APPEAL) || !html.includes(FOUNDER_APPEAL.replace(/'/g, '&#39;')) && !html.includes(FOUNDER_APPEAL)) {
      if (!text.includes(FOUNDER_APPEAL)) fail(`${tag}: founder appeal missing`);
    }
    if (!html.includes(FULL_REPORT_URL)) fail(`${tag}: FULL_REPORT_URL missing in html`);
    // The variant renders pass a leadId (no email): the button href must
    // start with the real Stripe link and carry that lead's id.
    if (!html.includes(`href="${FULL_REPORT_URL}?client_reference_id=${LEAD_ID}"`)) fail(`${tag}: button href lacks client_reference_id for the lead`);
    if (!text.includes(`client_reference_id=${LEAD_ID}`)) fail(`${tag}: text link lacks client_reference_id for the lead`);
    if (!text.includes('$9/month')) fail(`${tag}: text missing $9/month service price`);
  }
  if (!html.includes(`https://careerglitch.com/app#${LEAD_ID}`)) fail(`${tag}: app link with lead id missing`);
  if (!text.includes('PathCheck · Know before you pay for it.')) fail(`${tag}: footer missing`);

  if (v.kind === 'seat') {
    const st = SEATS[v.seat];
    const sourceText = [st.head, st.door, st.short, ...st.facts.flat()].join(' ');
    for (const tok of moneyTokens(sourceText)) if (!text.includes(tok)) fail(`${tag}: money figure ${tok} from gate data missing in email`);
    for (const tok of countTokens(sourceText)) if (!text.includes(tok)) fail(`${tag}: count ${tok} from gate data missing in email`);
    const recheck = text.includes('re-check');
    if (!recheck) fail(`${tag}: re-check line missing`);
  }
  if (v.kind === 'grid') {
    const G = GRIDS[v.prof];
    for (const row of G.rows) if (!text.includes(stripHtml(row[0]))) fail(`${tag}: grid row ${row[0]} missing`);
    if (!text.includes('Where the money is:')) fail(`${tag}: corner missing`);
  }
  if (v.kind === 'waitlist') {
    // The meanwhile list shows the LIVE gate checks only: since the
    // 2026-11-01 split, the legacy combined 'analyst' entry stays in
    // minidata for old leads but must NOT be listed as a live check.
    for (const k of Object.keys(PROFS)) { if (k === 'analyst') continue; if (!text.includes(PROFS[k].kick)) fail(`${tag}: cluster ${k} missing from meanwhile list`); }
    if (text.includes(PROFS.analyst.kick)) fail(`${tag}: legacy combined analyst listed as a live check`);
    if (!text.includes('being checked right now')) fail(`${tag}: waitlist headline missing`);
  }
}

// miniInputForLead mapping: seat / grid / waitlist / mentor-row rejection.
const mk = (rec, extra = {}) => ({ id: LEAD_ID, email: 'a@b.co', name: 'A', recommended: [rec], ...extra });
if (!miniInputForLead(mk({ product: 'pathcheck', kind: 'seat', prof: 'analyst', seat: 'reportda', typed: 'data analyst' }))) fail('mapping: analyst seat rejected');
if (!miniInputForLead(mk({ product: 'pathcheck', kind: 'grid', prof: 'cpa', seat: null, typed: 'accountant' }))) fail('mapping: cpa grid rejected');
if (!miniInputForLead(mk({ product: 'pathcheck', kind: 'waitlist', prof: 'waitlist', seat: null, typed: 'Welder' }))) fail('mapping: waitlist rejected');
// Sample-lead render (via the real lead mapping): BOTH Stripe params.
{
  const input = miniInputForLead(mk({ product: 'pathcheck', kind: 'seat', prof: 'cpa', seat: 'bookkeeper', typed: 'bookkeeper' }));
  const out = renderMiniEmail(input);
  const want = `${FULL_REPORT_URL}?client_reference_id=${LEAD_ID}&prefilled_email=a%40b.co`;
  if (!out.html.includes(`href="${want}"`)) fail('sample lead: html button href lacks both Stripe params');
  if (!out.text.includes(want)) fail('sample lead: text link lacks both Stripe params');
}
// Identity-less render: the bare link, exactly (previews / manual path).
{
  const out = renderMiniEmail({ kind: 'seat', prof: 'cpa', seat: 'bookkeeper' });
  if (!out.html.includes(`href="${FULL_REPORT_URL}"`)) fail('identity-less: html button href is not the bare Stripe link');
  if (!out.text.includes(`: ${FULL_REPORT_URL}\n`) && !out.text.endsWith(FULL_REPORT_URL)) fail('identity-less: text link is not the bare Stripe link');
}

if (miniInputForLead(mk({ product: 'mentor', kind: 'seat' })) !== null) fail('mapping: mentor row NOT rejected');
if (miniInputForLead({ id: LEAD_ID, recommended: [] }) !== null) fail('mapping: empty recommended NOT rejected');

console.log('\n--- subjects ---');
for (const s of subjects) console.log(s);
console.log(failures ? `\n${failures} FAILURE(S)` : '\nALL RENDER TESTS PASSED');
process.exit(failures ? 1 : 0);
