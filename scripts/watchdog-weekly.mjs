#!/usr/bin/env node
// scripts/watchdog-weekly.mjs — Career Glitch Watchdog weekly cycle runner.
// ---------------------------------------------------------------------------
// THE WEEKLY CYCLE (run by the "Watchdog weekly rescan" job, Mondays
// ~09:00 America/New_York; see the job body for the research steps):
//
//   1. RESEARCH (done by the agent running the cycle, before this
//      script): for every profession that has BOTH a cached profile
//      and at least one user lead, find the week's REAL news — only
//      items dated within the last 7 days, each with a live source URL
//      that was actually opened and read. Write headline, so_what,
//      impact (-5..+3, defensible from the item's content) and one
//      derived task when the item implies one. NO invented items: a
//      profession with no real news gets no items and the report says
//      so. Save as scripts/watchdog-cycle-YYYY-MM-DD.json (shape at the
//      bottom of this header).
//   2. THIS SCRIPT merges the findings into the cumulative item store
//      (scripts/watchdog-cycle-items.json), regenerates the radar
//      extra feed (api/_lib/watchdog-radar-extra.mjs — commit + push
//      it, that is what deploys the new radar items), and applies the
//      items to every existing user lead of each profession via
//      applyNewsToState (idempotent: ids already in a user's
//      news.applied are skipped, so re-running a cycle is a no-op).
//   3. The script prints the cycle report; the agent relays it.
//
// Fresh-user rule (enforced in api/_lib/watchdog.mjs): news applies
// only to users who already exist when the cycle runs. A brand-new
// signup starts with news.adjustment = 0 and never inherits past
// items.
//
// Usage:
//   node scripts/watchdog-weekly.mjs --findings scripts/watchdog-cycle-YYYY-MM-DD.json
//   node scripts/watchdog-weekly.mjs --findings <file> --generate-only   (feed files only, no DB)
//   node scripts/watchdog-weekly.mjs --findings <file> --dry-run        (print, write nothing)
//
// Env: CG_SUPABASE_URL + CG_SUPABASE_KEY when set; otherwise read from
// ~/workspace/solobid-app/.env.local (NEXT_PUBLIC_SUPABASE_URL +
// SUPABASE_SERVICE_ROLE_KEY — the same Supabase project the API uses,
// same mapping as leadStoreConfig in api/_lib/leads.mjs). Keys stay
// server-side; nothing here ships to a client.
//
// Findings shape:
//   { "cycle_date": "2026-11-03",
//     "professions": [ { "slug": "bookkeeper", "items": [
//       { "id": "stable-item-id", "headline": "...", "so_what": "...",
//         "source_url": "https://...", "impact": -1, "date": "2026-11-02",
//         "reason": "one plain line used in score_history and on Home",
//         "task": { "title": "...", "points": 3, "checklist_id": null }
//       } ] } ] }
// ---------------------------------------------------------------------------

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CUMULATIVE_PATH = join(ROOT, 'scripts', 'watchdog-cycle-items.json');
const EXTRA_PATH = join(ROOT, 'api', '_lib', 'watchdog-radar-extra.mjs');

// Radar match keys per profession slug — mirrors RADAR_FEEDS in
// api/_lib/watchdog-radar.mjs.
const SLUG_MATCH = {
  bookkeeper: ['bookkeeper', 'bookkeeping', 'accountant', 'accounting'],
  realtor: ['realtor', 'real estate agent', 'real estate'],
  'graphic-designer': ['graphic designer', 'designer', 'design'],
};

function argValue(flag) {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : null;
}
const findingsPath = argValue('--findings');
const dryRun = process.argv.includes('--dry-run');
const generateOnly = process.argv.includes('--generate-only');
if (!findingsPath) {
  console.error('usage: node scripts/watchdog-weekly.mjs --findings <findings.json> [--generate-only] [--dry-run]');
  process.exit(2);
}

const findings = JSON.parse(readFileSync(findingsPath, 'utf8'));
const cycleDate = typeof findings.cycle_date === 'string' ? findings.cycle_date : new Date().toISOString().slice(0, 10);
const bySlug = new Map();
for (const p of Array.isArray(findings.professions) ? findings.professions : []) {
  if (p && typeof p.slug === 'string' && Array.isArray(p.items)) bySlug.set(p.slug, p.items);
}

// --- 1+2. Merge findings into the cumulative store, regenerate feed ---
const cumulative = existsSync(CUMULATIVE_PATH)
  ? JSON.parse(readFileSync(CUMULATIVE_PATH, 'utf8'))
  : [];
const knownIds = new Set(cumulative.map((it) => it.id));
const addedToFeed = [];
for (const [slug, items] of bySlug) {
  for (const item of items) {
    if (!item || typeof item.id !== 'string' || knownIds.has(item.id)) continue;
    knownIds.add(item.id);
    cumulative.push({
      slug,
      id: item.id,
      match: SLUG_MATCH[slug] || [slug.replace(/-/g, ' ')],
      headline: item.headline || '',
      so_what: item.so_what || '',
      source_url: item.source_url || '',
      impact: typeof item.impact === 'number' ? item.impact : 0,
      date: item.date || cycleDate,
      reason: item.reason || '',
      task: item.task || null,
    });
    addedToFeed.push(`${slug}/${item.id}`);
  }
}

const extraModule = `// api/_lib/watchdog-radar-extra.mjs — GENERATED by
// scripts/watchdog-weekly.mjs from scripts/watchdog-cycle-items.json.
// Do not edit by hand: run the weekly cycle runner instead. Every item
// here was found by the weekly rescan with a real source that was
// actually opened and read; ids are stable and never reused.

export const RADAR_EXTRA_ITEMS = ${JSON.stringify(
  cumulative.map((it) => ({
    id: it.id,
    match: it.match,
    headline: it.headline,
    so_what: it.so_what,
    source_url: it.source_url,
    impact: it.impact,
    date: it.date,
  })),
  null,
  2
)};
`;

if (!dryRun) {
  writeFileSync(CUMULATIVE_PATH, JSON.stringify(cumulative, null, 2) + '\n');
  writeFileSync(EXTRA_PATH, extraModule);
}
console.log(`[watchdog-weekly] cycle ${cycleDate}${dryRun ? ' (dry run)' : ''}`);
console.log(`[watchdog-weekly] feed: ${addedToFeed.length} new item(s) added (${addedToFeed.join(', ') || 'none'}); ${cumulative.length} cumulative`);

if (generateOnly) {
  console.log('[watchdog-weekly] --generate-only: feed files written, no leads touched.');
  process.exit(0);
}

// --- 3. Apply to user leads -------------------------------------------
function storeConfig() {
  if (process.env.CG_SUPABASE_URL && process.env.CG_SUPABASE_KEY) {
    return { url: process.env.CG_SUPABASE_URL.replace(/\/+$/, ''), key: process.env.CG_SUPABASE_KEY };
  }
  const envPath = join(homedir(), 'workspace', 'solobid-app', '.env.local');
  const vars = {};
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) vars[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
  if (vars.NEXT_PUBLIC_SUPABASE_URL && vars.SUPABASE_SERVICE_ROLE_KEY) {
    return { url: vars.NEXT_PUBLIC_SUPABASE_URL.replace(/\/+$/, ''), key: vars.SUPABASE_SERVICE_ROLE_KEY };
  }
  throw new Error('no Supabase service config found (CG_SUPABASE_* env or solobid-app/.env.local)');
}

const cfg = storeConfig();
const WD = await import(join(ROOT, 'api', '_lib', 'watchdog.mjs'));
const { updateLead } = await import(join(ROOT, 'api', '_lib', 'leads.mjs'));

const r = await fetch(
  `${cfg.url}/rest/v1/cg_leads?top1_slug=eq.watchdog&select=id,email,recommended,created_at&order=created_at.asc&limit=500`,
  { headers: { apikey: cfg.key, Authorization: `Bearer ${cfg.key}` } }
);
if (!r.ok) throw new Error(`lead fetch -> ${r.status}: ${(await r.text()).slice(0, 200)}`);
const rows = await r.json();

const report = new Map(); // slug -> { users, changed: [{email, before, after, items}] }
for (const [slug] of bySlug) report.set(slug, { users: 0, changed: [] });

for (const row of Array.isArray(rows) ? rows : []) {
  const rec = row && Array.isArray(row.recommended) ? row.recommended[0] : null;
  if (!rec || rec.product !== 'watchdog' || !rec.watchdog || typeof rec.watchdog !== 'object') continue;
  const state = rec.watchdog;
  if (!state.profile || typeof state.profile.profession !== 'string') continue;
  const slug = WD.professionSlug(state.profile.profession);
  const items = bySlug.get(slug);
  if (!items) continue;
  const entry = report.get(slug) || { users: 0, changed: [] };
  report.set(slug, entry);
  entry.users += 1;
  if (!items.length) continue;
  const before = WD.effectiveScore(state);
  const res = WD.applyNewsToState(state, items, cycleDate);
  if (!res.appliedNow.length) continue;
  const next = { ...res.state, radar: WD.matchRadarFeed(state.profile.profession), updated_at: new Date().toISOString() };
  if (!dryRun) {
    const ok = await updateLead(cfg, row.id, { recommended: [{ ...rec, watchdog: next }] });
    if (!ok) throw new Error(`update failed for lead ${row.id}`);
  }
  entry.changed.push({ email: row.email || row.id, before, after: next.score, items: res.appliedNow });
}

console.log('[watchdog-weekly] apply report:');
for (const [slug, entry] of report) {
  const items = bySlug.get(slug) || [];
  if (!items.length) {
    console.log(`  ${slug}: no real news this week — nothing added, nobody's Score moved.`);
    continue;
  }
  console.log(`  ${slug}: ${items.length} item(s), ${entry.users} user lead(s), ${entry.changed.length} updated`);
  for (const c of entry.changed) {
    console.log(`    ${c.email}: Score ${c.before} -> ${c.after} (applied: ${c.items.join(', ')})`);
  }
}
console.log('[watchdog-weekly] done. Commit + push the regenerated radar feed so the new items deploy.');
