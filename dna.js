/* ===== PathCheck — TOP 1% DNA (the seven strands).
   Split into its own file on 2026-11-01: tracks.js sits at the ~98 KB
   single-file upload cap and app.js is large; quests.js set the
   precedent. Loaded by app.html after quests.js, before app.js.

   The founder's model (2026-11-01): a top-1% specialist decomposes
   into 7 strands. Every track step carries exactly ONE strand tag;
   every daily micro-quest feeds exactly ONE strand. A strand with
   tagged steps measures progress by its steps; a strand with NO
   tagged steps on a profession measures progress by its completed
   quests (server questLog / questDone) — never a fake %.

   Helix pairs (her layout): Craft×AI, Proof×Voice, Background solo
   at the spine's center, Niche×Network.

   Goal lines: one per profession × strand, plain words. Digits come
   ONLY from the pilot packages (doors, big goals, track facts) —
   nothing invented. The NICHE goal for a seat lead is the seat's own
   big-goal line (BIGGOALS / BIGGOALS_RU in quests.js / tracks2.js),
   resolved in app.js; the profession line here is the floor. */

/* ---------- the 7 strands (founder order) ---------- */
var DNA_STRANDS = [
  {id:'craft',      icon:'🛠️', name:'Craft',                   nameRu:'Мастерство',                 short:'Craft',      shortRu:'Мастерство'},
  {id:'background', icon:'🏅', name:'Experience & credentials', nameRu:'Опыт и документы',               short:'Experience', shortRu:'Опыт'},
  {id:'proof',      icon:'📁', name:'Proof',                    nameRu:'Доказательства',             short:'Proof',      shortRu:'Доказательства'},
  {id:'voice',      icon:'🎤', name:'Voice',                    nameRu:'Умение заявить о себе',                      short:'Voice',      shortRu:'Голос'},
  {id:'niche',      icon:'🎯', name:'Niche',                    nameRu:'Ниша',                       short:'Niche',      shortRu:'Ниша'},
  {id:'network',    icon:'🤝', name:'Network',                  nameRu:'Полезные знакомства',        short:'Network',    shortRu:'Знакомства'},
  {id:'ai',         icon:'🤖', name:'AI as your helper',        nameRu:'Помощь от AI',               short:'AI help', shortRu:'AI'}
];

/* Helix rows: pairs she named; Background sits alone at the center. */
var DNA_HELIX = [
  {left:'craft', right:'ai'},
  {left:'proof', right:'voice'},
  {center:'background'},
  {left:'niche', right:'network'}
];

/* ---------- STEP → STRAND (every track step, exactly one strand) ----------
   Rules used (founder-reviewed table ships with the build report):
   degree / license / exam / certificate / experience-years -> background;
   picking or aiming at ONE specialty / seat / market -> niche;
   a piece of evidence with numbers (page, piece, dashboard) -> proof;
   the core skill of the job itself -> craft;
   a named tool / platform / automation / AI workflow -> ai;
   your face / voice / being seen -> voice;
   people, firms, lists, the unit you belong to -> network. */
var DNA_STEP_TAGS = {
  cybersecurity: {'cyb-g1':'niche', 'cyb-g2':'background', 'cyb-g3':'background', 'cyb-g4':'craft', 'cyb-g5':'craft', 'cyb-p1':'proof', 'cyb-p2':'ai', 'cyb-p3':'proof', 'cyb-p4':'craft', 'cyb-p5':'background', 'cyb-k1':'proof', 'cyb-k2':'network', 'cyb-k3':'background', 'cyb-k4':'niche'},
  electrician: {'elc-g1':'niche', 'elc-g2':'background', 'elc-g3':'background', 'elc-g4':'network', 'elc-p1':'proof', 'elc-p2':'background', 'elc-p3':'background', 'elc-p4':'ai', 'elc-k1':'niche', 'elc-k2':'craft', 'elc-k3':'background', 'elc-k4':'craft', 'elc-k5':'network', 'elc-k6':'craft'},
  hvac: {'hvc-g1':'background', 'hvc-g2':'niche', 'hvc-g3':'background', 'hvc-g4':'craft', 'hvc-p1':'proof', 'hvc-p2':'niche', 'hvc-p3':'background', 'hvc-p4':'ai', 'hvc-k1':'niche', 'hvc-k2':'craft', 'hvc-k3':'craft', 'hvc-k4':'ai', 'hvc-k5':'network'},
  plumber: {'plb-g1':'niche', 'plb-g2':'background', 'plb-g3':'background', 'plb-g4':'craft', 'plb-p1':'proof', 'plb-p2':'background', 'plb-p3':'niche', 'plb-p4':'craft', 'plb-k1':'craft', 'plb-k2':'craft', 'plb-k3':'niche', 'plb-k4':'background', 'plb-k5':'network', 'plb-k6':'network'},
law: {
  'law-g1':'background', 'law-g2':'background', 'law-g3':'background', 'law-g4':'background',
  'law-p1':'niche', 'law-p2':'ai', 'law-p3':'ai', 'law-p4':'ai', 'law-p5':'craft', 'law-p6':'background',
  'law-k1':'niche', 'law-k2':'craft', 'law-k3':'niche', 'law-k4':'background'
},
cpa: {
  'cpa-g1':'background', 'cpa-g2':'background', 'cpa-g3':'background', 'cpa-g4':'niche', 'cpa-g5':'background',
  'cpa-p1':'ai', 'cpa-p2':'craft', 'cpa-p3':'ai', 'cpa-p4':'craft', 'cpa-p5':'ai', 'cpa-p6':'niche',
  'cpa-k1':'ai', 'cpa-k2':'proof', 'cpa-k3':'proof', 'cpa-k4':'niche', 'cpa-k5':'background'
},
nurse: {
  'nur-g1':'background', 'nur-g2':'background', 'nur-g3':'background', 'nur-g4':'background', 'nur-g5':'background',
  'nur-p1':'niche', 'nur-p2':'background', 'nur-p3':'background', 'nur-p4':'background', 'nur-p5':'ai',
  'nur-k1':'niche', 'nur-k2':'niche', 'nur-k3':'craft', 'nur-k4':'niche', 'nur-k5':'background'
},
fin: {
  'fin-g1':'background', 'fin-g2':'craft', 'fin-g3':'background',
  'fin-p1':'craft', 'fin-p2':'ai', 'fin-p3':'proof', 'fin-p4':'ai', 'fin-p5':'ai',
  'fin-k1':'craft', 'fin-k2':'niche', 'fin-k3':'network', 'fin-k4':'background'
},
creator: {
  /* v1 steps (retired 2026-11-01 with the independent-creator track):
     tags kept so legacy leads' stored checks still feed their DNA. */
  'cre-g1':'background', 'cre-g2':'craft', 'cre-g3':'craft', 'cre-g4':'voice',
  'cre-p1':'proof', 'cre-p2':'niche', 'cre-p3':'proof', 'cre-p4':'niche',
  'cre-k1':'proof', 'cre-k2':'network', 'cre-k3':'proof', 'cre-k4':'proof', 'cre-k5':'craft', 'cre-k6':'ai',
  /* v2 staff steps (cst-): */
  'cst-g1':'craft', 'cst-g2':'craft', 'cst-g3':'proof', 'cst-g4':'proof',
  'cst-p1':'niche', 'cst-p2':'craft', 'cst-p3':'craft', 'cst-p4':'proof',
  'cst-k1':'network', 'cst-k2':'proof', 'cst-k3':'ai', 'cst-k4':'niche', 'cst-k5':'voice', 'cst-k6':'background'
},
analyst: {
  'ana-g1':'craft', 'ana-g2':'ai', 'ana-g3':'niche', 'ana-g4':'ai',
  'ana-p1':'proof', 'ana-p2':'craft', 'ana-p3':'craft', 'ana-p4':'craft', 'ana-p5':'ai',
  'ana-k1':'niche', 'ana-k2':'proof', 'ana-k3':'ai', 'ana-k4':'niche', 'ana-k5':'background'
},
dataanalyst: {
  'dan-g1':'craft', 'dan-g2':'ai', 'dan-g3':'niche', 'dan-g4':'ai',
  'dan-p1':'proof', 'dan-p2':'craft', 'dan-p3':'ai', 'dan-p4':'craft', 'dan-p5':'craft', 'dan-p6':'ai',
  'dan-k1':'niche', 'dan-k2':'ai', 'dan-k3':'niche', 'dan-k4':'background'
},
businessanalyst: {
  'ban-g1':'craft', 'ban-g2':'craft', 'ban-g3':'niche', 'ban-g4':'ai',
  'ban-p1':'proof', 'ban-p2':'ai', 'ban-p3':'proof', 'ban-p4':'ai',
  'ban-k1':'niche', 'ban-k2':'proof', 'ban-k3':'proof', 'ban-k4':'niche', 'ban-k5':'background'
},
aicreator: {
  'aic-g1':'niche', 'aic-g2':'background', 'aic-g3':'background', 'aic-g4':'ai',
  'aic-p1':'proof', 'aic-p2':'ai', 'aic-p3':'proof', 'aic-p4':'proof', 'aic-p5':'background',
  'aic-k1':'craft', 'aic-k2':'niche', 'aic-k3':'network', 'aic-k4':'background'
},
healthadmin: {
  'had-g1':'niche', 'had-g2':'background', 'had-g3':'craft', 'had-g4':'ai', 'had-g5':'background',
  'had-p1':'craft', 'had-p2':'craft', 'had-p3':'ai', 'had-p4':'proof', 'had-p5':'background',
  'had-k1':'niche', 'had-k2':'proof', 'had-k3':'network', 'had-k4':'network'
},
datascientist: {
  'dsc-g1':'craft', 'dsc-g2':'craft', 'dsc-g3':'niche', 'dsc-g4':'background',
  'dsc-p1':'craft', 'dsc-p2':'craft', 'dsc-p3':'ai', 'dsc-p4':'proof', 'dsc-p5':'proof', 'dsc-p6':'craft',
  'dsc-k1':'niche', 'dsc-k2':'ai', 'dsc-k3':'niche', 'dsc-k4':'background'
},
truckdriver: {
  'trk-g1':'niche', 'trk-g2':'background', 'trk-g3':'background', 'trk-g4':'background', 'trk-g5':'network',
  'trk-p1':'background', 'trk-p2':'background', 'trk-p3':'background', 'trk-p4':'proof', 'trk-p5':'craft',
  'trk-k1':'proof', 'trk-k2':'craft', 'trk-k3':'niche', 'trk-k4':'ai'
},
counselor: {
  'cns-g1':'niche', 'cns-g2':'background', 'cns-g3':'background', 'cns-g4':'background', 'cns-g5':'background',
  'cns-p1':'background', 'cns-p2':'proof', 'cns-p3':'craft', 'cns-p4':'ai', 'cns-p5':'background',
  'cns-k1':'niche', 'cns-k2':'network', 'cns-k3':'network', 'cns-k4':'background'
}
};

/* ---------- QUEST → STRAND (all 60 pool quests) ----------
   The share quest (q8 in every pool) feeds VOICE — founder ruling
   2026-11-01. The radar quest (q7) feeds NETWORK: it is the daily
   line to your field's live signals. The resume quest (q6) feeds
   PROOF. The specialty-writing quests (q1–q3) feed NICHE. */
var DNA_QUEST_TAGS = {
  'cybersecurity-q1':'niche',
  'cybersecurity-q2':'craft',
  'cybersecurity-q3':'craft',
  'cybersecurity-q4':'ai',
  'cybersecurity-q5':'background',
  'cybersecurity-q6':'proof',
  'cybersecurity-q7':'network',
  'cybersecurity-q8':'voice',
  'cybersecurity-q9':'proof',
  'cybersecurity-q10':'network',
  'electrician-q1':'background',
  'electrician-q2':'network',
  'electrician-q3':'niche',
  'electrician-q4':'niche',
  'electrician-q5':'proof',
  'electrician-q6':'proof',
  'electrician-q7':'network',
  'electrician-q8':'voice',
  'electrician-q9':'niche',
  'electrician-q10':'background',
  'hvac-q1':'background',
  'hvac-q2':'proof',
  'hvac-q3':'niche',
  'hvac-q4':'niche',
  'hvac-q5':'craft',
  'hvac-q6':'proof',
  'hvac-q7':'network',
  'hvac-q8':'voice',
  'hvac-q9':'network',
  'hvac-q10':'background',
  'plumber-q1':'background',
  'plumber-q2':'network',
  'plumber-q3':'niche',
  'plumber-q4':'proof',
  'plumber-q5':'niche',
  'plumber-q6':'proof',
  'plumber-q7':'network',
  'plumber-q8':'voice',
  'plumber-q9':'craft',
  'plumber-q10':'background',
  'law-q1':'niche', 'law-q2':'niche', 'law-q3':'niche', 'law-q4':'ai', 'law-q5':'niche',
  'law-q6':'proof', 'law-q7':'network', 'law-q8':'voice', 'law-q9':'proof', 'law-q10':'background',
  'cpa-q1':'niche', 'cpa-q2':'niche', 'cpa-q3':'niche', 'cpa-q4':'background', 'cpa-q5':'ai',
  'cpa-q6':'proof', 'cpa-q7':'network', 'cpa-q8':'voice', 'cpa-q9':'proof', 'cpa-q10':'background',
  'nurse-q1':'niche', 'nurse-q2':'niche', 'nurse-q3':'niche', 'nurse-q4':'background', 'nurse-q5':'niche',
  'nurse-q6':'proof', 'nurse-q7':'network', 'nurse-q8':'voice', 'nurse-q9':'background', 'nurse-q10':'background',
  'fin-q1':'niche', 'fin-q2':'niche', 'fin-q3':'niche', 'fin-q4':'craft', 'fin-q5':'ai',
  'fin-q6':'proof', 'fin-q7':'network', 'fin-q8':'voice', 'fin-q9':'ai', 'fin-q10':'background',
  'creator-q1':'craft', 'creator-q2':'craft', 'creator-q3':'background', 'creator-q4':'proof', 'creator-q5':'niche',
  'creator-q6':'network', 'creator-q7':'ai', 'creator-q8':'voice', 'creator-q9':'craft', 'creator-q10':'proof',
  'analyst-q1':'niche', 'analyst-q2':'niche', 'analyst-q3':'niche', 'analyst-q4':'craft', 'analyst-q5':'niche',
  'analyst-q6':'proof', 'analyst-q7':'network', 'analyst-q8':'voice', 'analyst-q9':'proof', 'analyst-q10':'niche',
  'dataanalyst-q1':'niche', 'dataanalyst-q2':'niche', 'dataanalyst-q3':'niche', 'dataanalyst-q4':'craft', 'dataanalyst-q5':'niche',
  'dataanalyst-q6':'proof', 'dataanalyst-q7':'network', 'dataanalyst-q8':'voice', 'dataanalyst-q9':'proof', 'dataanalyst-q10':'niche',
  'businessanalyst-q1':'niche', 'businessanalyst-q2':'niche', 'businessanalyst-q3':'niche', 'businessanalyst-q4':'craft', 'businessanalyst-q5':'niche',
  'businessanalyst-q6':'proof', 'businessanalyst-q7':'network', 'businessanalyst-q8':'voice', 'businessanalyst-q9':'proof', 'businessanalyst-q10':'background',
  'aicreator-q1':'niche', 'aicreator-q2':'craft', 'aicreator-q3':'ai', 'aicreator-q4':'background', 'aicreator-q5':'proof',
  'aicreator-q6':'network', 'aicreator-q7':'network', 'aicreator-q8':'voice', 'aicreator-q9':'ai', 'aicreator-q10':'proof',
  'healthadmin-q1':'niche', 'healthadmin-q2':'niche', 'healthadmin-q3':'background', 'healthadmin-q4':'ai', 'healthadmin-q5':'craft',
  'healthadmin-q6':'proof', 'healthadmin-q7':'network', 'healthadmin-q8':'voice', 'healthadmin-q9':'ai', 'healthadmin-q10':'background',
  'datascientist-q1':'niche', 'datascientist-q2':'niche', 'datascientist-q3':'craft', 'datascientist-q4':'craft', 'datascientist-q5':'niche',
  'datascientist-q6':'proof', 'datascientist-q7':'network', 'datascientist-q8':'voice', 'datascientist-q9':'proof', 'datascientist-q10':'niche',
  'truckdriver-q1':'niche', 'truckdriver-q2':'background', 'truckdriver-q3':'craft', 'truckdriver-q4':'ai', 'truckdriver-q5':'proof',
  'truckdriver-q6':'proof', 'truckdriver-q7':'network', 'truckdriver-q8':'voice', 'truckdriver-q9':'proof', 'truckdriver-q10':'background',
  'counselor-q1':'niche', 'counselor-q2':'niche', 'counselor-q3':'niche', 'counselor-q4':'background', 'counselor-q5':'background',
  'counselor-q6':'proof', 'counselor-q7':'network', 'counselor-q8':'voice', 'counselor-q9':'craft', 'counselor-q10':'background'
};

/* ---------- STRAND GOALS — profession level (the floor), EN ---------- */
var DNA_GOALS = {
  cybersecurity: {'craft':'Craft: telling a real attack alarm from a false one, fast. Practice at home first, then at work. Ask ChatGPT or Claude to explain each alarm — you learn in weeks, not years.', 'background':'Experience: some real time in an IT job, plus Security+ (a beginner security certificate). We read 35 job posts. These two get you in. Skip the extra courses.', 'proof':'Proof: a diary of your home practice and three short attack reports in plain English. A boss gets them in five minutes. That beats any diploma.', 'voice':'Voice: once a week, explain one attack in simple words, in public. Soon people know your name before you apply. Known people get hired faster.', 'niche':'Niche: pick one area and stay in it. SOC (watching for attacks), finding attacks, cloud safety, or hacking with permission. One area takes you to the top faster than “all of cybersecurity”.', 'network':'Network: get to know people who do this job and people who hire. Then they know you before you need the job. The job can come to you.', 'ai':'AI help: AI already sorts part of the alarms. What stays human, and pays: deciding which attack is real. Learn to run AI for this — 20.4% of beginner job posts already ask. And that share doubles fast.'},
  electrician: {'craft':'Craft: neat, fast wiring that follows the code (the safety rules). Wire pipes, power panels, finding faults — so the boss never re-checks. Service job posts pay $45–$65/hr for this.', 'background':'Experience: the journeyman license (you may work on your own; 24 of 36 job posts ask for it). Later, the master license. Get your apprentice card first — hours without it don’t count. No wasted months!', 'proof':'Proof: a notebook of your hours by type of work. Shops, factories, repairs, homes — all your 8,000 hours. A varied log gets you the better next job faster.', 'voice':'Voice: let bosses and shop owners in your city know your name. When workers are short, they call people they know. Be that name.', 'niche':'Niche: pick one kind of work that pays extra. Data centers, EV chargers, solar + batteries, generators or control wiring. One special skill lifts your pay faster.', 'network':'Network: know your JATC (apprentice school) or program, your union hall, and two bosses who hire for the next level. New spots open once a year. People with contacts hear first.', 'ai':'AI help: computers now draw the whole building. Read the drawings and BIM (a computer model of the building) the crew builds from. Checking the model against the real wall stays human. That’s you.'},
  hvac: {'craft':'Craft: finding what’s broken so well that your boss trusts you. Find it, show why, fix it the first time. Business job posts pay $35–$45/hr for that.', 'background':'Experience: start with EPA 608 Universal (a permit to handle cooling gas; 13 of 27 job posts ask for it). Then your state license, if your state has one. After enough hours, NATE (a tech certificate) in your area. Nothing extra.', 'proof':'Proof: a notebook of systems you fixed — type, size (tonnage), problem, fix. It shows 2+ years of real repair work. Big companies read it like a resume, so you get hired faster.', 'voice':'Voice: be the tech customers ask for by name. Known techs pick where they work. Unknown techs get pushed to sell more.', 'niche':'Niche: pick one area — big-building service, refrigeration, or controls. The best pay we found is always in one area. General jobs pay less.', 'network':'Network: meet two business contractors and one controls company early. People, not job posts, move you up from home jobs. That’s the fast lane.', 'ai':'AI help: building systems now run on software. Really learn one BAS system (software that runs a building’s heating and cooling). Plus the apps that send you on jobs. The fixing by hand stays yours.'},
  plumber: {'craft':'Craft: work so clean a master signs it without fixing a thing. Find leaks — don’t guess. Pipe joints pass the check the first time. Then bigger jobs come sooner.', 'background':'Experience: the journeyman license (you may work on your own; every top job post we found asks for it). Later, the master license. Log your hours from day one. That license is your treasure.', 'proof':'Proof: a notebook of your hours by type of work, for your whole training. Plus one certificate people pay for — backflow testing is the classic.', 'voice':'Voice: be the plumber your neighbors know by name. For repairs, people call the plumber they know. Apps have to pay for those calls — you get them free.', 'niche':'Niche: pick one direction you like. Warranty repairs, business buildings, or factory pipefitting. Pipefitting job posts pay $40.64–$54/hr.', 'network':'Network: know your UA local (the plumbers’ union) or group, and two masters who hire. Watch your state’s rule changes, so nothing catches you off guard.', 'ai':'AI help: smart tools now track plumbing work. Pipe cameras, press tools, and the job app’s notes on your work. The hands-on fix stays human. And whoever reads that data wins.'},
law: {
  craft:'Craft: making smart calls on your own at work. Top job posts name it the #1 people skill — 7+ of 25 say so. Also learn Office / 365, one program at a time. AI can teach you in evenings.',
  background:'Experience: only the papers senior jobs ask for. A bachelor’s degree (19 of 21 senior job posts). A paralegal certificate (lawyer’s helper; 14 of 21). CIPP/US (a privacy certificate) only if you pick privacy (3 of 3).',
  proof:'Proof: show on paper how much time you saved. Pick one task you do with AI. Write the time before and after. Top job posts love this proof: you already work the new way.',
  voice:'Voice: let bosses see what you’re great at. Share your verdict card and results where hiring managers read. People who are seen get picked first.',
  niche:'Niche: pick ONE area of law and go deep. Senior jobs start at 5+ years in one area. The top level asks for 10+. Start now — every year counts!',
  network:'Network: aim at firms that pay experts well. Gibson Dunn pays $150K–$200K. Cooley pays $135,200–$176,800. That’s where the top 1% works.',
  ai:'AI help: AI already does part of a legal helper’s routine. Judgment stays human — and pays. Learn the main tools — Relativity, Carta, iManage. Hand one task to AI. 7 of 25 lawyer job posts ask for AI skills.'
},
cpa: {
  craft:'Craft: really know GAAP (the U.S. rules for counting money) — ASC 606, 842, 718. Get good at Excel, past the basics. 8 of 8 beginner job posts check for pivot tables and VLOOKUP. Ask ChatGPT or Claude to quiz you.',
  background:'Experience: a bachelor’s degree (52 of 52 job posts) → the CPA exam → the license. Pick your state’s cheapest way: 120 credits + 2 years, if allowed. No extra school.',
  proof:'Proof: one page that good job posts look for. A task you made better, with hours before and after. Plus one piece of proof for your area. It shows results, not just a title.',
  voice:'Voice: be the person people think of for one thing. Share your verdict and proof where bosses and partners read. Known experts get the best offers.',
  niche:'Niche: ONE industry, deep. The top pay goes here: factory costs, app subscriptions (SaaS), firms taxed through their owners, and very rich clients (HNW).',
  network:'Network: start at an accounting firm. It opens the way into FDD (checking a company before someone buys it). 11 job posts ask for that firm time.',
  ai:'AI help: AI already does part of an accountant’s work. Running the money software stays human, and pays. NetSuite (18 of 52 job posts), Workiva for SEC reports (for public companies), and some month-end automation.'
},
nurse: {
  craft:'Craft: growing into a charge nurse — the one who leads the shift. The next step, assistant nurse manager, pays $61.91–$97.72/hr. Charge-nurse time is the fast way there.',
  background:'Experience: get your RN license (registered nurse) the cheaper way. 16 of 16 job posts ask for it. The ADN (a short nursing degree) costs $5,472. Keep BLS (basic life support, 15 of 16) and ACLS (advanced, 10 of 16) current.',
  proof:'Proof: a resume that shows your nursing area. Your years there and your certificates. Every line can be checked — that’s what gets you picked.',
  voice:'Voice: let charge nurses and managers see your nursing area. Share your verdict card. The money follows the special skill.',
  niche:'Niche: pick ONE area by month 18–24: ICU (intensive care), ED (emergency) or OR (surgery). Experienced nurses there get $10K–$25K bonuses when hired.',
  network:'Network: pick a residency (a first-year training program) by how it helps you grow, not by first pay. 22.7% of new RNs quit in year one (NSI). A good program keeps you going.',
  ai:'AI help: AI now helps with nursing paperwork — care stays human. Be the AI pro on your floor. Only about 10% of nurses get there. Bosses notice them when hiring (McKinsey). You can be one of them!'
},
fin: {
  craft:'Craft: SQL (a language for asking data questions), really well — 31 of 40 job posts want it. Build money models. Then own one team’s forecast start to end. With AI as a tutor, SQL takes weeks, not years.',
  background:'Experience: a bachelor’s degree in a numbers subject. Skip the CFA: 0 of 40 job posts require it. That saves you time and money.',
  proof:'Proof: two BI dashboards (screens with charts) on real data. Plus one page about a report you made automatic. Hours and mistakes before and after. This beats a certificate.',
  voice:'Voice: be the team’s money person, and let people hear it. Show your forecast and the plan-vs-result gap at their meetings.',
  niche:'Niche: aim for hybrid and partner roles. Plain “analyst” jobs are shrinking (−21%). Hybrid roles pay $138K–$180,600. Partner roles pay up to $276,250. Go where the money is growing.',
  network:'Network: from day one in a new job, be the team’s go-to person. Join their meetings. Own their forecast. That’s how you move up fast.',
  ai:'AI help: AI already builds part of an analyst’s reports; advising people stays human. Learn one planning tool well (Anaplan: 15 of 40 job posts). Build one Python helper people really use.'
},
creator: {
  craft:'Craft: make a whole video yourself — idea, filming, editing, posting. Companies want one person who does it all. Premiere is named in 21 of 40 job posts, CapCut in 15 of 40.',
  background:'Experience: keep a simple market notebook. Note the pay, tools and AI tools in new job posts. Check it every quarter. There’s no license here, so this notebook keeps you ahead.',
  proof:'Proof: a portfolio where each video shows its numbers. Views, watch time, and CTR (how many clicked). 22 of 40 job posts ask for one. It’s your diploma!',
  voice:'Voice: make yourself easy to find. Share how you made your videos, with numbers. Bosses hire people whose thinking they’ve already seen.',
  niche:'Niche: one role and one industry. The face on camera, the ads person, or a topic brands pay extra for. Every job post above $100K we found wants a rare skill like these.',
  network:'Network: get to know bosses and creators in your area before you need a job. And let them get to know you. Then offers come to you.',
  ai:'AI help: AI already does part of a video maker’s work — captions, versions, first edits. Judging what it made stays yours. Only 2 of 40 job posts name AI tools today. They pay for your taste — no tool has it.'
},
analyst: {
  craft:'Craft: SQL (a language for asking data questions) at work level (43 of 46 job posts). Python for data (18 of 46). One test run start to end. Ask ChatGPT or Claude to explain each query.',
  background:'Experience: good news — no license needed! You can start sooner. We check new job posts every quarter. In one check, posts asking for AI tools grew to 6 of 46.',
  proof:'Proof: one dashboard (a screen with charts) that helped someone decide. Who used it and what they chose. Plus one choice you changed, with numbers.',
  voice:'Voice: talk about a choice you changed, not a chart you made. All 7 strategy & operations job posts say the main job is working with people. AI makes charts; people make choices.',
  niche:'Niche: pick your job on purpose. The six jobs on this map pay $51K to $300K. They all share one name: “analyst”. The right pick is the shortest way up.',
  network:'Network: apply where you help make choices. Get to know the people who decide. Try product analyst, analytics engineer, strategy & operations.',
  ai:'AI help: AI already writes part of an analyst’s reports; checking stays human. Use AI tools yourself (6 of 46 job posts ask). Make one repeating report run itself. Show it: AI wrote, you checked.'
},
dataanalyst: {
  craft:'Craft: SQL (a language for asking data questions) at work level (24 of 24 data job posts). Python for data (15 of 24). One test run start to end. That’s the whole core — no extra courses.',
  background:'Experience: good news — no license needed! The U.S. job counters (BLS) group this with data scientists. Middle pay is $120,230, and jobs grow +35%. We check new job posts every quarter.',
  proof:'Proof: one dashboard (a screen with charts) that helped someone decide. Say who used it and what they chose. Add one test you ran from start to end.',
  voice:'Voice: show people how you work with AI. Share one project: AI wrote the first draft, you checked it. That checking is what gets you hired now.',
  niche:'Niche: pick your job on purpose. The four jobs on this map pay $60K to $300K. The names sound alike, but the jobs differ. The right pick saves you time.',
  network:'Network: apply where you help make choices. Get to know the people who decide. Try product analyst and analytics engineer.',
  ai:'AI help: AI already writes part of a data analyst’s work. Checking it stays human. Today 2 of 24 data job posts ask for AI, and that’s changing. Make one repeating report run by itself. Show your steps.'
},
businessanalyst: {
  craft:'Craft: Excel past the basics (7 of 7 beginner job posts). SQL (a language for asking data questions) at work level (19 of 22). Fix one work process and show the number. AI can tutor you through both.',
  background:'Experience: good news — no license needed! BLS (the U.S. job counters) calls this work management analysts. Middle pay $101,860, +10% growth, about 94,100 openings a year.',
  proof:'Proof: one idea you pushed for, on one page. What you chose, the number behind it, what you asked for. Plus one process you made faster, with time saved.',
  voice:'Voice: talk about a choice you changed, not a paper you wrote. All 7 strategy & operations job posts say the main job is working with managers and teams.',
  niche:'Niche: pick your type of job on purpose. The two jobs on this map pay $51K to $194K. They share one name. Knowing the difference gets you to the bigger pay.',
  network:'Network: get to know the people who make choices. 7 of 7 strategy & operations job posts say the main job is working with managers and top bosses.',
  ai:'AI help: AI already does part of a business analyst’s paperwork (4 of 22 business job posts ask for it). Thinking stays human. Make one boring task run by itself. Just keep checking the results.'
},
aicreator: {
  craft:'Craft: you direct every piece — your idea, your style, your choices. If AI could make it without you, it pays $0. Your taste is what clients buy.',
  background:'Experience: no license here. Your record is playing fair. Mark AI content on every platform. Never post fake AI reviews — the FTC (the U.S. fair-trade office) watches for that.',
  proof:'Proof: a price list with two paid jobs on it. Plus a before-and-after: the same ad, filmed by a person and made by AI. Clients see the value at once.',
  voice:'Voice: a real face, or a name clients can call. Here, trust starts when people can check who you are. Among AI fakes, that’s rare.',
  niche:'Niche: pick ONE clear job. A real face with AI helpers for one topic. Or AI videos for one kind of brand. “AI content” in general isn’t a job.',
  network:'Network: a list of clients that’s yours, plus creator friends you test ideas with. Followers on an app are only borrowed. Your list is yours to keep.',
  ai:'AI help: do the whole thing yourself — script, make, edit, label. Under an hour per piece. If a client wants, dub it in a second language (the tools know 175 languages).'
},
healthadmin: {
  craft:'Craft: running a real part of a clinic — money, building and people. Then showing the numbers you got. That’s what gets you promoted.',
  background:'Experience: get exactly the paper your job asks for — a degree, a certificate, or a state licence. Nothing extra, so you start sooner.',
  proof:'Proof: results someone else checked. Money you saved, an inspection you passed, a waiting line you fixed.',
  voice:'Voice: be the boss who explains numbers simply — to owners, doctors and your own team.',
  niche:'Niche: pick one place on purpose — a hospital, a doctor’s office, a nursing home or an insurer. Not "all of healthcare."',
  network:'Network: know who hires and checks this work. Hospital bosses, office owners, inspectors, fellowship (training program) leaders.',
  ai:'AI help: AI already does part of clinic office work — insurance approvals, the schedule, the list of denied bills. Running those helpers stays human, and pays.'
},
datascientist: {
  craft:'Craft: Python, SQL and statistics at work level. Plus one model you built and launched. 33 of 42 job posts ask for model building.',
  background:'Experience: just the degree your job really asks for. 16 of 42 job posts want a master’s or PhD. Don’t buy more degrees — build projects instead.',
  proof:'Proof: three projects anyone gets in five minutes. A model, a test, and one AI project with its score. They say more than a diploma.',
  voice:'Voice: write so a manager knows what to do. End every report with the choice it helps make, in simple words.',
  niche:'Niche: pick ONE role — product, core, ML, or research. Choose from real job posts, not a course list.',
  network:'Network: people who can say what your work changed. Product teammates, hiring managers, one group in your field.',
  ai:'AI help: AI already writes part of a data scientist’s code. Checking it stays human, and pays. Launch one AI project. Write down how you checked it.'
},
truckdriver: {
  craft:'You can haul any load — tie-downs, a sloshing tanker, two trailers in the wind. Your pre-trip check catches what others miss. That makes you the driver trusted with the best loads.',
  background:'Class A CDL with all the extra stamps (H, N, T), TWIC (a port pass), a fresh medical card. And a clean driving record. Each stamp opens more loads.',
  proof:'A folder that speaks for you: clean inspections, letters from bosses, your best week — miles, pay, nights at home.',
  voice:'Other drivers know your name from online groups — today’s CB radio. They trust your tips on routes and companies.',
  niche:'One kind of driving, picked on purpose — local LTL (small shared loads), tanker, heavy loads or your own truck. Not "whatever dispatch sends".',
  network:'Dispatchers, safety bosses and two companies that would hire you this week. Plus friends from school, the union or OOIDA (a truck owners’ group).',
  ai:'Robot trucks are coming to some routes. Watch that map like the weather. Know which routes got them this quarter. Know what it means for your job, so you can plan ahead.'
},
counselor: {
  craft:'Craft: one area with one named method, done really well. CBT, DBT, EMDR (types of therapy) or motivational interviewing — the words job posts use. Depth gets you paid more.',
  background:'Experience: the full license. A 60-credit master’s your state board accepts. 2,000–3,000 hours of practice with a supervisor. Pass the NCE or NCMHCE exam. Thirty of 44 job posts ask for it.',
  proof:'Proof: a license folder with no missing pieces. Training hours (100 + 600). Supervisor hours written down every week. And your own copy of every page.',
  voice:'Voice: be the counselor others recommend. Share your verdict and your area where doctors and school counselors see it. Recommendations are how people find you here.',
  niche:'Niche: ONE group of people and ONE method — trauma, couples, teens, or addiction, with a license. Offices pay $75,000–$135,000 for that special skill, not just for listening.',
  network:'Network: people who send clients your way. Psychiatrists, family doctors, school counselors, past supervisors. Later, the Counseling Compact (a deal between states; 11 states live) helps you reach more.',
  ai:'AI help: AI already does part of a counselor’s paperwork — notes and first drafts in your records app (Epic, Netsmart Avatar, AthenaOne show up in job posts). The therapy stays human. In Illinois and Nevada, the law now says so.'
}
};

/* ---------- STRAND GOALS — profession level, RU (digits identical) ---------- */
var DNA_GOALS_RU = {
  cybersecurity: {'craft':'Мастерство: быстро отличать настоящую атаку от ложной тревоги. Сначала тренируйтесь дома, потом на работе. Просите ChatGPT или Claude объяснять каждую тревогу — так учатся за недели, а не годы.', 'background':'Опыт: немного настоящей работы в IT плюс Security+ (начальный сертификат по защите). Мы прочитали 35 вакансий. С этими двумя вещами вас возьмут. Лишние курсы не нужны.', 'proof':'Доказательства: дневник домашних тренировок и три коротких отчёта об атаках на простом английском. Начальник поймёт их за пять минут. Это сильнее любого диплома.', 'voice':'Заявить о себе: раз в неделю простыми словами разбирайте одну атаку — открыто. Скоро вас будут знать ещё до отклика. Знакомых берут быстрее.', 'niche':'Ниша: выберите одно направление и держитесь его. SOC (слежка за атаками), поиск атак, защита облака или взлом с разрешения. В одном деле до вершины ближе, чем во «всей кибербезопасности».', 'network':'Знакомства: познакомьтесь с теми, кто делает эту работу и нанимает. Пусть они знают вас ещё до того, как вам нужна работа. Тогда работа сама найдёт вас.', 'ai':'AI: AI уже разбирает часть тревог. За людьми остаётся главное — решить, какая атака настоящая. Научитесь управлять AI: это просят 20,4% вакансий для новичков. И таких вакансий быстро становится больше.'},
  electrician: {'craft':'Мастерство: аккуратная и быстрая проводка по правилам безопасности. Трубы для проводов, щитки, поиск поломок — так, чтобы начальник не перепроверял. За это платят $45–$65/hr.', 'background':'Опыт: лицензия journeyman (самостоятельный электрик; её просят 24 из 36 вакансий). Потом лицензия мастера. Сначала получите карту ученика: часы без неё не считаются. Так вы не потеряете месяцы!', 'proof':'Доказательства: тетрадь ваших часов по видам работ. Магазины, заводы, ремонты, дома — все ваши 8,000 часов. Разный опыт быстрее ведёт к лучшей работе.', 'voice':'Заявить о себе: пусть начальники и владельцы фирм в вашем городе знают вас по имени. Когда людей не хватает, звонят знакомым. Будьте этим знакомым.', 'niche':'Ниша: выберите одну работу, за которую платят больше. Дата-центры, зарядки для электромобилей (EV), солнечные панели с батареями, генераторы или проводка для автоматики. Особое умение быстрее поднимает доход.', 'network':'Знакомства: знайте свою школу учеников (JATC) или программу, свой профсоюз и двух начальников, которые берут на уровень выше. Места открываются раз в год. Кто знаком с людьми, узнаёт первым.', 'ai':'AI: здание теперь рисует компьютер. Читайте чертежи и BIM (модель здания в компьютере), по которым работает бригада. А сверять модель с настоящей стеной — работа человека. Ваша работа.'},
  hvac: {'craft':'Мастерство: находить поломку так, чтобы начальник вам доверял. Найти, показать причину, починить с первого раза. За это платят $35–$45/hr.', 'background':'Опыт: сначала EPA 608 Universal (разрешение работать с охлаждающим газом; его просят 13 из 27 вакансий). Потом лицензия штата, если она там нужна. Когда наберёте часы — NATE (сертификат техника) по вашему направлению. Ничего лишнего.', 'proof':'Доказательства: тетрадь систем, которые вы чинили, — тип, мощность (тоннаж), поломка, ремонт. Видно 2+ года настоящей работы. Большие фирмы читают её как резюме — и берут быстрее.', 'voice':'Заявить о себе: будьте мастером, которого клиенты зовут по имени. Известные мастера сами выбирают, где работать. Неизвестных заставляют больше продавать.', 'niche':'Ниша: выберите одно направление — большие здания, холодильное оборудование или автоматика. Самые большие зарплаты всегда в одном направлении. Общие работы платят меньше.', 'network':'Знакомства: заранее познакомьтесь с двумя фирмами для бизнеса и одной фирмой по автоматике. Из работы по домам растут через людей, а не через вакансии. Это короткий путь.', 'ai':'AI: отоплением зданий теперь управляют программы. Хорошо выучите одну систему BAS (программа, которая управляет отоплением и охлаждением). И приложения, которые присылают вызовы. А ремонт руками остаётся за вами.'},
  plumber: {'craft':'Мастерство: работа такая чистая, что мастер подписывает её без исправлений. Протечки находите, а не угадываете. Соединения проходят проверку с первого раза. Так крупные заказы придут раньше.', 'background':'Опыт: лицензия journeyman (самостоятельный сантехник; её просят все лучшие вакансии). Потом лицензия мастера. Записывайте часы с первого дня. Эта лицензия — ваше сокровище.', 'proof':'Доказательства: тетрадь часов по видам работ за всю учёбу. Плюс один сертификат, за который платят. Классика — проверка обратных клапанов.', 'voice':'Заявить о себе: будьте сантехником, которого соседи знают по имени. На ремонт зовут знакомого мастера. Приложения за такие вызовы платят — а вам они достаются даром.', 'niche':'Ниша: выберите одно направление по душе. Ремонт по гарантии, работа для бизнеса или трубы на заводах. За трубы на заводах платят $40.64–$54/hr.', 'network':'Знакомства: знайте местный профсоюз сантехников (UA) или ассоциацию и двух мастеров, которые нанимают. Следите за новыми правилами штата, чтобы ничего не застало врасплох.', 'ai':'AI: умные инструменты теперь следят за работой. Камеры для труб, пресс-инструменты и заметки рабочего приложения. Ремонт руками остаётся за человеком. А кто читает эти данные, тот и выигрывает.'},
law: {
  craft:'Мастерство: умение самостоятельно принимать разумные решения. В лучших вакансиях это качество №1 — так пишут 7+ из 25. И осваивайте Office / 365, по одной программе. AI научит за пару вечеров.',
  background:'Опыт: только документы, которые просят на старших должностях. Диплом бакалавра (19 из 21). Сертификат помощника юриста (paralegal, 14 из 21). CIPP/US (сертификат по защите личных данных) — только если выберете эту тему (3 из 3).',
  proof:'Доказательства: покажите на бумаге, сколько времени вы сэкономили. Возьмите одну задачу, которую делаете с AI. Запишите время «до» и «после». Лучшие вакансии это ценят: видно, что вы уже работаете по-новому.',
  voice:'Заявить о себе: пусть работодатели видят, в чём вы сильны. Делитесь карточкой вердикта и результатами там, где читают те, кто нанимает. Заметных берут первыми.',
  niche:'Ниша: выберите ОДНУ область права и углубитесь в неё. Старшие должности начинаются с 5+ лет в одной области. Верхний уровень просит 10+. Начните сейчас — каждый год идёт в зачёт!',
  network:'Знакомства: цельтесь в фирмы, которые хорошо платят специалистам. Gibson Dunn платит $150K–$200K. Cooley — $135,200–$176,800. Там и работает топ 1%.',
  ai:'AI: AI уже делает часть рутины помощника юриста. Решения остаются за человеком — за них и платят. Освойте главные программы — Relativity, Carta, iManage. Отдайте одну задачу AI. Навык AI просят 7 из 25 вакансий юристов.'
},
cpa: {
  craft:'Мастерство: по-настоящему знать GAAP (правила учёта денег в США) — ASC 606, 842, 718. И хорошо владеть Excel. Все 8 из 8 вакансий для новичков проверяют сводные таблицы и функцию VLOOKUP. Пусть ChatGPT или Claude вас погоняет.',
  background:'Опыт: диплом бакалавра (52 из 52 вакансий) → экзамен CPA → лицензия. Выберите самый дешёвый путь в вашем штате: 120 учебных кредитов + 2 года, если можно. Лишняя учёба не нужна.',
  proof:'Доказательства: одна страница, которую ищут хорошие вакансии. Задача, которую вы улучшили, с часами «до» и «после». Плюс одна работа по вашему направлению. Видно результат, а не только должность.',
  voice:'Заявить о себе: пусть о вас вспоминают, когда нужна одна конкретная тема. Делитесь вердиктом и доказательствами там, где читают начальники и партнёры. Известным специалистам предлагают больше.',
  niche:'Ниша: ОДНА отрасль, но глубоко. Больше всего платят здесь: затраты на заводах, подписки на программы (SaaS), фирмы с налогом через владельцев, очень богатые клиенты (HNW).',
  network:'Знакомства: начните в бухгалтерской фирме. Это открывает путь в FDD — проверку компании перед её покупкой. 11 вакансий просят опыт в такой фирме.',
  ai:'AI: AI уже делает часть работы бухгалтера. За людьми остаются денежные программы — за это хорошо платят. NetSuite (18 из 52 вакансий), Workiva для отчётов на биржу (SEC) и часть автоматизации в конце месяца.'
},
nurse: {
  craft:'Мастерство: дорасти до старшей медсестры смены — той, кто ведёт смену. Следующая ступень, помощник заведующей отделением, получает $61.91–$97.72/hr. Опыт старшей смены — быстрый путь туда.',
  background:'Опыт: лицензия медсестры (RN) недорогим путём. Её просят 16 из 16 вакансий. Короткая программа (ADN) стоит $5,472. Держите в силе BLS (базовая помощь при остановке сердца, 15 из 16) и ACLS (расширенная, 10 из 16).',
  proof:'Доказательства: резюме, которое показывает ваше направление. Годы работы в нём и сертификаты. Каждую строку можно проверить — поэтому выбирают вас.',
  voice:'Заявить о себе: пусть старшие медсёстры и менеджеры видят ваше направление. Делитесь карточкой вердикта. Деньги идут за особым умением.',
  niche:'Ниша: выберите ОДНО направление к месяцу 18–24 — реанимация (ICU), приёмное (ED) или операционная (OR). Опытным медсёстрам там платят бонус $10K–$25K при найме.',
  network:'Знакомства: выбирайте программу для первого года работы по тому, как она помогает расти, а не по зарплате. 22.7% новых медсестёр уходят в первый год (NSI). Хорошая программа помогает остаться.',
  ai:'AI: AI теперь помогает с бумагами медсестры — а уход остаётся за людьми. Станьте в отделении тем, кто лучше всех разбирается в AI. Таких всего около 10%. Их замечают при найме (McKinsey). У вас получится!'
},
fin: {
  craft:'Мастерство: хорошо знать SQL (язык, на котором задают вопросы данным) — его хотят 31 из 40 вакансий. Умейте строить денежные модели. Потом ведите прогноз одного отдела от начала до конца. С AI-репетитором SQL — это недели, а не годы.',
  background:'Опыт: диплом бакалавра по цифровому предмету. CFA можно не получать: его требуют 0 из 40 вакансий. Это экономит время и деньги.',
  proof:'Доказательства: два экрана с графиками (BI) на настоящих данных. Плюс страница об отчёте, который вы сделали автоматическим. С часами и ошибками «до» и «после». Это сильнее сертификата.',
  voice:'Заявить о себе: станьте человеком отдела по деньгам — и пусть это слышат. Показывайте на их встречах прогноз и разницу между планом и итогом.',
  niche:'Ниша: цельтесь в смешанные роли и роли «партнёра» (советника руководителей). Просто аналитиков становится меньше (−21%). Смешанным ролям платят $138K–$180,600, партнёру — до $276,250.',
  network:'Знакомства: с первого дня на новой работе станьте своим в отделе. Ходите на их встречи и ведите их прогноз. Так растут быстрее всего.',
  ai:'AI: AI уже собирает часть отчётов аналитика, а советы людям остаются за вами. Освойте одну программу для планов (Anaplan: 15 из 40 вакансий). Сделайте помощника на Python, которым правда пользуются.'
},
creator: {
  craft:'Мастерство: делать видео от начала до конца — идея, съёмка, монтаж, публикация. Компании ищут одного человека, который умеет всё. Premiere называют 21 из 40 вакансий, CapCut — 15 из 40.',
  background:'Опыт: ведите простую тетрадь о рынке. Записывайте зарплаты и инструменты (и AI тоже) из новых вакансий. Проверяйте её каждый квартал. Лицензии здесь нет — эта тетрадь держит вас впереди.',
  proof:'Доказательства: портфолио, где у каждого видео есть цифры. Просмотры, сколько смотрели, и сколько людей кликнули (CTR). Его просят 22 из 40 вакансий. Это ваш диплом!',
  voice:'Заявить о себе: пусть вас легко найти. Рассказывайте, как вы делали свои видео, с цифрами. Нанимают тех, чьи мысли уже видели.',
  niche:'Ниша: одна роль и одна отрасль. Лицо в кадре, реклама или тема, за которую бренды доплачивают. Каждая найденная нами вакансия выше $100K хочет такое редкое умение.',
  network:'Знакомства: заранее познакомьтесь с теми, кто нанимает, и с авторами вашей темы. Пусть и они узнают вас. Тогда предложения придут сами.',
  ai:'AI: AI уже делает часть работы видеографа — подписи, варианты, черновой монтаж. Оценивать результат остаётся вам. Сегодня AI называют только 2 из 40 вакансий. Платят за ваш вкус — его нет ни у одной программы.'
},
analyst: {
  craft:'Мастерство: SQL (язык, на котором задают вопросы данным) на рабочем уровне (43 из 46 вакансий). Python для работы с данными (18 из 46). И одна проверка идеи от начала до конца. Просите ChatGPT или Claude объяснять каждый запрос.',
  background:'Опыт: хорошая новость — лицензия не нужна! Начать можно раньше. Мы каждый квартал читаем новые вакансии. За одну проверку вакансий с AI-инструментами стало 6 из 46.',
  proof:'Доказательства: один экран с графиками, который помог кому-то решить. Напишите, кто им пользовался и что выбрал. И одно решение, которое вы изменили, — с цифрами.',
  voice:'Заявить о себе: рассказывайте о решении, которое вы изменили, а не о графике. Во всех 7 вакансиях по стратегии и операциям главное — работа с людьми. Графики рисует AI, а решения принимают люди.',
  niche:'Ниша: выберите работу осознанно. Шесть работ на этой карте платят от $51K до $300K. А называются все одинаково — «аналитик». Верный выбор — самый короткий путь наверх.',
  network:'Знакомства: подавайтесь туда, где вы помогаете принимать решения. Знакомьтесь с теми, кто решает. Попробуйте аналитика продукта, инженера аналитики, стратегию и операции.',
  ai:'AI: AI уже пишет часть отчётов аналитика, а проверка — за человеком. Пользуйтесь AI сами (это просят 6 из 46 вакансий). Пусть один повторяющийся отчёт собирается сам. Покажите: AI написал, вы проверили.'
},
dataanalyst: {
  craft:'Мастерство: SQL (язык, на котором задают вопросы данным) на рабочем уровне (24 из 24 вакансий по данным). Python для работы с данными (15 из 24). И одна проверка идеи от начала до конца. Это вся основа — лишние курсы не нужны.',
  background:'Опыт: хорошая новость — лицензия не нужна! Статистика США (BLS) относит эту работу к специалистам по данным. Средняя зарплата $120,230, рост +35%. Мы каждый квартал читаем новые вакансии.',
  proof:'Доказательства: один экран с графиками, который помог кому-то решить. Напишите, кто им пользовался и что выбрал. И одна проверка идеи, которую вы провели от начала до конца.',
  voice:'Заявить о себе: показывайте, как вы работаете с AI. Поделитесь одной работой: черновик написал AI, а вы проверили. Сейчас берут на работу именно за такую проверку.',
  niche:'Ниша: выберите работу осознанно. Четыре работы на этой карте платят от $60K до $300K. Названия похожи, но работы разные. Верный выбор экономит время.',
  network:'Знакомства: подавайтесь туда, где вы помогаете принимать решения. Знакомьтесь с теми, кто решает. Попробуйте аналитика продукта и инженера аналитики.',
  ai:'AI: AI уже делает часть работы аналитика данных. Проверка остаётся за человеком. Сегодня AI просят 2 из 24 вакансий по данным, и это меняется. Пусть один повторяющийся отчёт собирается сам. Покажите шаги.'
},
businessanalyst: {
  craft:'Мастерство: Excel выше базы (7 из 7 вакансий для новичков). SQL (язык, на котором задают вопросы данным) на рабочем уровне (19 из 22). И один улучшенный рабочий процесс с цифрой. AI поможет выучить и то, и другое.',
  background:'Опыт: хорошая новость — лицензия не нужна! Статистика США (BLS) называет эту работу «аналитик управления» (management analyst). Средняя зарплата $101,860, рост +10%, около 94,100 вакансий в год.',
  proof:'Доказательства: одна ваша идея на одной странице. Что вы предложили, какая цифра за этим и что попросили. И один процесс, который вы ускорили, — сколько времени сэкономили.',
  voice:'Заявить о себе: рассказывайте о решении, которое вы изменили, а не о бумаге. Во всех 7 вакансиях по стратегии и операциям главное — работа с руководителями и командами.',
  niche:'Ниша: выберите вид работы осознанно. Две работы на этой карте платят от $51K до $194K. Название у них одно. Кто знает разницу, доходит до большей зарплаты.',
  network:'Знакомства: знакомьтесь с теми, кто принимает решения. В 7 из 7 вакансий по стратегии и операциям главное — работа с руководителями и их командами.',
  ai:'AI: AI уже делает часть бумажной работы бизнес-аналитика (это просят 4 из 22 вакансий в бизнесе). Думать остаётся человеку. Пусть одна скучная задача делается сама. Только проверяйте результат.'
},
aicreator: {
  craft:'Мастерство: вы — режиссёр каждой работы: ваша идея, ваш стиль, ваши решения. Если AI сделает это без вас, это стоит $0. Клиенты платят за ваш вкус.',
  background:'Опыт: лицензии здесь нет. Ваше доказательство — честная игра. Помечайте AI-контент на каждой платформе. И никаких фальшивых AI-отзывов — за этим следит FTC (служба США за честную торговлю).',
  proof:'Доказательства: прайс-лист с двумя оплаченными работами. И пара «до/после»: одна и та же реклама, снятая человеком и сделанная AI. Клиент сразу видит пользу.',
  voice:'Заявить о себе: настоящее лицо или имя, по которому клиент может позвонить. Здесь доверие начинается с того, что вас можно проверить. Среди AI-подделок это редкость.',
  niche:'Ниша: ОДНА понятная работа. Настоящее лицо с AI-помощниками на одну тему. Или AI-видео для одного типа брендов. «AI-контент вообще» — это не работа.',
  network:'Знакомства: свой список клиентов и друзья-авторы, с которыми вы пробуете идеи. Подписчики в приложении — только на время. А список — ваш навсегда.',
  ai:'AI: делайте всё сами — сценарий, создание, монтаж, пометка. Меньше часа на одну работу. Если клиент хочет, озвучьте на второй язык (инструменты знают 175 языков).'
},
healthadmin: {
  craft:'Мастерство: управлять настоящей частью клиники — деньгами, зданием и людьми. И показывать, каких цифр вы добились. Именно за это повышают.',
  background:'Опыт: ровно тот документ, который просят на вашей работе, — диплом, сертификат или лицензия штата. Ничего лишнего — так вы начнёте раньше.',
  proof:'Доказательства: результаты, которые проверил кто-то другой. Деньги, которые вы сберегли. Проверка, которую прошли. Очередь, которую наладили.',
  voice:'Заявить о себе: будьте руководителем, который объясняет цифры просто — владельцам, врачам и своей команде.',
  niche:'Ниша: выберите одно место осознанно — больница, частный врач, дом престарелых или страховая. Не «вся медицина сразу».',
  network:'Знакомства: знайте тех, кто нанимает и проверяет эту работу. Руководители больниц, владельцы клиник, проверяющие, руководители программ стажировки после учёбы (fellowship).',
  ai:'AI: AI уже делает часть работы офиса клиники — согласования со страховой, расписание, список отказов по счетам. Управлять этими помощниками — работа человека, и за неё платят.'
},
datascientist: {
  craft:'Мастерство: Python, SQL и статистика на рабочем уровне. Плюс одна модель, которую вы построили и запустили. Модели просят 33 из 42 вакансий.',
  background:'Опыт: только тот диплом, который правда просят на вашей работе. Магистратуру или PhD хотят 16 из 42 вакансий. Больше дипломов покупать не нужно — лучше делайте проекты.',
  proof:'Доказательства: три проекта, которые любой поймёт за пять минут. Модель, проверка идеи и один AI-проект с его оценкой. Они скажут больше, чем диплом.',
  voice:'Заявить о себе: пишите так, чтобы менеджер понял, что делать. Каждый отчёт заканчивайте решением — простыми словами.',
  niche:'Ниша: выберите ОДНУ роль — работа с продуктом, базовые модели, машинное обучение (ML) или исследования. Выбирайте по настоящим вакансиям, а не по списку курсов.',
  network:'Знакомства: люди, которые могут сказать, что изменила ваша работа. Коллеги по продукту, те, кто нанимает, одно сообщество в вашей сфере.',
  ai:'AI: AI уже пишет часть кода за специалиста по данным. Проверка остаётся за человеком — за неё и платят. Запустите один AI-проект. Запишите, как вы его проверяли.'
},
truckdriver: {
  craft:'Вы везёте любой груз: крепление, раскачка цистерны, два прицепа на ветру. Ваш осмотр перед рейсом замечает то, что другие пропускают. Таким водителям доверяют лучшие грузы.',
  background:'CDL класса A со всеми отметками (H, N, T), TWIC (пропуск в порты), свежая медкарта. И чистая история вождения. Каждая отметка открывает новые грузы.',
  proof:'Папка, которая говорит за вас: чистые проверки, письма начальников, ваша лучшая неделя — мили, оплата, ночи дома.',
  voice:'Другие водители знают вас по группам в интернете — это нынешнее CB-радио. Вашим советам о маршрутах и фирмах доверяют.',
  niche:'Один вид работы, выбранный осознанно: местный LTL (небольшие общие грузы), цистерна, тяжёлые грузы или свой грузовик. Не «что диспетчер пришлёт».',
  network:'Диспетчеры, начальники по безопасности и две фирмы, которые взяли бы вас на этой неделе. Плюс знакомые из школы, профсоюза или OOIDA (объединение владельцев грузовиков).',
  ai:'На часть маршрутов приходят грузовики без водителя. Следите за этой картой, как за погодой. Знайте, какие маршруты они заняли в этом квартале. И что это значит для вашей работы — тогда можно заранее планировать.'
},
counselor: {
  craft:'Мастерство: одно направление и один метод, освоенный по-настоящему. CBT, DBT, EMDR (виды терапии) или мотивационное интервью — так пишут в вакансиях. За глубину платят больше.',
  background:'Опыт: полная лицензия. Магистратура на 60 кредитов, которую принимает ваш штат. От 2,000 до 3,000 часов практики с наставником. Сданный экзамен NCE или NCMHCE. Её просят 30 из 44 вакансий.',
  proof:'Доказательства: папка для лицензии, где ничего не потеряно. Часы учебной практики (100 + 600). Часы с наставником, записанные каждую неделю. И ваша копия каждой страницы.',
  voice:'Заявить о себе: будьте консультантом, которого советуют коллеги. Делитесь вердиктом и направлением там, где их видят врачи и школьные консультанты. Здесь клиенты приходят по советам.',
  niche:'Ниша: ОДНА группа людей и ОДИН метод — травма, пары, подростки или зависимости, с лицензией. Клиники платят $75,000–$135,000 за такое умение, а не просто за умение слушать.',
  network:'Знакомства: люди, которые присылают вам клиентов. Психиатры, семейные врачи, школьные консультанты, бывшие наставники. Позже Counseling Compact (договор штатов; работает в 11 штатах) поможет охватить больше.',
  ai:'AI: AI уже делает часть бумажной работы консультанта — записи и черновики в вашей программе (в вакансиях встречаются Epic, Netsmart Avatar, AthenaOne). Сама терапия остаётся за человеком. В Иллинойсе и Неваде так теперь требует закон.'
}
};

/* ---------- STRAND GOALS — seat overrides (sparse; package-backed) ----------
   The NICHE override for every seat comes from BIGGOALS (see header).
   These two seats carry a background goal of their own in the package:
   the NP door and the CRNA door are license-shaped, unlike the floor. */
var DNA_SEAT_GOALS = {
  np: { background:'Experience: the NP (a nurse who can diagnose and prescribe) board certificate in your area, the state NP license, and the DEA permit for strong medicines. Psych NP job posts pay $200K–$257K. The license is worth most in Full Practice states (27 + DC). There an NP works fully alone.' },
  crna: { background:'Experience: for a CRNA (nurse who gives anesthesia), the doctorate is the license. Middle pay is $236,590. For other roles, save your money — skip the DNP degree. Top job posts require it in 0 of 16.' }
};
var DNA_SEAT_GOALS_RU = {
  np: { background:'Опыт: сертификат NP (медсестра, которая ставит диагноз и выписывает лекарства) по направлению, лицензия NP в штате и разрешение DEA на сильные лекарства. Психиатрическим NP платят $200K–$257K. Лицензия ценнее всего в штатах полной практики (27 + DC): там NP работает полностью сам.' },
  crna: { background:'Опыт: для медсестры-анестезиста (CRNA) докторская степень — и есть лицензия. Средняя зарплата — $236,590. В других ролях берегите деньги: докторская программа DNP не нужна. Лучшие вакансии требуют её в 0 из 16.' }
};

/* ===== AI PRODUCT MANAGER — DNA tags + goals (Nov 1 2026).
   Assigned after the literals (dna.js loads fully before app.js
   runs). Spec §7: aipm step tags, quest tags, 7 strand goals
   EN+RU, and per-seat background overrides — the seat's real
   screen, since this profession has no license and no degree gate. */
DNA_STEP_TAGS.aipm = {
  'apm-g1':'craft', 'apm-g2':'niche', 'apm-g3':'background', 'apm-g4':'craft',
  'apm-p1':'ai', 'apm-p2':'ai', 'apm-p3':'craft', 'apm-p4':'craft', 'apm-p5':'proof', 'apm-p6':'proof',
  'apm-k1':'niche', 'apm-k2':'proof', 'apm-k3':'niche', 'apm-k4':'background'
};
Object.assign(DNA_QUEST_TAGS, {
  'aipm-q1':'niche', 'aipm-q2':'niche', 'aipm-q3':'craft', 'aipm-q4':'ai', 'aipm-q5':'niche',
  'aipm-q6':'proof', 'aipm-q7':'network', 'aipm-q8':'voice', 'aipm-q9':'proof', 'aipm-q10':'niche'
});
DNA_GOALS.aipm = {
  craft:'Craft: product sense — knowing what people need. You decide what the AI in your product should do. And you explain why, in words anyone gets. Job posts check for this.',
  background:'Experience: years of product work at your level. 20 of 26 job posts that give a number ask 5+ years. Plus knowing how tech works. No certificate replaces that. Only 2 of 42 job posts need a CS degree — skip that detour.',
  proof:'Proof: AI you helped launch, plus one set of test questions for it (evals) with scores. Teams that check AI look for exactly this. A resume line can’t fake it.',
  voice:'Voice: explain in simple words how your AI works and where it fails. Be the PM whose writing helps everyone understand the AI.',
  niche:'Niche: pick ONE role — the core AI others build on, AI testing, one AI feature, AI for business clients, or user growth. Choose from real job posts. Not “AI PM in general.”',
  network:'Network: people who hire and judge this work — hiring managers, AI teams, big customers. Meet them by showing finished work, not by sending applications.',
  ai:'AI help: AI already writes part of a PM’s documents; judging AI quality stays human. Build a testing loop: test questions, your hand grades, and auto-grades checked against them. Quality is in your hands.'
};
DNA_GOALS_RU.aipm = {
  craft:'Мастерство: чутьё на продукт — понимать, что нужно людям. Вы решаете, что должен делать AI в продукте. И объясняете почему — словами, понятными каждому. Это проверяют вакансии.',
  background:'Опыт: годы работы над продуктами на вашем уровне. 20 из 26 вакансий, где есть число, просят 5+ лет. Плюс понимание, как устроена техника. Сертификат это не заменит. Диплом по компьютерным наукам нужен только в 2 из 42 вакансий — на него можно не тратить годы.',
  proof:'Доказательства: AI, который вы помогли запустить, и набор проверочных вопросов к нему с оценками. Именно это ищут команды, которые проверяют AI. Строчкой в резюме это не подделать.',
  voice:'Заявить о себе: простыми словами объясняйте, как работает ваш AI и где он ошибается. Станьте менеджером продукта, после текстов которого всем понятно, как ведёт себя AI.',
  niche:'Ниша: выберите ОДНУ роль — основа AI для других команд, проверка AI, одна AI-функция, AI для компаний или рост пользователей. Выбирайте по вакансиям. Не «AI-менеджер продукта вообще».',
  network:'Знакомства: люди, которые нанимают и оценивают эту работу, — руководители, команды AI, крупные клиенты. Знакомьтесь через готовую работу, а не через отклики.',
  ai:'AI: AI уже пишет часть документов менеджера продукта, а оценка качества AI — за человеком. Наладьте проверку: вопросы, ваши оценки вручную и автооценки, сверенные с ними. Качество — в ваших руках.'
};
Object.assign(DNA_SEAT_GOALS, {
  platpm: { background:'Experience: owning the core AI others build on takes ten years of tech product work. Voyager asks 10+ years, 5+ running platforms. No certificate can skip that — but every year counts.' },
  evalpm: { background:'Experience: for AI testing, show grades you can explain. A test set you built, and scores you can stand behind. No course sells this. Job posts care about the work, not a certificate.' },
  featpm: { background:'Experience: for one AI feature, AI features you launched plus years of work. Microsoft asks 5+ years and a computer-science or engineering degree, “or equivalent experience.”' },
  entpm: { background:'Experience: for AI sold to businesses, know the industry itself. One company checks for real investing-research experience. Harvey takes 2–4+ years in product or engineering.' },
  growpm: { background:'Experience: for user growth, years of growth work. Anthropic asks 6–10 years; its API role asks 6+, mostly in growth. The tests you ran are your proof.' },
  apmpm: { background:'Experience: beginner programs check three things. A CS degree (Databricks), being a new grad (Square), or 0–2 years of any work (Addepar). Other places don’t have a clear rule yet. A good start if you’re new.' }
});
Object.assign(DNA_SEAT_GOALS_RU, {
  platpm: { background:'Опыт: чтобы отвечать за основу AI для других команд, нужно десять лет работы над техническими продуктами. Voyager просит 10+ лет, из них 5+ — с общими системами. Сертификат это не заменит — но каждый год идёт в зачёт.' },
  evalpm: { background:'Опыт: для проверки AI — оценки, которые вы можете объяснить. Набор тестов, который вы сделали, и баллы, за которые можете ручаться. Курс этого не продаст. Вакансии смотрят на работу, а не на бумагу.' },
  featpm: { background:'Опыт: для одной AI-функции — запущенные AI-функции и годы работы. Microsoft просит 5+ лет и диплом по компьютерным наукам или инженерии «или равный опыт».' },
  entpm: { background:'Опыт: для AI, который продают компаниям, важно знать саму отрасль. Одна компания ищет настоящий опыт в изучении инвестиций. Harvey берёт людей с опытом в продукте или инженерии от 2–4+ лет.' },
  growpm: { background:'Опыт: для роста числа пользователей — годы такой работы. Anthropic просит 6–10 лет, на роль API — 6+, в основном в росте. Ваши проверки идей — это и есть доказательство.' },
  apmpm: { background:'Опыт: программы для новичков смотрят на три вещи. Диплом по компьютерным наукам (Databricks), недавний выпуск (Square) или 0–2 года любой работы (Addepar). У других чётких правил пока нет. Хороший вход для новичка.' }
});
