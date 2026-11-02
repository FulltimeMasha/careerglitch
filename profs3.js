/* ===== PathCheck — professions added Nov 1, 2026 (expansion wave 3).
   Loaded by v11.js via document.write (same split as /cst.js and
   /profs2.js: v11.js sits at the ~98KB upload cap). Each profession
   registers in its own inject block, following the aicreator / HA /
   DS precedent: PROFS / COFACTS / SEATS / GRIDS / QUOTES / GV11 /
   V11 / PROF_STEPS are assigned into the gate globals; seat rules
   are unshifted ahead of the base rules in package priority order;
   cluster rules are placed at audited positions. Every number
   traces to the profession's pilot package — digits never change. */

/* ================= TRUCK DRIVER =================
   Source: ~/workspace/pathcheck-truckdriver-pilot/ (37 live postings
   opened in full, 1 Nov 2026 + BLS + FMCSA/TSA primary sources).
   Cluster: TRUCK DRIVER IS A YES. THE LONG-HAUL SEAT IS A NO.
   (Medium — grid-confidence wrapper below). Code word: HAUL
   (proposal). Matcher audit (package spec §2.3): 'delivery driver',
   bus drivers, bare 'owner operator' and bare 'hazmat' are
   deliberately NOT claimed — they belong to other maps or the
   research queue. ('owner op' is also unclaimed: the house matcher
   substring-matches it inside "owner operator", which spec §2.3
   rules out on purpose — only truck-context variants route here.) Seat order is load-bearing: specific seats
   (tanker, flatbed, owner-operator, local, regional) before the
   generic long-haul seat, because "otr" text co-occurs with them. */
(function(){
  var NEXT_TRK = 'THE FULL REPORT — $5, OR FREE WHEN YOU SHARE: all six jobs, checked step by step. Which routes driverless trucks really run today. What each license add-on pays. And honest owner-operator math with real numbers. We re-check this by April 2027. Sooner if a second company starts driverless highway trucks, or the rules open up to hazmat.';
  function inject(){
    if (typeof PROFS === 'undefined' || PROFS.truckdriver) return;
    PROFS.truckdriver = {
      title: 'Truck Driver',
      kick: 'PathCheck · Truck Driver',
      count: '2.2 million',
      srcWhat: 'drivers in the US. And driverless trucks already haul paid loads in Texas',
      srcLine: 'government job numbers (BLS), the federal regulator’s files and 37 real trucking job posts, read one by one',
      code: 'HAUL',
      tail: 'PATHCHECK — KNOW BEFORE YOU PAY FOR CDL SCHOOL',
      next: NEXT_TRK
    };
    COFACTS.truckdriver = [
      'On <span class="pink">May 1, 2025</span>, a truck with <span class="pink">nobody in the cab</span> started hauling paid freight between Dallas and Houston. By January 2026 the same company had logged <span class="pink">250,000 driverless miles</span>.',
      'The US has <span class="pink">2,221,200</span> heavy truck drivers. Middle pay is <span class="pink">$58,640</span>. The <span class="pink">top 10%</span> earn over <span class="pink">$79,380</span>. One title. Six different jobs.',
      'In <span class="pink">October 2026</span> the government wrote its first rule for driverless trucks. It <span class="pink">left hazmat out of it</span>. Robots get some jobs. The law keeps people in others.'
    ];
    SEATS.otr = { prof: 'truckdriver', label: 'Long-haul OTR',
      head: 'LONG-HAUL OTR — <span class="pink">NO</span> AS YOUR LONG-TERM JOB.',
      facts: [
        ['Robot trucks are already here', 'Driverless trucks haul <span class="pink">paid loads</span> between Dallas and Houston since <span class="pink">May 1, 2025</span>. First in the US (Aurora)'],
        ['The miles', '<span class="pink">250,000 driverless miles</span> by January 2026, on five southern routes. The longest is about <span class="pink">1,000 miles</span>. That\'s more than a person may legally drive in a day'],
        ['What job posts pay', 'Big-company long-haul pays about <span class="pink">$960–$1,250 a week</span> in the job posts we read. You get home every 2–3 weeks']
      ],
      door: 'What to do instead: treat long-haul as a 12-month savings year, not forever. One clean year, get your license add-ons, then move to local, tanker or flatbed.',
      short: 'Long-haul is the risky job. Driverless trucks already haul paid loads on its Texas routes. And it pays middle money for about 300 nights a year away.',
      next: NEXT_TRK };
    SEATS.regional = { prof: 'truckdriver', label: 'Regional (home weekly)',
      head: 'REGIONAL — <span class="pink">YES</span>. ROBOTS ARE SLOWER TO COME HERE.',
      facts: [
        ['Where driverless trucks go', 'Every approved driverless route is a <span class="pink">long highway run</span>, depot to depot (240+ miles). It starts with long-haul, not <span class="pink">home-weekly</span> routes'],
        ['The pay', 'Regional train-and-truck jobs pay <span class="pink">$1,230–$1,500 a week</span>. Long-haul money, home every week'],
        ['The work itself', 'More <span class="pink">stops, turns and loading docks</span> per mile than long-haul. Robots learn those parts last']
      ],
      door: 'What to do: this is a YES job. Stay and keep your record clean. Watch the Radar: if your route shows up on a driverless list, start planning your move that week.',
      short: 'Regional is a good bet. Home weekly, pay close to long-haul, and robot trucks start on long-haul routes first.',
      next: NEXT_TRK };
    SEATS.local = { prof: 'truckdriver', label: 'Local & LTL city (home daily)',
      head: 'LOCAL & LTL CITY — <span class="pink">YES</span>.',
      facts: [
        ['The pay', 'LTL city drivers (many small loads) earn <span class="pink">$30.35–$36.01 an hour</span>. And sleep at home every night'],
        ['Getting in', 'These job posts ask <span class="pink">1 year of experience</span> plus three add-ons on your license: <span class="pink">doubles/triples, hazmat, tanker</span>'],
        ['The work itself', 'Stops, docks, customers, loads you handle yourself. <span class="pink">City driving all day</span>. No robot truck does this anywhere']
      ],
      door: 'What to do: this is a YES job. Not here yet? This is what your first year is for: 12 clean months, three license add-ons, then apply with your record in hand.',
      short: 'Local city driving is a good bet. $30 to $36 an hour, home daily. The work is stops and customers, not straight highway.',
      next: NEXT_TRK };
    SEATS.tanker = { prof: 'truckdriver', label: 'Tanker & hazmat',
      head: 'TANKER & HAZMAT — <span class="pink">YES</span>. THE LAW KEEPS A PERSON HERE.',
      facts: [
        ['The law protects you', 'The government\'s driverless truck rule of <span class="pink">October 7, 2026</span> clearly <span class="pink">leaves hazmat loads out</span>'],
        ['The human check', 'A <span class="pink">TSA background check</span> ($85.25) plus the hazmat test. Software can\'t pass a background check for you'],
        ['The pay', 'Tanker pays about <span class="pink">$1,060–$1,425 a week</span>, up to <span class="pink">$78,500–$81,400</span> a year. Plus the biggest sign-up bonuses we found: <span class="pink">$10,000–$12,000</span>']
      ],
      door: 'What to do: this is a YES job. Keep tanker and hazmat add-ons current and your record spotless (paperwork mistakes get you fired here). Next steps: LTL long routes and plant tanker work.',
      short: 'Tanker and hazmat is a good bet. Robot truck rules leave hazmat out, you need a background check, and it pays the biggest sign-up bonuses.',
      next: NEXT_TRK };
    SEATS.flatbed = { prof: 'truckdriver', label: 'Flatbed / heavy haul / car haul',
      head: 'FLATBED & HEAVY HAUL — <span class="pink">YES</span>. THE LOADS NEED HANDS.',
      facts: [
        ['The pay', 'Flatbed pays <span class="pink">$0.48–$0.79 a mile</span> plus tarp pay (one company pays <span class="pink">$75 per tarp</span>). Car haul pays <span class="pink">$70,000–$120,000+</span>'],
        ['Getting in', 'Experience: heavy haul asks <span class="pink">2 years</span> driving plus a year of flatbed. Car haul asks <span class="pink">2 years</span> of Class A'],
        ['The work itself', 'You strap, chain and cover the load yourself. One company checks if you can lift a <span class="pink">90-pound tarp</span> on day one. No robot does that']
      ],
      door: 'What to do: this is a YES job. Your shield is tying loads down well. Get great at it and keep proof. Top job posts want oversize, step-deck and car-haul experience.',
      short: 'Flatbed, heavy haul and car haul are a good bet. Pay beats regular box trucks, and the loads need human hands: straps, chains, tarps, cars.',
      next: NEXT_TRK };
    SEATS.ownerop = { prof: 'truckdriver', label: 'Owner-operator',
      head: 'OWNER-OPERATOR — <span class="pink">YES</span>, IF YOUR NUMBERS WORK.',
      facts: [
        ['Your share', 'Offers we read pay you <span class="pink">80–87% of what the load pays</span>. The company keeps the rest, before your bills even start'],
        ['The bills', 'One company lists them in the ad: insurance <span class="pink">$298 a week</span>, trailer rent <span class="pink">$250–$450 a week</span>. Its own example turns <span class="pink">$8,000 gross into about $4,500</span> after costs'],
        ['How many', '<span class="pink">161,500 drivers</span> work for themselves. That\'s 7.3% of all drivers (BLS). This is running a business, not a promotion']
      ],
      door: 'What to do: do the math before you sign. Your truck, your loan, your spreadsheet. The trap: leasing a truck from the same company that controls your loads.',
      short: 'Owner-operator is a good bet as a business: 80 to 87% of the load. It\'s a bad bet as a loan. Insurance, trailer and truck are all on you.',
      next: NEXT_TRK };
    GRIDS.truckdriver = {
      head: 'TRUCK DRIVER IS A YES. LONG-HAUL IS A NO.',
      sub: 'One title, six different jobs. Each gets its own answer:',
      corner: 'Local, tanker, flatbed and regional: jobs with stops, hands-on loads and background checks. The trap: CDL school costs $3,000–$10,000. Spending it just for long-haul, where robot trucks already drive, buys the riskiest version of this job.',
      short: '"Truck driver" is six different jobs. Long-haul is the risky one: driverless trucks already run its routes. Local, tanker, flatbed, regional and owner-operator are good bets, each with its own timeline.',
      rows: [
        ['Long-haul OTR (solo van / reefer)', 'NO', 'driverless trucks on its Texas routes since May 2025 · $960–$1,250/wk', 'otr'],
        ['Regional (home weekly)', 'YES', 'robot trucks start with long-haul · $1,230–$1,500/wk train-and-truck', 'regional'],
        ['Local & LTL city (home daily)', 'YES', '$30.35–$36.01/hr · stops and customers all day', 'local'],
        ['Tanker & hazmat', 'YES', 'the driverless rule (Oct 2026) leaves hazmat out · bonuses up to $12,000', 'tanker'],
        ['Flatbed / heavy haul / car haul', 'YES', '$0.48–$0.79/mi + tarp pay · car haul $70,000–$120,000+', 'flatbed'],
        ['Owner-operator', 'YES', '80–87% of the load · 100% of the bills', 'ownerop']
      ]
    };
    QUOTES.truckdriver = {
      q: 'You don’t see anyone talking about autonomous trucking north of Interstate 40, where the snow falls. And the kind of trucking I do, I’m pretty sure it will never be replaced by autonomous trucks.',
      by: 'Doug Smith, owner-operator from Utah and OOIDA board member, to CNBC — via Land Line Media, Aug 29, 2023',
      url: 'https://landline.media/a-truckers-view-of-autonomous-trucks/'
    };
    GV11.truckdriver = { hook: 'Driverless trucks already run in Texas. 2.2 million drivers.', next: 'We re-check this by April 2027. Sooner if a second company starts driverless highway trucks, or the rules open up to hazmat.' };
    PROF_STEPS.truckdriver = {
      student: 'First step, before any school takes your money: write down the job you want: "local", "tanker", "flatbed". Not just "truck driver". Same license, different careers.',
      early: 'First step this month: write down your move date, 12 months out. Drive like this year is your proof. Good jobs want clean records, not miles.',
      mid: 'First step this week: check your route on the driverless map in your Radar. Long-haul routes in Texas and Arizona are on it. City, tanker and flatbed work isn\'t.',
      senior: 'First step: know your worth. LTL long routes pay about $100,000–$107,000, car haul $70,000–$120,000+. With 5+ clean years, every job here is open to you. Choose by money, not habit.'
    };
    V11.otr = {
      hook: 'No driver. No rest stops. Already on I-45.',
      conf: 'Medium',
      next: 'We re-check this by April 2027. Or the week a second driverless company starts on highways.',
      coe: 'Making long-haul your forever job costs about $10K a year (middle of real pay). LTL city pays $30.35–$36.01 an hour (≈$63–75K a year). Long-haul pays $960–$1,250 a week. Plus about 300 nights a year away from home. And if you spent CDL school money ($3,000–$10,000) only on this job, that cost is yours whatever robots do.',
      step: {
        student: 'First step, before any school takes your money: write down "local" or "tanker", not "truck driver". Schools sell the license. The job is your choice.',
        early: 'First step this month: write your move date down: month 12. Drive this year like it\'s your proof. No bonus is worth an accident you could avoid.',
        mid: 'First step this week: find your route on the driverless map (it\'s in your Radar). If it\'s on a driverless list, plan to move this quarter, not this year.',
        senior: 'First step: plan your next job with real numbers. LTL long routes pay about $100,000–$107,000 a year. Your years and clean record are exactly what they want.'
      }
    };
    V11.regional = {
      hook: 'Home weekly. The robots are busy elsewhere.',
      conf: 'Medium',
      next: 'We re-check this by April 2027. Sooner if driverless trucks start on regional routes.',
      step: {
        student: 'First step: ask schools and recruiters one question: "How many of your grads drive regional, home weekly?" If all go long-haul, that school sells one job only.',
        early: 'First step this month: protect your record. Good regional companies want what LTL wants. One clean year beats any bonus from job-hopping.',
        mid: 'First step this week: add one license add-on. Tanker is the cheap one, just a written test. One afternoon, and more regional jobs open up.',
        senior: 'First step: check your route four times a year against the driverless map. Regional is safe while robots stay long-haul. This check tells you first if that changes.'
      }
    };
    V11.local = {
      hook: 'LTL pays $36 an hour. Home every night.',
      conf: 'High',
      next: 'We re-check this by April 2027.',
      step: {
        student: 'First step: read three LTL city job posts today (FedEx Freight, XPO, Old Dominion). They all ask the same: 1 year of experience and three license add-ons. That\'s your school plan now.',
        early: 'First step this month: get your license add-ons in order. Doubles/triples and tanker are written tests. Start the hazmat background check early: the TSA wait is the slow part.',
        mid: 'First step this week: home daily but not at LTL pay? Apply up. City jobs at $30.35–$36.01 an hour hire people just like you. Bring your driving record.',
        senior: 'First step: look at LTL long routes. They pay about $100,000–$107,000 a year, with nights and seniority lists. Your years count there. Use them wisely.'
      }
    };
    V11.tanker = {
      hook: 'Driverless truck rule, October 2026: hazmat left out.',
      conf: 'High',
      next: 'We re-check this by October 2027. Or the week FMCSA (the trucking regulator) starts any driverless rule that touches hazmat.',
      step: {
        student: 'First step: plan your add-ons from day one. Tanker (N) is one written test. Hazmat (H) needs a TSA background check ($85.25), started weeks before. Do both while still in school.',
        early: 'First step this month: file the TSA hazmat check now, not when a tanker job shows up. Jobs with $10,000–$12,000 bonuses won\'t wait for your paperwork.',
        mid: 'First step this week: check your own paperwork: medical card date, license renewals, Clearinghouse record (drug and alcohol file). In tanker work, paperwork mistakes get you fired.',
        senior: 'First step: look at plant and LTL tanker jobs. Same add-ons, steadier work. And watch the rule: you\'re protected by a written federal exception, and rules can change.'
      }
    };
    V11.flatbed = {
      hook: 'Robots can’t tarp a load in the wind.',
      conf: 'Medium',
      next: 'We re-check this by April 2027.',
      step: {
        student: 'First step: be honest about the physical side. One flatbed company tests if you can lift a 90-pound tarp on day one. If that\'s fine, this job pays for it.',
        early: 'First step this month: practice tying down loads: straps, chains, edge guards. Take photos of your best work. That album helps you get $0.70+/mile jobs.',
        mid: 'First step this week: add one specialty: step-deck, oversize, or car haul. Each one means a raise. Heavy haul and car haul pay the most here: $70,000–$120,000+.',
        senior: 'First step: look at owner-operator from where you are. Flatbed and car-haul owners keep their customer contacts. Do honest math (checklist §13) before any truck payment.'
      }
    };
    V11.ownerop = {
      hook: '85% of the load. 100% of the bills.',
      conf: 'Medium',
      next: 'We re-check this by April 2027.',
      step: {
        student: 'First step: don\'t buy a truck yet. The order is: license → one clean year driving for a company → your own numbers. Anyone selling you a truck lease before year one is selling you their payment.',
        early: 'First step this month: start a bills notebook. Each week, write what owning this truck would cost (fuel, insurance $298/wk, trailer $250–$450/wk). A year of notes is your business plan.',
        mid: 'First step this week: run one real load through honest math: pay, then fuel, insurance, trailer, repairs, taxes. Still more than company driving? Then it\'s real. If not, it\'s just a new paint job.',
        senior: 'First step: check your share, not the total. Offers we read pay 80–87% of the load. If yours pays less and controls your loads, you take the risk and they keep the business.'
      }
    };
    /* Seat rules FIRST (one batch, package priority order: tanker →
       flatbed → owner-operator → local → regional → OTR generic
       last). Seat rules run before every cluster rule. */
    SEAT_RULES.unshift(
      [['tanker driver','tanker truck','hazmat driver','hazmat truck driver','cdl hazmat','fuel hauler','chemical tanker','tanker'],'tanker'],
      [['flatbed','car hauler','auto hauler','heavy haul','heavy haul driver','oversize load','step deck','lowboy'],'flatbed'],
      [['owner operator truck','truck owner operator','owner operator trucking','lease purchase truck','own authority'],'ownerop'],
      [['local truck driver','local cdl','ltl','linehaul','line haul','city driver','p&d driver','home daily','dedicated truck driver','dedicated driver'],'local'],
      [['regional truck driver','regional driver','regional cdl','intermodal driver','intermodal truck'],'regional'],
      [['otr driver','otr truck','over the road','long haul truck','long-haul truck','team driver','truck driver otr'],'otr']
    );
    /* Cluster rule appended (spec §2.1): the truck keywords are
       unique to this pack — 'driver' appears in no earlier keyword,
       and no earlier cluster token is contained in these. */
    CLUSTER_RULES.push([['truck driver','trucking','cdl driver','semi truck driver','tractor trailer','otr','truck driver cdl','cdl truck driver','class a driver','tractor-trailer','semi truck','truckdriver','cdl a driver','commercial truck driver'],'truckdriver']);
    /* The profession chip, next to the existing ones. */
    var rows = document.querySelectorAll('.chips');
    for (var c = 0; c < rows.length; c++){
      var b = document.createElement('button');
      b.className = 'chip';
      b.setAttribute('onclick', "pickChip('truckdriver')");
      b.textContent = 'Truck Driver';
      rows[c].appendChild(b);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();

/* stateFact extension (EN) — truckdriver branch, same wrap pattern
   as profs2.js. Texas-aware line per package spec §2.4 (integrator
   accepted the proposal): Texas is the driverless front line. */
(function () {
  var _sfPrev = stateFact;
  stateFact = function (prof, code, name) {
    if (prof === 'truckdriver') {
      if (!name) return '';
      if (code === 'TX') return 'Texas is the front line: driverless trucks already haul paid loads on Texas highways. Your state gives your CDL, but add-on and driving-hours rules are federal.';
      return 'Your state: your CDL comes from ' + name + '. Add-on and driving-hours rules are federal. Robot trucks spread state by state, so your regular route check is local on purpose.';
    }
    return _sfPrev(prof, code, name);
  };
})();

/* Grid-confidence fixup — truckdriver cluster is Medium (package
   spec §3.7; the v11.js GRID_CONF IIFE is a closed local holding
   only aicreator, so this profession wraps showGrid itself, after
   every earlier wrapper has rendered, exactly like the v11 one). */
(function(){
  function wrap(){
    if (typeof window.showGrid !== 'function' || window.__trkGridConfWrap) return;
    window.__trkGridConfWrap = true;
    var orig = window.showGrid;
    window.showGrid = function(prof){
      var r = orig.apply(null, arguments);
      try {
        if (prof === 'truckdriver'){
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

/* ================= MENTAL HEALTH COUNSELOR =================
   Source: ~/workspace/pathcheck-counselor-pilot/ (44 core clinical
   postings + 8 substance-use + 6 school, read 1 Nov 2026 + BLS).
   Cluster: MENTAL HEALTH COUNSELOR IS A YES. THE PLATFORM GIG IS
   A NO. (Medium — grid-confidence wrapper below). Code word:
   SESSION (proposal). Matcher audit (package spec §2): bare
   'therapist' and bare 'counselor' are FORBIDDEN keywords —
   'physical therapist' and 'school counselor' must never land
   here; 'psychologist', LMFT and LCSW are deliberate no-matches
   (sibling licenses, research queue, flagged for the founder).
   Seat order is load-bearing: substance-use → associate →
   platform → agency → group practice. */
(function(){
  var NEXT_COUNSELOR = 'We re-check this by October 2027. Sooner if any insurer pays an AI as a therapist, or a state cancels its AI-therapy law.';
  function inject(){
    if (typeof PROFS === 'undefined' || PROFS.counselor) return;
    PROFS.counselor = {title:'Your Path Check — Mental Health Counselor', kick:'Mental Health Counselor', count:44, srcWhat:'real counselor job posts', srcLine:'44 real job posts, state license laws and the 2025 AI-therapy laws', code:'SESSION', tail:'PATHCHECK — KNOW BEFORE YOU PAY FOR THE MASTER’S'};
    COFACTS.counselor = [
      '<b>Illinois and Nevada banned AI therapy in 2025</b>. By law, only a licensed person may do therapy.',
      'Group practices pay <b>$75,000–$135,000</b> for this license. A therapy app pays <b>$43–$59 an hour</b>, sessions only, for the same license.',
      '<b>2,000–3,000 supervised hours</b> sit between the master’s and the full license. Pay during that time: <b>$40,000–$65,000</b>.'];
    SEATS.groupcns = {prof:'counselor', label:'Licensed counselor — private / group practice',
      head:'LICENSED COUNSELOR, GROUP OR PRIVATE PRACTICE — <span class="pink">YES</span>.',
      facts:[
        ['The pay','Group practices pay <span class="pink">$75,000–$135,000</span> a year. California pays <span class="pink">$118,000–$135,000</span> (12 job posts, all paid by how many clients you see)'],
        ['Getting in','<span class="pink">12 of 12</span> group-practice job posts require the <span class="pink">full license</span>. They say no to pre-licensed counselors in writing'],
        ['The protection','Illinois and Nevada made it law in <span class="pink">2025</span>: only a licensed person may do therapy. Not an AI']],
      door:'What to do: this is a YES job. Pick one clear specialty (trauma, couples, teens). Get your pay deal in writing. Build a list of people who send you clients.',
      short:'A licensed counselor in a group or private practice is a good bet. It pays $75,000–$135,000, and the law protects the work from AI.'};
    SEATS.agencycns = {prof:'counselor', label:'Licensed counselor — community / agency / clinic',
      head:'LICENSED COUNSELOR, COMMUNITY AGENCY — <span class="pink">YES</span>.',
      facts:[
        ['The pay','Agencies and universities pay <span class="pink">$45,000–$75,060</span>. Less than private practice, and the top pay is written in the job post'],
        ['The real shape','One agency job post says it plainly: <span class="pink">at least 95 billable hours a month</span>. You\'re paid for volume'],
        ['The demand','The government expects <span class="pink">+98,000</span> new counselor jobs by 2035. Agencies hire first, and always hire']],
      door:'What to do: this is a YES job. Take it for license years, free supervision, or a steady paycheck. Check the monthly hours rule before you sign.',
      short:'A licensed counselor at a community agency is a good bet. Steady work, always hiring, $45,000–$75,000, with a set hours target.'};
    SEATS.platform = {prof:'counselor', label:'Teletherapy platform gig counselor',
      head:'THERAPY APP GIG — <span class="pink">NO</span> AS YOUR FINAL STOP.',
      facts:[
        ['The pay','One big app pays <span class="pink">$43–$59 an hour</span>. Only for <span class="pink">live sessions</span>, as a contractor, no benefits'],
        ['The real pay','One counselor worked out her real pay: about <span class="pink">$22.50 an hour</span> at first. Notes, prep and no-shows aren\'t paid'],
        ['The history','The app paid <span class="pink">$7.8 million</span> to settle with the FTC in 2023. It shared clients’ health data with advertisers']],
      door:'What to do instead: if you use the app, keep it as a side gig. Move your main hours to a group or your own practice. There, the clients and the pay are yours.',
      short:'The therapy app gig is a bad final stop. $43–$59 an hour, live sessions only. The same license pays $75,000–$135,000 a year in group practice.'};
    SEATS.sudcns = {prof:'counselor', label:'Substance-use counselor (certificate track)',
      head:'SUBSTANCE-USE COUNSELOR, CERTIFICATE TRACK — <span class="pink">NO</span> AS YOUR FINAL STOP.',
      facts:[
        ['The way in','<span class="pink">8 of 8</span> job posts here take a <span class="pink">bachelor’s degree</span> plus a state certificate. No master’s needed to start'],
        ['The pay','It pays <span class="pink">$43,000–$79,886</span>. Real money, but less than licensed jobs'],
        ['The wall','With this certificate you can\'t work alone as a therapist or bill insurance yourself. And you can\'t get the <span class="pink">$75,000–$135,000</span> practice jobs']],
      door:'What to do instead: work here and build experience. Then move up to the license (a master’s, or your state\'s licensed addiction level). Great first step. As a last step, it holds you back.',
      short:'The substance-use certificate is a bad final stop. You start fast with a bachelor’s. But pay tops out at $79,886, and you can\'t practice alone.'};
    SEATS.associate = {prof:'counselor', label:'Pre-licensed associate counselor',
      head:'PRE-LICENSED ASSOCIATE — <span class="pink">NO</span> AS A PLACE TO STAY. IT\'S THE WAY IN.',
      facts:[
        ['The pay','Associate jobs pay <span class="pink">$40,000–$65,000</span>. About half of licensed pay'],
        ['The cost','Your state wants <span class="pink">2,000–3,000 supervised hours</span> before the full license. Hours count only with a board-approved supervisor'],
        ['What makes the difference','<span class="pink">10 job posts</span> we found offer supervision <span class="pink">free, in writing</span>. If it\'s not written, you pay the supervisor yourself']],
      door:'What to do: pick your associate job by the supervision, not the salary. Free approved supervision, hours logged weekly, and the exam as early as your state allows.',
      short:'Pre-licensed associate is the way in, not where you stay. It pays $40,000–$65,000 while you log 2,000–3,000 supervised hours. You\'ve got this.'};
    GRIDS.counselor = {head:'MENTAL HEALTH COUNSELOR IS A YES. THE PLATFORM GIG IS A NO.',
      sub:'The title means five different jobs. Each gets its own answer:',
      corner:'Licensed work in a group or private practice. The license pays $75,000–$135,000 there, and the law protects it. The trap: a master’s costing $40,000–$100,000 or more, used for an app gig at $43–$59 an hour, live sessions only.',
      short:'“Mental health counselor” is five different jobs. Licensed practice and agency work are good bets. The app gig and the certificate-only path are bad final stops.',
      rows:[
        ['Licensed counselor — private / group practice','YES','pays $75,000–$135,000 · you need the full license','groupcns'],
        ['Licensed counselor — community / agency','YES','pays $45,000–$75,000 · one agency wants 95 billable hours a month','agencycns'],
        ['Therapy app gig','NO','$43–$59 an hour, live sessions only · the same license pays $75K–$135K elsewhere','platform'],
        ['Substance-use counselor (certificate track)','NO','bachelor’s gets you in · pay tops out at $79,886, can\'t practice alone','sudcns'],
        ['Pre-licensed associate','NO','the way in, not where you stay · $40,000–$65,000 while you log 2,000–3,000 supervised hours','associate']]};
    QUOTES.counselor = {q:'The payment per hour is ridiculous. The sessions supposedly last 45 minutes, but truthfully, a well done session lasts at least 50+ minutes. That doesn’t include the preparation, and serching for resources; so you get paid roughly 22.50 an hour for the first 5 hours and then it goes up as you accumulate more hours.',
      by:'A counselor (current employee, remote) — reviewing BetterHelp on Indeed (Jul 2025)',
      url:'https://www.indeed.com/cmp/Betterhelp-2/reviews?fcountry=US&floc=New+York%2C+NY&fjobtitle=Counselor'};
    GV11.counselor = {hook:'The license is the job. AI can\'t have one.', next:NEXT_COUNSELOR};
    PROF_STEPS.counselor = {
      student:'First step, as a student: check your degree with your state board before paying for next semester. A 60-credit program the board accepts (CACREP-accredited is safest) gets you licensed. If not, it\'s $40K–$100K+ for nothing.',
      early:'First step, as an associate: pick your job by its supervision. Board-approved, free and in writing (10 job posts we found offer it). Log hours weekly. The license is 2,000–3,000 hours away. Unlogged hours don\'t count.',
      mid:'First step, licensed: compare both places before you sign. Group practice pays $75,000–$135,000. Apps pay $43–$59 an hour, live sessions only. Same license, your choice.',
      senior:'First step, at 5+ years: your next raise is a new role. Supervisor, a waitlist in your specialty, or your own practice that takes insurance. The compact (11 states live) lets you work in more states.'};
    V11.groupcns = {hook:'California group practices pay $135,000 for this license.', conf:'High', next:NEXT_COUNSELOR, step:{
      student:'First step, as a student: do your training placement at a group practice. These jobs pay $75,000–$135,000 for a license plus a specialty. Your specialty starts there.',
      early:'First step, as an associate: try to get your associate job in a group practice. Same place, and your supervised hours count toward the license.',
      mid:'First step, licensed: get your pay deal in writing. Salary or a split, and what counts as a billable hour. Every group-practice job post we found pays by how much you work.',
      senior:'First step, at 5+ years: the raise is owning or supervising. Your own practice that takes insurance, or a lead role. Compare both to your current deal.'}};
    V11.agencycns = {hook:'Ninety-five billable hours a month. That\'s the job.', conf:'Medium', next:NEXT_COUNSELOR, step:{
      student:'First step, as a student: agency training placements teach volume and crisis work. That\'s what agency jobs look for. Choose one on purpose.',
      early:'First step, as an associate: agencies are the most reliable place for supervision. Helio Health gives license supervision for free on the job. Get yours in writing.',
      mid:'First step, licensed: read the hours rule before the salary. One agency wants at least 95 billable hours a month. That number is your real job.',
      senior:'First step, at 5+ years: agency years lead to program-lead and supervisor jobs. Or they\'re your way into practice pay. Decide which, on paper.'}};
    V11.platform = {hook:'Forty-three dollars an hour. Sessions only. Nothing else paid.', conf:'Medium', next:NEXT_COUNSELOR,
      coe:'Skipping this now saves the gap between the two pay levels. A master’s costing $40K–$100K+ for $43–$59/hr (live sessions only), instead of $75,000–$135,000 in group practice. That\'s roughly $20K–$40K a year with full hours (worked out from real pay).', step:{
      student:'First step, as a student: don\'t plan your degree around the app. Apps need the full license and turn away anyone still under supervision. It can\'t be your way in.',
      early:'First step, as an associate: the app is closed to you for now. Its job post turns away people who need supervision. Spend these years where supervision is free and written.',
      mid:'First step, licensed: if you use the app, limit your hours. Keep it a side gig, never your main job. Your main hours belong where the clients are yours.',
      senior:'First step, at 5+ years: your years let you set your own rate. On the app, they set it for you, per live hour. Work out the difference in dollars before renewing.'}};
    V11.sudcns = {hook:'A bachelor’s gets you in. It also holds you back.', conf:'Medium', next:NEXT_COUNSELOR,
      coe:'Moving on now (not skipping the start) saves roughly $40K+ a year at the top. This job tops out at $79,886. Licensed practice tops out at $135,000 (worked out from real pay).', step:{
      student:'First step, as a student: if addiction work is your calling and money is tight, start with the certificate. But decide now, in writing, that you\'ll move up later (licensed level or master’s).',
      early:'First step, early in: write everything down. Supervised hours and treatment experience are what next-step programs and employers count.',
      mid:'First step, at 3–5 years: you\'re near the top pay here ($79,886 in our check). Moving up is now worth about $40K a year. Decide this year.',
      senior:'First step, at 5+ years: your experience is worth a lot. Use it as a supervisor or program lead, or carry it up to a licensed job. Don\'t let it get stuck under the certificate limit.'}};
    V11.associate = {hook:'Free supervision, or supervision you pay for.', conf:'High', next:NEXT_COUNSELOR,
      coe:'Every year stuck at associate pay ($40,000–$65,000) instead of finishing your hours costs about half a licensed year\'s pay. Licensed practice starts at $75,000 (worked out from real pay).', step:{
      student:'First step, as a student: your practice hours (100) and internship hours (600) are your first career hours. Keep your own copy of every log from day one.',
      early:'First step, as an associate: this is your job now. Supervision in writing, hours logged weekly, exam as soon as your state allows. Nothing else matters until you\'re licensed.',
      mid:'First step, licensed: you\'ve moved on, but keep your hour logs and supervision records. Boards and employers can ask years later.',
      senior:'First step, at 5+ years: be the supervisor you needed. Paid supervisor jobs exist, and good supervision is the hardest thing to find here.'}};
    /* Seat rules FIRST as one block, package priority order:
       substance-use → associate → platform → agency → group. */
    SEAT_RULES.unshift(
      [['substance abuse counselor','substance use counselor','addiction counselor','alcohol and drug counselor','cadc','casac','substance abuse'],'sudcns'],
      [['associate counselor','pre-licensed','prelicensed','licensed associate','lmhca','lgpc','lpc associate','lpc-a','registered intern counselor','dependently licensed','provisionally licensed','counselor associate'],'associate'],
      [['betterhelp','talkspace','platform counselor','gig counselor','online therapy platform','contract teletherapy'],'platform'],
      [['community mental health','ccbhc','agency counselor','clinic counselor','university counselor','college counseling','hospital counselor','outpatient counselor','crisis counselor'],'agencycns'],
      [['licensed professional counselor','licensed mental health counselor','lpc','lmhc','lpcc','lcpc','private practice counselor','private practice therapist','group practice','psychotherapist','talk therapist','clinical counselor','mental health therapist'],'groupcns']
    );
    /* Cluster rule appended (spec §2): no earlier cluster keyword
       is contained in these, and these contain no earlier keyword —
       'school counselor' and 'physical therapist' stay unmatched
       because bare 'counselor' / 'therapist' are never keywords. */
    CLUSTER_RULES.push([['mental health counselor','licensed counselor','licensed professional counselor','licensed mental health counselor','clinical counselor','mental health therapist','psychotherapist','talk therapist','counseling','counselling'],'counselor']);
    var rows = document.querySelectorAll('.chips');
    for (var c = 0; c < rows.length; c++){
      var b = document.createElement('button');
      b.className = 'chip';
      b.setAttribute('onclick', "pickChip('counselor')");
      b.textContent = 'Mental Health Counselor';
      rows[c].appendChild(b);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();

/* Grid-confidence fixup — counselor cluster is Medium (package
   spec §3; same showGrid wrap pattern as truckdriver above). */
(function(){
  function wrap(){
    if (typeof window.showGrid !== 'function' || window.__cnsGridConfWrap) return;
    window.__cnsGridConfWrap = true;
    var orig = window.showGrid;
    window.showGrid = function(prof){
      var r = orig.apply(null, arguments);
      try {
        if (prof === 'counselor'){
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

/* ================= HVAC TECHNICIAN =================
   Source: ~/workspace/cg-staging/trades/spec.md, profession part (27 live postings + BLS + published scales).
   Cluster: HVAC IS A YES. THE FEDERAL CARD OPENS IT. THE SPECIALTY PAYS FOR IT. (High — the showGrid default). Code word: FROST (proposal).
   Matcher: seat rules are GLOBAL first-match in this product, so the spec lists were
   audited across the three trades — bare cross-trade phrases ('sales tech',
   'selling technician', 'apprentice', 'helper', 'own shop') are NOT claimed by any
   trade (they fall to the research queue); only trade-qualified phrases route.
   'maintenance technician' stays unclaimed on purpose (spec cluster decision);
   'electrical engineer' / 'electrical technician' never land here. */
(function(){
  var NEXT_HVC = 'We re-check this by December 2027. We checked electrician and plumber too: same hands-on work, three different pay traps. Comment VOLT or FLOW to see them.';
  function inject(){
    if (typeof PROFS === 'undefined' || PROFS.hvac) return;
    PROFS.hvac = {
      title: 'Your Path Check — HVAC Technician',
      kick: 'HVAC Technician',
      count: '+11%',
      srcWhat: 'growth, 2025–35. The fastest of the three trades',
      srcLine: 'government job outlook (BLS, it names data centers itself), 27 real job posts and the EPA rules',
      code: 'FROST',
      tail: 'PATHCHECK — KNOW BEFORE YOU PAY FOR THE DIPLOMA',
      next: NEXT_HVC
    };
    COFACTS.hvac = ['<b>+11% growth</b> and <b>+48,200 jobs</b> (BLS, 2025–35). The government even names <b>data centers</b> as a reason.', '<b>EPA 608</b> is the federal card for working with refrigerant (cooling gas). It\'s in <b>13 of 27</b> job posts, required in all 13. No card, no refrigerant work.', 'Commercial controls jobs pay <b>$60K–$125K</b>. And <b>0 of 9</b> mention commission. Commission is in home repair work.'];
    SEATS.hvcapp = {
      prof: 'hvac',
      label: 'Apprentice / helper — the way in',
      head: 'HVAC APPRENTICE / HELPER — <span class="pink">YES</span>. THE FASTEST WAY IN OF THE THREE TRADES.',
      facts: [
        ['The way in', 'Job posts openly take beginners. One says <span class="pink">“no experience required”</span> for apprentices, with paid training'],
        ['The one must-have', 'The <span class="pink">EPA 608</span> card. A federal exam, a few hundred dollars with prep. With it, a shop can send you out as a tech'],
        ['The trap', 'Private HVAC diplomas cost <span class="pink">$20,825 to about $42,000</span>. And grads still start as the same helper']
      ],
      door: 'What to do: get the EPA 608 card (Universal if you can). Start as a paid helper. Let a boss pay for your training, not a school for your hopes.',
      short: 'HVAC is the fastest way in of the three trades. The EPA 608 card plus a paid helper job takes months, not years. The expensive diploma doesn\'t change your first job.'
    };
    SEATS.hvctech = {
      prof: 'hvac',
      label: 'Residential service technician (hourly)',
      head: 'HOME REPAIR TECHNICIAN — <span class="pink">YES</span>, ON HOURLY PAY.',
      facts: [
        ['The pay', 'Hourly pay is <span class="pink">$28–$35 an hour</span>, and <span class="pink">$30–$50</span> as a lead with 5+ years'],
        ['What they want', 'Most want <span class="pink">2+ years</span> of repair experience, and EPA 608'],
        ['The hidden cost', '<span class="pink">A quarter</span> of job posts include on-call shifts. That costs you something, so ask for pay for it before you sign']
      ],
      door: 'What to do: this is a YES job on hourly or guaranteed pay. Keep a log of every system: type, size, problem, fix. Commercial jobs hire based on that log.',
      short: 'Hourly home repair tech is a good bet. $28–$50 an hour by level. On-call shifts are the downside.'
    };
    SEATS.hvcomm = {
      prof: 'hvac',
      label: 'Commercial HVAC / controls (BAS) specialist',
      head: 'COMMERCIAL / CONTROLS SPECIALIST — <span class="pink">YES</span>. THE TOP PAY IN THE TRADE.',
      facts: [
        ['The pay', 'Nine controls job posts pay <span class="pink">$60,000–$125,000</span> a year. Salary, not commission'],
        ['What they want', '<span class="pink">2–5 years of controls work</span> and one named system: Johnson Controls, Siemens, Trane, Distech, Niagara'],
        ['Why it grows', 'Smart buildings and data centers run on these systems. And BLS names <span class="pink">data centers</span> as a reason this trade grows']
      ],
      door: 'What to do: repair years first, then learn one controls system really well. It\'s like a second apprenticeship. That\'s why it pays.',
      short: 'Commercial controls is the top pay in HVAC. $60K–$125K, salary, and none of the nine job posts mention commission.'
    };
    SEATS.hvcown = {
      prof: 'hvac',
      label: 'Owner-operator / own shop',
      head: 'OWN SHOP — <span class="pink">YES</span>.',
      facts: [
        ['The proof of value', 'Investors paid record prices for shops like yours. <span class="pink">55 PE HVAC deals in 2024</span> alone (PE = investor firms, PitchBook), including a <span class="pink">~$2.5B</span> deal'],
        ['What they buy', 'Repeat <span class="pink">maintenance contracts</span> and a local name. Not trucks'],
        ['The honest limit', 'Nobody shares checked small-shop income. We won\'t guess yours']
      ],
      door: 'What to do: get your state\'s contractor license. Build up maintenance contracts. Pay your techs fairly, without sales targets.',
      short: 'Owning a shop is a good bet. Buyers pay record prices for exactly this: a license, a local name and a list of maintenance contracts.'
    };
    SEATS.hvcsales = {
      prof: 'hvac',
      label: 'Commission sales-tech (PE platform)',
      head: 'COMMISSION SALES-TECH — <span class="pink">NO</span>.',
      facts: [
        ['The sales pitch', 'One job post says <span class="pink">“$100K+ earning potential, uncapped commission”</span>. The top is just an ad. The bottom is zero'],
        ['What happened', 'After investors bought one company, a tech says full systems jumped from <span class="pink">$6K–$13K to $16K–$23K</span>. The job became selling the difference'],
        ['People quit', 'Techs quit at about <span class="pink">21% a year</span>. Most stay only <span class="pink">three years</span> (ServiceTitan numbers)']
      ],
      door: 'What to do instead: your EPA card and system log go with you on day one. Take them to an hourly shop or a commercial company. Controls jobs are two or three years after that.',
      short: 'Commission sales-tech is a dead end. Pay depends on selling new systems. The same skills earn a salary in commercial and controls work.'
    };
    GRIDS.hvac = {
      head: 'HVAC IS A YES. THE FEDERAL CARD GETS YOU IN. A SPECIALTY PAYS MORE.',
      sub: 'The title means five different paychecks. Each gets its own answer:',
      corner: 'Commercial controls: the systems that run smart buildings and data centers. The trap: a private HVAC diploma costs $20,825 to about $42,000. Grads start as the same helper as someone who paid a few hundred dollars for the EPA 608 card.',
      short: '“HVAC technician” is five different paychecks. You get in within months with the federal card. Controls pays the most, no commission. Commission sales is the dead end.',
      rows: [
        ['Apprentice / helper', 'YES', 'EPA 608 + a paid job · months, not years', 'hvcapp'],
        ['Residential service tech (hourly)', 'YES', '$28–$50/hr by level · on-call is the downside', 'hvctech'],
        ['Commercial / controls (BAS)', 'YES', '$60K–$125K · 0 of 9 mention commission', 'hvcomm'],
        ['Own shop', 'YES', 'buyers pay for the maintenance book and the name', 'hvcown'],
        ['Commission sales-tech', 'NO', '“uncapped commission” = endless pressure · ~21% quit each year', 'hvcsales']
      ]
    };
    QUOTES.hvac = {
      q: 'Month before Apex, a private equity back company, took over, we had full systems going for 6K to 13K. Right after they took over, the price book changed. Full systems were going for 16K to 23K.',
      by: 'A working HVAC tech on r/HVAC, about investors buying his shop (quoted in a published podcast transcript, 2026)',
      url: 'https://podscripts.co/podcasts/the-matt-walsh-show/ep-1862-how-private-equity-is-ruining-hvac'
    };
    GV11.hvac = {hook: 'AI needs air conditioning. You install it.', next: NEXT_HVC};
    V11.hvcomm = {
      hook: 'Controls techs earn $125K. No commission.',
      conf: 'High',
      next: NEXT_HVC
    };
    V11.hvcsales = {
      hook: 'Uncapped commission means endless pressure.',
      conf: 'Medium',
      next: NEXT_HVC,
      coe: 'Skipping this now saves ≈3 years (how long most stay) of sales-target work. It leaves no repair record behind. Hourly and controls jobs hire on exactly that record.',
      step: {
        student: 'First step, as a student: if “free training” ends in commission pay, read the pay part twice. The training is real. So is the sales target.',
        early: 'First step, early in: keep your own system log, even at a sales shop. The log is yours. Their price list is theirs.',
        mid: 'First step, at 3–5 years: bring your record, not sales numbers. Commercial companies hire on repair proof and pay $35–$45 an hour.',
        senior: 'First step, at 5+ years: homeowners trust you. That\'s worth more under your own name. Contractor license, fair hourly prices, your own customers.'
      }
    };
    V11.hvcapp = {
      hook: 'Six months to a federal card.',
      conf: 'High',
      next: NEXT_HVC,
      step: {
        student: 'First step, as a student: book the EPA 608 exam before any school tour. Commercial shops want the Universal version.',
        early: 'First step, early in: be the helper they send out. Clean truck, written notes, systems logged. Shops promote helpers they can send to customers.',
        mid: 'First step, at 3–5 years: you\'re past this. Your next step is commercial work and one controls system.',
        senior: 'First step, at 5+ years: hire helpers the way you were hired. A paid job and a logbook beat a pricey diploma for your team too.'
      }
    };
    V11.hvctech = {
      hook: 'Repair techs earn $28–$50 an hour by level.',
      conf: 'High',
      next: NEXT_HVC
    }; /* composed by the integrator from spec-verbatim facts — the spec shipped V11 for 9 of 15 trade seats */
    V11.hvcown = {
      hook: 'Buyers pay record prices for HVAC shops.',
      conf: 'High',
      next: NEXT_HVC
    }; /* composed by the integrator from spec-verbatim facts — the spec shipped V11 for 9 of 15 trade seats */
    PROF_STEPS.hvac = {
      student: 'First step, before you start: get the EPA 608 card. It\'s the federal exam for cooling gas. It costs a few hundred dollars with prep. Without it, no shop can send you out as a tech. Skip the $21K–$42K diploma for now.',
      early: 'First step, as a helper: start your system log in week one: type, size, problem, fix. Jobs asking 2+ years look for that record.',
      mid: 'First step, at 3–5 years: move into commercial work: rooftops, chillers, refrigeration. Then learn one controls system. Controls jobs pay $60K–$125K, no commission.',
      senior: 'First step, at 5+ years: value the customer list, not the hours. A shop is worth its maintenance contracts and its name. That\'s what record buyers paid for in 2024–2025.'
    };
    SEAT_RULES.unshift([['controls technician', 'bas technician', 'building automation', 'commercial hvac', 'controls tech'], 'hvcomm'], [['hvac business', 'hvac contractor'], 'hvcown'], [['commission hvac'], 'hvcsales'], [['service technician', 'hvac service', 'residential hvac'], 'hvctech'], [['hvac apprentice', 'apprentice hvac', 'hvac helper', 'hvac trainee', 'thinking about hvac'], 'hvcapp']);
    CLUSTER_RULES.push([['hvac', 'hvac technician', 'hvac tech', 'heating and cooling', 'air conditioning technician', 'ac technician', 'refrigeration technician', 'hvac installer', 'hvac service technician', 'furnace technician'], 'hvac']);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();

/* ================= ELECTRICIAN =================
   Source: ~/workspace/cg-staging/trades/spec.md, profession part (36 live postings + BLS + published scales).
   Cluster: ELECTRICIAN IS A YES. THE LICENSE IS THE JOB. THE SEAT DECIDES THE PAY. (High — the showGrid default). Code word: VOLT (proposal).
   Matcher: seat rules are GLOBAL first-match in this product, so the spec lists were
   audited across the three trades — bare cross-trade phrases ('sales tech',
   'selling technician', 'apprentice', 'helper', 'own shop') are NOT claimed by any
   trade (they fall to the research queue); only trade-qualified phrases route.
   'maintenance technician' stays unclaimed on purpose (spec cluster decision);
   'electrical engineer' / 'electrical technician' never land here. */
(function(){
  var NEXT_ELC = 'We re-check this by December 2027. We checked HVAC and plumber too: same hands-on work, three different pay traps. Comment FROST or FLOW to see them.';
  function inject(){
    if (typeof PROFS === 'undefined' || PROFS.electrician) return;
    PROFS.electrician = {
      title: 'Your Path Check — Electrician',
      kick: 'Electrician',
      count: '72,700',
      srcWhat: 'job openings a year in the US',
      srcLine: 'government job outlook (BLS), 36 real job posts and published union pay rates',
      code: 'VOLT',
      tail: 'PATHCHECK — KNOW BEFORE YOU SIGN THE LOAN',
      next: NEXT_ELC
    };
    COFACTS.electrician = ['<b>72,700 openings a year</b> (BLS). But training takes <b>4–5 years</b> per person, and the law limits how many can train.', '<b>24 of 36</b> real job posts name the <b>state journeyman license</b>. They check the license, not a diploma.', 'Union pay near data centers is <b>$62.00 an hour</b>. A real job wiring new houses pays <b>$24 an hour</b>. Same license.'];
    SEATS.elcapp = {
      prof: 'electrician',
      label: 'Apprentice electrician — the way in',
      head: 'APPRENTICE ELECTRICIAN — <span class="pink">YES</span>. IT\'S THE ONLY WAY IN.',
      facts: [
        ['The pay', 'Official apprenticeships pay from year one, about <span class="pink">$20.30 an hour</span>. And cost <span class="pink">$0 tuition</span>'],
        ['The catch', 'Spots are limited by law. Often one journeyman can watch only <span class="pink">one apprentice</span> on site. Classes open <span class="pink">once a year</span>'],
        ['The trap', 'A private school costs <span class="pink">$21,325 to about $42,000</span>. You still start as a helper with the same years to go']
      ],
      door: 'What to do: apply to an official apprenticeship during its yearly window. Union (IBEW/JATC) or non-union. Get your state apprentice card before your hours start counting.',
      short: 'Apprentice is the only real way in. It pays from year one. But spots are limited by law, so the window opens once a year. Don\'t miss it.'
    };
    SEATS.elcjour = {
      prof: 'electrician',
      label: 'Journeyman electrician',
      head: 'JOURNEYMAN ELECTRICIAN — <span class="pink">YES</span>.',
      facts: [
        ['What they check', '<span class="pink">24 of 36</span> real job posts name the state journeyman license'],
        ['The pay', 'Journeyman pay is <span class="pink">$29–$65 an hour</span>. Licensed repair work pays <span class="pink">$45–$65</span>'],
        ['Lowest pay', 'New house wiring pays <span class="pink">$24–$30 an hour</span>. The lowest pay we found']
      ],
      door: 'What to do: your license is valuable. Point it at buildings that pay: factories, hospitals, data centers. Log your hours by type of work.',
      short: 'Licensed journeyman is a good bet. Two of three job posts ask for the license. Pay is $29–$65 an hour, depending on the building.'
    };
    SEATS.elcdata = {
      prof: 'electrician',
      label: 'Industrial / data-center electrician',
      head: 'INDUSTRIAL / DATA-CENTER ELECTRICIAN — <span class="pink">YES</span>. THE TOP PAY IN THE TRADE.',
      facts: [
        ['The job post', 'Rosendin pays <span class="pink">$48.50 an hour</span> for data-center journeymen, plus health care and retirement'],
        ['Union pay', 'IBEW Local 26, near Data Center Alley, pays <span class="pink">$62.00 an hour</span> plus <span class="pink">$28.66</span> in benefits (June 2026 sheet)'],
        ['Why it grows', 'AI lives in these buildings. Each one is like a small power plant, and licensed people must wire and fix it']
      ],
      door: 'What to do: journeyman license first. Then OSHA 30 and NFPA 70E (safety cards). Then apply to data-center and factory companies by name.',
      short: 'Factory and data-center work is the top pay in the trade. $48.50 an hour, and $62 an hour on the union rate near data centers.'
    };
    SEATS.elcown = {
      prof: 'electrician',
      label: 'Master electrician / own shop',
      head: 'MASTER ELECTRICIAN / OWN SHOP — <span class="pink">YES</span>.',
      facts: [
        ['How you move up', 'The master exam lets you supervise, pull permits, and with a contractor license, have <span class="pink">your own customers</span>'],
        ['What it\'s worth', 'Investor firms made <span class="pink">800+ trade deals since 2022</span> (PitchBook), buying shops just like yours'],
        ['The honest limit', 'Nobody shares checked small-shop income. We won\'t guess a number for your shop']
      ],
      door: 'What to do: pass the master exam when you can. Get a contractor license and insurance before your first solo job. Build up maintenance contracts. That\'s what buyers pay for.',
      short: 'Owning a shop is a good bet. A master license plus a contractor license turns your skills into a business. Buyers pay real money for that.'
    };
    SEATS.elcsales = {
      prof: 'electrician',
      label: 'Commission sales-tech (residential service platform)',
      head: 'COMMISSION SALES-TECH — <span class="pink">NO</span>.',
      facts: [
        ['How you get paid', 'Your pay is commission on what you <span class="pink">sell the homeowner</span>. With a price list and sales target you didn\'t choose'],
        ['Compare', 'The same license, paid hourly, earns <span class="pink">$45–$65 an hour</span> with no sales target'],
        ['People quit', 'Techs quit at about <span class="pink">21% a year</span>. Most stay only <span class="pink">three years</span> (ServiceTitan numbers)']
      ],
      door: 'What to do instead: take your license to an hourly shop, factory work, or your own business. The NO is about the pay setup, not about you.',
      short: 'Commission sales-tech is a dead end. Your license turns into a sales target. Paid hourly, the same license earns $45–$65 an hour.'
    };
    GRIDS.electrician = {
      head: 'ELECTRICIAN IS A YES. THE LICENSE IS THE JOB. WHERE YOU WORK DECIDES THE PAY.',
      sub: 'The title means five different paychecks. Each gets its own answer:',
      corner: 'Factory and data-center work: the buildings AI lives in. The trap: a private electrical school costs $21,325 to about $42,000. Grads still start as helpers with the same 4–5 years ahead, while apprentices got paid from day one.',
      short: '“Electrician” is five different paychecks. The apprentice way in is narrow but real. Data centers pay the most. Commission sales is the one dead end.',
      rows: [
        ['Apprentice — the way in', 'YES', 'paid from year one · $0 tuition · spots limited by law', 'elcapp'],
        ['Journeyman electrician', 'YES', 'license named in 24 of 36 job posts · $29–$65/hr', 'elcjour'],
        ['Industrial / data-center', 'YES', '$48.50/hr · $62.00/hr union rate in Data Center Alley', 'elcdata'],
        ['Master / own shop', 'YES', 'the master license is the business license in most states', 'elcown'],
        ['Commission sales-tech', 'NO', 'your license becomes a sales target · ~21% quit each year', 'elcsales']
      ]
    };
    QUOTES.electrician = {
      q: 'I’m a Master Electrician. I want to hire a new apprentice every year. In much of the country, the rules won’t let me keep them all on one crew.',
      by: 'Stewart Manning — Master Electrician, on apprentice limit rules (LinkedIn, 2026)',
      url: 'https://www.linkedin.com/posts/stewart-manning-m-a-6457a7a_manningmethod-electricians-apprenticeship-activity-7519124817888014337-42Y-'
    };
    GV11.electrician = {hook: 'Robots don’t pull wire in old houses.', next: NEXT_ELC};
    V11.elcdata = {
      hook: 'Data centers pay electricians $62 an hour.',
      conf: 'High',
      next: NEXT_ELC
    };
    V11.elcsales = {
      hook: 'Your wrench became a sales target.',
      conf: 'Medium',
      next: NEXT_ELC,
      coe: 'Skipping this now saves ≈3 years (how long most stay). Years spent building a customer list that stays with the company when you leave.',
      step: {
        student: 'First step, as a student: don\'t join a commission shop\'s “free training” without reading the pay part. After training, base pay can drop to minimum wage plus commission.',
        early: 'First step, early in: register your hours with the state, whatever the shop calls you. Unregistered hours don\'t count toward a license.',
        mid: 'First step, at 3–5 years: take your license, not a sales target. Hourly repair jobs pay $45–$65 an hour with no sales target.',
        senior: 'First step, at 5+ years: your customers trust you. That\'s worth more under your own name. Master exam, contractor license, your own customers.'
      }
    };
    V11.elcapp = {
      hook: 'The way in is narrow. But there\'s lots of room inside.',
      conf: 'High',
      next: NEXT_ELC,
      step: {
        student: 'First step, as a student: find your state\'s application dates today. JATC classes open once a year. Miss it and you wait a full year.',
        early: 'First step, early in: log your registered hours every week. The license at the end is everything.',
        mid: 'First step, at journeyman level: you\'re past this. Now pick a specialty: factory, repair, or controls wiring.',
        senior: 'First step, at master level: hire and register apprentices within your limit. The hard part you got through now helps you hire.'
      }
    };
    V11.elcjour = {
      hook: '24 of 36 job posts name the license.',
      conf: 'High',
      next: NEXT_ELC
    }; /* composed by the integrator from spec-verbatim facts — the spec shipped V11 for 9 of 15 trade seats */
    V11.elcown = {
      hook: 'Investors closed 800+ trade deals since 2022.',
      conf: 'High',
      next: NEXT_ELC
    }; /* composed by the integrator from spec-verbatim facts — the spec shipped V11 for 9 of 15 trade seats */
    PROF_STEPS.electrician = {
      student: 'First step, before you start: apply to an official apprenticeship (union JATC or non-union) during its yearly window. Don\'t buy a $21K–$42K diploma first. Its grads start as the same helpers.',
      early: 'First step, as an apprentice: get your state apprentice card. Log every hour by type of work from day one. Unregistered hours often don\'t count.',
      mid: 'First step, as a journeyman: point your license at buildings that pay. Data-center jobs pay $48.50 an hour, and the Data Center Alley rate is $62.00. Add OSHA 30 and NFPA 70E.',
      senior: 'First step, as a master: value the business, not the hours. Contractor license, insurance, and maintenance contracts. Buyers pay many times over for those contracts.'
    };
    SEAT_RULES.unshift([['data center electrician', 'industrial electrician', 'substation', 'plant electrician', 'maintenance electrician'], 'elcdata'], [['electrical contractor', 'master electrician', 'electrical business'], 'elcown'], [['commission electrician'], 'elcsales'], [['journeyman electrician', 'service electrician', 'licensed electrician', 'journeyman'], 'elcjour'], [['apprentice electrician', 'electrical apprentice', 'electrician apprentice', 'electrician helper', 'pre-apprentice', 'thinking about electrician'], 'elcapp']);
    CLUSTER_RULES.push([['electrician', 'journeyman electrician', 'master electrician', 'ibew', 'electrical apprentice', 'apprentice electrician', 'inside wireman', 'wireman'], 'electrician']);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();

/* ================= PLUMBER =================
   Source: ~/workspace/cg-staging/trades/spec.md, profession part (26 live postings + BLS + published scales).
   Cluster: PLUMBER IS A YES. THE LICENSE SETS THE PAY. COMMISSION SETS THE TRAP. (High — the showGrid default). Code word: FLOW (proposal).
   Matcher: seat rules are GLOBAL first-match in this product, so the spec lists were
   audited across the three trades — bare cross-trade phrases ('sales tech',
   'selling technician', 'apprentice', 'helper', 'own shop') are NOT claimed by any
   trade (they fall to the research queue); only trade-qualified phrases route.
   'maintenance technician' stays unclaimed on purpose (spec cluster decision);
   'electrical engineer' / 'electrical technician' never land here. */
(function(){
  var NEXT_PLB = 'We re-check this by December 2027. We checked electrician and HVAC too: same hands-on work, three different pay traps. Comment VOLT or FROST to see them.';
  function inject(){
    if (typeof PROFS === 'undefined' || PROFS.plumber) return;
    PROFS.plumber = {
      title: 'Your Path Check — Plumber',
      kick: 'Plumber',
      count: '42,000',
      srcWhat: 'job openings a year in the US',
      srcLine: 'government job outlook (BLS), 26 real job posts and published union pay rates',
      code: 'FLOW',
      tail: 'PATHCHECK — KNOW BEFORE YOU PICK YOUR WAY IN',
      next: NEXT_PLB
    };
    COFACTS.plumber = ['<b>Top 10% already earn above $108,420</b> (BLS). And this work can\'t be sent to other countries.', 'At one company: apprentice pays <b>$55,000–$75,000</b> in year one. Licensed journeyman pays <b>$110,000–$130,000</b>. The difference is <b>the license</b>.', 'One job post pays <b>100% commission</b>. Another lets you choose, in writing: <b>$35–$40 an hour guaranteed</b>, or 25% commission.'];
    SEATS.plbapp = {
      prof: 'plumber',
      label: 'Apprentice plumber — the way in',
      head: 'APPRENTICE PLUMBER — <span class="pink">YES</span>. BUT CHOOSE YOUR WAY IN CAREFULLY.',
      facts: [
        ['The union way', 'A union apprenticeship costs <span class="pink">$0 tuition</span> and pays <span class="pink">$24.54 an hour</span> in year one (UA Local 486)'],
        ['The chain company way', 'The biggest chain takes <span class="pink">no experience</span> and pays in year one. Then grads move to <span class="pink">minimum-wage base plus 16–22% commission</span>, says its own job post'],
        ['The years', 'Either way, the license takes <span class="pink">4–5 years</span> and about <span class="pink">2,000 paid hours a year</span> (BLS). Pick what those years lead to']
      ],
      door: 'What to do: apply to official apprenticeships first. If you take a chain\'s free training, check the contract for payback rules. Register your hours with the state from day one.',
      short: 'Apprentice is a yes, with a warning. One way pays a set wage for 4–5 years. The other trains you, then pays commission. Both take the same years.'
    };
    SEATS.plbserv = {
      prof: 'plumber',
      label: 'Licensed service plumber (hourly / guaranteed)',
      head: 'LICENSED REPAIR PLUMBER — <span class="pink">YES</span>, WITH GUARANTEED PAY.',
      facts: [
        ['The top pay', 'A licensed journeyman job pays <span class="pink">$110,000–$130,000</span> plus a $5,000 sign-up bonus. Needs a state license and 3+ years'],
        ['The choice, in writing', 'One job post offers <span class="pink">$35–$40 an hour guaranteed</span> with a license. “If you desire a commission, we pay 25%”'],
        ['The hidden cost', 'On-call is normal in this trade (BLS says so). One shop even brags <span class="pink">“No On-Call”</span> as its top perk. That shows your nights have a price']
      ],
      door: 'What to do: every shop wants what you have. Take the guaranteed pay. Commission can be extra on top, never your base.',
      short: 'Licensed repair plumber with guaranteed pay is a good bet. Up to $110K–$130K. Ask to be paid for on-call, don\'t just accept it.'
    };
    SEATS.plbfit = {
      prof: 'plumber',
      label: 'Pipefitter / industrial fitter',
      head: 'PIPEFITTER — <span class="pink">YES</span>. THE FACTORY SIDE OF PLUMBING.',
      facts: [
        ['The job posts', 'Five factory job posts, <span class="pink">all union</span>, all need the journeyman card or license. <span class="pink">$40.64 to about $54 an hour</span>'],
        ['Union pay', 'UA Local 130 (plumbers & pipefitters) pays <span class="pink">$60.50 an hour</span> base, <span class="pink">$103.85</span> with benefits (June 2025)'],
        ['Why it\'s here', 'BLS counts plumbers, pipefitters and steamfitters as <span class="pink">one job</span>. One union, one apprenticeship, one license path']
      ],
      door: 'What to do: you get in through the same apprenticeship. Tell your sponsor you want factory work. Log plant hours and keep practicing welding.',
      short: 'Pipefitter is the factory side of plumbing. Union pay up to $60.50 an hour. Every job post needs the journeyman card or license.'
    };
    SEATS.plbown = {
      prof: 'plumber',
      label: 'Master plumber / own shop',
      head: 'MASTER PLUMBER / OWN SHOP — <span class="pink">YES</span>.',
      facts: [
        ['How you move up', 'Journeyman first, then the <span class="pink">master exam</span>. Some states need master level for the <span class="pink">contractor license</span> itself (BLS)'],
        ['What buyers pay for', 'The license, the local name, and the <span class="pink">list of maintenance contracts</span>. Investors pay many times over for these'],
        ['The honest limit', 'We have no checked small-shop income. Your shop\'s number is yours to build, not ours to guess']
      ],
      door: 'What to do: take the master exam as soon as you qualify. Build your maintenance contracts from month one. That\'s what you can sell later.',
      short: 'Owning a shop is a good bet. The master license lets you supervise, pull permits and, in many states, get the contractor license your business needs.'
    };
    SEATS.plbsales = {
      prof: 'plumber',
      label: 'Commission-only service tech',
      head: 'COMMISSION-ONLY SERVICE TECH — <span class="pink">NO</span>.',
      facts: [
        ['The extreme version', 'One job post pays <span class="pink">100% commission</span>. A slow week pays <span class="pink">$0</span>'],
        ['The chain company version', 'After “free” training: <span class="pink">minimum-wage base plus 16–22%</span> of sales (the company\'s own pay text)'],
        ['Compare', 'The same skills, licensed with guaranteed pay, earn <span class="pink">$110,000–$130,000</span>. Guaranteed pay exists. This job just doesn\'t offer it']
      ],
      door: 'What to do instead: register your hours and finish the license. Then take guaranteed pay (job 2) at the same kind of company. This NO won\'t follow you.',
      short: 'Commission-only is a dead end. A slow week pays $0. Licensed jobs with guaranteed pay at the same kind of company pay $110K–$130K.'
    };
    GRIDS.plumber = {
      head: 'PLUMBER IS A YES. THE LICENSE SETS THE PAY. COMMISSION IS THE TRAP.',
      sub: 'The title means five different paychecks. Each gets its own answer:',
      corner: 'The licensed jobs: guaranteed repair work and the factory side. The trap: the chain\'s “free” training ends at minimum-wage base plus 16–22% commission. A union apprenticeship pays $24.54 an hour in year one, $0 tuition.',
      short: '“Plumber” is five different paychecks. The license doubles your pay at the same company. Factory work pays union rates. Commission-only is the dead end.',
      rows: [
        ['Apprentice — the way in', 'YES', 'two ways: $0-tuition set wage, or free training into commission', 'plbapp'],
        ['Licensed repair plumber', 'YES', '$110K–$130K · guaranteed pay is what matters', 'plbserv'],
        ['Pipefitter / factory', 'YES', '$40.64–$54/hr · UA rate $60.50/hr', 'plbfit'],
        ['Master / own shop', 'YES', 'master exam unlocks the contractor license in many states', 'plbown'],
        ['Commission-only tech', 'NO', '100% commission jobs exist · a slow week pays $0', 'plbsales']
      ]
    };
    QUOTES.plumber = {
      q: 'We keep saying we can’t find plumbers. But who’s supposed to make them? They don’t grow on trees.',
      by: 'Dennis The Apprentice — working plumbing contractor and trainer, The Trade Traction Podcast (transcript, Oct 2026)',
      url: 'https://podscan.fm/podcasts/the-trade-traction-podcast-with-dennis-the-apprentice'
    };
    GV11.plumber = {hook: 'Nobody can fix a burst pipe from another country.', next: NEXT_PLB};
    V11.plbserv = {
      hook: 'Licensed journeymen earn $130K. Apprentices earn $65K.',
      conf: 'High',
      next: NEXT_PLB
    };
    V11.plbsales = {
      hook: 'One hundred percent commission. Zero percent security.',
      conf: 'Medium',
      next: NEXT_PLB,
      coe: 'Skipping this now keeps your 4–5 apprentice years from going into sales numbers that stay with the shop. Your license record is the one that leaves with you.',
      step: {
        student: 'First step, as a student: if training is free, find out who pays. With chain companies, you do, in commission, after you finish.',
        early: 'First step, early in: register your hours, even at a commission shop. The license is what pays you later.',
        mid: 'First step, at 3–5 years: take your license to guaranteed pay. Offers like this exist: $35–$40 an hour guaranteed, commission optional.',
        senior: 'First step, at 5+ years: your repair skills go with you. Your sales list doesn\'t. Use what goes with you: an hourly shop, factory work, or your own business.'
      }
    };
    V11.plbapp = {
      hook: 'Two ways in. Very different inside.',
      conf: 'High',
      next: NEXT_PLB,
      step: {
        student: 'First step, as a student: list every official program you can drive to and its next application date. Spots fill by date, not luck.',
        early: 'First step, early in: check every month that your hours reach the state. Trust, but check. It\'s your license.',
        mid: 'First step, at journeyman level: you\'re past this. From now on, check every offer for guaranteed pay.',
        senior: 'First step, at master level: train apprentices. Someone trained you. The shortage helps your pay only if new plumbers keep coming.'
      }
    };
    V11.plbfit = {
      hook: 'Union rate: $60.50 an hour in Chicago.',
      conf: 'High',
      next: NEXT_PLB
    }; /* composed by the integrator from spec-verbatim facts — the spec shipped V11 for 9 of 15 trade seats */
    V11.plbown = {
      hook: 'The master exam opens the contractor license.',
      conf: 'High',
      next: NEXT_PLB
    }; /* composed by the integrator from spec-verbatim facts — the spec shipped V11 for 9 of 15 trade seats */
    PROF_STEPS.plumber = {
      student: 'First step, before you start: apply to an official apprenticeship first. The union way pays $24.54 an hour in year one, $0 tuition (UA Local 486). Read any chain\'s training contract for payback rules before you sign.',
      early: 'First step, as an apprentice: register your hours with the state from day one. Log them by type of work. Unregistered years don\'t become a license.',
      mid: 'First step, as a journeyman: take repair work with guaranteed pay. Licensed journeymen earn $110,000–$130,000. One job post openly offers hourly or commission.',
      senior: 'First step, as a master: build something you can sell. A contractor license (if your state needs master level) and maintenance contracts. Buyers pay for those contracts.'
    };
    SEAT_RULES.unshift([['pipefitter', 'steamfitter', 'industrial plumber', 'plant plumber'], 'plbfit'], [['master plumber', 'plumbing contractor', 'plumbing business'], 'plbown'], [['commission plumber'], 'plbsales'], [['service plumber', 'journeyman plumber', 'licensed plumber', 'drain', 'sewer'], 'plbserv'], [['plumbing apprentice', 'apprentice plumber', 'plumber apprentice', 'plumber helper', 'thinking about plumbing'], 'plbapp']);
    CLUSTER_RULES.push([['plumber', 'plumbing', 'journeyman plumber', 'master plumber', 'pipefitter', 'steamfitter', 'plumbing apprentice', 'apprentice plumber'], 'plumber']);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
/* ================= CYBERSECURITY =================
   Source: ~/workspace/pathcheck-cybersecurity-pilot/ (35 live postings,
   1 Nov 2026 + BLS + CyberSeek). Cluster: CYBERSECURITY IS A YES.
   THE BEGINNER DOOR IS THE TRAP. (Medium — showGrid wrapper below.)
   Code word: SHIELD (proposal). Matcher (spec §2): bare 'security',
   bare 'cloud' and bare 'analyst' are FORBIDDEN; 'security guard' must
   never land here. The cluster rule is spliced BEFORE the legacy fin
   rule, whose bare 'analyst' token would otherwise swallow
   'security analyst'. Seat hooks are the spec's seat heads verbatim;
   the GRC cost-of-error and the COFACTS strings are composed from the
   spec's digits in house style. */
(function(){
  var NEXT_CYB = 'We re-check this by November 2027. Next check: IT help desk. Not a fancy job, but the way in that really works.';
  function inject(){
    if (typeof PROFS === 'undefined' || PROFS.cybersecurity) return;
    PROFS.cybersecurity = {
      title: 'Cybersecurity',
      kick: 'The field is booming. But the beginner way in is a trap.',
      count: '35',
      srcWhat: 'real job posts + BLS + CyberSeek',
      srcLine: 'Job posts opened 1 Nov 2026 · BLS Employment Projections 2025–35 (government job numbers) · CyberSeek (NIST/NICE + CompTIA + Lightcast)',
      code: 'SHIELD',
      tail: '514,359 job posts. Almost none want beginners.',
      next: NEXT_CYB
    };
    COFACTS.cybersecurity = ['Of job posts that name years, only <span class="pink">1 of 29</span> takes <span class="pink">zero experience</span>. One is even called “Early Career”, and asks for 2 years.', 'Job sites counted <span class="pink">514,359</span> US cybersecurity job posts in one year (CyberSeek). Almost none want a beginner.', '<span class="pink">9 of 35</span> job posts need US citizenship, a Public Trust, or a security clearance (government background checks). This work can\'t go to other countries.'];
    SEATS.socanalyst = {
      prof: 'cybersecurity',
      label: 'SOC analyst',
      head: 'SOC ANALYST — <span class="pink">YES</span>. REAL HIRING. BUT AI IS TAKING THE FIRST STEP.',
      facts: [
        ['The work', 'You watch alerts on screens and sort real attacks from false alarms. Tier 1 sorts. Tier 2 investigates. Tier 3 hunts.'],
        ['The trap', 'AI and cheaper countries take alert-sorting first. Microsoft launched AI alert-sorters in <span class="pink">November 2025</span>.'],
        ['The way in', 'Government employers still hire beginners. One Tier-1 job post takes <span class="pink">0–2 years</span> and pays <span class="pink">$46,000–$76,000</span>.']
      ],
      door: 'What to do: start here if you need to start now. Plan your move to Tier 2 from week one.',
      short: 'Watches alerts, sorts attacks from false alarms.'
    };
    SEATS.secengineer = {
      prof: 'cybersecurity',
      label: 'Security engineer / detection',
      head: 'SECURITY ENGINEER / DETECTION — <span class="pink">YES</span>. THE PEOPLE WHO BUILD THE ALARMS EARN THE MOST.',
      facts: [
        ['The work', 'You build and tune the systems that catch attacks. You write the rules they use.'],
        ['The pay', 'The top pay we found: <span class="pink">$140,000–$155,000</span> for a detection engineer, <span class="pink">$200,000–$240,000</span> for senior threat response.'],
        ['The price', '<span class="pink">Python</span>. Beginner job posts asking for Python doubled in two years, to <span class="pink">46.6%</span>. Senior jobs just require it.']
      ],
      door: 'What to do: not a first job. SOC and IT workers move up to it. Start practicing early.',
      short: 'Builds the systems that catch attacks.'
    };
    SEATS.cloudsec = {
      prof: 'cybersecurity',
      label: 'Cloud security engineer',
      head: 'CLOUD SECURITY ENGINEER — <span class="pink">YES</span>. PROTECTING THE CLOUD PAYS WELL.',
      facts: [
        ['The work', 'You protect systems that run on AWS, Azure and Google Cloud. Other people\'s computers, your job to keep safe.'],
        ['The pay', 'Job posts pay <span class="pink">$127,000–$198,000</span>. Companies say cloud security is their <span class="pink">number-two missing skill</span> (ISC2, 2025).'],
        ['The way in', 'They want <span class="pink">3–5 years</span> plus the same certificates again and again: AZ-500, CCSP, AWS Certified Security – Specialty.']
      ],
      door: 'What to do: move here from IT or SOC work. Not a first step from zero.',
      short: 'Protects systems that run in the cloud.'
    };
    SEATS.pentester = {
      prof: 'cybersecurity',
      label: 'Penetration tester',
      head: 'PENETRATION TESTER — <span class="pink">YES</span>. LEGAL HACKING. A SECOND JOB, NOT A FIRST JOB.',
      facts: [
        ['The work', 'Companies pay you to hack their systems on purpose, with permission. You report the holes before criminals find them.'],
        ['The pay', 'Real money: up to <span class="pink">$221,603</span>. Every job post wants <span class="pink">2–5+ years</span> of security work first.'],
        ['The way in', 'All <span class="pink">6 job posts</span> name the <span class="pink">OSCP</span> certificate (a hard hacking exam). 3 require it. None of the 6 hire beginners.']
      ],
      door: 'What to do: dream job, but not your first step. You get there through IT and SOC work first.',
      short: 'Hacks systems on purpose, with permission.'
    };
    SEATS.grcanalyst = {
      prof: 'cybersecurity',
      label: 'GRC analyst',
      head: 'GRC ANALYST — <span class="pink">NO</span> AS A BEGINNER’S FINAL STOP.',
      facts: [
        ['The work', 'You check that a company follows security rules and laws. You write the proof, using rule lists like NIST 800-53 and ISO 27001.'],
        ['The trap', 'Every GRC job post wants <span class="pink">3–7 years</span>. None hire beginners. And AI is already good at checking documents against lists.'],
        ['The price', 'Courses selling a fast way into GRC cost about <span class="pink">$10,000–$25,000</span>. For certificates that need 3–5 years of experience to get.']
      ],
      door: 'What to do instead: a fine specialty by year four. As a beginner’s final stop: no.',
      short: 'Checks companies against security rule lists.'
    };
    GRIDS.cybersecurity = {
      head: 'Five jobs hide inside one word',
      sub: 'Same field. Different ways in, different futures.',
      corner: '$10,000–$25,000: the bootcamp bill for a way in that doesn\'t hire beginners',
      short: '“Cybersecurity” is five different jobs. SOC hires beginners, but AI is taking the first step. Engineering and cloud pay the most. GRC is a dead end as a first stop.',
      rows: [
        ['SOC analyst', 'YES', 'Real hiring. But move past alert-sorting fast.', 'socanalyst'],
        ['Security engineer / detection', 'YES', 'Top pay we found: $140,000–$240,000.', 'secengineer'],
        ['Cloud security engineer', 'YES', 'Companies say it\'s a top missing skill. $127,000–$198,000.', 'cloudsec'],
        ['Penetration tester', 'YES', 'A second job. None of the 6 job posts hire beginners.', 'pentester'],
        ['GRC analyst', 'NO', 'As a beginner’s final stop. Every job post wants 3+ years.', 'grcanalyst']
      ]
    };
    QUOTES.cybersecurity = {
      q: 'We’re seeing a propensity to favor traits over knowledge, which can be taught. Recruit for attitude and train for aptitude.',
      by: 'Jon France, CISO at ISC2 — Infosecurity Magazine, 11 June 2025',
      url: 'https://www.infosecurity-magazine.com/news/hands-on-skills-first-cyber-role/'
    };
    GV11.cybersecurity = {hook: '514,359 job posts. Almost none want beginners.', next: NEXT_CYB};
    V11.socanalyst = {
      hook: 'Real hiring. But AI is taking the first step.',
      conf: 'Medium',
      step: {
        student: 'First step, as a student: open the NICE Framework job list. Read what a Cyber Defense Analyst really does all day.',
        early: 'First step, early in: get one month of any IT work (help desk counts). Start Security+ the same month.',
        mid: 'First step, at mid level: stop just sorting. Pick investigating: take your team\'s next alert and write its full story.',
        senior: 'First step, at senior level: move to hunting or writing detection rules. That\'s the work above what AI took.'
      },
      next: NEXT_CYB
    };
    V11.secengineer = {
      hook: 'The people who build the alarms earn the most.',
      conf: 'High',
      step: {
        student: 'First step, as a student: learn Python before any certificate. One small script a week.',
        early: 'First step, early in: at your SOC or IT job, automate one boring task. Keep the script as proof.',
        mid: 'First step, at mid level: write your first detection rule for a real alert system. Test it on old alerts.',
        senior: 'First step, at senior level: own one detection area start to finish. Rules, tuning, and numbers that prove they work.'
      },
      next: NEXT_CYB
    };
    V11.cloudsec = {
      hook: 'Protecting the cloud pays well.',
      conf: 'High',
      step: {
        student: 'First step, as a student: pick one cloud, AWS or Azure. Learn how its accounts and permissions work.',
        early: 'First step, early in: at your IT or SOC job, take every cloud task your team gets. Cloud experience is what counts here.',
        mid: 'First step, at mid level: take the AZ-500 or AWS Certified Security – Specialty exam. Job posts name these again and again.',
        senior: 'First step, at senior level: protect a company\'s whole cloud, not one account. Safety rules, alerts, and proof for auditors.'
      },
      next: NEXT_CYB
    };
    V11.pentester = {
      hook: 'Legal hacking. A second job, not a first job.',
      conf: 'Medium',
      step: {
        student: 'First step, as a student: learn the basics first: networking, Linux, Windows. Job posts test all three.',
        early: 'First step, early in: two years of IT or SOC work is your real application. Practice labs help, but don\'t replace it.',
        mid: 'First step, at mid level: start preparing for OSCP. 3 of 6 job posts require it.',
        senior: 'First step, at senior level: specialize in web apps or red team (attacking like real hackers). Specialists earn the most.'
      },
      next: NEXT_CYB
    };
    V11.grcanalyst = {
      hook: 'The paperwork specialty. Not a way in for beginners.',
      conf: 'Medium',
      coe: 'Skipping this now saves a $10,000–$25,000 course bill. Those certificates need 3–5 years of experience anyway. Better to spend those years in the field, where GRC hires from.',
      step: {
        student: 'First step, as a student: don\'t start here. Every job post wants 3+ years of security work first.',
        early: 'First step, early in: build security years in SOC or IT first. GRC hires people already in the field.',
        mid: 'First step, at mid level: with 3+ security years, learn one rule list really well: NIST 800-53 or ISO 27001.',
        senior: 'First step, at senior level: lead audits and own the proof. Senior GRC pays up to $209,618.'
      },
      next: NEXT_CYB
    };
    PROF_STEPS.cybersecurity = {
      student: 'First step, as a student: pick your specialty first. The five jobs inside this word have different ways in.',
      early: 'First step, early in: get real IT experience. Help desk counts: 90% of hiring managers say past IT work is enough to consider you.',
      mid: 'First step, at mid level: move up one step, from sorting alerts to investigating them. That move is the whole career.',
      senior: 'First step, at senior level: sell your judgment, not certificates. Detection, cloud or audit work. AI can draft, but it can\'t sign off.'
    };
    SEAT_RULES.unshift([['pentester', 'pen tester', 'penetration tester', 'penetration testing', 'offensive security', 'red team'], 'pentester'], [['cloud security', 'cloud security engineer', 'aws security', 'azure security'], 'cloudsec'], [['grc', 'governance risk', 'governance, risk', 'risk and compliance', 'compliance analyst'], 'grcanalyst'], [['detection engineer', 'security engineer', 'threat response', 'security engineering'], 'secengineer'], [['soc analyst', 'soc', 'security operations', 'security analyst', 'cybersecurity analyst', 'information security analyst'], 'socanalyst']);
    var finIdx = -1;
    for (var i = 0; i < CLUSTER_RULES.length; i++) if (CLUSTER_RULES[i][1] === 'fin') { finIdx = i; break; }
    var rule = [['cybersecurity', 'cyber security', 'information security', 'infosec', 'soc analyst', 'security operations', 'it security', 'security analyst', 'penetration tester', 'pentester', 'pen tester', 'cloud security', 'grc analyst'], 'cybersecurity'];
    if (finIdx >= 0) CLUSTER_RULES.splice(finIdx, 0, rule); else CLUSTER_RULES.push(rule);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();

/* Cybersecurity grid confidence: cluster is Medium (pilot verdict card).
   showGrid hard-codes High; same wrapper pattern as truck/counselor. */
(function(){
  function wrap(){
    if (typeof window.showGrid !== 'function' || window.__cybGridConfWrap) return;
    window.__cybGridConfWrap = true;
    var orig = window.showGrid;
    window.showGrid = function(prof){
      var r = orig.apply(null, arguments);
      try {
        if (prof === 'cybersecurity'){
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