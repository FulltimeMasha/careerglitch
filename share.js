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
    cpa: 'ACCOUNTING — YES IN A SPECIALTY · MOST COMMON JOBS — NO',
    nurse: 'NURSING \u2014 YES \u00B7 MOST COMMON WAY IN \u2014 NO',
    fin: 'FINANCIAL ANALYST \u2014 3 GROWING \u00B7 1 TRAP \u00B7 1 LOCKED',
    creator: 'STAFF CONTENT CREATOR — YES · THE WRITING JOB — NO',
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
  if (GRIDS.law) { GRIDS.law.head = "LAW IS A YES — IF YOU PICK A SPECIALTY. THE MOST COMMON WAY IN IS A NO."; GRIDS.law.corner = "Privacy and AI rules pay the most in our 46 job posts ($212K–$319K). Privacy job posts that want a certificate: 3 of 3 name CIPP. The trap: typical debt at a typical school is $112,500. A typical first salary is $100,000."; GRIDS.law.short = "AI already reads documents for law firms. But some law jobs still pay very well. “Law” is really several very different jobs. Some will stay needed: privacy and AI rules, checking companies before big deals, health-care rules. Job posts there pay up to $319K. The general paralegal job is a bad bet. So is law school with no clear goal."; }
  if (SEATS.specialist) SEATS.specialist.short = "Specialist paralegal jobs will stay needed. Privacy and AI-rules job posts paid $212K–$319K in our 46 job posts. The general job has 0% growth.";
  if (SEATS.paralegal) SEATS.paralegal.short = "The general paralegal job is a bad bet. That’s a lawyer’s helper for everything. Middle pay $62,890, growth 0%. Specialist jobs pay up to $150K–$200K. Privacy and AI-rules jobs pay up to $319K. That’s where to aim!";
  if (SEATS.docreview) SEATS.docreview.short = "Reading documents all career long is a dead end. It’s the #1 law job AI already does. The good money moved to specialists who run that AI. You can become one of them.";
  if (SEATS.lawstudent) SEATS.lawstudent.short = "Law school only pays off if you pick a top specialty on purpose. With no clear goal, a typical first salary is $100,000. Typical debt at a typical school is $112,500. Specialties picked on purpose pay $212K–$319K.";
  if (GRIDS.cpa) { GRIDS.cpa.head = "ACCOUNTING IS A YES — IN A SPECIALTY. THE MOST COMMON JOBS ARE A NO."; GRIDS.cpa.corner = "Checking a company’s money before a sale (transaction advisory, FDD) pays up to $225K. That’s the top pay in our 54 job posts. The exam is hard: only 42% pass FAR, its hardest part. Pick your specialty first, then take the exam. Pay is high in 2026 because few people do this — re-check in 2028."; GRIDS.cpa.short = "AI already does routine bookkeeping and tax prep. “Accountant” is nine jobs. The general ones are a bad bet: bookkeeping, tax prep, audit as a final stop. Special ones stay needed and pay $120K–$225K. Those are narrow tax, SEC reporting for public companies, FDD (checking firms before a sale), forensic, controller."; }
  if (SEATS.bookkeeper) SEATS.bookkeeper.short = "Keeping the books as your final job is a bad bet. The job shrinks −6%, while accountants grow +5%. AI takes the routine work. 29% of firms send it to cheaper countries. Ways out: staff accountant → controller ($130–200K + bonus). Or special tax work ($125–200K).";
  if (SEATS.tax) SEATS.tax.short = "Doing general tax returns is a bad bet. It’s the first accounting job AI is taking. Special tax work pays $125–200K. 8 of 10 manager job posts need a CPA license.";
  if (SEATS.staff) SEATS.staff.short = "The general staff job is a bad bet as your final stop. Pay stays flat at $50–80K. A CPA aimed at a specialty opens better jobs. Special tax work pays $125–200K. Transaction advisory, checking firms before a sale, pays up to $225K.";
  if (SEATS.audit) SEATS.audit.short = "General audit is a bad bet as your final stop. Top pay is $150K, and AI does the prep work. But it’s a great bridge. Transaction advisory checks companies before a sale. It pays up to $225K and loves audit experience.";
  if (SEATS.technical) SEATS.technical.short = "Technical accounting stays needed. That includes reporting for public companies (SEC reporting). Job posts pay $120–184K. 6 of 6 job posts need an active CPA. By law, only licensed CPAs can sign these reports.";
  if (SEATS.fdd) SEATS.fdd.short = "Transaction advisory (FDD, checking firms before a sale) will stay needed. So will forensic work (finding fraud). FDD pays up to $225K, forensic $143–162K. They pay for audit experience and modeling, not the license.";
  if (SEATS.controller) SEATS.controller.short = "The controller job will stay needed at $130–200K + bonus. That’s when the controller runs the company’s money systems. NetSuite is in 10 of 10 senior job posts we read.";
  if (GRIDS.nurse) { GRIDS.nurse.head = "NURSING IS A YES. THE MOST COMMON WAY IN IS A NO."; GRIDS.nurse.corner = "CRNA (nurse anesthetist) typical pay is $236,590. Psych NP jobs pay $200K–$257K. DNP schools cost $73K–$195K and are a trap. Top job posts asked for that degree 0 of 16 times."; GRIDS.nurse.short = "AI helps with paperwork, but patients still need a nurse. Nursing is many different jobs. These will stay needed: specialty RN, psych NP, CRNA, travel nurse. Dead ends: med-surg (the general ward) as a final stop, and starting as an LPN. General FNP work is a bad bet in big cities. Too many people already do it."; }
  if (SEATS.medsurg) SEATS.medsurg.short = "A general ward job (med-surg) as a final stop is a dead end. Nurses quit there the most. Specialty jobs pay $50–$75/hr. They open the way to travel pay and CRNA money.";
  if (SEATS.specialty) SEATS.specialty.short = "A specialty RN job will stay needed. ICU job posts pay $50–$75/hr. Two years in a specialty open travel pay and the CRNA path. CRNA typical pay is $236,590.";
  if (SEATS.travel) SEATS.travel.short = "Travel nursing is a good bet after two years in a specialty. Typical pay was $2,134 a week in Dec 2025. That pay is shrinking. 70.7% of hospitals plan to hire fewer agency nurses. So enjoy travel for a while, but don’t make it your final stop.";
  if (SEATS.nstudent) SEATS.nstudent.short = "Nursing will stay needed, but the most expensive way in is a bad bet. A short ADN program makes you an RN for $5,472 total. You take the same NCLEX exam. DNP programs cost $73K–$195K. 0 of 16 top job posts asked for one.";
  if (SEATS.np) SEATS.np.short = "The NP path pays for a specialty, not for doing what everyone does. Psych NP job posts pay $200K–$257K. General FNP work is a bad bet in big cities. Also in states that limit what nurses may do. Too many people already do it there. It still works where nurses are scarce. And in states that let NPs work fully on their own. A $73K–$195K DNP degree is the other trap. 0 of 16 top job posts asked for a DNP.";
  if (SEATS.crna) SEATS.crna.short = "A CRNA has the top pay in nursing. Typical pay $236,590, job posts up to $400K base. Here the doctorate is the license itself. So it’s not a trap.";
  if (SEATS.lpn) SEATS.lpn.short = "Starting as an LPN is a bad bet. Growth is only +3%. Only 16% of LPNs work in hospitals. Better idea: a short ADN program makes you an RN for $5,472 total.";
  if (GRIDS.fin) { GRIDS.fin.head = "“FINANCIAL ANALYST” IS FIVE JOBS. THREE ARE GROWING. ONE IS A TRAP. ONE IS HARD TO GET INTO."; GRIDS.fin.corner = "31 of 40 top-paying job posts ask for SQL. 0 of 40 ask for a CFA. Companies hire 3 seniors for every junior. So starting with a certificate is a detour."; GRIDS.fin.short = "AI now drafts finance reports. “Financial analyst” is five jobs. The general reporting job is a trap. Typical pay $103,570, and junior jobs are down 21%. FP&A partnering (planning money with a team), strategic finance and the analytics hybrid pay up to $276,250."; }
  if (SEATS.reporting) SEATS.reporting.short = "The general reporting job is a bad bet. Typical pay is $103,570. Junior job posts are down 21%. AI now writes first drafts of the reports. The money is in FP&A partnering and the analytics hybrid.";
  if (SEATS.fpa) SEATS.fpa.short = "The FP&A partner job will stay needed. It pays up to $276,250. Only 5% of CFOs (top finance bosses) trust AI’s board report without a human check. So your job is to own the number, not just build it.";
  if (SEATS.strategic) SEATS.strategic.short = "Strategic finance will stay needed. Google pays analysts $113K–$167K. It asks for SQL, not a CFA. 0 of 40 top-paying job posts asked for a CFA.";
  if (SEATS.hybrid) SEATS.hybrid.short = "The analytics hybrid is the fastest way into finance. It needs fewer years in finance first. Snowflake pays $138K–$180,600 for an “AI-first” analyst with 1–3 years. 0 of 40 top-paying job posts asked for a CFA.";
  if (SEATS.corpdev) SEATS.corpdev.short = "Corporate development is the team that buys other companies. It’s a good bet, but only early on. Pay goes to $184K. You get in through banking or consulting. After the first two years, the way in mostly closes.";
  if (GRIDS.analyst) { GRIDS.analyst.head = "ANALYST IS A YES. THE VERSION THAT ONLY MAKES REPORTS IS A NO."; GRIDS.analyst.corner = "Pinterest pays a lead product analyst $145,747–$300,067. That job helps decide what to build. Coinbase pays a staff analytics engineer $207,485–$244,100. That job builds clean data tables. The trap: the junior reporting job at $60K–$75K. It got 1,108 applications."; GRIDS.analyst.short = "“Analyst” is six jobs. Two reporting jobs are a bad end point. One writes documents about needs. One makes charts on request. Product and strategy decision jobs pay $96K–$300K. So does analytics engineering, which builds data tables."; }
  if (GRIDS.dataanalyst) { GRIDS.dataanalyst.head = "DATA ANALYST IS A YES. THE VERSION THAT ONLY MAKES REPORTS IS A NO."; GRIDS.dataanalyst.corner = "Pinterest pays a lead product analyst $145,747–$300,067. That job helps decide what to build. Coinbase pays a staff analytics engineer $207,485–$244,100. That job builds clean data tables. The trap: the junior reporting job at $60K–$75K. It got 1,108 applications."; GRIDS.dataanalyst.short = "“Data analyst” is four different jobs. Making charts on request is a bad end point. Two jobs are good choices. Product: helping decide what to build. Analytics engineering: building clean data tables. They pay $96K–$300K. Business analyst is a different job, with its own check."; }
  if (SEATS.reportda) SEATS.reportda.short = "The reporting data analyst job is a bad final stop. AI can make a dashboard (a chart report) very cheaply. One junior job got 1,108 applications at $60K–$75K.";
  if (SEATS.prodan) SEATS.prodan.short = "Product analyst is a good choice. Jobs pay $106K–$300,067. All four product job posts asked for A/B testing (trying version A against version B). The work is making decisions, not reports.";
  if (SEATS.aneng) SEATS.aneng.short = "Analytics engineering is a good choice. The data tool dbt is in 7 of 7 job posts. Senior staff pay goes up to $244,100. This job builds the clean data tables every AI answer reads from.";
  if (SEATS.dsgate) SEATS.dsgate.short = "Data scientist is a good choice, but a different job. Official data (BLS): typical pay $120,230, growth +35%. You get there with statistics and models. Not with more years of reports.";
  if (GRIDS.businessanalyst) { GRIDS.businessanalyst.head = "BUSINESS ANALYST IS A YES. THE JOB OF ONLY WRITING DOCUMENTS IS A NO."; GRIDS.businessanalyst.corner = "Strategy & operations helps bosses decide. Google pays a senior strategy analyst $124,000–$177,000. The trap: the junior document job pays $51K–$82K. AI now drafts its main product."; GRIDS.businessanalyst.short = "“Business analyst” is two different jobs. Writing requirement documents is a dead end. Strategy & operations, helping bosses decide, is a good bet at $96K–$177K. Data Analyst is a different job, with its own check."; }
  if (SEATS.genba) SEATS.genba.short = "The general business analyst job is a bad bet as your final stop. Its main product is a document AI now drafts. Junior pay is $51K–$82K. Jobs where you help decide pay $96K+.";
  if (SEATS.bizops) SEATS.bizops.short = "Strategy & operations is a good bet. Google pays $124K–$177K. But top jobs first want years in consulting or banking. This decision job checks where you worked before.";
  if (GRIDS.aicreator) { GRIDS.aicreator.head = "AI CONTENT CREATOR IS A NO. AI AS YOUR TEAM OF HELPERS IS A YES."; GRIDS.aicreator.corner = "Two jobs sell a person’s judgment: a real face with AI helpers, and AI video for brands. The trap has a price. A year alone building a fake online character costs ≈500 evening hours (≈$18,000 of work). The best-known case earns its agency €3,000 a month."; GRIDS.aicreator.short = "“AI content creator” is five different jobs. Faceless AI channels, fake characters and AI streamers are a dead end. A real face with AI helpers, or AI video for brands, is a good bet."; }
  if (SEATS.aimass) SEATS.aimass.short = "The faceless mass AI channel is a dead end. YouTube stops template AI videos from earning. 16 channels with 35 million subscribers were shut down at once.";
  if (SEATS.persona) SEATS.persona.short = "A virtual character is a bad bet on your own. Only 214 known ones exist. The best-known earns an agency €3,000 a month. A 10-million-follower AI rapper was dropped in nine days.";
  if (SEATS.aistreamer) SEATS.aistreamer.short = "The AI streamer is a bad plan. The one record-holder here is a programmer’s software project. It’s not a real streaming career.";
  if (SEATS.aipipeline) SEATS.aipipeline.short = "A real face with AI helpers is a good bet. Brands pay $154 for the human video. The helpers let that face make and share many more videos.";
  if (SEATS.aiservice) SEATS.aiservice.short = "AI video for brands is a good bet. Employers pay $40K–$75K for this job. Judgment and clients lift you above $4-an-hour cheap overseas workers.";
});
