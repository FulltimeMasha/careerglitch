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
  var NEXT_HA = 'THE FULL REPORT — $5, OR FREE WHEN YOU SHARE: your shortest route through all four jobs, step by step. Why the licence job can\'t be sent to cheaper countries. What big companies buying clinics means for you. The fellowship dates for 2026–2027. And how to leave the paperwork job: run the automation instead. That pays $145,900–$170,200. We re-check this in October 2027. Sooner if job posts change faster than we expect.';
  function inject(){
    if (typeof PROFS === 'undefined' || PROFS.healthadmin) return;
    PROFS.healthadmin = {title:'Your Path Check — Healthcare Administrator', kick:'Healthcare Administrator', count:'43', srcWhat:'real job posts, read one by one', srcLine:'43 job posts + BLS (government job numbers) + the records software company’s own page | read 1 Nov 2026', code:'VITALS', tail:'PATHCHECK — KNOW BEFORE YOU ENROLL'};
    COFACTS.healthadmin = [
      'Government numbers: <b>$123,860</b> middle pay, <b>+24.2%</b> growth, <b>+155,100</b> new manager jobs by 2035 (BLS). But that number mixes four jobs. Pick the right one and you skip wasted years.',
      'AI can\'t take one of these jobs: the law needs a person. In <b>8 of 8</b> long-term care job posts, you need a state licence. It pays <b>$90,000–$150,000</b>.',
      'AI is taking the paperwork job. Even its own software says so. <b>Epic</b> (patient records software, in <b>10</b> of the 43 job posts) sells itself with "automate back-office work."'];
    SEATS.hosops = {prof:'healthadmin', label:'Hospital / health-system operations',
      head:'Hospital operations — <span class="pink">YES</span>, we\'re very sure.',
      facts:[
        ['The fast way in: a fellowship','A fellowship is a paid training job for new managers. Hospitals take small groups each year. We found 5 open for 2026–2028. <span class="pink">5 of 5</span> ask for a master’s degree.'],
        ['The shortcut: one year managing anything','One of the biggest clinic companies hires managers with just <span class="pink">1 year</span> of managing, in any field. No healthcare experience needed. That can save you years.'],
        ['Money skills take you to the top','These job posts all talk about budgets. Hospitals pay a middle of <span class="pink">$133,580</span>. That\'s the top pay for this job (BLS).']],
      door:'Your shortcut: a degree or one year of managing gets you in. Running the budget gets you to the top.',
      short:'Fellowships and manager jobs. Budget skills pay. AI isn\'t aimed here.'};
    SEATS.clinicadmin = {prof:'healthadmin', label:'Practice / clinic administration',
      head:'Practice administration — <span class="pink">YES</span>, we\'re fairly sure.',
      facts:[
        ['Your future boss is changing','Hospitals and big companies now employ <span class="pink">82%</span> of doctors. Big companies bought <span class="pink">8,000+</span> clinics since 2024. Aim for these big groups: they pay more.'],
        ['Run the money, earn more','If you run a clinic\'s money, it pays <span class="pink">$120,000–$160,000</span>. A small-office version pays <span class="pink">$50,000–$60,000</span>. Same title, very different pay.'],
        ['The certificate that helps','Job posts want experience first: 5 to 10 years. 4 of them name the <span class="pink">CMPE</span> certificate (for clinic managers). Only 3 of 12 ask for a master’s degree, so you can skip it.']],
      door:'Show a budget you ran. Aim at big clinic groups, not one small office. That\'s where top pay is.',
      short:'Run a clinic\'s money. CMPE helps. Big groups pay most.'};
    SEATS.ltcadmin = {prof:'healthadmin', label:'Long-term care administration',
      head:'Long-term care administration — <span class="pink">YES</span>, we\'re very sure.',
      facts:[
        ['The law needs a person here','Every state requires a licence to run a nursing home. The BLS says so. In our check, <span class="pink">8 of 8</span> job posts require it. No AI can hold it.'],
        ['The licence pays','All 8 job posts pay <span class="pink">$90,000–$150,000</span>. Not one starts under $90,000. You are personally responsible for the building.'],
        ['Licence first, then experience','Job posts ask for <span class="pink">2–4 years</span> as a licensed manager. Training and exams come first. Get the licence and everything else opens.']],
      door:'Get the licence first. It\'s your shortest road. Every other step waits for it.',
      short:'The state licence is the job. At least $90K in 8 of 8 job posts.'};
    SEATS.revcycle = {prof:'healthadmin', label:'Revenue cycle / payer operations',
      head:'Billing and insurance claims work — <span class="pink">NO</span> as your final stop. We\'re fairly sure.',
      facts:[
        ['AI is taking over this work','Epic, in 10 of 43 job posts, sells this in its own words: <span class="pink">"Automate back-office work."</span> Claims, insurance checks and follow-ups are exactly what it automates.'],
        ['Run the AI, earn more','The routine version pays <span class="pink">$100,000–$120,000</span>. The version that runs the automation pays <span class="pink">$145,900–$170,200</span>. That\'s where to aim.'],
        ['Cheaper countries take it too','Outsourced billing is a <span class="pink">$6.95 billion</span> business in 2025, heading to $17.69B. The biggest company splits work between AI and human experts.']],
      door:'Run the automation, don\'t just feed it. That version of this job pays $145,900–$170,200.',
      short:'AI is taking this work. Run the automation, or move on.'};
    GRIDS.healthadmin = {head:'One title. <span class="pink">Four different jobs.</span>',
      sub:'AI already does part of the paperwork in healthcare offices. Worried your study years go to waste? All four jobs grow +24.2% on average. Here\'s what stays with people and pays well:',
      corner:'The trap: a master’s degree for the paperwork job. Up to $57,000 and 2 years, for the one job AI is taking. Skip it and save both.',
      short:'Four jobs: three YES, one NO as a final stop.',
      rows:[
        ['Hospital / health-system operations','YES','Fellowships open. Budget skills. Hospitals pay a $133,580 middle.','hosops'],
        ['Practice / clinic administration','YES','Big groups are buying clinics. Running the money pays $120,000–$160,000.','clinicadmin'],
        ['Long-term care administration','YES','A state licence in 8 of 8 job posts. AI can\'t hold one. $90,000+.','ltcadmin'],
        ['Revenue cycle / payer operations','NO','As a final stop. AI is taking this work. Run the automation instead.','revcycle'],
        ['OTHER MAP','Nurse — a different profession','Nurses get hired into these jobs. Your clinic years count, so your path is shorter. The nursing home job needs the state NHA licence (to run a nursing home), not the RN.','nurse']]};
    QUOTES.healthadmin = {q:'Universally, I believe the single greatest challenge we face in the acute care setting is the labor shortage on the frontlines.',
      by:'Greg Haralson, FACHE — healthcare administrator, in his ACHE Southeast Texas Chapter member spotlight',
      url:'https://ache-setc.org/blog/member-spotlight-greg-haralson-fache/'};
    GV11.healthadmin = {hook:'155,100 new manager jobs. AI takes only the paperwork one.', next:NEXT_HA};
    PROF_STEPS.healthadmin = {
      student:'First step, as a student: pick your job before your school. Fellowships want a master’s: an MHA, MBA or MPH from an approved school. Clinic and licence jobs don\'t, so you may save years.',
      early:'First step, early in: say which job you want in every application. A budget you helped run beats years of vague "healthcare experience."',
      mid:'First step, at 3–5 years: collect proof. A budget with your name on it. A staffing problem you fixed. One inspection passed. Then get your job\'s paper: FACHE, CMPE, or the state licence.',
      senior:'First step, at 5+ years: run more than one site, or run the automation for all of them. The top here means bigger budgets and more buildings. You\'ve got this.'};
    V11.hosops = {hook:'Fellowships are open for 2026–2028. All five ask for a master’s.', conf:'High', next:NEXT_HA,
      step:{
        student:'First step, as a student: apply to fellowships in your last master’s year. Groups are small, so watch the dates. One hospital group we found takes two people a year.',
        early:'First step, early in: no fellowship open? Take a manager job. Some companies hire after one year of managing anything.',
        mid:'First step, at 3–5 years: own part of a hospital budget and fix one staffing problem. Those two things get you promoted.',
        senior:'First step, at 5+ years: move from one building to many. Several sites, one budget plan, ready for inspection everywhere.'}};
    V11.clinicadmin = {hook:'Big companies bought 8,000+ clinics since 2024. They pay more.', conf:'Medium', next:NEXT_HA,
      step:{
        student:'First step, as a student: learn how a clinic makes money before its software. Scheduling, billing, collecting payments. Ask ChatGPT or Claude to explain each one. They check clinic years, not degrees.',
        early:'First step, early in: run one clinic\'s daily money: patients, billing, the front desk. Write down the numbers you improved.',
        mid:'First step, at 3–5 years: get the CMPE and take full charge of a clinic\'s money: billing, collections, insurance. That pays $120,000–$160,000.',
        senior:'First step, at 5+ years: run several clinics for a big group. The owners got bigger. Managers who earn the most run many sites.'}};
    V11.ltcadmin = {hook:'The licence is the job. You start at $90,000 or more.', conf:'High', next:NEXT_HA,
      step:{
        student:'First step, as a student: start with your state board. Learn the Administrator-in-Training path and the exams. AI can quiz you for the exams for free. Nothing here happens before the licence.',
        early:'First step, early in: work under a licensed manager. Learn how state inspections work. Your first two years are your training.',
        mid:'First step, at 3–5 years: run your own building: staff, budget, families, and state inspection. You answer for it yourself.',
        senior:'First step, at 5+ years: run a building with good inspections and a solid budget. That record is what $130,000–$150,000 jobs pay for.'}};
    V11.revcycle = {hook:'AI is taking this. Its own software says "automate back-office work."', conf:'Medium', next:NEXT_HA,
      coe:'Skipping this now saves up to ≈$57,000 on a master’s (approved online MHA programs cost $26,505–$57,000) and about 2 years. All for the one job its own software is automating.',
      step:{
        student:'First step, as a student: don\'t pay for a master’s for the routine version of this job. First learn how money moves: claims, denials, unpaid bills. Learn it on a real team.',
        early:'First step, early in: grab the AI tools your boss is already buying. The denials tool, the reports, the new software. Be the person who runs them. That\'s your way to the top pay.',
        mid:'First step, at 3–5 years: run one automated process start to finish. Show the numbers: fewer denials, faster payments. That\'s the $145,900–$170,200 job.',
        senior:'First step, at 5+ years: lead billing quality or automation for many sites. The work you used to do is now the system you run.'}};
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
      GRIDS.nurse.rows.push(['OTHER MAP','Healthcare Administrator — a different profession','One way out of the ward leads here, and your clinic years count. Hospitals hire managers from clinical staff. One big company asks for just 1 year of managing. The budget becomes your patient.','healthadmin']);
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
      return 'Your state: long-term care is the one job where the state licence matters. Every state requires a licensed nursing home manager (BLS). The licence doesn\'t move with you: new state, new licence. Hospitals and clinics want a degree and budget skills, not a state paper.';
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
  var NEXT_DS = 'THE FULL REPORT — $5, OR FREE WHEN YOU SHARE: your shortest path through all four jobs, step by step. Which jobs need which degree, and what it costs you. What test proof the product job wants. And the fastest way in from data analyst. We re-check this by June 2027. Sooner if more beginner jobs open or AI work slows down.';

  PROFS.datascientist = {title:'Your Path Check — Data Scientist', kick:'Data Scientist', count:42, code:'VECTOR', tail:'PATHCHECK — KNOW BEFORE YOU PAY FOR THE MASTER’S', next:NEXT_DS};
  COFACTS.datascientist = [
    '<b>Python in 31 of 42</b> data scientist job posts we opened. Learn it first. Without it, nothing else counts.',
    '<b>A master’s or PhD in 16 of 42</b> job posts, needed or preferred. Check your job type before you pay for one.',
    'Only <b>5 of 42 job posts</b> take beginners. And 4 of those 5 still want a master’s. Proof of real work is your shortcut.'];

  SEATS.prodds = {prof:'datascientist', label:'Product data scientist',
    head:'PRODUCT DATA SCIENTIST — <span class="pink">YES</span>.',
    facts:[
      ['The pay','Anthropic <span class="pink">$285K–$380K</span> · a fintech product job <span class="pink">$250K–$300K</span>'],
      ['What they check','Experiments in <span class="pink">10 of 12</span> product job posts. You test version A against version B and prove what really worked'],
      ['The work','You design the test and decide what launches. <span class="pink">Decisions</span>, not reports. AI can\'t make that call']],
    door:'What to do: this is a YES job for you if you can design a test and explain your call. That\'s your shortcut. The Full Report shows the steps: statistics → experiments → a set of results to show.',
    short:'Product data scientist is a good choice. It pays $250K–$380,000. 10 of 12 product jobs asked for experiments (testing version A against version B). You decide what gets built. AI can write reports, but not make that call.',
    next:NEXT_DS};
  SEATS.coreds = {prof:'datascientist', label:'Generalist / core data scientist',
    head:'GENERALIST DATA SCIENTIST — <span class="pink">YES</span>. BUT PICK IT ON PURPOSE.',
    facts:[
      ['The must-have','<span class="pink">Python in 31 of 42</span> job posts · SQL in <span class="pink">23 of 42</span>. Plus statistics, in every job'],
      ['The beginner way in, and its price','Databricks pays <span class="pink">$140K–$150K</span> for new grads. But it asks for a <span class="pink">master’s or PhD</span>'],
      ['The pay range','This job pays from <span class="pink">$65,064</span> (beginner, at a national lab) to <span class="pink">$250,000</span> (senior)']],
    door:'What to do: this is a YES job for you if you can show a model you built and shipped. Skip the pile of certificates. The Full Report shows the proof in the order jobs check it.',
    short:'Generalist data scientist is a good choice, but the crowd is big. Python is in 31 of 42 job posts. Even the new-grad job at $140K–$150K wants a master’s or PhD.',
    next:NEXT_DS};
  SEATS.mlds = {prof:'datascientist', label:'ML-focused data scientist',
    head:'ML-FOCUSED DATA SCIENTIST — <span class="pink">YES</span>. THE AI JOB.',
    facts:[
      ['What they check','Work with AI chatbot brains (large language models) in <span class="pink">17 of 42</span> job posts. And <span class="pink">6 of 7</span> in this job'],
      ['The pay','Quince <span class="pink">$171K–$285K</span> · Xometry principal <span class="pink">$164K–$213K</span>'],
      ['The catch','Two of the seven job posts here ask for <span class="pink">7 to 10+ years</span>. Most people grow into it inside a company']],
    door:'What to do: this is a YES job for you if you shipped one AI project and can show how you checked its answers. That one project beats a year of courses. The Full Report shows the steps.',
    short:'ML-focused data scientist is a good choice. This is the AI job: you build with AI and check its answers. AI work is in 17 of 42 job posts. Pay goes up to $285,000.',
    next:NEXT_DS};
  SEATS.ressci = {prof:'datascientist', label:'Research scientist',
    head:'RESEARCH SCIENTIST — <span class="pink">NO</span> AS A PLAN. YES IF YOU ALREADY HAVE A PhD AND PAPERS.',
    facts:[
      ['How many jobs','<span class="pink">5 of 42</span> job posts we found are research jobs'],
      ['What they check','All five ask for a <span class="pink">PhD</span> and <span class="pink">published research</span> at big-name conferences'],
      ['The pay, honestly','Datadog pays its staff research scientist <span class="pink">$320K–$400K</span>. Real money, but the hardest job to get here']],
    door:'What to do instead: keep the research dream, just change the order. Take the product or ML job first and get paid while you grow. Publish from there. Let a research team find you.',
    short:'Research scientist pays the most here: $320K–$400K at staff level. But it\'s only 5 of 42 job posts. All five want a PhD and published papers. Starting from zero, it\'s the longest road.',
    next:NEXT_DS};

  GRIDS.datascientist = {head:'DATA SCIENTIST IS A YES. THE EASY WAY IN IS A NO.',
    sub:'AI already writes the simple reports data people used to make. Worried your study was for nothing? “Data scientist” is four different jobs. Here\'s what stays with people and pays well:',
    corner:'Anthropic pays $285,000–$380,000 for two data scientist jobs. That\'s the top. The catch: of 42 real job posts, only 5 take beginners. And 4 of those 5 still want a master’s degree.',
    short:'“Data scientist” is four different jobs. Product, generalist and AI-focused are good choices. They pay $130K–$380,000. Research is 5 of 42 job posts, and needs a PhD. Data analyst is a different job with its own check. It checks tools: SQL in 24 of 24 of its job posts. This job checks degrees, years and models. Your shortest way over from analyst: statistics, Python, and one model you shipped. It\'s a new job, not a promotion. Both jobs share one trap: the report-making version. AI can write those reports now. They share SQL and Python, and nothing else. Not what they check, not the pay, not the way in.',
    rows:[
      ['Product data scientist','YES','pays up to $380,000 · you make decisions, not reports','prodds'],
      ['Generalist / core data scientist','YES','Python in 31 of 42 job posts · new-grad pay $140K–$150K','coreds'],
      ['ML-focused data scientist','YES','the AI job · in 17 of 42 job posts · up to $285,000','mlds'],
      ['Research scientist','NO · AS A PLAN','5 of 42 job posts · all five ask for a PhD','ressci'],
      ['OTHER MAP','Data Analyst — a different profession','SQL & dashboards · its own check (CHARTS) · the way over: statistics + one model you shipped','dataanalyst']]};

  QUOTES.datascientist = {q:'Try to find an approach to solving problems with the skills you have. It’s not wrong to ask questions in a technical interview — just because you don’t know something doesn’t mean you aren’t capable of fulfilling a job.',
    by:'Christopher Wilson, data scientist at Adswerve (Built In interview, Dec 2021 — about interviews only; all job market facts here are from the 2026 check)',
    url:'https://builtin.com/articles/preparing-for-first-data-science-interview'};

  GV11.datascientist = {hook:'Data scientist pays $380K. Here\'s the shortest way in.', conf:'High', next:'We re-check this by June 2027. Sooner if more beginner jobs open or AI work slows down.'};
  PROF_STEPS.datascientist = {
    student:'First step, as a student: pick your job before you lock in a degree. 16 of 42 job posts want a master’s. Check your job\'s posts before you pay for one.',
    early:'First step, early in: build one model start to finish and write about it. Only 5 of 42 job posts take beginners. Proof beats a list of courses.',
    mid:'First step, at 3–5 years: own one experiment or one AI project you shipped. Those are the two things $250K+ jobs look for.',
    senior:'First step, at 5+ years: show your decisions and shipped models, not your years. Product jobs pay $285K–$380K to people whose calls changed what got built.'};

  V11.prodds = {hook:'Anthropic pays $285K–$380K for this. Experiments get you there.', conf:'High', next:NEXT_DS, step:{
    student:'First step, as a student: learn statistics like it\'s the job. With AI as a free tutor, it takes weeks, not years. 10 of 12 product job posts ask for experiments.',
    early:'First step, early in: run one test of version A against version B, even a small one. Plan it, read it, decide. That\'s the job interview, done early.',
    mid:'First step, at 3–5 years: own the number and the decision. Product jobs pay for advice that changed what got built.',
    senior:'First step, at 5+ years: show your decisions, not your reports. Anthropic pays $285K–$380K for this kind of judgment.'}};
  V11.coreds = {hook:'Python in 31 of 42 job posts. Even new grads need a master’s.', conf:'Medium', next:NEXT_DS, step:{
    student:'First step, as a student: Python and SQL first, degree plans second. Ask ChatGPT or Claude to explain your code line by line. Python is in 31 of 42 job posts.',
    early:'First step, early in: build one model on messy real data. Write down your choices. That write-up helps you skip the master’s line.',
    mid:'First step, at 3–5 years: pick a direction: product or AI. If you stay general, pay can drop. Some beginner jobs pay $65,064.',
    senior:'First step, at 5+ years: show the models you shipped and the industry you know. Senior jobs pay up to $250,000 for that.'}};
  V11.mlds = {hook:'AI work in 17 of 42 job posts. And 6 of 7 in this job.', conf:'Medium', next:NEXT_DS, step:{
    student:'First step, as a student: build one thing with a large language model. With AI tools, that takes an evening. Write down how you checked its answers. Checking is the skill this job wants.',
    early:'First step, early in: ship one real AI project, even a small one. 6 of 7 job posts here name AI work. A demo isn\'t the same proof.',
    mid:'First step, at 3–5 years: own the testing. How does the team know the AI\'s answers are good? That\'s the senior version of this job.',
    senior:'First step, at 5+ years: show the AI systems you shipped and checked. This job pays up to $285,000.'}};
  V11.ressci = {hook:'Five of 42 job posts. All five want a PhD and published papers.', conf:'Medium', next:NEXT_DS, coe:'Going for this from zero costs ≈$560K in lost pay (4 years at the $140K new-grad pay we found). Plus 4–6 years of grad school. All for 5 of 42 job posts. It\'s a YES only if you already have the PhD and papers.', step:{
    student:'First step, as a student: if a PhD is really your plan, pick the lab and topic by the papers you want to write. All 5 research job posts ask for published work.',
    early:'First step, early in: publish from where you are. A small workshop paper or public project beats an extra quiet year of school.',
    mid:'First step, at 3–5 years: if you have the papers, apply. This job is a YES for you. If not, product and ML jobs pay $250K–$380K without them.',
    senior:'First step, at 5+ years: put a price on your published work. Staff research pays $320K–$400K for it.'}};

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
      GRIDS.dataanalyst.rows.push(['OTHER MAP','Data Scientist — a different profession','models & experiments · BLS middle pay $120,230 · +34.6% growth · it has its own check (VECTOR)','datascientist']);
      GRIDS.dataanalyst.short += ' Data scientist now has its own full check (VECTOR): 42 job posts, four jobs, and a degree check this one doesn\'t have. 16 of its 42 job posts want a master’s or PhD. The job above is your way in. The full check is on the other side. Both jobs share one trap: the report-making version. AI can write those reports now. They share SQL and Python, and nothing else. Not what they check, not the pay, not the way in.';
    }
    if (SEATS.dsgate) {
      SEATS.dsgate.door = 'What to do: there\'s now a full check for this job. Type VECTOR. Your shortest way over: statistics, Python, and one model you shipped. A master’s really matters there (16 of 42 job posts).';
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
      return 'Your state: no license decides data scientist pay in ' + name + '. There\'s no license for this work at all. Pay depends on the job type and your degree. The same title pays $65,064 at a national lab and $285K–$380K at Anthropic.';
    }
    return _sf2(prof, code, name);
  };
})();
