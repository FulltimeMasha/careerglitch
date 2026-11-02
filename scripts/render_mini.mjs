#!/usr/bin/env node
// scripts/render_mini.mjs — render ONE lead's mini email to JSON.
// Used by scripts/send_mini_manual.py (and handy for spot checks).
//   node scripts/render_mini.mjs < lead-row.json > rendered.json
// Input: a cg_leads row { id, email, name, self_role, recommended:[...] }.
// Output: { lead_id, to, subject, html, text } — or {"error": "..."}.
import { renderMiniEmail, miniInputForLead } from '../api/_lib/miniemails.mjs';

let raw = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (c) => { raw += c; });
process.stdin.on('end', () => {
  try {
    const row = JSON.parse(raw);
    const input = miniInputForLead(row);
    if (!input) { console.log(JSON.stringify({ error: 'not a renderable pathcheck lead' })); return; }
    const mail = renderMiniEmail(input);
    console.log(JSON.stringify({ lead_id: row.id, to: row.email, ...mail }));
  } catch (e) {
    console.log(JSON.stringify({ error: String((e && e.message) || e) }));
  }
});
