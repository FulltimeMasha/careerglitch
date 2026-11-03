/* Loaded by v11.js (document.write) -- the Creator Staff Reframe block,
   split out of v11.js on 2026-11-01 for the Vercel upload cap. */
/* ===== CREATOR STAFF REFRAME (Nov 1, 2026 — founder ruling).
   The creator profession is REDEFINED: from the independent /
   influencer creator (v1 pack, retired today) to the STAFF content
   creator — the salaried person a company hires in-house to make
   content for the company's channels. Source:
   ~/workspace/pathcheck-creator-pilot/ v2 pack (method-v11-v2.md) —
   40 real US staff postings opened and read in full on Nov 1, 2026
   (postings-log-v2.md). Profession id and code word unchanged
   ('creator' / UPLOAD). index.html is frozen, so — like the analyst
   and aicreator extensions — this block mutates the inline globals
   at DOMContentLoaded (PROFS / COFACTS / SEATS / GRIDS / SEAT_RULES)
   and overrides the v11.js-layer globals (QUOTES / GV11 / V11 /
   PROF_STEPS / stateFact) directly.
   LEGACY: the six v1 seats (faceless / streamer / personality /
   ugc / educator / creatorbiz) are REMOVED from the matcher below —
   their seat objects stay defined in frozen index.html but nothing
   routes to them anymore. Existing creator leads keep their seat
   ids; the app layer keeps the legacy seat metadata readable
   (tracks.js SEATINFO/DOORS), so old dashboards still render.
   UGC ROUTING (founder: "UGC is not hiring"): the bare strings
   'ugc' / 'ugc creator' no longer match any seat. They fall through
   to the creator cluster grid — which now opens with the definition
   line ("This check is about the HIRED content creator… freelance
   UGC gigs are a different market") — because the person typing
   them is looking for paid content work, and the staff map is the
   honest answer to that search; a dead-end waitlist would lose
   them. 'ai ugc' still routes to the aicreator pipeline seat
   (aicreator rules were unshifted earlier and keep priority).
   STYLE PASS (founder ruling, Nov 1, 2026): every human-facing
   explanation text below is written «как для тупых» — dead-simple
   full sentences, everyday words, market terms explained in plain
   words inside the same sentence. Facts, digits and verdicts are
   unchanged from the v2 pack. ===== */
var NEXT_CST = 'The Full Report turns this map into an easy job hunt, step by step. It shows which of the five jobs your videos already prove you can do. It shows what your portfolio still needs. 22 of our 40 job posts ask for a portfolio first. It also tells you where to apply first. Brand, face and paid-ad jobs come first. The agency is a school for 1–3 years. The writing job comes last. We read 40 staff job posts in full on Nov 1, 2026. We also used official US job data (the BLS). There, this job hides under other names. We re-check these verdicts on 1 November 2027. Sooner, if job posts name AI tools faster than forecast F-S1 says.';
QUOTES.creator = {q:'If you have a great skillset for telling stories, for capturing attention, you’re such a valuable asset to an in house team.',
  by:'Jed Eglington — he was a staff creator at HiSmile. Now he helps brands build their own creator teams (Creator Stories / Kit podcast)',
  url:'https://share.transistor.fm/s/960c3782/transcript.txt'};
GV11.creator = {hook:'Typical creator deal: $3,000. Typical staff salary: $77,000.', next:NEXT_CST};
V11.brandcreator = {hook:'One person is the whole studio. That’s the job now.', conf:'Medium', next:NEXT_CST,
  coe:'If you pick the writing job instead, you earn about $20K a year less. Its middle pay is about $57.5K. This one’s is about $77.5K. We counted this from the job posts we read.',
  step:{
    student:'First step, if you are a student: make your video portfolio first. 22 of 40 staff job posts ask for a portfolio. Only 8 ask for a degree. This month, shoot three short videos on your phone. Make them for TikTok, Reels or Shorts. You’ve got this!',
    early:'First step, if you are early in your career: apply to brand jobs first. Their middle pay is $65K–$85K. Put one full project in your portfolio. Take one brand from idea to filming, editing and posting. Do it all by yourself.',
    mid:'First step, if you have 3–5 years in: add a rare skill. Most people don’t have it. It can be trust on camera. Or numbers from paid ads. Or deep knowledge of one industry. Plain content work stops growing at some point. That’s where the special jobs begin.',
    senior:'First step, if you have 5+ years in: look at the top pay, not the job title. Doing the whole job alone, idea to posting, pays $115–125K (Back Market). Is your pay stuck in the middle? Change your role. Making more content won’t fix it.'}};
V11.facecreator = {hook:'The two highest salaries we found pay for a face.', conf:'Medium', next:NEXT_CST,
  coe:'A face with nothing rare behind it gets about $44–54K (Patriot). A face with real know-how behind it gets $110–160K. We counted this from the job posts we read.',
  step:{
    student:'First step, if you are a student: get on camera every week. Being good on camera is a skill you can practice. 13 of 40 job posts want a person on camera. From the start, link your face to one topic. Pick one you can become an expert in.',
    early:'First step, if you are early in your career: add rare know-how to your face. A trade, a technology, or one industry. Fictiv asks for an engineering degree and pays $110–135K. Being charming alone gets the lowest pay.',
    mid:'First step, if you have 3–5 years in: turn your face into proof you own. Make a public set of videos where you host. Show how long people kept watching. That’s what the $140–160K job (Base44) looks for.',
    senior:'First step, if you have 5+ years in: charge for trust, not hours. The audience believes you. That is worth a lot. When you talk pay, ask what happens to the audience if you leave.'}};
V11.perfcreator = {hook:'This job is judged by the money it brings in, not by views.', conf:'Medium', next:NEXT_CST,
  coe:'Jobs that only make plain posts stop at about $77.5K middle pay. No bonus. This job pays $65–100K base. Plus extra money when your ads hit goals (KPI bonuses). We counted this from the job posts we read.',
  step:{
    student:'First step, if you are a student: learn ads while you learn the camera. Learn hooks (the first seconds that stop a viewer). Learn calls to action (the line that tells viewers what to do). Learn CTR (how many people clicked). 23 of 40 staff job posts list reading the numbers. In this job, that’s the whole job.',
    early:'First step, if you are early in your career: run one paid ad test, start to finish. Write down the number it made. A test you can show is the rarest proof out there.',
    mid:'First step, if you have 3–5 years in: own a whole testing system, not single ads. That means a plan, a few versions, reading results, and testing again. Jobs paying $100K+ in total pay for exactly that.',
    senior:'First step, if you have 5+ years in: show that your content makes money. A money number changes the pay talk. For comparison: producers and directors make $90,360 typical pay (official US data, BLS).'}};
V11.agencycreator = {hook:'Agency pay stops at $95K. And agencies tell clients AI can do your hours.', conf:'Medium', next:NEXT_CST,
  coe:'Stay too long, and you earn about $40–65K a year less once you’re senior. Agency pay stops at $95K. Face and expert jobs go up to $135–160K. We counted this from the job posts we read.',
  step:{
    student:'First step, if you are a student: an agency job is a fine first way in. It’s the only real school in this field. Go in with a plan to leave. 1–3 years, a portfolio with several clients, then move on.',
    early:'First step, if you are early in your career: collect clients, not tasks. When you leave, you take a portfolio from many industries. At OLIVER, pay goes from Junior at $72–81K to Producer at $85–95K. Climb it, then leave from the top.',
    mid:'First step, if you have 3–5 years in: move now, while your portfolio still counts. Brand, face and paid-ad jobs hire people from agencies. They pay $100K+. Each extra agency year gives you less.',
    senior:'First step, if you have 5+ years in: sell your years as creative leadership inside a brand. Or as a paid-ads lead. Not as more agency hours. The agency sells your hours. A staff job pays for your good judgment.'}};
V11.mediacreator = {hook:'The draft is written by AI now. The human fixes it.', conf:'Medium', next:NEXT_CST,
  coe:'Stay in this writing job, and you earn about $20K a year less than brand jobs. Over five years, that’s about $95–100K. We counted this from the job posts we read.',
  step:{
    student:'First step, if you are a student: don’t aim your degree at a writing job. Official US data (BLS) shows 0% growth for writers. Build video skills first. In the same job posts, video skills pay $15–25K more in brand jobs.',
    early:'First step, if you are early in your career: keep writing, but show video first. Put video first in your portfolio. Apply to brand or paid-ad jobs. The same skills pay more there.',
    mid:'First step, if you have 3–5 years in: use the numbers from your own work. Do you read the numbers and change your work? Then you already do the main paid-ad task. Apply as if that job is yours. You’re closer than you think.',
    senior:'First step, if you have 5+ years in: sell your editing judgment as leadership. Content leads own the plan and a team. They earn near $90,360, the typical producer and director pay. That’s more than editing jobs pay.'}};
PROF_STEPS.creator = {
  student:'First step, if you are a student: make your video portfolio now. Only 8 of 40 staff job posts ask for a degree. 22 ask for a portfolio. One employer hires from a 30–60-second video alone!',
  early:'First step, if you are early in your career: apply to the YES jobs. Those are brand, face and paid-ad jobs. Treat the agency as a 1–3 year school. The writing job is the trap.',
  mid:'First step, if you have 3–5 years in: a raise comes from a new role, not a new title. Face, paid-ad and do-it-all jobs pay $100K+. Add the rare skill your job is missing.',
  senior:'First step, if you have 5+ years in: look at the top pay. Producers and directors make a typical $90,360 (BLS, official US data). Creator leads who own the plan and money earn that. Editing jobs don’t.'};
/* stateFact: the frozen creator line priced the YouTube Partner
   Program — retired with v1. The staff fact is geography: the same
   job posts different bands by city tier, and there is no license
   anywhere in this profession. Wrap, don’t fork: every other
   profession keeps the original function. */
stateFact = (function(origStateFact){
  return function(prof, code, name){
    if (prof === 'creator') return 'Where you live changes pay a lot. Nova Labs pays $81K–$105K in smaller cities. In SF/NYC it pays $101K–$130K for the same job. This job needs no license. In every state, your portfolio is your proof.';
    return origStateFact(prof, code, name);
  };
})(stateFact);
(function(){
  function inject(){
    if (typeof PROFS === 'undefined' || !PROFS.creator) return;
    if (PROFS.creator.srcWhat === 'staff job posts') return; // already reframed (idempotent; adds NO marker keys — minidata serializes PROFS verbatim)
    PROFS.creator = {title:'Your Path Check — Content Creator (the staff job)', kick:'Content Creator — the staff job', count:40,
      srcWhat:'staff job posts', srcLine:'We read 40 real job posts in full on Nov 1, 2026. All from companies that hire creators as staff. These aren’t numbers about independent creators.',
      code:'UPLOAD', tail:'PATHCHECK — KNOW BEFORE YOU APPLY'};
    COFACTS.creator = [
      '<b>22 of 40 job posts ask for a portfolio.</b> We read 40 staff creator job posts. 22 want to see your videos first. Only 8 of 40 ask for a degree. Here, your videos are your diploma.',
      '<b>The middle pay is about $77,000.</b> We looked at 36 US pay ranges in the job posts. The middle is about $77,000 a year. Official US data puts the same work at $74,250–$76,910.',
      '<b>Only 2 of 40 job posts name AI tools.</b> Companies still hire people to make content. Good news! Only two job posts name tools like ChatGPT or Runway.'];
    SEATS.brandcreator = {prof:'creator', label:'Brand content creator — studio of one',
      head:'BRAND CONTENT CREATOR — <span class="pink">YES</span>.',
      facts:[
        ['The pay','Most of these jobs pay <span class="pink">$65K–$85K</span> a year in the middle. Do the whole job alone, idea to posting, and pay goes up to <span class="pink">$115–125K</span> (Back Market).'],
        ['The job','One person does it all: idea, filming, editing, posting, reading the numbers. One job post (Bobbie) calls it “<span class="pink">a Social Creator Studio of One</span>.” Another company (Schwan’s) wants <span class="pink">3–5 videos a week</span>.'],
        ['The screen','Companies look at your videos first. <span class="pink">22 of 40</span> job posts ask for a portfolio. <span class="pink">21 of 40</span> name the editing app Premiere. <span class="pink">28 of 40</span> want you to know TikTok, Reels and Shorts well.']],
      door:'What to do: this is a YES job if you can do it all alone. Idea, filming, editing, posting, reading the numbers. Then add a rare skill. Trust on camera, paid-ad numbers, or deep know-how in one industry. Plain content work stops growing at some point. That’s where special jobs begin.',
      short:'The brand staff creator is a YES. One person does the whole job for one company. Idea, filming, editing, posting. Middle pay is $65K–$85K. Doing it all alone pays up to $125K.'};
    SEATS.facecreator = {prof:'creator', label:'Face-of-the-brand creator — on camera',
      head:'FACE-OF-THE-BRAND CREATOR — <span class="pink">YES</span>.',
      facts:[
        ['The pay','The two highest real pay ranges we found are for this job. <span class="pink">Base44/Wix pays $140–160K</span>, and <span class="pink">Fictiv pays $110–135K</span>.'],
        ['The screen','<span class="pink">13 of 40</span> job posts want a person on camera. Fictiv also asks for an engineering degree. Base44 asks for a video portfolio, no degree.'],
        ['The catch','A face alone gets the lowest pay. Patriot pays only <span class="pink">about $44–54K</span> for a face with no rare know-how.']],
      door:'What to do: AI can’t fake your real face for a real company. Add rare know-how to it. A trade, a technology, or one industry. Then you get paid like Fictiv ($110–135K). Not like Patriot (about $44–54K).',
      short:'The face-of-the-brand creator is a YES. The top pay we found ($110–160K) is for a trusted person on camera. But only with real, rare know-how behind the face.'};
    SEATS.perfcreator = {prof:'creator', label:'Paid-social / performance creator',
      head:'PAID-SOCIAL CREATOR — <span class="pink">YES</span>.',
      facts:[
        ['The pay','These jobs pay <span class="pink">$65–100K base, plus KPI bonuses</span>. That’s extra money when your content hits goals. One job post (Innovative Metrics) says bonuses “can push total compensation to over $100,000.”'],
        ['The job','Your content is judged by <span class="pink">CTR and conversion</span>. CTR is how many people clicked. Conversion is how many bought or signed up. You change the first seconds and the picture. Then you test again.'],
        ['Why it lasts','<span class="pink">23 of 40</span> job posts list reading the numbers as a task. In this job, reading the numbers is the job. Jobs close to the money survive cuts. Jobs far from the money often don’t.']],
      door:'What to do: learn to read ad numbers like you read an audience. Run one paid test, start to finish. A test with a number on it is the rarest proof out there.',
      short:'The paid-social creator is a YES. This job sits closest to the company’s money. It’s judged by CTR (how many clicked) and by sales. It pays bonuses no plain job we found offers.'};
    SEATS.agencycreator = {prof:'creator', label:'Agency staff creator',
      head:'AGENCY CREATOR — <span class="pink">NO</span> AS YOUR FINAL STOP.',
      facts:[
        ['The pay','Agency pay sits close together at <span class="pink">$65,000–$85,750</span>. 8 of the 9 agency pay ranges fall there. The highest agency pay we found is <span class="pink">$95,000</span>.'],
        ['The pressure','Agencies name AI tools the most. One job post (OLIVER, for BISSELL) lists <span class="pink">ChatGPT, Midjourney, Firefly and Jasper</span> as must-know tools. And agencies tell clients AI will do your hours.'],
        ['The way in it gives you','It’s the only real school in this field. At OLIVER, pay goes from <span class="pink">Junior at $72–81K to Producer at $85–95K</span>. You work for real clients on the way up.']],
      door:'What to do instead: treat the agency as a 1–3 year school, not a home. Then take your client work to a brand, face or paid-ad job. The same skills pay $100K+ there.',
      short:'The agency staff creator is a NO as your final stop. Pay stops at $95K. The agency tells clients AI will do your hours. But as a 1–3 year school, it’s a YES. Leave with a portfolio you can take.'};
    SEATS.mediacreator = {prof:'creator', label:'Media-company / writing-led creator',
      head:'MEDIA & WRITING-LED CREATOR — <span class="pink">NO</span>.',
      facts:[
        ['The pay','These are the lowest clear pay ranges we found. <span class="pink">RVO Health pays $50–67K</span>, and <span class="pink">Gallery Media pays $50–65K</span>.'],
        ['The workflow','One job post (Clearlink) says: “Use <span class="pink">AI-supported drafts</span> as a starting point, then refine.” So AI writes the first draft. The human only fixes it. That’s 3–5 articles plus videos a week.'],
        ['Official data','Official US data (BLS) shows <span class="pink">0% growth</span> for writers and authors in 2025–35. This kind of work is not growing.']],
      door:'What to do instead: keep writing, but show video first. In the same job posts, video skills pay $15–25K more in brand and paid-ad jobs.',
      short:'The media and writing job is a NO. It has the lowest pay we found. AI writes the first draft, and the human only fixes it. Don’t worry: your video skills pay $15–25K more in nearby jobs.'};
    GRIDS.creator = {head:'STAFF CONTENT CREATOR IS A YES. THE WRITING JOB IS A NO.',
      sub:'This check is about the HIRED content creator. That means a staff job inside a company, with a salary. It’s not about being an independent influencer. It’s not about one-off freelance gigs (called UGC; that map is retired). The staff title covers five different jobs. They get different verdicts:',
      corner:'The face job pays up to $160,000 (Base44). Doing the whole job alone pays up to $125,000 (Back Market). The trap: the writing job pays near $57,500 in the middle. That’s about $20,000 a year less than brand jobs. Same skills!',
      short:'The staff content creator job is a YES. It’s a job inside a company, with a salary. Middle pay is near $77,000 in the job posts. Brand, face and paid-ad jobs are the good ones. The agency is a school, not a home. The writing job is a NO.',
      rows:[
        ['Brand content creator — studio of one','YES','middle pay $65K–$85K · doing it all pays to $125K','brandcreator'],
        ['Face-of-the-brand creator','YES','top pay $110–160K · face + know-how','facecreator'],
        ['Paid-social / performance creator','YES','$65–100K + KPI bonuses · judged on sales','perfcreator'],
        ['Agency staff creator','NO · SCHOOL','pay $65–85,750 · top $95K · stay 1–3 years, then move','agencycreator'],
        ['Media / writing-led creator','NO','middle ≈$57.5K · AI writes the draft','mediacreator']]};
    /* Retire the v1 seats from the matcher: drop every seat rule
       that points at a v1 creator seat, then append the staff seat
       rules LAST (aicreator's unshifted rules and every earlier
       profession's rules keep priority). */
    var RETIRED = {faceless:1, streamer:1, personality:1, ugc:1, educator:1, creatorbiz:1};
    for (var i = SEAT_RULES.length - 1; i >= 0; i--){
      if (RETIRED[SEAT_RULES[i][1]]) SEAT_RULES.splice(i, 1);
    }
    SEAT_RULES.push(
      [['brand content creator','social content creator','social media content creator','dtc content creator','in-house content creator','inhouse content creator','staff content creator'],'brandcreator'],
      [['face of the brand','on-camera creator','on camera creator','host creator','video host','brand host'],'facecreator'],
      [['paid social creator','performance content creator','performance creator','direct response creator'],'perfcreator'],
      [['agency content creator','agency creator'],'agencycreator'],
      [['media content creator','editorial creator','content writer','content writing'],'mediacreator']
    );
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
/* Grid confidence for the reframed creator cluster is Medium
   (method-v11-v2.md §1: a one-day 40-posting snapshot; the frozen
   showGrid hard-codes High). Same wrapper pattern as GRID_CONF. */
(function(){
  function wrap(){
    if (typeof window.showGrid !== 'function' || window.__creatorConfWrap) return;
    window.__creatorConfWrap = true;
    var orig = window.showGrid;
    window.showGrid = function(prof){
      var r = orig.apply(null, arguments);
      try {
        if (prof === 'creator'){
          var span = document.querySelector('#gridHead .vconf');
          if (span) span.textContent = 'Confidence: Medium';
        }
      } catch(e){}
      return r;
    };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wrap);
  else wrap();
})();

/* ===== PLAIN-LANGUAGE OVERRIDES (Nov 1, 2026) =====
   Founder: the verdict explanations read "kak dlya tupykh" — full
   sentences, everyday words, digits unchanged. index.html is
   frozen at its upload cap, so the gate GRIDS/SEATS explanation
   texts for law/cpa/nurse/fin are replaced here at
   DOMContentLoaded (the data is read at interaction time). The
   dashboard twins live in tracks.js/tracks2.js GRIDINFO(_RU);
   minidata regenerates from these same values. ===== */
document.addEventListener('DOMContentLoaded', function(){
  if (typeof GRIDS === 'undefined' || typeof SEATS === 'undefined') return;
  GRIDS.law.head = "LAW IS A YES — IF YOU PICK A SPECIALTY. THE MOST COMMON WAY IN IS A NO.";
  GRIDS.law.corner = "Privacy and AI rules pay the most in our 46 job posts ($212K–$319K). Privacy job posts that want a certificate: 3 of 3 name CIPP. The trap: typical debt at a typical school is $112,500. A typical first salary is $100,000.";
  GRIDS.law.short = "AI already reads documents for law firms. But some law jobs still pay very well. “Law” is really several very different jobs. Some will stay needed: privacy and AI rules, checking companies before big deals, health-care rules. Job posts there pay up to $319K. The general paralegal job is a bad bet. So is law school with no clear goal.";
  SEATS.specialist.short = "Specialist paralegal jobs will stay needed. Privacy and AI-rules job posts paid $212K–$319K in our 46 job posts. The general job has 0% growth.";
  SEATS.paralegal.short = "The general paralegal job is a bad bet. That’s a lawyer’s helper for everything. Middle pay $62,890, growth 0%. Specialist jobs pay up to $150K–$200K. Privacy and AI-rules jobs pay up to $319K. That’s where to aim!";
  SEATS.docreview.short = "Reading documents all career long is a dead end. It’s the #1 law job AI already does. The good money moved to specialists who run that AI. You can become one of them.";
  SEATS.lawstudent.short = "Law school only pays off if you pick a top specialty on purpose. With no clear goal, a typical first salary is $100,000. Typical debt at a typical school is $112,500. Specialties picked on purpose pay $212K–$319K.";
  GRIDS.cpa.head = "ACCOUNTING IS A YES — IN A SPECIALTY. THE MOST COMMON JOBS ARE A NO.";
  GRIDS.cpa.corner = "Checking a company’s money before a sale (transaction advisory, FDD) pays up to $225K. That’s the top pay in our 54 job posts. The exam is hard: only 42% pass FAR, its hardest part. Pick your specialty first, then take the exam. Pay is high in 2026 because few people do this — re-check in 2028.";
  GRIDS.cpa.short = "AI already does routine bookkeeping and tax prep. “Accountant” is nine jobs. The general ones are a bad bet: bookkeeping, tax prep, audit as a final stop. Special ones stay needed and pay $120K–$225K. Those are narrow tax, SEC reporting for public companies, FDD (checking firms before a sale), forensic, controller.";
  SEATS.bookkeeper.short = "Keeping the books as your final job is a bad bet. The job shrinks −6%, while accountants grow +5%. AI takes the routine work. 29% of firms send it to cheaper countries. Ways out: staff accountant → controller ($130–200K + bonus). Or special tax work ($125–200K).";
  SEATS.tax.short = "Doing general tax returns is a bad bet. It’s the first accounting job AI is taking. Special tax work pays $125–200K. 8 of 10 manager job posts need a CPA license.";
  SEATS.staff.short = "The general staff job is a bad bet as your final stop. Pay stays flat at $50–80K. A CPA aimed at a specialty opens better jobs. Special tax work pays $125–200K. Transaction advisory, checking firms before a sale, pays up to $225K.";
  SEATS.audit.short = "General audit is a bad bet as your final stop. Top pay is $150K, and AI does the prep work. But it’s a great bridge. Transaction advisory checks companies before a sale. It pays up to $225K and loves audit experience.";
  SEATS.technical.short = "Technical accounting stays needed. That includes reporting for public companies (SEC reporting). Job posts pay $120–184K. 6 of 6 job posts need an active CPA. By law, only licensed CPAs can sign these reports.";
  SEATS.fdd.short = "Transaction advisory (FDD, checking firms before a sale) will stay needed. So will forensic work (finding fraud). FDD pays up to $225K, forensic $143–162K. They pay for audit experience and modeling, not the license.";
  SEATS.controller.short = "The controller job will stay needed at $130–200K + bonus. That’s when the controller runs the company’s money systems. NetSuite is in 10 of 10 senior job posts we read.";
  GRIDS.nurse.head = "NURSING IS A YES. THE MOST COMMON WAY IN IS A NO.";
  GRIDS.nurse.corner = "CRNA (nurse anesthetist) typical pay is $236,590. Psych NP jobs pay $200K–$257K. DNP schools cost $73K–$195K and are a trap. Top job posts asked for that degree 0 of 16 times.";
  GRIDS.nurse.short = "AI helps with paperwork, but patients still need a nurse. Nursing is many different jobs. These will stay needed: specialty RN, psych NP, CRNA, travel nurse. Dead ends: med-surg (the general ward) as a final stop, and starting as an LPN. General FNP work is a bad bet in big cities. Too many people already do it.";
  SEATS.medsurg.short = "A general ward job (med-surg) as a final stop is a dead end. Nurses quit there the most. Specialty jobs pay $50–$75/hr. They open the way to travel pay and CRNA money.";
  SEATS.specialty.short = "A specialty RN job will stay needed. ICU job posts pay $50–$75/hr. Two years in a specialty open travel pay and the CRNA path. CRNA typical pay is $236,590.";
  SEATS.travel.short = "Travel nursing is a good bet after two years in a specialty. Typical pay was $2,134 a week in Dec 2025. That pay is shrinking. 70.7% of hospitals plan to hire fewer agency nurses. So enjoy travel for a while, but don’t make it your final stop.";
  SEATS.nstudent.short = "Nursing will stay needed, but the most expensive way in is a bad bet. A short ADN program makes you an RN for $5,472 total. You take the same NCLEX exam. DNP programs cost $73K–$195K. 0 of 16 top job posts asked for one.";
  SEATS.np.short = "The NP path pays for a specialty, not for doing what everyone does. Psych NP job posts pay $200K–$257K. General FNP work is a bad bet in big cities. Also in states that limit what nurses may do. Too many people already do it there. It still works where nurses are scarce. And in states that let NPs work fully on their own. A $73K–$195K DNP degree is the other trap. 0 of 16 top job posts asked for a DNP.";
  SEATS.crna.short = "A CRNA has the top pay in nursing. Typical pay $236,590, job posts up to $400K base. Here the doctorate is the license itself. So it’s not a trap.";
  SEATS.lpn.short = "Starting as an LPN is a bad bet. Growth is only +3%. Only 16% of LPNs work in hospitals. Better idea: a short ADN program makes you an RN for $5,472 total.";
  GRIDS.fin.head = "“FINANCIAL ANALYST” IS FIVE JOBS. THREE ARE GROWING. ONE IS A TRAP. ONE IS HARD TO GET INTO.";
  GRIDS.fin.corner = "31 of 40 top-paying job posts ask for SQL. 0 of 40 ask for a CFA. Companies hire 3 seniors for every junior. So starting with a certificate is a detour.";
  GRIDS.fin.short = "AI now drafts finance reports. “Financial analyst” is five jobs. The general reporting job is a trap. Typical pay $103,570, and junior jobs are down 21%. FP&A partnering (planning money with a team), strategic finance and the analytics hybrid pay up to $276,250.";
  SEATS.reporting.short = "The general reporting job is a bad bet. Typical pay is $103,570. Junior job posts are down 21%. AI now writes first drafts of the reports. The money is in FP&A partnering and the analytics hybrid.";
  SEATS.fpa.short = "The FP&A partner job will stay needed. It pays up to $276,250. Only 5% of CFOs (top finance bosses) trust AI’s board report without a human check. So your job is to own the number, not just build it.";
  SEATS.strategic.short = "Strategic finance will stay needed. Google pays analysts $113K–$167K. It asks for SQL, not a CFA. 0 of 40 top-paying job posts asked for a CFA.";
  SEATS.hybrid.short = "The analytics hybrid is the fastest way into finance. It needs fewer years in finance first. Snowflake pays $138K–$180,600 for an “AI-first” analyst with 1–3 years. 0 of 40 top-paying job posts asked for a CFA.";
  SEATS.corpdev.short = "Corporate development is the team that buys other companies. It’s a good bet, but only early on. Pay goes to $184K. You get in through banking or consulting. After the first two years, the way in mostly closes.";
});
