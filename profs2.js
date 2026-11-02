/* ===== PathCheck — professions added Nov 1, 2026 (expansion wave 2).
   Loaded by v11.js via document.write (same split as /cst.js: v11.js
   sits at the ~98KB upload cap). Each profession registers in its own
   inject block, following the aicreator precedent: PROFS / COFACTS /
   SEATS / GRIDS / QUOTES / GV11 / V11 / PROF_STEPS are assigned into
   the gate globals; seat rules are unshifted ahead of the base rules;
   cluster rules are spliced at audited positions. Every number traces
   to the profession's pilot package — digits never change. ===== */

/* ================= HEALTHCARE ADMINISTRATOR =================
   Source: ~/workspace/pathcheck-healthadmin-pilot/ (43 live postings
   read 1 Nov 2026 + BLS). Cluster: HEALTHCARE ADMINISTRATOR IS A YES.
   THE PAPERWORK SEAT IS A NO. (High). Code word: VITALS (proposal).
   Matcher audit (package spec §2): no bare common words are claimed;
   the long-term-care phrases are seat rules so they fire BEFORE the
   nurse cluster's 'nursing' substring can see them ('nursing home
   administrator' names the building, not the profession — 8 of 8 of
   its postings ask the state NHA licence, 0 of 8 ask an RN licence);
   'nurse manager' / 'nurse administrator' deliberately stay with the
   nurse map (RN-gated clinical leadership). ===== */
(function(){
  var NEXT_HA = 'THE FULL REPORT — $5, OR FREE WHEN YOU SHARE: the four seats scored filter by filter — why the licence seat cannot be offshored, what the corporate buy-out of practices does to the practice seat, the fellowship calendar for 2026–2027, and the exact move out of the paperwork seat — own the automation that posts at $145,900–$170,200. We re-check these verdicts in October 2027, and sooner if the postings change faster than our forecasts say.';
  function inject(){
    if (typeof PROFS === 'undefined' || PROFS.healthadmin) return;
    PROFS.healthadmin = {title:'Your Path Check — Healthcare Administrator', kick:'Healthcare Administrator', count:'43', srcWhat:'real job postings read one by one', srcLine:'43 postings + BLS + the record-system vendor’s own page | read 1 Nov 2026', code:'VITALS', tail:'PATHCHECK — KNOW BEFORE YOU ENROLL'};
    COFACTS.healthadmin = [
      'The federal count: <b>$123,860</b> median pay, <b>+24.2%</b> growth, <b>+155,100</b> new manager jobs by 2035 (BLS). One line covers all four seats below.',
      'One seat has a wall no tool can climb: in <b>8 of 8</b> long-term care postings, a state licence is required — and the pay runs <b>$90,000–$150,000</b>.',
      'The paperwork seat is named by its own tools: <b>Epic</b>, the record system in <b>10</b> of the 43 postings, sells its back-office work as "automate back-office work."'];
    SEATS.hosops = {prof:'healthadmin', label:'Hospital / health-system operations',
      head:'Hospital operations — <span class="pink">YES</span>, high confidence.',
      facts:[
        ['The door is a fellowship','Health systems hire small groups of new administrators every year — fellowships. In our scan, 5 fellowship postings are open for 2026–2028 — and <span class="pink">5 of 5</span> ask for a master’s degree.'],
        ['The other door is any management year','One of the biggest clinic operators hires its facility administrators with <span class="pink">1 year</span> of management in any field. Its posting says healthcare experience is not required.'],
        ['The money is the job','Budget and financial duty is named across this seat’s postings. Hospitals pay a median of <span class="pink">$133,580</span> — the top of this occupation (BLS).']],
      door:'The degree or the management year gets you in. The budget work keeps you.',
      short:'Fellowships and facility seats. Budget work, no AI tool named.'};
    SEATS.clinicadmin = {prof:'healthadmin', label:'Practice / clinic administration',
      head:'Practice administration — <span class="pink">YES</span>, medium confidence.',
      facts:[
        ['The owners are changing','Hospitals and corporate buyers now employ <span class="pink">82%</span> of physicians. Corporate buyers acquired <span class="pink">8,000+</span> practices since 2024. Your employer is becoming a platform.'],
        ['The pay is set by the budget, not the title','The version that owns a practice’s money posts at <span class="pink">$120,000–$160,000</span>. The small-office version posts at <span class="pink">$50,000–$60,000</span>. Same title on the door.'],
        ['The certificate is the screen','Postings name experience first — 5 to 10 years — and the <span class="pink">CMPE</span> certificate in 4 of them. A master’s degree is named in only 3 of this seat’s 12 postings.']],
      door:'Show a budget you ran. Aim at groups and platforms, not one office.',
      short:'Run a practice’s money. CMPE named; owners are consolidating.'};
    SEATS.ltcadmin = {prof:'healthadmin', label:'Long-term care administration',
      head:'Long-term care administration — <span class="pink">YES</span>, high confidence.',
      facts:[
        ['The law is the wall','Every state requires a licence for nursing home administrators — the BLS says it in those words. In our scan, <span class="pink">8 of 8</span> postings require that licence.'],
        ['The licence pays','All 8 postings pay <span class="pink">$90,000–$150,000</span>. Not one starts under $90,000. The licence-holder answers for the building in person.'],
        ['Experience counts after the licence','Postings ask for <span class="pink">2–4 years</span> already spent as a licensed administrator. The training route and the exams come first — the seat waits behind one gate.']],
      door:'Get the licence first. Every other step in this seat waits behind it.',
      short:'The state licence is the job. $90K floor in 8 of 8 postings.'};
    SEATS.revcycle = {prof:'healthadmin', label:'Revenue cycle / payer operations',
      head:'Revenue cycle work — <span class="pink">NO</span> as your final stop, medium confidence.',
      facts:[
        ['Your own tools name your queue','Epic, the system in 10 of 43 postings, sells this work in its own words: <span class="pink">"Automate back-office work."</span> Claims, eligibility and follow-up are the named layer.'],
        ['The seat already splits in pay','The routine version posts at <span class="pink">$100,000–$120,000</span>. The version that owns the automation posts at <span class="pink">$145,900–$170,200</span> — in the same scan.'],
        ['The work is also sold offshore','The billing-outsourcing market is <span class="pink">$6.95 billion</span> in 2025 and headed to $17.69B. The biggest vendor routes work between AI agents and human experts.']],
      door:'Own the automation instead of feeding it. That version of this seat pays $145,900–$170,200.',
      short:'The queue is the target. Own the automation or leave the seat.'};
    GRIDS.healthadmin = {head:'One title. <span class="pink">Four different jobs.</span>',
      sub:'The federal count grows all four at +24.2% — as one average. Your seat decides which future you get.',
      corner:'The trap: a master’s degree aimed at the paperwork seat — up to $57,000 of tuition and 2 years, for the one seat being automated.',
      short:'Four seats: three YES, one NO as a final stop.',
      rows:[
        ['Hospital / health-system operations','YES','Fellowships open; budget work; hospitals pay a $133,580 median.','hosops'],
        ['Practice / clinic administration','YES','The owners are consolidating — the P&L version pays $120,000–$160,000.','clinicadmin'],
        ['Long-term care administration','YES','A state licence in 8 of 8 postings. Pay floor $90,000.','ltcadmin'],
        ['Revenue cycle / payer operations','NO','As a final stop. The tools name this queue; own the automation instead.','revcycle'],
        ['OTHER MAP','Nurse — a different profession','Nurses get hired into these seats — clinical years count here. The nursing home seat needs the state NHA licence, not the RN.','nurse']]};
    QUOTES.healthadmin = {q:'Universally, I believe the single greatest challenge we face in the acute care setting is the labor shortage on the frontlines.',
      by:'Greg Haralson, FACHE — healthcare administrator, in his ACHE Southeast Texas Chapter member spotlight',
      url:'https://ache-setc.org/blog/member-spotlight-greg-haralson-fache/'};
    GV11.healthadmin = {hook:'155,100 new manager jobs. The paperwork seat still dies.', next:NEXT_HA};
    PROF_STEPS.healthadmin = {
      student:'First step, as a student: pick your seat before you pick your school. The fellowship door wants a master’s degree — an MHA, MBA or MPH from an accredited programme. The practice and licence doors do not.',
      early:'First step, early in: name your seat in every application. A budget you helped run beats three years of "healthcare experience" with no numbers.',
      mid:'First step, at 3–5 years: collect the proof your seat pays for: a budget with your name on it, a staffing fix, one outside check passed. Then take the paper your seat names — FACHE, CMPE, or the state licence.',
      senior:'First step, at 5+ years: run more than one site, or own the automation across them. The top of this map is scope: bigger budgets, more buildings, one licence, no queue.'};
    V11.hosops = {hook:'Fellowships are open for 2026–2028. Five of five ask for a master’s.', conf:'High', next:NEXT_HA,
      step:{
        student:'First step, as a student: apply to administrative fellowships in your final master’s year — groups are small and the calendar is the plan. One system in our scan takes two fellows a year.',
        early:'First step, early in: take the facility door if a fellowship is not open: operators hire administrators on one year of management in any field.',
        mid:'First step, at 3–5 years: own a budget line and a staffing problem in a hospital or a system. That pair is the whole promotion case.',
        senior:'First step, at 5+ years: move from one facility to system scope — several sites, one budget logic, survey-ready everywhere.'}};
    V11.clinicadmin = {hook:'Corporate buyers acquired 8,000+ practices since 2024.', conf:'Medium', next:NEXT_HA,
      step:{
        student:'First step, as a student: learn how a practice makes money before you learn its software: scheduling, billing, collections. The seat screens for practice years, not degrees.',
        early:'First step, early in: run one practice’s daily money — patient flow, billing, the front desk — and write down the numbers you moved.',
        mid:'First step, at 3–5 years: earn the CMPE the postings name, and take a P&L: full revenue cycle, collections, payer work. That version posts at $120,000–$160,000.',
        senior:'First step, at 5+ years: run several sites for a group or a platform. The owners consolidated; the administrators who price well run portfolios.'}};
    V11.ltcadmin = {hook:'The licence is the job. The floor is $90,000.', conf:'High', next:NEXT_HA,
      step:{
        student:'First step, as a student: start with your state board: the Administrator-in-Training route and the exams. Nothing in this seat happens before the licence.',
        early:'First step, early in: work under a licensed administrator and learn the survey the way the state runs it. Your first two years are the licence’s apprenticeship.',
        mid:'First step, at 3–5 years: hold your own building: staffing, budget, families, and the state survey — answered for in person, by you.',
        senior:'First step, at 5+ years: run a building whose survey record and budget both hold. That record is what the $130,000–$150,000 postings are buying.'}};
    V11.revcycle = {hook:'Its own vendor sells this work as "automate back-office work."', conf:'Medium', next:NEXT_HA,
      coe:'Turning away now saves up to ≈$57,000 of master’s tuition (accredited online MHA totals run $26,505–$57,000) and about 2 years — aimed at the one seat its own tools are automating.',
      step:{
        student:'First step, as a student: do not buy a master’s degree for the routine version of this seat. Learn the money flow first — claims, denials, days in A/R — from inside one live queue.',
        early:'First step, early in: take the automation work your employer is already buying: the denials platform, the reporting, the tool roll-out. Be the person who runs it.',
        mid:'First step, at 3–5 years: own one automated flow end to end and show the numbers: denial rate down, days in A/R down. That is the $145,900–$170,200 posting’s job description.',
        senior:'First step, at 5+ years: lead revenue integrity or automation across sites. The queue you used to work is now the system you direct.'}};
    /* Seat rules FIRST (one batch, audited order: long-term care,
       hospital ops, practice, revenue cycle). Seat rules run before
       every cluster rule, so the LTC phrases beat the nurse cluster. */
    SEAT_RULES.unshift(
      [['nursing home administrator','licensed nursing home administrator','lnha','nha','long term care administrator','long-term care administrator','skilled nursing facility administrator','snf administrator','administrator in training','ait program'],'ltcadmin'],
      [['hospital administrator','hospital operations','health system operations','administrative fellow','administrative fellowship','facility administrator','healthcare operations manager','surgery center administrator','ambulatory surgery center administrator','asc administrator','director of operations healthcare'],'hosops'],
      [['practice administrator','clinic administrator','medical office manager','medical office administrator','practice manager','clinic manager','medical practice administrator','office manager medical'],'clinicadmin'],
      [['revenue cycle','revenue integrity','payer operations','payer enrollment','claims operations','denials','prior authorization','prior auth','medical billing manager','billing manager','patient access','health plan operations'],'revcycle']
    );
    /* Cluster rule: immediately BEFORE the nurse cluster rule, so
       healthcare strings resolve here while plain 'nurse' strings
       still fall through to the nurse map. */
    for (var i = 0; i < CLUSTER_RULES.length; i++){
      if (CLUSTER_RULES[i][1] === 'nurse'){
        CLUSTER_RULES.splice(i, 0, [['healthcare administrator','health administrator','healthcare administration','health administration','hospital administrator','hospital administration','medical administrator','healthcare manager','health services manager','medical and health services manager','healthcare management','medical office administrator','clinic administrator','practice administrator','nursing home administrator','long term care administrator','healthcare operations manager','revenue cycle manager','administrative fellow','healthcare fellowship','администратор больницы','администратор клиники','управляющий клиникой','администратор здравоохранения','медицинский администратор'],'healthadmin']);
        break;
      }
    }
    /* Cross-note, reverse direction: the nurse grid gains the door
       to this map (sibling-row pattern, guarded against doubles). */
    if (typeof GRIDS !== 'undefined' && GRIDS.nurse && GRIDS.nurse.rows && !GRIDS.nurse.rows.some(function(r){ return r[3] === 'healthadmin'; })){
      GRIDS.nurse.rows.push(['OTHER MAP','Healthcare Administrator — a different profession','One door out of the ward leads here: hospitals hire facility administrators from clinical ranks, and one big operator asks just 1 year of management. The budget becomes your patient.','healthadmin']);
    }
    /* The profession chip, next to the existing ones. */
    var rows = document.querySelectorAll('.chips');
    for (var c = 0; c < rows.length; c++){
      var b = document.createElement('button');
      b.className = 'chip';
      b.setAttribute('onclick', "pickChip('healthadmin')");
      b.textContent = 'Healthcare Administrator';
      rows[c].appendChild(b);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();

/* stateFact extension (EN) — wraps the stateFact declared in
   v11.js so v11.js itself stays untouched. Lookup happens at call
   time in both the gate and the app, so this wrap covers both. */
(function () {
  var _sf = stateFact;
  stateFact = function (prof, code, name) {
    if (!name) return '';
    if (prof === 'healthadmin') {
      return 'Your state: long-term care is the one seat the law gates by state — every state requires a licensed nursing home administrator (BLS), and the licence does not travel: a new state means a new licence. Hospitals and clinics ask for the degree and the budget, not a state paper.';
    }
    return _sf(prof, code, name);
  };
})();

/* ================= DATA SCIENTIST (expansion wave 2, 2026-11-01) =================
   Sibling of dataanalyst: cross-notes run both ways (spec §12).
   Matcher surgery, per the package's ordering note:
   - the dataanalyst inject's typed rule ['data scientist',
     'data science'] -> dsgate STOPS catching typed text (the
     dsgate seat stays reachable from the dataanalyst grid row);
   - this cluster's rule splices immediately BEFORE dataanalyst's;
   - seat rules unshift in package priority: ressci > mlds >
     prodds. Bare 'data scientist' has NO seat rule on purpose:
     typed text lands on the cluster grid (coreds is the grid's
     default seat for seat-level routing). */
(function () {
  function dsInit() {
  if (typeof PROFS === 'undefined' || PROFS.datascientist) return;
  var NEXT_DS = 'THE FULL REPORT — $5, OR FREE WHEN YOU SHARE: the four seats scored filter by filter — the degree screen priced seat by seat, the experiment proof the product seat screens for, and the exact bridge in from data analyst. We re-check these verdicts by June 2027 — or sooner if a quarterly scan shows the junior door widening or the AI-work line stalling.';

  PROFS.datascientist = {title:'Your Path Check — Data Scientist', kick:'Data Scientist', count:42, code:'VECTOR', tail:'PATHCHECK — KNOW BEFORE YOU PAY FOR THE MASTER’S', next:NEXT_DS};
  COFACTS.datascientist = [
    '<b>Python in 31 of 42</b> data scientist postings we opened — it is the floor of this job.',
    '<b>A master’s or PhD in 16 of 42</b> postings — required or preferred. The degree is a real screen here.',
    '<b>5 of 42 postings</b> take beginners — and 4 of those 5 still ask for a master’s.'];

  SEATS.prodds = {prof:'datascientist', label:'Product data scientist',
    head:'PRODUCT DATA SCIENTIST — <span class="pink">YES</span>.',
    facts:[
      ['Posted pay','Anthropic <span class="pink">$285K–$380K</span> · a fintech product seat <span class="pink">$250K–$300K</span>'],
      ['The screen','Experimentation or causal inference in <span class="pink">10 of 12</span> product postings — trying version A against version B, and proving what caused what'],
      ['The work','You design the test and call what ships — <span class="pink">decisions</span>, not reports']],
    door:'What to do: you are in a YES seat if you can design a test and defend the call — deepen experiments and causal work. The Full Report sequences statistics → experiments → a metrics portfolio.',
    short:'Product data scientist is a good choice. Jobs post $250K–$380,000, and 10 of 12 product jobs in our check asked for experimentation, trying version A against version B. The work is calling what gets built, not filing reports.',
    next:NEXT_DS};
  SEATS.coreds = {prof:'datascientist', label:'Generalist / core data scientist',
    head:'GENERALIST DATA SCIENTIST — <span class="pink">YES</span>. PICK IT ON PURPOSE, NOT BY DEFAULT.',
    facts:[
      ['The floor','<span class="pink">Python in 31 of 42</span> postings · SQL in <span class="pink">23 of 42</span> — plus statistics, in every seat'],
      ['The beginner door, priced','Databricks posts its new-grad seat at <span class="pink">$140K–$150K</span> — and asks a <span class="pink">master’s or PhD</span> for it'],
      ['The spread','This seat posts from <span class="pink">$65,064</span> (entry, a national laboratory) to <span class="pink">$250,000</span> (senior)']],
    door:'What to do: you are in a YES seat if your proof is a shipped model, not a wall of certificates — the Full Report sequences the proof in the order postings screen for it.',
    short:'Generalist data scientist is a good choice, and the seat everyone queues for. Python is named in 31 of 42 postings. Even the new-grad job at $140K–$150K asks for a master’s or a PhD.',
    next:NEXT_DS};
  SEATS.mlds = {prof:'datascientist', label:'ML-focused data scientist',
    head:'ML-FOCUSED DATA SCIENTIST — <span class="pink">YES</span>. THE AI SEAT.',
    facts:[
      ['The screen','Work with large language models (the AI behind chatbots) or Generative AI in <span class="pink">17 of 42</span> postings — and <span class="pink">6 of 7</span> in this seat'],
      ['Posted pay','Quince <span class="pink">$171K–$285K</span> · Xometry principal <span class="pink">$164K–$213K</span>'],
      ['The catch','Two of the seven postings in this seat ask <span class="pink">7 to 10+ years</span> — the junior version is mostly grown inside companies, not posted']],
    door:'What to do: you are in a YES seat if you have shipped one AI project and can show how you checked its output — the Full Report sequences it.',
    short:'ML-focused data scientist is a good choice. This job builds with AI itself — tuning large language models and judging their output. AI work is named in 17 of 42 postings, and pay posts to $285,000.',
    next:NEXT_DS};
  SEATS.ressci = {prof:'datascientist', label:'Research scientist',
    head:'RESEARCH SCIENTIST — <span class="pink">NO</span> AS A PLAN. YES IF YOU ALREADY HOLD THE PAPERS.',
    facts:[
      ['The size','<span class="pink">5 of 42</span> postings in our scan are research seats'],
      ['The screen','All five ask a <span class="pink">PhD</span> and <span class="pink">published research</span> at named conferences'],
      ['The pay, honestly','Datadog posts its staff research scientist at <span class="pink">$320K–$400K</span> — real money, behind the longest screen in the scan']],
    door:'What to do instead: keep the research ambition, change the order — take the product or ML seat first, publish from inside it if the work allows, and let a research team recruit you.',
    short:'Research scientist pays the most here, $320K–$400K at staff level. It is also 5 of 42 postings, and all five ask for a PhD and published papers. As a plan you start today, it is a bad bet.',
    next:NEXT_DS};

  GRIDS.datascientist = {head:'DATA SCIENTIST IS A YES. THE EASY WAY IN IS A NO.',
    sub:'The words “data scientist” cover four different jobs. They do not share a verdict:',
    corner:'Anthropic offers two data scientist jobs at $285,000–$380,000. The trap is at the other end: of 42 real postings we opened, 5 take beginners — and 4 of those 5 still ask for a master’s degree.',
    short:'“Data scientist” is four different jobs. Product, generalist and AI-focused data science are good choices, posting $130K–$380,000. Research science is 5 of 42 postings behind a PhD. Data analyst is a different profession — it has its own check. Its screen is tools: SQL in 24 of 24 of its postings. This profession’s screen is degrees, years, and models. The bridge between the two is statistics, Python, and one shipped model — a bridge, not a promotion. The two professions share one trap: the reporting version of either job is paid to produce an artifact on request — and that is the artifact AI drafts. They share a floor (SQL and Python) and nothing else: not the screen, not the pay, not the door.',
    rows:[
      ['Product data scientist','YES','postings to $380,000 · experiments, not reports','prodds'],
      ['Generalist / core data scientist','YES','Python in 31 of 42 postings · new-grad pay $140K–$150K','coreds'],
      ['ML-focused data scientist','YES','AI work in 17 of 42 postings · pay to $285,000','mlds'],
      ['Research scientist','NO · AS A PLAN','5 of 42 postings · all five ask for a PhD','ressci'],
      ['OTHER MAP','Data Analyst — a different profession','SQL & dashboards · its own check (CHARTS) · the bridge here is statistics + one shipped model','dataanalyst']]};

  QUOTES.datascientist = {q:'Try to find an approach to solving problems with the skills you have. It’s not wrong to ask questions in a technical interview — just because you don’t know something doesn’t mean you aren’t capable of fulfilling a job.',
    by:'Christopher Wilson, data scientist at Adswerve (Built In interview, Dec 2021 — the interview claim only; every market fact on this card is from the 2026 scan)',
    url:'https://builtin.com/articles/preparing-for-first-data-science-interview'};

  GV11.datascientist = {hook:'Data scientist posts $380K. Entry asks a master’s.', conf:'High', next:'We re-check these verdicts by June 2027 — or sooner if a quarterly scan shows the junior door widening or the AI-work line stalling.'};
  PROF_STEPS.datascientist = {
    student:'First step, as a student: pick your seat before your degree plan hardens — a master’s is required or preferred in 16 of 42 postings, so check your seat’s postings before you pay for one.',
    early:'First step, early in: ship one model end to end and write it up — only 5 of 42 postings take beginners, and they screen on proof, not course lists.',
    mid:'First step, at 3–5 years: own one experiment or one shipped AI project — those are the two proofs the $250K+ postings screen for.',
    senior:'First step, at 5+ years: price the decision record and the shipped models, not the years — product seats post $285K–$380K for people whose calls changed what got built.'};

  V11.prodds = {hook:'Anthropic posts this seat at $285K–$380K. Experiments are the screen.', conf:'High', next:NEXT_DS, step:{
    student:'First step, as a student: learn statistics like it is the job — the product seat screens on experiments, named in 10 of 12 of its postings.',
    early:'First step, early in: run one A/B test end to end, even a small one — design, read, call. That is the product seat’s interview, done early.',
    mid:'First step, at 3–5 years: own the metric and the call — product postings pay for recommendations that changed what got built.',
    senior:'First step, at 5+ years: price the calls, not the analyses — Anthropic posts $285K–$380K for this seat’s judgment.'}};
  V11.coreds = {hook:'Python in 31 of 42 postings. Even the new-grad seat asks a master’s.', conf:'Medium', next:NEXT_DS, step:{
    student:'First step, as a student: Python and SQL first, degree plan second — Python is named in 31 of 42 postings.',
    early:'First step, early in: ship one model on messy real data and write up the choices — that write-up is your way past the master’s queue.',
    mid:'First step, at 3–5 years: specialize toward a seat — product or ML — the generalist band widens downward ($65,064 entry exists) if you stay general.',
    senior:'First step, at 5+ years: price the shipped models and the domain — senior core seats post to $250,000 for exactly that.'}};
  V11.mlds = {hook:'AI work in 17 of 42 postings — and 6 of 7 in this seat.', conf:'Medium', next:NEXT_DS, step:{
    student:'First step, as a student: build one thing with a large language model and write down how you checked its output — the check is the skill this seat screens for.',
    early:'First step, early in: ship one AI project in production, however small — 6 of 7 postings in this seat name AI work; a demo is not the same proof.',
    mid:'First step, at 3–5 years: own evaluation — how the team knows the AI output is good. That is the senior version of this seat.',
    senior:'First step, at 5+ years: price the AI systems you shipped and judged — this seat posts to $285,000.'}};
  V11.ressci = {hook:'Five of 42 postings. All five ask a PhD and published papers.', conf:'Medium', next:NEXT_DS, coe:'Aiming here from zero costs ≈$560K of pay not earned (4 years at the $140K new-grad floor this scan posts) plus 4–6 years of graduate school — chasing 5 of 42 postings. The seat is a YES only for people who already hold the papers.', step:{
    student:'First step, as a student: if the PhD is truly your plan, pick the lab and the topic by the papers you want to write — all 5 research postings ask for publications.',
    early:'First step, early in: publish from where you are — a workshop paper or a public portfolio beats a silent extra degree year.',
    mid:'First step, at 3–5 years: if you hold the papers, apply — the seat is a YES for you. If you do not, the product and ML seats pay $250K–$380K without them.',
    senior:'First step, at 5+ years: price the publication record — staff research posts $320K–$400K for it.'}};

  SEAT_RULES.unshift(
    [['research scientist','applied scientist','research data scientist'],'ressci'],
    [['machine learning data scientist','ml data scientist','ai data scientist','genai data scientist','gen ai data scientist','nlp data scientist','llm data scientist','data scientist machine learning','deep learning data scientist'],'mlds'],
    [['product data scientist','data scientist product','growth data scientist','data scientist growth','experimentation data scientist','product analytics data scientist'],'prodds']
  );
  /* --- matcher surgery + cross-notes: DEFERRED. The dataanalyst
     inject inside v11.js runs on DOMContentLoaded (it appends the
     dsgate typed rule, GRIDS.dataanalyst and SEATS.dsgate there).
     This handler is registered after v11's, so it runs after that
     inject and can remove / splice / mutate what it created. --- */
  function dsSurgery() {
    if (typeof SEAT_RULES === 'undefined' || typeof CLUSTER_RULES === 'undefined') return;
    for (var i = SEAT_RULES.length - 1; i >= 0; i--) {
      if (SEAT_RULES[i][1] === 'dsgate') SEAT_RULES.splice(i, 1);
    }
    /* Splice BEFORE fin (the head of the analyst family): fin's
       bare 'financial' keyword would otherwise swallow 'financial
       data scientist', which the package rules is a data-scientist
       posting family. DS keywords never match 'data analyst' /
       'business analyst' / 'financial analyst', so those still
       fall through to their own clusters. */
    for (var j = 0; j < CLUSTER_RULES.length; j++) {
      if (CLUSTER_RULES[j][1] === 'fin') {
        CLUSTER_RULES.splice(j, 0, [['data scientist','data science','datascientist','data scientists'],'datascientist']);
        break;
      }
    }
    if (GRIDS.dataanalyst && !GRIDS.dataanalyst.rows.some(function (r) { return r[3] === 'datascientist'; })) {
      GRIDS.dataanalyst.rows.push(['OTHER MAP','Data Scientist — a different profession','models & experiments · BLS median $120,230 · +34.6% growth · it has its own check (VECTOR)','datascientist']);
      GRIDS.dataanalyst.short += ' Data scientist now has its own full check (VECTOR): 42 postings, four seats, and a degree screen this map does not have — a master’s or PhD is required or preferred in 16 of its 42 postings. The dsgate seat above is the door; the full map is on the other side of it. The two professions share one trap: the reporting version of either job is paid to produce an artifact on request — and that is the artifact AI drafts. They share a floor (SQL and Python) and nothing else: not the screen, not the pay, not the door.';
    }
    if (SEATS.dsgate) {
      SEATS.dsgate.door = 'What to do: the full check of this job now exists — text VECTOR. Short version: statistics, Python, and one model you shipped; a master’s is a real screen there (16 of 42 postings), not a rumor.';
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', dsSurgery);
  else dsSurgery();
  var rows2 = document.querySelectorAll('.chips');
  for (var c = 0; c < rows2.length; c++) {
    var b = document.createElement('button');
    b.className = 'chip';
    b.setAttribute('onclick', "pickChip('datascientist')");
    b.textContent = 'Data Scientist';
    rows2[c].appendChild(b);
  }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', dsInit);
  else dsInit();
})();

/* stateFact extension (EN) — datascientist branch, same wrap. */
(function () {
  var _sf2 = stateFact;
  stateFact = function (prof, code, name) {
    if (prof === 'datascientist') {
      if (!name) return '';
      return 'Your state: no license decides what a data scientist earns in ' + name + ' — there is no license for this work at all. What moves this pay is the seat and the degree screen: the same title posts $65,064 at a national laboratory and $285K–$380K at Anthropic.';
    }
    return _sf2(prof, code, name);
  };
})();
