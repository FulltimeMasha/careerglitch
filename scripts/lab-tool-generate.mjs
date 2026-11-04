#!/usr/bin/env node
// scripts/lab-tool-generate.mjs — generate (or read) the Lab package
// for one tool-tagged radar item, outside the weekly cycle. Used to
// seed the pilot package and to pre-generate packages ahead of a
// cycle. Idempotent: a cached package is returned as-is.
//
// Usage:
//   node scripts/lab-tool-generate.mjs <radar-item-id>
//
// Env: CG_SUPABASE_URL + CG_SUPABASE_KEY when set; otherwise read from
// ~/workspace/solobid-app/.env.local (same mapping as the weekly
// runner). The Meta engine resolves its own transport.

import { readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const itemId = process.argv[2];
if (!itemId) {
  console.error('usage: node scripts/lab-tool-generate.mjs <radar-item-id>');
  process.exit(2);
}

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
  throw new Error('no Supabase service config found');
}

const cfg = storeConfig();
const LT = await import(join(ROOT, 'api', '_lib', 'lab-tools.mjs'));
const { insertLead } = await import(join(ROOT, 'api', '_lib', 'leads.mjs'));

const pkg = await LT.getOrGenerateToolPackage(cfg, itemId, insertLead);
console.log(`[lab-tool] ${itemId}: source=${pkg.source} slug=${pkg.slug}`);
console.log(JSON.stringify({ lesson: pkg.lesson, scene: pkg.scene }, null, 2));
console.log(`[lab-tool] page: https://careerglitch.com/lab/tool?id=${itemId}`);
