// api/_lib/watchdog-radar.mjs — sourced radar feed for Career Glitch Watchdog.
// ---------------------------------------------------------------------------
// NO search API key (Tavily/Brave) is configured for this project, so the
// Watchdog radar ships in CACHED-FEED mode: every item below was found and
// read by a human/agent researcher on 2026-11-03, carries the real source
// URL and the source's publication date, and was written for one of the
// three demo professions (Bookkeeper, Realtor, Graphic Designer).
// Rules: no invented headlines, no invented URLs, no items without a
// source. Professions without a feed get an honest empty radar.
// When a live search key lands, Scan-now can be rewired to it — the item
// shape stays the same: { headline, so_what, source_url, impact, date }.
// ---------------------------------------------------------------------------

export const RADAR_FEED_SCANNED_AT = '2026-11-03';

export const RADAR_FEEDS = [
  {
    match: ['bookkeeper', 'bookkeeping', 'accountant', 'accounting'],
    items: [
      {
        headline: 'Intuit launches AI agents across QuickBooks and its accountant suite',
        so_what:
          'The monthly close and invoice chasing inside QuickBooks are being automated first. Bookkeepers who review the agent\u2019s work and handle the exceptions keep the value; pure data entry keeps shrinking.',
        source_url:
          'https://www.pymnts.com/news/artificial-intelligence/2026/intuit-unveils-custom-financial-ai-tools-nonprofits-manufacturers/',
        impact: -2,
        date: '2026-10-27',
      },
      {
        headline: 'Agentic Books Close pilot is open to accounting firms through late November',
        so_what:
          'Intuit is piloting an agent that runs the month-end close your way, with a human approving every post. Joining the pilot early is free practice on the exact workflow clients will expect next year.',
        source_url:
          'https://www.cpapracticeadvisor.com/2026/11/03/intuit-connect-2026-ai-agents-a-new-partner-program-and-a-unified-platform-take-center-stage/193101/',
        impact: 1,
        date: '2026-11-03',
      },
      {
        headline: 'QuickBooks now chases late invoices with AI — 59% of small businesses have invoices 30+ days overdue',
        so_what:
          'Collections is becoming a built-in feature, not a service. Offering cash-flow reviews and cleanup on top of it is where a bookkeeper still gets paid.',
        source_url:
          'https://smallbiztrends.com/intuit-launches-ai-driven-platform-uniting-businesses-and-accountants/',
        impact: -1,
        date: '2026-10-27',
      },
      {
        headline: 'ProPartner replaces the ProAdvisor program in early 2027',
        so_what:
          'The certification ladder is being rebuilt with tiers and client matching. Getting certified before the switch means you enter the new program at the front of the line.',
        source_url:
          'https://www.cpapracticeadvisor.com/2026/11/03/intuit-connect-2026-ai-agents-a-new-partner-program-and-a-unified-platform-take-center-stage/193101/',
        impact: 1,
        date: '2026-11-03',
      },
    ],
  },
  {
    match: ['realtor', 'real estate agent', 'real estate'],
    items: [
      {
        headline: 'NAR\u2019s 2026 tech report: nearly half of agents now use AI weekly, only 12% sit it out',
        so_what:
          'AI use stopped being an edge and became table stakes. The top use is writing listing descriptions (75% of AI users) — the agents pulling ahead use it for follow-up and market summaries instead.',
        source_url:
          'https://brianpateseminars.com/2026/10/most-agents-are-using-ai-backward-and-nars-own-data-proves-it/',
        impact: -1,
        date: '2026-10-06',
      },
      {
        headline: 'Agents are plugging AI assistants into the MLS — and most MLSs say it breaks their rules',
        so_what:
          'Connecting ChatGPT or Claude to your MLS login can violate your MLS bylaws, and your broker carries the responsibility. Use AI on your own data and marketing, not inside the MLS.',
        source_url: 'https://theprofessions.cloud/real-estate/ai-tools-mls-rules-agents/',
        impact: -2,
        date: '2026-10-15',
      },
      {
        headline: 'The agent job itself is not shrinking: BLS projects growth and about 40,400 openings a year',
        so_what:
          'Buyers and sellers still close with a licensed human. What AI is eating is the marketing and admin layer — flyers, descriptions, first replies. Move your hours to negotiation and local advice.',
        source_url: 'https://www.reallyo.com/blog/will-ai-replace-real-estate-agents',
        impact: 2,
        date: '2026-10-15',
      },
    ],
  },
  {
    match: ['graphic designer', 'designer', 'design'],
    items: [
      {
        headline: 'Adobe and NVIDIA: Photoshop AI tools now run up to 2x faster on new RTX Spark machines',
        so_what:
          'AI cleanup, removal and effects are getting faster on the desk, not just in the cloud. Speed raises what clients expect for turnaround — price the outcome, not the hour.',
        source_url:
          'https://www.unite.ai/adobe-expands-nvidia-collaboration-as-rtx-spark-reaches-creative-apps/',
        impact: -1,
        date: '2026-10-15',
      },
      {
        headline: 'Firefly AI Assistant opened to every Creative Cloud plan on Oct 1 — and it now spends your plan\u2019s AI credits',
        so_what:
          'Agentic design help is now inside everyone\u2019s subscription, and it has a meter. Designers who learn to direct the assistant well produce more per credit — and can say exactly what the AI did and what they did.',
        source_url: 'https://viralvibevault.com/firefly-assistant-meter/',
        impact: -2,
        date: '2026-10-01',
      },
      {
        headline: 'Adobe MAX runs Nov 10–12 — the next wave of Firefly announcements lands there',
        so_what:
          'Expect the tools to move again within days. Put one hour in your calendar right after MAX to test what shipped before your competitors do.',
        source_url:
          'https://itbusinesstoday.com/tech/computing/adobe-and-nvidia-expand-ai-content-creation-partnership/',
        impact: 1,
        date: '2026-10-19',
      },
    ],
  },
];

// Match a free-typed profession to a feed. Returns the item array (possibly
// empty — an empty radar is an honest state, never a fabricated one).
export function matchRadarFeed(profession) {
  const p = typeof profession === 'string' ? profession.toLowerCase() : '';
  if (!p) return [];
  for (const feed of RADAR_FEEDS) {
    for (const key of feed.match) {
      if (p.includes(key)) return feed.items.map((it) => ({ ...it }));
    }
  }
  return [];
}
