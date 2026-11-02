/* ===== Career Glitch — My Path (the PathCheck dashboard) =====
   Key = the cg_leads row id from POST /api/pathcheck-lead, carried in
   the URL hash (/app#<uuid>) and mirrored to localStorage so the
   installed PWA reopens on the same path.
   Game state (checks, days, quest, badges, XP) is computed and stored
   server-side in the lead row (api/path-progress.js + pathstate.mjs);
   XP is a deterministic recompute: 10/check + 25/phase + 15/quest.
   The resume is parsed in the browser, stored via /api/path-resume,
   and only SUGGESTS steps — the human confirms every check.
   Language: EN/RU switch lives in the Settings card on the dashboard.
   UI strings live in STR below;
   track/radar/door content carries RU twins in tracks.js (ru / sru /
   hRu / dRu / mapRu / DOORS_RU / GRIDINFO_RU / DOORSTEP_RU). The
   preference persists per lead in progress.lang (server wins on load)
   and is mirrored to localStorage for instant render. Step ids never
   change with language, so progress is language-proof. */
(function(){
'use strict';

var API = '/api/path-progress';
var RESUME_API = '/api/path-resume';
var RESTORE_API = '/api/path-restore';
var LS_KEY = 'pathcheck_lead_id';
var LS_LANG_KEY = 'pathcheck_lang';
var UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
var STAGE_KEYS = {'Student':'student', '0–2 yrs in':'early', '3–5 yrs in':'mid', '5+ yrs in':'senior'};

/* Subscription checkout — Stripe Payment Link, product "Become Top 1%"
   ($9/month recurring; no trial on the Stripe side — the app owns the
   free week). buildPayUrl adds client_reference_id + prefilled_email. */
var SUB_URL = 'https://buy.stripe.com/7sYfZg4ehbn3cHm8EHeEo0u';
/* One-time Full Report ($5) checkout — Stripe Payment Link. */
var REPORT_URL = 'https://buy.stripe.com/4gM7sKaCF1Mt22IcUXeEo0t';
/* Payment attribution: Stripe Payment Links accept client_reference_id
   + prefilled_email as URL params — client_reference_id is what ties a
   payment to the exact lead in Stripe, so we always know who paid. */
function buildPayUrl(base){
  if (!base) return base;
  var params = [];
  if (leadId) params.push('client_reference_id=' + encodeURIComponent(leadId));
  if (lead && lead.email) params.push('prefilled_email=' + encodeURIComponent(lead.email));
  if (!params.length) return base;
  return base + (base.indexOf('?') === -1 ? '?' : '&') + params.join('&');
}
/* Freemium week: 7 days from the lead's creation. Leads created before
   the freemium launch are grandfathered — their week starts on the
   launch day, never retroactively. Enforcement is client-side (pilot);
   the server still validates every step toggle as before. */
var TRIAL_EPOCH = '2026-11-01';
var TRIAL_DAYS = 7;

var RANKS = [
  {t:0,   n:'Unranked',              nRu:'Без ранга'},
  {t:1,   n:'Starter',               nRu:'Стартовый'},
  {t:25,  n:'Climber',               nRu:'На подъёме'},
  {t:50,  n:'Contender',             nRu:'Претендент'},
  {t:70,  n:'Top 25% path',          nRu:'Путь в топ 25%'},
  {t:85,  n:'Top 10% path',          nRu:'Путь в топ 10%'},
  {t:95,  n:'Top 5% path',           nRu:'Путь в топ 5%'},
  {t:100, n:'TOP 1% — path complete', nRu:'TOP 1% — путь пройден'}
];

/* ---------- i18n ---------- */
var STR = window.__CG_STR; /* table lives in /str.js (split 2026-11-01 — upload cap) */

var LANG = 'en';
try { var l0 = localStorage.getItem(LS_LANG_KEY); if (l0 === 'ru' || l0 === 'en') LANG = l0; } catch(e){}

function t(key, params){
  var s = (STR[LANG] && STR[LANG][key]) != null ? STR[LANG][key] : (STR.en[key] || key);
  if (params) Object.keys(params).forEach(function(k){ s = s.replace(new RegExp('\\{' + k + '\\}', 'g'), String(params[k])); });
  return s;
}
function locErr(msg){
  if (!msg) return msg;
  if (LANG === 'ru') return ERR_RU[msg] || 'Не сработало — попробуйте ещё раз.';
  return msg;
}
function pluralRu(n, forms){
  var m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return forms[0];
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return forms[1];
  return forms[2];
}
function stepsWord(n){ return LANG === 'ru' ? pluralRu(n, ['шаг', 'шага', 'шагов']) : (n === 1 ? 'step' : 'steps'); }
function questsWord(n){ return LANG === 'ru' ? pluralRu(n, ['квест', 'квеста', 'квестов']) : (n === 1 ? 'quest' : 'quests'); }
function rankName(r){ return LANG === 'ru' ? (r.nRu || r.n) : r.n; }
function confText(c){
  if (LANG !== 'ru') return c || '';
  return {'High': t('confHigh'), 'Medium': t('confMedium'), 'Low': t('confLow')}[c] || c || '';
}
function profName(prof){
  var meta = (typeof PROF_META !== 'undefined' && PROF_META[prof]) || {};
  if (LANG === 'ru' && typeof PROF_META_RU !== 'undefined' && PROF_META_RU[prof]) return PROF_META_RU[prof];
  return meta.name || '';
}
function profKick(prof){
  var meta = (typeof PROF_META !== 'undefined' && PROF_META[prof]) || {};
  if (LANG === 'ru' && typeof PROF_META_RU !== 'undefined' && PROF_META_RU[prof]) return PROF_META_RU[prof];
  return meta.kick || '';
}
function phaseName(ph, i){
  if (LANG === 'ru' && typeof PHASE_NAMES_RU !== 'undefined' && PHASE_NAMES_RU[i]) return PHASE_NAMES_RU[i];
  return (ph && ph.name) || '';
}
function stepText(s){ return (LANG === 'ru' && s.ru) ? s.ru : s.t; }
function stepSrc(s){ return (LANG === 'ru' && s.sru) ? s.sru : s.src; }
function badgeName(bd){ return (LANG === 'ru' && bd.nameRu) ? bd.nameRu : bd.name; }
function badgeHint(bd){ return (LANG === 'ru' && bd.hintRu) ? bd.hintRu : bd.hint; }
function sigH(s){ return (LANG === 'ru' && s.hRu) ? s.hRu : s.h; }
function sigD(s){ return (LANG === 'ru' && s.dRu) ? s.dRu : s.d; }
function sigMap(s){ return (LANG === 'ru' && s.mapRu) ? s.mapRu : s.map; }

var leadId = null, lead = null, P = null, resume = null, matches = {};
var LS_TAB_KEY = 'pathcheck_tab';
var activeTab = 'path';
try {
  var savedTab = localStorage.getItem(LS_TAB_KEY);
  if (savedTab === 'track') savedTab = 'path';
  if (['path', 'stats', 'radar', 'profile'].indexOf(savedTab) !== -1) activeTab = savedTab;
} catch(e){}
var radarPinged = false;
/* DNA strand view state: 'all' = the master Path view; otherwise a
   strand id from dna.js. In-memory only — a reload lands on All. */
var activeStrand = 'all';

/* ---------- tiny helpers ---------- */
function $(id){ return document.getElementById(id); }
function esc(t){ return String(t == null ? '' : t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function localDate(){ var d = new Date(); var m = ('0' + (d.getMonth() + 1)).slice(-2); var day = ('0' + d.getDate()).slice(-2); return d.getFullYear() + '-' + m + '-' + day; }
function showView(id){
  ['viewBoot','viewRestore','viewDash','viewWaitlist'].forEach(function(v){ $(v).classList.toggle('on', v === id); });
  window.scrollTo({top:0});
}
function rankFor(pct){
  var cur = RANKS[0], next = null;
  for (var i = 0; i < RANKS.length; i++) {
    if (pct >= RANKS[i].t) cur = RANKS[i];
    if (pct < RANKS[i].t) { next = RANKS[i]; break; }
  }
  var frac = next ? (pct - cur.t) / (next.t - cur.t) : 1;
  return {cur:cur, next:next, frac:Math.max(0, Math.min(1, frac))};
}
function toast(msg){
  var tEl = $('toast');
  tEl.textContent = msg;
  tEl.classList.add('on');
  clearTimeout(tEl._h);
  tEl._h = setTimeout(function(){ tEl.classList.remove('on'); }, 3400);
}

/* ---------- confetti (brand pinks, canvas, no lib) ---------- */
function confetti(){
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var cv = $('confettiCanvas'), ctx = cv.getContext('2d');
  cv.width = window.innerWidth; cv.height = window.innerHeight;
  cv.style.display = 'block';
  var colors = ['#F92A82','#FF8CBE','#FFD8EA','#F0E6CF','#c2185b'];
  var parts = [];
  for (var i = 0; i < 110; i++) {
    parts.push({
      x: Math.random() * cv.width, y: -20 - Math.random() * cv.height * 0.35,
      w: 5 + Math.random() * 6, h: 8 + Math.random() * 8,
      vy: 2.2 + Math.random() * 3.2, vx: -1.4 + Math.random() * 2.8,
      rot: Math.random() * Math.PI, vr: -0.12 + Math.random() * 0.24,
      heart: Math.random() < 0.22, c: colors[i % colors.length]
    });
  }
  var start = performance.now();
  (function frame(now){
    var el = now - start;
    ctx.clearRect(0, 0, cv.width, cv.height);
    parts.forEach(function(p){
      p.y += p.vy; p.x += p.vx + Math.sin(el / 300 + p.rot) * 0.6; p.rot += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillStyle = p.c;
      if (p.heart) { ctx.font = (p.w + 7) + 'px serif'; ctx.fillText('♥', -p.w / 2, p.h / 2); }
      else ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (el < 2100) requestAnimationFrame(frame);
    else { ctx.clearRect(0, 0, cv.width, cv.height); cv.style.display = 'none'; }
  })(start);
}
function showBanner(kicker, title, sub){
  var k = $('rbKicker');
  if (k) k.textContent = kicker;
  $('rbRank').textContent = title;
  $('rbSub').textContent = sub;
  $('rankBanner').classList.add('on');
  confetti();
}
function rankBanner(rank){ showBanner(t('rbKicker'), rank, t('rankBannerSub')); }
/* Levels: level = floor(xp/100)+1, derived from the same server XP.
   lastSeenLevel lives in localStorage per lead — no payload changes. */
function levelOf(xp){ return Math.floor((xp || 0) / 100) + 1; }
function levelBanner(lvl){ showBanner(t('rbLevelKicker'), t('levelWord') + ' ' + lvl, t('levelBannerSub')); }
function checkLevelUp(){
  if (!leadId || !P) return;
  var lvl = levelOf(P.xp || 0);
  var key = 'pathcheck_level_' + leadId;
  var seen = null;
  try { seen = parseInt(localStorage.getItem(key), 10); } catch(e){}
  if (seen == null || isNaN(seen)) { try { localStorage.setItem(key, String(lvl)); } catch(e){} return; }
  if (lvl !== seen) { try { localStorage.setItem(key, String(lvl)); } catch(e){} }
  if (lvl > seen) levelBanner(lvl);
}
function dateKeyOf(d){
  var m = ('0' + (d.getMonth() + 1)).slice(-2);
  var day = ('0' + d.getDate()).slice(-2);
  return d.getFullYear() + '-' + m + '-' + day;
}
$('rbClose').addEventListener('click', function(){ $('rankBanner').classList.remove('on'); });
$('rankBanner').addEventListener('click', function(e){ if (e.target === this) this.classList.remove('on'); });

/* ---------- mascot blink (same rig as the gate) ---------- */
var rm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!rm) {
  (function blink(){
    var lids = document.querySelectorAll('.lid');
    lids.forEach(function(l){ l.classList.add('closed'); });
    setTimeout(function(){ lids.forEach(function(l){ l.classList.remove('closed'); }); }, 130);
    var next = 3600 + Math.random() * 1600;
    if (Math.random() < 0.28) setTimeout(blinkOnce, 420);
    setTimeout(blink, next);
    function blinkOnce(){
      lids.forEach(function(l){ l.classList.add('closed'); });
      setTimeout(function(){ lids.forEach(function(l){ l.classList.remove('closed'); }); }, 120);
    }
  })();
}

/* ---------- identity ---------- */
function keyFromUrl(){
  var h = (location.hash || '').replace(/^#/, '').trim();
  return UUID_RE.test(h) ? h : null;
}
function remember(id){
  try { localStorage.setItem(LS_KEY, id); } catch(e){}
  if (location.hash !== '#' + id) history.replaceState(null, '', '/app#' + id);
}
function savedKey(){
  try { var v = localStorage.getItem(LS_KEY); return UUID_RE.test(v || '') ? v : null; } catch(e){ return null; }
}

/* ---------- api ---------- */
function apiGet(){
  return fetch(API + '?lead=' + encodeURIComponent(leadId) + '&d=' + localDate())
    .then(function(r){ return r.json().catch(function(){ return {}; }).then(function(j){ if (!r.ok || !j.ok) throw new Error(j.error || 'load failed'); return j; }); });
}
function apiPost(body){
  body.leadId = leadId;
  body.clientDate = localDate();
  return fetch(API, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body)})
    .then(function(r){ return r.json().catch(function(){ return {}; }).then(function(j){ if (!r.ok || !j.ok) throw new Error(j.error || 'save failed'); return j; }); });
}

/* ---------- language switching ---------- */
function applyStatic(){
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var k = el.getAttribute('data-i18n');
    var v = (STR[LANG] && STR[LANG][k]) != null ? STR[LANG][k] : STR.en[k];
    if (v != null) el.textContent = v;
  });
}
function syncLangChrome(){
  document.documentElement.lang = LANG;
  document.title = t('docTitle');
  var be = $('langEn'), br = $('langRu');
  if (be) be.classList.toggle('on', LANG === 'en');
  if (br) br.classList.toggle('on', LANG === 'ru');
  applyStatic();
}
function adoptLang(l){
  if (l !== 'ru' && l !== 'en') return;
  LANG = l;
  try { localStorage.setItem(LS_LANG_KEY, LANG); } catch(e){}
  syncLangChrome();
}
function setLang(l, opts){
  opts = opts || {};
  if (l !== 'ru' && l !== 'en') return;
  var changed = l !== LANG;
  adoptLang(l);
  if (lead && P) {
    if (waitlistView()) renderWaitlist();
    else renderDash();
  }
  if (changed && opts.persist && leadId) {
    apiPost({action:'lang', lang:LANG}).then(function(j){ if (j.progress) P = j.progress; }).catch(function(){});
  }
}
/* The EN|RU switch lives in the dashboard Settings card (founder call,
   30.10) — its buttons are (re)built by renderDash and bound in wireDash.
   syncLangChrome() null-guards the chrome hooks when they are absent. */
syncLangChrome();

/* ---------- boot ---------- */
function boot(){
  leadId = keyFromUrl() || savedKey();
  if (!leadId) { showView('viewRestore'); return; }
  remember(leadId);
  loadPath();
}
function loadPath(){
  showView('viewBoot');
  apiGet()
    .then(function(j){
      lead = j.lead;
      P = j.progress;
      resume = j.resume || null;
      if (P && (P.lang === 'ru' || P.lang === 'en') && P.lang !== LANG) adoptLang(P.lang); // server wins
      computeMatches();
      if (waitlistView()) { renderWaitlist(); return; }
      renderDash();
    })
    .catch(function(){
      try { localStorage.removeItem(LS_KEY); } catch(e){}
      showView('viewRestore');
      var err = $('restoreErr');
      err.textContent = t('restoreLinkError');
      err.style.display = 'block';
    });
}

/* ---------- restore by email ---------- */
$('restoreBtn').addEventListener('click', restore);
$('restoreEmail').addEventListener('keydown', function(e){ if (e.key === 'Enter') restore(); });
function restore(){
  var email = $('restoreEmail').value.trim();
  var err = $('restoreErr'), btn = $('restoreBtn');
  err.style.display = 'none';
  btn.disabled = true; btn.textContent = t('looking');
  fetch(RESTORE_API, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({email:email})})
    .then(function(r){ return r.json().catch(function(){ return {}; }).then(function(j){ if (!r.ok || !j.ok) throw new Error(j.error || 'not found'); return j; }); })
    .then(function(j){
      leadId = j.lead_id;
      remember(leadId);
      btn.disabled = false; btn.textContent = t('restoreBtn');
      loadPath();
    })
    .catch(function(e){
      btn.disabled = false; btn.textContent = t('restoreBtn');
      err.textContent = locErr(e.message) || t('noPathForEmail');
      err.style.display = 'block';
    });
}

/* ---------- waitlist state ---------- */
/* "Deep checks ready" chips: the live profession registry, in gate
   order. A profession renders only if the shared registry the app
   already loads (PROF_META + TRACKS) knows it — the list cannot drift
   from what the gate can actually check. Legacy 'analyst' is not
   offered: it is no longer matchable at the gate (split 2026-11-01). */
var WL_PROFS = [['law','profLaw'],['cpa','profCpa'],['nurse','profNurse'],['fin','profFin'],
  ['creator','profCreator'],['dataanalyst','profData'],['businessanalyst','profBiz'],['aicreator','profAi'],
  ['healthadmin','profHealth'],['datascientist','profDataSci'],['truckdriver','profTruck'],['counselor','profCounselor'],['electrician','profElectrician'],['hvac','profHvac'],['plumber','profPlumber'],['cybersecurity','profCyber'],['aipm','profAiPm']];
function renderWaitlist(){
  $('wlTyped').textContent = (lead && lead.typed) || t('yourProfession');
  var box = $('wlChips');
  if (box) {
    box.innerHTML = WL_PROFS.filter(function(pair){
      return typeof PROF_META !== 'undefined' && PROF_META[pair[0]] && typeof TRACKS !== 'undefined' && TRACKS[pair[0]];
    }).map(function(pair){
      return '<a class="chip" href="/" style="text-decoration:none;color:var(--ink)">' + esc(t(pair[1])) + '</a>';
    }).join('');
  }
  showView('viewWaitlist');
}

/* ---------- state facts, RU twin (v11.js itself stays untouched) ---------- */
var STATE_NAMES_RU = {AL:'Алабама',AK:'Аляска',AZ:'Аризона',AR:'Арканзас',CA:'Калифорния',CO:'Колорадо',CT:'Коннектикут',DE:'Делавэр',DC:'округ Колумбия',FL:'Флорида',GA:'Джорджия',HI:'Гавайи',ID:'Айдахо',IL:'Иллинойс',IN:'Индиана',IA:'Айова',KS:'Канзас',KY:'Кентукки',LA:'Луизиана',ME:'Мэн',MD:'Мэриленд',MA:'Массачусетс',MI:'Мичиган',MN:'Миннесота',MS:'Миссисипи',MO:'Миссури',MT:'Монтана',NE:'Небраска',NV:'Невада',NH:'Нью-Гэмпшир',NJ:'Нью-Джерси',NM:'Нью-Мексико',NY:'Нью-Йорк',NC:'Северная Каролина',ND:'Северная Дакота',OH:'Огайо',OK:'Оклахома',OR:'Орегон',PA:'Пенсильвания',RI:'Род-Айленд',SC:'Южная Каролина',SD:'Южная Дакота',TN:'Теннесси',TX:'Техас',UT:'Юта',VT:'Вермонт',VA:'Вирджиния',WA:'Вашингтон',WV:'Западная Вирджиния',WI:'Висконсин',WY:'Вайоминг'};
function stateFactRu(prof, code, name){
  if (!name) return '';
  var nm = STATE_NAMES_RU[code] || name;
  if (prof === 'aipm'){
    return 'Ваш штат: никакая лицензия не решает, сколько зарабатывает AI product manager в штате ' + nm + ', — лицензии на эту работу нет, а официальная статистика эту работу даже не считает. Зарплату двигают место и город: одна и та же профессия публикует $83,000 в программе входа и $347,000–$490,000 в передовой лаборатории, а несколько вилок крупного теха печатают диапазон выше для залива Сан-Франциско и метро Нью-Йорка.';
  }
  if (prof === 'healthadmin'){
    return 'Ваш штат: дома престарелых — единственное место, которое закон закрывает лицензией штата: каждый штат требует лицензию администратора дома престарелых (по данным BLS — бюро статистики труда США), и лицензия не переезжает: новый штат — новая лицензия. Больницы и клиники спрашивают диплом и бюджет, а не бумагу штата.';
  }
  if (prof === 'truckdriver'){
    if (code === 'TX') return 'Ваш штат: Техас — передний край: беспилотные грузовики уже возят платные грузы по трассам Техаса. Права CDL выдаёт ваш штат, а правила допусков и часов работы — федеральные.';
    return 'Ваш штат: права CDL выдаёт штат ' + nm + ', а правила допусков и часов работы — федеральные. Внедрение беспилотных грузовиков идёт по карте штат за штатом, поэтому квартальная проверка вашего маршрута в вашем пути — местная по замыслу.';
  }
  if (prof === 'datascientist'){
    return 'Ваш штат: ни одна лицензия не решает, сколько зарабатывает дата-сайентист в штате ' + nm + ' — для этой работы лицензии нет вообще. Оплату двигают место и экран диплома: одно и то же название публикуется за $65,064 в национальной лаборатории и за $285K–$380K в Anthropic.';
  }
  if (prof === 'cpa'){
    if (code === 'CA') return 'Ваш штат: Калифорния лицензирует при 120 credits + 2 года опыта (AB 1175, с 1 января 2026) — пятый год обучения для вас необязателен.';
    if (code === 'TX') return 'Ваш штат: Техас лицензирует при 120 credits + 2 года опыта (SB 262, с 1 августа 2026) — пятый год обучения для вас необязателен.';
    if (code === 'NY') return 'Ваш штат: Нью-Йорк ввёл маршрут 120 credits + 2 года (ноябрь 2025) — пятый год обучения для вас необязателен.';
    if (code === 'WI') return 'Ваш штат: Висконсин ввёл маршрут 120 credits (Act 166) — проверьте его правило опыта, прежде чем платить за пятый год.';
    if (code === 'CO') return 'Ваш штат: маршрут Колорадо на 120 credits вступает в силу 1 января 2027 — подгонка пути к экзамену под него может сэкономить год обучения.';
    return 'Ваш штат: ≈32 штата ввели маршрут 120 credits + 2 года — если ' + nm + ' один из них, строка платы за пятый год — $0. Проверьте в board вашего штата; это меняется каждый квартал.';
  }
  if (prof === 'nurse'){
    if (code === 'CA' || code === 'TX' || code === 'FL') return 'Ваш штат: ' + nm + ' — штат Restricted practice: лицензия NP там работает под надзором на всю карьеру. Та же лицензия стоит больше за границей штата full practice.';
    if (code === 'NY') return 'Ваш штат: Нью-Йорк — штат Full Practice: NP там практикует только под nursing board, поэтому лицензия стоит свою полную вилку.';
    if (code === 'VA') return 'Ваш штат: вакансии Вирджинии продают NP как «Autonomous Practice» — она на стороне full practice карты.';
    return 'Ваш штат: 27 штатов + DC — Full Practice, 12 — Reduced, 11 — Restricted, а CA, TX, FL — все Restricted. Куда попадает ' + nm + ' — решает, сколько там стоит лицензия NP; Полный отчёт это оценивает.';
  }
  if (prof === 'law'){
    return 'Ваш штат: сам bar только что изменился — экзамен NextGen заменил прежний (первые результаты — сентябрь 2026, процент сдачи 72.7%). Какой экзамен и сроки действуют в штате ' + nm + ' — вопрос внедрения по штатам, который Полный отчёт проверяет первым.';
  }
  if (prof === 'creator'){
    return 'Ваш штат: оплата этой работы зависит от города сильнее, чем от штата. Nova Labs публикует ту же работу за $81K–$105K в меньших городах и за $101K–$130K в SF/NYC (Сан-Франциско и Нью-Йорк). И лицензии в этой профессии нет вообще — в том числе в штате ' + nm + ': ваше портфолио — это ваше удостоверение везде.';
  }
  if (prof === 'analyst'){
    return 'Ваш штат: ни одна лицензия не решает, сколько зарабатывает аналитик в штате ' + nm + ' — для этой работы лицензии нет вообще. Оплату двигают место и город: та же работа reporting публикуется за $60K–$75K в Атланте, а места product — за $145K+ в компаниях, где работают удалённо по всей стране.';
  }
  if (prof === 'dataanalyst'){
    return 'Ваш штат: ни одна лицензия не решает, сколько зарабатывает дата-аналитик в штате ' + nm + ' — для этой работы лицензии нет вообще. Оплату двигают место и город: та же работа reporting публикуется за $60K–$75K в Атланте, а места product — за $145K+ в компаниях, где работают удалённо по всей стране.';
  }
  if (prof === 'businessanalyst'){
    return 'Ваш штат: ни одна лицензия не решает, сколько зарабатывает бизнес-аналитик в штате ' + nm + ' — для этой работы лицензии нет вообще. Оплату двигает место: версия с документами публикуется за $51K–$82K на уровне junior, а места strategy — за $124K–$177K.';
  }
  if (prof === 'aicreator'){
    if (code === 'NY') return 'Ваш штат: Нью-Йорк — первый штат, где реклама с AI-исполнителем требует пометки по закону (§396-b, с июня 2026). Если ваши AI-люди появляются в рекламе, пометка в штате ' + nm + ' не опция.';
    return 'Ваш штат: ни одна лицензия не решает эту работу в штате ' + nm + ' — правила платформ по AI одинаковы в каждом штате. Единственный закон штата в книгах: Нью-Йорк требует пометку, когда реклама использует AI-исполнителя (с июня 2026).';
  }
  return 'Ваш штат: ни одно правило штата в наших финансовых данных не меняет этот вердикт — переменная, которая двигает эти вилки, — место, а не граница штата.';
}

/* ---------- the door step (the seat's first move) ---------- */
function doorStepText(){
  if (!lead) return '';
  var pers = lead.personalize || {};
  var stageKey = pers.stage ? STAGE_KEYS[pers.stage] : null;
  if (LANG === 'ru' && typeof DOORSTEP_RU !== 'undefined') {
    var ruSteps = null;
    if (stageKey) {
      if (lead.seat && DOORSTEP_RU.seat && DOORSTEP_RU.seat[lead.seat]) ruSteps = DOORSTEP_RU.seat[lead.seat];
      else if (DOORSTEP_RU.prof && DOORSTEP_RU.prof[lead.prof]) ruSteps = DOORSTEP_RU.prof[lead.prof];
    }
    if (stageKey && ruSteps && ruSteps[stageKey]) {
      var rstep = ruSteps[stageKey];
      if (pers.invested === 'Over $25K') rstep = t('over25k') + rstep;
      return rstep;
    }
    if (lead.seat && typeof DOORS_RU !== 'undefined' && DOORS_RU[lead.seat]) return DOORS_RU[lead.seat];
    return '';
  }
  if (stageKey && typeof V11 !== 'undefined') {
    var v = (lead.seat && V11[lead.seat]) || {};
    var steps = v.step || (typeof PROF_STEPS !== 'undefined' ? PROF_STEPS[lead.prof] : null);
    if (steps && steps[stageKey]) {
      var step = steps[stageKey];
      step = step.replace(/^First step[^:]*:\s*/, '');
      step = step.charAt(0).toUpperCase() + step.slice(1);
      if (pers.invested === 'Over $25K') {
        step = t('over25k') + step;
      }
      return step;
    }
  }
  if (lead.seat && typeof DOORS !== 'undefined' && DOORS[lead.seat]) return DOORS[lead.seat];
  return '';
}
function stateFactLine(){
  if (!lead || !lead.personalize || !lead.personalize.state) return '';
  if (typeof parseState !== 'function') return '';
  var p = parseState(lead.personalize.state);
  if (!p || !p.name) return '';
  if (LANG === 'ru') return stateFactRu(lead.prof, p.code, p.name);
  if (typeof stateFact !== 'function') return '';
  return stateFact(lead.prof, p.code, p.name);
}

/* ---------- resume matching ---------- */
function termHit(text, term){
  var tx = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp('(^|[^a-z0-9])' + tx + '([^a-z0-9]|$)', 'i').test(text);
}
function computeMatches(){
  matches = {};
  if (!resume || !resume.text || typeof RESUME_TERMS === 'undefined') return;
  Object.keys(RESUME_TERMS).forEach(function(stepId){
    var found = RESUME_TERMS[stepId].filter(function(term){ return termHit(resume.text, term); });
    if (found.length) matches[stepId] = found;
  });
}
function matchedStepCount(){ return Object.keys(matches).length; }

/* ---------- render ---------- */
function verdictChipClass(v){
  if (/^YES/.test(v)) return 'yes';
  if (/^NO/.test(v)) return 'no';
  return 'mix';
}
function allSteps(prof){
  var out = [];
  (TRACKS[prof] || []).forEach(function(ph){ ph.steps.forEach(function(s){ out.push(s); }); });
  return out;
}
function stepById(id){
  var all = allSteps(activeProf());
  for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
  return null;
}

/* ---------- target profession (the path leads where they want to go) ---------- */
function targetInfo(){
  if (!lead || !lead.personalize || typeof lead.personalize !== 'object') return null;
  var tg = lead.personalize.target;
  return (tg && typeof tg === 'object') ? tg : null;
}
function isSwitcher(){
  var tg = targetInfo();
  return !!(tg && tg.prof && tg.prof !== lead.prof && typeof TRACKS !== 'undefined' && TRACKS[tg.prof]);
}
function activeProf(){
  return isSwitcher() ? targetInfo().prof : lead.prof;
}
/* The research (waitlist) view is ONLY for leads with nowhere built to
   aim: no target, or a target that is not a built profession. A
   waitlist-shaped lead whose target IS built — legacy rows saved
   before the goal-first gate fix (2026-11-01), e.g. kind 'waitlist' +
   personalize.target {prof:'creator'} — renders the full TARGET
   dashboard instead: isSwitcher()/activeProf() already resolve its
   profession, and the server already derives its quest and validates
   its toggles on the target track (pathstate activeProfOf). */
function waitlistView(){
  return !!(lead && lead.kind === 'waitlist' && !isSwitcher());
}
/* The checked profession's verdict sentence — the "from" point, kept
   visible as context when the path aims at the target. */
function checkedVerdictLine(){
  if (lead.seat && typeof SEATINFO !== 'undefined' && SEATINFO[lead.seat]) {
    var s = SEATINFO[lead.seat];
    return s.label + ' — ' + s.verdict;
  }
  var g = null;
  if (LANG === 'ru' && typeof GRIDINFO_RU !== 'undefined' && GRIDINFO_RU[lead.prof]) g = GRIDINFO_RU[lead.prof];
  else if (typeof GRIDINFO !== 'undefined') g = GRIDINFO[lead.prof] || null;
  return g ? g.head : profKick(lead.prof);
}

/* ---------- freemium week ---------- */
function subActive(){
  return !!(lead && lead.sub && lead.sub.status === 'active');
}
function trialState(){
  var start = TRIAL_EPOCH;
  if (lead && lead.createdAt) {
    var cd = String(lead.createdAt).slice(0, 10);
    if (/^\d{4}-\d{2}-\d{2}$/.test(cd) && cd > start) start = cd;
  }
  var ms = Date.parse(localDate() + 'T00:00:00Z') - Date.parse(start + 'T00:00:00Z');
  var elapsed = Math.floor(ms / 86400000);
  return {start: start, daysLeft: TRIAL_DAYS - elapsed};
}
function isLocked(){
  if (!lead || waitlistView()) return false;
  if (subActive()) return false;
  return trialState().daysLeft <= 0;
}
function daysWord(n){ return LANG === 'ru' ? pluralRu(n, ['день', 'дня', 'дней']) : (n === 1 ? 'day' : 'days'); }
function trialLine(){
  if (subActive()) return t('subActiveLine');
  var ts = trialState();
  if (ts.daysLeft > 0) return t('trialLeft', {n: ts.daysLeft, days: daysWord(ts.daysLeft)});
  return t('freeWeekOver');
}
function paywallCard(){
  /* Full Report cross-sell: free when the lead already unlocked it by
     sharing (recommended[0].reportFree, set via the gate share box —
     founder ruling 2026-11-01: the share itself unlocks). */
  var reportLine = (lead && lead.reportFree)
    ? '<p class="note" style="margin-top:12px">' + esc(t('pwReportFree')) + '</p>'
    : '<p class="note" style="margin-top:12px"><a href="' + esc(buildPayUrl(REPORT_URL)) + '">' + esc(t('pwReport')) + '</a></p>';
  return '<div class="card quest-hero"><div class="kicker">⚑ ' + esc(t('pwKicker')) + '</div>' +
    '<p style="margin-top:8px;font-weight:600">' + esc(t('pwP1')) + '</p>' +
    '<p class="note" style="margin-top:6px">' + esc(t('pwP2')) + '</p>' +
    '<a class="btn" href="' + esc(buildPayUrl(SUB_URL)) + '" style="margin-top:14px;display:inline-block;text-decoration:none">' + esc(t('pwBtn')) + '</a>' +
    reportLine + '</div>';
}

function renderDash(){
  var prof = activeProf();
  var checkedProf = lead.prof;
  var switcher = isSwitcher();
  var meta = PROF_META[prof] || {};
  var isGrid = lead.kind === 'grid' || !lead.seat;
  var seat = (!isGrid && SEATINFO[lead.seat]) ? SEATINFO[lead.seat] : null;
  var grid = null;
  if (LANG === 'ru' && typeof GRIDINFO_RU !== 'undefined' && GRIDINFO_RU[prof]) grid = GRIDINFO_RU[prof];
  else if (typeof GRIDINFO !== 'undefined') grid = GRIDINFO[prof] || null;
  var checks = P.checks || {};
  var steps = allSteps(prof);
  var total = steps.length;
  var doneCount = steps.filter(function(s){ return !!checks[s.id]; }).length;
  var pct = total ? Math.round(doneCount / total * 100) : 0;
  var rank = rankFor(pct);
  var xp = P.xp || 0;
  var lvl = levelOf(xp);

  /* --- verdict recap: stays above the tabs on every tab --- */
  var recap = '';
  if (switcher) {
    /* Founder ruling 2026-11-01: NO traces of the checked profession
       anywhere on a switcher's dashboard. The recap speaks only about
       the CHOSEN (target) profession, rendered exactly like a native
       lead of that profession: the target seat's own label + verdict
       when the target seat is known, else the target profession's
       cluster line. No "you typed", no checked verdict. */
    var tg0 = targetInfo();
    var tgSeat = (tg0 && tg0.seat && typeof SEATINFO !== 'undefined' && SEATINFO[tg0.seat]) ? SEATINFO[tg0.seat] : null;
    if (tgSeat) {
      recap = '<div class="kicker">' + esc(t('yourVerdict')) + ' · ' + esc(profKick(prof)) + '</div>' +
        '<div class="seatlab">' + esc(tgSeat.label) + '</div>' +
        '<span class="verdict-chip ' + verdictChipClass(tgSeat.verdict) + '">' + esc(tgSeat.verdict) + '</span>' +
        '<span class="conf">' + esc(t('confidence')) + esc(confText(tgSeat.conf)) + '</span>';
    } else if (grid) {
      recap = '<div class="kicker">' + esc(t('yourVerdict')) + ' · ' + esc(profKick(prof)) + esc(t('wholeMap')) + '</div>' +
        '<div class="seatlab">' + esc(grid.head) + '</div>' +
        '<p class="hook">' + esc(grid.short) + '</p>';
    } else {
      recap = '<div class="kicker">' + esc(t('yourVerdict')) + ' · ' + esc(profKick(prof)) + '</div>' +
        '<div class="seatlab">' + esc(profName(prof)) + '</div>';
    }
  } else if (seat) {
    recap = '<div class="kicker">' + esc(t('yourVerdict')) + ' · ' + esc(profKick(prof)) + '</div>' +
      '<div class="seatlab">' + esc(seat.label) + '</div>' +
      '<span class="verdict-chip ' + verdictChipClass(seat.verdict) + '">' + esc(seat.verdict) + '</span>' +
      '<span class="conf">' + esc(t('confidence')) + esc(confText(seat.conf)) + '</span>' +
      (lead.typed ? '<p class="hook">' + esc(t('youTyped', {typed: lead.typed})) + '</p>' : '');
  } else if (grid) {
    recap = '<div class="kicker">' + esc(t('yourVerdict')) + ' · ' + esc(profKick(prof)) + esc(t('wholeMap')) + '</div>' +
      '<div class="seatlab">' + esc(grid.head) + '</div>' +
      '<p class="hook">' + esc(grid.short) + '</p>';
  }
  /* The door + state fact describe the CHECK (the "from" point). On a
     target path the destination is carried by the big-goal card and the
     target track itself, so the checked door stays out of the way. */
  var door = switcher ? '' : doorStepText();
  var stateLine = switcher ? '' : stateFactLine();
  var doorBox = '';
  if (door || stateLine) {
    doorBox = '<div class="doorbox"><div class="dl">' + esc(t('firstMove')) + '</div>' +
      (door ? '<p>' + esc(door) + '</p>' : '') +
      (stateLine ? '<p style="margin-top:8px">' + esc(stateLine) + '</p>' : '') + '</div>';
  }
  var recapCard = '<div class="card recap" id="recapCard" style="margin-top:12px">' + recap + doorBox + '</div>';

  /* --- top tab bar --- */
  var tabbar = '<nav class="tabbar" role="tablist" aria-label="My Path">' +
    '<button type="button" class="tabb" data-tabbtn="path" role="tab">' + esc(t('tabPath')) + '</button>' +
    '<button type="button" class="tabb" data-tabbtn="stats" role="tab">' + esc(t('tabStats')) + '</button>' +
    '<button type="button" class="tabb" data-tabbtn="radar" role="tab">' + esc(t('tabRadarShort')) + '</button>' +
    '<button type="button" class="tabb" data-tabbtn="profile" role="tab">' + esc(t('tabProfile')) + '</button></nav>';

  /* --- PATH panel: big goal + quest hero + path map + checklist + resume ---
     Freemium lock: after the free week (no active subscription) the
     doing-layer (quest, map, checklist, resume) locks behind the
     paywall card that sits where the quest card sits. The recap, the
     big-goal card, Stats and Profile stay visible. */
  var locked = isLocked();
  var quest = bigGoalCard();
  var tgInfo = targetInfo();
  if (tgInfo && tgInfo.typed && !tgInfo.prof) {
    quest += '<p class="note" style="margin-top:12px">' + esc(t('targetResearch', {typed: tgInfo.typed})) + '</p>';
  }
  if (locked) {
    quest += paywallCard();
  } else {
    var q = poolQuest();
    if (q && !P.questBonusToday) {
      quest += questPoolCard(q);
    } else if (q && P.questBonusToday) {
      var qStrandDone = (typeof DNA_QUEST_TAGS !== 'undefined' && DNA_QUEST_TAGS[q.id]) ? DNA_QUEST_TAGS[q.id] : null;
      quest += '<div class="card quest" data-quest="done" tabindex="0"><div class="kicker">' + esc(t('questDoneKicker')) + '</div>' +
        '<p style="margin-top:8px;font-weight:600">' + esc(t('questDoneBody', {step: shortQuest(q), n: '15'})) + '</p>' +
        (qStrandDone ? '<p style="margin-top:6px;font-size:13px;color:var(--deep);font-weight:600">🧬 ' + esc(t('todayFeeds', {strand: strandName(qStrandDone)})) + '</p>' : '') +
        '<div class="qdone-row"><span class="qtap">' + esc(t('questOpenHint')) + '</span>' +
        '<button type="button" class="qundo" data-qundo="1">' + esc(t('questUndoBtn')) + '</button></div></div>';
    }
    if (total && doneCount === total) {
      quest += '<div class="card quest"><div class="kicker">' + esc(t('pathCompleteKicker')) + '</div><p style="margin-top:8px;font-weight:600">' + esc(t('pathCompleteBody')) + '</p></div>';
    }
  }

  var trackHtml = '<div id="checklist">' + TRACKS[prof].map(function(ph, i){
    var phDone = ph.steps.filter(function(s){ return !!checks[s.id]; }).length;
    var phPct = ph.steps.length ? Math.round(phDone / ph.steps.length * 100) : 0;
    var stepsHtml = ph.steps.map(function(s){ return stepHtml(s); }).join('');
    return '<div class="phase"><div class="phase-head"><span class="phase-no">' + esc(t('phaseLabel')) + (i + 1) + '</span>' +
      '<span class="phase-name">' + esc(phaseName(ph, i)) + '</span><span class="phase-count">' + phDone + '/' + ph.steps.length + '</span></div>' +
      '<div class="phasebar"><div class="phasefill" style="width:' + phPct + '%"></div></div>' + stepsHtml + '</div>';
  }).join('') + '</div>';

  /* --- TOP 1% DNA: helix + strand pills under the quest area. ALL
     view keeps the map + master checklist; a strand view replaces
     that area with the strand's own dashboard. Locked (paywall)
     state renders neither — strand steps lock with everything else. */
  var dnaHtml = '';
  var viewHtml = mapHtml(checks, door) + trackHtml;
  if (typeof DNA_STRANDS !== 'undefined') {
    if (activeStrand !== 'all' && !strandMeta(activeStrand)) activeStrand = 'all';
    dnaHtml = dnaSectionHtml(prof, pct);
    if (activeStrand !== 'all') viewHtml = strandViewHtml(prof);
  }

  var pathPanel = '<div class="tabpanel" id="panelPath">' + quest +
    (locked ? '' : dnaHtml + viewHtml + resumeCardHtml()) + '</div>';

  /* --- STATS panel --- */
  var statsPanel = '<div class="tabpanel" id="panelStats">' + statsHtml({
    xp: xp, lvl: lvl, pct: pct, rank: rank, doneCount: doneCount, total: total,
    streak: P.streak || 0,
    phasesDone: TRACKS[prof].filter(function(ph){ return ph.steps.length && ph.steps.every(function(s){ return !!checks[s.id]; }); }).length,
    badgesEarned: (P.badges || []).length,
    meta: meta
  }) + badgesHtml() + '</div>';

  /* --- RADAR panel (part of the service — locks with the free week) --- */
  var radarHtml = locked
    ? '<div class="card" style="margin-top:14px"><div class="kicker">' + esc(t('tabRadarShort')) + '</div>' +
      '<p class="note" style="margin-top:8px">' + esc(t('radarLockedNote')) + '</p></div>'
    : '<p class="note" style="margin-top:14px">' + esc(t('radarIntro')) + '</p>' +
    (RADAR[prof] || []).map(function(sig){
      return '<div class="sig-card"><h4>' + esc(sigH(sig)) + '</h4><div class="d">' + esc(sigD(sig)) + '</div>' +
        '<p class="m"><b>' + esc(t('toChecklist')) + '</b> ' + esc(sigMap(sig)) + '</p>' +
        (sig.url ? '<p class="m" style="margin-top:5px"><a href="' + esc(sig.url) + '" target="_blank" rel="noopener">' + esc(t('source')) + '</a></p>' : '') + '</div>';
    }).join('');
  var radarPanel = '<div class="tabpanel" id="panelRadar">' + radarHtml + '</div>';

  /* --- PROFILE panel: settings (language lives ONLY here), install, restore --- */
  var settings = '<div class="card" id="settingsCard"><div class="kicker">' + esc(t('settingsKicker')) + '</div>' +
    '<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:12px">' +
    '<span style="font-weight:600">' + esc(t('settingsLangLabel')) + '</span>' +
    '<span class="langsw" role="group" aria-label="Language / Язык">' +
    '<button type="button" id="langEn" class="' + (LANG === 'en' ? 'on' : '') + '">EN</button>' +
    '<button type="button" id="langRu" class="' + (LANG === 'ru' ? 'on' : '') + '">RU</button>' +
    '</span></div></div>';

  var install = '<div class="card install"><div class="kicker" style="color:var(--pink)">' + esc(t('installKicker')) + '</div>' +
    '<h3 style="margin-top:5px">' + esc(t('installH3')) + '</h3>' +
    '<p id="installText">' + esc(t('installText')) + '</p>' +
    '<button class="btn" id="installBtn" style="display:none">' + esc(t('installBtn')) + '</button></div>';

  var restoreCard = '<div class="card"><div class="kicker">' + esc(t('profRestoreKicker')) + '</div>' +
    '<h3 style="font-size:19px;margin-top:5px">' + esc(t('profRestoreH3')) + '</h3>' +
    '<p class="note" style="margin-top:6px">' + esc(t('profRestoreText')) + '</p>' +
    '<button class="btn ghost" id="restoreByEmailBtn" style="margin-top:12px">' + esc(t('profRestoreBtn')) + '</button></div>';

  /* --- PROFILE extras: plan/trial status --- */
  var planCard = '<div class="card"><div class="kicker">' + esc(t('planKicker')) + '</div>' +
    '<p style="margin-top:8px;font-weight:600">' + esc(trialLine()) + '</p></div>';
  /* No "Your check" card (founder ruling 2026-11-01): a switcher's
     dashboard speaks only about the chosen profession, Profile too. */

  var profilePanel = '<div class="tabpanel" id="panelProfile">' + settings + planCard + install + restoreCard +
    '<p class="foot">' + esc(t('footerLine', {name: profName(prof), count: meta.count || ''})) + '<a href="/">' + esc(t('runAnother')) + '</a></p></div>';

  $('dashBody').innerHTML = recapCard + tabbar + pathPanel + statsPanel + radarPanel + profilePanel;

  showView('viewDash');
  wireDash();
  showTab(activeTab);
  checkLevelUp();
}

/* ---------- tabs ---------- */
function showTab(name){
  if (['path', 'stats', 'radar', 'profile'].indexOf(name) === -1) name = 'path';
  activeTab = name;
  try { localStorage.setItem(LS_TAB_KEY, name); } catch(e){}
  document.querySelectorAll('#dashBody [data-tabbtn]').forEach(function(b){
    var on = b.getAttribute('data-tabbtn') === name;
    b.classList.toggle('on', on);
    b.setAttribute('aria-selected', on ? 'true' : 'false');
  });
  var panels = {path: 'panelPath', stats: 'panelStats', radar: 'panelRadar', profile: 'panelProfile'};
  Object.keys(panels).forEach(function(k){
    var el = $(panels[k]);
    if (el) el.style.display = (k === name) ? 'block' : 'none';
  });
  if (name === 'radar') radarPing();
}
function radarPing(){
  if (radarPinged) return;
  if (isLocked()) return; // the radar is locked — no badge, no ping
  radarPinged = true;
  if (!P || P.radarOpened) return;
  apiPost({action: 'radar'}).then(function(j){
    var had = (P.badges || []).indexOf('radar-reader') !== -1;
    P = j.progress;
    if (!had && (P.badges || []).indexOf('radar-reader') !== -1) {
      var bd = BADGE_DEFS.filter(function(x){ return x.id === 'radar-reader'; })[0];
      if (bd) toast(t('badgeEarned', {name: badgeName(bd), icon: bd.icon}));
    }
  }).catch(function(){});
}

/* ---------- path map ---------- */
function mapLabel(text){
  var s = String(text || '').split('. ')[0];
  if (s.length > 46) s = s.slice(0, 45).trim() + '…';
  return s;
}
function mapHtml(checks, doorText){
  var prof = activeProf();
  var stepsAll = allSteps(prof);
  var currentId = null;
  stepsAll.forEach(function(s){ if (!checks[s.id] && currentId === null) currentId = s.id; });
  var num = {};
  stepsAll.forEach(function(s, i){ num[s.id] = i + 1; });
  var zones = TRACKS[prof].map(function(ph, i){
    var nodes = [];
    if (i === 0 && doorText) nodes.push({door: true});
    ph.steps.forEach(function(s){ nodes.push({step: s}); });
    var H = nodes.length * 66;
    var pts = nodes.map(function(nd, j){ return ((j % 2 === 0) ? 26 : 74) + ',' + (j * 66 + 33); }).join(' ');
    var inner = '<svg class="mapline" viewBox="0 0 100 ' + H + '" preserveAspectRatio="none" aria-hidden="true"><polyline points="' + pts + '" fill="none" stroke="#FFC7DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg>';
    nodes.forEach(function(nd, j){
      var leftPct = (j % 2 === 0) ? 26 : 74;
      var top = j * 66 + 10;
      var labStyle = (j % 2 === 0)
        ? 'left:calc(26% + 34px);text-align:left;top:' + (j * 66 + 33) + 'px'
        : 'right:calc(26% + 34px);text-align:right;top:' + (j * 66 + 33) + 'px';
      if (nd.door) {
        inner += '<button type="button" class="mnode door" style="left:' + leftPct + '%;top:' + top + 'px" data-node="door" aria-label="' + esc(t('mapDoorLabel')) + '">♥</button>' +
          '<span class="mlab" style="' + labStyle + '">' + esc(t('mapDoorLabel')) + '</span>';
      } else {
        var s = nd.step, done = !!checks[s.id], cur = s.id === currentId;
        inner += '<button type="button" class="mnode' + (done ? ' done' : '') + (cur ? ' cur' : '') + '" style="left:' + leftPct + '%;top:' + top + 'px" data-node="' + s.id + '" aria-label="' + esc(mapLabel(stepText(s))) + '">' + (done ? '✓' : num[s.id]) + '</button>' +
          '<span class="mlab' + (done ? ' done' : '') + '" style="' + labStyle + '">' + esc(mapLabel(stepText(s))) + '</span>';
      }
    });
    var phDone = ph.steps.filter(function(s){ return !!checks[s.id]; }).length;
    return '<div class="mapzone"><div class="phase-head"><span class="phase-no">' + esc(t('phaseLabel')) + (i + 1) + '</span>' +
      '<span class="phase-name">' + esc(phaseName(ph, i)) + '</span><span class="phase-count">' + phDone + '/' + ph.steps.length + '</span></div>' +
      '<div class="maparea" style="height:' + H + 'px">' + inner + '</div></div>';
  }).join('');
  return '<div class="card mapcard"><div class="kicker">' + esc(t('mapKicker')) + '</div>' + zones + '</div>';
}
function flashStep(id){
  var el = null;
  if (id === 'door') el = document.querySelector('#recapCard .doorbox') || $('recapCard');
  else el = document.querySelector('#dashBody .step[data-step="' + id + '"]');
  if (!el) return;
  el.scrollIntoView({behavior: 'smooth', block: 'center'});
  el.classList.remove('flash');
  void el.offsetWidth;
  el.classList.add('flash');
  setTimeout(function(){ el.classList.remove('flash'); }, 1500);
}

/* ---------- stats ---------- */
function statsHtml(ctx){
  var CIRC = 2 * Math.PI * 64;
  var rem = 100 - (ctx.xp % 100);
  var lvlProg = ctx.xp % 100;
  var ring = '<div class="ringwrap big"><svg width="150" height="150" viewBox="0 0 150 150">' +
    '<defs><linearGradient id="ringgrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F92A82"/><stop offset="1" stop-color="#FF8CBE"/></linearGradient></defs>' +
    '<circle class="ringbg" cx="75" cy="75" r="64" fill="none" stroke-width="11"/>' +
    '<circle class="ringfg" id="ringFg" cx="75" cy="75" r="64" fill="none" stroke-width="11" stroke-dasharray="' + CIRC.toFixed(1) + '" stroke-dashoffset="' + (CIRC * (1 - ctx.pct / 100)).toFixed(1) + '"/>' +
    '</svg><div class="ringpct"><span id="ringPct">' + ctx.pct + '%</span><small>' + esc(t('ofThePath')) + '</small></div></div>';

  var rankBlock = '<div class="center"><div class="kicker">' + esc(t('statsKicker')) + '</div>' +
    '<div style="display:flex;justify-content:center;margin-top:12px">' + ring + '</div>' +
    '<div class="big" style="font-family:\'Outfit\',sans-serif;font-weight:800;font-size:19px;margin-top:10px">' + esc(rankName(ctx.rank.cur)) + '</div>' +
    '<span class="lvchip">Lv ' + ctx.lvl + '</span>' +
    '<div class="rankline" style="text-align:left"><div class="rl"><span>' + esc(t('pathRank')) + ': <b>' + esc(rankName(ctx.rank.cur)) + '</b></span>' +
    (ctx.rank.next ? '<span>' + esc(t('next')) + '<b>' + esc(rankName(ctx.rank.next)) + '</b>' + esc(t('atPct')) + ctx.rank.next.t + '%</span>' : '<span><b>' + esc(t('maxRank')) + '</b></span>') + '</div>' +
    '<div class="ranktrack"><div class="rankfill" style="width:' + Math.round(ctx.rank.frac * 100) + '%"></div></div></div>' +
    '<div class="rankline" style="text-align:left"><div class="rl"><span>' + esc(t('levelWord')) + ' <b>' + ctx.lvl + '</b></span><span>' + esc(t('lvToNext', {rem: rem, n: ctx.lvl + 1})) + '</span></div>' +
    '<div class="ranktrack"><div class="rankfill" style="width:' + lvlProg + '%"></div></div></div>' +
    '<p class="note" style="margin-top:10px;text-align:left">' + esc(t('progressNote', {count: ctx.meta.count || '', what: (LANG === 'ru' ? (ctx.meta.srcWhatRu || 'настоящих вакансий') : (ctx.meta.srcWhat || 'real postings'))})) + '</p></div>';

  function tile(v, l){
    return '<div class="tile"><div class="tv">' + v + '</div><div class="tl">' + esc(l) + '</div></div>';
  }
  var tiles = '<div class="tiles">' +
    tile(ctx.xp, t('tileXp')) +
    tile('Lv ' + ctx.lvl, t('tileLevel')) +
    tile(ctx.streak + ' 🔥', t('tileStreak')) +
    tile(ctx.doneCount + '/' + ctx.total, t('tileSteps')) +
    tile(ctx.phasesDone + '/3', t('tilePhases')) +
    tile(ctx.badgesEarned + '/11', t('tileBadges')) +
    '</div>';

  var WD_EN = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  var WD_RU = ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'];
  var days = P.days || {};
  var week = '';
  for (var back = 6; back >= 0; back--) {
    var d = new Date();
    d.setDate(d.getDate() - back);
    var on = (days[dateKeyOf(d)] || 0) > 0;
    week += '<div class="wday' + (on ? ' on' : '') + (back === 0 ? ' today' : '') + '"><span class="wd">' + (LANG === 'ru' ? WD_RU : WD_EN)[d.getDay()] + '</span><span class="wdot"></span></div>';
  }
  var weekBlock = '<div style="margin-top:18px"><div class="kicker">' + esc(t('weekKicker')) + '</div><div class="week">' + week + '</div></div>';

  return '<div class="card">' + rankBlock + tiles + weekBlock + '</div>';
}
function badgesHtml(){
  return '<div class="card"><div class="kicker">' + esc(t('badgesKicker')) + '</div><div class="badges">' +
    BADGE_DEFS.map(function(bd){
      var on = (P.badges || []).indexOf(bd.id) !== -1;
      return '<div class="badge ' + (on ? 'on' : 'off') + '" data-badge="' + bd.id + '"><div class="bi">' + bd.icon + '</div>' +
        (on ? '' : '<span class="block-ic" aria-hidden="true">🔒</span>') +
        '<div class="bn">' + esc(badgeName(bd)) + '</div><div class="bh">' + (on ? esc(t('earned')) : esc(badgeHint(bd))) + '</div></div>';
    }).join('') + '</div></div>';
}

function shortStep(s){ var tx = stepText(s); return tx.length > 90 ? tx.slice(0, 90) + '…' : tx; }

/* ---------- daily micro-quest + big goal ---------- */
function poolQuest(){
  if (!P || !P.quest || !P.quest.questId || typeof QUESTS === 'undefined' || !lead) return null;
  var pool = QUESTS[activeProf()] || [];
  for (var i = 0; i < pool.length; i++) if (pool[i].id === P.quest.questId) return pool[i];
  return null;
}
function questText(q){ return (LANG === 'ru' && q.ru) ? q.ru : q.t; }
function questTag(q){ return (LANG === 'ru' && q.tagRu) ? q.tagRu : q.tag; }
function shortQuest(q){ var tx = questText(q); return tx.length > 90 ? tx.slice(0, 90) + '…' : tx; }
function bigGoalText(){
  if (isSwitcher()) {
    var tg = targetInfo();
    if (LANG === 'ru') {
      if (tg.seat && typeof BIGGOALS_RU !== 'undefined' && BIGGOALS_RU[tg.seat]) return BIGGOALS_RU[tg.seat];
      return (typeof BIGGOAL_PROF_RU !== 'undefined' && BIGGOAL_PROF_RU[tg.prof]) || '';
    }
    if (tg.seat && typeof BIGGOALS !== 'undefined' && BIGGOALS[tg.seat]) return BIGGOALS[tg.seat];
    return (typeof BIGGOAL_PROF !== 'undefined' && BIGGOAL_PROF[tg.prof]) || '';
  }
  var seat = (lead && lead.kind !== 'grid' && lead.seat) ? lead.seat : null;
  if (LANG === 'ru') {
    if (seat && typeof BIGGOALS_RU !== 'undefined' && BIGGOALS_RU[seat]) return BIGGOALS_RU[seat];
    return (typeof BIGGOAL_PROF_RU !== 'undefined' && BIGGOAL_PROF_RU[lead.prof]) || '';
  }
  if (seat && typeof BIGGOALS !== 'undefined' && BIGGOALS[seat]) return BIGGOALS[seat];
  return (typeof BIGGOAL_PROF !== 'undefined' && BIGGOAL_PROF[lead.prof]) || '';
}
function bigGoalCard(){
  var txt = bigGoalText();
  if (!txt) return '';
  return '<div class="card biggoal"><div class="kicker">' + esc(t('bigGoalKicker')) + '</div>' +
    '<p class="bg-t">' + esc(txt) + '</p></div>';
}
function questPoolCard(q){
  var qStrand = (typeof DNA_QUEST_TAGS !== 'undefined' && DNA_QUEST_TAGS[q.id]) ? DNA_QUEST_TAGS[q.id] : null;
  var feed = qStrand ? '<span class="qfeed">🧬 ' + esc(t('todayFeeds', {strand: strandName(qStrand)})) + '</span>' : '';
  return '<div class="card quest-hero"><div class="kicker">⚑ ' + esc(t('todaysQuest')) + '</div>' +
    '<div class="qrow"><div class="step" data-quest="1" role="checkbox" aria-checked="false" tabindex="0">' +
    '<span class="box" aria-hidden="true"></span><span class="st"><span class="qstep-t">' + esc(questText(q)) + '</span>' +
    '<span class="ss">' + esc(questTag(q)) + '<span class="bonus-tag">' + esc(t('questBonusTag')) + '</span></span>' + feed +
    '<span class="qtap">' + esc(t('questTapHint')) + '</span></span></div>' +
    '<img class="qmascot" src="/masha.webp" alt="" width="640" height="639"></div></div>';
}

/* ---------- TOP 1% DNA (data: dna.js) ----------
   Everything resolves against the ACTIVE profession (the target on a
   switcher path) and, for goals, the active seat. A strand with
   tagged steps measures by steps; a strand with none measures by its
   completed quests (server questLog; questDone as the legacy
   fallback) — never a fake %. */
function strandMeta(id){
  if (typeof DNA_STRANDS === 'undefined') return null;
  for (var i = 0; i < DNA_STRANDS.length; i++) if (DNA_STRANDS[i].id === id) return DNA_STRANDS[i];
  return null;
}
function strandName(id){ var m = strandMeta(id); return m ? (LANG === 'ru' ? m.nameRu : m.name) : id; }
function strandShort(id){ var m = strandMeta(id); return m ? (LANG === 'ru' ? m.shortRu : m.short) : id; }
function stepTagHtml(s){
  if (typeof DNA_STEP_TAGS === 'undefined') return '';
  var sid = (DNA_STEP_TAGS[activeProf()] || {})[s.id];
  if (!sid) return '';
  return '<span class="stag' + (sid === 'ai' ? ' stag-ai' : '') + '" data-strand-tag="' + sid + '">' + esc(strandShort(sid)) + '</span>';
}
function dnaSeat(){
  if (isSwitcher()) { var tg = targetInfo(); return tg ? (tg.seat || null) : null; }
  return (lead && lead.kind !== 'grid' && lead.seat) ? lead.seat : null;
}
function strandSteps(prof, strandId){
  var tags = (typeof DNA_STEP_TAGS !== 'undefined' && DNA_STEP_TAGS[prof]) || {};
  return allSteps(prof).filter(function(s){ return tags[s.id] === strandId; });
}
function strandQuests(prof, strandId){
  if (typeof QUESTS === 'undefined' || typeof DNA_QUEST_TAGS === 'undefined') return [];
  return (QUESTS[prof] || []).filter(function(q){ return DNA_QUEST_TAGS[q.id] === strandId; });
}
function strandQuestDone(prof, strandId){
  var ids = {};
  strandQuests(prof, strandId).forEach(function(q){ ids[q.id] = 1; });
  var seen = {};
  var log = (P && P.questLog) || [];
  if (log.length) {
    log.forEach(function(e){ if (e && ids[e.questId]) seen[e.date] = 1; });
  } else if (P && P.questDone) {
    Object.keys(P.questDone).forEach(function(d){ if (ids[P.questDone[d]]) seen[d] = 1; });
  }
  return Object.keys(seen).length;
}
function strandProgress(prof, strandId){
  var st = strandSteps(prof, strandId);
  if (st.length) {
    var checks = (P && P.checks) || {};
    var done = st.filter(function(s){ return !!checks[s.id]; }).length;
    return {mode:'steps', done:done, total:st.length, pct: Math.round(done / st.length * 100)};
  }
  var qs = strandQuests(prof, strandId);
  var qd = strandQuestDone(prof, strandId);
  return {mode:'quests', done:qd, total:qs.length, pct: qs.length ? Math.round(qd / qs.length * 100) : 0};
}
function dnaGoalText(strandId){
  var prof = activeProf();
  var seat = dnaSeat();
  var seatTable = LANG === 'ru'
    ? (typeof DNA_SEAT_GOALS_RU !== 'undefined' ? DNA_SEAT_GOALS_RU : {})
    : (typeof DNA_SEAT_GOALS !== 'undefined' ? DNA_SEAT_GOALS : {});
  if (seat && seatTable[seat] && seatTable[seat][strandId]) return seatTable[seat][strandId];
  if (strandId === 'niche' && seat) {
    /* The seat's niche goal IS its big goal — the destination line. */
    var bg = LANG === 'ru'
      ? (typeof BIGGOALS_RU !== 'undefined' && BIGGOALS_RU[seat])
      : (typeof BIGGOALS !== 'undefined' && BIGGOALS[seat]);
    if (bg) return bg;
  }
  var table = LANG === 'ru' ? DNA_GOALS_RU : DNA_GOALS;
  return ((table || {})[prof] || {})[strandId] || '';
}
function helixHtml(prof){
  var C = {craft:[96,34], ai:[264,34], proof:[96,88], voice:[264,88], background:[180,142], niche:[96,196], network:[264,196]};
  function node(id){
    var p = strandProgress(prof, id);
    var c = C[id];
    var r = id === 'background' ? 21 : 17;
    var sel = activeStrand === id;
    return '<g class="dnode' + (sel ? ' sel' : '') + '" data-strand-node="' + id + '" transform="translate(' + c[0] + ',' + c[1] + ')" role="button" tabindex="0" aria-label="' + esc(strandName(id)) + ' — ' + p.pct + '%">' +
      (sel ? '<circle class="dsel" r="' + (r + 6) + '"></circle>' : '') +
      '<circle class="dtrack" r="' + r + '"></circle>' +
      '<circle class="darc" r="' + r + '" pathLength="100" stroke-dasharray="' + p.pct + ' 100" transform="rotate(-90)"></circle>' +
      '<text class="dpct" y="4">' + p.pct + '%</text></g>' +
      '<text class="dnalab" x="' + c[0] + '" y="' + (c[1] + r + 15) + '">' + esc(strandShort(id)) + '</text>';
  }
  return '<svg class="helix" viewBox="0 0 360 238" role="group" aria-label="' + esc(t('dnaKicker')) + '">' +
    '<line class="dspine" x1="180" y1="14" x2="180" y2="222"></line>' +
    '<path class="dstrand a" d="M96,34 C160,50 220,66 264,88 C286,99 232,128 180,142 C128,156 108,178 96,196"></path>' +
    '<path class="dstrand b" d="M264,34 C200,50 140,66 96,88 C74,99 128,128 180,142 C232,156 252,178 264,196"></path>' +
    '<line class="drung" x1="96" y1="34" x2="264" y2="34"></line>' +
    '<line class="drung" x1="96" y1="88" x2="264" y2="88"></line>' +
    '<line class="drung" x1="96" y1="196" x2="264" y2="196"></line>' +
    ['craft','ai','proof','voice','background','niche','network'].map(node).join('') +
    '</svg>';
}
function dnaSectionHtml(prof, overallPct){
  var pills = '<button type="button" class="spill' + (activeStrand === 'all' ? ' on' : '') + '" data-strand-pill="all">' + esc(t('dnaAll')) + '<span class="sp">' + overallPct + '%</span></button>';
  pills += DNA_STRANDS.map(function(sm){
    var p = strandProgress(prof, sm.id);
    return '<button type="button" class="spill' + (activeStrand === sm.id ? ' on' : '') + '" data-strand-pill="' + sm.id + '">' + esc(strandShort(sm.id)) + '<span class="sp">' + p.pct + '%</span></button>';
  }).join('');
  return '<div class="card dnacard" id="dnaCard"><div class="kicker">' + esc(t('dnaKicker')) + '</div>' +
    '<p class="note" style="margin-top:6px">' + esc(t('dnaSub')) + '</p>' +
    helixHtml(prof) + '<div class="spills">' + pills + '</div></div>';
}
function feedHtml(prof, strandId){
  var qs = strandQuests(prof, strandId);
  if (!qs.length) return '';
  var rows = qs.map(function(q){
    var isToday = !!(P.quest && q.id === P.quest.questId);
    var chip = isToday ? '<span class="todaychip">' + esc(P.questBonusToday ? t('questDoneChip') : t('todaysQuestChip')) + '</span>' : '';
    return '<div class="feedrow' + (isToday ? ' today' : '') + '"><div class="fq-t">' + esc(questText(q)) + '</div>' +
      '<div class="fq-m">' + esc(questTag(q)) + chip + '</div></div>';
  }).join('');
  return '<div class="card dna-feed"><div class="kicker">🧬 ' + esc(t('feedStrand')) + '</div>' + rows + '</div>';
}
function strandViewHtml(prof){
  var sm = strandMeta(activeStrand);
  if (!sm) return '';
  var p = strandProgress(prof, activeStrand);
  var out = '<div class="strandview">';
  out += '<div class="card dna-goal"><div class="kicker">' + sm.icon + ' ' + esc(strandName(activeStrand)) + ' · ' + esc(t('strandGoalKicker')) + '</div>' +
    '<p style="font-family:\'Outfit\',sans-serif;font-weight:700;font-size:16.5px;line-height:1.45;margin-top:7px">' + esc(dnaGoalText(activeStrand)) + '</p></div>';
  var line = p.mode === 'steps'
    ? t('stepsDone', {done: p.done, total: p.total, steps: stepsWord(p.total)})
    : t('questsDoneLine', {done: p.done, total: p.total, quests: questsWord(p.total)});
  out += '<div class="card dna-prog"><div style="display:flex;justify-content:space-between;align-items:baseline;font-size:13.5px;color:var(--mut)"><span style="font-family:\'Outfit\',sans-serif;font-weight:900;font-size:19px;color:var(--ink)">' + p.pct + '%</span><span>' + esc(line) + '</span></div>' +
    '<div class="ranktrack" style="height:12px"><div class="rankfill" style="width:' + p.pct + '%"></div></div>' +
    (p.mode === 'quests' ? '<p class="note">' + esc(t('questFedNote')) + '</p>' : '') + '</div>';
  if (p.mode === 'steps') {
    out += '<div style="margin-top:22px"><div class="kicker" style="margin:0 2px">' + esc(t('strandStepsKicker')) + '</div><div id="strandSteps">' +
      strandSteps(prof, activeStrand).map(function(s){ return stepHtml(s); }).join('') + '</div></div>';
  }
  out += feedHtml(prof, activeStrand);
  return out + '</div>';
}
function setStrand(id){
  if (id !== 'all' && !strandMeta(id)) id = 'all';
  activeStrand = id;
  renderDash();
  var dc = $('dnaCard');
  if (dc) dc.scrollIntoView({behavior:'smooth', block:'start'});
}

function stepHtml(s){
  var checks = P.checks || {};
  var done = !!checks[s.id];
  var ev = '';
  var found = matches[s.id] || [];
  if (found.length) {
    var chips = found.slice(0, 3).map(function(term){ return '<span class="evchip">' + esc(t('evidenceFound', {term: term})) + '</span>'; }).join('');
    if (found.length > 3) chips += '<span class="evchip">' + esc(t('moreFound', {n: found.length - 3})) + '</span>';
    var confirmed = (P.resumeConfirmed || []).indexOf(s.id) !== -1;
    var btn = '';
    if (!done) btn = '<button class="confbtn" data-confirm="' + s.id + '">' + esc(t('confirmBtn')) + '</button>';
    else if (confirmed) btn = '<span class="evchip" style="background:var(--butter);color:var(--ink)">' + esc(t('confirmedChip')) + '</span>';
    ev = '<span class="evrow">' + chips + btn + '</span>';
  }
  return '<div class="step' + (done ? ' done' : '') + '" data-step="' + s.id + '" role="checkbox" aria-checked="' + done + '" tabindex="0">' +
    '<span class="box" aria-hidden="true">' + (done ? '✓' : '') + '</span>' +
    '<span class="st">' + esc(stepText(s)) + stepTagHtml(s) + '<span class="ss">' + esc(stepSrc(s)) + '</span>' + ev + '</span>' +
    '<span class="sgo" aria-hidden="true">›</span></div>';
}

/* ---------- resume card ---------- */
function resumeCardHtml(){
  var inner = '<div class="kicker">' + esc(t('resumeKicker')) + '</div>' +
    '<h3 style="font-size:19px;margin-top:5px">' + esc(t('resumeH3')) + '</h3>';
  if (resume && resume.text) {
    var d = resume.uploadedAt ? new Date(resume.uploadedAt) : null;
    var n = matchedStepCount();
    inner += '<p class="note" style="margin-top:6px">📄 <b>' + esc(resume.fileName) + '</b>' +
      (d ? ' · ' + d.toLocaleDateString(LANG === 'ru' ? 'ru-RU' : 'en-US', {month:'short', day:'numeric', year:'numeric'}) : '') +
      esc(t('resumeMappedA')) + '<b>' + n + ' ' + esc(stepsWord(n)) + '</b>' + esc(t('resumeMappedB')) + '</p>' +
      '<p class="note">' + esc(t('resumeConfirmNote')) + '</p>';
  } else {
    inner += '<p class="note" style="margin-top:6px">' + esc(t('resumeEmptyNote')) + '</p>';
  }
  inner +=
    '<label class="filepick" style="margin-top:13px">' + esc(resume ? t('replaceResume') : t('chooseResume')) +
    '<input type="file" id="resumeFile" accept=".pdf,.docx,.txt,.md" style="display:none"></label>' +
    '<p class="err" id="resumeErr"></p>' +
    '<p class="note" id="resumeStatus"></p>' +
    '<p class="note"><a href="#" id="pasteToggle">' + esc(t('pasteToggle')) + '</a></p>' +
    '<div id="pasteBox" style="display:none;margin-top:10px"><textarea class="field" id="resumeText" placeholder="' + esc(t('pastePlaceholder')) + '"></textarea>' +
    '<button class="btn" id="pasteGo" style="margin-top:10px">' + esc(t('pasteGo')) + '</button></div>' +
    '<p class="note" style="margin-top:12px">' + esc(t('resumePrivacy')) + '</p>';
  return '<div class="card" id="resumeCard">' + inner + '</div>';
}

/* ---------- interactions ---------- */
var deferredInstall = null;
window.addEventListener('beforeinstallprompt', function(e){
  e.preventDefault();
  deferredInstall = e;
  var btn = $('installBtn'), txt = $('installText');
  if (btn) btn.style.display = 'inline-block';
  if (txt) txt.textContent = t('installTextBtn');
});

function wireDash(){
  var be = $('langEn'), br = $('langRu');
  if (be) be.addEventListener('click', function(){ if (LANG !== 'en') setLang('en', {persist:true}); });
  if (br) br.addEventListener('click', function(){ if (LANG !== 'ru') setLang('ru', {persist:true}); });

  document.querySelectorAll('#dashBody [data-tabbtn]').forEach(function(b){
    b.addEventListener('click', function(){ showTab(b.getAttribute('data-tabbtn')); });
  });
  document.querySelectorAll('#dashBody [data-strand-pill]').forEach(function(b){
    b.addEventListener('click', function(){ setStrand(b.getAttribute('data-strand-pill')); });
  });
  document.querySelectorAll('#dashBody [data-strand-node]').forEach(function(n){
    n.addEventListener('click', function(){ setStrand(n.getAttribute('data-strand-node')); });
    n.addEventListener('keydown', function(ev){
      if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); setStrand(n.getAttribute('data-strand-node')); }
    });
  });
  document.querySelectorAll('#dashBody [data-node]').forEach(function(n){
    n.addEventListener('click', function(){
      var nid = n.getAttribute('data-node');
      if (nid !== 'door' && window.openStepDetail && !isLocked()) { openStepDetail(nid); return; }
      flashStep(nid);
    });
  });
  var reb = $('restoreByEmailBtn');
  if (reb) reb.addEventListener('click', function(){ showView('viewRestore'); });

  document.querySelectorAll('#dashBody .step[data-step]').forEach(function(el){
    el.addEventListener('click', function(ev){
      var conf = ev.target.closest ? ev.target.closest('[data-confirm]') : null;
      if (conf) { ev.stopPropagation(); toggleStep(conf.getAttribute('data-confirm'), true, true, el); return; }
      var sid = el.getAttribute('data-step');
      /* Founder ruling 2026-11-01: a step is a task — tapping the row
         opens its detail page (what / how / why / links). Only the
         checkbox square itself toggles, as before. */
      var onBox = ev.target.closest ? ev.target.closest('.box') : null;
      if (!onBox && window.openStepDetail) { openStepDetail(sid); return; }
      toggleStep(sid, !(P.checks || {})[sid], false, el);
    });
    el.addEventListener('keydown', function(ev){
      var sid = el.getAttribute('data-step');
      if (ev.key === 'Enter' && window.openStepDetail) { ev.preventDefault(); openStepDetail(sid); return; }
      if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); toggleStep(sid, !(P.checks || {})[sid], false, el); }
    });
  });

  /* Quest card clicks are delegated in questdetail.js (founder
     ruling 2026-11-01: tap = read the quest sheet, never complete). */

  var ib = $('installBtn');
  if (ib) ib.addEventListener('click', function(){
    if (deferredInstall) { deferredInstall.prompt(); deferredInstall = null; ib.style.display = 'none'; }
  });

  var rf = $('resumeFile');
  if (rf) rf.addEventListener('change', function(){ if (rf.files && rf.files[0]) handleResumeFile(rf.files[0]); });
  var pt = $('pasteToggle');
  if (pt) pt.addEventListener('click', function(e){ e.preventDefault(); $('pasteBox').style.display = 'block'; });
  var pg2 = $('pasteGo');
  if (pg2) pg2.addEventListener('click', function(){
    var text = $('resumeText').value.trim();
    if (!text) { resumeError(t('resumePasteFirst')); return; }
    submitResumeText('pasted resume.txt', text);
  });
}

function resumeError(msg){
  var e = $('resumeErr');
  if (e) { e.textContent = msg; e.style.display = 'block'; }
}
function resumeStatus(msg){
  var s = $('resumeStatus');
  if (s) s.textContent = msg;
}

/* ---------- step toggling + celebrations ---------- */
function toggleStep(stepId, done, confirmResume, el){
  var rankBefore = rankName(rankFor(P.pct || 0).cur);
  if (el) el.classList.add('saving');
  return apiPost({action:'toggle', stepId:stepId, done:done, confirmResume: !!confirmResume})
    .then(function(j){
      P = j.progress;
      renderDash();
      var ev = j.events || {};
      var prof = activeProf();
      (ev.phaseCompletedIdx || []).forEach(function(idx){
        var name = phaseName((TRACKS[prof] || [])[idx], idx);
        toast(t('phaseCleared', {name: name}));
        confetti();
      });
      if (ev.questBonusEarned) toast(t('questBonusToast'));
      (ev.newBadges || []).forEach(function(bid){
        if (bid === 'radar-reader') return;
        var bd = BADGE_DEFS.filter(function(x){ return x.id === bid; })[0];
        if (bd) toast(t('badgeEarned', {name: badgeName(bd), icon: bd.icon}));
      });
      var rankAfter = rankName(rankFor(P.pct || 0).cur);
      if (rankAfter !== rankBefore && (P.pct || 0) > 0) {
        setTimeout(function(){ rankBanner(rankAfter); }, (ev.phaseCompletedIdx || []).length ? 500 : 60);
      }
    })
    .catch(function(){
      if (el) {
        el.classList.remove('saving');
        el.animate([{transform:'translateX(0)'},{transform:'translateX(-5px)'},{transform:'translateX(5px)'},{transform:'translateX(0)'}], {duration:220});
      }
      toast(t('didntSave'));
    });
}

/* ---------- daily micro-quest complete / undo (+15 / -15 XP; never a step) ---------- */
function questAction(action, el){
  if (el) el.classList.add('saving');
  return apiPost({action:action})
    .then(function(j){
      P = j.progress;
      renderDash();
      var ev = j.events || {};
      if (ev.questBonusEarned) { toast(t('questBonusToast')); confetti(); }
      if (ev.questBonusRemoved) toast(t('questUndoToast'));
      (ev.newBadges || []).forEach(function(bid){
        if (bid === 'radar-reader') return;
        var bd = BADGE_DEFS.filter(function(x){ return x.id === bid; })[0];
        if (bd) toast(t('badgeEarned', {name: badgeName(bd), icon: bd.icon}));
      });
    })
    .catch(function(){
      if (el) {
        el.classList.remove('saving');
        el.animate([{transform:'translateX(0)'},{transform:'translateX(-5px)'},{transform:'translateX(5px)'},{transform:'translateX(0)'}], {duration:220});
      }
      toast(t('didntSave'));
    });
}

function completeQuest(el){ return questAction('quest', el); }
function uncompleteQuest(el){ return questAction('unquest', el); }

/* ---------- resume parsing (in the browser) ---------- */
function loadScript(src){
  return new Promise(function(resolve, reject){
    var s = document.createElement('script');
    s.src = src; s.onload = resolve; s.onerror = reject;
    document.head.appendChild(s);
  });
}
function extractPdf(file){
  return loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js').then(function(){
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    return file.arrayBuffer();
  }).then(function(buf){
    return window.pdfjsLib.getDocument({data: buf}).promise;
  }).then(function(pdf){
    var pages = [];
    for (var i = 1; i <= pdf.numPages; i++) pages.push(i);
    return pages.reduce(function(chain, n){
      return chain.then(function(acc){
        return pdf.getPage(n).then(function(page){ return page.getTextContent(); }).then(function(tc){
          acc.push(tc.items.map(function(it){ return it.str; }).join(' '));
          return acc;
        });
      });
    }, Promise.resolve([]));
  }).then(function(chunks){ return chunks.join('\n'); });
}
function extractDocx(file){
  return loadScript('https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js')
    .then(function(){ return file.arrayBuffer(); })
    .then(function(buf){ return window.mammoth.extractRawText({arrayBuffer: buf}); })
    .then(function(r){ return r.value || ''; });
}
function handleResumeFile(file){
  resumeError('');
  if (file.size > 5 * 1024 * 1024) { resumeError(t('resumeTooBig')); return; }
  resumeStatus(t('resumeReading', {name: file.name}));
  var lower = file.name.toLowerCase();
  var job;
  if (lower.endsWith('.pdf')) job = extractPdf(file);
  else if (lower.endsWith('.docx')) job = extractDocx(file);
  else job = file.text();
  job.then(function(text){
    text = (text || '').trim();
    if (!text) { resumeStatus(''); resumeError(t('resumeNoText')); $('pasteBox').style.display = 'block'; return; }
    submitResumeText(file.name, text);
  }).catch(function(){
    resumeStatus('');
    resumeError(t('resumeUnreadable'));
    var pb = $('pasteBox'); if (pb) pb.style.display = 'block';
  });
}
function submitResumeText(fileName, text){
  resumeStatus(t('resumeMapping'));
  fetch(RESUME_API, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({leadId:leadId, fileName:fileName, text:text})})
    .then(function(r){ return r.json().catch(function(){ return {}; }).then(function(j){ if (!r.ok || !j.ok) throw new Error(j.error || 'save failed'); return j; }); })
    .then(function(j){
      resume = {fileName: j.fileName, uploadedAt: j.uploadedAt, chars: j.chars, text: text.slice(0, 60000)};
      computeMatches();
      return apiGet();
    })
    .then(function(j){
      P = j.progress;
      resume = j.resume || resume;
      computeMatches();
      renderDash();
      var n = matchedStepCount();
      toast(t('resumeMappedToast', {n: n, steps: stepsWord(n)}));
    })
    .catch(function(e){
      resumeStatus('');
      resumeError(locErr(e.message) || t('didntSave'));
    });
}

/* ---------- service worker ---------- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('/sw.js').then(function(reg){
      window.__swReg = reg;
    }).catch(function(e){ window.__swError = String(e); });
  });
}

/* ---------- bridge for stepdetail.js ----------
   The step detail sheet (founder ruling 2026-11-01) lives in its own
   file outside this IIFE; expose exactly what it needs — live state
   through getters, helpers by reference. Same bridge pattern as the
   mentor page's pg.js bridge. */
window.CG = {
  get P(){ return P; },
  get lead(){ return lead; },
  get LANG(){ return LANG; },
  $: $, esc: esc, t: t,
  stepText: stepText, stepSrc: stepSrc, phaseName: phaseName,
  stepTagHtml: stepTagHtml, activeProf: activeProf,
  isLocked: isLocked, toggleStep: toggleStep,
  poolQuest: poolQuest, questText: questText, questTag: questTag,
  strandName: strandName, completeQuest: completeQuest, uncompleteQuest: uncompleteQuest
};

boot();
})();
