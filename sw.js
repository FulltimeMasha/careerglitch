/* Career Glitch — My Path · service worker.
   App-shell cache for the dashboard; API calls are network-only so
   progress is always read/written against the live lead row. */
const CACHE = 'mypath-v25';

/* GATE_FRESHNESS_BYPASS — this worker controls the whole origin, but the
   GATE (homepage) and its data layer must never be served from this cache.
   The gate's profession registry ships in /v11.js, the files it injects
   (/cst.js, /profs*.js) and /share.js; serving those stale-while-revalidate
   made returning visitors run an old registry (a content deploy only became
   visible one visit later — or, on quick phone visits, effectively never).
   Gate requests fall through to the browser, whose HTTP cache revalidates
   them on every load (Cache-Control: max-age=0, must-revalidate + ETag).
   The dashboard shell below keeps its cache-first behavior unchanged.
   Any future gate data file named /profs<N>.js is covered by the pattern;
   anything else the gate loads must be added to GATE_FILES. */
const GATE_FILES = new Set(['/', '/index.html', '/v11.js', '/share.js', '/cst.js']);
function isGateRequest(url, request) {
  if (GATE_FILES.has(url.pathname)) return true;
  if (/^\/profs\d+\.js$/.test(url.pathname)) return true;
  // Page navigations other than the dashboard itself are the gate's world:
  // never serve a cached gate/track-record HTML document either.
  if (request.mode === 'navigate' && url.pathname !== '/app') return true;
  return false;
}

const SHELL = [
  '/app',
  '/str.js',
  '/app.js',
  '/tracks.js',
  '/tracks2.js',
  '/tracks3.js',
  '/tracks4.js',
  '/tracks5.js',
  '/tracks6.js',
  '/tracks7.js',
  '/tracks8.js',
  '/tracks9.js',
  '/quests.js',
  '/dna.js',
  '/details1.js',
  '/details2.js',
  '/details3.js',
  '/details4.js',
  '/details5.js',
  '/details6.js',
  '/details7.js',
  '/stepdetail.js',
  '/questdetails.js',
  '/questdetails2.js',
  '/questdetail.js',
  '/masha.webp',
  '/manifest.webmanifest',
  '/icon-192.png',
  '/icon-512.png',
  '/favicon-180.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.origin === self.location.origin && isGateRequest(url, e.request)) return; // gate: network + HTTP revalidation only
  if (url.pathname.startsWith('/api/')) return; // network-only: progress & leads
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => {
      const net = fetch(e.request).then((r) => {
        if (r && r.ok && url.origin === self.location.origin) {
          const copy = r.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return r;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
