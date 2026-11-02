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
  {id:'craft',      icon:'🛠️', name:'Craft',                   nameRu:'Ремесло',                    short:'Craft',      shortRu:'Ремесло'},
  {id:'background', icon:'🏅', name:'Experience & credentials', nameRu:'Опыт и знаки',               short:'Experience', shortRu:'Опыт'},
  {id:'proof',      icon:'📁', name:'Proof',                    nameRu:'Доказательства',             short:'Proof',      shortRu:'Доказательства'},
  {id:'voice',      icon:'🎤', name:'Voice',                    nameRu:'Голос',                      short:'Voice',      shortRu:'Голос'},
  {id:'niche',      icon:'🎯', name:'Niche',                    nameRu:'Ниша',                       short:'Niche',      shortRu:'Ниша'},
  {id:'network',    icon:'🤝', name:'Network',                  nameRu:'Сеть',                       short:'Network',    shortRu:'Сеть'},
  {id:'ai',         icon:'🤖', name:'AI leverage',              nameRu:'AI-рычаг',                   short:'AI leverage', shortRu:'AI-рычаг'}
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
  cybersecurity: {'craft':'Your craft goal: sort real alerts fast and right — in a home lab first, then on the job, until the investigation work is yours.', 'background':'Your background goal: real IT time plus Security+ — the two things the door in our scan of 35 postings actually accepts.', 'proof':'Your proof goal: a lab log and three incident reports in plain English that a hiring manager can read in five minutes.', 'voice':'Your voice goal: explain one attack a week in plain words, in public, so people learn your name before you apply.', 'niche':'Your niche goal: one specialty chosen on purpose — SOC, detection, cloud or offensive work — never “cybersecurity” in general.', 'network':'Your network goal: working analysts and hiring managers in your specialty who know your name before you need the job.', 'ai':'Your AI goal: use AI tools to sort and draft faster than the analyst next to you — 20.4% of entry postings already ask for it, and the share doubles fast.'},
  electrician: {'craft':'Your craft goal: clean, code-true work at speed — conduit, panels and troubleshooting a foreman trusts without re-checking. Craft is what the $45–$65/hr service postings are buying.', 'background':'Your signs goal: the journeyman license (named in 24 of 36 postings), then the master license. Apprentice card first — unregistered hours do not count.', 'proof':'Your proof goal: an hours log split by work type — commercial, industrial, service, residential — covering your 8,000 hours. The mix you can prove decides your next seat.', 'voice':'Your voice goal: be known by the foremen and shop owners in your metro. In a shortage, the calls go to names people already know.', 'niche':'Your niche goal: one specialty the postings pay extra for — data-center work, EV charging, solar + storage, generators or controls wiring.', 'network':'Your network goal: know your JATC or program, your local\'s hall and two contractors who hire at the next level up. Windows open once a year; people hear first.', 'ai':'Your AI goal: own the trade\'s tech layer — read the drawings and models (BIM) the prefab shop builds from, and be the journeyman who can check the model against the wall.'},
  hvac: {'craft':'Your craft goal: diagnosis a service manager trusts — find the fault, prove it, fix it once. That record is what commercial postings at $35–$45/hr are buying.', 'background':'Your signs goal: EPA 608 Universal first (named in 13 of 27 postings), state license where your state has one, NATE in your specialty after the hours.', 'proof':'Your proof goal: a system log — type, tonnage, fault, fix — long enough to prove 2+ years of real diagnosis. It is the resume commercial shops actually read.', 'voice':'Your voice goal: be the tech homeowners and building managers ask for by name. Named techs choose their shops; anonymous techs take quotas.', 'niche':'Your niche goal: one specialty — commercial service, refrigeration, or controls. The scan\'s top bands all sit inside a specialty, none at the general door.', 'network':'Your network goal: know two commercial contractors and one controls shop before you need them. The crossing from residential is made through people, not postings.', 'ai':'Your AI goal: own the smart layer — one BAS platform (building automation: the software that runs a building\'s systems) learned properly, plus the remote-monitoring tools that dispatch you.'},
  plumber: {'craft':'Your craft goal: diagnosis and clean work a master signs without re-doing — leaks found, not guessed; joints that pass inspection the first time.', 'background':'Your signs goal: the journeyman license (named in every top posting in the scan), then the master. Registered hours from day one — the license is the asset.', 'proof':'Your proof goal: an hours log split by work type across the whole apprenticeship, plus one priced certificate — backflow testing is the classic.', 'voice':'Your voice goal: be the plumber the neighborhood names. In service work, the named tech gets the calls the platforms have to buy.', 'niche':'Your niche goal: one branch chosen on purpose — guaranteed service, commercial, or the industrial pipefitting branch at $40.64–$54/hr posted.', 'network':'Your network goal: know your UA local or association chapter, two masters who hire, and your state board\'s rule changes before they surprise you.', 'ai':'Your AI goal: own the tools that raise a licensed tech\'s day — sewer cameras, press tools, and the dispatch software\'s data about your own work. The software works for whoever reads it.'},
law: {
  craft:'Your craft goal: learn to make good business decisions on real work. This is the #1 people skill named in top postings — 7+ of 25 name it. Under it sits Office / 365, learned program by program.',
  background:'Your signs goal: get the degree and papers that senior jobs check for — a bachelor’s degree (19 of 21 senior postings), a paralegal certificate (14 of 21), and CIPP/US, the privacy certificate, if you go into privacy (3 of 3).',
  proof:'Your proof goal: proof on paper of time you saved — one AI workflow, with the time it took before and the time it takes after, written down. That is the proof top postings describe.',
  voice:'Your voice goal: let employers see your specialty. Share your verdict card and your results in your practice area where hiring managers read.',
  niche:'Your niche goal: pick ONE practice area and go deep. Senior jobs start at 5+ years in a single area. The top level asks for 10+.',
  network:'Your network goal: aim at the firms that pay well for specialists — Gibson Dunn pays $150K–$200K, and Cooley pays $135,200–$176,800.',
  ai:'Your AI goal: learn to run the main tools of your track — Relativity, Carta, iManage — and build one AI workflow. 7 of 25 attorney postings ask for AI skill in plain words.'
},
cpa: {
  craft:'Your craft goal: learn the main U.S. accounting rules (GAAP) for real — ASC 606, 842, 718 — and Excel past the basics. Staff jobs check for pivot tables and VLOOKUP in 8 of 8 postings.',
  background:'Your signs goal: a bachelor’s degree (52 of 52 postings) → the CPA exam → the license, by your state’s cheapest route: 120 credits + 2 years where your state allows it.',
  proof:'Your proof goal: the one page good postings check for — a process you made better, with the hours it took before and the hours after — plus one piece of proof for your niche.',
  voice:'Your voice goal: become the person whose name means one specialty. Share your verdict and your proof where controllers and partners read.',
  niche:'Your niche goal: ONE industry, deep. Top pay bands name theirs: factory cost accounting, SaaS revenue, pass-through entities, and rich HNW clients.',
  network:'Your network goal: working at an accounting firm first opens the FDD door — 11 postings outside public accounting ask for a firm background in plain words.',
  ai:'Your AI goal: own the systems — NetSuite (18 of 52 postings), Workiva for SEC reporting, and part of the automation that closes the books. Be the systems person.'
},
nurse: {
  craft:'Your craft goal: reach charge-nurse level and lead the shift. The assistant nurse manager posting pays $61.91–$97.72/hr, and charge-nurse experience is named as the door into that job.',
  background:'Your signs goal: get the RN license the cheap way, which 16 of 16 postings ask for. Take the ADN at $5,472, and keep BLS (15 of 16) and ACLS (10 of 16) current.',
  proof:'Your proof goal: build a resume that shows proof of your specialty. It should list your years in the specialty and your certificates, confirmed line by line.',
  voice:'Your voice goal: let charge nurses and managers see your specialty. Share your verdict card, because the money follows the specialty.',
  niche:'Your niche goal: pick ONE specialty, such as ICU, ED, or OR, by month 18–24. Experienced specialty nurses get sign-on bonuses of $10K–$25K.',
  network:'Your network goal: choose a residency by the career ladder it gives you, not by the first pay. In their first year, 22.7% of new RNs leave (NSI), and a structured residency protects you.',
  ai:'Your AI goal: become your unit’s AI superuser. Only about 10% of nurses are at that level, and that top tier stands out at hiring (McKinsey).'
},
fin: {
  craft:'Your craft goal: learn SQL deeply (31 of 40 postings) and modeling past the basic level, then own one unit’s forecast from start to finish.',
  background:'Your signs goal: a bachelor’s degree in a numbers field, and no CFA, because jobs require it in 0 of 40 postings. Spend on what the postings name.',
  proof:'Your proof goal: two dashboards for business reports (BI) on real data, plus one page of proof: a report you automated, with the hours and the error rate before and after.',
  voice:'Your voice goal: be the unit’s person out loud. Show your forecast and your variance (plan versus result) in their operations reviews.',
  niche:'Your niche goal: aim for the hybrid and partner seats. The plain “analyst” pool is shrinking (−21%). A hybrid seat posts $138K–$180,600, and a partner seat posts up to $276,250.',
  network:'Your network goal: from day one in the new seat, be the unit’s person. Join their operations reviews and own their forecast.',
  ai:'Your AI goal: learn one planning platform deeply (Anaplan: 15 of 40 postings) and build one real Python automation that people actually use.'
},
creator: {
  craft:'Your craft goal: learn to run the whole loop alone — idea, filming, editing, posting. This is the studio-of-one standard the staff postings describe: one person does the whole job. The postings name Premiere in 21 of 40 and CapCut in 15 of 40.',
  background:'Your signs goal: keep your market file fresh. Your market file holds the pay bands, the tools and the AI tools named in fresh staff postings, and you check it again every quarter. There is no license in this profession, so this file is your record of proof.',
  proof:'Your proof goal: build a portfolio where every piece carries its numbers — views, how long people watched, and CTR, the share of people who clicked. 22 of 40 staff postings ask for the portfolio. It is your diploma.',
  voice:'Your voice goal: be findable as a maker. Publish breakdowns of your own content in public, with the numbers. Hiring managers hire creators they have already seen thinking.',
  niche:'Your niche goal: own one seat and one industry — the face seat, the paid-ads desk, or a niche that brands pay extra for. Every posting above $100K in our scan adds a scarce half — a rare skill — like one of these.',
  network:'Your network goal: know the hiring managers and the staff creators in your niche before you need the job — and be known by them.',
  ai:'Your AI goal: lead the AI tools for captions, variants and first cuts, and judge what they make. Only 2 of 40 postings name AI tools today, and your judgment stays the product that no tool can be named for.'
},
analyst: {
  craft:'Your craft goal: SQL, the database language, at working level (43 of 46 postings), Python for analysis (18 of 46), and one experiment run from start to finish.',
  background:'Your signs goal: no license is needed in this market. We check your place again every quarter against new job postings. In one check, the number of postings that named AI tools rose to 6 of 46.',
  proof:'Your proof goal: one dashboard, a report with charts, that helps a decision. Name who opened it and what they decided, and one decision you changed, with numbers.',
  voice:'Your voice goal: start with a decision you changed, not a dashboard you built. Working with the people who will use the work is the main duty named in all 7 strategy & operations postings.',
  niche:'Your niche goal: choose your job on purpose. The six jobs on this map post $51K to $300K for the same word, “analyst”.',
  network:'Your network goal: apply by name to jobs where you help decide, and know the people who make decisions: product analyst, analytics engineer, and strategy & operations.',
  ai:'Your AI goal: use AI tools yourself (named in 6 of 46 postings), automate one report that repeats, and show the steps: AI wrote the draft, and you checked it.'
},
dataanalyst: {
  craft:'Your craft goal: SQL, the database language, at working level (24 of 24 data job postings), Python for analysis (15 of 24), and one experiment run from start to finish.',
  background:'Your signs goal: no license is needed in this market. In official United States job statistics (BLS), this work sits under data scientists, with median pay of $120,230 and growth of +35%. We check your place again every quarter against new postings.',
  proof:'Your proof goal: one dashboard, a report with charts, that helps a decision, with who opened it and what they decided, and one experiment you ran from start to finish.',
  voice:'Your voice goal: show in public how you work with AI. Share one analysis where AI wrote the first draft and you checked it, and make your checking easy to see.',
  niche:'Your niche goal: choose your job on purpose. The four jobs on this map post $60K to $300K, even though their titles overlap and sound alike.',
  network:'Your network goal: apply by name to jobs where you help decide, and know the people who make decisions: product analyst and analytics engineer.',
  ai:'Your AI goal: use AI tools yourself (named in 2 of 24 data job postings today, and that number is moving), automate one repeating report, and show your steps.'
},
businessanalyst: {
  craft:'Your craft goal: Excel past the basics (7 of 7 junior postings), SQL, the database language, to working knowledge (19 of 22), and one process mapped and improved, with the number.',
  background:'Your signs goal: no license runs this market — the official home for this work is management analysts at the BLS, the US labor statistics office: median $101,860, +10% growth, about 94,100 openings a year.',
  proof:'Your proof goal: write up one decision you pushed for as a one-page brief — what you decided, the number behind it, and what you asked for — and one process you improved, with the time it saved.',
  voice:'Your voice goal: start with a decision you changed, not a document you wrote. Working with managers and teams is listed as the core duty in all 7 strategy & operations postings.',
  niche:'Your niche goal: pick your job type on purpose. The two jobs on this map post $51K to $194K under one title.',
  network:'Your network goal: know the people who make the decisions. Working with managers and top executives is the core duty in 7 of 7 strategy & operations postings.',
  ai:'Your AI goal: use AI tools yourself in the document work (named in 4 of 22 business-side postings), and automate one repetitive task while you still check its results.'
},
aicreator: {
  craft:'Your craft goal: direct every piece yourself — your angle, your performance, your decisions. Work that a prompt can rebuild without you pays $0.',
  background:'Your signs goal: no license exists here. Your standing is rule-following you can prove: labels on every platform, and no AI testimonial the FTC (the US trade regulator) would call fake.',
  proof:'Your proof goal: a price list with two paid deliveries on it, and a before-and-after pair — the same ad filmed by a person and made by AI.',
  voice:'Your voice goal: a real face, or a name a client can call. In this niche, people trusting you starts with being able to check who you are.',
  niche:'Your niche goal: pick ONE named job — a real face with AI helpers for one topic, or AI video for one kind of brand. “AI content” in general is not a job.',
  network:'Your network goal: a client list you own, plus creators you swap tests with. Reach on a platform is only rented from the platform; the list is yours.',
  ai:'Your AI goal: run the whole process yourself — write the script, generate, edit and label it — in under an hour a piece, and dub it into a second language when a client needs it (the tools cover 175 languages).'
},
healthadmin: {
  craft:'Your craft goal: run a real operation — a budget, a building and a staff — and show the numbers it produced.',
  background:'Your background goal: hold the exact paper your seat checks — the degree, the certificate, or the state licence — and nothing extra.',
  proof:'Your proof goal: collect results an outsider checked — a budget you moved, a survey you passed, a queue you fixed.',
  voice:'Your voice goal: be the administrator who explains the numbers plainly — to owners, to doctors, to your own team.',
  niche:'Your niche goal: one seat, chosen on purpose — hospital, practice, nursing home or payer work. Never "healthcare admin in general."',
  network:'Your network goal: know the people who hire and check this work — system executives, practice owners, surveyors, fellowship directors.',
  ai:'Your AI goal: own the automation in your building — the prior-authorisation flow, the schedule, the denials queue — instead of feeding it by hand.'
},
datascientist: {
  craft:'Your craft goal: Python, SQL and statistics at working level, plus one model shipped end to end — modeling is named in 33 of 42 postings.',
  background:'Your background goal: the degree your seat actually screens for — a master’s or PhD is required or preferred in 16 of 42 postings — and no degree bought past that line.',
  proof:'Your proof goal: three projects a stranger can read in five minutes — a model, an experiment, one AI project with its score kept.',
  voice:'Your voice goal: write-ups a manager can act on — every analysis ends with the decision it feeds, in plain words.',
  niche:'Your niche goal: ONE seat, named — product, core, ML, or research — picked from the postings, not from a course catalog.',
  network:'Your network goal: people who can name a decision your work changed — product partners, hiring managers, one community in your seat.',
  ai:'Your AI goal: run the AI as a collaborator and keep the check — one shipped AI project, with how you verified its output written down.'
},
truckdriver: {
  craft:'You can run any load put behind you — securement, tanker surge, doubles in wind — and your pre-trip catches what others miss.',
  background:'Class A CDL with the full letter stack (H, N, T), TWIC, a current medical card and a record with nothing to explain.',
  proof:'A file that speaks first: clean inspections, employer letters, your best-week numbers — miles, pay, nights home.',
  voice:'Other drivers know your name from the groups and the CB of today — your word on lanes and carriers carries weight.',
  niche:'One seat, chosen on purpose — local LTL, tanker, heavy haul or your own truck — never "whatever dispatch sends".',
  network:'Dispatchers, safety managers and two carriers who would hire you this week, plus your school and union or OOIDA contacts.',
  ai:'You watch the driverless map like weather: you know which lanes went driverless this quarter and what that does to your seat.'
},
counselor: {
  craft:'Your craft goal: one specialty with a named method, done well — CBT, DBT, EMDR or motivational interviewing, the words the postings themselves print.',
  background:'Your signs goal: the full license — a 60-credit master’s your board accepts, 2,000–3,000 supervised hours logged, and the NCE or NCMHCE passed. Thirty of 44 postings ask for that license.',
  proof:'Your proof goal: a license file with no gaps — practicum and internship hours (100 + 600), supervised hours logged weekly, and your own copy of every log.',
  voice:'Your voice goal: be the counselor other professionals name — share your verdict and your specialty where psychiatrists, doctors and school counselors can see it. Referrals are this profession’s advertising.',
  niche:'Your niche goal: ONE population and ONE method, deep — trauma, couples, teens, or addiction at the licensed level. The practice postings at $75,000–$135,000 are bought with a specialty, not with general listening.',
  network:'Your network goal: a referral list that fills your week — psychiatrists, primary-care doctors, school counselors and past supervisors, plus the Counseling Compact map (11 states live) when you are ready to widen it.',
  ai:'Your AI goal: let AI carry the paperwork layer — notes and first drafts in your record system (Epic, Netsmart Avatar, AthenaOne appear in postings) — and keep the therapy itself human, because in Illinois and Nevada the law now requires exactly that split.'
}
};

/* ---------- STRAND GOALS — profession level, RU (digits identical) ---------- */
var DNA_GOALS_RU = {
  cybersecurity: {'craft':'Ваша цель по ремеслу: разбирать настоящие оповещения быстро и верно — сначала в домашней лаборатории, потом на работе, пока расследования не станут вашей работой.', 'background':'Ваша цель по багажу: реальное время в IT плюс Security+ — две вещи, которые дверь в нашем разборе 35 вакансий принимает на самом деле.', 'proof':'Ваша цель по доказательствам: журнал лаборатории и три отчёта об инцидентах простым английским, которые менеджер по найму прочитает за пять минут.', 'voice':'Ваша цель по голосу: объяснять одну атаку в неделю простыми словами и публично, чтобы ваше имя узнали до вашего отклика.', 'niche':'Ваша цель по нише: одна специальность, выбранная осознанно, — SOC (мониторинг атак), поиск атак, облачная защита или атаки с разрешения; никогда не «кибербезопасность вообще».', 'network':'Ваша цель по сети: работающие аналитики и менеджеры по найму в вашей специальности, которые знают ваше имя до того, как вам понадобится работа.', 'ai':'Ваша цель по ИИ-рычагу: использовать инструменты ИИ, чтобы разбирать и писать быстрее аналитика рядом с вами, — 20,4% начальных вакансий уже просят это, и доля растёт быстро.'},
  electrician: {'craft':'Ваша цель по ремеслу: чистая работа по правилам (code — свод правил электромонтажа) и быстро — трубы, щиты и поиск неисправностей, которые прораб доверяет без перепроверки. Именно за ремесло платят сервисные вакансии по $45–$65/hr.', 'background':'Ваша цель по знакам: лицензия подмастерья (journeyman — лицензия электрика, который может работать сам; её называют в 24 из 36 вакансий), потом лицензия мастера (master). Сначала карта ученика — незарегистрированные часы не засчитываются.', 'proof':'Ваша цель по доказательствам: журнал часов по видам работ — коммерческая, промышленная, сервисная, жилая — на все ваши 8,000 часов. Состав, который вы можете доказать, решает ваше следующее место.', 'voice':'Ваша цель по голосу: пусть прорабы и владельцы фирм в вашем городе знают ваше имя. При нехватке людей звонят тем, кого уже знают.', 'niche':'Ваша цель по нише: одна специализация, за которую вакансии платят сверху, — работа в дата-центрах, зарядка электромобилей (EV), солнечные системы с батареями, генераторы или проводка систем управления (controls).', 'network':'Ваша цель по сети: знайте ваш комитет ученичества (JATC) или программу, зал вашего профсоюза (local) и двух подрядчиков, которые нанимают на уровень выше. Окна открываются раз в год; люди узнают первыми.', 'ai':'Ваша цель по AI: владейте техническим слоем ремесла — читайте чертежи и модели (BIM — цифровая модель здания), по которым работает цех заготовок (prefab), и будьте подмастерьем, который сверяет модель со стеной.'},
  hvac: {'craft':'Ваша цель по ремеслу: диагностика, которой доверяет менеджер сервиса, — найти неисправность, доказать её, починить с первого раза. Именно за эту репутацию коммерческие вакансии платят $35–$45/hr.', 'background':'Ваша цель по знакам: сначала EPA 608 Universal (федеральный сертификат на хладагент, все типы; назван в 13 из 27 вакансий), лицензия штата, где она есть, и NATE (отраслевой сертификат техника) по вашей специализации после наработки часов.', 'proof':'Ваша цель по доказательствам: журнал систем — тип, тоннаж, неисправность, ремонт — достаточно длинный, чтобы доказать 2+ года настоящей диагностики. Это резюме, которое коммерческие фирмы действительно читают.', 'voice':'Ваша цель по голосу: будьте техником, которого домовладельцы и управляющие зданиями просят по имени. Техников с именем выбирают фирмы сами; безымянные берут планы продаж.', 'niche':'Ваша цель по нише: одна специализация — коммерческий сервис, холодильное оборудование (refrigeration) или автоматика зданий (controls). Все верхние вилки скана стоят внутри специализации, ни одна — у общей двери.', 'network':'Ваша цель по сети: знайте двух коммерческих подрядчиков и одну фирму по автоматике до того, как они вам понадобятся. Переход из жилого сектора делается через людей, а не через вакансии.', 'ai':'Ваша цель по AI: владейте умным слоем — одна платформа BAS (building automation — программа, которая управляет системами здания), выученная по-настоящему, плюс инструменты удалённого мониторинга, которые вас направляют.'},
  plumber: {'craft':'Ваша цель по ремеслу: диагностика и чистая работа, которую мастер подписывает без переделки, — протечки найдены, а не угаданы; соединения проходят проверку с первого раза.', 'background':'Ваша цель по знакам: лицензия подмастерья (journeyman — лицензия, с которой сантехник работает сам; названа в каждой топовой вакансии скана), потом мастера (master). Зарегистрированные часы с первого дня — лицензия и есть актив.', 'proof':'Ваша цель по доказательствам: журнал часов по видам работ на всё ученичество, плюс один сертификат с ценой — проверка обратных клапанов (backflow) — классика.', 'voice':'Ваша цель по голосу: будьте сантехником, которого район называет по имени. В сервисной работе техник с именем получает вызовы, которые платформам приходится покупать.', 'niche':'Ваша цель по нише: одна ветвь, выбранная осознанно, — гарантированный сервис, коммерческая работа или промышленная ветвь монтажа труб (pipefitting) по опубликованным $40.64–$54/hr.', 'network':'Ваша цель по сети: знайте ваш местный профсоюз UA или отделение ассоциации, двух мастеров, которые нанимают, и изменения правил board вашего штата до того, как они вас удивят.', 'ai':'Ваша цель по AI: владейте инструментами, которые поднимают день лицензированного техника, — камеры для труб, пресс-инструменты и данные программы диспетчеризации (dispatch software) о вашей собственной работе. Программа работает на того, кто её читает.'},
law: {
  craft:'Ваша цель по ремеслу: умение здраво судить о работе на реальных задачах (business judgment). Это фраза №1 среди личных качеств (soft skills) в топ-вакансиях — её называют 7+ из 25. Под ней — Office / 365, программа за программой.',
  background:'Ваша цель по знакам: бумаги, которые проверяют опытные вакансии, — бакалавр (bachelor’s, 19 из 21), сертификат помощника юриста (paralegal, 14 из 21) и сертификат CIPP/US по приватности, если идёте в неё (3 из 3).',
  proof:'Ваша цель по доказательствам: доказательство сэкономленного времени на бумаге — один процесс с ИИ, где записано время «до» и время «после». Именно такое доказательство описывают топ-вакансии.',
  voice:'Ваша цель по голосу: пусть работодатели видят вашу специализацию. Делитесь карточкой вердикта и результатами по вашей области там, где читают менеджеры, которые нанимают людей.',
  niche:'Ваша цель по нише: ОДНА область практики — и глубоко в неё. Работы для опытных начинаются с 5+ лет в одной области. Верхний уровень просит 10+.',
  network:'Ваша цель по сети: цельтесь в фирмы, которые хорошо платят специалистам, — Gibson Dunn платит $150K–$200K, Cooley платит $135,200–$176,800.',
  ai:'Ваша цель по AI: главные программы вашего направления — Relativity, Carta, iManage — и один собранный процесс с ИИ. 7 из 25 вакансий юристов просят навык ИИ прямыми словами.'
},
cpa: {
  craft:'Ваша цель по ремеслу: правила учёта США (GAAP) по-настоящему — ASC 606, 842, 718 — и Excel дальше базы. Вакансии рядовых бухгалтеров (staff) проверяют pivot tables и VLOOKUP в 8 из 8.',
  background:'Ваша цель по знакам: диплом бакалавра (bachelor’s, 52 из 52 вакансий) → экзамен CPA → лицензия, по самому дешёвому маршруту вашего штата: 120 учебных кредитов (credits) + 2 года, где ваш штат позволяет.',
  proof:'Ваша цель по доказательствам: та одна страница, которую ищут хорошие вакансии, — процесс, который вы улучшили, с часами «до» и «после», — плюс одна работа-доказательство по вашей нише.',
  voice:'Ваша цель по голосу: станьте человеком, чьё имя значит одну специализацию. Делитесь вердиктом и своими доказательствами там, где читают контролёры и партнёры.',
  niche:'Ваша цель по нише: ОДНА индустрия, глубоко. Верхние вилки — свои: учёт затрат в производстве, выручка по подписке (SaaS), фирмы с налогом через владельцев (pass-through), богатые клиенты (HNW).',
  network:'Ваша цель по сети: прошлое в работе на клиентов в фирме (public accounting) открывает дверь в проверку перед покупкой (FDD) — 11 вакансий вне её просят опыт в фирме прямыми словами.',
  ai:'Ваша цель по AI: владейте системами — NetSuite (18 из 52 вакансий), Workiva для отчётности на биржу (SEC reporting) и часть автоматизации закрытия периода. Станьте системным человеком.'
},
nurse: {
  craft:'Ваша цель по ремеслу: уровень старшей медсестры смены (charge nurse) — вести смену. Вакансия помощника менеджера (assistant nurse manager) платит $61.91–$97.72/hr, и опыт старшей медсестры назван её дверью.',
  background:'Ваша цель по знакам: лицензия медсестры (RN) дешёвым путём, её просят в 16 из 16 вакансий. Короткая программа на медсестру (ADN) стоит $5,472. Держите действующими сертификаты базовой помощи при остановке сердца (BLS, 15 из 16) и расширенной помощи (ACLS, 10 из 16).',
  proof:'Ваша цель по доказательствам: сделать резюме, которое показывает доказательства по вашей специальности. В нём должны быть ваши годы в специальности и ваши сертификаты, подтверждённые строка за строкой.',
  voice:'Ваша цель по голосу: пусть старшие медсёстры смены (charge nurses) и менеджеры видят вашу специальность. Делитесь карточкой вердикта, потому что деньги следуют за специальностью.',
  niche:'Ваша цель по нише: ОДНА специальность — реанимация (ICU), приёмное отделение (ED) или операционная (OR) — к месяцу 18–24. Опытные медсёстры специальностей получают бонусы при найме $10K–$25K.',
  network:'Ваша цель по сети: выбирайте программу первого года работы (резидентуру) по лестнице, а не по первой зарплате. 22.7% новых медсестёр с лицензией уходят в первый год (NSI). Такая резидентура вас защищает.',
  ai:'Ваша цель по AI: станьте в своём отделении тем, кто лучше всех умеет работать с ИИ. Таких медсестёр — только около 10%. Этот верхний уровень заметен при найме (McKinsey).'
},
fin: {
  craft:'Ваша цель по ремеслу: глубоко выучить язык запросов к данным (SQL), он нужен в 31 из 40 вакансий, и строить модели выше базового уровня. Потом ведите прогноз одного подразделения от начала до конца.',
  background:'Ваша цель по знакам: бакалавр (bachelor’s) в числовой области и никакого сертификата аналитика (CFA): его требуют в 0 из 40 вакансий. Тратьте на то, что называют вакансии.',
  proof:'Ваша цель по доказательствам: сделать два дашборда для бизнес-отчётов (BI) на настоящих данных и одну страницу доказательства: отчёт, который вы автоматизировали, с часами и уровнем ошибок «до» и «после».',
  voice:'Ваша цель по голосу: станьте вслух человеком подразделения по финансам. Показывайте на их рабочих обзорах (ops reviews) прогноз и разницу плана и факта (variance).',
  niche:'Ваша цель по нише: места гибрида (hybrid) и партнёра (partner). Обычный пул «аналитик» (analyst) сжимается (−21%). Гибрид публикует $138K–$180,600, а партнёр — до $276,250.',
  network:'Ваша цель по сети: с первого дня на новом месте станьте человеком подразделения. Ходите на их рабочие обзоры (ops reviews) и ведите их прогноз сами.',
  ai:'Ваша цель по AI: глубоко освоить одну платформу планирования (Anaplan: 15 из 40 вакансий) и сделать одну настоящую автоматизацию на Python, доведённую до работы.'
},
creator: {
  craft:'Ваша цель по ремеслу: научиться вести весь цикл в одиночку — идея, съёмка, монтаж, публикация. Это стандарт «студии в одном лице», который описывают вакансии в штат: один человек делает всю работу. Вакансии называют Premiere в 21 из 40, а CapCut — в 15 из 40.',
  background:'Ваша цель по знакам: держите ваш рыночный файл свежим. В нём лежат вилки оплаты, инструменты и инструменты ИИ, названные в свежих вакансиях в штат, и вы проверяете его заново каждый квартал. Лицензии в этой профессии нет, поэтому этот файл — ваша запись доказательств.',
  proof:'Ваша цель по доказательствам: соберите портфолио, где каждая работа несёт свои цифры — просмотры, как долго люди смотрели, и CTR, долю людей, которые кликнули. Портфолио просят 22 из 40 вакансий в штат. Оно и есть ваш диплом.',
  voice:'Ваша цель по голосу: будьте находимы как автор. Публикуйте разборы своего контента открыто, с цифрами. Нанимающие менеджеры берут креаторов, которых они уже видели думающими.',
  niche:'Ваша цель по нише: владейте одним местом и одной отраслью — местом лица, столом платной рекламы или нишей, за которую бренды платят сверху. Каждая вакансия выше $100K в нашем скане добавляет такую дефицитную половину — редкий навык.',
  network:'Ваша цель по сети: знайте нанимающих менеджеров и штатных креаторов вашей ниши до того, как вам понадобится работа, — и будьте известны им.',
  ai:'Ваша цель по ИИ: ведите инструменты ИИ для подписей, вариантов и первых монтажей — и судите то, что они делают. Конкретные инструменты сегодня называют только 2 из 40 вакансий, а ваше суждение остаётся продуктом, вместо которого инструмент не назовут.'
},
analyst: {
  craft:'Ваша цель по ремеслу: язык запросов к базам данных (SQL) на рабочем уровне (43 из 46 вакансий), язык Python для анализа (18 из 46) и один эксперимент, проведённый от начала до конца.',
  background:'Ваша цель по знакам: на этом рынке лицензия не нужна. Ваше место проверяют заново каждый квартал по новым вакансиям. За время одной проверки число вакансий, где назвали инструменты ИИ, выросло до 6 из 46.',
  proof:'Ваша цель по доказательствам: один отчёт с графиками, который помогает принять решение, с записью, кто его открыл и что он решил, и одно решение, которое вы изменили, рассказанное с цифрами.',
  voice:'Ваша цель по голосу: начинайте с решения, которое вы изменили, а не с отчёта, который вы сделали. Работа с людьми, которым нужен результат, — главная обязанность во всех 7 вакансиях стратегии и операций (strategy & operations).',
  niche:'Ваша цель по нише: выбирайте работу обдуманно. Шесть работ на этой карте платят от $51K до $300K, хотя все они называются одним словом «analyst».',
  network:'Ваша цель по сети: подавайтесь на места решений по именам и знайте людей, которые принимают решения: аналитик продукта (product analyst), инженер данных (analytics engineer) и стратегия и операции (strategy & operations).',
  ai:'Ваша цель по AI: пользуйтесь инструментами ИИ сами (они названы в 6 из 46 вакансий), сделайте один повторяющийся отчёт автоматическим и покажите шаги работы: ИИ написал черновик, а вы проверили.'
},
dataanalyst: {
  craft:'Ваша цель по ремеслу: язык запросов к базам данных (SQL) на рабочем уровне (24 из 24 вакансий по данным), язык Python для анализа (15 из 24) и один эксперимент, проведённый от начала до конца.',
  background:'Ваша цель по знакам: лицензия на этом рынке не нужна. Официальная статистика труда США (BLS) относит эту работу к учёным по данным (data scientists): медиана $120,230, рост +35%. Ваше место перепроверяют каждый квартал по новым вакансиям.',
  proof:'Ваша цель по доказательствам: один отчёт с графиками, который помогает принять решение, с записью, кто его открыл и что он решил, и один эксперимент, проведённый вами от начала до конца.',
  voice:'Ваша цель по голосу: публично показывайте, как вы работаете с ИИ. Поделитесь одним анализом, где ИИ написал черновик, а вы его проверили, и покажите саму проверку.',
  niche:'Ваша цель по нише: выбирайте работу обдуманно. Четыре работы на этой карте платят от $60K до $300K, хотя их названия похожи и пересекаются.',
  network:'Ваша цель по сети: подавайтесь по именам на работы, где помогают решать, и знайте людей, которые решают: аналитик продукта (product analyst), инженер данных (analytics engineer).',
  ai:'Ваша цель по AI: пользуйтесь инструментами ИИ сами (названы в 2 из 24 вакансий по данным сегодня — это число сейчас движется), автоматизируйте один повторяющийся отчёт и покажите шаги.'
},
businessanalyst: {
  craft:'Ваша цель по ремеслу: Excel глубже базы (7 из 7 вакансий для начинающих), язык запросов к базам данных (SQL) на рабочем уровне (19 из 22) и один описанный и улучшенный процесс с цифрой.',
  background:'Ваша цель по знакам: лицензии в этом рынке нет — официально эта работа числится у бюро статистики труда США (BLS) как аналитики по управлению (management analysts): медиана $101,860, рост +10%, около 94,100 вакансий в год.',
  proof:'Ваша цель по доказательствам: одно решение, которое вы продвинули, записанное как короткая записка на одну страницу — что вы решили, какая цифра за этим стоит и что вы просили, — и одно улучшение процесса со сэкономленным временем.',
  voice:'Ваша цель по голосу: начинайте с решения, которое вы изменили, а не с документа, который вы написали. Работа с руководителями и командами — главная обязанность во всех 7 вакансиях стратегии и операций (strategy & operations).',
  niche:'Ваша цель по нише: выберите вид работы осознанно. Два вида работы на этой карте платят от $51K до $194K под одним названием.',
  network:'Ваша цель по сети: знайте людей, которые принимают решения. Работа с руководителями и их командами — главная обязанность в 7 из 7 вакансий стратегии и операций (strategy & operations).',
  ai:'Ваша цель по AI: сами пользуйтесь инструментами искусственного интеллекта в работе с документами (они названы в 4 из 22 вакансий со стороны бизнеса) и автоматизируйте одну повторяющуюся задачу, но сами проверяйте результат.'
},
aicreator: {
  craft:'Ваша цель по ремеслу: сами режиссируйте каждую работу — ваш взгляд, ваша подача, ваше решение. Работа, которую запрос к ИИ (промпт) пересоберёт без вас, стоит $0.',
  background:'Ваша цель по знакам: лицензии здесь нет. Ваше положение — это соблюдение правил, которое можно доказать: пометки на каждой платформе и ни одного отзыва, созданного ИИ, который комиссия по торговле США (FTC) назвала бы подделкой.',
  proof:'Ваша цель по доказательствам: список ваших цен с двумя оплаченными работами и пара «до/после» — та же реклама, снятая человеком и сделанная с помощью ИИ.',
  voice:'Ваша цель по голосу: настоящее лицо или имя, по которому клиент может вам позвонить. В этой нише доверие начинается с того, что вас можно проверить.',
  niche:'Ваша цель по нише: ОДНА выбранная работа — настоящее лицо с командой ИИ-помощников для одной темы или ИИ-видео для одного вида брендов. «ИИ-контент» вообще — не работа.',
  network:'Ваша цель по сети: ваш собственный список клиентов и создатели контента, с которыми вы обмениваетесь тестами. Охват на платформах вы только арендуете; список — ваш.',
  ai:'Ваша цель по AI: ведите весь процесс сами — сценарий, создание, монтаж, пометка — меньше часа на одну работу, и дублируйте на второй язык, когда клиенту нужно (инструменты покрывают 175 языков).'
},
healthadmin: {
  craft:'Ваша цель по ремеслу: вести настоящую операцию — бюджет, здание и персонал — и показывать цифры, которые она дала.',
  background:'Ваша цель по образованию и знакам: иметь ровно тот документ, который проверяет ваше место, — диплом, сертификат или лицензию штата — и ничего лишнего.',
  proof:'Ваша цель по доказательствам: собирать результаты, которые проверил посторонний, — бюджет, который вы сдвинули, инспекцию, которую вы прошли, очередь, которую вы починили.',
  voice:'Ваша цель по голосу: быть администратором, который объясняет цифры простыми словами — владельцам, врачам и своей команде.',
  niche:'Ваша цель по нише: одно место, выбранное осознанно, — больница, практика, дом престарелых или страховая. Никогда «администратор здравоохранения вообще».',
  network:'Ваша цель по сети: знать людей, которые нанимают на эту работу и проверяют её, — руководителей систем, владельцев практик, инспекторов, директоров программ fellowship.',
  ai:'Ваша цель по AI-рычагу: владеть автоматизацией в своём здании — потоком согласований, расписанием, очередью отказов — вместо того чтобы кормить её вручную.'
},
datascientist: {
  craft:'Ваша цель по ремеслу: Python, SQL и статистика на рабочем уровне, плюс одна модель, отправленная от начала до конца — работа с моделями названа в 33 из 42 вакансий.',
  background:'Ваша цель по опыту и знакам: диплом, который ваше место правда проверяет, — магистратура или PhD требуются или предпочитаются в 16 из 42 вакансий — и ни одного диплома, купленного сверх этой строки.',
  proof:'Ваша цель по доказательствам: три проекта, которые незнакомец прочитает за пять минут, — модель, эксперимент, один AI-проект с сохранённой оценкой.',
  voice:'Ваша цель по голосу: тексты, по которым менеджер может действовать, — каждый анализ заканчивается решением, которое он питает, простыми словами.',
  niche:'Ваша цель по нише: ОДНО место, названное, — product, core, ML или research — выбранное по вакансиям, а не по каталогу курсов.',
  network:'Ваша цель по сети: люди, которые могут назвать решение, изменённое вашей работой, — партнёры по продукту, нанимающие менеджеры, одно сообщество в вашем месте.',
  ai:'Ваша цель по AI: ведите AI как соавтора и сохраняйте проверку — один отправленный AI-проект, с записанным способом, как вы проверяли его вывод.'
},
truckdriver: {
  craft:'Вы можете вести любой груз, который вам дали: крепление, качка цистерны, двойные прицепы на ветру, — а ваш предрейсовый осмотр ловит то, что другие пропускают.',
  background:'CDL класса A с полным набором букв (H, N, T), карта TWIC, действующая медкарта и история, в которой нечего объяснять.',
  proof:'Папка, которая говорит первой: чистые проверки, письма работодателей, числа вашей лучшей недели — мили, оплата, ночи дома.',
  voice:'Другие водители знают ваше имя по группам и по сегодняшнему аналогу CB-радио — ваше слово о маршрутах и перевозчиках имеет вес.',
  niche:'Одно место, выбранное нарочно: городской LTL, цистерна, тяжёлые перевозки или свой грузовик, — и никогда «что диспетчер пришлёт».',
  network:'Диспетчеры, менеджеры по безопасности и два перевозчика, которые наняли бы вас на этой неделе, плюс контакты вашей школы и профсоюза или OOIDA (ассоциация владельцев-водителей).',
  ai:'Вы следите за картой беспилотных трасс как за погодой: знаете, какие маршруты ушли беспилотникам в этом квартале и что это делает с вашим местом.'
},
counselor: {
  craft:'Ваша цель по ремеслу: одна специальность с названным методом, сделанная хорошо, — CBT (когнитивно-поведенческая терапия), DBT (диалектическая поведенческая терапия), EMDR (метод работы с травмой) или мотивационное интервью — слова, которые печатают сами вакансии.',
  background:'Ваша цель по знакам: полная лицензия — магистратура на 60 кредитов, которую принимает ваш совет штата (board), от 2,000 до 3,000 записанных часов под супервизией и сданный экзамен NCE или NCMHCE. Эту лицензию просят 30 из 44 вакансий.',
  proof:'Ваша цель по доказательствам: лицензионное дело без дыр — часы практикума и интернатуры (100 + 600), часы под супервизией, записанные каждую неделю, и ваша собственная копия каждого журнала.',
  voice:'Ваша цель по голосу: будьте консультантом, которого называют другие профессионалы, — делитесь вердиктом и специальностью там, где это видят психиатры, врачи и школьные консультанты. Направления — реклама этой профессии.',
  niche:'Ваша цель по нише: ОДНА группа клиентов и ОДИН метод, глубоко, — травма, пары, подростки или зависимости на лицензированном уровне. Вакансии практики по $75,000–$135,000 покупаются специальностью, а не общим умением слушать.',
  network:'Ваша цель по сети: список направлений, который заполняет вашу неделю, — психиатры, врачи первичного звена, школьные консультанты и прошлые супервизоры, — плюс карта Counseling Compact (соглашения штатов; 11 штатов работают), когда вы готовы её расширить.',
  ai:'Ваша цель по AI: отдайте AI бумажный слой — записи и первые черновики в вашей системе записей (Epic, Netsmart Avatar, AthenaOne встречаются в вакансиях) — и держите саму терапию человеческой, потому что в Иллинойсе и Неваде закон теперь требует именно такого деления.'
}
};

/* ---------- STRAND GOALS — seat overrides (sparse; package-backed) ----------
   The NICHE override for every seat comes from BIGGOALS (see header).
   These two seats carry a background goal of their own in the package:
   the NP door and the CRNA door are license-shaped, unlike the floor. */
var DNA_SEAT_GOALS = {
  np: { background:'Your signs goal: the NP board certificate in your specialty, the state NP license, and the DEA permit for controlled drugs. Psych NP postings pay $200K–$257K, and the license is worth most in Full Practice states (27 + DC), where an NP works fully alone.' },
  crna: { background:'Your signs goal: for a CRNA, the doctorate is the license itself, and the median pay is $236,590. Everywhere else, do not pay extra for a DNP degree, because top postings require it in 0 of 16.' }
};
var DNA_SEAT_GOALS_RU = {
  np: { background:'Ваша цель по знакам: сертификат медсестры-практика по специальности (NP board certification), лицензия штата (NP) и разрешение на контролируемые лекарства (DEA). Психиатрическая медсестра-практик (psych NP) платит $200K–$257K, а лицензия дороже всего там, где практика полностью самостоятельна (Full Practice, 27 + DC).' },
  crna: { background:'Ваша цель по знакам: для медсестры-анестезиста (CRNA) докторская степень — это сама лицензия, а медианная оплата — $236,590. Везде ещё не переплачивайте за программу (DNP): топовые вакансии требуют её в 0 из 16.' }
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
  craft:'Your craft goal: the product judgment the postings screen for — you decide what the AI feature should do, and you can say why, in plain words a user understands.',
  background:'Your background goal: years of product work at the level your seat posts — 20 of 26 postings that state a number ask 5+ years — plus technical fluency. No certificate substitutes; only 2 of 42 postings demand a CS degree.',
  proof:'Your proof goal: shipped AI features and one eval set with its scores — the file the evals seat screens for, and the thing a resume bullet cannot fake.',
  voice:'Your voice goal: write the quality page and the failure notes in plain words — the PM whose writing makes a model’s behavior legible to a whole company.',
  niche:'Your niche goal: ONE seat, named — platform, evals, feature, enterprise, or growth — picked from the postings, never “AI PM in general.”',
  network:'Your network goal: the people who hire and judge this work — hiring managers, model teams, enterprise customers — met through shipped work, not applications.',
  ai:'Your AI goal: run the eval loop — test set, hand grades, automated grading checked against them — so the model’s quality is your system, not your hope.'
};
DNA_GOALS_RU.aipm = {
  craft:'Ваша цель по ремеслу: продуктовое суждение, которое проверяют вакансии, — вы решаете, что AI-функция должна делать, и можете сказать почему, — простыми словами, которые понимает пользователь.',
  background:'Ваша цель по опыту и знакам: годы продуктовой работы на уровне, который публикует ваше место, — 20 из 26 вакансий с числом просят 5+ лет, — плюс техническая грамотность. Ни один сертификат не заменяет; только 2 из 42 вакансий требуют диплом по компьютерным наукам.',
  proof:'Ваша цель по доказательствам: отправленные AI-функции и один набор evals с его оценками — файл, который проверяет место evals, и то, что строка в резюме не подделает.',
  voice:'Ваша цель по голосу: пишите страницу качества и заметки об ошибках простыми словами — PM, чьё письмо делает поведение модели понятным всей компании.',
  niche:'Ваша цель по нише: ОДНО место, названное, — platform, evals, feature, enterprise или growth — выбранное по вакансиям, никогда «AI PM вообще».',
  network:'Ваша цель по сети: люди, которые нанимают на эту работу и судят её, — нанимающие менеджеры, команды моделей, корпоративные клиенты, — встреченные через отправленную работу, а не отклики.',
  ai:'Ваша цель по AI-рычагу: ведите цикл evals — тестовый набор, ручные оценки, автоматическая оценка, сверенная с ними, — чтобы качество модели было вашей системой, а не вашей надеждой.'
};
Object.assign(DNA_SEAT_GOALS, {
  platpm: { background:'Your signs goal: for platform, the sign is a decade of technical product work — Voyager asks 10+ years, 5+ owning platforms. No certificate prints that line.' },
  evalpm: { background:'Your signs goal: for evals, the sign is a defended grade — a test set you built and scores you can justify. No course sells it; the postings name the work, not a credential.' },
  featpm: { background:'Your signs goal: for feature, the sign is shipped AI features with years behind them — Microsoft asks 5+ years and a computer-science or engineering degree, “or equivalent experience.”' },
  entpm: { background:'Your signs goal: for enterprise, the sign is the domain itself — one employer screens on first-hand investment-research experience, and Harvey takes product or engineering pasts at 2–4+ years.' },
  growpm: { background:'Your signs goal: for growth, the sign is years inside growth work — Anthropic asks 6–10 years, its API seat 6+ with most of them in growth. Experiments run are the credential.' },
  apmpm: { background:'Your signs goal: for the program door, the signs are three named screens — a CS degree (Databricks), new-grad timing (Square), or 0–2 years of any work (Addepar). Outside them, no sign exists yet.' }
});
Object.assign(DNA_SEAT_GOALS_RU, {
  platpm: { background:'Ваша цель по знакам: для platform знак — десятилетие технической продуктовой работы: Voyager просит 10+ лет, 5+ из них — владение платформами. Ни один сертификат эту строку не печатает.' },
  evalpm: { background:'Ваша цель по знакам: для evals знак — защищённая оценка: тестовый набор, который вы построили, и баллы, которые вы можете обосновать. Ни один курс это не продаёт; вакансии называют работу, а не документ.' },
  featpm: { background:'Ваша цель по знакам: для feature знак — отправленные AI-функции с годами за ними: Microsoft просит 5+ лет и диплом по компьютерным наукам или инженерии «или равный опыт».' },
  entpm: { background:'Ваша цель по знакам: для enterprise знак — сама отрасль: один работодатель проверяет личный опыт инвестиционных исследований, а Harvey принимает прошлое в продукте или инженерии на 2–4+ годах.' },
  growpm: { background:'Ваша цель по знакам: для growth знак — годы внутри работы роста: Anthropic просит 6–10 лет, его место API — 6+, из них большинство в росте. Проведённые эксперименты — это и есть документ.' },
  apmpm: { background:'Ваша цель по знакам: для двери программ знаки — три названных экрана: диплом по компьютерным наукам (Databricks), сроки выпускника (Square) или 0–2 года любой работы (Addepar). Вне их знака пока нет.' }
});
