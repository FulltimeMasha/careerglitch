// scripts/radar-log-to-findings.mjs — bridge: daily Market Radar → Watchdog.
// ---------------------------------------------------------------------------
// The daily "Радар рынка" cron appends verified signals to
//   ~/workspace/goals/4/hidden_files/radar-signals-log.md
// (headline, event date, source, essence, affected professions, direction).
// This converter turns the last N days of that log into a findings file in
// the exact shape scripts/watchdog-weekly.mjs consumes, so daily signals
// reach Watchdog users (radar feed + Score impact) in the weekly cycle
// instead of dying in a log nobody reads.
//
// Honesty rules, inherited from the radar itself:
//   - nothing is invented: headline/essence/source come from the log line
//     verbatim (trimmed); source_url stays empty (the log names sources,
//     it does not carry URLs — the source name rides in `reason`);
//   - only professions with a Watchdog radar surface are mapped
//     (bookkeeper / graphic-designer / realtor / product-manager);
//   - tasks are NOT auto-generated here (task: null) — crafted tasks stay
//     the weekly scan agent's job; the converter feeds signals and impact.
//   - SCORE SAFETY: converter items carry impact 0. A week of daily
//     signals can stack to −6 per user if passed through raw (proven in
//     the 04.11 dry-run), and some log signals duplicate stories already
//     in the curated feed under other ids. Impact stays a curated,
//     per-cycle decision: the weekly agent reviews this file, may set
//     impact on at most 2 items per profession, and drops duplicates
//     before merging. Direction is preserved in `reason` for that review.
// Ids are deterministic (date + slug + headline hash): re-running the
// converter over the same log yields the same ids, and the weekly merge
// dedupes by id, so a signal can never be applied twice.
//
// Usage:
//   node scripts/radar-log-to-findings.mjs [--days 7] [--log <path>] [--out <path>]
// Default out: scripts/radar-findings-<today>.json
// ---------------------------------------------------------------------------

import { readFileSync, writeFileSync } from 'node:fs';

function argValue(flag) {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : null;
}
const days = Number(argValue('--days') || 7);
const logPath = argValue('--log') || '/home/hatch/workspace/goals/4/hidden_files/radar-signals-log.md';
const today = new Date().toISOString().slice(0, 10);
const outPath = argValue('--out') || `scripts/radar-findings-${today}.json`;

const PROF_TO_SLUG = [
  [/bookkeeper/i, 'bookkeeper'],
  [/accountant/i, 'bookkeeper'],
  [/graphic designer/i, 'graphic-designer'],
  [/ux\/ui designer/i, 'graphic-designer'],
  [/web designer/i, 'graphic-designer'],
  [/product manager/i, 'product-manager'],
  [/realtor/i, 'realtor'],
  [/real estate/i, 'realtor'],
];

function hash36(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
  return h.toString(36);
}

const text = readFileSync(logPath, 'utf8');
const cutoff = new Date(Date.now() - days * 86400000).toISOString().slice(0, 10);

// Split the log into day sections, then item sections.
const daySections = text.split(/^## /m).slice(1);
const bySlug = new Map();

for (const daySec of daySections) {
  const dayMatch = daySec.match(/^(\d{4}-\d{2}-\d{2})/);
  if (!dayMatch) continue;
  const day = dayMatch[1];
  if (day < cutoff) continue;

  const itemSections = daySec.split(/^### /m).slice(1);
  for (const sec of itemSections) {
    const lines = sec.split('\n');
    const headline = (lines[0] || '').replace(/^\d+\.\s*/, '').trim();
    if (!headline) continue;
    const field = (label) => {
      const line = lines.find((l) => l.includes(label));
      return line ? line.slice(line.indexOf(label) + label.length).trim() : '';
    };
    const profLine = field('Профессии из базы:');
    const dirLine = field('Направление:');
    const essence = field('Суть:');
    const source = field('Источник:');
    const eventLine = field('Дата события:');
    const dm = eventLine.match(/(\d{2})\.(\d{2})\.(\d{4})/);
    const date = dm ? `${dm[3]}-${dm[2]}-${dm[1]}` : day;
    if (date < cutoff) continue; // freshness is judged by EVENT date
    if (!profLine || !dirLine) continue;
    if (!/риск растёт|возможность растёт/.test(dirLine)) continue;

    const slugs = new Set();
    for (const [re, slug] of PROF_TO_SLUG) if (re.test(profLine)) slugs.add(slug);
    for (const slug of slugs) {
      const item = {
        id: `radar-${date}-${slug}-${hash36(headline)}`,
        date,
        headline,
        so_what: essence.slice(0, 600),
        source_url: '',
        impact: 0, // curated by the weekly agent before any live run — see header
        reason: `${dirLine.split('|')[0].trim()} · ${source}`,
        task: null,
      };
      if (!bySlug.has(slug)) bySlug.set(slug, []);
      if (!bySlug.get(slug).some((x) => x.id === item.id)) bySlug.get(slug).push(item);
    }
  }
}

const findings = {
  cycle_date: today,
  source: 'radar-log-to-findings (daily Market Radar log)',
  professions: [...bySlug.entries()].map(([slug, items]) => ({ slug, items })),
};
writeFileSync(outPath, JSON.stringify(findings, null, 2));
const total = findings.professions.reduce((n, p) => n + p.items.length, 0);
console.log(`wrote ${outPath}: ${total} signal(s) across ${findings.professions.length} profession(s)`);
for (const p of findings.professions) for (const it of p.items) console.log(`  ${p.slug}: [${it.impact > 0 ? '+' : ''}${it.impact}] ${it.headline.slice(0, 90)}`);
