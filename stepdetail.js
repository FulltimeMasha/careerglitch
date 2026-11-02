/* ===== Step detail sheet — PathCheck dashboard.
   Founder ruling 2026-11-01: «Задания просто как задачи. Можно нажать
   и откроется страница с подробностями: как, что, может ссылки на
   конкретное обучение и т.д.» Tapping a step row (anywhere except its
   checkbox) opens this full-screen sheet: what to do, how (numbered
   micro-steps), why it matters (the package's own evidence), and
   links to specific official training/resources. Content lives in
   details1.js / details2.js / details3.js (STEP_DETAILS), written
   from the pilot packages' hr-checklists and full reports.
   app.js is an IIFE — everything this sheet needs from it comes
   through the window.CG bridge defined at the end of app.js.
   Back returns to the same tab + strand + scroll position: the
   sheet is an overlay outside #dashBody, and the dashboard's own
   state (activeTab / activeStrand) is never touched. ===== */

var SD_STR = {
  en: {back:'← Back', whatK:'What to do', howK:'How — step by step', whyK:'Why this matters',
       linksK:'Training & resources', mark:'Mark as done', done:'✓ Done — tap to undo'},
  ru: {back:'← Назад', whatK:'Что сделать', howK:'Как — шаг за шагом', whyK:'Почему это важно',
       linksK:'Обучение и ресурсы', mark:'Отметить сделанным', done:'✓ Сделано — нажать, чтобы отменить'}
};
function sdLang(){ return (window.CG && CG.LANG) || 'en'; }
function sdT(k){ var tab = SD_STR[sdLang()] || SD_STR.en; return tab[k] != null ? tab[k] : (SD_STR.en[k] || k); }
function sdPick(en, ru){ return (sdLang() === 'ru' && ru) ? ru : (en || ''); }

var sdOpenId = null;
var sdScrollY = 0;

function sdFindStep(id){
  var prof = CG.activeProf();
  var phases = (typeof TRACKS !== 'undefined' && TRACKS[prof]) || [];
  for (var i = 0; i < phases.length; i++) {
    var steps = phases[i].steps || [];
    for (var j = 0; j < steps.length; j++) {
      if (steps[j].id === id) return {s: steps[j], phaseIdx: i, ph: phases[i], prof: prof};
    }
  }
  return null;
}
function sdTitle(text){
  var x = String(text || '');
  var i = x.indexOf('. ');
  return i > 0 ? x.slice(0, i + 1) : x;
}
function sdData(id){ return (typeof STEP_DETAILS !== 'undefined' && STEP_DETAILS[id]) || null; }

function sdRender(){
  var host = CG.$('stepSheetIn');
  if (!host || !sdOpenId) return;
  var f = sdFindStep(sdOpenId);
  if (!f) { closeStepDetail(); return; }
  var s = f.s;
  var d = sdData(s.id) || {};
  var done = !!((CG.P && CG.P.checks) || {})[s.id];
  var what = sdPick(d.what, d.whatRu) || CG.stepText(s);
  var how = (sdLang() === 'ru' && d.howRu && d.howRu.length) ? d.howRu : (d.how || []);
  var why = sdPick(d.why, d.whyRu);
  var links = d.links || [];

  var html = '<button type="button" class="sd-back" data-sd-back>' + CG.esc(sdT('back')) + '</button>';
  html += '<div class="sd-card">';
  html += '<div class="sd-meta">' + CG.stepTagHtml(s) +
    '<span>' + CG.esc(CG.t('phaseLabel')) + (f.phaseIdx + 1) + ' · ' + CG.esc(CG.phaseName(f.ph, f.phaseIdx)) + '</span></div>';
  html += '<h2 class="sd-title">' + CG.esc(sdTitle(CG.stepText(s))) + '</h2>';
  html += '<button type="button" class="btn sd-toggle' + (done ? ' done' : '') + '" data-sd-toggle>' +
    CG.esc(done ? sdT('done') : sdT('mark')) + '</button>';

  html += '<div class="sd-sec"><div class="kicker">' + CG.esc(sdT('whatK')) + '</div><p>' + CG.esc(what) + '</p></div>';

  if (how.length) {
    html += '<div class="sd-sec"><div class="kicker">' + CG.esc(sdT('howK')) + '</div><ol class="sd-how">' +
      how.map(function(h){ return '<li><span>' + CG.esc(h) + '</span></li>'; }).join('') + '</ol></div>';
  }
  if (why) {
    html += '<div class="sd-sec"><div class="kicker">' + CG.esc(sdT('whyK')) + '</div><p>' + CG.esc(why) + '</p></div>';
  }
  if (links.length) {
    html += '<div class="sd-sec"><div class="kicker">' + CG.esc(sdT('linksK')) + '</div>' +
      links.map(function(l){
        return '<a class="dlink" href="' + CG.esc(l.u) + '" target="_blank" rel="noopener">' +
          '<span>' + CG.esc(l.t) + '</span><span class="arr" aria-hidden="true">↗</span></a>';
      }).join('') + '</div>';
  }
  html += '<p class="sd-src">' + CG.esc(CG.stepSrc(s)) + '</p>';
  html += '</div>';
  host.innerHTML = html;
}

window.openStepDetail = function(id){
  if (!window.CG || !CG.P || !CG.lead) return;
  if (CG.isLocked()) return; // locked steps stay locked
  var f = sdFindStep(id);
  if (!f) return;
  sdOpenId = id;
  sdScrollY = window.scrollY || window.pageYOffset || 0;
  sdRender();
  var sh = CG.$('stepSheet');
  if (sh) { sh.hidden = false; sh.scrollTop = 0; }
  document.body.style.overflow = 'hidden';
};
function closeStepDetail(){
  var sh = window.CG && CG.$('stepSheet');
  if (sh) sh.hidden = true;
  document.body.style.overflow = '';
  sdOpenId = null;
  window.scrollTo(0, sdScrollY);
}

(function wireStepSheet(){
  var host = document.getElementById('stepSheetIn');
  if (!host) return;
  host.addEventListener('click', function(ev){
    var back = ev.target.closest ? ev.target.closest('[data-sd-back]') : null;
    if (back) { closeStepDetail(); return; }
    var tg = ev.target.closest ? ev.target.closest('[data-sd-toggle]') : null;
    if (tg && sdOpenId && window.CG) {
      var id = sdOpenId;
      var done = !((CG.P.checks || {})[id]);
      tg.disabled = true;
      /* Same toggle path as the list (same XP / phase / badge rules —
         toggleStep returns its promise since the 2026-11-01 edit). */
      CG.toggleStep(id, done, false, null).then(
        function(){ if (sdOpenId === id) sdRender(); },
        function(){ if (sdOpenId === id) sdRender(); }
      );
    }
  });
  document.addEventListener('keydown', function(ev){
    if (ev.key === 'Escape' && sdOpenId) closeStepDetail();
  });
})();
