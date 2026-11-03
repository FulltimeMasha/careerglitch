/* ===== Quest detail sheet — PathCheck dashboard.
   Founder bug report 2026-11-01: «Я нажала [квест дня] чтобы
   прочитать подробнее — и он чекнулся как выполнен. А я хотела
   просто посмотреть, я его не поняла.» Tapping the quest card used
   to COMPLETE the quest. Now the card tap opens this sheet: the
   quest in full, a plain-words "how to do it" (2–4 micro-steps from
   questdetails.js — QUEST_DETAILS, keyed by quest id), the DNA
   strand it feeds, and a state-aware action button. Completion
   happens ONLY from the explicit button here (or the card's
   checkbox square); a completed quest can be un-completed here too
   (server action 'unquest').
   app.js is an IIFE — everything this sheet needs from it comes
   through the window.CG bridge defined at the end of app.js.
   Same overlay pattern as stepdetail.js: the sheet lives outside
   #dashBody, dashboard state is never touched, Back restores the
   scroll position captured at open. ===== */

var QD_STR = {
  en: {back:'← Back', kicker:'⚑ Today’s quest', howK:'What to do — in plain words',
       doIt:'✓ I did it — mark as done', undoIt:'↩ Oops, not done yet'},
  ru: {back:'← Назад', kicker:'⚑ Квест дня', howK:'Что делать — простыми словами',
       doIt:'✓ Готово — отметить сделанным', undoIt:'↩ Ой, ещё не сделано'}
};
function qdLang(){ return (window.CG && CG.LANG) || 'en'; }
function qdT(k){ var tab = QD_STR[qdLang()] || QD_STR.en; return tab[k] != null ? tab[k] : (QD_STR.en[k] || k); }

var qdOpen = false;
var qdScrollY = 0;

function qdData(id){ return (typeof QUEST_DETAILS !== 'undefined' && QUEST_DETAILS[id]) || null; }

function qdRender(){
  var host = CG.$('questSheetIn');
  if (!host || !qdOpen) return;
  var q = CG.poolQuest();
  if (!q) { closeQuestDetail(); return; }
  var d = qdData(q.id) || {};
  var how = (qdLang() === 'ru' && d.howRu && d.howRu.length) ? d.howRu : (d.how || []);
  var done = !!(CG.P && CG.P.questBonusToday);
  var qStrand = (typeof DNA_QUEST_TAGS !== 'undefined' && DNA_QUEST_TAGS[q.id]) ? DNA_QUEST_TAGS[q.id] : null;

  var html = '<button type="button" class="sd-back" data-qd-back>' + CG.esc(qdT('back')) + '</button>';
  html += '<div class="sd-card">';
  html += '<div class="sd-meta"><span>' + CG.esc(qdT('kicker')) + '</span>' +
    '<span class="bonus-tag">' + CG.esc(CG.t('questBonusTag')) + '</span></div>';
  html += '<h2 class="sd-title">' + CG.esc(CG.questText(q)) + '</h2>';
  html += '<p style="margin-top:8px;font-size:14.5px;color:var(--mut)">' + CG.esc(CG.questTag(q)) + '</p>';
  if (qStrand) {
    html += '<p style="margin-top:6px;font-size:13.5px;color:var(--deep);font-weight:600">🧬 ' +
      CG.esc(CG.t('todayFeeds', {strand: CG.strandName(qStrand)})) + '</p>';
  }
  if (how.length) {
    html += '<div class="sd-sec"><div class="kicker">' + CG.esc(qdT('howK')) + '</div><ol class="sd-how">' +
      how.map(function(h){ return '<li><span>' + CG.esc(h) + '</span></li>'; }).join('') + '</ol></div>';
  }
  html += '<button type="button" class="btn sd-toggle' + (done ? ' done' : '') + '" ' +
    (done ? 'data-qd-undo' : 'data-qd-done') + '>' +
    CG.esc(done ? qdT('undoIt') : qdT('doIt')) + '</button>';
  html += '</div>';
  host.innerHTML = html;
}

window.openQuestDetail = function(){
  if (!window.CG || !CG.P || !CG.lead) return;
  if (CG.isLocked()) return; // locked leads get the paywall, not quest interactions
  if (!CG.poolQuest()) return;
  qdOpen = true;
  qdScrollY = window.scrollY || window.pageYOffset || 0;
  qdRender();
  var sh = CG.$('questSheet');
  if (sh) { sh.hidden = false; sh.scrollTop = 0; }
  document.body.style.overflow = 'hidden';
};
function closeQuestDetail(){
  var sh = window.CG && CG.$('questSheet');
  if (sh) sh.hidden = true;
  document.body.style.overflow = '';
  qdOpen = false;
  window.scrollTo(0, qdScrollY);
}

/* Quest card interaction, delegated on #dashBody — the container
   persists across renders while the cards inside it are re-created
   by every renderDash, so one binding covers all future cards.
   Founder ruling 2026-11-01: the card tap READS the quest (this
   sheet) — it never completes it. Completion is only the card's
   checkbox square or the sheet's Done button; a completed quest
   un-completes from the done card's Undo button or the sheet. */
(function wireQuestCards(){
  var body = document.getElementById('dashBody');
  if (!body) return;
  body.addEventListener('click', function(ev){
    var el = ev.target.closest ? ev.target.closest('[data-quest]') : null;
    if (!el || !body.contains(el) || !window.CG) return;
    if (el.getAttribute('data-quest') === 'done') {
      var un = ev.target.closest ? ev.target.closest('[data-qundo]') : null;
      if (un) { CG.uncompleteQuest(el); return; }
      openQuestDetail();
      return;
    }
    var onBox = ev.target.closest ? ev.target.closest('.box') : null;
    if (onBox) { CG.completeQuest(el); return; }
    openQuestDetail();
  });
  body.addEventListener('keydown', function(ev){
    var el = ev.target.closest ? ev.target.closest('[data-quest]') : null;
    if (!el || !window.CG) return;
    if (ev.key === 'Enter') { ev.preventDefault(); openQuestDetail(); }
    else if (ev.key === ' ' && el.getAttribute('data-quest') !== 'done') { ev.preventDefault(); CG.completeQuest(el); }
  });
})();

(function wireQuestSheet(){
  var host = document.getElementById('questSheetIn');
  if (!host) return;
  host.addEventListener('click', function(ev){
    var back = ev.target.closest ? ev.target.closest('[data-qd-back]') : null;
    if (back) { closeQuestDetail(); return; }
    var dn = ev.target.closest ? ev.target.closest('[data-qd-done]') : null;
    if (dn && window.CG) {
      dn.disabled = true;
      /* Same completion path as the card's checkbox (same +15 XP
         rules); the sheet then re-renders with the flipped button. */
      CG.completeQuest(null).then(
        function(){ if (qdOpen) qdRender(); },
        function(){ if (qdOpen) qdRender(); }
      );
      return;
    }
    var un = ev.target.closest ? ev.target.closest('[data-qd-undo]') : null;
    if (un && window.CG) {
      un.disabled = true;
      CG.uncompleteQuest(null).then(
        function(){ if (qdOpen) qdRender(); },
        function(){ if (qdOpen) qdRender(); }
      );
    }
  });
  document.addEventListener('keydown', function(ev){
    if (ev.key === 'Escape' && qdOpen) closeQuestDetail();
  });
})();
