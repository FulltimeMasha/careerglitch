// api/lab.js — Vercel entry for the Career Glitch Lab simulator (/lab/<prof>).
// ---------------------------------------------------------------------------
// Lab TZ v2 (04.11.2026): the simulator's scenes are pre-generated ONCE per
// profession and ship as static data with the page (lab-scenes-<prof>.js).
// Each scene is bound to ONE Watchdog checklist item (checklist_id). When a
// junior saves an artifact and confirms every rubric element of the scene
// against it, the scene is PASSED: the artifact is stored in the junior's
// Lab lead (cg_leads, product 'lab') and — when the same email owns a
// Watchdog card for the profession — the mapped checklist item is flipped
// in Watchdog with the artifact as evidence (user_has = true,
// lab_evidence = { scene, at }), through the same refresh path the
// Watchdog 'update' action uses. Score is always recomputed server-side.
//
// Actions (all POST, JSON):
//   { action:'progress', email }
//       -> the email's Lab cycle state + Watchdog link status.
//   { action:'scene', email, name?, scene_id, artifact_name, artifact_text,
//      rubric: [bool, ...] }
//       -> saves the artifact; passes the scene when every rubric element
//          is confirmed and the artifact is non-trivial; flips the mapped
//          Watchdog item when a matching card exists.
//
// Honesty rules: a scene never passes on an empty/short artifact; a draft
// (rubric incomplete) is saved but does NOT flip anything; re-saving a
// scene overwrites its artifact and never double-counts the pass.
// ---------------------------------------------------------------------------

const ALLOWED_ORIGINS = new Set([
  'https://careerglitch.com',
  'https://www.careerglitch.com',
  'https://pathcheck-cg.vercel.app',
]);

const EMAIL_RE = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']{2,}$/;

// The only profession with a Lab cycle in v1, and the checklist items a
// simulator scene is allowed to prove. Mirrors lab-scenes-bookkeeper.js.
const LAB_PROF = 'bookkeeper';
const LAB_CHECKLIST = {
  'bk-01-cleanup-plan': 'cleanup_sop_system',
  'bk-02-qbo-bank-rules': 'qbo_xero_proficiency',
  'bk-03-bank-rec': 'month_end_mastery',
  'bk-04-payroll-entry': 'payroll_tax_basics',
  'bk-05-ecommerce-payout': 'niche_ecommerce',
  'bk-06-ai-anomaly-review': 'ai_reconciliation_workflow',
  'bk-07-month-end-adjustments': 'month_end_mastery',
  'bk-08-month-end-report': 'monthly_reporting_portfolio',
  'bk-09-cash-flow-advisory': 'advisory_kpi_package',
  'bk-10-linkedin-post': 'linkedin_visibility',
};

function cors(req, res) {
  const origin = typeof req.headers.origin === 'string' ? req.headers.origin : '';
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    return true;
  }
  return false;
}

function clean(v, max) {
  if (typeof v !== 'string') return '';
  return v.replace(/[<>\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}

module.exports = async (req, res) => {
  const corsOk = cors(req, res);
  if (req.method === 'OPTIONS') {
    if (corsOk) {
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Access-Control-Max-Age', '86400');
    }
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'POST only.' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch { body = {}; }
    }
    if (!body || typeof body !== 'object') body = {};

    const action = typeof body.action === 'string' ? body.action : '';

    // Public graduate record: the lead id is the credential — an
    // unguessable UUID. Returns only what the record page shows:
    // name, profession, passed scenes and their artifacts. Never email.
    if (action === 'record') {
      const leadId = clean(body.lead_id, 40);
      if (!/^[0-9a-f-]{36}$/i.test(leadId)) {
        return res.status(400).json({ ok: false, error: 'That record id does not look right.' });
      }
      const { leadStoreConfig } = await import('./_lib/leads.mjs');
      const cfgR = leadStoreConfig();
      if (!cfgR) return res.status(503).json({ ok: false, error: 'Records are not switched on yet.' });
      const r = await fetch(`${cfgR.url}/rest/v1/cg_leads?id=eq.${encodeURIComponent(leadId)}&select=id,name,created_at,recommended`, {
        headers: { apikey: cfgR.key, Authorization: `Bearer ${cfgR.key}` },
      });
      if (!r.ok) return res.status(500).json({ ok: false, error: 'That record could not be loaded.' });
      const found = await r.json();
      const row = Array.isArray(found) ? found[0] : null;
      const rec = row && Array.isArray(row.recommended) ? row.recommended[0] : null;
      if (!row || !rec || rec.product !== 'lab' || !rec.cycle) {
        return res.status(404).json({ ok: false, error: 'No Lab record with that id.' });
      }
      return res.status(200).json({
        ok: true,
        record: {
          id: row.id,
          name: row.name || '',
          prof: rec.cycle.prof,
          started_at: row.created_at,
          passed: rec.cycle.passed || [],
          artifacts: rec.cycle.artifacts || {},
        },
      });
    }

    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    if (!EMAIL_RE.test(email) || email.length > 254) {
      return res.status(400).json({ ok: false, error: 'That email does not look right — check it and try again.' });
    }

    const { leadStoreConfig, insertLead, updateLead } = await import('./_lib/leads.mjs');
    const cfg = leadStoreConfig();
    if (!cfg) {
      return res.status(503).json({ ok: false, error: 'Saving is not switched on yet.' });
    }

    async function sbGet(path) {
      const r = await fetch(`${cfg.url}/rest/v1/${path}`, {
        headers: { apikey: cfg.key, Authorization: `Bearer ${cfg.key}` },
      });
      if (!r.ok) throw new Error(`lab store read -> ${r.status}`);
      const text = await r.text();
      return text ? JSON.parse(text) : [];
    }

    // All rows for this email, newest first.
    const rows = await sbGet(
      `cg_leads?email=eq.${encodeURIComponent(email)}&select=id,name,recommended,created_at&order=created_at.desc&limit=50`
    );
    const recOf = (row) => (Array.isArray(row.recommended) ? row.recommended[0] : null) || {};
    const labRow = rows.find((row) => {
      const rec = recOf(row);
      return rec.product === 'lab' && rec.cycle && rec.cycle.prof === LAB_PROF;
    }) || rows.find((row) => recOf(row).product === 'lab');
    const wdRow = rows.find((row) => {
      const rec = recOf(row);
      return rec.product === 'watchdog' && rec.watchdog && rec.watchdog.profile &&
        String(rec.watchdog.profile.profession || '').toLowerCase().includes('book');
    });

    function cycleOf(row) {
      const rec = recOf(row);
      if (rec.cycle && rec.cycle.prof === LAB_PROF) return rec.cycle;
      return { prof: LAB_PROF, passed: [], artifacts: {} };
    }

    async function watchdogView(stateOverride) {
      if (!wdRow) return { linked: false };
      const WD = await import('./_lib/watchdog.mjs');
      const state = stateOverride || recOf(wdRow).watchdog;
      const ev = state.lab_evidence || {};
      const proven = (state.profile.top1_profile || [])
        .filter((it) => it.user_has && (ev[it.id] || it.lab_evidence))
        .map((it) => it.id);
      return { linked: true, score: WD.effectiveScore(state), proven };
    }

    if (action === 'progress') {
      const cycle = labRow ? cycleOf(labRow) : { prof: LAB_PROF, passed: [], artifacts: {} };
      return res.status(200).json({
        ok: true,
        lead_id: labRow ? labRow.id : null,
        cycle: {
          passed: cycle.passed || [],
          artifacts: cycle.artifacts || {},
          // Standalone radar-tool scenes (api/lab-ai grades them):
          // tracked apart from the cycle on purpose.
          tool_passed: cycle.tool_passed || [],
          tool_artifacts: cycle.tool_artifacts || {},
        },
        watchdog: await watchdogView(),
        record_ready: !!(labRow && recOf(labRow).record),
      });
    }

    if (action === 'scene') {
      const sceneId = clean(body.scene_id, 20);
      const checklistId = LAB_CHECKLIST[sceneId];
      if (!checklistId) {
        return res.status(400).json({ ok: false, error: 'That scene is not part of this Lab cycle.' });
      }
      const artifactText = typeof body.artifact_text === 'string' ? body.artifact_text.trim().slice(0, 6000) : '';
      const artifactName = clean(body.artifact_name, 120) || sceneId;
      const rubric = Array.isArray(body.rubric) ? body.rubric.slice(0, 10).map((x) => x === true) : [];
      const passed = rubric.length >= 3 && rubric.every(Boolean) && artifactText.length >= 40;
      const durationSec = Math.max(0, Math.min(21600, Math.round(Number(body.duration_sec) || 0)));
      const nowIso = new Date().toISOString();

      // 1) Save the artifact into the Lab lead (create the lead if needed).
      let cycle = labRow ? cycleOf(labRow) : { prof: LAB_PROF, passed: [], artifacts: {} };
      let savedLeadId = labRow ? labRow.id : null;
      cycle.artifacts = cycle.artifacts || {};
      cycle.artifacts[sceneId] = {
        name: artifactName,
        text: artifactText,
        rubric_ok: passed,
        at: nowIso,
        duration_sec: durationSec || (cycle.artifacts[sceneId] ? cycle.artifacts[sceneId].duration_sec || 0 : 0),
      };
      cycle.passed = Array.isArray(cycle.passed) ? cycle.passed : [];
      if (passed && !cycle.passed.includes(sceneId)) cycle.passed.push(sceneId);
      if (!passed) cycle.passed = cycle.passed.filter((s) => s !== sceneId);

      if (labRow) {
        const rec = recOf(labRow);
        await updateLead(cfg, labRow.id, {
          recommended: [{ ...rec, product: 'lab', track: LAB_PROF, cycle }],
        });
      } else {
        savedLeadId = await insertLead(cfg, {
          name: clean(body.name, 80),
          email,
          self_role: LAB_PROF,
          current_job: 'lab-cycle',
          recommended: [{ product: 'lab', track: LAB_PROF, cycle }],
          top1_slug: 'lab',
          ua: null,
        });
      }

      // 2) A passed scene flips the mapped Watchdog checklist item with
      //    the artifact as evidence — same refresh path as 'update'.
      let flipped = null;
      let flippedState = null;
      if (passed && wdRow) {
        const WD = await import('./_lib/watchdog.mjs');
        const rec = recOf(wdRow);
        const stored = rec.watchdog;
        const profile = JSON.parse(JSON.stringify(stored.profile));
        let changed = false;
        const storedEv = stored.lab_evidence || {};
        (profile.top1_profile || []).forEach((it) => {
          if (it.id === checklistId && !it.user_has) {
            it.user_has = true;
            changed = true;
          }
        });
        if (!storedEv[checklistId]) changed = true;
        if (changed) {
          const next = WD.refreshWatchdogState(stored, profile, nowIso);
          // refreshWatchdogState normalizes the profile and drops unknown
          // per-item fields, so Lab evidence lives at state level.
          next.lab_evidence = { ...storedEv, [checklistId]: { scene: sceneId, at: nowIso } };
          const okSave = await updateLead(cfg, wdRow.id, { recommended: [{ ...rec, watchdog: next }] });
          if (okSave) {
            flipped = { checklist_id: checklistId, score: WD.effectiveScore(next) };
            flippedState = next;
          }
        } else {
          flipped = { checklist_id: checklistId, score: WD.effectiveScore(stored), already: true };
        }
      }

      return res.status(200).json({
        ok: true,
        passed,
        lead_id: savedLeadId,
        cycle: { passed: cycle.passed, artifacts: cycle.artifacts },
        flipped,
        watchdog: await watchdogView(flippedState || undefined),
      });
    }

    return res.status(400).json({ ok: false, error: 'Unknown action.' });
  } catch (e) {
    console.error('lab api failed:', e && e.message);
    return res.status(500).json({ ok: false, error: 'That did not save — check your connection and try again.' });
  }
};
