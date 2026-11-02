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
  cybersecurity: {'craft':'Your craft goal: sort real alerts fast and right. Practice in a home lab first, then on the job. In the end, investigations become your work.', 'background':'Your experience goal: real IT work time plus Security+. We checked 35 job posts. These two things are what get you in.', 'proof':'Your proof goal: a lab log and three incident reports in plain English. A hiring manager should read them in five minutes.', 'voice':'Your voice goal: explain one attack a week, in plain words, in public. Then people know your name before you apply.', 'niche':'Your niche goal: pick one specialty on purpose. SOC (watching for attacks), finding attacks, cloud, or hacking with permission. Never “cybersecurity” in general.', 'network':'Your network goal: know working analysts and hiring managers in your specialty. They should know your name before you need the job.', 'ai':'Your AI goal: use AI tools to sort and write faster than others. 20.4% of beginner job posts already ask for it. That share doubles fast.'},
  electrician: {'craft':'Your craft goal: clean, fast work that follows the code (the wiring rules). Conduit, panels, finding faults — a foreman trusts it without re-checking. Service job posts pay $45–$65/hr for this.', 'background':'Your experience goal: the journeyman license (named in 24 of 36 job posts). Then the master license. Get your apprentice card first. Hours without it do not count.', 'proof':'Your proof goal: an hours log split by work type. Commercial, industrial, service, residential — all your 8,000 hours. The mix you can prove decides your next job.', 'voice':'Your voice goal: be known by foremen and shop owners in your city. When workers are short, they call names they know.', 'niche':'Your niche goal: one specialty that job posts pay extra for. Data centers, EV charging, solar + storage, generators or controls wiring.', 'network':'Your network goal: know your JATC (apprentice school) or program, your union hall, and two contractors who hire one level up. Spots open once a year. Connected people hear first.', 'ai':'Your AI goal: own the tech side of the trade. Read the drawings and models (BIM, a digital model of the building) the prefab shop uses. Be the journeyman who checks the model against the wall.'},
  hvac: {'craft':'Your craft goal: diagnosis a service manager trusts. Find the fault, prove it, fix it once. Commercial job posts pay $35–$45/hr for that record.', 'background':'Your experience goal: EPA 608 Universal first (a refrigerant permit; named in 13 of 27 job posts). Then the state license, if your state has one. After the hours, NATE (a tech certificate) in your specialty.', 'proof':'Your proof goal: a log of systems — type, tonnage, fault, fix. It should prove 2+ years of real diagnosis. Commercial shops read this log like a resume.', 'voice':'Your voice goal: be the tech homeowners and building managers ask for by name. Known techs choose their shops. Unknown techs chase sales quotas.', 'niche':'Your niche goal: one specialty — commercial service, refrigeration, or controls. All the top pay ranges we found are in a specialty. None are general jobs.', 'network':'Your network goal: know two commercial contractors and one controls shop early. You move up from home jobs through people, not job posts.', 'ai':'Your AI goal: own the smart tech. Learn one BAS platform (software that runs a building’s systems) properly. Also learn the remote-monitoring tools that send you out.'},
  plumber: {'craft':'Your craft goal: work a master signs without redoing it. Find leaks, don’t guess. Joints pass inspection the first time.', 'background':'Your experience goal: the journeyman license (named in every top job post we found). Then the master license. Register your hours from day one. The license is your main asset.', 'proof':'Your proof goal: an hours log by work type for your whole apprenticeship. Plus one certificate people pay for — backflow testing is the classic.', 'voice':'Your voice goal: be the plumber your neighborhood knows by name. In service work, known techs get the calls. Platforms have to pay for those calls.', 'niche':'Your niche goal: pick one branch on purpose. Guaranteed service, commercial, or industrial pipefitting. Pipefitting job posts pay $40.64–$54/hr.', 'network':'Your network goal: know your UA local (the plumbers’ union) or association chapter. Know two masters who hire. Watch your state board’s rule changes, so they don’t surprise you.', 'ai':'Your AI goal: own the tools that make a licensed tech’s day better. Sewer cameras, press tools, and the dispatch software’s data on your work. The software helps whoever reads it.'},
law: {
  craft:'Your craft goal: learn to make good business decisions on real work. Top job posts name this people skill #1 — 7+ of 25. Under it: Office / 365, one program at a time.',
  background:'Your experience goal: the papers senior jobs check. A bachelor’s degree (19 of 21 senior job posts). A paralegal certificate (14 of 21). CIPP/US (a privacy certificate) if you go into privacy (3 of 3).',
  proof:'Your proof goal: show on paper the time you saved. Take one AI workflow. Write down the time before and after. Top job posts ask for this proof.',
  voice:'Your voice goal: let employers see your specialty. Share your verdict card and your results in your practice area where hiring managers read.',
  niche:'Your niche goal: pick ONE practice area and go deep. Senior jobs start at 5+ years in a single area. The top level asks for 10+.',
  network:'Your network goal: aim at firms that pay specialists well. Gibson Dunn pays $150K–$200K. Cooley pays $135,200–$176,800.',
  ai:'Your AI goal: learn the main tools of your track — Relativity, Carta, iManage. Build one AI workflow. 7 of 25 attorney job posts ask for AI skills directly.'
},
cpa: {
  craft:'Your craft goal: really learn GAAP (the U.S. accounting rules) — ASC 606, 842, 718. Learn Excel past the basics. 8 of 8 staff job posts check for pivot tables and VLOOKUP.',
  background:'Your experience goal: a bachelor’s degree (52 of 52 job posts) → the CPA exam → the license. Take your state’s cheapest route: 120 credits + 2 years, where allowed.',
  proof:'Your proof goal: one page that good job posts look for. A process you improved, with hours before and after. Plus one proof piece for your niche.',
  voice:'Your voice goal: be the person known for one specialty. Share your verdict and proof where controllers and partners read.',
  niche:'Your niche goal: ONE industry, deep. Top pay ranges name theirs: factory cost accounting, SaaS revenue, pass-through firms (taxed through owners), rich clients (HNW).',
  network:'Your network goal: start at an accounting firm. It opens the way into FDD (checking firms before a sale). 11 job posts outside firms ask for firm experience directly.',
  ai:'Your AI goal: own the systems. NetSuite (18 of 52 job posts), Workiva for SEC reports, and some of the month-end automation. Be the systems person.'
},
nurse: {
  craft:'Your craft goal: reach charge-nurse level and lead the shift. The assistant nurse manager job post pays $61.91–$97.72/hr. Charge-nurse experience is the way into that job.',
  background:'Your experience goal: get the RN license the cheap way. 16 of 16 job posts ask for it. Take the ADN (short nursing degree) at $5,472. Keep BLS (basic life support, 15 of 16) and ACLS (advanced, 10 of 16) current.',
  proof:'Your proof goal: a resume that proves your specialty. List your years in it and your certificates. Each line should be confirmed.',
  voice:'Your voice goal: let charge nurses and managers see your specialty. Share your verdict card. The money follows the specialty.',
  niche:'Your niche goal: pick ONE specialty by month 18–24: ICU (intensive care), ED (emergency) or OR (surgery). Experienced specialty nurses get $10K–$25K sign-on bonuses.',
  network:'Your network goal: choose a residency (first-year training program) by its career ladder, not first pay. 22.7% of new RNs leave in year one (NSI). A structured residency protects you.',
  ai:'Your AI goal: become your unit’s AI expert. Only about 10% of nurses get there. That top group stands out at hiring (McKinsey).'
},
fin: {
  craft:'Your craft goal: learn SQL (the database language) deeply — 31 of 40 job posts. Learn modeling past the basics. Then own one team’s forecast from start to finish.',
  background:'Your experience goal: a bachelor’s degree in a numbers field. Skip the CFA: 0 of 40 job posts require it. Spend on what job posts name.',
  proof:'Your proof goal: two BI dashboards (business reports) on real data. Plus one proof page: a report you automated. Show hours and error rate before and after.',
  voice:'Your voice goal: be the team’s finance person, out loud. Show your forecast and variance (plan vs. result) at their operations reviews.',
  niche:'Your niche goal: aim for hybrid and partner roles. Plain “analyst” jobs are shrinking (−21%). Hybrid roles pay $138K–$180,600. Partner roles pay up to $276,250.',
  network:'Your network goal: from day one in the new role, be the team’s person. Join their operations reviews. Own their forecast.',
  ai:'Your AI goal: learn one planning platform deeply (Anaplan: 15 of 40 job posts). Build one real Python automation that people actually use.'
},
creator: {
  craft:'Your craft goal: run the whole loop alone — idea, filming, editing, posting. Staff job posts want one person who does it all. Premiere is named in 21 of 40, CapCut in 15 of 40.',
  background:'Your experience goal: keep your market file fresh. It lists pay ranges, tools and AI tools from new staff job posts. Check it every quarter. This job has no license, so this file is your proof.',
  proof:'Your proof goal: a portfolio where every piece shows its numbers. Views, watch time, and CTR (the share who clicked). 22 of 40 staff job posts ask for a portfolio. It is your diploma.',
  voice:'Your voice goal: be easy to find as a maker. Post breakdowns of your own content, with numbers. Managers hire creators whose thinking they’ve already seen.',
  niche:'Your niche goal: own one role and one industry. Be the on-camera face, the paid-ads person, or a niche brands pay extra for. Every job post above $100K we found adds a rare skill like these.',
  network:'Your network goal: know hiring managers and staff creators in your niche before you need a job. Make sure they know you too.',
  ai:'Your AI goal: lead the AI tools for captions, versions and first cuts. Judge what they make. Only 2 of 40 job posts name AI tools today. Your judgment is what they pay for — no tool replaces it.'
},
analyst: {
  craft:'Your craft goal: SQL (the database language) at working level (43 of 46 job posts). Python for analysis (18 of 46). One experiment run from start to finish.',
  background:'Your experience goal: no license is needed here. We recheck your field every quarter against new job posts. In one check, posts naming AI tools rose to 6 of 46.',
  proof:'Your proof goal: one dashboard (a report with charts) that helps a decision. Say who opened it and what they decided. Add one decision you changed, with numbers.',
  voice:'Your voice goal: lead with a decision you changed, not a dashboard you built. All 7 strategy & operations job posts name one main duty. It is working with the people who use your work.',
  niche:'Your niche goal: choose your job on purpose. The six jobs on this map pay $51K to $300K. All are called “analyst”.',
  network:'Your network goal: apply by name to jobs where you help decide. Know the decision makers. Aim at product analyst, analytics engineer, strategy & operations.',
  ai:'Your AI goal: use AI tools yourself (named in 6 of 46 job posts). Automate one repeating report. Show the steps: AI drafted it, you checked it.'
},
dataanalyst: {
  craft:'Your craft goal: SQL (the database language) at working level (24 of 24 data job posts). Python for analysis (15 of 24). One experiment run from start to finish.',
  background:'Your experience goal: no license is needed here. Official U.S. job stats (BLS) count this as data scientist work. Median pay is $120,230, growth is +35%. We recheck your field every quarter against new job posts.',
  proof:'Your proof goal: one dashboard (a report with charts) that helps a decision. Say who opened it and what they decided. Add one experiment you ran from start to finish.',
  voice:'Your voice goal: show in public how you work with AI. Share one analysis: AI wrote the first draft, you checked it. Make your checking easy to see.',
  niche:'Your niche goal: choose your job on purpose. The four jobs on this map pay $60K to $300K. Their titles sound alike, but the jobs differ.',
  network:'Your network goal: apply by name to jobs where you help decide. Know the decision makers. Aim at product analyst and analytics engineer.',
  ai:'Your AI goal: use AI tools yourself. Today 2 of 24 data job posts name them, and that number is changing. Automate one repeating report. Show your steps.'
},
businessanalyst: {
  craft:'Your craft goal: Excel past the basics (7 of 7 junior job posts). SQL (the database language) at working level (19 of 22). Map and improve one process, with the number.',
  background:'Your experience goal: no license is needed here. BLS (the U.S. labor stats office) files this work under management analysts. Median $101,860, +10% growth, about 94,100 openings a year.',
  proof:'Your proof goal: write one decision you pushed for as a one-page brief. What you decided, the number behind it, what you asked for. Add one process you improved, with time saved.',
  voice:'Your voice goal: lead with a decision you changed, not a document you wrote. All 7 strategy & operations job posts name one core duty: working with managers and teams.',
  niche:'Your niche goal: pick your job type on purpose. The two jobs on this map pay $51K to $194K. They share one title.',
  network:'Your network goal: know the people who make decisions. 7 of 7 strategy & operations job posts name one core duty: working with managers and top bosses.',
  ai:'Your AI goal: use AI tools yourself for document work (named in 4 of 22 business job posts). Automate one repeating task. Still check its results.'
},
aicreator: {
  craft:'Your craft goal: direct every piece yourself — your angle, your delivery, your choices. If a prompt can remake your work without you, it pays $0.',
  background:'Your experience goal: there is no license here. Your standing is proof that you follow the rules. Label AI content on every platform. No fake AI reviews the FTC (the US trade regulator) would flag.',
  proof:'Your proof goal: a price list with two paid jobs on it. Plus a before-and-after pair: the same ad shot by a person and made by AI.',
  voice:'Your voice goal: a real face, or a name a client can call. In this niche, trust starts when people can check who you are.',
  niche:'Your niche goal: pick ONE clear job. A real face with AI helpers for one topic. Or AI video for one kind of brand. “AI content” in general is not a job.',
  network:'Your network goal: a client list you own, plus creators you swap tests with. Platform reach is only rented. Your list is yours.',
  ai:'Your AI goal: run the whole process yourself — script, generate, edit, label. Under an hour per piece. Dub it into a second language if a client needs it (the tools cover 175 languages).'
},
healthadmin: {
  craft:'Your craft goal: run a real operation — a budget, a building and a staff — and show the numbers it produced.',
  background:'Your experience goal: have the exact paper your job checks — the degree, the certificate, or the state licence. Nothing extra.',
  proof:'Your proof goal: collect results someone outside checked. A budget you moved, an inspection you passed, a queue you fixed.',
  voice:'Your voice goal: be the administrator who explains the numbers plainly — to owners, to doctors, to your own team.',
  niche:'Your niche goal: one job, picked on purpose — hospital, practice, nursing home or insurer. Never "healthcare admin in general."',
  network:'Your network goal: know who hires and checks this work. Health system bosses, practice owners, inspectors, fellowship directors.',
  ai:'Your AI goal: own the automation where you work. Insurance approvals, the schedule, the denied-claims list. Run it instead of feeding it by hand.'
},
datascientist: {
  craft:'Your craft goal: Python, SQL and statistics at working level. Plus one model built and shipped end to end. 33 of 42 job posts name modeling.',
  background:'Your experience goal: the degree your job really checks for. 16 of 42 job posts require or prefer a master’s or PhD. Don’t buy degrees past that.',
  proof:'Your proof goal: three projects a stranger can read in five minutes. A model, an experiment, and one AI project with its score.',
  voice:'Your voice goal: write-ups a manager can act on. End every analysis with the decision it supports, in plain words.',
  niche:'Your niche goal: ONE named role — product, core, ML, or research. Pick it from job posts, not a course list.',
  network:'Your network goal: people who can name a decision your work changed. Product partners, hiring managers, one community in your field.',
  ai:'Your AI goal: use AI as a helper, but keep checking it. Ship one AI project. Write down how you checked its output.'
},
truckdriver: {
  craft:'You can haul any load — securing it, tanker surge, doubles in wind. Your pre-trip check catches what others miss.',
  background:'Class A CDL with all the endorsements (H, N, T), TWIC (port ID card), a current medical card. And a record with nothing to explain.',
  proof:'A file that speaks for you: clean inspections, employer letters, your best-week numbers — miles, pay, nights home.',
  voice:'Other drivers know your name from the groups — today’s CB radio. Your word on routes and carriers matters.',
  niche:'One job, picked on purpose — local LTL (smaller shared loads), tanker, heavy haul or your own truck. Never "whatever dispatch sends".',
  network:'Dispatchers, safety managers and two carriers who would hire you this week. Plus your school, union or OOIDA (owner-operator group) contacts.',
  ai:'Watch the driverless map like weather. Know which routes went driverless this quarter. Know what that means for your job.'
},
counselor: {
  craft:'Your craft goal: one specialty with a named method, done well. CBT, DBT, EMDR (therapy methods) or motivational interviewing — the words job posts use.',
  background:'Your experience goal: the full license. A 60-credit master’s your board accepts. 2,000–3,000 supervised hours logged. The NCE or NCMHCE exam passed. Thirty of 44 job posts ask for that license.',
  proof:'Your proof goal: a license file with no gaps. Practicum and internship hours (100 + 600). Supervised hours logged every week. Your own copy of every log.',
  voice:'Your voice goal: be the counselor other pros recommend. Share your verdict and specialty where psychiatrists, doctors and school counselors see it. Referrals are this job’s advertising.',
  niche:'Your niche goal: ONE group and ONE method, deep — trauma, couples, teens, or addiction at licensed level. Practice job posts pay $75,000–$135,000 for a specialty, not general listening.',
  network:'Your network goal: a referral list that fills your week. Psychiatrists, family doctors, school counselors, past supervisors. Later, the Counseling Compact map (a deal between states; 11 states live) to widen it.',
  ai:'Your AI goal: let AI do the paperwork — notes and first drafts in your records system (Epic, Netsmart Avatar, AthenaOne appear in job posts). Keep the therapy itself human. In Illinois and Nevada the law now requires that split.'
}
};

/* ---------- STRAND GOALS — profession level, RU (digits identical) ---------- */
var DNA_GOALS_RU = {
  cybersecurity: {'craft':'Ваша цель по ремеслу: быстро и верно разбирать настоящие тревоги. Сначала тренируйтесь дома, потом на работе. В итоге расследования станут вашей работой.', 'background':'Ваша цель по опыту: реальный опыт в IT плюс Security+. Мы разобрали 35 вакансий. Берут именно с этими двумя вещами.', 'proof':'Ваша цель по доказательствам: журнал лаборатории и три отчёта об атаках простым английским. Менеджер по найму должен прочитать их за пять минут.', 'voice':'Ваша цель по голосу: раз в неделю публично объясняйте одну атаку простыми словами. Так ваше имя узнают ещё до отклика.', 'niche':'Ваша цель по нише: одна специальность, выбранная сознательно. SOC (слежка за атаками), поиск атак, защита облака или взлом с разрешения. Не «кибербезопасность вообще».', 'network':'Ваша цель по сети: знакомые аналитики и менеджеры по найму в вашей специальности. Пусть знают ваше имя до того, как вам понадобится работа.', 'ai':'Ваша цель по AI: с инструментами ИИ разбирать и писать быстрее коллег. Это уже просят 20,4% вакансий для новичков. И доля быстро растёт.'},
  electrician: {'craft':'Ваша цель по ремеслу: чистая и быстрая работа по code (правилам электромонтажа). Трубы, щиты, поиск неисправностей — так, чтобы прораб не перепроверял. За это сервисные вакансии платят $45–$65/hr.', 'background':'Ваша цель по опыту: лицензия journeyman (электрик, который работает сам; её просят 24 из 36 вакансий). Потом лицензия master (мастер). Сначала получите карту ученика. Часы без неё не считаются.', 'proof':'Ваша цель по доказательствам: журнал часов по видам работ. Коммерческая, промышленная, сервисная, жилая — все ваши 8,000 часов. Что вы докажете, то и решит вашу следующую работу.', 'voice':'Ваша цель по голосу: пусть прорабы и владельцы фирм в вашем городе знают вас по имени. Когда людей не хватает, звонят знакомым.', 'niche':'Ваша цель по нише: одна специализация, за которую платят больше. Дата-центры, зарядки для электромобилей (EV), солнечные панели с батареями, генераторы или проводка систем управления (controls).', 'network':'Ваша цель по сети: знайте свой JATC (школу учеников) или программу, свой профсоюз (local) и двух подрядчиков, которые берут на уровень выше. Набор открывается раз в год. Первыми узнают те, у кого есть связи.', 'ai':'Ваша цель по AI: владейте техникой своего ремесла. Читайте чертежи и модели (BIM — цифровая модель здания), по которым работает цех заготовок (prefab). Будьте тем, кто сверяет модель со стеной.'},
  hvac: {'craft':'Ваша цель по ремеслу: диагностика, которой доверяет менеджер сервиса. Найти поломку, доказать её, починить с первого раза. За это коммерческие вакансии платят $35–$45/hr.', 'background':'Ваша цель по опыту: сначала EPA 608 Universal (допуск к работе с хладагентом; его просят 13 из 27 вакансий). Потом лицензия штата, если она там есть. После наработки часов — NATE (сертификат техника) по специализации.', 'proof':'Ваша цель по доказательствам: журнал систем — тип, мощность (тоннаж), поломка, ремонт. Он должен доказать 2+ года настоящей диагностики. Коммерческие фирмы читают его как резюме.', 'voice':'Ваша цель по голосу: будьте техником, которого клиенты и управляющие зданиями зовут по имени. Известные техники сами выбирают фирму. Безымянные гонятся за планом продаж.', 'niche':'Ваша цель по нише: одна специализация — коммерческий сервис, холодильное оборудование (refrigeration) или автоматика зданий (controls). Все самые высокие зарплаты — внутри специализаций. Общие вакансии столько не платят.', 'network':'Ваша цель по сети: заранее знайте двух коммерческих подрядчиков и одну фирму по автоматике. Из работы по домам переходят через людей, а не через вакансии.', 'ai':'Ваша цель по AI: освойте умную технику. Выучите как следует одну платформу BAS (программа, которая управляет системами здания). Плюс программы удалённого мониторинга, которые шлют вас на вызовы.'},
  plumber: {'craft':'Ваша цель по ремеслу: работа, которую мастер подписывает без переделки. Протечки находите, а не угадываете. Соединения проходят проверку с первого раза.', 'background':'Ваша цель по опыту: лицензия journeyman (с ней сантехник работает сам; её просят все лучшие вакансии). Потом лицензия master (мастер). Регистрируйте часы с первого дня. Лицензия — ваш главный капитал.', 'proof':'Ваша цель по доказательствам: журнал часов по видам работ за всё ученичество. Плюс один сертификат, за который платят. Классика — проверка обратных клапанов (backflow).', 'voice':'Ваша цель по голосу: будьте сантехником, которого район знает по имени. В сервисе вызовы идут знакомым мастерам. Платформам такие вызовы приходится покупать.', 'niche':'Ваша цель по нише: одна ветвь, выбранная сознательно. Гарантийный сервис, коммерческая работа или промышленный монтаж труб (pipefitting). За монтаж труб платят $40.64–$54/hr.', 'network':'Ваша цель по сети: знайте местный профсоюз UA или отделение ассоциации и двух мастеров, которые нанимают. Следите за правилами board (совета) вашего штата, чтобы они не застали врасплох.', 'ai':'Ваша цель по AI: освойте инструменты, которые облегчают день техника с лицензией. Камеры для труб, пресс-инструменты и данные диспетчерской программы о вашей работе. Программа работает на того, кто её читает.'},
law: {
  craft:'Ваша цель по ремеслу: научиться здраво решать рабочие вопросы (business judgment). В топ-вакансиях это личное качество №1 — его называют 7+ из 25. А под ним — Office / 365, программа за программой.',
  background:'Ваша цель по опыту: документы, которые проверяют на старших позициях. Бакалавр (bachelor’s, 19 из 21). Сертификат помощника юриста (paralegal, 14 из 21). CIPP/US (сертификат по защите данных), если идёте в эту тему (3 из 3).',
  proof:'Ваша цель по доказательствам: покажите на бумаге, сколько времени сэкономили. Один процесс с ИИ: время «до» и «после». Именно это ищут топ-вакансии.',
  voice:'Ваша цель по голосу: пусть работодатели видят вашу специализацию. Делитесь карточкой вердикта и результатами по вашей области там, где читают менеджеры, которые нанимают людей.',
  niche:'Ваша цель по нише: ОДНА область права — и вглубь. Старшие позиции начинаются с 5+ лет в одной области. Верхний уровень просит 10+.',
  network:'Ваша цель по сети: цельтесь в фирмы, которые хорошо платят специалистам. Gibson Dunn платит $150K–$200K. Cooley платит $135,200–$176,800.',
  ai:'Ваша цель по AI: освойте главные программы вашего направления — Relativity, Carta, iManage. Соберите один процесс с ИИ. 7 из 25 вакансий юристов прямо просят навык ИИ.'
},
cpa: {
  craft:'Ваша цель по ремеслу: по-настоящему знать правила учёта США (GAAP) — ASC 606, 842, 718. И Excel дальше базы. Вакансии рядовых бухгалтеров (staff) проверяют pivot tables и VLOOKUP — 8 из 8.',
  background:'Ваша цель по опыту: диплом бакалавра (bachelor’s, 52 из 52 вакансий) → экзамен CPA → лицензия. Идите самым дешёвым путём вашего штата: 120 учебных кредитов + 2 года, если штат позволяет.',
  proof:'Ваша цель по доказательствам: одна страница, которую ищут хорошие вакансии. Процесс, который вы улучшили, с часами «до» и «после». Плюс одна работа-доказательство по вашей нише.',
  voice:'Ваша цель по голосу: пусть ваше имя связывают с одной специализацией. Делитесь вердиктом и доказательствами там, где их читают контролёры и партнёры.',
  niche:'Ваша цель по нише: ОДНА отрасль, глубоко. Лучше всего платят в таких: учёт затрат на производстве, выручка по подписке (SaaS), фирмы с налогом через владельцев (pass-through), богатые клиенты (HNW).',
  network:'Ваша цель по сети: начните в бухгалтерской фирме (public accounting). Это открывает путь в FDD — проверку компаний перед покупкой. 11 вакансий вне таких фирм прямо просят этот опыт.',
  ai:'Ваша цель по AI: владейте системами — NetSuite (18 из 52 вакансий), Workiva для отчётов на биржу (SEC reporting). Плюс часть автоматизации закрытия месяца. Станьте главным по системам.'
},
nurse: {
  craft:'Ваша цель по ремеслу: дорасти до старшей медсестры смены (charge nurse) и вести смену. Помощнику менеджера (assistant nurse manager) платят $61.91–$97.72/hr. Путь туда — опыт старшей медсестры.',
  background:'Ваша цель по опыту: лицензия медсестры (RN) дешёвым путём. Её просят 16 из 16 вакансий. Короткая программа (ADN) стоит $5,472. Держите действующими BLS (базовая реанимация, 15 из 16) и ACLS (расширенная, 10 из 16).',
  proof:'Ваша цель по доказательствам: резюме, которое доказывает вашу специальность. Годы в специальности и сертификаты — каждая строка подтверждена.',
  voice:'Ваша цель по голосу: пусть старшие медсёстры (charge nurses) и менеджеры видят вашу специальность. Делитесь карточкой вердикта. Деньги идут за специальностью.',
  niche:'Ваша цель по нише: ОДНА специальность к месяцу 18–24 — реанимация (ICU), приёмное (ED) или операционная (OR). Опытные медсёстры получают при найме бонус $10K–$25K.',
  network:'Ваша цель по сети: выбирайте резидентуру (программу первого года) по карьерной лестнице, а не по первой зарплате. 22.7% новых медсестёр уходят в первый год (NSI). Хорошая резидентура вас защищает.',
  ai:'Ваша цель по AI: станьте в отделении главным по ИИ. Таких медсестёр всего около 10%. Их замечают при найме (McKinsey).'
},
fin: {
  craft:'Ваша цель по ремеслу: глубоко выучить SQL (язык запросов к данным) — он нужен в 31 из 40 вакансий. Строить модели выше базы. Потом вести прогноз одного отдела от начала до конца.',
  background:'Ваша цель по опыту: бакалавр (bachelor’s) в области с цифрами. CFA (сертификат аналитика) не нужен: его требуют 0 из 40 вакансий. Тратьте только на то, что просят вакансии.',
  proof:'Ваша цель по доказательствам: два дашборда (BI — бизнес-отчёты) на настоящих данных. Плюс одна страница: отчёт, который вы автоматизировали. С часами и ошибками «до» и «после».',
  voice:'Ваша цель по голосу: станьте в отделе главным по финансам — и пусть это слышат. Показывайте на их встречах (ops reviews) прогноз и разницу плана и факта.',
  niche:'Ваша цель по нише: роли гибрида (hybrid) и партнёра (partner). Просто «аналитиков» (analyst) становится меньше (−21%). Гибриду платят $138K–$180,600, партнёру — до $276,250.',
  network:'Ваша цель по сети: с первого дня на новой работе станьте своим в отделе. Ходите на их встречи (ops reviews) и ведите их прогноз.',
  ai:'Ваша цель по AI: глубоко освоить одну платформу планирования (Anaplan: 15 из 40 вакансий). И сделать одну автоматизацию на Python, которой правда пользуются.'
},
creator: {
  craft:'Ваша цель по ремеслу: делать всё в одиночку — идея, съёмка, монтаж, публикация. Вакансии в штат ищут человека, который делает всё сам. Premiere называют 21 из 40, CapCut — 15 из 40.',
  background:'Ваша цель по опыту: держите свой рыночный файл свежим. В нём — сколько платят и какие инструменты (и AI тоже) просят новые вакансии в штат. Проверяйте его каждый квартал. Лицензии в профессии нет, так что этот файл — ваше доказательство.',
  proof:'Ваша цель по доказательствам: портфолио, где у каждой работы есть цифры. Просмотры, сколько смотрели, и CTR — доля тех, кто кликнул. Портфолио просят 22 из 40 вакансий в штат. Это ваш диплом.',
  voice:'Ваша цель по голосу: пусть вас легко найти как автора. Публикуйте открытые разборы своего контента с цифрами. Нанимают тех, чьи мысли уже видели.',
  niche:'Ваша цель по нише: одна роль и одна отрасль. Лицо в кадре, платная реклама или ниша, за которую бренды доплачивают. Каждая найденная нами вакансия выше $100K требует такой редкий навык.',
  network:'Ваша цель по сети: знайте нанимающих менеджеров и штатных авторов вашей ниши заранее. И пусть они знают вас.',
  ai:'Ваша цель по AI: ведите AI-инструменты для подписей, вариантов и черновых монтажей. И оценивайте, что они сделали. Сегодня инструменты называют только 2 из 40 вакансий. Платят за ваш вкус — его не заменит никакой инструмент.'
},
analyst: {
  craft:'Ваша цель по ремеслу: SQL (язык запросов к базам данных) на рабочем уровне (43 из 46 вакансий). Python для анализа (18 из 46). И один эксперимент от начала до конца.',
  background:'Ваша цель по опыту: лицензия здесь не нужна. Мы каждый квартал сверяем вашу сферу с новыми вакансиями. За одну проверку число вакансий с AI-инструментами выросло до 6 из 46.',
  proof:'Ваша цель по доказательствам: один отчёт с графиками, который помогает принять решение. Запишите, кто его открыл и что решил. И одно решение, которое вы изменили, — с цифрами.',
  voice:'Ваша цель по голосу: начинайте с решения, которое вы изменили, а не с отчёта. Во всех 7 вакансиях стратегии и операций (strategy & operations) главное — работа с людьми, которым нужен результат.',
  niche:'Ваша цель по нише: выбирайте работу осознанно. Шесть работ на этой карте платят от $51K до $300K. А называются все одинаково — «analyst».',
  network:'Ваша цель по сети: подавайтесь на работы, где вы помогаете решать. Знайте тех, кто решает. Цели: product analyst (аналитик продукта), analytics engineer (инженер данных), strategy & operations (стратегия и операции).',
  ai:'Ваша цель по AI: сами пользуйтесь инструментами ИИ (их называют 6 из 46 вакансий). Автоматизируйте один повторяющийся отчёт. Покажите шаги: ИИ написал черновик, вы проверили.'
},
dataanalyst: {
  craft:'Ваша цель по ремеслу: SQL (язык запросов к базам данных) на рабочем уровне (24 из 24 вакансий по данным). Python для анализа (15 из 24). И один эксперимент от начала до конца.',
  background:'Ваша цель по опыту: лицензия здесь не нужна. Официальная статистика США (BLS) относит эту работу к data scientists. Медиана $120,230, рост +35%. Мы каждый квартал сверяем вашу сферу с новыми вакансиями.',
  proof:'Ваша цель по доказательствам: один отчёт с графиками, который помогает принять решение. Запишите, кто его открыл и что решил. И один эксперимент, проведённый вами от начала до конца.',
  voice:'Ваша цель по голосу: открыто показывайте, как работаете с ИИ. Поделитесь одним анализом: черновик написал ИИ, а вы проверили. Покажите саму проверку.',
  niche:'Ваша цель по нише: выбирайте работу осознанно. Четыре работы на этой карте платят от $60K до $300K. Названия у них похожи, но работы разные.',
  network:'Ваша цель по сети: подавайтесь на работы, где вы помогаете решать. Знайте тех, кто решает. Цели: product analyst (аналитик продукта), analytics engineer (инженер данных).',
  ai:'Ваша цель по AI: сами пользуйтесь инструментами ИИ. Сегодня их называют 2 из 24 вакансий по данным, и число меняется. Автоматизируйте один повторяющийся отчёт. Покажите шаги.'
},
businessanalyst: {
  craft:'Ваша цель по ремеслу: Excel глубже базы (7 из 7 вакансий для новичков). SQL (язык запросов к базам данных) на рабочем уровне (19 из 22). И один процесс, описанный и улучшенный, с цифрой.',
  background:'Ваша цель по опыту: лицензии здесь нет. Бюро статистики труда США (BLS) относит эту работу к management analysts. Медиана $101,860, рост +10%, около 94,100 вакансий в год.',
  proof:'Ваша цель по доказательствам: одно решение, которое вы продвинули, на одной странице. Что решили, какая цифра за этим и что просили. И одно улучшение процесса — сколько времени сэкономили.',
  voice:'Ваша цель по голосу: начинайте с решения, которое вы изменили, а не с документа. Во всех 7 вакансиях стратегии и операций (strategy & operations) главное — работа с руководителями и командами.',
  niche:'Ваша цель по нише: выберите вид работы осознанно. Два вида работы на этой карте платят от $51K до $194K под одним названием.',
  network:'Ваша цель по сети: знайте людей, которые принимают решения. В 7 из 7 вакансий стратегии и операций (strategy & operations) главное — работа с руководителями и их командами.',
  ai:'Ваша цель по AI: сами пользуйтесь ИИ в работе с документами (его называют 4 из 22 бизнес-вакансий). Автоматизируйте одну повторяющуюся задачу. Но результат проверяйте сами.'
},
aicreator: {
  craft:'Ваша цель по ремеслу: сами режиссируйте каждую работу — ваш взгляд, ваша подача, ваши решения. Работа, которую промпт (запрос к ИИ) повторит без вас, стоит $0.',
  background:'Ваша цель по опыту: лицензии здесь нет. Ваша репутация — правила, которые вы точно соблюдаете. Помечайте ИИ-контент на каждой платформе. И ни одного ИИ-отзыва, который FTC (торговый регулятор США) назвал бы фальшивым.',
  proof:'Ваша цель по доказательствам: прайс-лист с двумя оплаченными работами. И пара «до/после»: та же реклама, снятая человеком и сделанная ИИ.',
  voice:'Ваша цель по голосу: настоящее лицо или имя, по которому клиент может вам позвонить. В этой нише доверие начинается с того, что вас можно проверить.',
  niche:'Ваша цель по нише: ОДНА понятная работа. Настоящее лицо с ИИ-помощниками на одну тему. Или ИИ-видео для одного типа брендов. «ИИ-контент» вообще — это не работа.',
  network:'Ваша цель по сети: свой список клиентов и авторы, с которыми вы обмениваетесь тестами. Охват на платформе — только аренда. Список — ваш.',
  ai:'Ваша цель по AI: весь процесс сами — сценарий, генерация, монтаж, пометка. Меньше часа на одну работу. Если клиенту нужно, озвучьте на второй язык (инструменты знают 175 языков).'
},
healthadmin: {
  craft:'Ваша цель по ремеслу: управлять настоящим делом — бюджетом, зданием и персоналом. И показывать цифры результата.',
  background:'Ваша цель по опыту: ровно тот документ, который проверяют на вашей работе, — диплом, сертификат или лицензия штата. Ничего лишнего.',
  proof:'Ваша цель по доказательствам: результаты, которые проверил кто-то со стороны. Бюджет, который вы сдвинули. Инспекция, которую прошли. Очередь, которую наладили.',
  voice:'Ваша цель по голосу: быть администратором, который объясняет цифры простыми словами — владельцам, врачам и своей команде.',
  niche:'Ваша цель по нише: одна работа, выбранная осознанно, — больница, частная практика, дом престарелых или страховая. Не «администратор здравоохранения вообще».',
  network:'Ваша цель по сети: знайте тех, кто нанимает и проверяет эту работу. Руководители больничных сетей, владельцы практик, инспекторы, директора программ fellowship (стажировки после учёбы).',
  ai:'Ваша цель по AI: управляйте автоматизацией у себя на работе. Согласования со страховой, расписание, очередь отказов. Не кормите её вручную.'
},
datascientist: {
  craft:'Ваша цель по ремеслу: Python, SQL и статистика на рабочем уровне. Плюс одна модель, доведённая до запуска. Работу с моделями называют 33 из 42 вакансий.',
  background:'Ваша цель по опыту: тот диплом, который на вашей работе правда проверяют. Магистратуру или PhD требуют или хотят 16 из 42 вакансий. Лишних дипломов не покупайте.',
  proof:'Ваша цель по доказательствам: три проекта, которые незнакомый человек поймёт за пять минут. Модель, эксперимент и один AI-проект с его оценкой.',
  voice:'Ваша цель по голосу: тексты, по которым менеджер может действовать. Каждый анализ заканчивайте решением — простыми словами.',
  niche:'Ваша цель по нише: ОДНА названная роль — product, core, ML или research. Выбирайте по вакансиям, а не по каталогу курсов.',
  network:'Ваша цель по сети: люди, которые могут назвать решение, изменённое вашей работой. Партнёры по продукту, менеджеры по найму, одно сообщество в вашей сфере.',
  ai:'Ваша цель по AI: работайте с ИИ как с помощником, но проверяйте его. Запустите один AI-проект. Запишите, как вы проверяли его ответы.'
},
truckdriver: {
  craft:'Вы везёте любой груз: крепление, раскачка цистерны, двойные прицепы на ветру. Ваш осмотр перед рейсом замечает то, что другие пропускают.',
  background:'CDL класса A со всеми отметками (H, N, T), карта TWIC (пропуск в порты), действующая медкарта. И история, в которой нечего объяснять.',
  proof:'Папка, которая говорит за вас: чистые проверки, письма работодателей, цифры вашей лучшей недели — мили, оплата, ночи дома.',
  voice:'Другие водители знают вас по группам — это нынешнее CB-радио. Ваше слово о маршрутах и перевозчиках имеет вес.',
  niche:'Одна работа, выбранная сознательно: местный LTL (сборные грузы), цистерна, тяжёлые грузы или свой грузовик. Не «что диспетчер пришлёт».',
  network:'Диспетчеры, менеджеры по безопасности и два перевозчика, которые взяли бы вас на этой неделе. Плюс контакты школы, профсоюза или OOIDA (ассоциация водителей-владельцев).',
  ai:'Следите за картой беспилотных грузовиков как за погодой. Знайте, какие маршруты ушли беспилотникам в этом квартале. И что это значит для вашей работы.'
},
counselor: {
  craft:'Ваша цель по ремеслу: одна специальность с названным методом, освоенным хорошо. CBT (когнитивно-поведенческая терапия), DBT (диалектическая поведенческая), EMDR (работа с травмой) или мотивационное интервью — так пишут в вакансиях.',
  background:'Ваша цель по опыту: полная лицензия. Магистратура на 60 кредитов, которую принимает совет штата (board). От 2,000 до 3,000 часов под супервизией. Сданный экзамен NCE или NCMHCE. Эту лицензию просят 30 из 44 вакансий.',
  proof:'Ваша цель по доказательствам: дело для лицензии без пробелов. Часы практикума и интернатуры (100 + 600). Часы под супервизией, записанные каждую неделю. И своя копия каждого журнала.',
  voice:'Ваша цель по голосу: будьте консультантом, которого советуют коллеги. Делитесь вердиктом и специальностью там, где их видят психиатры, врачи и школьные консультанты. Направления — главная реклама в этой профессии.',
  niche:'Ваша цель по нише: ОДНА группа клиентов и ОДИН метод, глубоко. Травма, пары, подростки или зависимости — на уровне лицензии. Практики платят $75,000–$135,000 за специальность, а не за умение просто слушать.',
  network:'Ваша цель по сети: те, кто направляет к вам клиентов и заполняет вашу неделю. Психиатры, семейные врачи, школьные консультанты, бывшие супервизоры. Позже — карта Counseling Compact (соглашение штатов; работает в 11 штатах), чтобы расшириться.',
  ai:'Ваша цель по AI: отдайте ИИ бумажную работу — записи и черновики в вашей системе (в вакансиях встречаются Epic, Netsmart Avatar, AthenaOne). Саму терапию оставьте человеку. В Иллинойсе и Неваде этого теперь требует закон.'
}
};

/* ---------- STRAND GOALS — seat overrides (sparse; package-backed) ----------
   The NICHE override for every seat comes from BIGGOALS (see header).
   These two seats carry a background goal of their own in the package:
   the NP door and the CRNA door are license-shaped, unlike the floor. */
var DNA_SEAT_GOALS = {
  np: { background:'Your experience goal: the NP (nurse practitioner) board certificate in your specialty, the state NP license, and the DEA permit for controlled drugs. Psych NP job posts pay $200K–$257K. The license is worth most in Full Practice states (27 + DC). There an NP works fully alone.' },
  crna: { background:'Your experience goal: for a CRNA (nurse anesthetist), the doctorate is the license itself. Median pay is $236,590. For other roles, don’t pay extra for a DNP degree. Top job posts require it in 0 of 16.' }
};
var DNA_SEAT_GOALS_RU = {
  np: { background:'Ваша цель по опыту: сертификат медсестры-практика (NP board certification) по специальности, лицензия штата (NP) и разрешение DEA на контролируемые лекарства. Психиатрическим NP (psych NP) платят $200K–$257K. Лицензия ценнее всего там, где NP работает полностью сам (Full Practice, 27 + DC).' },
  crna: { background:'Ваша цель по опыту: для медсестры-анестезиста (CRNA) докторская степень — и есть лицензия. Медианная оплата — $236,590. В остальных случаях не переплачивайте за DNP (докторскую программу): лучшие вакансии требуют её в 0 из 16.' }
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
  craft:'Your craft goal: product judgment, which job posts check for. You decide what the AI feature should do. You can explain why, in words a user gets.',
  background:'Your experience goal: years of product work at your job’s level. 20 of 26 job posts that give a number ask 5+ years. Plus tech know-how. No certificate replaces it. Only 2 of 42 job posts demand a CS degree.',
  proof:'Your proof goal: shipped AI features and one set of evals (tests that check AI answers) with scores. Evals jobs check for this. A resume line can’t fake it.',
  voice:'Your voice goal: write the quality page and failure notes in plain words. Be the PM whose writing helps the whole company understand the model.',
  niche:'Your niche goal: ONE named role — platform, evals, feature, enterprise, or growth. Pick it from job posts. Never “AI PM in general.”',
  network:'Your network goal: people who hire and judge this work — hiring managers, model teams, enterprise customers. Meet them through shipped work, not applications.',
  ai:'Your AI goal: run the evals loop — test set, hand grades, auto-grading checked against them. Then model quality is your system, not your hope.'
};
DNA_GOALS_RU.aipm = {
  craft:'Ваша цель по ремеслу: продуктовое чутьё, которое проверяют вакансии. Вы решаете, что должна делать AI-функция. И объясняете почему — словами, понятными пользователю.',
  background:'Ваша цель по опыту: годы продуктовой работы на уровне вашей роли. 20 из 26 вакансий, где есть число, просят 5+ лет. Плюс понимание техники. Сертификат это не заменит. Диплом по компьютерным наукам требуют только 2 из 42 вакансий.',
  proof:'Ваша цель по доказательствам: запущенные AI-функции и один набор evals (тестов, которые проверяют ответы AI) с оценками. Именно это смотрят на роли evals. Строкой в резюме это не подделать.',
  voice:'Ваша цель по голосу: пишите страницу качества и заметки об ошибках простыми словами. Станьте PM, после текстов которого вся компания понимает поведение модели.',
  niche:'Ваша цель по нише: ОДНА названная роль — platform, evals, feature, enterprise или growth. Выбирайте по вакансиям. Никогда не «AI PM вообще».',
  network:'Ваша цель по сети: люди, которые нанимают и оценивают эту работу. Менеджеры по найму, команды моделей, корпоративные клиенты. Знакомьтесь через готовую работу, а не через отклики.',
  ai:'Ваша цель по AI: ведите цикл evals — тестовый набор, ручные оценки, автооценка, сверенная с ними. Тогда качество модели — ваша система, а не надежда.'
};
Object.assign(DNA_SEAT_GOALS, {
  platpm: { background:'Your experience goal: platform roles need ten years of technical product work. Voyager asks 10+ years, 5+ owning platforms. No certificate gives you that.' },
  evalpm: { background:'Your experience goal: for evals, show grades you can defend. A test set you built, and scores you can explain. No course sells this. Job posts name the work, not a certificate.' },
  featpm: { background:'Your experience goal: for feature roles, shipped AI features plus years of work. Microsoft asks 5+ years and a computer-science or engineering degree, “or equivalent experience.”' },
  entpm: { background:'Your experience goal: for enterprise, know the industry itself. One employer checks for hands-on investment-research experience. Harvey takes 2–4+ years in product or engineering.' },
  growpm: { background:'Your experience goal: for growth, years in growth work. Anthropic asks 6–10 years; its API role asks 6+, mostly in growth. Experiments you ran are your credential.' },
  apmpm: { background:'Your experience goal: beginner programs have three named checks. A CS degree (Databricks), new-grad timing (Square), or 0–2 years of any work (Addepar). Outside these, no clear check exists yet.' }
});
Object.assign(DNA_SEAT_GOALS_RU, {
  platpm: { background:'Ваша цель по опыту: для platform нужно десять лет технической продуктовой работы. Voyager просит 10+ лет, из них 5+ — с платформами. Никакой сертификат этого не даст.' },
  evalpm: { background:'Ваша цель по опыту: для evals — оценки, которые вы можете защитить. Тестовый набор, который вы сделали, и баллы, которые можете объяснить. Курс этого не продаст. Вакансии смотрят на работу, а не на документ.' },
  featpm: { background:'Ваша цель по опыту: для feature — запущенные AI-функции и годы опыта. Microsoft просит 5+ лет и диплом по компьютерным наукам или инженерии «или равный опыт».' },
  entpm: { background:'Ваша цель по опыту: для enterprise важна сама отрасль. Один работодатель проверяет личный опыт в инвестиционных исследованиях. Harvey берёт людей с опытом в продукте или инженерии от 2–4+ лет.' },
  growpm: { background:'Ваша цель по опыту: для growth — годы в работе над ростом. Anthropic просит 6–10 лет, на роль API — 6+, в основном в росте. Ваши эксперименты — это и есть документ.' },
  apmpm: { background:'Ваша цель по опыту: у программ для новичков три проверки. Диплом по компьютерным наукам (Databricks), недавний выпуск (Square) или 0–2 года любой работы (Addepar). Других проверок пока нет.' }
});
