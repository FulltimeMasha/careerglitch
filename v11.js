/* ===== Method v1.1 data layer — hooks, confidence, cost of error, quotes, forecasts.
   Source: the five packages' method-v11.md files (Oct 30, 2026). Do not invent numbers. ===== */
var QUOTES = {
  law:   {q:'Will AI transform how paralegals do their jobs? Certainly, and paralegals had better embrace that, just like the rest of us must (smart paralegals already are).',
          by:'Doug Austin — editor of eDiscovery Today (works in legal tech)',
          url:'https://ediscoverytoday.com/2025/02/10/deep-research-says-ai-will-replace-paralegals-hah-artificial-intelligence-trends/'},
  cpa:   {q:'Some enormous scandal will happen because of all this offshoring we do.',
          by:'An r/Accounting commenter — as quoted in Going Concern, Jul 12, 2024',
          url:'https://www.goingconcern.com/friday-footnotes-the-future-of-the-profession-sounds-terrible-f-your-weak-salary-bump-ey-intuit-axes-1500-people-7-12-24/'},
  nurse: {q:'I would try to type as the patient was talking. It was very distracting for both of us. I felt a disconnect — I wasn\u2019t able to look at the patient all the time. I kept looking back at my screen.',
          by:'Erica Dorn, FNP — small rural hospital, via a Freed user story',
          url:'https://www.getfreed.ai/blog/user-story-erica-dorn'},
  fin:   {q:'Analysis Analyst — determining key drivers, explaining key variances, works closer with marketing to drive decision making.',
          by:'“accountingbyday” — FP&A manager, in a Wall Street Oasis Q&A',
          url:'https://www.wallstreetoasis.com/corpfin-qa-with-accountingbyday-bjm85-storib-and-djfiii'},
  creator:{q:'The people who do the same content as me without their face in it, most of them are getting demonetised.',
          by:'Doctor NOS — creator, 1.7M subscribers, to The Hollywood Reporter',
          url:'https://hackernoon.com/youtubes-ai-slop-crackdown-cant-tell-a-directed-ai-film-from-a-bot-farm'}
};
var NEXT_LAW = 'We re-check this verdict by September 2027. Sooner if NALP shows big firms hiring new grads like the Class of 2025.';
var NEXT_CPA_AI = 'We re-check this verdict by October 2028. Sooner if staff job posts name AI tools the way they now name NetSuite.';
var NEXT_CPA_GATE = 'We re-check this verdict by January 2028. Sooner if the 120+2 route (120 credits + 2 years of work) stops short of 40 states.';
var NEXT_NURSE_NSI = 'We re-check this verdict by April 2027, with the next NSI staffing survey. Sooner if hospital hiring changes.';
var CPA_EXPIRY = 'Pay is high in 2026 because few people do this — re-check 2028.';
var NEXT_ANALYST = 'We re-check this verdict by June 2027. Sooner if a check finds AI tools in 1 of 4 analyst job posts (today: 6 of 46).';
var NEXT_DATA = 'We re-check this verdict by June 2027. Sooner if a check finds AI tools in 1 of 4 data analyst job posts (today: 2 of 24).';
var NEXT_BIZ = 'We re-check this verdict by June 2027. Sooner if a check finds AI tools in 1 of 3 business-side job posts (today: 4 of 22).';
var NEXT_AICREATOR = 'We re-check this verdict by June 2027. Sooner if any platform changes its rules on AI content or pay.';
var NEXT_CREATOR = 'We re-check this verdict on 1 March 2027, after YouTube’s new entry bar starts. Sooner if any platform changes its pay rules.';
var V11 = {
/* LAW */
specialist:{hook:'Paralegal growth: zero percent. Specialist paralegal jobs pay $200K.', conf:'High', next:NEXT_LAW},
paralegal:{hook:'Paralegal growth: zero percent. Specialist paralegal jobs pay $200K.', conf:'High', next:NEXT_LAW,
  coe:'Turning away now saves up to 10 years of work that leads nowhere (estimate). Your time is precious!'},
docreview:{hook:'Document review is the law job AI loves most.', conf:'High', next:NEXT_LAW,
  coe:'Turning away now saves years in the job AI has taken over most. Its top pay is ≈$87K–$137K/yr below the specialist top (derived).'},
lawstudent:{hook:'Law school with no goal: $112,500 of debt, a $100,000 first salary.', conf:'Medium', next:NEXT_LAW,
  coe:'Turning away now saves $112,500 and 3 years.'},
/* CPA */
bookkeeper:{hook:'Bookkeeping is the only job here that’s shrinking.', conf:'High', next:NEXT_CPA_AI,
  coe:'Turning away now saves a fifth year of school for the wrong job. Plus several hundred study hours (estimate).',
  step:{
    student:'First step, as a student: don’t aim a degree at bookkeeping itself. Look at the staff-accountant path. Check your state’s license rules (120 vs. 150 credits) before paying for school.',
    early:'First step, early in: move from bookkeeping to a staff-accountant job now. Your experience comes with you. The bookkeeping title never grows.',
    mid:'First step, at 3–5 years: move to staff accountant first. Then aim at a specialty where you sign off. A controller who runs the ERP (finance software) gets $130–200K + bonus. Special tax work pays $125–200K.',
    senior:'First step, at 5+ years: your years are worth a lot. Aim them at running the ERP (finance software) and a controller job ($130–200K + bonus). If you stay, you hit the bookkeeping ceiling ($74,550, the most bookkeepers ever make).'}},
tax:{hook:'Tax prep tops every list of jobs AI can take.', conf:'High', next:NEXT_CPA_AI, expiry:CPA_EXPIRY,
  coe:'Turning away now saves 3–5 years in the job AI is taking first (estimate).'},
staff:{hook:'Bookkeeping is the only job here that’s shrinking.', conf:'High', next:NEXT_CPA_AI, expiry:CPA_EXPIRY,
  coe:'Turning away now saves a fifth year of school for the wrong job. Plus several hundred study hours (estimate).'},
audit:{hook:'Audit tops out at $150K. Advisory tops out at $225K. You choose!', conf:'Medium', next:NEXT_CPA_GATE, expiry:CPA_EXPIRY,
  coe:'Turning away now saves $40\u201375K/yr of pay you would never reach (derived).'},
technical:{hook:'The license protects your signature. Not your job.', conf:'High', next:NEXT_CPA_GATE, expiry:CPA_EXPIRY},
fdd:{hook:'The license protects your signature. Not your job.', conf:'High', next:NEXT_CPA_GATE, expiry:CPA_EXPIRY},
controller:{hook:'The license protects your signature. Not your job.', conf:'High', next:NEXT_CPA_GATE, expiry:CPA_EXPIRY},
/* NURSE */
medsurg:{hook:'Med-surg is a first step, not a final stop.', conf:'High', next:NEXT_NURSE_NSI,
  coe:'Turning away now saves 3+ years at ward pay. That’s up to ≈$52.6K/yr below top specialty pay (estimate).'},
specialty:{hook:'You don’t need a doctorate. Zero of 16 top jobs ask for a DNP.', conf:'High', next:NEXT_NURSE_NSI},
travel:{hook:'You don’t need a doctorate. Zero of 16 top jobs ask for a DNP.', conf:'Medium',
  next:'We re-check this verdict by April 2027. Sooner if typical travel pay climbs back above $2,300/wk and stays there.'},
nstudent:{hook:'You don’t need a doctorate. Zero of 16 top jobs ask for a DNP.', conf:'High', next:NEXT_NURSE_NSI},
np:{hook:'Everyone picks FNP. Psych NPs earn up to $257K.', conf:'Medium',
  next:'We re-check this verdict by October 2027. Sooner if new FNPs earn more than senior specialty RNs in big cities.',
  coe:'Turning away now saves \u2248$46,300 and \u22481 year.'},
crna:{hook:'You don’t need a doctorate. Zero of 16 top jobs ask for a DNP.', conf:'High', next:NEXT_NURSE_NSI},
lpn:{hook:'Only sixteen percent of LPNs work in hospitals.', conf:'High', next:NEXT_NURSE_NSI,
  coe:'Turning away now saves one extra certificate you don’t need. And a $33,150/yr gap in typical pay.'},
/* FINANCE */
reporting:{hook:'Analyst job posts down 21%. Seniors hired 3-to-1.', conf:'High',
  next:'We re-check this verdict by June 2027. Sooner if beginner analyst job posts climb back to 2025 levels.',
  coe:'Turning away now saves $3K+ and ~900 hours. Plus ≈2.5 years before this job title sticks to you (estimate).'},
fpa:{hook:'Zero of 40 top-paying employers asked for a CFA.', conf:'High',
  next:'We re-check this verdict by October 2027. Sooner if top-paying job posts name AI tools earlier than expected.'},
strategic:{hook:'Zero of 40 top-paying employers asked for a CFA.', conf:'High',
  next:'We re-check this verdict by October 2027. Sooner if top-paying job posts name AI tools earlier than expected.'},
hybrid:{hook:'Zero of 40 top-paying employers asked for a CFA.', conf:'High',
  next:'We re-check this verdict by October 2027. Sooner if top-paying job posts name AI tools earlier than expected.'},
corpdev:{hook:'Zero of 40 top-paying employers asked for a CFA.', conf:'Medium',
  next:'We re-check this verdict by October 2027. Sooner if top-paying job posts name AI tools earlier than expected.'},
/* CREATOR */
faceless:{hook:'16 junk AI channels shut down. 4.7 billion views, gone.', conf:'High', next:NEXT_CREATOR,
  coe:'Turning away now saves ~1,000 hours (≈$36,100 of work at typical editor pay). That’s time spent on what YouTube pays $0 for.',
  step:{
    student:'First step, as a student: don’t make the junk version of your idea. If a text prompt could remake it, YouTube pays $0. Make the version with your face or voice in it. That’s the one that wins!',
    early:'First step, early in: check all your posts against the three things YouTube won’t pay for. Generic or repetitive. Boring or off-putting. AI characters on touchy topics.',
    mid:'First step, at 3–5 years: move your best topic into videos with you in them. Work with a real person in it kept its pay in the 2026 crackdown.',
    senior:'First step, at 5+ years: aim your years at buyers, not uploads. Brands pay for UGC (videos made for brands) and expert know-how. The typical creator deal is $3,000.'}},
streamer:{hook:'Partner needs 75 average viewers. The level below pays in cents.', conf:'High', next:NEXT_CREATOR,
  coe:'Turning away now saves ~1,000 hours a year streaming to just a handful of people. About 95% of Affiliates never reach Partner.'},
personality:{hook:'48.7% of creators earn under $10,000 a year.', conf:'Medium', next:NEXT_CREATOR,
  coe:'Turning away now saves ≈$71,750 a year. That’s the gap between $74,750, typical pay for staff doing this work, and $3,000, a typical creator deal.',
  step:{
    student:'First step, as a student: treat deals as a business lesson, not income. Finish two small paid jobs and learn what buyers want. Your degree still pays the rent.',
    early:'First step, early in: don’t quit your job yet. Wait for two quarters in a row where creating earns more. Until then, your job pays for your dream.',
    mid:'First step, at 3–5 years: add a product for the audience you have. Products and affiliate income are 21.2% of all creator income. 100% of it stays even if a platform stops paying you.',
    senior:'First step, at 5+ years: your name is worth money now. Charge like it! Build a product line and email list under your own name. If your money still needs a platform’s OK, you’re not done yet.'}},
ugc:{hook:'UGC is 35% of brand campaigns. It was 15% a year ago.', conf:'Medium', next:NEXT_CREATOR,
  step:{
    student:'First step, as a student: film two sample videos for products you already own. Put them on a one-page media kit (a short page about you). Buyers check reputation (58%) and audience fit (56%) first.',
    early:'First step, early in: finish your first two paid jobs. The average paid UGC job is $154. For buyers, two finished jobs beat any follower count.',
    mid:'First step, at 3–5 years: raise your price toward the proven range. That’s $500+ a video for creators with results. Add one product of your own, so UGC isn’t your only income.',
    senior:'First step, at 5+ years: sell judgment, not clips. Your years are worth money as creative direction. Brands can’t get those ideas from a prompt. Keep growing your own product line.'}},
educator:{hook:'AI characters can’t give expert advice. You can — you’re the real thing.', conf:'Medium', next:NEXT_CREATOR},
creatorbiz:{hook:'48.7% of creators earn under $10,000 a year.', conf:'High', next:NEXT_CREATOR,
  step:{
    student:'First step, as a student: you’re already in the YES job — nice! Put the business first. Every video should point at something you own. Every 3 months, check RPM (what views pay you), deal rate, and how much income you own.',
    early:'First step, early in: protect the income you own. Grow your email list and products before you post more often. No app change can take your list away.',
    mid:'First step, at 3–5 years: check like an owner every 3 months. Look at RPM, deal rate, and how much income you own. If one platform still controls most of your money, fix that next.',
    senior:'First step, at 5+ years: price the whole thing. A channel plus products plus a list is a business. A buyer can put a price on it. The income you own is what a buyer pays for.'}}
};
var GV11 = {
  law:   {hook:'Typical lawyer debt: $112,500. Typical first salary: $100,000.', next:NEXT_LAW},
  cpa:   {hook:'The license protects your signature. Not your job.', next:'We re-check these verdicts by January 2028. Sooner if the 120+2 route stops short of 40 states.'},
  nurse: {hook:'You don’t need a doctorate. Zero of 16 top jobs ask for a DNP.', next:NEXT_NURSE_NSI},
  fin:   {hook:'Zero of forty employers required a CFA.', next:'We re-check these verdicts by October 2027. Sooner if top-paying job posts name AI tools earlier than expected.'},
  creator:{hook:'48.7% of creators earn under $10,000 a year.', next:NEXT_CREATOR}
};

/* ===== Personalize my door — stage / state / invested variants.
   State lines use ONLY facts the packages print; unknown states get the generic line. ===== */
var PROF_STEPS = {
  law: {
    student:'First step, as a student: pick the specialty before the debt. Privacy & AI rules, checking companies before deals, or health-care rules. From year one, build your record toward it (clinics, certificates, tools).',
    early:'First step, early in: stop collecting general hours. Move your work into one specialty. Learn to run its AI tools instead of racing against them.',
    mid:'First step, at 3–5 years: show your experience as ONE area of law. Top job posts want 5–10 years in a single area. Make your years read that way.',
    senior:'First step, at 5+ years: charge for the specialty you already have. Senior specialist job posts paid $135K–$200K. If you earn the typical $62,890, the gap is how you present yourself. Your skill is already there.'},
  cpa: {
    student:'First step, as a student: pick your niche before the exam. Special tax, technical accounting / SEC reporting, or transaction advisory. Check your state’s credit rule before paying for a fifth year.',
    early:'First step, early in: aim your license. Pick a niche whose job posts require it. That’s 8 of 10 tax-manager and 6 of 6 SEC-reporting posts. Build toward that specialty, not “accounting in general.”',
    mid:'First step, at 3–5 years: move sideways while your years still count. Audit experience + modeling practice is the bridge into FDD. Staff years aimed nowhere don’t add up.',
    senior:'First step, at 5+ years: charge for your signature, not your hours. The aimed specialties pay $120K–$225K. Still on staff pay? Move sideways. Longer hours won’t fix it.'},
  nurse: {
    student:'First step, as a student: get licensed cheap. The ADN costs $5,472 total, with the same NCLEX exam. Aim for a specialty first job, not the longest degree.',
    early:'First step, early in: get into a specialty (ICU / ER / OR) in year one or two. A specialty unlocks travel pay, the CRNA path and the well-paid NP paths.',
    mid:'First step, at 3–5 years: pick your next step by real pay numbers. Travel money, the CRNA path, or an NP specialty. Check what your state lets an NP do before paying for school.',
    senior:'First step, at 5+ years: charge for your specialty. Psych NP job posts paid $200K–$257K. Typical CRNA pay is $236,590. Leadership is the long-term plan if you want to leave the floor.'},
  fin: {
    student:'First step, as a student: learn the skills top-paying job posts really want. SQL → platform → BI (dashboard tools). Plus one piece of real proof. Skip the certificate-first plan.',
    early:'First step, early in: move one job over, toward FP&A partnering or the analytics hybrid. Do it before a reports-only label sticks to you (that takes ~4 years).',
    mid:'First step, at 3–5 years: own a number for one business team. Partner jobs paid up to $276,250. Report-building jobs don’t turn into them just by waiting.',
    senior:'First step, at 5+ years: sell judgment and trust, not slides. The job that lasts is the person who owns the number. Charge for that.'},
  creator: {
    student:'First step, as a student: learn what buyers want before you grow an audience. Make a one-page media kit (a short page about you). Write one sentence on the problem your audience pays to solve. Buyers check reputation first (58%).',
    early:'First step, early in: beat the deadline! Join the YouTube Partner Program before 31 January 2027, or be clearly on track. Then finish your first two paid UGC or brand jobs (average paid job: $154).',
    mid:'First step, at 3–5 years: add the business side. One product or affiliate line you control. One email list you own. Products and affiliate income are 21.2% of creator income. It’s the only part that grows every year.',
    senior:'First step, at 5+ years: price the business, not the hours. Every 3 months, write down RPM, deal rate and how much income you own. Compare your total with the $74,750 a staff job pays.'}
};
/* ===== ANALYST (sixth package, Nov 1, 2026) — v1.1 layer.
   Source: ~/workspace/pathcheck-analyst-pilot/ (46-posting scan, BLS).
   Gate registry data for this profession lives in the extension IIFE
   below (index.html is at its upload cap; its globals are mutated at
   DOMContentLoaded, before the deep-link boot runs). ===== */
QUOTES.analyst = {q:'I once spent three weeks on a dashboard I was proud of. Two months later, I checked the usage numbers. Four people had opened it, and one of them was me.',
  by:'Abhik S. — data analyst, 11+ years in data work, on Medium (Oct 31, 2026)',
  url:'https://abhiks1999.medium.com/5-dashboard-design-rules-that-made-my-stakeholders-actually-use-my-reports-97d70e3b4155'};
QUOTES.dataanalyst = {q:'I once spent three weeks on a dashboard I was proud of. Two months later, I checked the usage numbers. Four people had opened it, and one of them was me.',
  by:'Abhik S. — data analyst, 11+ years in data work, on Medium (Oct 31, 2026)',
  url:'https://abhiks1999.medium.com/5-dashboard-design-rules-that-made-my-stakeholders-actually-use-my-reports-97d70e3b4155'};
/* No QUOTES.businessanalyst: the business side has no practitioner
   quote that verified at the source. The grid wrapper in the
   extension IIFE below renders an honest no-quote line instead. */
QUOTES.aicreator = {q:'Many projects were being put on hold or cancelled due to problems beyond our control. Often it was the fault of the influencer or model.',
  by:'Rubén Cruz — founder of The Clueless, the agency behind AI influencer Aitana López, to Euronews (Nov 2023)',
  url:'https://www.euronews.com/next/2023/11/22/meet-the-first-spanish-ai-model-earning-up-to-10000-per-month'};
GV11.analyst = {hook:'One junior analyst job. 1,108 applications.', next:NEXT_ANALYST};
GV11.dataanalyst = {hook:'One junior analyst job. 1,108 applications.', next:NEXT_DATA};
GV11.businessanalyst = {hook:'AI now writes the requirements doc. That was the job.', next:NEXT_BIZ};
GV11.aicreator = {hook:'TikTok has labeled 3 billion AI videos.', next:NEXT_AICREATOR};
PROF_STEPS.analyst = {
  student:'First step, as a student: skip the certificate-first plan. Learn SQL and one BI tool (for dashboards). Make one dashboard that helps a real decision. Job posts want proof, not certificates (SQL is in 43 of 46).',
  early:'First step, early in: switch jobs before the reporting title sticks. Aim your SQL at a product or analytics-engineering job. One junior reporting job got 1,108 applications.',
  mid:'First step, at 3–5 years: own one decision or one data model. Run an A/B test from start to finish. Or ship a dbt model (a clean data table). $130K+ job posts look for these two proofs.',
  senior:'First step, at 5+ years: show the decisions you changed, not how many reports you made. Strategy and lead product jobs pay $124K–$300K for that.'};
PROF_STEPS.dataanalyst = {
  student:'First step, as a student: skip the certificate-first plan. Learn SQL and one BI tool (for dashboards). Make one dashboard that helps a real decision. Job posts want proof, not certificates (SQL is in 24 of 24 data job posts).',
  early:'First step, early in: switch jobs before the reporting title sticks. Aim your SQL at a product or analytics-engineering job. One junior reporting job got 1,108 applications.',
  mid:'First step, at 3–5 years: own one decision or one data model. Run an A/B test from start to finish. Or ship a dbt model (a clean data table). $130K+ job posts look for these two proofs.',
  senior:'First step, at 5+ years: show the decisions you changed, not how many reports you made. Strategy and lead product jobs pay $124K–$300K for that.'};
PROF_STEPS.businessanalyst = {
  student:'First step, as a student: don’t aim a degree at writing documents. Learn Excel really well, plus working SQL. Improve one process, and show the number. Strategy jobs look for decisions, not documents.',
  early:'First step, early in: move sideways while your years with business teams still count. Aim at a product analyst or strategy job. Document years don’t lead anywhere.',
  mid:'First step, at 3–5 years: own one decision from start to finish. A number you chose to track, or a call you made. $96K+ strategy jobs look for that proof.',
  senior:'First step, at 5+ years: charge for knowing the systems, not for documents. The one top BA pay we found ($129,840–$194,760, Citi) is for ten years inside one bank’s systems.'};
PROF_STEPS.aicreator = {
  student:'First step, as a student: don’t make a fake character or a mass channel. Build AI video skills with your own face. Or for one local brand. The paying jobs are real-face work and work for brands.',
  early:'First step, early in: make 10 finished pieces with your AI tools. Write down your minutes per piece. Your speed is your first proof. This market has no license, so just start!',
  mid:'First step, at 3–5 years: set prices from the market. Use monthly deals, priced against the $154 human-video average. Never price per clip against $4-an-hour overseas workers.',
  senior:'First step, at 5+ years: your clients and your audience are what’s valuable. Charge for judgment (hooks, tests, results), not for clips. Everyone pays the same $29 a month for tools.'};
V11.genba = {hook:'Junior business analyst jobs pay $51K–$82K.', conf:'High', next:NEXT_BIZ,
  coe:'Turning away now saves ≈$50K a year at the midpoints. Junior BA jobs pay $51K–$82K (midpoint ≈$66.5K). Strategy & operations analyst jobs pay $96K–$138K (midpoint ≈$117K) (derived).',
  step:{
    student:'First step, as a student: don’t aim a degree at documents. Learn SQL and get proof of work with business teams. Product and strategy jobs look for both. Job posts want proof, not certificates.',
    early:'First step, early in: move sideways while your years with business teams still count. Aim at a product analyst or strategy job. Document years don’t lead anywhere.',
    mid:'First step, at 3–5 years: own one decision from start to finish. A number you chose to track, or a call you made. $96K+ strategy jobs look for that proof.',
    senior:'First step, at 5+ years: charge for knowing the systems, not for documents. The one top BA pay we found ($129,840–$194,760, Citi) is for ten years inside one bank’s systems.'}};
V11.reportda = {hook:'Four people opened the dashboard. One of them made it.', conf:'High', next:NEXT_DATA,
  coe:'Turning away now saves ≈$52K a year. That’s the gap between beginner reporting pay ($60K–$75K) and typical data-scientist pay ($120,230). The same SQL years can get you there (derived).',
  step:{
    student:'First step, as a student: skip the certificate-first plan. Learn SQL and one BI tool (for dashboards). Make one dashboard that helps a real decision. SQL is in 24 of 24 data job posts we read.',
    early:'First step, early in: switch jobs before the reporting title sticks. Aim your SQL at a product or analytics-engineering job. One junior reporting job got 1,108 applications.',
    mid:'First step, at 3–5 years: own one decision or one data model. Run an A/B test from start to finish. Or ship a dbt model (a clean data table). $130K+ job posts look for these two proofs.',
    senior:'First step, at 5+ years: show the decisions you changed, not how many reports you made. Strategy and lead product jobs pay $124K–$300K for that.'}};
V11.prodan = {hook:'Product analysts earn up to $300,067. Reporting analysts top out at $75K.', conf:'High', next:NEXT_DATA};
V11.aneng = {hook:'dbt is in 7 of 7 analytics-engineer job posts.', conf:'High', next:NEXT_DATA};
V11.bizops = {hook:'Google pays strategy analysts $124K–$177K. It asks for SQL first.', conf:'Medium', next:NEXT_BIZ};
V11.dsgate = {hook:'Data scientists grow 35%. The fastest growth here.', conf:'High', next:NEXT_DATA};

V11.aimass = {hook:'Two million subscribers. Shut down anyway.', conf:'High', next:NEXT_AICREATOR,
  coe:'Turning away now saves ~1,000 hours (≈$36,100 of work at typical editor pay). That’s time on a channel YouTube can delete in one sweep.',
  step:{
    student:'First step, as a student: don’t make the junk version of your idea. If a text prompt could remake it, YouTube pays $0. Make the version with your face, your voice, or a client’s name on it.',
    early:'First step, early in: check all your posts against YouTube’s fake-content rule. Its exact words: mass-produced, generic, repetitive. Posts like that are one sweep away from $0.',
    mid:'First step, at 3–5 years: move your skills, not your old videos. The same tools pay $40K–$70K in agency job posts for brands. Used for mass uploads, they get channels shut down.',
    senior:'First step, at 5+ years: aim your years at buyers. A client list survives if a channel is deleted. Subscribers don’t.'}};
V11.persona = {hook:'Capitol dropped its AI rapper in nine days.', conf:'Medium', next:NEXT_AICREATOR,
  coe:'Turning away now saves ≈$18,000 a year of evening work. That’s about 500 hours at typical editor pay. The best-known case earns its agency just €3,000 a month.',
  step:{
    student:'First step, as a student: love making characters? Learn it as a service skill. Agencies hire character builders. Audiences don’t pay characters.',
    early:'First step, early in: count honestly. Only about 214 known virtual influencers exist in the world. Unless a brand already pays you, the character costs money. It doesn’t earn it.',
    mid:'First step, at 3–5 years: sell the studio, not the character. Brands pay for AI models as a service. That’s how Aitana’s agency makes its €3,000 months.',
    senior:'First step, at 5+ years: your real value is the clients behind the character. Charge for that. The character alone has no second buyer.'}};
V11.aistreamer = {hook:'The biggest AI streamer is one programmer’s software.', conf:'Medium', next:NEXT_AICREATOR,
  coe:'Turning away now saves the months of coding this needs before your first stream. Its one success spent 3+ years building, not streaming.'};
V11.aipipeline = {hook:'One face. 175 languages. The face is yours.', conf:'Medium', next:NEXT_AICREATOR,
  step:{
    student:'First step, as a student: film two sample videos for products you already own. Your face in them, AI doing the cuts. Buyers look at the person first.',
    early:'First step, early in: finish your first two paid jobs. The average paid UGC job is $154. For buyers, two finished jobs beat any follower count.',
    mid:'First step, at 3–5 years: add a second language. Dub your best pieces (the tools cover 175 languages). Sell your face where others can’t reach.',
    senior:'First step, at 5+ years: sell judgment, not clips. Your years are worth money as creative direction. Hooks, tests and reading results — a prompt can’t do those.'}};
V11.aiservice = {hook:'AI makes the ad for $1. Humans get $154.', conf:'Medium', next:NEXT_AICREATOR};

var STAGES = [['student','Student'],['early','0\u20132 yrs in'],['mid','3\u20135 yrs in'],['senior','5+ yrs in']];
var INVS = [['zero','$0'],['under5','Under $5K'],['mid','$5\u201325K'],['over','Over $25K']];
var STATES = {'alabama':'AL','alaska':'AK','arizona':'AZ','arkansas':'AR','california':'CA','colorado':'CO','connecticut':'CT','delaware':'DE','district of columbia':'DC','washington dc':'DC','florida':'FL','georgia':'GA','hawaii':'HI','idaho':'ID','illinois':'IL','indiana':'IN','iowa':'IA','kansas':'KS','kentucky':'KY','louisiana':'LA','maine':'ME','maryland':'MD','massachusetts':'MA','michigan':'MI','minnesota':'MN','mississippi':'MS','missouri':'MO','montana':'MT','nebraska':'NE','nevada':'NV','new hampshire':'NH','new jersey':'NJ','new mexico':'NM','new york':'NY','north carolina':'NC','north dakota':'ND','ohio':'OH','oklahoma':'OK','oregon':'OR','pennsylvania':'PA','rhode island':'RI','south carolina':'SC','south dakota':'SD','tennessee':'TN','texas':'TX','utah':'UT','vermont':'VT','virginia':'VA','washington':'WA','west virginia':'WV','wisconsin':'WI','wyoming':'WY'};
var PERS = {stage:null, inv:null, stateCode:'', stateName:''};
function parseState(raw){
  var t = (raw || '').trim().toLowerCase().replace(/\./g,'');
  if (!t) return null;
  if (/^[a-z]{2}$/.test(t)){
    var c = t.toUpperCase();
    for (var n in STATES) if (STATES[n] === c) return {code:c, name:n.replace(/\b\w/g, function(ch){ return ch.toUpperCase(); })};
    return {code:'', name:raw.trim()};
  }
  if (STATES[t]) return {code:STATES[t], name:t.replace(/\b\w/g, function(ch){ return ch.toUpperCase(); })};
  return {code:'', name:raw.trim()};
}
function stateFact(prof, code, name){
  if (!name) return '';
  if (prof === 'cpa'){
    if (code === 'CA') return 'Your state: California licenses at 120 credits + 2 years of work (AB 1175, from Jan 1, 2026). The fifth year of school is optional for you. Nice!';
    if (code === 'TX') return 'Your state: Texas licenses at 120 credits + 2 years of work (SB 262, from Aug 1, 2026). The fifth year of school is optional for you. Nice!';
    if (code === 'NY') return 'Your state: New York passed a 120-credit + 2-year route (Nov 2025). The fifth year of school is optional for you. Nice!';
    if (code === 'WI') return 'Your state: Wisconsin passed a 120-credit route (Act 166). Check its work-experience rule before paying for a fifth year.';
    if (code === 'CO') return 'Your state: Colorado’s 120-credit route starts Jan 1, 2027. Plan your exam around it, and you can save a year of school.';
    return 'Your state: ≈32 states passed a 120-credit + 2-year route. If ' + name + ' is one of them, the fifth year costs you $0. Check with your state board; this changes often.';
  }
  if (prof === 'nurse'){
    if (code === 'CA' || code === 'TX' || code === 'FL') return 'Your state: ' + name + ' limits NPs (a Restricted-practice state). An NP there must work under a doctor’s watch their whole career. The same license is worth more in a full-practice state.';
    if (code === 'NY') return 'Your state: New York is a Full Practice state. NPs there answer only to the nursing board. So the license is worth full pay.';
    if (code === 'VA') return 'Your state: Virginia job posts call NP jobs “Autonomous Practice” (working on your own). It’s on the full-practice side of the map.';
    return 'Your state: 27 states + DC are Full Practice, 12 Reduced, 11 Restricted. CA, TX, FL are all Restricted. Where ' + name + ' falls decides what an NP license is worth there. The Full Report works it out.';
  }
  if (prof === 'law'){
    return 'Your state: the bar exam just changed. The NextGen exam replaced the old one (first results Sep 2026, 72.7% pass rate). Which exam and timeline apply in ' + name + ' depends on your state. The Full Report checks that first.';
  }
  if (prof === 'creator'){
    return 'Your state: no state license decides what a creator earns in ' + name + '. The platforms set the rules, the same in every state. On 1 February 2027 the YouTube entry bar doubles. Your state only changes your taxes.';
  }
  if (prof === 'analyst'){
    return 'Your state: no license decides what an analyst earns in ' + name + '. This work has no license at all. Pay depends on the job and the city. The same reporting job pays $60K–$75K in Atlanta. Product jobs pay $145K+ at remote-first tech companies.';
  }
  if (prof === 'dataanalyst'){
    return 'Your state: no license decides what a data analyst earns in ' + name + '. This work has no license at all. Pay depends on the job and the city. The same reporting job pays $60K–$75K in Atlanta. Product jobs pay $145K+ at remote-first tech companies.';
  }
  if (prof === 'businessanalyst'){
    return 'Your state: no license decides what a business analyst earns in ' + name + '. This work has no license at all. Pay depends on the job. The document version pays $51K–$82K for juniors. Strategy jobs pay $124K–$177K.';
  }
  if (prof === 'aicreator'){
    if (code === 'NY') return 'Your state: New York is the first state with an AI-ad law. Ads with an AI performer must say so (§396-b, since June 2026). If your AI people appear in ads, the label is a must in ' + name + '.';
    return 'Your state: no license decides this work in ' + name + '. Platform AI rules are the same in every state. One state law exists: New York requires a label on ads with an AI performer (since June 2026).';
  }
  return 'Your state: no state rule in our finance data changes this verdict. Pay depends on the job you pick, not the state.';
}
function composeDoor(){
  var stepEl = document.getElementById('doorStep');
  var stEl = document.getElementById('doorState');
  if (!stepEl || !stEl) return;
  var v = V11[S.seat] || {};
  var step = '';
  if (PERS.stage){
    var steps = v.step || PROF_STEPS[S.prof];
    step = (steps && steps[PERS.stage]) || '';
    if (PERS.inv === 'over' && step) step = 'The $25K+ is spent either way. This path is judged from today, not from what you’ve already spent. ' + step.replace(/^First step[^:]*:\s*/, '').replace(/^./, function(ch){ return ch.toUpperCase(); });
  } else if (PERS.inv === 'over'){
    step = 'The $25K+ is spent either way. This path is judged from today, not from what you’ve already spent.';
  }
  stepEl.textContent = step;
  stepEl.style.display = step ? 'block' : 'none';
  var sf = stateFact(S.prof, PERS.stateCode, PERS.stateName);
  stEl.textContent = sf;
  stEl.style.display = sf ? 'block' : 'none';
}
function renderPers(){
  PERS = {stage:null, inv:null, stateCode:'', stateName:''};
  var st = document.getElementById('pStage');
  if (!st) return;
  st.innerHTML = STAGES.map(function(x){ return '<button class="pchip" data-k="' + x[0] + '" onclick="pickStage(this)">' + x[1] + '</button>'; }).join('');
  document.getElementById('pInv').innerHTML = INVS.map(function(x){ return '<button class="pchip" data-k="' + x[0] + '" onclick="pickInv(this)">' + x[1] + '</button>'; }).join('');
  document.getElementById('pState').value = '';
  composeDoor();
}
function resetPers(){ renderPers(); }
function pickStage(btn){
  PERS.stage = btn.getAttribute('data-k');
  var kids = btn.parentNode.children;
  for (var i=0;i<kids.length;i++) kids[i].classList.toggle('on', kids[i] === btn);
  composeDoor();
}
function pickInv(btn){
  PERS.inv = btn.getAttribute('data-k');
  var kids = btn.parentNode.children;
  for (var i=0;i<kids.length;i++) kids[i].classList.toggle('on', kids[i] === btn);
  composeDoor();
}
document.getElementById('pState').addEventListener('input', function(){
  var p = parseState(this.value);
  PERS.stateCode = p ? p.code : '';
  PERS.stateName = p ? p.name : '';
  composeDoor();
});


/* ===== EMAIL-FIRST GATE (founder decision, Nov 1, 2026).
   The check panel's first screen is now ONE window: email + "You work
   as … now" + "You want to become …" → submit → the lead is saved and
   the result is issued. The window IS the registration (no separate
   signup); the email is the key to the path, exactly as restore-by-
   email already works in /app. SUBJECT RULE (founder model, Nov 1,
   2026): the check runs on the TARGET ("want to become") whenever it
   is filled — the current profession is never researched or given a
   verdict; it rides only as context in personalize.from, and
   self_role (the demand/creation queue) = the subject string. The
   target also rides in the lead payload (personalize.target).
   index.html is frozen at its byte cap, so the window markup is
   injected here. ORDERING: this IIFE sits BEFORE the analyst data
   block below, so its DOMContentLoaded handler runs before the
   analyst chip injection (the injected .chips row still gains its
   analyst chip) and before the deep-link boot (which prefills this
   window's "want" field). The result screens keep their legacy
   name+email strips in the markup, but in this flow the lead is
   already saved at submit time — afterRender() swaps each strip for
   its saved state, so nobody is asked for an email twice.
   PRICE (founder decision, Nov 1, 2026): the Full Report is $5, not
   $19. The $19 strings live in the frozen index.html, so fixPrices()
   rewrites the RENDERED text ($19 → $5, never touching $195K-style
   data figures) on every result render, and the founder appeal line
   is injected under the $5 button, before the free-share button. ===== */
(function(){
  var EF = {leadId:null, email:'', checkedStr:'', checkedProf:null, wantStr:'', target:null, pathHTML:''};
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var SEND_MINI_API = 'https://careerglitch.com/api/send-mini';
  var RESTORE_API = 'https://careerglitch.com/api/path-restore';
  function gel(id){ return document.getElementById(id); }

  /* EMAIL-KEYED RECOGNITION (founder ruling, Nov 1, 2026: «Не надо,
     чтобы так сохранялось просто на главной странице»): a path is
     keyed by the person's EMAIL, not by this browser. The email from
     a successful submit is remembered on the device (pathcheck_email)
     so the returning-user bar below can resolve the lead FROM THE
     SERVER; and every submit first asks the server whether this
     email already owns a lead for the subject being checked. */
  function storeEmail(email){
    try { localStorage.setItem('pathcheck_email', email); } catch(e){}
  }
  /* POST /api/path-restore. With `match` ({kind, prof, seat, typed})
     the server scans this email's recent PathCheck leads and flags
     the one whose SUBJECT matches (matched:true). Resolves to the
     parsed body on HTTP 200, else null — a lookup failure NEVER
     blocks the check; the caller falls back to creating the lead.
     A soft 3s abort keeps a hung lookup from stranding the submit. */
  function restoreByEmail(email, match){
    return new Promise(function(resolve){
      var done = false;
      function fin(v){ if (!done){ done = true; resolve(v); } }
      var ctrl = null, timer = null;
      try {
        if ('AbortController' in window){
          ctrl = new AbortController();
          timer = setTimeout(function(){ try { ctrl.abort(); } catch(e){} fin(null); }, 3000);
        }
        var body = {email: email};
        if (match) body.match = match;
        fetch(RESTORE_API, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body), signal: ctrl ? ctrl.signal : undefined})
          .then(function(r){
            if (timer) clearTimeout(timer);
            if (!r.ok){ fin(null); return; }
            r.json().then(function(j){ fin((j && j.ok) ? j : null); }, function(){ fin(null); });
          })
          .catch(function(){ if (timer) clearTimeout(timer); fin(null); });
      } catch(e){ fin(null); }
    });
  }

  /* $19 → $5 in rendered text nodes only; (?!\d) keeps data figures
     like $195K / $194,760 intact. */
  function fixPrices(root){
    if (!root || !document.createTreeWalker) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (var i = 0; i < nodes.length; i++){
      var v = nodes[i].nodeValue;
      if (v && v.indexOf('$19') !== -1) nodes[i].nodeValue = v.replace(/\$19(?!\d)/g, '$5');
    }
  }

  /* FREE-REPORT RULE (founder ruling, Nov 1, 2026): the share itself
     unlocks the Full Report — nobody waits for a friend to finish a
     check. The old condition strings live in the frozen index.html
     (share boxes, checkout modal, verdict-card footer), so they are
     rewritten here at render, exactly like the $19 → $5 pass. The
     card IMAGE is untouched: it prints only "Check yours free ♥
     careerglitch.com", per the founder's 30.10 on-image rule. */
  var SHARE_COPY = [
    [' Your Full Report unlocks free when ', ' '],
    ['1 person completes their own Path Check', 'Share it \u2014 and your Full Report is free.'],
    [' through it \u2014 not a repost, a finished check.', ' The share itself is enough \u2014 nobody has to finish a check first.'],
    ['Pilot link — it has your name, so finished checks count for you.', 'Your own link \u2014 it carries your name.'],
    [' Share your personal link from the verdict card. When 1 person finishes a check through it, your report unlocks.', ' Share your verdict card. Sharing it makes your Full Report free. That’s all!'],
    ['OR FREE WHEN 1 PERSON COMPLETES A CHECK VIA YOUR LINK', 'OR FREE WHEN YOU SHARE THIS CARD']
  ];
  function rewriteShareCopy(root){
    if (!root || !document.createTreeWalker) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (var i = 0; i < nodes.length; i++){
      var v = nodes[i].nodeValue;
      if (!v) continue;
      for (var k = 0; k < SHARE_COPY.length; k++){
        if (v.indexOf(SHARE_COPY[k][0]) !== -1) v = v.split(SHARE_COPY[k][0]).join(SHARE_COPY[k][1]);
      }
      if (v !== nodes[i].nodeValue) nodes[i].nodeValue = v;
    }
  }
  function fixGateText(root){ fixPrices(root); rewriteShareCopy(root); }

  function mkBlock(screenId, id, beforeSel){
    var scr = gel(screenId);
    if (!scr || gel(id)) return;
    var d = document.createElement('div');
    d.className = 'corner'; d.id = id; d.style.display = 'none';
    var anchor = scr.querySelector(beforeSel);
    if (anchor) scr.insertBefore(d, anchor); else scr.appendChild(d);
  }

  function buildWindow(){
    var s0 = gel('s0');
    if (!s0 || gel('efEmail')) return;
    s0.innerHTML =
      '<div class="q-kicker">Your path \u2014 start here</div>' +
      '<div class="q-title">Your job now. The job you want.</div>' +
      '<label class="fl" for="efEmail" style="margin-top:0">Your email</label>' +
      '<input class="txt" id="efEmail" type="email" autocomplete="email" placeholder="you@example.com">' +
      '<label class="fl" for="efNow">You work as \u2026 now</label>' +
      '<input class="txt" id="efNow" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="bookkeeper \u00B7 nurse \u00B7 welder \u00B7 teacher\u2026">' +
      '<label class="fl" for="efWant">You want to become \u2026</label>' +
      '<input class="txt" id="efWant" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="controller \u00B7 registered nurse \u00B7 product analyst\u2026">' +
      '<p class="fineprint" id="efErr" style="color:var(--deep);display:none"></p>' +
      '<div class="check-nav"><button class="backlink" onclick="backHome()">\u2190 back</button><button class="btn" id="efGo" type="button">Show my path \u2665</button></div>' +
      '<p class="fineprint">Your short check comes to this inbox. Your path opens with this email \u2014 no password.</p>' +
      '<div class="readyline"><span class="rl-lab">Full checks ready now:</span>' +
      '<div class="chips">' +
      '<button class="chip" onclick="pickChip(\'law\')">Law</button>' +
      '<button class="chip" onclick="pickChip(\'cpa\')">Accounting &amp; CPA</button>' +
      '<button class="chip" onclick="pickChip(\'nurse\')">Nursing</button>' +
      '<button class="chip" onclick="pickChip(\'fin\')">Finance &amp; FP&amp;A</button>' +
      '<button class="chip" onclick="pickChip(\'creator\')">Content Creator</button>' +
      '</div></div>';
    gel('efGo').addEventListener('click', submitEF);
    ['efEmail','efNow','efWant'].forEach(function(id){
      var el = gel(id);
      el.addEventListener('keydown', function(e){ if (e.key === 'Enter'){ e.preventDefault(); submitEF(); } });
      el.addEventListener('input', function(){ gel('efErr').style.display = 'none'; });
    });
    /* Target blocks on the result screens + the waitlist email echo. */
    mkBlock('s8', 'efTarget8', '.strip');
    mkBlock('s9', 'efTarget9', '.strip');
    var done = gel('wlDone');
    if (done){
      var echo = document.createElement('p');
      echo.className = 'wl-lede'; echo.id = 'efWlEcho'; echo.style.display = 'none';
      var title = done.querySelector('.q-title');
      if (title && title.nextSibling) done.insertBefore(echo, title.nextSibling); else done.appendChild(echo);
      var tb = document.createElement('div');
      tb.className = 'corner'; tb.id = 'efTarget7'; tb.style.display = 'none';
      var wp = gel('wlPath');
      if (wp) done.insertBefore(tb, wp); else done.appendChild(tb);
    }
    /* Founder appeal: directly under the $5 button, before the
       "Get it free — share your link" button, in both result screens. */
    document.querySelectorAll('#s8 .actions, #s9 .actions').forEach(function(act){
      if (act.querySelector('.ef-appeal')) return;
      var p = document.createElement('p');
      p.className = 'insider-v ef-appeal';
      p.style.marginTop = '0'; p.style.marginBottom = '0';
      p.textContent = '\uD83E\uDD79 I\u2019m a girl solo founder, trying to grow this project. Your support will help me make something great. If you don\u2019t have the money \u2014 share this in your socials and get it free.';
      var dark = act.querySelector('.btn.dark');
      if (dark && dark.nextSibling) act.insertBefore(p, dark.nextSibling); else act.appendChild(p);
    });
    fixGateText(gel('s8')); fixGateText(gel('s9')); fixGateText(gel('mParents')); fixGateText(gel('mCheckout'));
  }

  function efError(msg){
    var e = gel('efErr');
    if (e){ e.textContent = msg; e.style.display = 'block'; }
  }

  function resolveTarget(){
    if (!EF.wantStr){ EF.target = null; return; }
    var tm = (typeof matchJob === 'function') ? matchJob(EF.wantStr) : null;
    EF.target = {typed: EF.wantStr, prof: tm ? tm.prof : null, seat: (tm && tm.type === 'seat') ? tm.seat : null};
  }

  function submitEF(){
    var email = gel('efEmail').value.trim();
    var now = gel('efNow').value.trim();
    var want = gel('efWant').value.trim();
    if (!EMAIL_RE.test(email)){ efError('Please add a valid email \u2014 your short check goes there.'); gel('efEmail').focus(); return; }
    if (!now && !want){ efError('Tell us at least one: your job now \u2014 or the job you want.'); return; }
    /* Founder model (Nov 1, 2026): THE TARGET IS THE SUBJECT.
       We do not research and never verdict the job the person works
       now. Whenever "want to become" is filled, the match, the
       result, the lead, the mini-email and the path ALL run on the
       want string. The current profession is context only — it rides
       in personalize.from verbatim and is shown nowhere as a result.
       Server-side self_role = the subject string, so the demand /
       creation queue accumulates WANTS. Want empty → the subject is
       the current profession (the original fallback). */
    var subjectStr = want || now;
    EF.email = email; EF.wantStr = want; EF.checkedStr = subjectStr;
    S.typed = subjectStr; S.email = email;
    var m = matchJob(subjectStr);
    EF.checkedProf = m ? m.prof : null;
    resolveTarget();
    var pers = EF.target ? {target: EF.target} : null;
    if (now && want){
      pers = pers || {};
      pers.from = {typed: now};
    }
    var payload;
    if (m && m.type === 'seat') payload = {name:'', email:email, prof:m.prof, typed:subjectStr, seat:m.seat, kind:'seat', personalize:pers, ua:uaKind()};
    else if (m && m.type === 'grid') payload = {name:'', email:email, prof:m.prof, typed:subjectStr, seat:null, kind:'grid', personalize:pers, ua:uaKind()};
    else payload = {name:'', email:email, prof:'waitlist', typed:subjectStr, seat:null, kind:'waitlist', personalize:pers, ua:uaKind()};
    var btn = gel('efGo');
    btn.disabled = true; btn.textContent = 'Checking\u2026';
    /* DEDUPE (email-keyed recognition): if this email already owns a
       lead for THIS subject, continue THAT lead — same id, same
       progress — instead of writing a duplicate row. A different
       subject still creates its own lead below (testing professions
       stays possible; the newest lead for the email then becomes
       the recognized one). The lookup is best-effort: on any failure
       the flow falls through to creating the lead, as before. */
    var matchArg = (m && m.type === 'seat') ? {kind:'seat', prof:m.prof, seat:m.seat, typed:subjectStr}
      : (m && m.type === 'grid') ? {kind:'grid', prof:m.prof, seat:null, typed:subjectStr}
      : {kind:'waitlist', prof:null, seat:null, typed:subjectStr};
    restoreByEmail(email, matchArg).then(function(found){
      if (found && found.matched && found.lead_id){
        finishSave(found.lead_id);
        return;
      }
      backupLead({name:'', email:email, prof:(m ? m.prof : 'waitlist'), typed:subjectStr, seat:(m && m.type === 'seat' ? m.seat : (m ? 'grid' : null)), ts:new Date().toISOString()});
      postLead(payload).then(function(j){
        finishSave(j.lead_id);
      }).catch(function(){
        btn.disabled = false; btn.textContent = 'Show my path \u2665';
        efError('That didn\u2019t save \u2014 check the email and try again.');
      });
    });
    function finishSave(leadId){
      btn.disabled = false; btn.textContent = 'Show my path \u2665';
      EF.leadId = leadId;
      /* pathBtn also writes pathcheck_lead_id — on the dedupe path
         that write is what re-points this browser at the person's
         existing lead. */
      EF.pathHTML = pathBtn({lead_id: leadId});
      storeEmail(EF.email);
      /* The mini-check email: fire-and-forget — a failed or
         not-yet-live endpoint never touches this flow. The endpoint
         is idempotent per lead, so a deduped continuation never
         double-sends. */
      try {
        fetch(SEND_MINI_API, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({leadId: leadId})}).catch(function(){});
      } catch(e){}
      if (typeof window.__pcBarRefresh === 'function'){ try { window.__pcBarRefresh(); } catch(e){} }
      if (m && m.type === 'seat') showSeat(m.prof, m.seat, false);
      else if (m && m.type === 'grid') showGrid(m.prof);
      else showWaitlistDone();
    }
  }

  function applySaved(pre){
    var form = gel(pre + 'Form');
    if (form) form.style.display = 'none';
    var ok = gel(pre + 'Ok');
    if (ok){
      ok.innerHTML = '<span class="ok">You\u2019re in \u2713</span> \u2014 your short check is on its way to <b>' + esc(EF.email) + '</b>. This email is your key: your path opens with it \u2014 no password.' + EF.pathHTML;
      ok.style.display = 'block';
    }
    var l2 = gel('shareLink2'), l3 = gel('shareLink3');
    if (l2) l2.value = location.origin + '/r/' + slug();
    if (l3) l3.value = location.origin + '/r/' + slug();
  }

  function targetHTML(){
    /* Retired by the target-is-the-subject model (Nov 1, 2026):
       there is no "your target" side block and no current-profession
       block — the whole result screen IS the subject's result, and an
       unbuilt subject goes to the research screen in its own name.
       The .corner blocks stay in the DOM, always empty/hidden. */
    return '';
  }

  function afterRender(pre){
    fixGateText(gel(pre === 'seat' ? 's8' : 's9'));
    fixGateText(gel('mParents'));
    if (EF.leadId) applySaved(pre);
    var b = gel(pre === 'seat' ? 'efTarget8' : 'efTarget9');
    if (b){ var h = targetHTML(); b.innerHTML = h; b.style.display = h ? 'block' : 'none'; }
  }

  function showWaitlistDone(){
    document.querySelectorAll('.wlT').forEach(function(el){ el.textContent = EF.checkedStr; });
    gel('wlForm').style.display = 'none';
    gel('wlDone').style.display = 'block';
    var echo = gel('efWlEcho');
    if (echo){ echo.innerHTML = 'Research started \u2014 your path comes to <b>' + esc(EF.email) + '</b>.'; echo.style.display = 'block'; }
    var wp = gel('wlPath');
    if (wp && EF.leadId) wp.innerHTML = '<a class="btn" href="/app#' + EF.leadId + '" style="text-decoration:none">Track the research →</a><p class="fineprint" style="margin-top:8px">Your dashboard follows this job while we research it. It opens your path when the answer is ready.</p>';
    var b = gel('efTarget7');
    if (b){ var h = targetHTML(); b.innerHTML = h; b.style.display = h ? 'block' : 'none'; }
    show('s7', 5);
  }

  function install(){
    buildWindow();
    /* Chips no longer jump straight to a grid (that would skip the
       registration window): a chip fills "You want to become\u2026" and
       scrolls to the window. */
    if (typeof window.pickChip === 'function'){
      window.pickChip = function(prof){
        var inp = gel('efWant');
        if (!inp) return;
        inp.value = (typeof PROFS !== 'undefined' && PROFS[prof]) ? PROFS[prof].kick : prof;
        if (typeof startCheck === 'function') startCheck();
        var em = gel('efEmail');
        if (em) setTimeout(function(){ try { em.focus({preventScroll:true}); } catch(e){} }, 420);
      };
    }
    if (typeof window.showSeat === 'function'){
      var _ss = window.showSeat;
      window.showSeat = function(){ var r = _ss.apply(null, arguments); try { afterRender('seat'); } catch(e){} return r; };
    }
    if (typeof window.showGrid === 'function'){
      var _sg = window.showGrid;
      window.showGrid = function(){ var r = _sg.apply(null, arguments); try { afterRender('grid'); } catch(e){} return r; };
    }
    /* Full Report checkout (founder, Nov 1, 2026): the pilot stub
       modal gives way to the real Stripe payment link. The result
       screens exist only after a save, so the saved lead's id and the
       email from this window are known — they ride along as Stripe's
       client_reference_id + prefilled_email params, so a payment can
       be tied back to this exact lead. One click, new tab. If no lead
       was saved (no path leads here), the old pilot modal still opens
       as the fallback. */
    var FR_LINK = 'https://buy.stripe.com/4gM7sKaCF1Mt22IcUXeEo0t';
    function frLink(){
      var parts = [];
      if (EF.leadId) parts.push('client_reference_id=' + encodeURIComponent(EF.leadId));
      if (EF.email) parts.push('prefilled_email=' + encodeURIComponent(EF.email));
      if (!parts.length) return FR_LINK;
      return FR_LINK + (FR_LINK.indexOf('?') === -1 ? '?' : '&') + parts.join('&');
    }
    if (typeof window.openCheckout === 'function'){
      var _oc = window.openCheckout;
      window.openCheckout = function(){
        if (EF.leadId){
          window.open(frLink(), '_blank', 'noopener');
          return;
        }
        var r = _oc.apply(null, arguments); try { fixGateText(gel('mCheckout')); } catch(e){} return r;
      };
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
})();

/* ===== ANALYST gate data (sixth package, Nov 1, 2026).
   index.html is frozen at its ~98.2KB upload cap, so this profession's
   registry data is injected here: at DOMContentLoaded the inline
   globals (PROFS / COFACTS / SEATS / GRIDS / SEAT_RULES /
   CLUSTER_RULES — all read at interaction time) gain the analyst
   cluster, and every .chips row gains its chip. This handler is
   registered BEFORE the deep-link boot below, so ?p= deep links see
   the data too. Matcher audit (Nov 1, 2026): the fin cluster rule
   loses 'analyst', 'data analyst', 'business analyst' — "financial
   analyst" still routes to fin via 'financial' (fin's rule is checked
   first); the new analyst cluster rule sits right after fin's; the
   analyst seat rules are APPENDED, so every existing seat rule keeps
   priority ('bi analyst' still lands on the fin hybrid seat, 'fp&a'
   still lands on the fin seat). Plain 'analyst' → the new cluster.
   SPLIT (Nov 1, 2026, founder ruling "Это разные профы"): the combined
   cluster became TWO professions — dataanalyst (inherits CHARTS) and
   businessanalyst (new code word BRIEF). The legacy 'analyst' registry
   entries are still injected below (existing analyst leads and the
   mini-email data keep rendering), but no chip and no cluster rule
   points at them anymore; bare 'analyst' now routes to dataanalyst. ===== */
(function(){
  function inject(){
    if (typeof PROFS === 'undefined' || PROFS.dataanalyst) return;
    PROFS.analyst = {title:'Your Path Check \u2014 Business / Data Analyst', kick:'Business / Data Analyst', count:46, code:'CHARTS', tail:'PATHCHECK \u2014 KNOW BEFORE YOU PAY FOR THE BOOTCAMP'};
    COFACTS.analyst = [
      '<b>SQL in 43 of 46</b> analyst job posts we read. Every job on this map needs it.',
      '<b>1,108 applications</b> for one junior data analyst job at $60K–$75K. Beginner jobs are the most crowded here.',
      '<b>dbt in 7 of 7</b> analytics-engineer job posts. Senior staff pay there goes up to $244,100.'];
    PROFS.dataanalyst = {title:'Your Path Check \u2014 Data Analyst', kick:'Data Analyst', count:24, code:'CHARTS', tail:'PATHCHECK \u2014 KNOW BEFORE YOU PAY FOR THE BOOTCAMP'};
    COFACTS.dataanalyst = [
      '<b>SQL in 24 of 24</b> data job posts we read. Every job on this map needs it.',
      '<b>1,108 applications</b> for one junior data analyst job at $60K–$75K. Beginner jobs are the most crowded here.',
      '<b>dbt in 7 of 7</b> analytics-engineer job posts. Senior staff pay there goes up to $244,100.'];
    PROFS.businessanalyst = {title:'Your Path Check \u2014 Business Analyst', kick:'Business Analyst', count:22, code:'BRIEF', tail:'PATHCHECK \u2014 KNOW BEFORE YOU PAY FOR THE BOOTCAMP'};
    COFACTS.businessanalyst = [
      '<b>Requirements documents</b> are the main task in <b>8 of 8</b> general business-analyst job posts. The document is the job.',
      '<b>BLS median $101,860</b> for management analysts, <b>+10%</b> growth. Officially, this work sits close to consulting.',
      '<b>AI tools named in 4 of 22</b> business-side job posts. One employer requires them (SanDisk).'];
    SEATS.genba = {prof:'businessanalyst', label:'Business analyst \u2014 requirements & documents',
      head:'GENERALIST BUSINESS ANALYST \u2014 <span class="pink">NO</span> AS YOUR FINAL STOP.',
      facts:[
        ['The pay','Junior BA jobs pay <span class="pink">$51K–$82K</span> · mid-level $65K–$95K'],
        ['The job’s main product','Requirements documents — the main task in <span class="pink">8 of 8</span> general BA job posts we read'],
        ['What AI does to it','Job posts that name AI want it to <span class="pink">draft documentation</span> and speed up gathering requirements (Everpure)']],
      door:'What to do instead: move sideways, not up. Your years with business teams carry over to product analyst and strategy jobs. Document years don’t. The bridge is one decision you can point to.',
      short:'The general business analyst job is a bad bet as your final stop. Its main product is a document AI now drafts. Junior pay is $51K–$82K. Jobs where you help decide pay $96K+.'};
    SEATS.reportda = {prof:'dataanalyst', label:'Data analyst \u2014 reports & dashboards',
      head:'REPORTING DATA ANALYST \u2014 <span class="pink">NO</span> AS YOUR FINAL STOP.',
      facts:[
        ['What beginners face','One junior job, <span class="pink">$60K–$75K</span>, got <span class="pink">1,108 applications</span>'],
        ['The job’s main product','Dashboards — and tools now draft them. Real job posts name <span class="pink">Power BI Copilot</span> and <span class="pink">Tableau AI</span>'],
        ['Top pay in this job','Senior reporting tops out near <span class="pink">$125K</span>. Product analysts earn up to <span class="pink">$300,067</span>']],
      door:'What to do instead: keep the SQL, just use it for something new. Product analyst (experiments) and analytics engineer (data models) both hire from reporting jobs.',
      short:'The reporting data analyst job is a bad final stop. AI can make a dashboard (a chart report) very cheaply. One junior job got 1,108 applications at $60K–$75K.'};
    SEATS.prodan = {prof:'dataanalyst', label:'Product analyst',
      head:'PRODUCT ANALYST \u2014 <span class="pink">YES</span>.',
      facts:[
        ['Posted pay','Meta <span class="pink">$106K\u2013$156K</span> \u00B7 Abnormal <span class="pink">$143K\u2013$168,300</span> \u00B7 Pinterest lead <span class="pink">$145,747\u2013$300,067</span>'],
        ['The screen','A/B testing and experiments in <span class="pink">4 of 4</span> product-analyst job posts'],
        ['The work','You size up new features and decide on launches — <span class="pink">decisions</span>, not reports']],
      door:'What to do: this is a YES job if you can run an experiment start to finish. Go deeper on experiments and numbers. The Full Report shows the order: SQL → experiments → a portfolio of numbers.',
      short:'Product analyst is a good choice. Jobs pay $106K–$300,067. All four product job posts asked for A/B testing (trying version A against version B). The work is making decisions, not reports.'};
    SEATS.aneng = {prof:'dataanalyst', label:'Analytics engineer',
      head:'ANALYTICS ENGINEER \u2014 <span class="pink">YES</span>. THE DATA-MODEL JOB.',
      facts:[
        ['The screen','<span class="pink">dbt</span> is named in <span class="pink">7 of 7</span> analytics-engineer job posts. It’s not a bonus skill. It’s the job'],
        ['Posted pay','<span class="pink">$96,183\u2013$177,758</span> (dbt Engineer II/III) \u00B7 staff <span class="pink">$207,485\u2013$244,100</span> (Coinbase)'],
        ['Why it lasts','Every AI answer reads from <span class="pink">data models</span>. This job builds them. Bad models mean wrong answers']],
      door:'What to do: this is a YES job. Go deeper on dbt, one data warehouse (Snowflake first), and building data models. The Full Report shows the order.',
      short:'Analytics engineering is a good choice. The data tool dbt is in 7 of 7 job posts. Senior staff pay goes up to $244,100. This job builds the clean data tables every AI answer reads from.'};
    SEATS.bizops = {prof:'businessanalyst', label:'Strategy & operations analyst',
      head:'STRATEGY &amp; OPERATIONS ANALYST — <span class="pink">YES</span>, IF YOU CAN GET IN.',
      facts:[
        ['Posted pay','Google senior <span class="pink">$124K\u2013$177K</span> \u00B7 Google analyst <span class="pink">$96K\u2013$138K</span> \u00B7 YouTube <span class="pink">$118K\u2013$170K</span>'],
        ['Getting in','Top job posts want <span class="pink">consulting or banking years</span>. Google’s senior job: 4 years consulting/strategy + 2 years SQL'],
        ['The work','Working with bosses and teams is the main task in <span class="pink">7 of 7</span> strategy &amp; operations job posts']],
      door:'What to do: YES, but it’s hard to get in. One bridge is consulting/banking years. The other is proof from inside: one decision you changed, with numbers. The Full Report shows both bridges.',
      short:'Strategy & operations is a good bet. Google pays $124K–$177K. But top jobs first want years in consulting or banking. This decision job checks where you worked before.'};
    SEATS.dsgate = {prof:'dataanalyst', label:'Data scientist \u2014 the upgrade title',
      head:'DATA SCIENTIST \u2014 <span class="pink">YES</span>, BUT IT IS A DIFFERENT JOB.',
      facts:[
        ['Official data','BLS median <span class="pink">$120,230</span> · growth <span class="pink">+35%</span> (2025–35). The fastest growth on this map'],
        ['The difference','Analysts explain what happened. Scientists <span class="pink">build models that predict</span>. Many job posts ask for a master’s'],
        ['The bridge','Statistics + Python + <span class="pink">one real model</span> \u2014 not more dashboards']],
      door:'What to do: treat it as a new path, not a promotion. Learn statistics and Python, and ship one model. Waiting won’t turn the analyst title into this.',
      short:'Data scientist is a good choice, but a different job. Official data (BLS): typical pay $120,230, growth +35%. You get there with statistics and models. Not with more years of reports.'};
    GRIDS.analyst = {head:'ANALYST IS A YES. THE VERSION THAT ONLY MAKES REPORTS IS A NO.',
      sub:'The word “analyst” covers six different jobs. They get different verdicts:',
      corner:'Pinterest pays a lead product analyst $145,747–$300,067. That job helps decide what to build. Coinbase pays a staff analytics engineer $207,485–$244,100. That job builds clean data tables. The trap: the junior reporting job at $60K–$75K. It got 1,108 applications.',
      short:'“Analyst” is six jobs. Two reporting jobs are a bad end point. One writes documents about needs. One makes charts on request. Product and strategy decision jobs pay $96K–$300K. So does analytics engineering, which builds data tables.',
      rows:[
        ['Business analyst \u2014 requirements & documents','NO','junior pay $51K–$82K · AI drafts the document now','genba'],
        ['Data analyst \u2014 reports & dashboards','NO','beginner pay $60K–$75K · 1,108 applications for one junior job','reportda'],
        ['Product analyst','YES','job posts $106K–$300K · experiments, not reports','prodan'],
        ['Analytics engineer','YES','dbt in 7 of 7 job posts · staff pay to $244,100','aneng'],
        ['Strategy & operations analyst','YES','Google $124K\u2013$177K \u00B7 you sit with executives','bizops'],
        ['Data scientist \u2014 the upgrade title','YES · NEW PATH','BLS median $120,230 \u00B7 +35% growth \u00B7 a different job','dsgate']]};
    GRIDS.dataanalyst = {head:'DATA ANALYST IS A YES. THE VERSION THAT ONLY MAKES REPORTS IS A NO.',
      sub:'The words “data analyst” cover four different jobs. They get different verdicts:',
      corner:'Pinterest pays a lead product analyst $145,747–$300,067. That job helps decide what to build. Coinbase pays a staff analytics engineer $207,485–$244,100. That job builds clean data tables. The trap: the junior reporting job at $60K–$75K. It got 1,108 applications.',
      short:'“Data analyst” is four different jobs. Making charts on request is a bad end point. Two jobs are good choices. Product: helping decide what to build. Analytics engineering: building clean data tables. They pay $96K–$300K. Business analyst is a different job, with its own check.',
      rows:[
        ['Data analyst \u2014 reports & dashboards','NO','beginner pay $60K–$75K · 1,108 applications for one junior job','reportda'],
        ['Product analyst','YES','job posts $106K–$300K · experiments, not reports','prodan'],
        ['Analytics engineer','YES','dbt in 7 of 7 job posts · staff pay to $244,100','aneng'],
        ['Data scientist \u2014 the upgrade title','YES · NEW PATH','BLS median $120,230 \u00B7 +35% growth \u00B7 a different job','dsgate']]};
    GRIDS.businessanalyst = {head:'BUSINESS ANALYST IS A YES. THE JOB OF ONLY WRITING DOCUMENTS IS A NO.',
      sub:'The words “business analyst” cover two different jobs in our check. They get different verdicts:',
      corner:'Strategy & operations helps bosses decide. Google pays a senior strategy analyst $124,000–$177,000. The trap: the junior document job pays $51K–$82K. AI now drafts its main product.',
      short:'“Business analyst” is two different jobs. Writing requirement documents is a dead end. Strategy & operations, helping bosses decide, is a good bet at $96K–$177K. Data Analyst is a different job, with its own check.',
      rows:[
        ['Business analyst \u2014 requirements & documents','NO','junior pay $51K–$82K · AI drafts the document now','genba'],
        ['Strategy & operations analyst','YES','Google $124K\u2013$177K \u00B7 you sit with executives','bizops']]};
    /* Seat rules APPEND: every existing seat rule keeps priority. */
    SEAT_RULES.push(
      [['business systems analyst','it business analyst','requirements analyst','process analyst'],'genba'],
      [['dashboard analyst','reporting data analyst','reports analyst'],'reportda'],
      [['product analyst','product data analyst','growth analyst','marketing analyst'],'prodan'],
      [['analytics engineer','analytics engineering','dbt','data modeler','bi engineer'],'aneng'],
      [['strategy and operations','strategy & operations','business operations','bizops'],'bizops'],
      [['data scientist','data science'],'dsgate']
    );
    /* Cluster rules: fin hands the analyst words to the new cluster. */
    for (var i = 0; i < CLUSTER_RULES.length; i++){
      if (CLUSTER_RULES[i][1] === 'fin'){
        CLUSTER_RULES[i][0] = CLUSTER_RULES[i][0].filter(function(k){ return k !== 'analyst' && k !== 'data analyst' && k !== 'business analyst'; });
        CLUSTER_RULES.splice(i + 1, 0, [['business analyst','business analytics'],'businessanalyst'], [['data analyst','data analytics','analyst'],'dataanalyst']);
        break;
      }
    }
    /* The profession chips, next to the five existing ones. Two chips
       since the split (founder ruling, Nov 1, 2026). */
    var rows = document.querySelectorAll('.chips');
    for (var c = 0; c < rows.length; c++){
      var b1 = document.createElement('button');
      b1.className = 'chip';
      b1.setAttribute('onclick', "pickChip('dataanalyst')");
      b1.textContent = 'Data Analyst';
      rows[c].appendChild(b1);
      var b2 = document.createElement('button');
      b2.className = 'chip';
      b2.setAttribute('onclick', "pickChip('businessanalyst')");
      b2.textContent = 'Business Analyst';
      rows[c].appendChild(b2);
    }
    /* Grid-screen fixups for the split professions (index.html frozen):
       (1) showGrid renders QUOTES[prof] UNGUARDED — the business side
       has no verified practitioner quote, so seed an empty quote for
       the duration of the render, then replace the block with the
       honest no-quote line. (2) Each new grid gains a working sibling
       row at the end: the BA-vs-DA comparison is a cross-note now,
       not the headline. */
    if (typeof window !== 'undefined' && typeof window.showGrid === 'function' && !window.__splitGridWrap){
      window.__splitGridWrap = true;
      var origShowGrid = window.showGrid;
      window.showGrid = function(prof){
        var seeded = false;
        if (prof === 'businessanalyst' && typeof QUOTES !== 'undefined' && !QUOTES.businessanalyst){
          QUOTES.businessanalyst = {q:'', by:'', url:''};
          seeded = true;
        }
        try { origShowGrid(prof); }
        finally { if (seeded) delete QUOTES.businessanalyst; }
        try {
          if (prof === 'businessanalyst'){
            var gq = document.getElementById('gridQuote');
            if (gq) gq.innerHTML = 'No real-world quote on this card. We couldn’t check the business-side quotes at their source. We don’t print quotes we can’t check. The checked analyst quote is about dashboards. It’s on the Data Analyst card. This verdict rests on the job posts.';
          }
          if (prof === 'dataanalyst' || prof === 'businessanalyst'){
            var rowsEl = document.getElementById('gridRows');
            if (rowsEl){
              var sib = document.createElement('button');
              sib.className = 'grow';
              if (prof === 'dataanalyst'){
                sib.setAttribute('onclick', "S.typed='';showGrid('businessanalyst')");
                sib.innerHTML = '<span class="gv" style="background:var(--soft);color:var(--ink)">OTHER MAP</span><span class="gt"><span class="gn">Business Analyst \u2014 a different profession</span><span class="gd">documents &amp; stakeholders \u00B7 BLS median $101,860 \u00B7 it has its own check</span></span><span class="arr">\u2192</span>';
              } else {
                sib.setAttribute('onclick', "S.typed='';showGrid('dataanalyst')");
                sib.innerHTML = '<span class="gv" style="background:var(--soft);color:var(--ink)">OTHER MAP</span><span class="gt"><span class="gn">Data Analyst \u2014 a different profession</span><span class="gd">SQL &amp; dashboards \u00B7 BLS home $120,230 \u00B7 it has its own check</span></span><span class="arr">\u2192</span>';
              }
              rowsEl.appendChild(sib);
            }
          }
        } catch(e){}
      };
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();

/* ===== AI CONTENT CREATOR gate data (seventh package, Nov 1, 2026).
   Founder ruling: "AI content creator" is NOT the plain Content
   Creator — it is its own profession, and the gate used to match the
   string silently to the creator grid. index.html is frozen at its
   byte cap, so this registry data is injected here, like the analyst
   packages above: PROFS / COFACTS / SEATS / GRIDS gain the cluster,
   and every .chips row gains its chip.
   MATCHER AUDIT (the reason this block differs from the others):
   this profession's strings must WIN against the creator cluster —
   "ai content creator" contains the creator keyword "content
   creator" — and against the creator "ugc" seat ("ai ugc"). So its
   SEAT rules are UNSHIFTED (prepended; every other profession
   appends, keeping its own priority) and its CLUSTER rule is spliced
   in immediately BEFORE the creator cluster rule. Its own seat order
   matters too: the mass-channel rule precedes the service rule, so
   "ai video channel" lands on the channel seat, not the service seat.
   Collision check: no keyword here touches the law seats ("ai
   governance" still routes to law's specialist seat — none of these
   strings is part of it), and plain "content creator" / "youtuber" /
   "streamer" still route to creator — no keyword here matches them.
   The creator pack's own "faceless / ai slop / ai channel" strings
   stay where they were (creator's faceless seat): the verdict is the
   same NO, and the boundary between that seat and this pack's
   aimass seat is written out in the package's full report.
   Source: ~/workspace/pathcheck-aicreator-pilot/ (platform rules,
   FTC, live postings, named cases). ===== */
(function(){
  function inject(){
    if (typeof PROFS === 'undefined' || PROFS.aicreator) return;
    PROFS.aicreator = {title:'Your Path Check \u2014 AI Content Creator', kick:'AI Content Creator', count:'3 billion', srcWhat:'videos TikTok has labeled AI-generated', srcLine:'the platforms’ AI rules, FTC rules and real job posts', code:'PROMPT', tail:'PATHCHECK \u2014 KNOW BEFORE YOU PAY FOR THE TOOLS'};
    COFACTS.aicreator = [
      '<b>3 billion videos</b> labeled AI-made on TikTok alone. TikTok is testing a setting so viewers can see less of it.',
      '<b>214 virtual influencers</b> known worldwide. The best-known one earns her agency about <b>€3,000 a month</b>.',
      '<b>$40K–$70K</b> is what one US agency pays for this job. Overseas, the same job pays <b>$4 an hour</b>.'];
    SEATS.aimass = {prof:'aicreator', label:'Faceless AI-mass channel',
      head:'FACELESS AI-MASS CHANNEL \u2014 <span class="pink">NO</span>.',
      facts:[
        ['The rule','YouTube’s <span class="pink">inauthentic-content</span> rule stops mass-made, generic, template AI from earning'],
        ['The enforcement','<span class="pink">16 channels</span> with <span class="pink">35 million</span> subscribers shut down in January 2026 · the two biggest fake-trailer channels (2M+ subscribers) shut down in December 2025'],
        ['The supply','TikTok has labeled <span class="pink">3 billion</span> AI videos. A new channel competes with all of them']],
      door:'What to do instead: keep your AI tools, change what you sell. Put a real face in front. Or sell the same skills to brands as a service. Both ways are on this map.',
      short:'The faceless mass AI channel is a dead end. YouTube stops template AI videos from earning. 16 channels with 35 million subscribers were shut down at once.'};
    SEATS.persona = {prof:'aicreator', label:'AI influencer / virtual persona',
      head:'AI INFLUENCER / VIRTUAL PERSONA \u2014 <span class="pink">NO</span> AS A SOLO PLAN.',
      facts:[
        ['The whole market','About <span class="pink">214</span> known virtual influencers in the world, after ten years'],
        ['The best case','Aitana, ~400K followers, earns the <span class="pink">agency that runs her</span> about <span class="pink">€3,000 a month</span>. That’s a team’s product, not one person’s job'],
        ['The fame trap','FN Meka had <span class="pink">10 million</span> followers and a big record deal. Dropped in <span class="pink">nine days</span>']],
      door:'What to do instead: sell the studio, not the character. Brands pay agencies for AI characters as a service. That job (AI video for brands) is on this map. It’s a YES!',
      short:'A virtual character is a bad bet on your own. Only 214 known ones exist. The best-known earns an agency €3,000 a month. A 10-million-follower AI rapper was dropped in nine days.'};
    SEATS.aistreamer = {prof:'aicreator', label:'AI streamer / AI VTuber',
      head:'AI STREAMER \u2014 <span class="pink">NO</span> AS A PLAN.',
      facts:[
        ['The one success','Neuro-sama holds a Twitch record: <span class="pink">343,215</span> all-time subscribers, #3 in Twitch history'],
        ['What she is','A <span class="pink">custom software system</span> built and run by one programmer since 2022. He also appears on the streams himself'],
        ['The risk','The channel was <span class="pink">banned</span> over things the AI itself said. You answer for whatever it makes up']],
      door:'What to do instead: if you can build her, you’re a developer. Charge for that skill! Want to stream? Stream as a human. A person behind an avatar is a streamer (see the Content Creator check).',
      short:'The AI streamer is a bad plan. The one record-holder here is a programmer’s software project. It’s not a real streaming career.'};
    SEATS.aipipeline = {prof:'aicreator', label:'Real face, AI pipeline',
      head:'REAL FACE, AI PIPELINE \u2014 <span class="pink">YES</span>.',
      facts:[
        ['The rules protect you','YouTube needs <span class="pink">no label</span> for AI help with scripts, ideas or captions. And a label alone never changes earnings'],
        ['The buyer pays for the face','Brands pay an average of <span class="pink">$154</span> per human UGC video. They pay for the face'],
        ['Your special edge','The same tools dub one video into <span class="pink">175 languages</span>. One face, many countries']],
      door:'What to do: this is a YES job. Make 10 pieces with your AI tools and track minutes per piece. Price against the $154 human average. The Full Report shows the order.',
      short:'A real face with AI helpers is a good bet. Brands pay $154 for the human video. The helpers let that face make and share many more videos.'};
    SEATS.aiservice = {prof:'aicreator', label:'AI video for brands',
      head:'AI VIDEO FOR BRANDS \u2014 <span class="pink">YES</span>.',
      facts:[
        ['Posted pay','US agency <span class="pink">$40,000\u2013$70,000</span> a year \u00B7 Europe <span class="pink">\u20AC50,000\u201375,000</span> \u00B7 contract work <span class="pink">$5,000\u2013$10,000</span> a month'],
        ['The floor','The same job overseas: <span class="pink">$4 an hour</span>, 286 listings on one site. The tool costs <span class="pink">$29 a month</span> everywhere'],
        ['What the well-paid job posts ask','Years of video work and a portfolio. The €50–75K job post wants <span class="pink">3–5 years</span> of video making before any AI work']],
      door:'What to do: this is a YES job. Charge for what AI can’t do: hooks, versions, reading results. Use monthly deals. Per-clip prices compete with $4-an-hour workers.',
      short:'AI video for brands is a good bet. Employers pay $40K–$75K for this job. Judgment and clients lift you above $4-an-hour cheap overseas workers.'};
    GRIDS.aicreator = {head:'AI CONTENT CREATOR IS A NO. AI AS YOUR TEAM OF HELPERS IS A YES.',
      sub:'The title covers five different jobs. They get different verdicts:',
      corner:'Two jobs sell a person’s judgment: a real face with AI helpers, and AI video for brands. The trap has a price. A year alone building a fake online character costs ≈500 evening hours (≈$18,000 of work). The best-known case earns its agency €3,000 a month.',
      short:'“AI content creator” is five different jobs. Faceless AI channels, fake characters and AI streamers are a dead end. A real face with AI helpers, or AI video for brands, is a good bet.',
      rows:[
        ['Faceless AI-mass channel','NO','YouTube stops template AI from earning · 16 channels, 35M subscribers, shut down','aimass'],
        ['AI influencer / virtual persona','NO','~214 characters worldwide · the best-known earns her agency €3,000/mo','persona'],
        ['AI streamer / AI VTuber','NO','one act holds the Twitch record — a programmer’s software, built over 3+ years','aistreamer'],
        ['Real face, AI pipeline','YES','brands pay $154 for a human UGC video \u00B7 your face, AI crew','aipipeline'],
        ['AI video for brands','YES','job posts at $40K–$70K · the same job overseas is $4/hr — judgment is the gap','aiservice']]};
    /* Seat rules PREPEND: this profession's strings must beat the
       creator rules below them. Inside the block, the channel rule
       precedes the service rule on purpose (see the audit above). */
    SEAT_RULES.unshift(
      [['faceless ai','ai faceless','ai mass channel','ai video channel','ai generated channel','ai-generated channel'],'aimass'],
      [['ai influencer','virtual influencer','virtual creator','ai persona','virtual persona','synthetic influencer','cgi influencer','ai model'],'persona'],
      [['ai streamer','ai vtuber','virtual streamer','ai live streamer'],'aistreamer'],
      [['ai ugc','ai-assisted ugc','ai assisted ugc'],'aipipeline'],
      [['ai video creator','ai video editor','ai video producer','ai video production','ai video freelancer','ai video agency','ai video maker','ai video specialist','ai ads creator','ai ad creator','ai video'],'aiservice']
    );
    /* Cluster rule: immediately BEFORE the creator cluster rule, so
       "ai content creator" / "ai creator" land here while plain
       "content creator" still falls through to creator. */
    for (var i = 0; i < CLUSTER_RULES.length; i++){
      if (CLUSTER_RULES[i][1] === 'creator'){
        CLUSTER_RULES.splice(i, 0, [['ai content creator','ai creator','ai content creation'],'aicreator']);
        break;
      }
    }
    /* The profession chip, next to the existing ones. */
    var rows = document.querySelectorAll('.chips');
    for (var c = 0; c < rows.length; c++){
      var b = document.createElement('button');
      b.className = 'chip';
      b.setAttribute('onclick', "pickChip('aicreator')");
      b.textContent = 'AI Content Creator';
      rows[c].appendChild(b);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();

/* ===== Deep links: ?p=<profession> prefills the email-first window
   (e.g. ?p=nurse from a comment link). NO silent auto-run anymore —
   under the email-first rules there is no result without an email.
   The value lands in "You want to become\u2026" (normalized as before:
   lowercase, dashes/underscores to spaces), the window opens, and the
   email field is focused; one tap on "Get my result" issues the
   check. With an existing stored lead the returning-user bar below
   behaves exactly as before. This handler is registered after the
   email-first install above, so #efWant exists when it runs. ===== */
(function(){
  function bootDeepLink(){
    var p = null;
    try { p = new URLSearchParams(window.location.search).get('p'); } catch(e){}
    if (!p) return;
    var val = p.toLowerCase().replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
    if (!val) return;
    var want = document.getElementById('efWant');
    if (!want || typeof startCheck !== 'function') return;
    want.value = val;
    startCheck();
    var em = document.getElementById('efEmail');
    if (em) setTimeout(function(){ try { em.focus({preventScroll:true}); } catch(e){} }, 420);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bootDeepLink);
  else bootDeepLink();
})();


/* ===== GRID CONFIDENCE fixups (Nov 1, 2026).
   index.html is frozen; its showGrid hard-codes "Confidence: High"
   on every profession's grid screen. The grid (cluster) confidence
   is a method claim — verified per profession against the pilot
   method files (method-v11.md §1 headline/cluster line and the
   sample verdict cards):
     law High · cpa High · nurse High · fin High · creator High ·
     analyst (legacy) High · dataanalyst High ·
     businessanalyst High (its bizops SEAT is Medium — the seat
     card already prints that; the cluster verdict is High in its
     method file, verdict card and full report) ·
     aicreator MEDIUM (method-v11.md cluster line, verdict card
     and full report all print Medium).
   Only professions whose verified grid confidence differs from
   the hard-coded High are listed below; after the original
   showGrid (and every earlier wrapper) has rendered, the wrapper
   rewrites the confidence line to the verified value. ===== */
(function(){
  var GRID_CONF = { aicreator: 'Medium' };
  function wrap(){
    if (typeof window.showGrid !== 'function' || window.__gridConfWrap) return;
    window.__gridConfWrap = true;
    var orig = window.showGrid;
    window.showGrid = function(prof){
      var r = orig.apply(null, arguments);
      try {
        var conf = GRID_CONF[prof];
        if (conf){
          var span = document.querySelector('#gridHead .vconf');
          if (span) span.textContent = 'Confidence: ' + conf;
        }
      } catch(e){}
      return r;
    };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wrap);
  else wrap();
})();

/* ===== CREATOR STAFF REFRAME lives in /cst.js (split 2026-11-01):
   v11.js hit the ~98KB Vercel upload-argument cap. document.write from
   this parser-inserted classic script loads cst.js synchronously, in
   place -- same execution position as the inline block it replaces.
   Non-browser evaluators (the minidata generator) skip the write and
   evaluate /cst.js themselves. ===== */
if (typeof document !== 'undefined' && typeof document.write === 'function') {
  document.write('<script src="/cst.js"><\/script>');
}

/* ===== CPA TAX SEAT — matcher keywords (Nov 1, 2026).
   Founder ruling: she asked for the EA (Enrolled Agent) tax
   specialist and typed "tax prep spec" at the gate — and landed on
   the whole CPA map. Audit of the live matcher: "enrolled agent",
   "tax preparer" and "tax preparation" already hit the tax seat,
   but "EA" fell through to the WAITLIST and "tax specialist" /
   "tax prep..." fell through to the CPA GRID (the cluster's bare
   "tax"). index.html is frozen, so the missing keywords are added
   here to the EXISTING tax seat rule — its position in SEAT_RULES
   (and therefore its priority) does not move. "ea" is <=3 chars, so
   kwHit matches it on word boundaries only: it cannot fire inside
   another word, and "tax lawyer" still routes to law (no new key
   matches it, and cluster order is untouched). ===== */
(function(){
  function addTaxKeys(){
    if (typeof SEAT_RULES === 'undefined') return;
    for (var i = 0; i < SEAT_RULES.length; i++){
      if (SEAT_RULES[i][1] === 'tax'){
        var keys = SEAT_RULES[i][0];
        ['ea','tax specialist','tax prep'].forEach(function(k){
          if (keys.indexOf(k) === -1) keys.push(k);
        });
        break;
      }
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addTaxKeys);
  else addTaxKeys();
})();

/* ===== EXPANSION WAVE 2 lives in /profs2.js (split 2026-11-01):
   v11.js is at the ~98KB Vercel upload-argument cap. document.write
   from this parser-inserted classic script loads profs2.js
   synchronously, in order; the generator and the test harness
   evaluate /profs2.js themselves. ===== */
if (typeof document !== 'undefined' && typeof document.write === 'function') {
  document.write('<script src="/profs2.js"><\/script>');
}

/* ===== EXPANSION WAVE 3 lives in /profs3.js (split 2026-11-01):
   same document.write split as profs2.js; the generator and the
   test harness evaluate /profs3.js themselves. ===== */
if (typeof document !== 'undefined' && typeof document.write === 'function') {
  document.write('<script src="/profs3.js"><\/script>');
}

/* ===== TOP 1% BUTTON (Nov 1, 2026) — the gate's single door to the path.
   Founder rulings (Nov 1, 2026): (1) the returning-user sticky bar is
   REMOVED from the gate — its element and its server lookup (the one
   that resolved the newest lead for a remembered email on page load)
   are gone entirely ("Ваш путь сохранён" не надо). The /app entry
   screen keeps its own restore-by-email; that lives inside the
   product and is untouched. The email-first window's own dedupe
   lookup is lead flow, not the bar, and stays. The one caller of the
   bar's refresh hook guards it with typeof, so nothing else changes.
   (2) In the bar's place, at the very top of the gate: a slim sticky
   strip with one pink-gradient button — «Стать топ 1% в своей нише»
   / "Become top 1% in your niche" — linking to /app, the path's
   landing. It takes the old bar's slot and behaviour (sticky, hidden
   while the check panel is open). The frozen index's in-hero
   #myPathBar stays suppressed by the CSS below (the frozen inline
   script un-hides it for cached lead ids; this button is the single
   route now). Language: the gate itself renders in English; the
   dashboard stores the visitor's language in localStorage
   'pathcheck_lang'. When it says 'ru' the button speaks Russian,
   and a storage event flips it live. ===== */
(function(){
  var LABEL = { en: 'Become top 1% in your field \u2192', ru: '\u0421\u0442\u0430\u0442\u044c \u0442\u043e\u043f 1% \u0432 \u0441\u0432\u043e\u0435\u0439 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438 \u2192' };
  function lang(){
    try { return localStorage.getItem('pathcheck_lang') === 'ru' ? 'ru' : 'en'; }
    catch(e){ return 'en'; }
  }
  var bar = null, link = null;
  function build(){
    var st = document.createElement('style');
    st.textContent =
      '#pcTopBtnBar{position:sticky;top:0;z-index:80;display:flex;align-items:center;justify-content:center;' +
      'background:var(--paper,#FFFCF6);border-bottom:2px solid var(--pink,#FF8CBE);padding:9px 14px;' +
      'font-family:Outfit,system-ui,sans-serif}' +
      '#pcTopBtnBar a{background:linear-gradient(135deg,#F92A82,#FF8CBE);color:#fff;text-decoration:none;font-weight:800;' +
      'font-size:15px;border-radius:999px;padding:9px 20px;box-shadow:0 8px 20px rgba(249,42,130,.32);white-space:nowrap}' +
      '#myPathBar{display:none!important}';
    document.head.appendChild(st);
    bar = document.createElement('div');
    bar.id = 'pcTopBtnBar';
    bar.setAttribute('role', 'navigation');
    bar.setAttribute('aria-label', 'Become top 1% in your field');
    link = document.createElement('a');
    link.href = '/app';
    link.textContent = LABEL[lang()];
    bar.appendChild(link);
    document.body.insertBefore(bar, document.body.firstChild);
  }
  function sync(){
    if (!bar) build();
    link.textContent = LABEL[lang()];
    var panel = document.getElementById('checkPanel');
    var inCheck = panel && panel.classList.contains('on');
    bar.style.display = inCheck ? 'none' : 'flex';
  }
  function init(){
    sync();
    var panel = document.getElementById('checkPanel');
    if (panel && window.MutationObserver) {
      new MutationObserver(sync).observe(panel, {attributes:true, attributeFilter:['class']});
    }
    window.addEventListener('storage', function(e){
      if (e.key === 'pathcheck_lang' || e.key === null) sync();
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ===== EXPANSION WAVE 4 lives in /profs4.js (split 2026-11-01):
   same document.write split as profs3.js; the generator and the
   test harness evaluate /profs4.js themselves. ===== */
if (typeof document !== 'undefined' && typeof document.write === 'function') {
  document.write('<script src="/profs4.js"><\/script>');
}
