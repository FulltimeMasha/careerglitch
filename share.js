/* PathCheck — verdict share block (Step 4, founder addition 30.10.2026;
   scene-card update 30.10.2026; eager-preview + Instagram/TikTok update
   30.10.2026). Restructures the existing #sharebox2 on seat verdict cards:
   the shared image is the seat's meme SCENE (/cards/<seat>.webp, dark
   Career Glitch art) with the seat's viral hook as a glitch headline, the
   verdict as a hot-pink sticker, and a hot-pink bottom bar that always
   prints only the plain site: "Check yours free ♥ careerglitch.com"
   (founder, 30.10.2026 — the personal /r/ link stays in the share text).
   The card is composed EAGERLY — as soon as a seat verdict exists, and
   again the moment the personal link lands — and published into a visible
   <img> preview at the top of the block (the canvas is only the compose
   buffer), so the visitor sees the exact picture before sharing it.
   Buttons: Share (Web Share API w/ file), Instagram / TikTok (share the
   PNG file via the system sheet; fallback = download + a hint line),
   Download, X / WhatsApp / Telegram intents. The link used everywhere is
   read live from #shareLink2 — the same personal /r/ link the box shows.
   If a scene asset ever fails to load, the card falls back to the original
   paper/mascot drawing so sharing never breaks.
   The cluster (grid) box #sharebox3 is built the same way: a cluster
   card (GV11 hook, short cluster sticker, the money-corner seat's
   scene) with the same buttons and eager preview. */
(function(){
  var W = 1080, LH = 1350; /* canvas width; LH = legacy card height */
  var box, canvas, ctx, drawnKey = '', busy = false;
  var preview = null, previewURL = '', hint = null;
  var cachedBlob = null, cachedKey = '';
  var scenes = {}; /* seat -> {img, ok, err} */

  /* Short verdict-sticker labels (approved card copy); runtime fallback is
     the seat's full head line. Hooks come from V11 at runtime. */
  var LABELS = {
    specialist: 'SPECIALIST PARALEGAL — YES',
    paralegal: 'GENERALIST PARALEGAL — NO',
    docreview: 'DOCUMENT REVIEW — NO',
    lawstudent: 'LAW SCHOOL — YES, IF YOU AIM IT',
    bookkeeper: 'BOOKKEEPER — NO',
    tax: 'TAX PREP — NO · SPECIALTY TAX — YES',
    staff: 'STAFF ACCOUNTANT — NO AS A FINAL STOP',
    audit: 'AUDIT — YES AS A BRIDGE',
    technical: 'TECHNICAL ACCOUNTING — YES',
    fdd: 'TRANSACTION ADVISORY — YES',
    controller: 'CONTROLLER — YES',
    medsurg: 'MED-SURG — NO AS A FINAL STOP',
    specialty: 'SPECIALTY RN — YES',
    travel: 'TRAVEL RN — YES',
    nstudent: 'NURSING — YES',
    np: 'NP — YES, IF YOU SPECIALIZE',
    crna: 'CRNA — YES',
    lpn: 'STARTING AS AN LPN — NO',
    reporting: 'REPORTING ANALYST — NO',
    fpa: 'FP&A BUSINESS PARTNER — YES',
    strategic: 'STRATEGIC FINANCE — YES',
    hybrid: 'BI / ANALYTICS HYBRID — YES',
    corpdev: 'CORPORATE DEVELOPMENT — YES',
    faceless: 'FACELESS CHANNELS — NO',
    streamer: 'STREAMER — NO',
    personality: 'ADS & DEALS ALONE — NO',
    ugc: 'UGC CREATOR — YES',
    educator: 'EDUCATOR CREATOR — YES',
    creatorbiz: 'CREATOR WITH A BUSINESS — YES',
    brandcreator: 'BRAND CREATOR · STUDIO OF ONE — YES',
    facecreator: 'FACE OF THE BRAND — YES',
    perfcreator: 'PAID-SOCIAL CREATOR — YES',
    agencycreator: 'AGENCY CREATOR — NO AS A FINAL STOP',
    mediacreator: 'MEDIA / WRITING-LED CREATOR — NO',
    genba: 'BUSINESS ANALYST — NO',
    reportda: 'REPORTING DATA ANALYST — NO',
    prodan: 'PRODUCT ANALYST — YES',
    aneng: 'ANALYTICS ENGINEER — YES',
    bizops: 'STRATEGY & OPERATIONS — YES',
    dsgate: 'DATA SCIENTIST — YES · A DIFFERENT JOB'
  };

  function $(id){ return document.getElementById(id); }
  function plain(html){ var d = document.createElement('div'); d.innerHTML = html || ''; return (d.textContent || '').replace(/\s+/g,' ').trim(); }
  function linkNow(){
    var inp = $('shareLink2');
    var v = inp && inp.value ? inp.value.trim() : '';
    return v || 'https://careerglitch.com';
  }
  function seatObj(){
    if (!window.S || !S.seat || !window.SEATS) return null;
    return SEATS[S.seat] || null;
  }
  function hookNow(){
    var v = (window.V11 && S.seat) ? V11[S.seat] : null;
    return v && v.hook ? v.hook : '';
  }
  function shareText(){
    var st = seatObj(); if (!st) return '';
    var parts = [];
    var hk = hookNow(); if (hk) parts.push(hk);
    parts.push(plain(st.head));
    parts.push(linkNow());
    return parts.join('\n');
  }

  function wrap(text, font, maxW){ return wrapC(ctx, text, font, maxW); }
  function wrapC(c, text, font, maxW){
    c.font = font;
    var words = String(text).split(/\s+/), lines = [], cur = '';
    words.forEach(function(w){
      var t = cur ? cur + ' ' + w : w;
      if (c.measureText(t).width > maxW && cur) { lines.push(cur); cur = w; }
      else cur = t;
    });
    if (cur) lines.push(cur);
    return lines;
  }
  function roundRect(x, y, w, h, r){ roundRectC(ctx, x, y, w, h, r); }
  function roundRectC(c, x, y, w, h, r){
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }

  /* Lazily load the seat's scene (one image, only for the current seat).
     On load/error, force a redraw so the preview swaps in when ready. */
  function sceneFor(seat){
    var s = scenes[seat];
    if (!s) {
      s = scenes[seat] = { img: null, ok: false, err: false };
      var im = new Image();
      im.onload = function(){ s.img = im; s.ok = true; drawnKey = ''; gDrawnKey = ''; maybeDraw(); maybeDrawGrid(); };
      im.onerror = function(){ s.err = true; drawnKey = ''; gDrawnKey = ''; maybeDraw(); maybeDrawGrid(); };
      im.src = '/cards/' + seat + '.webp';
    }
    return s;
  }

  /* Paint a scene card onto (cv, c): the meme scene with the hook as a
     glitch headline, the verdict as a hot-pink sticker, and a hot-pink
     bottom bar that always prints only the plain site. Shared by the
     seat box and the cluster (grid) box. */
  function paintSceneCard(cv, c, img, hook, label, hasPersonal, link){
    var H = Math.round(W * img.naturalHeight / img.naturalWidth);
    cv.width = W; cv.height = H;
    c.drawImage(img, 0, 0, W, H);
    c.textBaseline = 'top';

    /* hook — glitch headline: hot-pink + cyan offsets under white */
    var fs = Math.round(W * 0.060);
    var hFont = '900 ' + fs + 'px Outfit, sans-serif';
    var hookLines = wrapC(c, hook.toUpperCase(), hFont, W * 0.92).slice(0, 5);
    var lh = Math.round(fs * 1.18), off = Math.max(3, Math.round(W * 0.004));
    c.font = hFont;
    var y = Math.round(H * 0.032);
    hookLines.forEach(function(ln){
      var w = c.measureText(ln).width, x = (W - w) / 2;
      c.fillStyle = '#F92A82'; c.fillText(ln, x + off, y);
      c.fillStyle = '#40E0FF'; c.fillText(ln, x - off, y + off);
      c.fillStyle = '#FFFFFF'; c.fillText(ln, x, y);
      y += lh;
    });

    /* verdict — hot-pink sticker */
    var vfs = Math.round(W * 0.046);
    var vFont = '800 ' + vfs + 'px Outfit, sans-serif';
    var vLines = wrapC(c, label, vFont, W * 0.86).slice(0, 3);
    c.font = vFont;
    var vw = 0;
    vLines.forEach(function(ln){ vw = Math.max(vw, c.measureText(ln).width); });
    var pad = Math.round(W * 0.025);
    var vH = Math.round(vfs * 1.42) * vLines.length + Math.round(vfs * 0.30);
    var vY = y + Math.round(H * 0.014);
    c.fillStyle = '#F92A82';
    roundRectC(c, (W - vw) / 2 - pad, vY, vw + pad * 2, vH, Math.round(W * 0.012)); c.fill();
    c.fillStyle = '#FFFFFF';
    var yy = vY + Math.round(vfs * 0.20);
    vLines.forEach(function(ln){
      var w = c.measureText(ln).width;
      c.fillText(ln, (W - w) / 2, yy);
      yy += Math.round(vfs * 1.42);
    });

    /* bottom bar — always the plain site (founder, 30.10.2026: no long
       personal link printed on the picture; the /r/ link lives only in
       the share TEXT; since 2026-11-01 the share itself — not a
       referral completion — unlocks the free Full Report) */
    var barText = 'Check yours free \u2665 careerglitch.com';
    var bfs = Math.round(W * 0.034);
    var bFont = '800 ' + bfs + 'px Outfit, sans-serif';
    var bLines = wrapC(c, barText, bFont, W * 0.86);
    var blh = Math.round(bfs * 1.3);
    var barH = blh * bLines.length + Math.round(H * 0.028);
    var barY = H - barH - Math.round(H * 0.014);
    c.fillStyle = '#F92A82';
    roundRectC(c, W * 0.03, barY, W * 0.94, barH, Math.round(W * 0.02)); c.fill();
    c.fillStyle = '#121018';
    c.font = bFont;
    var by = barY + Math.round(H * 0.014);
    bLines.forEach(function(ln){
      var w = c.measureText(ln).width;
      c.fillText(ln, (W - w) / 2, by);
      by += blh;
    });
  }

  function draw(){
    var st = seatObj(); if (!st || busy) return;
    var link = linkNow();
    var hasPersonal = link.indexOf('/r/') > -1 && !/\/r\/you$/.test(link);
    var key = S.seat + '|' + link;
    var verdict = plain(st.head);
    var hook = hookNow() || verdict;
    var label = LABELS[S.seat] || verdict;
    var sc = sceneFor(S.seat);
    if (sc.err) { paintLegacy(st, hook, verdict, hasPersonal, link); drawnKey = key; publish(); return; }
    if (!sc.ok) return; /* scene still loading; its onload retriggers draw */
    busy = true;

    function paint(){
      paintSceneCard(canvas, ctx, sc.img, hook, label, hasPersonal, link);
      drawnKey = key;
      busy = false;
    }

    if (document.fonts && document.fonts.ready) {
      Promise.race([document.fonts.ready, new Promise(function(r){ setTimeout(r, 1200); })]).then(function(){
        try { paint(); } catch(e){ busy = false; }
        publish();
      });
    } else { try { paint(); } catch(e){ busy = false; } publish(); }
  }

  /* Publish the composed canvas into the visible <img> preview and cache
     the PNG blob, so the share buttons can hand the exact file to
     navigator.share without re-encoding inside the tap handler. */
  function publish(){
    if (!preview) return;
    var key = S.seat + '|' + linkNow();
    if (drawnKey !== key) return;
    canvas.toBlob(function(b){
      if (!b || drawnKey !== key) return;
      var url = URL.createObjectURL(b);
      if (previewURL) URL.revokeObjectURL(previewURL);
      previewURL = url;
      preview.src = url;
      cachedBlob = b; cachedKey = key;
    }, 'image/png');
  }
  function cardBlob(cb){
    var key = S.seat + '|' + linkNow();
    if (cachedBlob && cachedKey === key) { cb(cachedBlob); return; }
    pngBlob(cb);
  }
  function downloadBlob(blob){
    if (!blob) return;
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'pathcheck-verdict.png';
    document.body.appendChild(a); a.click();
    setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 800);
  }

  /* Original paper/mascot card — fallback if a scene asset fails to load. */
  var mascot = null;
  function paintLegacy(st, hook, verdict, hasPersonal, link){
    canvas.width = W; canvas.height = LH;
    var H = LH;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#FFFCF6'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#FFD8EA';
    ctx.beginPath(); ctx.arc(1010, 60, 330, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#F0E6CF';
    ctx.beginPath(); ctx.arc(30, 1290, 300, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#FFB8D9';
    ctx.beginPath(); ctx.arc(120, 210, 54, 0, Math.PI * 2); ctx.fill();

    var x = 72, maxW = W - 144;
    ctx.fillStyle = '#1C1A1F'; ctx.textBaseline = 'alphabetic';
    try { ctx.letterSpacing = '6px'; } catch(e){}
    ctx.font = '700 34px "DM Mono", monospace';
    ctx.fillText('PATHCHECK ♥ CAREER GLITCH', x, 108);
    try { ctx.letterSpacing = '0px'; } catch(e){}

    var hookLines = wrap(hook, '800 96px Outfit, sans-serif', maxW).slice(0, 4);
    ctx.fillStyle = '#1C1A1F';
    ctx.font = '800 96px Outfit, sans-serif';
    var y = 236;
    hookLines.forEach(function(ln){ ctx.fillText(ln, x, y); y += 112; });

    var mTop = y + 6;
    var mH = Math.max(180, Math.min(430, 990 - mTop));
    if (mascot && mascot.naturalWidth) {
      var sc2 = Math.min(560 / mascot.naturalWidth, mH / mascot.naturalHeight);
      var mw = mascot.naturalWidth * sc2, mh = mascot.naturalHeight * sc2;
      ctx.drawImage(mascot, W - 72 - mw, mTop + (mH - mh), mw, mh);
    }
    ctx.font = '700 40px "DM Mono", monospace';
    ctx.fillStyle = '#F92A82';
    var seatName = verdict.split('—')[0].trim().toUpperCase();
    wrap(seatName, '700 40px "DM Mono", monospace', 430).forEach(function(ln, i){
      ctx.fillText(ln, x, mTop + 70 + i * 52);
    });
    ctx.font = '600 36px "Instrument Sans", sans-serif';
    ctx.fillStyle = '#1C1A1F';
    wrap('My verdict is in.', '600 36px "Instrument Sans", sans-serif', 400).forEach(function(ln, i){
      ctx.fillText(ln, x, mTop + 180 + i * 48);
    });

    var vFont = '800 52px Outfit, sans-serif';
    var vLines = wrap(verdict, vFont, maxW - 72).slice(0, 3);
    ctx.font = vFont;
    var pillH = vLines.length * 64 + 44;
    var pillY = Math.min(1010, 1200 - pillH);
    ctx.fillStyle = '#F92A82';
    roundRect(x, pillY, maxW, pillH, 28); ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    vLines.forEach(function(ln, i){ ctx.fillText(ln, x + 36, pillY + 76 + i * 64); });

    ctx.fillStyle = '#1C1A1F';
    ctx.font = '800 46px Outfit, sans-serif';
    ctx.fillText('Check yours free ♥ careerglitch.com', x, 1246);
  }

  function pngBlob(cb){ canvas.toBlob(function(b){ cb(b); }, 'image/png'); }

  function doShare(){
    var text = shareText();
    cardBlob(function(blob){
      if (!blob) { doDownload(); return; }
      var file = null;
      try { file = new File([blob], 'pathcheck-verdict.png', {type: 'image/png'}); } catch(e){}
      if (file && navigator.canShare && navigator.canShare({files: [file]}) && navigator.share) {
        navigator.share({files: [file], text: text}).then(function(){ markShared('share'); }).catch(function(){});
      } else if (navigator.share) {
        navigator.share({text: text}).then(function(){ markShared('share'); }).catch(function(){});
      } else {
        doDownload();
      }
    });
  }
  /* Instagram / TikTok: there is no web intent that posts an image into
     either app, so hand the PNG file to the system share sheet (which
     offers Instagram, TikTok, Stories… on iOS/Android). Where file
     sharing is unavailable, save the image and say what to do with it. */
  function doSocial(){
    var text = shareText();
    cardBlob(function(blob){
      if (!blob) return;
      var file = null;
      try { file = new File([blob], 'pathcheck-verdict.png', {type: 'image/png'}); } catch(e){}
      if (file && navigator.canShare && navigator.canShare({files: [file]}) && navigator.share) {
        navigator.share({files: [file], text: text}).then(function(){ markShared('share'); }).catch(function(){});
      } else {
        downloadBlob(blob);
        if (hint) hint.style.display = 'block';
        markShared('download');
      }
    });
  }
  function doDownload(){
    cardBlob(function(b){ downloadBlob(b); if (b) markShared('download'); });
  }
  function openIntent(url){ window.open(url, '_blank', 'noopener'); }

  /* ---------- Free Full Report unlock (founder ruling, 2026-11-01):
     the share ITSELF unlocks the report — no referral completion is
     counted or required. A completed share action in either box —
     the system share sheet resolving, an X / WhatsApp / Telegram
     intent click, or downloading the card (the Instagram/TikTok
     fallback path) — POSTs action:'share' to the progress API, which
     stamps recommended[0].reportFree on the lead once. The box then
     shows the unlocked state, and shows it again on later visits
     (read back from the same API; a localStorage mirror paints it
     instantly, the GET confirms). The personal /r/ link stays in
     the share TEXT exactly as before. */
  var PROGRESS_API = 'https://careerglitch.com/api/path-progress';
  var UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  var freeState = { free: false, email: null, posting: false, checked: false };
  var freeOks = [];
  function leadIdNow(){
    try {
      var id = localStorage.getItem('pathcheck_lead_id');
      return (id && UUID_RE.test(id)) ? id : null;
    } catch(e){ return null; }
  }
  function todayStr(){
    var d = new Date();
    function p(n){ return (n < 10 ? '0' : '') + n; }
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }
  function showFree(){
    freeState.free = true;
    var msg = freeState.email
      ? '\u2713 Your Full Report is free \u2014 it\u2019s coming to ' + freeState.email
      : '\u2713 Your Full Report is free \u2014 it lands in the inbox you gave us.';
    freeOks.forEach(function(p){ if (p) { p.textContent = msg; p.style.display = 'block'; } });
    var btns = document.querySelectorAll('button[onclick*="toggleShare"]');
    for (var i = 0; i < btns.length; i++) btns[i].textContent = '\u2713 Full Report \u2014 free, you shared it';
    var id = leadIdNow();
    try { if (id) localStorage.setItem('pathcheck_report_free', id); } catch(e){}
  }
  function checkFree(){
    var id = leadIdNow(); if (!id) return;
    try { if (localStorage.getItem('pathcheck_report_free') === id && !freeState.email) showFree(); } catch(e){}
    if (freeState.checked) return;
    freeState.checked = true;
    fetch(PROGRESS_API + '?lead=' + encodeURIComponent(id) + '&d=' + todayStr())
      .then(function(r){ return r.json().catch(function(){ return {}; }); })
      .then(function(j){
        if (j && j.lead) {
          if (j.lead.email) freeState.email = j.lead.email;
          if (j.lead.reportFree) showFree();
        }
      }).catch(function(){});
  }
  function markShared(via){
    var id = leadIdNow(); if (!id) return;
    if (freeState.free) { showFree(); return; }
    if (freeState.posting) return;
    freeState.posting = true;
    fetch(PROGRESS_API, { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'share', leadId: id, via: via, clientDate: todayStr() }) })
      .then(function(r){ return r.json().catch(function(){ return {}; }); })
      .then(function(j){
        freeState.posting = false;
        if (j && j.ok && j.reportFree) {
          if (j.email) freeState.email = j.email;
          showFree();
        }
      }).catch(function(){ freeState.posting = false; });
  }
  function mkFreeOk(){
    var p = document.createElement('p');
    p.style.cssText = 'display:none;font-size:14px;font-weight:700;line-height:1.45;margin:0 0 10px;color:var(--deep)';
    freeOks.push(p);
    return p;
  }

  /* ---------- Cluster (grid) share box (#sharebox3) ----------
     The grid screen has no single seat, so its card is the CLUSTER
     card: the GV11 hook (the same line the grid screen shows) as the
     glitch headline, a short cluster sticker, the money-corner seat's
     scene, and the same hot-pink bottom bar printing only the plain
     site. Composed eagerly for
     the current profession and recomposed when the personal link
     lands — the same treatment as the seat box. If the scene fails,
     the card falls back to the legacy paper drawing. */
  var GLABELS = {
    law: 'LAW \u2014 YES IN A SPECIALTY \u00B7 MOST COMMON WAY IN \u2014 NO',
    cpa: 'ACCOUNTING \u2014 YES IN A SPECIALTY \u00B7 MOST COMMON SEATS \u2014 NO',
    nurse: 'NURSING \u2014 YES \u00B7 MOST COMMON WAY IN \u2014 NO',
    fin: 'FINANCIAL ANALYST \u2014 3 GROWING \u00B7 1 TRAP \u00B7 1 LOCKED',
    creator: 'STAFF CONTENT CREATOR \u2014 YES \u00B7 THE WRITING DESK \u2014 NO',
    analyst: 'ANALYST \u2014 YES \u00B7 THE REPORTING VERSION \u2014 NO',
    aicreator: 'AI CONTENT CREATOR \u2014 NO \u00B7 AI AS YOUR CREW \u2014 YES'
  };
  var GSCENE = { law: 'specialist', cpa: 'fdd', nurse: 'crna', fin: 'strategic', creator: 'facecreator', analyst: 'prodan', aicreator: 'aipipeline' };
  var gBox = null, gCanvas = null, gCtx = null, gPreview = null, gHint = null;
  var gPreviewURL = '', gDrawnKey = '', gBusy = false;
  var gCachedBlob = null, gCachedKey = '';

  function gridActive(){
    return !!(window.S && S.mode === 'grid' && S.prof &&
      window.GV11 && GV11[S.prof] && window.GRIDS && GRIDS[S.prof] && GSCENE[S.prof]);
  }
  function linkGrid(){
    var inp = $('shareLink3');
    var v = inp && inp.value ? inp.value.trim() : '';
    return v || linkNow();
  }
  function gridHook(){
    var g = (window.GV11 && S.prof) ? GV11[S.prof] : null;
    return g && g.hook ? g.hook : '';
  }
  function gridHead(){ return plain(GRIDS[S.prof].head); }
  function gridKey(){ return 'grid:' + S.prof + '|' + linkGrid(); }
  function gridShareText(){
    var parts = [];
    var hk = gridHook(); if (hk) parts.push(hk);
    parts.push(gridHead());
    parts.push(linkGrid());
    return parts.join('\n');
  }

  function gDraw(){
    if (!gridActive() || gBusy) return;
    var link = linkGrid();
    var hasPersonal = link.indexOf('/r/') > -1 && !/\/r\/you$/.test(link);
    var key = gridKey();
    var hook = gridHook() || gridHead();
    var label = GLABELS[S.prof] || gridHead();
    var sc = sceneFor(GSCENE[S.prof]);
    if (sc.err) {
      var keepCv = canvas, keepCx = ctx;
      canvas = gCanvas; ctx = gCtx;
      paintLegacy(null, hook, label, hasPersonal, link);
      canvas = keepCv; ctx = keepCx;
      gDrawnKey = key; gPublish();
      return;
    }
    if (!sc.ok) return; /* scene still loading; its onload retriggers draw */
    gBusy = true;
    function paint(){
      paintSceneCard(gCanvas, gCtx, sc.img, hook, label, hasPersonal, link);
      gDrawnKey = key;
      gBusy = false;
    }
    if (document.fonts && document.fonts.ready) {
      Promise.race([document.fonts.ready, new Promise(function(r){ setTimeout(r, 1200); })]).then(function(){
        try { paint(); } catch(e){ gBusy = false; }
        gPublish();
      });
    } else { try { paint(); } catch(e){ gBusy = false; } gPublish(); }
  }
  function gPublish(){
    if (!gPreview || !gridActive()) return;
    var key = gridKey();
    if (gDrawnKey !== key) return;
    gCanvas.toBlob(function(b){
      if (!b || gDrawnKey !== key) return;
      var url = URL.createObjectURL(b);
      if (gPreviewURL) URL.revokeObjectURL(gPreviewURL);
      gPreviewURL = url;
      gPreview.src = url;
      gCachedBlob = b; gCachedKey = key;
    }, 'image/png');
  }
  function gCardBlob(cb){
    var key = gridKey();
    if (gCachedBlob && gCachedKey === key) { cb(gCachedBlob); return; }
    gCanvas.toBlob(function(b){ cb(b); }, 'image/png');
  }
  function gDoShare(){
    var text = gridShareText();
    gCardBlob(function(blob){
      if (!blob) { gDoDownload(); return; }
      var file = null;
      try { file = new File([blob], 'pathcheck-verdict.png', {type: 'image/png'}); } catch(e){}
      if (file && navigator.canShare && navigator.canShare({files: [file]}) && navigator.share) {
        navigator.share({files: [file], text: text}).then(function(){ markShared('share'); }).catch(function(){});
      } else if (navigator.share) {
        navigator.share({text: text}).then(function(){ markShared('share'); }).catch(function(){});
      } else {
        gDoDownload();
      }
    });
  }
  function gDoSocial(){
    var text = gridShareText();
    gCardBlob(function(blob){
      if (!blob) return;
      var file = null;
      try { file = new File([blob], 'pathcheck-verdict.png', {type: 'image/png'}); } catch(e){}
      if (file && navigator.canShare && navigator.canShare({files: [file]}) && navigator.share) {
        navigator.share({files: [file], text: text}).then(function(){ markShared('share'); }).catch(function(){});
      } else {
        downloadBlob(blob);
        if (gHint) gHint.style.display = 'block';
        markShared('download');
      }
    });
  }
  function gDoDownload(){ gCardBlob(function(b){ downloadBlob(b); if (b) markShared('download'); }); }

  function buildGrid(){
    gBox = $('sharebox3'); if (!gBox || gBox.dataset.shareBuilt) return;
    gBox.dataset.shareBuilt = '1';
    var head = document.createElement('div');
    head.innerHTML = '<div style="font-family:\'DM Mono\',monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;margin-bottom:8px">Share the map \u2665</div>';
    gCanvas = document.createElement('canvas');
    gCanvas.width = W; gCanvas.height = LH;
    gCtx = gCanvas.getContext('2d');
    gCanvas.style.display = 'none'; /* compose buffer only — the <img> is the preview */
    gPreview = document.createElement('img');
    gPreview.alt = 'Your verdict card';
    gPreview.style.cssText = 'width:100%;height:auto;display:block;border:1.5px solid var(--line);border-radius:14px;margin:4px 0 10px;background:#16122B';
    var row = document.createElement('div');
    row.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;margin:0 0 10px';
    function mkBtn(label, cls, fn){
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'btn ' + cls; b.textContent = label;
      b.style.cssText = 'flex:1 1 auto;padding:10px 12px;font-size:14px';
      b.addEventListener('click', fn);
      return b;
    }
    row.appendChild(mkBtn('Share \u2665', 'dark', gDoShare));
    row.appendChild(mkBtn('Instagram', '', gDoSocial));
    row.appendChild(mkBtn('TikTok', '', gDoSocial));
    row.appendChild(mkBtn('Download image', 'butter', gDoDownload));
    row.appendChild(mkBtn('X', 'ghost', function(){ openIntent('https://twitter.com/intent/tweet?text=' + encodeURIComponent(gridShareText())); markShared('intent'); }));
    row.appendChild(mkBtn('WhatsApp', 'ghost', function(){ openIntent('https://wa.me/?text=' + encodeURIComponent(gridShareText())); markShared('intent'); }));
    row.appendChild(mkBtn('Telegram', 'ghost', function(){ openIntent('https://t.me/share/url?url=' + encodeURIComponent(linkGrid()) + '&text=' + encodeURIComponent(gridShareText())); markShared('intent'); }));
    gHint = document.createElement('p');
    gHint.textContent = 'Image saved \u2014 post it from your Photos. Your link is printed on it.';
    gHint.style.cssText = 'display:none;font-size:13px;margin:0 0 10px;color:var(--deep)';
    gBox.insertBefore(head, gBox.firstChild);
    gBox.insertBefore(gPreview, head.nextSibling);
    gBox.insertBefore(gCanvas, gPreview.nextSibling);
    gBox.insertBefore(row, gCanvas.nextSibling);
    gBox.insertBefore(mkFreeOk(), row.nextSibling);
    gBox.insertBefore(gHint, row.nextSibling);
    checkFree();

    if (!mascot) { mascot = new Image(); mascot.src = '/masha.webp'; }

    /* compose the moment the block opens, not on the next interval tick */
    if (window.MutationObserver) {
      new MutationObserver(function(){ maybeDrawGrid(); }).observe(gBox, {attributes: true, attributeFilter: ['class']});
    }
    setInterval(maybeDrawGrid, 700);
  }
  function maybeDrawGrid(){
    if (!gBox || !gridActive()) return;
    sceneFor(GSCENE[S.prof]); /* warm the cluster's scene */
    /* No 'on' gate: compose eagerly as soon as a grid is on screen, so
       the preview is the finished cluster picture when the box opens —
       and recompose when the personal link replaces the placeholder. */
    if (gridKey() !== gDrawnKey) gDraw();
  }

  function build(){
    box = $('sharebox2'); if (!box || box.dataset.shareBuilt) return;
    box.dataset.shareBuilt = '1';
    var head = document.createElement('div');
    head.innerHTML = '<div style="font-family:\'DM Mono\',monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;margin-bottom:8px">Share your verdict ♥</div>';
    canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = LH;
    ctx = canvas.getContext('2d');
    canvas.style.display = 'none'; /* compose buffer only — the <img> is the preview */
    preview = document.createElement('img');
    preview.alt = 'Your verdict card';
    preview.style.cssText = 'width:100%;height:auto;display:block;border:1.5px solid var(--line);border-radius:14px;margin:4px 0 10px;background:#16122B';
    var row = document.createElement('div');
    row.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;margin:0 0 10px';
    function mkBtn(label, cls, fn){
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'btn ' + cls; b.textContent = label;
      b.style.cssText = 'flex:1 1 auto;padding:10px 12px;font-size:14px';
      b.addEventListener('click', fn);
      return b;
    }
    row.appendChild(mkBtn('Share ♥', 'dark', doShare));
    row.appendChild(mkBtn('Instagram', '', doSocial));
    row.appendChild(mkBtn('TikTok', '', doSocial));
    row.appendChild(mkBtn('Download image', 'butter', doDownload));
    row.appendChild(mkBtn('X', 'ghost', function(){ openIntent('https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareText())); markShared('intent'); }));
    row.appendChild(mkBtn('WhatsApp', 'ghost', function(){ openIntent('https://wa.me/?text=' + encodeURIComponent(shareText())); markShared('intent'); }));
    row.appendChild(mkBtn('Telegram', 'ghost', function(){ openIntent('https://t.me/share/url?url=' + encodeURIComponent(linkNow()) + '&text=' + encodeURIComponent(shareText())); markShared('intent'); }));
    hint = document.createElement('p');
    hint.textContent = 'Image saved — post it from your Photos. Your link is printed on it.';
    hint.style.cssText = 'display:none;font-size:13px;margin:0 0 10px;color:var(--deep)';
    box.insertBefore(head, box.firstChild);
    box.insertBefore(preview, head.nextSibling);
    box.insertBefore(canvas, preview.nextSibling);
    box.insertBefore(row, canvas.nextSibling);
    box.insertBefore(mkFreeOk(), row.nextSibling);
    box.insertBefore(hint, row.nextSibling);
    checkFree();

    /* mascot only feeds the legacy fallback card */
    mascot = new Image();
    mascot.src = '/masha.webp';

    /* compose the moment the block opens, not on the next interval tick */
    if (window.MutationObserver) {
      new MutationObserver(function(){ maybeDraw(); }).observe(box, {attributes: true, attributeFilter: ['class']});
    }
    setInterval(maybeDraw, 700);
  }
  function maybeDraw(){
    if (!box || !seatObj()) return;
    sceneFor(S.seat); /* warm the one scene for the current seat */
    /* No 'on' gate: compose eagerly as soon as a seat verdict exists, so
       the preview is already the finished picture when the block opens —
       and recompose when the personal link replaces the placeholder. */
    var key = S.seat + '|' + linkNow();
    if (key !== drawnKey) draw();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ build(); buildGrid(); });
  else { build(); buildGrid(); }
})();

/* ===== PLAIN-LANGUAGE GATE OVERRIDES (Nov 1, 2026) =====
   Founder: the verdict explanations read in plain words — full
   sentences, everyday words, digits unchanged. index.html is
   frozen at its upload cap and v11.js is at its own cap, so the
   gate GRIDS/SEATS explanation texts are replaced here at
   DOMContentLoaded (gate data is read at interaction time).
   In the app this block no-ops: GRIDS/SEATS are gate-only.
   Dashboard twins: tracks.js/tracks2.js GRIDINFO(_RU). ===== */
document.addEventListener('DOMContentLoaded', function(){
  if (typeof GRIDS === 'undefined' || typeof SEATS === 'undefined') return;
  if (GRIDS.law) { GRIDS.law.head = "LAW IS A YES — IF YOU PICK A SPECIALTY. THE MOST COMMON WAY IN IS A NO."; GRIDS.law.corner = "Privacy and AI rules pay the most in our scan of 46 postings ($212K–$319K), and the privacy certificate CIPP is named in 3 of 3 privacy postings that ask for one. The trap, in numbers: typical debt at a typical school is $112,500, while a typical first salary is $100,000."; GRIDS.law.short = "“Law” is really several very different jobs. Privacy and AI rules, checking companies before big deals, and health-care rules will stay needed, with postings up to $319K. The general paralegal job, and law school with no clear goal, are a bad bet."; }
  if (SEATS.specialist) SEATS.specialist.short = "Specialist paralegal jobs will stay needed in legal support. Privacy and AI-rules postings paid $212K–$319K in our scan of 46 postings, while the generalist job has 0% growth.";
  if (SEATS.paralegal) SEATS.paralegal.short = "The general paralegal job — a lawyer’s helper for everything — is a bad bet: middle pay $62,890, growth 0%. Specialist jobs post up to $150K–$200K, and privacy and AI-rules jobs up to $319K.";
  if (SEATS.docreview) SEATS.docreview.short = "Reading documents as a whole career is a dead end. It is the #1 job AI already does in law firms, and the good money moved to the specialists who run that AI.";
  if (SEATS.lawstudent) SEATS.lawstudent.short = "Law school only pays off if you pick a top specialty on purpose. With no clear goal, the middle result is a $100,000 first salary against $112,500 in median debt at the median school, while specialties chosen on purpose post $212K–$319K.";
  if (GRIDS.cpa) { GRIDS.cpa.head = "ACCOUNTING IS A YES — IN A SPECIALTY. THE MOST COMMON JOBS ARE A NO."; GRIDS.cpa.corner = "Checking a company’s money before a sale (transaction advisory, FDD) pays up to $225K — the top money in our 54-posting scan. The exam is hard: FAR, its hardest part, passes at 42%. Pick your specialty first, then sit the exam. Pay reflects 2026 scarcity — re-check in 2028."; GRIDS.cpa.short = "“Accountant” is nine jobs. The general ones (bookkeeping, tax prep, audit as a final stop) are a bad bet. Chosen specialties (narrow tax, SEC reporting for public companies, FDD — checking firms pre-sale, forensic, controller) stay needed and post $120K–$225K."; }
  if (SEATS.bookkeeper) SEATS.bookkeeper.short = "Keeping the books as your final job is a bad bet. The job shrinks by −6% while accountants grow by +5%. AI takes the routine work, and 29% of firms send it to cheaper countries. The way out is staff accountant → controller ($130–200K + bonus) or specialized tax work ($125–200K).";
  if (SEATS.tax) SEATS.tax.short = "Preparing tax returns as a generalist is a bad bet — it is the first job AI is taking in accounting. Specialized tax work posts $125–200K, and a CPA license is required in 8 of 10 manager postings.";
  if (SEATS.staff) SEATS.staff.short = "The general staff job is a bad bet as your final stop — postings stay flat at $50–80K. A CPA aimed at a specialty opens specialized tax work ($125–200K) and transaction advisory, checking firms pre-sale (up to $225K).";
  if (SEATS.audit) SEATS.audit.short = "General audit is a bad bet as your final stop ($150K top pay, and AI does the prep work), but it works as a bridge. Transaction advisory — checking companies before a sale — posts up to $225K and pays for an audit background.";
  if (SEATS.technical) SEATS.technical.short = "Technical accounting and reporting for public companies (SEC reporting) stays needed — postings pay $120–184K, and an active CPA is required in 6 of 6 postings. By law, only licensed CPAs can sign them.";
  if (SEATS.fdd) SEATS.fdd.short = "Transaction advisory (FDD, checking firms before a sale) and forensic fraud work will stay needed. FDD posts up to $225K, forensic $143–162K, paying for audit experience and modeling, not the license itself.";
  if (SEATS.controller) SEATS.controller.short = "The controller job will stay needed at $130–200K + bonus when the controller owns the company’s systems. NetSuite shows up in 10 of 10 senior industry postings in our scan.";
  if (GRIDS.nurse) { GRIDS.nurse.head = "NURSING IS A YES. THE MOST COMMON WAY IN IS A NO."; GRIDS.nurse.corner = "CRNA (nurse anesthetist) median pay is $236,590, and psych NP jobs post $200K–$257K. DNP schools charging $73K–$195K are a trap, because top postings required that degree in 0 of 16 cases."; GRIDS.nurse.short = "Nursing is many different jobs. A specialty RN, a psych NP, a CRNA and a travel nurse will stay needed. Med-surg (the general ward) as your final stop and starting as an LPN are dead ends. Generalist FNP work is a bad bet in big cities, where too many people already do it."; }
  if (SEATS.medsurg) SEATS.medsurg.short = "Working at a bedside on a general ward (med-surg) as your final stop is a dead end, where nurses quit the most. Specialty jobs post $50–$75/hr and open the door to travel pay and CRNA money.";
  if (SEATS.specialty) SEATS.specialty.short = "A specialty RN job will stay needed. ICU postings run $50–$75/hr, and two years in a specialty open up travel pay and the CRNA path, where the median pay is $236,590.";
  if (SEATS.travel) SEATS.travel.short = "Travel nursing is a good bet after two years in a specialty. The median pay was $2,134 a week in the Dec 2025 snapshot, and that pay is shrinking. But 70.7% of hospitals plan to hire fewer agency nurses, so treat travel as a window, not a final stop.";
  if (SEATS.nstudent) SEATS.nstudent.short = "Nursing will stay needed, but the most expensive way in is a bad bet. A short ADN program licenses you as an RN for $5,472 in total and with the same NCLEX exam, while DNP programs charging $73K–$195K were required in 0 of 16 top postings.";
  if (SEATS.np) SEATS.np.short = "The NP path pays for a specialty, not for joining the crowd. Psych NP postings run $200K–$257K, while generalist FNP work is a bad bet in big cities and in states that limit what nurses may do, where too many people already do it. It still works where nurses are scarce and in states that let NPs work fully on their own. A $73K–$195K DNP degree is the other trap, because a DNP was required in 0 of 16 top postings.";
  if (SEATS.crna) SEATS.crna.short = "A CRNA has the top pay in nursing, with a median of $236,590 and postings up to $400K base pay. It is also the one specialty where the doctorate is the license itself, not a trap.";
  if (SEATS.lpn) SEATS.lpn.short = "Starting as an LPN is a bad bet: growth is only +3%, and only 16% of LPNs work in hospitals. A short ADN program licenses you as an RN for $5,472 in total.";
  if (GRIDS.fin) { GRIDS.fin.head = "“FINANCIAL ANALYST” IS FIVE JOBS. THREE ARE GROWING. ONE IS A TRAP. ONE HAS A LOCKED DOOR."; GRIDS.fin.corner = "SQL is asked for in 31 of 40 top-money postings, while a CFA is required in 0 of 40. Senior analysts are hired 3-to-1 over juniors, so a plan that starts with a certificate is a detour."; GRIDS.fin.short = "“Financial analyst” is five jobs. The general reporting job is a trap, with a median pay of $103,570 and junior jobs down 21%. FP&A partnering, strategic finance and the analytics hybrid post up to $276,250."; }
  if (SEATS.reporting) SEATS.reporting.short = "The general reporting job is a bad bet. Its median pay is $103,570, junior postings are down 21%, and AI now writes the first drafts of the reports. The money is in FP&A partnering and in the analytics hybrid.";
  if (SEATS.fpa) SEATS.fpa.short = "The FP&A partner job will stay needed and posts up to $276,250. Only 5% of CFOs (top finance bosses) trust AI with a board report without a human check, so the job is to own the number, not just to put it together.";
  if (SEATS.strategic) SEATS.strategic.short = "Strategic finance will stay needed. Google posts $113K–$167K at analyst level and asks for SQL, not for a CFA, which was required in 0 of 40 top-money postings.";
  if (SEATS.hybrid) SEATS.hybrid.short = "The analytics hybrid is the fastest way into finance, because it needs fewer years in finance first. Snowflake posts $138K–$180,600 at 1–3 years for an “AI-first” analyst, and 0 of 40 top-money postings required a CFA.";
  if (SEATS.corpdev) SEATS.corpdev.short = "Corporate development, the team that buys other companies, is a good bet with a narrow early window. Pay goes to $184K, but entry runs through banking or consulting, and the door mostly closes after the first two years.";
  if (GRIDS.analyst) { GRIDS.analyst.head = "ANALYST IS A YES. THE VERSION THAT ONLY MAKES REPORTS IS A NO."; GRIDS.analyst.corner = "Pinterest offers a lead product analyst job, where you help decide what to build, at $145,747–$300,067. Coinbase offers a staff analytics engineer job, where you build clean data tables, at $207,485–$244,100. The trap is the junior reporting job at $60K–$75K. It drew 1,108 applications."; GRIDS.analyst.short = "“Analyst” is six jobs. The two reporting jobs, writing documents about what is needed and making charts on request, are a bad end point. The decision jobs in product and strategy, and analytics engineering, the job that builds data tables, are posted at $96K–$300K."; }
  if (GRIDS.dataanalyst) { GRIDS.dataanalyst.head = "DATA ANALYST IS A YES. THE VERSION THAT ONLY MAKES REPORTS IS A NO."; GRIDS.dataanalyst.corner = "Pinterest offers a lead product analyst job, where you help decide what to build, at $145,747–$300,067. Coinbase offers a staff analytics engineer job, where you build clean data tables, at $207,485–$244,100. The trap is the junior reporting job at $60K–$75K. It drew 1,108 applications."; GRIDS.dataanalyst.short = "“Data analyst” is four different jobs. Making charts on request is a bad end point. Helping decide what to build, in the product job, and building clean data tables, in analytics engineering, are good choices. They post $96K–$300K. Business analyst is a different profession, with its own check."; }
  if (SEATS.reportda) SEATS.reportda.short = "The reporting data analyst job is a bad choice as your final stop. A dashboard, a report with charts, is the thing AI can draft most cheaply, and one junior seat drew 1,108 applications at $60K–$75K.";
  if (SEATS.prodan) SEATS.prodan.short = "Product analyst is a good choice. Jobs pay $106K–$300,067, and all four product jobs in our check asked for A/B testing, where you try version A against version B. The work is making decisions, not building reports.";
  if (SEATS.aneng) SEATS.aneng.short = "Analytics engineering is a good choice. The data tool dbt is named in 7 of 7 postings, pay for senior staff posts up to $244,100, and this job builds the clean data models that every AI answer is read from.";
  if (SEATS.dsgate) SEATS.dsgate.short = "Data scientist is a good choice, but a different job. Official job statistics (BLS) give median pay of $120,230 and growth of +35%. You get there with statistics and models, not more years of reporting.";
  if (GRIDS.businessanalyst) { GRIDS.businessanalyst.head = "BUSINESS ANALYST IS A YES. THE JOB OF ONLY WRITING DOCUMENTS IS A NO."; GRIDS.businessanalyst.corner = "Strategy & operations, the work of helping bosses decide — Google lists a senior strategy analyst at $124,000–$177,000. The trap: the junior document job pays $51K–$82K, and AI now drafts its main product."; GRIDS.businessanalyst.short = "“Business analyst” is two different jobs. The job of writing requirement documents is a dead end. The strategy & operations job, helping bosses make decisions, is a good bet at $96K–$177K. A Data Analyst is a different profession — it has its own check."; }
  if (SEATS.genba) SEATS.genba.short = "The general business analyst job is a bad bet as your final stop — its main product is a document that AI now drafts, and junior pay sits at $51K–$82K while jobs where you help decide post $96K+.";
  if (SEATS.bizops) SEATS.bizops.short = "Strategy & operations is a good bet — Google posts $124K–$177K — but the top jobs first ask for years in consulting or banking; it is the decision-making job that checks where you worked before.";
  if (GRIDS.aicreator) { GRIDS.aicreator.head = "AI CONTENT CREATOR IS A NO. AI AS YOUR TEAM OF HELPERS IS A YES."; GRIDS.aicreator.corner = "A real face with AI helpers, and AI video made for brands — the two jobs where a person’s judgment is what sells. The trap has a price: a year spent alone building a fake online persona (≈500 evening hours, ≈$18,000 of work) aims at a job whose best-documented case pays an agency €3,000 a month."; GRIDS.aicreator.short = "“AI content creator” is five different jobs — faceless AI channels, fake virtual personas and AI streamers are a dead end, and a real face with AI helpers, or AI video sold to brands, is a good bet."; }
  if (SEATS.aimass) SEATS.aimass.short = "The faceless mass AI channel is a dead end — YouTube bans template AI videos from earning, and 16 channels with 35 million subscribers were shut down in one wave.";
  if (SEATS.persona) SEATS.persona.short = "The virtual persona is a bad bet on your own — 214 documented personas exist, the best-documented one earns an agency €3,000 a month, and a 10-million-follower AI rapper was dropped in nine days.";
  if (SEATS.aistreamer) SEATS.aistreamer.short = "The AI streamer is a bad bet as a plan — the one record-holder in this category is a programmer’s software project, not a real streaming career.";
  if (SEATS.aipipeline) SEATS.aipipeline.short = "A real face with AI helpers is a good bet — brands pay $154 for the human video, and the helpers multiply how many videos that face can make and send out.";
  if (SEATS.aiservice) SEATS.aiservice.short = "AI video for brands is a good bet — employers post $40K–$75K for the title, and what lifts you above the $4-an-hour floor for cheap foreign workers is judgment and clients.";
});
