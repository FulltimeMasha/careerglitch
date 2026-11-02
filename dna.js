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
  cybersecurity: {'craft':'Craft: learn to spot real attack alarms fast and get them right. Practice at home first, then at work. Step by step, this becomes your job.', 'background':'Experience: some real time working in IT, plus Security+ (a beginner security certificate). We read 35 job posts. These two things get you in.', 'proof':'Proof: a diary of your home practice and three short attack reports in plain English. A boss should get them in five minutes.', 'voice':'Voice: once a week, explain one attack in simple words, where people can see it. Soon people know your name — even before you apply.', 'niche':'Niche: pick one area and stick with it. SOC (watching for attacks), finding attacks, cloud safety, or hacking with permission. Not “all of cybersecurity”.', 'network':'Network: get to know people who do this job and people who hire for it. Then they know you before you even need the job.', 'ai':'AI help: let AI tools help you sort alarms and write faster. 20.4% of beginner job posts already ask for this. And that share doubles fast.'},
  electrician: {'craft':'Craft: neat, quick work that follows the code (the safety rules for wiring). Pipes for wires, power panels, fixing faults — so the boss doesn’t need to re-check. Service job posts pay $45–$65/hr for this.', 'background':'Experience: the journeyman license (lets you work on your own; 24 of 36 job posts ask for it). Later, the master license. Start with your apprentice card. Hours without it don’t count — so get it first!', 'proof':'Proof: a notebook of your hours, by type of work. Shops, factories, repairs, homes — all your 8,000 hours. The mix you can show helps pick your next job.', 'voice':'Voice: let the bosses and shop owners in your city know your name. When there aren’t enough workers, they call people they know.', 'niche':'Niche: pick one kind of work that pays extra. Data centers, EV chargers, solar + batteries, generators or control wiring.', 'network':'Network: know your JATC (apprentice school) or program, your union hall, and two bosses who hire for the next level. New spots open once a year. People with friends hear first.', 'ai':'AI help: be good with the tech side. Read the drawings and BIM (a computer model of the whole building) the workshop builds from. Be the one who checks the model against the real wall.'},
  hvac: {'craft':'Craft: find problems so well that your boss trusts you. Find what’s broken, show why, fix it the first time. Business job posts pay $35–$45/hr for that.', 'background':'Experience: start with EPA 608 Universal (a permit to handle cooling gas; 13 of 27 job posts ask for it). Then your state license, if your state has one. After enough hours, NATE (a tech certificate) in your area.', 'proof':'Proof: a notebook of systems you fixed — type, size (tonnage), problem, fix. Enough to show 2+ years of real repair work. Big companies read it like a resume.', 'voice':'Voice: be the tech people ask for by name. Known techs pick where they work. Unknown techs get pushed to sell more.', 'niche':'Niche: pick one area — big-building service, refrigeration, or controls. The best pay we found is always in one area. General jobs pay less.', 'network':'Network: get to know two business contractors and one controls company early. People, not job posts, help you move up from home jobs.', 'ai':'AI help: be good with smart building tech. Really learn one BAS platform (software that runs a building’s heating and cooling). Also learn the remote tools that send you on jobs.'},
  plumber: {'craft':'Craft: work so clean a master signs it without fixing anything. Find leaks — don’t guess. Pipe joints pass the check the first time.', 'background':'Experience: the journeyman license (lets you work on your own; every top job post we found asks for it). Later, the master license. Log your hours from day one. That license is your treasure.', 'proof':'Proof: a notebook of your hours by type of work, for your whole training. Plus one certificate people pay for — backflow testing is the classic.', 'voice':'Voice: be the plumber your neighbors know by name. In repair work, people call the plumber they know. Apps have to pay to get those calls.', 'niche':'Niche: pick one direction you like. Warranty repairs, business buildings, or factory pipefitting. Pipefitting job posts pay $40.64–$54/hr.', 'network':'Network: know your UA local (the plumbers’ union) or group, and two masters who hire. Keep an eye on your state’s rule changes, so nothing surprises you.', 'ai':'AI help: get good with tools that make your day easier. Pipe cameras, press tools, and the job app’s notes about your work. Whoever reads that data wins.'},
law: {
  craft:'Craft: learn to make smart choices at work. Top job posts call this the #1 people skill — 7+ of 25 say so. Also learn Office / 365, one program at a time.',
  background:'Experience: the papers senior jobs ask for. A bachelor’s degree (19 of 21 senior job posts). A paralegal certificate (lawyer’s helper; 14 of 21). CIPP/US (a privacy certificate) if you pick privacy (3 of 3).',
  proof:'Proof: show on paper how much time you saved. Pick one task you do with AI. Write down the time before and after. Top job posts love this proof.',
  voice:'Voice: let bosses see what you’re great at. Share your verdict card and your results where hiring managers read.',
  niche:'Niche: pick ONE area of law and go deep. Senior jobs start at 5+ years in one area. The top level asks for 10+. Every year counts!',
  network:'Network: aim at firms that pay experts well. Gibson Dunn pays $150K–$200K. Cooley pays $135,200–$176,800.',
  ai:'AI help: learn the main tools of your path — Relativity, Carta, iManage. Set up one task that AI helps with. 7 of 25 lawyer job posts ask for AI skills.'
},
cpa: {
  craft:'Craft: really learn GAAP (the U.S. rules for counting money) — ASC 606, 842, 718. Get good at Excel, past the basics. 8 of 8 beginner job posts check for pivot tables and VLOOKUP.',
  background:'Experience: a bachelor’s degree (52 of 52 job posts) → the CPA exam → the license. Pick your state’s cheapest way: 120 credits + 2 years, if allowed.',
  proof:'Proof: one page that good job posts look for. Show a task you made better, with hours before and after. Plus one proof piece for your area.',
  voice:'Voice: be the person people think of for one thing. Share your verdict and proof where bosses and partners read.',
  niche:'Niche: ONE industry, deep. The top pay goes to these: factory costs, app subscriptions (SaaS), firms taxed through their owners, and very rich clients (HNW).',
  network:'Network: start at an accounting firm. It opens the way into FDD (checking a company before someone buys it). 11 job posts ask for that firm time.',
  ai:'AI help: be the money-software person. NetSuite (18 of 52 job posts), Workiva for SEC reports (for public companies), and some month-end automation.'
},
nurse: {
  craft:'Craft: grow into a charge nurse — the one who leads the shift. The next step up, assistant nurse manager, pays $61.91–$97.72/hr. Charge-nurse time gets you there.',
  background:'Experience: get your RN license the cheaper way. 16 of 16 job posts ask for it. The ADN (a short nursing degree) costs $5,472. Keep BLS (basic life support, 15 of 16) and ACLS (advanced, 10 of 16) up to date.',
  proof:'Proof: a resume that shows your nursing area. List your years there and your certificates. Make sure each line can be checked.',
  voice:'Voice: let charge nurses and managers see your nursing area. Share your verdict card. The money follows the special skill.',
  niche:'Niche: pick ONE area by month 18–24: ICU (intensive care), ED (emergency) or OR (surgery). Experienced nurses there get $10K–$25K bonuses when hired.',
  network:'Network: pick a residency (a training program for your first year) by how far it helps you grow, not by first pay. 22.7% of new RNs quit in year one (NSI). A good program keeps you going.',
  ai:'AI help: be the AI pro on your floor. Only about 10% of nurses get there. Bosses notice them when hiring (McKinsey). You can be one of them!'
},
fin: {
  craft:'Craft: learn SQL (a language for asking data questions) really well — 31 of 40 job posts want it. Learn to build money models. Then own one team’s forecast from start to end.',
  background:'Experience: a bachelor’s degree in a numbers subject. You can skip the CFA: 0 of 40 job posts require it. Save your money for what jobs really ask.',
  proof:'Proof: two BI dashboards (screens with charts) on real data. Plus one page about a report you made automatic. Show the hours and mistakes before and after.',
  voice:'Voice: be the team’s money person, and let people hear it. Show your forecast and the gap between plan and result at their meetings.',
  niche:'Niche: aim for hybrid and partner roles. Plain “analyst” jobs are getting fewer (−21%). Hybrid roles pay $138K–$180,600. Partner roles pay up to $276,250.',
  network:'Network: from day one in your new job, be the team’s go-to person. Join their meetings. Own their forecast.',
  ai:'AI help: learn one planning tool really well (Anaplan: 15 of 40 job posts). Build one real Python helper that people actually use.'
},
creator: {
  craft:'Craft: make a whole video by yourself — idea, filming, editing, posting. Companies want one person who can do it all. Premiere is named in 21 of 40 job posts, CapCut in 15 of 40.',
  background:'Experience: keep a simple market notebook. Write down pay, tools and AI tools from new job posts. Check it every quarter. There’s no license here, so this notebook is your proof.',
  proof:'Proof: a portfolio where each video shows its numbers. Views, how long people watched, and CTR (how many clicked). 22 of 40 job posts ask for one. It’s your diploma!',
  voice:'Voice: make it easy to find you. Share how you made your videos, with the numbers. Bosses hire people whose thinking they’ve already seen.',
  niche:'Niche: pick one role and one industry. Be the face on camera, the ads person, or a topic brands pay extra for. Every job post above $100K we found wants a rare skill like these.',
  network:'Network: get to know bosses and creators in your area before you need a job. And let them get to know you too.',
  ai:'AI help: use AI tools for captions, versions and first edits. Then judge what they made. Only 2 of 40 job posts name AI tools today. Your good taste is what they pay for — no tool has it.'
},
analyst: {
  craft:'Craft: SQL (a language for asking data questions) at work level (43 of 46 job posts). Python for working with data (18 of 46). One test run from start to end.',
  background:'Experience: good news — no license needed! We check new job posts every quarter. In one check, posts asking for AI tools grew to 6 of 46.',
  proof:'Proof: one dashboard (a screen with charts) that helped someone decide. Say who used it and what they chose. Add one choice you changed, with numbers.',
  voice:'Voice: talk about a choice you changed, not a chart you made. All 7 strategy & operations job posts say the main job is working with people.',
  niche:'Niche: pick your job on purpose. The six jobs on this map pay $51K to $300K. They all have the same name: “analyst”.',
  network:'Network: apply to jobs where you help make choices. Get to know the people who decide. Try product analyst, analytics engineer, strategy & operations.',
  ai:'AI help: use AI tools yourself (6 of 46 job posts ask). Make one repeating report run by itself. Show your steps: AI wrote it, you checked it.'
},
dataanalyst: {
  craft:'Craft: SQL (a language for asking data questions) at work level (24 of 24 data job posts). Python for working with data (15 of 24). One test run from start to end.',
  background:'Experience: good news — no license needed! The U.S. job counters (BLS) group this with data scientists. Middle pay is $120,230, and jobs grow +35%. We check new job posts every quarter.',
  proof:'Proof: one dashboard (a screen with charts) that helped someone decide. Say who used it and what they chose. Add one test you ran from start to end.',
  voice:'Voice: show people how you work with AI. Share one project: AI wrote the first draft, and you checked it. Let them see your checking.',
  niche:'Niche: pick your job on purpose. The four jobs on this map pay $60K to $300K. Their names sound alike, but the jobs are different.',
  network:'Network: apply to jobs where you help make choices. Get to know the people who decide. Try product analyst and analytics engineer.',
  ai:'AI help: use AI tools yourself. Today 2 of 24 data job posts ask, and that’s changing. Make one repeating report run by itself. Show your steps.'
},
businessanalyst: {
  craft:'Craft: Excel past the basics (7 of 7 beginner job posts). SQL (a language for asking data questions) at work level (19 of 22). Fix one work process and show the number.',
  background:'Experience: good news — no license needed! BLS (the U.S. job counters) calls this work management analysts. Middle pay $101,860, +10% growth, about 94,100 openings a year.',
  proof:'Proof: write one idea you pushed for on one page. What you chose, the number behind it, what you asked for. Add one process you made faster, with time saved.',
  voice:'Voice: talk about a choice you changed, not a paper you wrote. All 7 strategy & operations job posts say the main job is working with managers and teams.',
  niche:'Niche: pick your type of job on purpose. The two jobs on this map pay $51K to $194K. They have the same name.',
  network:'Network: get to know the people who make choices. 7 of 7 strategy & operations job posts say the main job is working with managers and top bosses.',
  ai:'AI help: use AI tools for paperwork (4 of 22 business job posts ask). Make one boring task run by itself. Just keep checking the results.'
},
aicreator: {
  craft:'Craft: you are the director of every piece — your idea, your style, your choices. If AI could make it without you, it pays $0.',
  background:'Experience: no license here. Your proof is playing fair. Mark AI content on every platform. Never post fake AI reviews — the FTC (the U.S. fair-trade office) watches for that.',
  proof:'Proof: a price list with two paid jobs on it. Plus a before-and-after: the same ad, filmed by a person and made by AI.',
  voice:'Voice: a real face, or a name clients can call. Here, trust starts when people can check who you are.',
  niche:'Niche: pick ONE clear job. A real face with AI helpers for one topic. Or AI videos for one kind of brand. “AI content” in general isn’t a job.',
  network:'Network: a list of clients that’s yours, plus creator friends you test ideas with. Followers on an app are only borrowed. Your list is yours to keep.',
  ai:'AI help: do the whole thing yourself — script, make, edit, label. Under an hour per piece. If a client wants, dub it in a second language (the tools know 175 languages).'
},
healthadmin: {
  craft:'Craft: run a real part of a clinic — money, building and people. Then show the numbers you got.',
  background:'Experience: get exactly the paper your job asks for — a degree, a certificate, or a state licence. Nothing extra.',
  proof:'Proof: collect results that someone else checked. Money you saved, an inspection you passed, a waiting line you fixed.',
  voice:'Voice: be the boss who explains numbers simply — to owners, doctors and your own team.',
  niche:'Niche: pick one place on purpose — a hospital, a doctor’s office, a nursing home or an insurer. Not "all of healthcare."',
  network:'Network: know who hires and checks this work. Hospital bosses, office owners, inspectors, fellowship (training program) leaders.',
  ai:'AI help: be in charge of the computer helpers at work. Insurance approvals, the schedule, the list of denied bills. Run them — don’t do them by hand.'
},
datascientist: {
  craft:'Craft: Python, SQL and statistics at work level. Plus one model you built and launched. 33 of 42 job posts ask for model building.',
  background:'Experience: just the degree your job really asks for. 16 of 42 job posts want a master’s or PhD. No need to buy more degrees.',
  proof:'Proof: three projects anyone can understand in five minutes. A model, a test, and one AI project with its score.',
  voice:'Voice: write so a manager knows what to do. End every report with the choice it helps make, in simple words.',
  niche:'Niche: pick ONE role — product, core, ML, or research. Choose by real job posts, not by a course list.',
  network:'Network: people who can say what your work changed. Product teammates, hiring managers, one group in your field.',
  ai:'AI help: use AI like a helper, and always check its work. Launch one AI project. Write down how you checked it.'
},
truckdriver: {
  craft:'You can haul any load — tying it down, a sloshing tanker, two trailers in the wind. Your check before each trip catches what others miss.',
  background:'Class A CDL with all the extra stamps (H, N, T), TWIC (a port pass), a fresh medical card. And a clean driving record.',
  proof:'A folder that speaks for you: clean inspections, letters from bosses, your best week — miles, pay, nights at home.',
  voice:'Other drivers know your name from online groups — today’s CB radio. They trust your tips on routes and companies.',
  niche:'One kind of driving, picked on purpose — local LTL (small shared loads), tanker, heavy loads or your own truck. Not "whatever dispatch sends".',
  network:'Dispatchers, safety bosses and two companies that would hire you this week. Plus friends from school, the union or OOIDA (a truck owners’ group).',
  ai:'Watch the self-driving truck map like the weather. Know which routes got robot trucks this quarter. Know what it means for your job, so you can plan ahead.'
},
counselor: {
  craft:'Craft: one area with one named method, done really well. CBT, DBT, EMDR (types of therapy) or motivational interviewing — the words job posts use.',
  background:'Experience: the full license. A 60-credit master’s your state board accepts. 2,000–3,000 hours of practice with a supervisor. Pass the NCE or NCMHCE exam. Thirty of 44 job posts ask for it.',
  proof:'Proof: a license folder with no missing pieces. Training hours (100 + 600). Supervisor hours written down every week. And your own copy of every page.',
  voice:'Voice: be the counselor others recommend. Share your verdict and your area where doctors and school counselors see it. Recommendations are how people find you here.',
  niche:'Niche: ONE group of people and ONE method — trauma, couples, teens, or addiction, with a license. Offices pay $75,000–$135,000 for that special skill, not just for listening.',
  network:'Network: people who send clients your way. Psychiatrists, family doctors, school counselors, past supervisors. Later, the Counseling Compact (a deal between states; 11 states live) helps you reach more.',
  ai:'AI help: let AI do the paperwork — notes and first drafts in your records app (Epic, Netsmart Avatar, AthenaOne show up in job posts). Keep the therapy itself human. In Illinois and Nevada, the law now says so.'
}
};

/* ---------- STRAND GOALS — profession level, RU (digits identical) ---------- */
var DNA_GOALS_RU = {
  cybersecurity: {'craft':'Мастерство: научитесь быстро и точно замечать настоящие тревоги об атаках. Сначала тренируйтесь дома, потом на работе. Шаг за шагом это станет вашей профессией.', 'background':'Опыт: немного настоящей работы в IT плюс Security+ (начальный сертификат по защите). Мы прочитали 35 вакансий. С этими двумя вещами вас возьмут.', 'proof':'Доказательства: дневник домашних тренировок и три коротких отчёта об атаках на простом английском. Начальник должен понять их за пять минут.', 'voice':'Заявить о себе: раз в неделю простыми словами рассказывайте об одной атаке — открыто. Скоро ваше имя будут знать ещё до отклика.', 'niche':'Ниша: выберите одно направление. SOC (слежка за атаками), поиск атак, защита облака или взлом с разрешения. Не «вся кибербезопасность сразу».', 'network':'Знакомства: познакомьтесь с теми, кто уже работает в этой сфере и нанимает людей. Пусть они знают вас ещё до того, как вам нужна работа.', 'ai':'AI: пусть AI помогает вам разбирать тревоги и писать быстрее. Это уже просят 20,4% вакансий для новичков. И таких вакансий быстро становится больше.'},
  electrician: {'craft':'Мастерство: аккуратная и быстрая работа по code (правилам безопасности для проводки). Трубы для проводов, щитки, поиск поломок — так, чтобы начальник не перепроверял. За это платят $45–$65/hr.', 'background':'Опыт: лицензия journeyman (с ней можно работать самому; её просят 24 из 36 вакансий). Потом лицензия master (мастер). Начните с карты ученика. Часы без неё не считаются — поэтому сначала она!', 'proof':'Доказательства: тетрадь ваших часов по видам работ. Магазины, заводы, ремонты, дома — все ваши 8,000 часов. Такой набор поможет выбрать следующую работу.', 'voice':'Заявить о себе: пусть начальники и владельцы фирм в вашем городе знают вас по имени. Когда людей не хватает, звонят знакомым.', 'niche':'Ниша: выберите одну работу, за которую платят больше. Дата-центры, зарядки для электромобилей (EV), солнечные панели с батареями, генераторы или проводка для управления техникой.', 'network':'Знакомства: знайте свой JATC (школу для учеников) или программу, свой профсоюз и двух начальников, которые берут на уровень выше. Новые места открываются раз в год. Кто знаком с людьми, узнаёт первым.', 'ai':'AI: разбирайтесь в технике своего дела. Читайте чертежи и BIM (модель всего здания в компьютере), по которым работает мастерская. Будьте тем, кто сверяет модель с настоящей стеной.'},
  hvac: {'craft':'Мастерство: находите поломки так, чтобы начальник вам доверял. Найти, показать причину, починить с первого раза. За это платят $35–$45/hr.', 'background':'Опыт: сначала EPA 608 Universal (разрешение работать с охлаждающим газом; его просят 13 из 27 вакансий). Потом лицензия штата, если она там нужна. Когда наберёте часы — NATE (сертификат техника) по вашему направлению.', 'proof':'Доказательства: тетрадь систем, которые вы чинили, — тип, мощность (тоннаж), поломка, ремонт. Чтобы было видно 2+ года настоящей работы. Большие фирмы читают её как резюме.', 'voice':'Заявить о себе: будьте мастером, которого зовут по имени. Известные мастера сами выбирают, где работать. Неизвестных заставляют больше продавать.', 'niche':'Ниша: выберите одно направление — обслуживание больших зданий, холодильники (refrigeration) или автоматика (controls). Самые большие зарплаты всегда в одном направлении. Общие работы платят меньше.', 'network':'Знакомства: заранее познакомьтесь с двумя фирмами для бизнеса и одной фирмой по автоматике. От работы по домам дальше растут через людей, а не через вакансии.', 'ai':'AI: разбирайтесь в умной технике зданий. Хорошо выучите одну платформу BAS (программа, которая управляет отоплением и охлаждением здания). И программы, которые присылают вам вызовы.'},
  plumber: {'craft':'Мастерство: работа такая аккуратная, что мастер подписывает её без исправлений. Протечки находите, а не угадываете. Соединения труб проходят проверку с первого раза.', 'background':'Опыт: лицензия journeyman (с ней сантехник работает сам; её просят все лучшие вакансии). Потом лицензия master (мастер). Записывайте часы с первого дня. Эта лицензия — ваше сокровище.', 'proof':'Доказательства: тетрадь часов по видам работ за всю учёбу. Плюс один сертификат, за который платят. Классика — проверка обратных клапанов (backflow).', 'voice':'Заявить о себе: будьте сантехником, которого соседи знают по имени. В ремонте звонят знакомому мастеру. Приложениям такие вызовы приходится покупать.', 'niche':'Ниша: выберите одно направление по душе. Ремонт по гарантии, работа для бизнеса или трубы на заводах (pipefitting). За трубы на заводах платят $40.64–$54/hr.', 'network':'Знакомства: знайте местный профсоюз UA или ассоциацию и двух мастеров, которые нанимают. Следите за новыми правилами вашего штата, чтобы ничего не застало врасплох.', 'ai':'AI: освойте инструменты, которые облегчают день. Камеры для труб, пресс-инструменты и заметки рабочего приложения о вашей работе. Кто читает эти данные, тот и выигрывает.'},
law: {
  craft:'Мастерство: учитесь принимать умные решения на работе (business judgment). В лучших вакансиях это качество №1 — так пишут 7+ из 25. И осваивайте Office / 365, по одной программе.',
  background:'Опыт: документы, которые просят на старших должностях. Бакалавр (bachelor’s, 19 из 21). Сертификат помощника юриста (paralegal, 14 из 21). CIPP/US (сертификат по защите личных данных), если выберете эту тему (3 из 3).',
  proof:'Доказательства: покажите на бумаге, сколько времени вы сэкономили. Возьмите одну задачу, которую делаете с AI. Запишите время «до» и «после». Лучшие вакансии очень это ценят.',
  voice:'Заявить о себе: пусть работодатели видят, в чём вы сильны. Делитесь карточкой вердикта и результатами там, где их читают те, кто нанимает.',
  niche:'Ниша: выберите ОДНУ область права и углубитесь в неё. Старшие должности начинаются с 5+ лет в одной области. Верхний уровень просит 10+. Каждый год идёт в зачёт!',
  network:'Знакомства: цельтесь в фирмы, которые хорошо платят специалистам. Gibson Dunn платит $150K–$200K. Cooley платит $135,200–$176,800.',
  ai:'AI: освойте главные программы вашего направления — Relativity, Carta, iManage. Настройте одну задачу, где помогает AI. Навык AI просят 7 из 25 вакансий юристов.'
},
cpa: {
  craft:'Мастерство: по-настоящему выучите GAAP (правила учёта денег в США) — ASC 606, 842, 718. И хорошо освойте Excel. Все 8 из 8 вакансий для новичков проверяют pivot tables и VLOOKUP.',
  background:'Опыт: диплом бакалавра (bachelor’s, 52 из 52 вакансий) → экзамен CPA → лицензия. Выберите самый дешёвый путь в вашем штате: 120 учебных кредитов + 2 года, если можно.',
  proof:'Доказательства: одна страница, которую ищут хорошие вакансии. Задача, которую вы улучшили, с часами «до» и «после». Плюс одна работа по вашему направлению.',
  voice:'Заявить о себе: пусть о вас думают, когда нужна одна конкретная тема. Делитесь вердиктом и доказательствами там, где их читают начальники и партнёры.',
  niche:'Ниша: ОДНА отрасль, глубоко. Больше всего платят за такие: затраты на заводах, подписки на программы (SaaS), фирмы с налогом через владельцев, очень богатые клиенты (HNW).',
  network:'Знакомства: начните в бухгалтерской фирме. Это открывает путь в FDD — проверку компании перед её покупкой. 11 вакансий просят опыт в такой фирме.',
  ai:'AI: станьте главным по денежным программам. NetSuite (18 из 52 вакансий), Workiva для отчётов на биржу (SEC) и часть автоматизации в конце месяца.'
},
nurse: {
  craft:'Мастерство: дорастите до старшей медсестры смены (charge nurse) — той, кто ведёт смену. Следующая ступень, помощник менеджера, получает $61.91–$97.72/hr. Опыт старшей медсестры ведёт туда.',
  background:'Опыт: лицензия медсестры (RN) недорогим путём. Её просят 16 из 16 вакансий. Короткая программа (ADN) стоит $5,472. Держите в силе BLS (базовая помощь при остановке сердца, 15 из 16) и ACLS (расширенная, 10 из 16).',
  proof:'Доказательства: резюме, которое показывает ваше направление. Годы работы в нём и ваши сертификаты. Каждую строку можно проверить.',
  voice:'Заявить о себе: пусть старшие медсёстры и менеджеры видят ваше направление. Делитесь карточкой вердикта. Деньги идут за особым умением.',
  niche:'Ниша: выберите ОДНО направление к месяцу 18–24 — реанимация (ICU), приёмное (ED) или операционная (OR). Опытным медсёстрам там платят бонус $10K–$25K при найме.',
  network:'Знакомства: выбирайте резидентуру (программу на первый год работы) по тому, как она помогает расти, а не по первой зарплате. 22.7% новых медсестёр уходят в первый год (NSI). Хорошая программа помогает остаться.',
  ai:'AI: станьте в отделении тем, кто лучше всех разбирается в AI. Таких медсестёр всего около 10%. Их замечают при найме (McKinsey). У вас получится!'
},
fin: {
  craft:'Мастерство: хорошо выучите SQL (язык, на котором задают вопросы данным) — его хотят 31 из 40 вакансий. Научитесь строить денежные модели. Потом ведите прогноз одного отдела от начала до конца.',
  background:'Опыт: бакалавр (bachelor’s) по цифровому предмету. CFA можно не получать: его требуют 0 из 40 вакансий. Берегите деньги для того, что правда просят.',
  proof:'Доказательства: два дашборда (BI — экраны с графиками) на настоящих данных. Плюс страница об отчёте, который вы сделали автоматическим. С часами и ошибками «до» и «после».',
  voice:'Заявить о себе: станьте человеком отдела по деньгам — и пусть это слышат. Показывайте на их встречах прогноз и разницу между планом и итогом.',
  niche:'Ниша: цельтесь в роли гибрида (hybrid) и партнёра (partner). Просто «аналитиков» (analyst) становится меньше (−21%). Гибриду платят $138K–$180,600, партнёру — до $276,250.',
  network:'Знакомства: с первого дня на новой работе станьте своим в отделе. Ходите на их встречи и ведите их прогноз.',
  ai:'AI: хорошо освойте одну программу для планов (Anaplan: 15 из 40 вакансий). И сделайте один помощник на Python, которым люди правда пользуются.'
},
creator: {
  craft:'Мастерство: делайте видео целиком сами — идея, съёмка, монтаж, публикация. Компании ищут человека, который умеет всё. Premiere называют 21 из 40 вакансий, CapCut — 15 из 40.',
  background:'Опыт: ведите простую тетрадь о рынке. Записывайте, сколько платят и какие инструменты (и AI тоже) просят новые вакансии. Проверяйте её каждый квартал. Лицензии здесь нет, так что эта тетрадь — ваше доказательство.',
  proof:'Доказательства: портфолио, где у каждого видео есть цифры. Просмотры, сколько смотрели, и CTR (сколько людей кликнули). Его просят 22 из 40 вакансий. Это ваш диплом!',
  voice:'Заявить о себе: пусть вас легко найти. Рассказывайте, как вы делали свои видео, с цифрами. Нанимают тех, чьи мысли уже видели.',
  niche:'Ниша: одна роль и одна отрасль. Лицо в кадре, реклама или тема, за которую бренды доплачивают. Каждая найденная нами вакансия выше $100K хочет такое редкое умение.',
  network:'Знакомства: познакомьтесь с теми, кто нанимает, и с авторами вашей темы заранее. И пусть они тоже узнают вас.',
  ai:'AI: пусть AI делает подписи, варианты и черновой монтаж. А вы оценивайте, что получилось. Сегодня инструменты AI называют только 2 из 40 вакансий. Платят за ваш вкус — его нет ни у одной программы.'
},
analyst: {
  craft:'Мастерство: SQL (язык, на котором задают вопросы данным) на рабочем уровне (43 из 46 вакансий). Python для работы с данными (18 из 46). И одна проверка идеи от начала до конца.',
  background:'Опыт: хорошая новость — лицензия не нужна! Мы каждый квартал читаем новые вакансии. За одну проверку вакансий с AI-инструментами стало 6 из 46.',
  proof:'Доказательства: один экран с графиками, который помог кому-то решить. Напишите, кто им пользовался и что выбрал. И одно решение, которое вы изменили, — с цифрами.',
  voice:'Заявить о себе: рассказывайте о решении, которое вы изменили, а не о графике. Во всех 7 вакансиях strategy & operations (стратегия и операции) главное — работа с людьми.',
  niche:'Ниша: выберите работу осознанно. Шесть работ на этой карте платят от $51K до $300K. А называются все одинаково — «analyst».',
  network:'Знакомства: подавайтесь туда, где вы помогаете принимать решения. Знакомьтесь с теми, кто решает. Попробуйте product analyst, analytics engineer, strategy & operations.',
  ai:'AI: пользуйтесь AI сами (это просят 6 из 46 вакансий). Сделайте так, чтобы один повторяющийся отчёт собирался сам. Покажите шаги: AI написал, вы проверили.'
},
dataanalyst: {
  craft:'Мастерство: SQL (язык, на котором задают вопросы данным) на рабочем уровне (24 из 24 вакансий по данным). Python для работы с данными (15 из 24). И одна проверка идеи от начала до конца.',
  background:'Опыт: хорошая новость — лицензия не нужна! Статистика США (BLS) относит эту работу к data scientists. Средняя зарплата $120,230, рост +35%. Мы каждый квартал читаем новые вакансии.',
  proof:'Доказательства: один экран с графиками, который помог кому-то решить. Напишите, кто им пользовался и что выбрал. И одна проверка идеи, которую вы провели от начала до конца.',
  voice:'Заявить о себе: показывайте, как вы работаете с AI. Поделитесь одной работой: черновик написал AI, а вы проверили. Пусть видят вашу проверку.',
  niche:'Ниша: выберите работу осознанно. Четыре работы на этой карте платят от $60K до $300K. Названия похожи, но работы разные.',
  network:'Знакомства: подавайтесь туда, где вы помогаете принимать решения. Знакомьтесь с теми, кто решает. Попробуйте product analyst и analytics engineer.',
  ai:'AI: пользуйтесь AI сами. Сегодня это просят 2 из 24 вакансий по данным, и это меняется. Пусть один повторяющийся отчёт собирается сам. Покажите шаги.'
},
businessanalyst: {
  craft:'Мастерство: Excel выше базы (7 из 7 вакансий для новичков). SQL (язык, на котором задают вопросы данным) на рабочем уровне (19 из 22). И один улучшенный рабочий процесс с цифрой.',
  background:'Опыт: хорошая новость — лицензия не нужна! Статистика США (BLS) называет эту работу management analysts. Средняя зарплата $101,860, рост +10%, около 94,100 вакансий в год.',
  proof:'Доказательства: одна ваша идея на одной странице. Что вы предложили, какая цифра за этим и что попросили. И один процесс, который вы ускорили, — сколько времени сэкономили.',
  voice:'Заявить о себе: рассказывайте о решении, которое вы изменили, а не о бумаге. Во всех 7 вакансиях strategy & operations главное — работа с руководителями и командами.',
  niche:'Ниша: выберите вид работы осознанно. Две работы на этой карте платят от $51K до $194K. Название у них одно.',
  network:'Знакомства: знакомьтесь с теми, кто принимает решения. В 7 из 7 вакансий strategy & operations главное — работа с руководителями и их командами.',
  ai:'AI: пользуйтесь AI для бумажной работы (это просят 4 из 22 вакансий в бизнесе). Пусть одна скучная задача делается сама. Только проверяйте результат.'
},
aicreator: {
  craft:'Мастерство: вы — режиссёр каждой работы: ваша идея, ваш стиль, ваши решения. Если AI сделает это без вас, это стоит $0.',
  background:'Опыт: лицензии здесь нет. Ваше доказательство — честная игра. Помечайте AI-контент на каждой платформе. И никаких фальшивых AI-отзывов — за этим следит FTC (служба США за честную торговлю).',
  proof:'Доказательства: прайс-лист с двумя оплаченными работами. И пара «до/после»: одна и та же реклама, снятая человеком и сделанная AI.',
  voice:'Заявить о себе: настоящее лицо или имя, по которому клиент может позвонить. Здесь доверие начинается с того, что вас можно проверить.',
  niche:'Ниша: ОДНА понятная работа. Настоящее лицо с AI-помощниками на одну тему. Или AI-видео для одного типа брендов. «AI-контент вообще» — это не работа.',
  network:'Знакомства: свой список клиентов и друзья-авторы, с которыми вы пробуете идеи. Подписчики в приложении — только на время. А список — ваш навсегда.',
  ai:'AI: делайте всё сами — сценарий, создание, монтаж, пометка. Меньше часа на одну работу. Если клиент хочет, озвучьте на второй язык (инструменты знают 175 языков).'
},
healthadmin: {
  craft:'Мастерство: управляйте настоящей частью клиники — деньгами, зданием и людьми. И показывайте, каких цифр добились.',
  background:'Опыт: ровно тот документ, который просят на вашей работе, — диплом, сертификат или лицензия штата. Ничего лишнего.',
  proof:'Доказательства: результаты, которые проверил кто-то другой. Деньги, которые вы сберегли. Проверка, которую прошли. Очередь, которую наладили.',
  voice:'Заявить о себе: будьте руководителем, который объясняет цифры просто — владельцам, врачам и своей команде.',
  niche:'Ниша: выберите одно место осознанно — больница, частный врач, дом престарелых или страховая. Не «вся медицина сразу».',
  network:'Знакомства: знайте тех, кто нанимает и проверяет эту работу. Руководители больниц, владельцы клиник, проверяющие, руководители программ fellowship (стажировок после учёбы).',
  ai:'AI: управляйте компьютерными помощниками на работе. Согласования со страховой, расписание, список отказов по счетам. Пусть работают они, а не ваши руки.'
},
datascientist: {
  craft:'Мастерство: Python, SQL и статистика на рабочем уровне. Плюс одна модель, которую вы построили и запустили. Модели просят 33 из 42 вакансий.',
  background:'Опыт: только тот диплом, который правда просят на вашей работе. Магистратуру или PhD хотят 16 из 42 вакансий. Больше дипломов покупать не нужно.',
  proof:'Доказательства: три проекта, которые любой поймёт за пять минут. Модель, проверка идеи и один AI-проект с его оценкой.',
  voice:'Заявить о себе: пишите так, чтобы менеджер понял, что делать. Каждый отчёт заканчивайте решением — простыми словами.',
  niche:'Ниша: выберите ОДНУ роль — product, core, ML или research. Выбирайте по настоящим вакансиям, а не по списку курсов.',
  network:'Знакомства: люди, которые могут сказать, что изменила ваша работа. Коллеги по продукту, те, кто нанимает, одно сообщество в вашей сфере.',
  ai:'AI: работайте с AI как с помощником и всегда проверяйте его. Запустите один AI-проект. Запишите, как вы его проверяли.'
},
truckdriver: {
  craft:'Вы везёте любой груз: крепление, раскачка цистерны, два прицепа на ветру. Ваш осмотр перед рейсом замечает то, что другие пропускают.',
  background:'CDL класса A со всеми отметками (H, N, T), TWIC (пропуск в порты), свежая медкарта. И чистая история вождения.',
  proof:'Папка, которая говорит за вас: чистые проверки, письма начальников, ваша лучшая неделя — мили, оплата, ночи дома.',
  voice:'Другие водители знают вас по группам в интернете — это нынешнее CB-радио. Вашим советам о маршрутах и фирмах доверяют.',
  niche:'Один вид работы, выбранный осознанно: местный LTL (небольшие общие грузы), цистерна, тяжёлые грузы или свой грузовик. Не «что диспетчер пришлёт».',
  network:'Диспетчеры, начальники по безопасности и две фирмы, которые взяли бы вас на этой неделе. Плюс знакомые из школы, профсоюза или OOIDA (объединение владельцев грузовиков).',
  ai:'Следите за картой беспилотных грузовиков, как за погодой. Знайте, на какие маршруты пришли роботы в этом квартале. И что это значит для вашей работы — тогда можно заранее планировать.'
},
counselor: {
  craft:'Мастерство: одно направление и один метод, освоенный по-настоящему. CBT, DBT, EMDR (виды терапии) или мотивационное интервью — так пишут в вакансиях.',
  background:'Опыт: полная лицензия. Магистратура на 60 кредитов, которую принимает ваш штат. От 2,000 до 3,000 часов практики с наставником. Сданный экзамен NCE или NCMHCE. Её просят 30 из 44 вакансий.',
  proof:'Доказательства: папка для лицензии, где ничего не потеряно. Часы учебной практики (100 + 600). Часы с наставником, записанные каждую неделю. И ваша копия каждой страницы.',
  voice:'Заявить о себе: будьте консультантом, которого советуют коллеги. Делитесь вердиктом и направлением там, где их видят врачи и школьные консультанты. Здесь клиенты приходят по советам.',
  niche:'Ниша: ОДНА группа людей и ОДИН метод — травма, пары, подростки или зависимости, с лицензией. Клиники платят $75,000–$135,000 за такое умение, а не просто за умение слушать.',
  network:'Знакомства: люди, которые присылают вам клиентов. Психиатры, семейные врачи, школьные консультанты, бывшие наставники. Позже Counseling Compact (договор штатов; работает в 11 штатах) поможет охватить больше.',
  ai:'AI: отдайте AI бумажную работу — записи и черновики в вашей программе (в вакансиях встречаются Epic, Netsmart Avatar, AthenaOne). Саму терапию оставьте человеку. В Иллинойсе и Неваде так теперь требует закон.'
}
};

/* ---------- STRAND GOALS — seat overrides (sparse; package-backed) ----------
   The NICHE override for every seat comes from BIGGOALS (see header).
   These two seats carry a background goal of their own in the package:
   the NP door and the CRNA door are license-shaped, unlike the floor. */
var DNA_SEAT_GOALS = {
  np: { background:'Experience: the NP (nurse practitioner) board certificate in your area, the state NP license, and the DEA permit for strong medicines. Psych NP job posts pay $200K–$257K. The license is worth most in Full Practice states (27 + DC). There an NP can work fully alone.' },
  crna: { background:'Experience: for a CRNA (nurse who gives anesthesia), the doctorate is the license. Middle pay is $236,590. For other roles, save your money — skip the DNP degree. Top job posts require it in 0 of 16.' }
};
var DNA_SEAT_GOALS_RU = {
  np: { background:'Опыт: сертификат медсестры-практика (NP board certification) по направлению, лицензия штата (NP) и разрешение DEA на сильные лекарства. Психиатрическим NP (psych NP) платят $200K–$257K. Лицензия ценнее всего там, где NP работает полностью сам (Full Practice, 27 + DC).' },
  crna: { background:'Опыт: для медсестры-анестезиста (CRNA) докторская степень — и есть лицензия. Средняя зарплата — $236,590. В других ролях берегите деньги: DNP (докторская программа) не нужна. Лучшие вакансии требуют её в 0 из 16.' }
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
  craft:'Craft: good product sense, which job posts check for. You decide what the AI feature should do. And you can explain why, in words anyone gets.',
  background:'Experience: years of product work at your level. 20 of 26 job posts that give a number ask 5+ years. Plus knowing how tech works. No certificate can replace that. Only 2 of 42 job posts need a CS degree.',
  proof:'Proof: AI features you launched and one set of evals (tests that check AI answers) with scores. Evals jobs look for this. A line on a resume can’t fake it.',
  voice:'Voice: write the quality page and mistake notes in simple words. Be the PM whose writing helps everyone understand the AI.',
  niche:'Niche: pick ONE role — platform, evals, feature, enterprise, or growth. Choose it from real job posts. Not “AI PM in general.”',
  network:'Network: people who hire and judge this work — hiring managers, AI teams, big customers. Meet them by showing finished work, not by sending applications.',
  ai:'AI help: run the evals loop — a test set, grades by hand, and auto-grades checked against them. Then AI quality is something you control, not just hope for.'
};
DNA_GOALS_RU.aipm = {
  craft:'Мастерство: хорошее чутьё на продукт — его проверяют вакансии. Вы решаете, что должна делать AI-функция. И можете объяснить почему, словами, понятными каждому.',
  background:'Опыт: годы работы над продуктами на вашем уровне. 20 из 26 вакансий, где есть число, просят 5+ лет. Плюс понимание, как устроена техника. Сертификат это не заменит. Диплом по компьютерным наукам нужен только в 2 из 42 вакансий.',
  proof:'Доказательства: запущенные AI-функции и один набор evals (тестов, которые проверяют ответы AI) с оценками. Именно это ищут на ролях evals. Строчкой в резюме это не подделать.',
  voice:'Заявить о себе: пишите страницу о качестве и заметки об ошибках простыми словами. Станьте PM, после текстов которого всем понятно, как ведёт себя AI.',
  niche:'Ниша: выберите ОДНУ роль — platform, evals, feature, enterprise или growth. Выбирайте по настоящим вакансиям. Не «AI PM вообще».',
  network:'Знакомства: люди, которые нанимают и оценивают эту работу, — менеджеры, команды AI, крупные клиенты. Знакомьтесь через готовую работу, а не через отклики.',
  ai:'AI: ведите цикл evals — набор тестов, оценки вручную и автооценки, сверенные с ними. Тогда качество AI зависит от вас, а не от удачи.'
};
Object.assign(DNA_SEAT_GOALS, {
  platpm: { background:'Experience: platform roles take ten years of tech product work. Voyager asks 10+ years, 5+ running platforms. No certificate can skip that — but every year counts.' },
  evalpm: { background:'Experience: for evals, show grades you can explain. A test set you built, and scores you can stand behind. No course sells this. Job posts care about the work, not a certificate.' },
  featpm: { background:'Experience: for feature roles, AI features you launched plus years of work. Microsoft asks 5+ years and a computer-science or engineering degree, “or equivalent experience.”' },
  entpm: { background:'Experience: for enterprise, know the industry itself. One company checks for real investing-research experience. Harvey takes 2–4+ years in product or engineering.' },
  growpm: { background:'Experience: for growth, years of growth work. Anthropic asks 6–10 years; its API role asks 6+, mostly in growth. The tests you ran are your proof.' },
  apmpm: { background:'Experience: beginner programs check three things. A CS degree (Databricks), being a new grad (Square), or 0–2 years of any work (Addepar). Other places don’t have a clear rule yet.' }
});
Object.assign(DNA_SEAT_GOALS_RU, {
  platpm: { background:'Опыт: для platform нужно десять лет работы над техническими продуктами. Voyager просит 10+ лет, из них 5+ — с платформами. Сертификат это не заменит — но каждый год идёт в зачёт.' },
  evalpm: { background:'Опыт: для evals — оценки, которые вы можете объяснить. Набор тестов, который вы сделали, и баллы, за которые можете ручаться. Курс этого не продаст. Вакансии смотрят на работу, а не на бумагу.' },
  featpm: { background:'Опыт: для feature — запущенные AI-функции и годы работы. Microsoft просит 5+ лет и диплом по компьютерным наукам или инженерии «или равный опыт».' },
  entpm: { background:'Опыт: для enterprise важно знать саму отрасль. Одна компания ищет настоящий опыт в изучении инвестиций. Harvey берёт людей с опытом в продукте или инженерии от 2–4+ лет.' },
  growpm: { background:'Опыт: для growth — годы работы над ростом. Anthropic просит 6–10 лет, на роль API — 6+, в основном в росте. Ваши проведённые проверки идей — это и есть доказательство.' },
  apmpm: { background:'Опыт: программы для новичков смотрят на три вещи. Диплом по компьютерным наукам (Databricks), недавний выпуск (Square) или 0–2 года любой работы (Addepar). У других чётких правил пока нет.' }
});
