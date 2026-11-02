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
  var NEXT_TRK = 'THE FULL REPORT — $5, OR FREE WHEN YOU SHARE: the six seats scored filter by filter — which lanes the driverless networks actually run today, what each endorsement letter pays seat by seat, and the honest owner-operator math, run on real posted numbers. We re-check this verdict by April 2027 — or sooner if a second company starts driverless highway service, or the federal driverless rules open to hazmat freight.';
  function inject(){
    if (typeof PROFS === 'undefined' || PROFS.truckdriver) return;
    PROFS.truckdriver = {
      title: 'Truck Driver',
      kick: 'PathCheck · Truck Driver',
      count: '2.2 million',
      srcWhat: 'drivers in the US — and driverless trucks already run paid freight in Texas',
      srcLine: 'the BLS labor numbers, the federal regulator’s own files and 37 live carrier postings, opened one by one',
      code: 'HAUL',
      tail: 'PATHCHECK — KNOW BEFORE YOU PAY FOR CDL SCHOOL',
      next: NEXT_TRK
    };
    COFACTS.truckdriver = [
      'On <span class="pink">May 1, 2025</span>, a truck with <span class="pink">nobody in the cab</span> started hauling paid freight between Dallas and Houston. By January 2026 the same company had logged <span class="pink">250,000 driverless miles</span>.',
      'The US counts <span class="pink">2,221,200</span> heavy truck drivers. Median pay is <span class="pink">$58,640</span> — and the <span class="pink">top 10%</span> earn over <span class="pink">$79,380</span>. The title is one. The jobs are six.',
      'In <span class="pink">October 2026</span> the federal government wrote its first rule for driverless trucks — and <span class="pink">left hazmat out of it</span>. Some seats the robot gets. Some seats the law keeps human.'
    ];
    SEATS.otr = { prof: 'truckdriver', label: 'Long-haul OTR',
      head: 'LONG-HAUL OTR — <span class="pink">NO</span> AS THE SEAT YOU BUILD ON.',
      facts: [
        ['The lane is live', 'Driverless trucks haul <span class="pink">paid freight</span> between Dallas and Houston since <span class="pink">May 1, 2025</span> — the first commercial driverless truck service in the US (Aurora)'],
        ['The miles', '<span class="pink">250,000 driverless miles</span> by January 2026, on five Sun Belt lanes. The longest runs about <span class="pink">1,000 miles</span> — further than a human driver may legally drive in a day'],
        ['Your posted pay', 'Mega-carrier OTR van averages <span class="pink">$960–$1,250 a week</span> in the postings we opened — home time: every 2–3 weeks']
      ],
      door: 'What to do instead: use long-haul as a 12-month bank, not a home — one clean year, the endorsement letters bought during it, then move to a local, tanker or flatbed seat on this map.',
      short: 'Long-haul OTR is the exposed seat — driverless trucks already run paid freight on its Texas lanes, and live postings pay mid money for about 300 nights a year away.',
      next: NEXT_TRK };
    SEATS.regional = { prof: 'truckdriver', label: 'Regional (home weekly)',
      head: 'REGIONAL — <span class="pink">YES</span>. THE CLOCK RUNS SLOWER HERE.',
      facts: [
        ['The driverless map', 'Every validated driverless lane is a <span class="pink">long interstate run</span>, terminal to terminal (240+ miles). The rollout starts long-haul — not on <span class="pink">home-weekly</span> lanes'],
        ['Posted pay', 'Regional intermodal posts <span class="pink">$1,230–$1,500 a week</span> in our scan — long-haul money, home every week'],
        ['The work itself', 'More <span class="pink">endpoints, turns and docks</span> per mile than long-haul — the parts of driving that automate last']
      ],
      door: 'What to do: you are in a YES seat — hold it and keep the record clean. Watch the Radar: if your exact lane ever appears on a driverless network list, your move clock starts that week.',
      short: 'Regional driving is a good bet — home weekly, pay close to long-haul in live postings, and driverless networks are being built on long-haul lanes first.',
      next: NEXT_TRK };
    SEATS.local = { prof: 'truckdriver', label: 'Local & LTL city (home daily)',
      head: 'LOCAL & LTL CITY — <span class="pink">YES</span>.',
      facts: [
        ['Posted pay', 'LTL city drivers post <span class="pink">$30.35–$36.01 an hour</span> — and sleep at home every night'],
        ['The gate', 'These postings ask <span class="pink">1 year of experience</span> plus three letters on your license: <span class="pink">doubles/triples, hazmat, tanker</span>'],
        ['The work itself', 'Stops, docks, customers, freight you handle yourself — <span class="pink">city driving all day</span>. No driverless service anywhere runs this work']
      ],
      door: 'What to do: you are in a YES seat — and if you are not here yet, this is the seat the first year is for: 12 clean months, the three endorsement letters, then apply with your record file in hand.',
      short: 'Local and LTL city driving is a good bet — $30 to $36 an hour in live postings, home daily, and the work is stops and customers, not straight highway.',
      next: NEXT_TRK };
    SEATS.tanker = { prof: 'truckdriver', label: 'Tanker & hazmat',
      head: 'TANKER & HAZMAT — <span class="pink">YES</span>. THE LAW KEEPS A PERSON HERE.',
      facts: [
        ['The legal wall', 'The federal driverless-truck exemption of <span class="pink">October 7, 2026</span> explicitly <span class="pink">leaves hazmat loads out</span> — the relief does not cover this freight'],
        ['The human gate', 'A <span class="pink">TSA background check</span> ($85.25) plus the hazmat test. Software cannot pass a background check for you'],
        ['Posted pay', 'Tanker posts <span class="pink">$1,060–$1,425 a week</span> on average, tops of <span class="pink">$78,500–$81,400</span>, and the biggest sign-on bonuses in our scan: <span class="pink">$10,000–$12,000</span>']
      ],
      door: 'What to do: you are in a YES seat — keep the tanker and hazmat letters current and the record spotless (this seat fires for paperwork). The next doors from here: LTL linehaul and plant-side tanker work.',
      short: 'Tanker and hazmat is a good bet — federal driverless rules leave hazmat out, the seat is gated by a background check, and it posts the biggest sign-on bonuses in our scan.',
      next: NEXT_TRK };
    SEATS.flatbed = { prof: 'truckdriver', label: 'Flatbed / heavy haul / car haul',
      head: 'FLATBED & HEAVY HAUL — <span class="pink">YES</span>. THE FREIGHT NEEDS HANDS.',
      facts: [
        ['Posted pay', 'Flatbed posts <span class="pink">$0.48–$0.79 a mile</span> plus tarp pay (one carrier pays <span class="pink">$75 per tarp</span>). Car haul posts <span class="pink">$70,000–$120,000+</span>'],
        ['The gate', 'Experience: heavy haul asks <span class="pink">2 years</span> driving plus a year of flatbed. Car haul asks <span class="pink">2 years</span> of Class A'],
        ['The work itself', 'You strap, chain and tarp the load yourself — one carrier tests whether you can lift a <span class="pink">90-pound tarp</span> at orientation. No robot does any of that']
      ],
      door: 'What to do: you are in a YES seat — the skill that protects you is load securement, so master it and keep proof: oversize, step-deck and car-haul experience are what the top postings screen for.',
      short: 'Flatbed, heavy haul and car haul are a good bet — the pay tops the van world, and the freight itself needs human hands: straps, chains, tarps, loaded cars.',
      next: NEXT_TRK };
    SEATS.ownerop = { prof: 'truckdriver', label: 'Owner-operator',
      head: 'OWNER-OPERATOR — <span class="pink">YES</span>, IF THE NUMBERS ARE YOURS.',
      facts: [
        ['The split', 'Offers we opened pay <span class="pink">80–87% of what the load pays</span>. The carrier keeps the rest — before your bills even start'],
        ['The bills', 'One carrier prints them in the ad: insurance <span class="pink">$298 a week</span>, trailer rent <span class="pink">$250–$450 a week</span>. Its own example turns <span class="pink">$8,000 gross into about $4,500</span> after expenses'],
        ['The crowd', '<span class="pink">161,500 drivers</span> are self-employed — 7.3% of everyone in this job (BLS). This is a business seat, not a promotion']
      ],
      door: 'What to do: price it before you sign anything — your truck, your financing, your spreadsheet. The trap version of this seat is a lease-purchase at the same carrier that controls your loads.',
      short: 'Owner-operator is a good bet as a business — 80 to 87% of the load in the offers we opened — and a bad bet as a loan: the insurance, the trailer and the truck are all yours too.',
      next: NEXT_TRK };
    GRIDS.truckdriver = {
      head: 'TRUCK DRIVER IS A YES. THE LONG-HAUL SEAT IS A NO.',
      sub: 'One title, six different jobs. They do not share a verdict:',
      corner: 'Local, tanker, flatbed and regional work — the jobs built on stops, freight you handle, and background checks. The trap has a price tag: CDL school costs $3,000–$10,000 — and spending it to aim only at long-haul, the one seat with driverless trucks already on its lanes, buys the most exposed version of this career.',
      short: '"Truck driver" is six different jobs. Long-haul OTR is the exposed one — driverless trucks already run its lanes. Local, tanker, flatbed, regional and owner-operator work are good bets with different clocks.',
      rows: [
        ['Long-haul OTR (solo van / reefer)', 'NO', 'driverless trucks run its Texas lanes since May 2025 · $960–$1,250/wk posted', 'otr'],
        ['Regional (home weekly)', 'YES', 'the driverless rollout starts long-haul · $1,230–$1,500/wk intermodal', 'regional'],
        ['Local & LTL city (home daily)', 'YES', '$30.35–$36.01/hr posted · stops and customers all day', 'local'],
        ['Tanker & hazmat', 'YES', 'the federal driverless rule (Oct 2026) leaves hazmat out · sign-ons to $12,000', 'tanker'],
        ['Flatbed / heavy haul / car haul', 'YES', '$0.48–$0.79/mi + tarp pay · car haul $70,000–$120,000+', 'flatbed'],
        ['Owner-operator', 'YES', '80–87% of the load · 100% of the bills', 'ownerop']
      ]
    };
    QUOTES.truckdriver = {
      q: 'You don’t see anyone talking about autonomous trucking north of Interstate 40, where the snow falls. And the kind of trucking I do, I’m pretty sure it will never be replaced by autonomous trucks.',
      by: 'Doug Smith, owner-operator from Utah and OOIDA board member, to CNBC — via Land Line Media, Aug 29, 2023',
      url: 'https://landline.media/a-truckers-view-of-autonomous-trucks/'
    };
    GV11.truckdriver = { hook: 'Driverless trucks already run Texas. 2.2 million drivers.', next: 'We re-check this verdict by April 2027 — or sooner if a second company starts driverless highway service, or the federal driverless rules open to hazmat freight.' };
    PROF_STEPS.truckdriver = {
      student: 'First step, before any school takes your money: pick your target seat on paper — "local", "tanker", "flatbed" — not "truck driver". The license is the same. The career is not.',
      early: 'First step this month: write your month-12 move date down, then drive like the year is evidence — the good seats on this map buy clean records, not miles.',
      mid: 'First step this week: check your exact lane against the driverless map in your Radar. Long-haul lanes in Texas and Arizona are on it today; city, tanker and flatbed work is not.',
      senior: 'First step: price your years — linehaul postings average $100,000–$107,000, car haul posts $70,000–$120,000+. At 5+ clean years, every door on this map is open to you. Choose on money, not habit.'
    };
    V11.otr = {
      hook: 'No driver. No rest stops. Already on I-45.',
      conf: 'Medium',
      next: 'We re-check this verdict by April 2027 — or the week a second driverless operator starts highway service.',
      coe: 'Choosing long-haul as your forever seat costs about $10K a year at the midpoints of live postings — LTL city pays $30.35–$36.01 an hour (≈$63–75K a year) against OTR van at $960–$1,250 a week — plus roughly 300 nights a year sleeping away from home. And if your CDL school money ($3,000–$10,000) was spent aiming only at this seat, the bill stays yours whatever the robots do.',
      step: {
        student: 'First step, before any school takes your money: pick your target seat on paper — write down "local" or "tanker", not "truck driver". Schools sell the license. The seat is your decision.',
        early: 'First step this month: write your move date down — month 12. Then drive this year like it is evidence: no preventable accident is worth more than any bonus on your pay plan.',
        mid: 'First step this week: pull up your lane on the driverless map (your Radar has it). If your regular lane is on a published driverless network, your move window is this quarter, not this year.',
        senior: 'First step: price your exit doors with your real numbers — LTL linehaul postings average $100,000–$107,000 a year, and your years plus a clean record are exactly what they screen for.'
      }
    };
    V11.regional = {
      hook: 'Home weekly. The robots are busy elsewhere.',
      conf: 'Medium',
      next: 'We re-check this verdict by April 2027 — or sooner if a driverless network announces regional-length lanes.',
      step: {
        student: 'First step: when schools and recruiters pitch you, ask one question — "which of your graduates run regional, home weekly?" If the answer is all long-haul, that school sells one seat only.',
        early: 'First step this month: protect the record. Regional seats at good carriers screen for the same thing LTL does — one clean year beats any sign-on bonus you chase by hopping.',
        mid: 'First step this week: add one endorsement letter (tanker is the cheap one — a written test). It costs an afternoon and widens every regional posting you qualify for.',
        senior: 'First step: run the quarterly lane check — your lane against the driverless map. Regional is safe while the rollout stays long-haul; the check is how you will know first if that changes.'
      }
    };
    V11.local = {
      hook: 'LTL pays $36 an hour. Home every night.',
      conf: 'High',
      next: 'We re-check this verdict by April 2027.',
      step: {
        student: 'First step: read three LTL city postings today (FedEx Freight, XPO, Old Dominion). They all ask the same things — 1 year of experience and three endorsement letters. That list is now your school plan.',
        early: 'First step this month: buy the endorsement letters in order — doubles/triples and tanker are written tests; start the hazmat background check early, because the TSA wait is the slow part.',
        mid: 'First step this week: if you are home-daily but not at LTL money, apply up — city postings at $30.35–$36.01 an hour hire from exactly your seat, with your record file attached.',
        senior: 'First step: price the linehaul door — posted averages run $100,000–$107,000 a year, nights and seniority boards included. Your years are the currency there; spend them deliberately.'
      }
    };
    V11.tanker = {
      hook: 'Federal driverless rule, October 2026: hazmat excluded.',
      conf: 'High',
      next: 'We re-check this verdict by October 2027 — or the week FMCSA opens any driverless proceeding that touches hazmat.',
      step: {
        student: 'First step: plan the letters from day one — tanker (N) is one written test; hazmat (H) needs a TSA background check ($85.25) started weeks before the test. Sequence them while you are still in school.',
        early: 'First step this month: file the TSA hazmat check now, not when a tanker posting appears — the postings with $10,000–$12,000 sign-ons will not wait for your paperwork.',
        mid: 'First step this week: audit your paperwork like this seat audits you — medical card date, endorsement renewals, Clearinghouse record. In tanker work, paperwork is the firing offense.',
        senior: 'First step: look at the plant-side and LTL tanker doors — the same letters, steadier freight. And keep one eye on the rule: your protection is a written federal exclusion, and rules get revisited.'
      }
    };
    V11.flatbed = {
      hook: 'Robots can’t tarp a load in the wind.',
      conf: 'Medium',
      next: 'We re-check this verdict by April 2027.',
      step: {
        student: 'First step: be honest about the physical side before you aim here — one flatbed carrier tests lifting a 90-pound tarp at orientation. If that is fine, this seat pays for it.',
        early: 'First step this month: get one securement skill certified by practice — straps, chains, edge protection — and photograph your best-secured loads. That album is your application file for the $0.70+/mile postings.',
        mid: 'First step this week: add one specialty — step-deck, oversize, or car haul. Each one is a pay step in the postings: heavy haul and car haul top this whole map at $70,000–$120,000+.',
        senior: 'First step: price the owner-operator door from inside this seat — flatbed and car-haul owner-operators keep the freight relationships. Run the honest spreadsheet (checklist §13) before any truck payment.'
      }
    };
    V11.ownerop = {
      hook: '85% of the load. 100% of the bills.',
      conf: 'Medium',
      next: 'We re-check this verdict by April 2027.',
      step: {
        student: 'First step: do not buy a truck yet. The door order is license → one clean year as a company driver → your own numbers. Anyone selling you a lease-purchase before your first year is selling you their truck payment.',
        early: 'First step this month: start the bill file — every week, write what this truck would have cost you as the owner (fuel, insurance at $298/wk, trailer at $250–$450/wk). A year of that file is your business plan.',
        mid: 'First step this week: run one real load through the honest math — gross, then fuel, insurance, trailer, maintenance, taxes. If the load still pays you more than company driving, the door is real. If not, it is a paint job.',
        senior: 'First step: audit the split, not the gross — offers we opened pay 80–87% of the load. If your carrier pays under that band and controls your freight, you hold the risk and they hold the business.'
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
      if (code === 'TX') return 'Texas is the front line: driverless trucks already run paid freight on Texas interstates — and your CDL is issued by your state, while endorsement and hours rules are federal.';
      return 'Your state: your CDL is issued by ' + name + ', while endorsement and hours rules are federal — and the driverless rollout is a state-by-state map, so the quarterly lane check in your path is local by design.';
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
  var NEXT_COUNSELOR = 'We re-check this verdict by October 2027 — or sooner if any insurer pays an AI system as a therapy provider, or a state repeals its AI-therapy law.';
  function inject(){
    if (typeof PROFS === 'undefined' || PROFS.counselor) return;
    PROFS.counselor = {title:'Your Path Check — Mental Health Counselor', kick:'Mental Health Counselor', count:44, srcWhat:'live counselor postings', srcLine:'44 live postings, the state license laws and the 2025 AI-therapy laws', code:'SESSION', tail:'PATHCHECK — KNOW BEFORE YOU PAY FOR THE MASTER’S'};
    COFACTS.counselor = [
      '<b>Illinois and Nevada banned AI-provided therapy in 2025</b> — the law now says therapy is work only a licensed person may do.',
      '<b>$75,000–$135,000</b> is what group practices post for this license — and <b>$43–$59 an hour</b>, sessions only, is what a therapy platform posts for the same license.',
      '<b>2,000–3,000 supervised hours</b> stand between the master’s degree and the full license — at associate pay of <b>$40,000–$65,000</b> in the postings we read.'];
    SEATS.groupcns = {prof:'counselor', label:'Licensed counselor — private / group practice',
      head:'LICENSED COUNSELOR, GROUP OR PRIVATE PRACTICE — <span class="pink">YES</span>.',
      facts:[
        ['The pay','Group practices post this license at <span class="pink">$75,000–$135,000</span> a year — California posts <span class="pink">$118,000–$135,000</span> (12 postings, all paid on how many clients you see)'],
        ['The gate','<span class="pink">12 of 12</span> group-practice postings require the <span class="pink">full license</span> — pre-licensed counselors are refused in writing'],
        ['The protection','Illinois and Nevada wrote it into law in <span class="pink">2025</span>: only a licensed person may provide therapy — an AI system may not']],
      door:'What to do: you are in a YES seat — get one specialty with a name (trauma, couples, teens), get the pay formula in writing, and build the referral list that fills a practice.',
      short:'A licensed counselor in a group or private practice is a good bet — postings pay $75,000–$135,000 for the license, and the law protects the work from AI.'};
    SEATS.agencycns = {prof:'counselor', label:'Licensed counselor — community / agency / clinic',
      head:'LICENSED COUNSELOR, COMMUNITY AGENCY — <span class="pink">YES</span>.',
      facts:[
        ['The pay','Agencies and universities post <span class="pink">$45,000–$75,060</span> — lower than practice pay, and the ceiling is printed in the posting'],
        ['The real shape','One agency posting prints the job honestly: <span class="pink">at least 95 billable hours a month</span> — your pay is bought with volume'],
        ['The demand','The government counts <span class="pink">+98,000</span> new counselor jobs by 2035 — agencies hire first and hire always']],
      door:'What to do: you are in a YES seat — take it for the license years, the free supervision, or the steady paycheck, and read the billable-hours line before you sign.',
      short:'A licensed counselor in a community agency is a good bet — steady work that is always hiring, paid $45,000–$75,000, with a printed hours quota.'};
    SEATS.platform = {prof:'counselor', label:'Teletherapy platform gig counselor',
      head:'TELETHERAPY PLATFORM GIG — <span class="pink">NO</span> AS YOUR FINAL STOP.',
      facts:[
        ['The pay','One big platform posts <span class="pink">$43–$59 an hour</span> — for <span class="pink">live sessions only</span>, as a contractor, with no benefits'],
        ['The real rate','A counselor on the platform counted her real pay at about <span class="pink">$22.50 an hour</span> for her first hours — notes, preparation and no-shows are not paid'],
        ['The history','The platform paid <span class="pink">$7.8 million</span> to settle with the FTC in 2023, for sharing clients’ health data with advertisers']],
      door:'What to do instead: keep the platform, if you use it, as a side caseload — and move your main hours to a group practice or your own practice, where the clients and the rate are yours.',
      short:'The therapy-platform gig is a bad final stop — it pays $43–$59 an hour for live sessions only, and the same license posts $75,000–$135,000 a year in group practice.'};
    SEATS.sudcns = {prof:'counselor', label:'Substance-use counselor (certificate track)',
      head:'SUBSTANCE-USE COUNSELOR, CERTIFICATE TRACK — <span class="pink">NO</span> AS YOUR FINAL STOP.',
      facts:[
        ['The door','<span class="pink">8 of 8</span> postings in this seat accept a <span class="pink">bachelor’s degree</span> plus a state certificate — no master’s needed to start'],
        ['The pay','The seat posts <span class="pink">$43,000–$79,886</span> — real money, and below the licensed seat’s bands'],
        ['The wall','This certificate cannot work alone as a therapist, bill insurance under its own name, or take the <span class="pink">$75,000–$135,000</span> practice postings']],
      door:'What to do instead: work this seat and bank the experience — then bridge to the license (the master’s, or your state’s licensed addictions level). As a first step it is a good door. As the last step it caps you.',
      short:'The substance-use certificate is a bad final stop — it starts fast on a bachelor’s degree, then caps pay at $79,886 in our postings and cannot practice alone.'};
    SEATS.associate = {prof:'counselor', label:'Pre-licensed associate counselor',
      head:'PRE-LICENSED ASSOCIATE — <span class="pink">NO</span> AS A PLACE TO STAY. IT IS THE DOOR.',
      facts:[
        ['The pay','Associate postings pay <span class="pink">$40,000–$65,000</span> — about half the licensed practice band'],
        ['The toll','Your state wants <span class="pink">2,000–3,000 supervised hours</span> before the full license — the hours only count with a board-approved supervisor'],
        ['The dividing line','<span class="pink">10 postings</span> in our scan offer supervision <span class="pink">free, in writing</span> — where it is not written, you pay the supervisor yourself']],
      door:'What to do: pick the associate job by the supervision line, not the salary — free board-approved supervision, hours logged weekly, and the exam as early as your state allows.',
      short:'The pre-licensed associate seat is the door, not the home — it pays $40,000–$65,000 while you log 2,000–3,000 supervised hours toward the license.'};
    GRIDS.counselor = {head:'MENTAL HEALTH COUNSELOR IS A YES. THE PLATFORM GIG IS A NO.',
      sub:'The title covers five different jobs. They do not share a verdict:',
      corner:'Licensed work in a group or private practice — the seat where the license is priced at $75,000–$135,000 and the law protects it. The trap has a price: a master’s degree that costs $40,000–$100,000 or more, aimed at a platform gig that pays $43–$59 an hour for live sessions only.',
      short:'“Mental health counselor” is five different jobs — licensed practice and agency work are a good bet, and the platform gig and the certificate-only stop are a bad final stop.',
      rows:[
        ['Licensed counselor — private / group practice','YES','postings at $75,000–$135,000 · the full license is the gate','groupcns'],
        ['Licensed counselor — community / agency','YES','postings at $45,000–$75,000 · one agency prints 95 billable hours a month','agencycns'],
        ['Teletherapy platform gig','NO','$43–$59 an hour, live sessions only · the same license posts $75K–$135K elsewhere','platform'],
        ['Substance-use counselor (certificate track)','NO','bachelor’s gets you in · the seat caps at $79,886 and cannot practice alone','sudcns'],
        ['Pre-licensed associate','NO','the door, not the home · $40,000–$65,000 while you log 2,000–3,000 supervised hours','associate']]};
    QUOTES.counselor = {q:'The payment per hour is ridiculous. The sessions supposedly last 45 minutes, but truthfully, a well done session lasts at least 50+ minutes. That doesn’t include the preparation, and serching for resources; so you get paid roughly 22.50 an hour for the first 5 hours and then it goes up as you accumulate more hours.',
      by:'A counselor (current employee, remote) — reviewing BetterHelp on Indeed (Jul 2025)',
      url:'https://www.indeed.com/cmp/Betterhelp-2/reviews?fcountry=US&floc=New+York%2C+NY&fjobtitle=Counselor'};
    GV11.counselor = {hook:'The license is the job. AI cannot hold one.', next:NEXT_COUNSELOR};
    PROF_STEPS.counselor = {
      student:'First step, as a student: check the degree against your state board before you pay the next semester — a 60-credit program the board accepts (CACREP-accredited is the safest) is the license; a degree the board does not accept is $40K–$100K+ of decoration.',
      early:'First step, as an associate: pick your job by the supervision line — board-approved supervision, free and in writing (10 postings in our scan offer it), and your hours logged weekly. The license is 2,000–3,000 hours away; unlogged hours do not count.',
      mid:'First step, licensed: price the license in both buildings before you sign — group practice posts $75,000–$135,000, platforms post $43–$59 an hour for live sessions only. Same license, your choice of building.',
      senior:'First step, at 5+ years: your next raise is a role, not a raise — clinical supervisor, a specialty waitlist of your own, or your own paneled practice. The compact (11 states live) can widen your map.'};
    V11.groupcns = {hook:'California group practices post $135,000 for this license.', conf:'High', next:NEXT_COUNSELOR, step:{
      student:'First step, as a student: aim your practicum at a group-practice site — the seat that pays $75,000–$135,000 hires the license plus a specialty, and practicum is where the specialty starts.',
      early:'First step, as an associate: take the associate job inside a group practice if you can — same building, and your supervised hours count toward the license this seat requires.',
      mid:'First step, licensed: get the pay formula in writing — salary, or a productivity split, and what counts as a billable hour. Every group-practice posting in our scan pays on productivity.',
      senior:'First step, at 5+ years: the raise is ownership or supervision — your own paneled practice, or a clinical-lead role. Price both against your current split.'}};
    V11.agencycns = {hook:'Ninety-five billable hours a month. That is the job.', conf:'Medium', next:NEXT_COUNSELOR, step:{
      student:'First step, as a student: agency practicum sites teach volume and crisis work — the two things agency postings screen for. Choose one on purpose, not by accident.',
      early:'First step, as an associate: agencies are the most reliable supervision seat — Helio Health provides license supervision at no cost inside the job. Confirm yours in writing.',
      mid:'First step, licensed: read the billable-hours line before the salary line — one agency prints at least 95 billable hours a month. That number is your real job description.',
      senior:'First step, at 5+ years: agency seniority buys the program-lead and supervisor roles — or it is your exit ramp into practice pay. Decide which, on paper.'}};
    V11.platform = {hook:'Forty-three dollars an hour. Sessions only. Nothing else paid.', conf:'Medium', next:NEXT_COUNSELOR,
      coe:'Turning away now saves the gap between the two posted buildings — a master’s costing $40K–$100K+ aimed at $43–$59/hr (live sessions only) instead of the $75,000–$135,000 group-practice bands: roughly $20K–$40K a year at a full caseload (derived from the posted bands).', step:{
      student:'First step, as a student: do not plan the degree around the app — the platforms require the full license and refuse everyone who still needs supervision. The gig cannot be your way in.',
      early:'First step, as an associate: the platform door is closed to you today — its posting refuses clinicians who require supervision. Spend these years where supervision is free and written.',
      mid:'First step, licensed: if you take platform hours, cap them — a side caseload, never the building. Your main hours belong where the client list is yours.',
      senior:'First step, at 5+ years: your years are worth a rate you set. On the platform the rate is set for you, per live hour. Price the difference once, in dollars, before renewing.'}};
    V11.sudcns = {hook:'A bachelor’s gets you in. It also caps you.', conf:'Medium', next:NEXT_COUNSELOR,
      coe:'Turning away now — from staying, not from starting — saves roughly $40K+ a year at the top of each ladder: this seat’s postings top at $79,886, the licensed practice postings at $135,000 (derived from the posted bands).', step:{
      student:'First step, as a student: if addiction work is the calling, enter through the certificate if money is tight — then decide now, in writing, that the bridge (licensed level or master’s) is part of the plan.',
      early:'First step, early in: log everything — supervised SUD hours and treatment experience are the currency the bridge programs and licensed employers count.',
      mid:'First step, at 3–5 years: you are near this seat’s posted ceiling ($79,886 in our scan). The bridge decision is now worth roughly $40K a year — make it this year.',
      senior:'First step, at 5+ years: your experience is the asset — price it as a supervisor or program lead, or carry it across the bridge into the licensed seat. Do not let it sit under the certificate ceiling.'}};
    V11.associate = {hook:'Supervision free, or supervision billed to you.', conf:'High', next:NEXT_COUNSELOR,
      coe:'Every year parked at associate pay ($40,000–$65,000 in the scan) instead of finishing the supervised hours costs roughly half a licensed year — the licensed practice band starts at $75,000 (derived from the posted bands).', step:{
      student:'First step, as a student: your practicum hours (100) and internship hours (600) are the first logged hours of your career — keep your own copy of every log from day one.',
      early:'First step, as an associate: this is your seat. Supervision in writing, hours logged weekly, exam as early as your state allows. Every other instruction is noise until the license is in hand.',
      mid:'First step, licensed: you have left this seat — keep your hour logs and supervision records anyway. Boards and employers can ask for them years later.',
      senior:'First step, at 5+ years: become the supervisor you needed — paid supervisory roles are posted in this market, and good supervision is the scarcest thing in it.'}};
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
  var NEXT_HVC = 'We re-check this verdict by December 2027. Electrician and plumber are checked too — the same hands-first map, three different pay traps. Comment VOLT or FLOW for those checks.';
  function inject(){
    if (typeof PROFS === 'undefined' || PROFS.hvac) return;
    PROFS.hvac = {
      title: 'Your Path Check — HVAC Technician',
      kick: 'HVAC Technician',
      count: '+11%',
      srcWhat: 'growth, 2025–35 — the fastest of the three trades',
      srcLine: 'the BLS outlook (which names data centers itself), 27 live job postings and the EPA rulebook',
      code: 'FROST',
      tail: 'PATHCHECK — KNOW BEFORE YOU PAY FOR THE DIPLOMA',
      next: NEXT_HVC
    };
    COFACTS.hvac = ['<b>+11% growth</b> and <b>+48,200 jobs</b> (BLS, 2025–35) — and the BLS text names <b>data centers</b> as a driver in its own words.', '<b>EPA 608</b> — the federal refrigerant card — is named in <b>13 of 27</b> postings and required in all 13. No card, no refrigerant work.', '<b>$60K–$125K</b> is what commercial controls postings pay — and <b>0 of 9</b> of them mention commission. The commission lives in residential service.'];
    SEATS.hvcapp = {
      prof: 'hvac',
      label: 'Apprentice / helper — the door',
      head: 'HVAC APPRENTICE / HELPER — <span class="pink">YES</span>. THE FASTEST DOOR OF THE THREE TRADES.',
      facts: [
        ['The door', 'Postings take beginners openly — one reads <span class="pink">“no experience required”</span> for the apprentice seat, with paid training'],
        ['The one hard gate', 'The <span class="pink">EPA 608</span> card — a federal exam, a few hundred dollars with preparation — is what lets a shop bill you out as a technician'],
        ['The trap', 'Private HVAC diplomas run <span class="pink">$20,825 to about $42,000</span> — and the graduate starts as the same helper']
      ],
      door: 'What to do: get the EPA 608 card (Universal if you can) and enter through a paid helper seat. Let an employer pay for your hours, not a school for your hope.',
      short: 'The HVAC door is the fastest of the three trades — the federal EPA 608 card plus a paid helper seat takes months, not years, and the expensive diploma changes nothing about the first job.'
    };
    SEATS.hvctech = {
      prof: 'hvac',
      label: 'Residential service technician (hourly)',
      head: 'RESIDENTIAL SERVICE TECHNICIAN — <span class="pink">YES</span>, ON HOURLY PAY.',
      facts: [
        ['The pay', 'Hourly bands run <span class="pink">$28–$35 an hour</span>, and <span class="pink">$30–$50</span> at lead level with 5+ years'],
        ['The ask', '<span class="pink">2+ years</span> of service experience is the standard screen; EPA 608 required'],
        ['The priced cost', 'On-call rotations appear in <span class="pink">a quarter</span> of the scan’s postings — it has a price; negotiate it before you sign']
      ],
      door: 'What to do: you are in a YES seat on hourly or guaranteed pay. Keep a system log — type, tonnage, fault, fix — it is the record the commercial seats hire on.',
      short: 'The hourly residential service tech is a good bet — $28–$50 an hour by level, with on-call as the priced cost of the seat.'
    };
    SEATS.hvcomm = {
      prof: 'hvac',
      label: 'Commercial HVAC / controls (BAS) specialist',
      head: 'COMMERCIAL / CONTROLS SPECIALIST — <span class="pink">YES</span>. THE TOP PAY IN THE TRADE.',
      facts: [
        ['The pay', 'Nine controls postings run <span class="pink">$60,000–$125,000</span> a year — salary, not commission'],
        ['The ask', '<span class="pink">2–5 years of controls work</span> and one named platform: Johnson Controls, Siemens, Trane, Distech, Niagara'],
        ['The driver', 'Smart buildings and data centers run on these systems — and BLS names <span class="pink">data centers</span> as this trade’s growth driver']
      ],
      door: 'What to do: service years first, then learn one controls platform properly. The specialty is a second apprenticeship inside the trade — which is why it pays.',
      short: 'The commercial controls seat is the top pay in HVAC — $60K–$125K posted, salary pay, and not one of the nine postings mentions commission.'
    };
    SEATS.hvcown = {
      prof: 'hvac',
      label: 'Owner-operator / own shop',
      head: 'OWN SHOP — <span class="pink">YES</span>.',
      facts: [
        ['The proof of value', 'Investors paid record prices for shops like yours — <span class="pink">55 PE HVAC deals in 2024</span> alone (PitchBook), including a <span class="pink">~$2.5B</span> platform deal'],
        ['What they buy', 'Recurring <span class="pink">maintenance agreements</span> and a local name — not trucks'],
        ['The honest limit', 'Nobody publishes audited small-shop income — this pack does not invent yours']
      ],
      door: 'What to do: get the contractor license your state requires, build the maintenance-agreement book, and keep your techs on pay that does not need a quota to work.',
      short: 'Owning the shop is a good bet — buyers pay record prices for exactly this asset: a license, a local name and a book of maintenance agreements.'
    };
    SEATS.hvcsales = {
      prof: 'hvac',
      label: 'Commission sales-tech (PE platform)',
      head: 'COMMISSION SALES-TECH — <span class="pink">NO</span>.',
      facts: [
        ['The pitch', 'One posting sells the seat as <span class="pink">“$100K+ earning potential, uncapped commission”</span> — the ceiling is the ad; the floor is zero'],
        ['The record', 'After one platform takeover, a tech reports full systems jumping from <span class="pink">$6K–$13K to $16K–$23K</span> — the job became selling the difference'],
        ['The churn', 'Trade techs leave at about <span class="pink">21% a year</span>; median tenure <span class="pink">three years</span> (ServiceTitan figures)']
      ],
      door: 'What to do instead: your EPA card and your system log transfer on day one — to an hourly shop or a commercial contractor. The controls seat sits two or three years past that.',
      short: 'The commission sales-tech seat is a dead end as a plan — pay depends on selling replacements, while the same hands earn a salary in commercial and controls work.'
    };
    GRIDS.hvac = {
      head: 'HVAC IS A YES. THE FEDERAL CARD OPENS IT. THE SPECIALTY PAYS FOR IT.',
      sub: 'The title covers five different paychecks. They do not share a verdict:',
      corner: 'Commercial controls — the systems that run smart buildings and data centers. The trap has a price: a private HVAC diploma costs $20,825 to about $42,000, and its graduate starts as the same helper as the person who paid a few hundred dollars for the EPA 608 card.',
      short: '“HVAC technician” is five different paychecks — the door takes months through the federal card, controls pays the top with no commission, and the commission sales seat is the dead end.',
      rows: [
        ['Apprentice / helper', 'YES', 'EPA 608 + a paid seat · months, not years', 'hvcapp'],
        ['Residential service tech (hourly)', 'YES', '$28–$50/hr by level · on-call is the priced cost', 'hvctech'],
        ['Commercial / controls (BAS)', 'YES', '$60K–$125K posted · 0 of 9 mention commission', 'hvcomm'],
        ['Own shop', 'YES', 'buyers pay for the maintenance book and the name', 'hvcown'],
        ['Commission sales-tech', 'NO', '“uncapped commission” = uncapped pressure · ~21% yearly churn', 'hvcsales']
      ]
    };
    QUOTES.hvac = {
      q: 'Month before Apex, a private equity back company, took over, we had full systems going for 6K to 13K. Right after they took over, the price book changed. Full systems were going for 16K to 23K.',
      by: 'A working HVAC technician on r/HVAC, on his shop’s takeover by a PE platform (quoted in a published podcast transcript, 2026)',
      url: 'https://podscripts.co/podcasts/the-matt-walsh-show/ep-1862-how-private-equity-is-ruining-hvac'
    };
    GV11.hvac = {hook: 'AI needs air conditioning. You install it.', next: NEXT_HVC};
    V11.hvcomm = {
      hook: 'Controls techs post $125K. No commission.',
      conf: 'High',
      next: NEXT_HVC
    };
    V11.hvcsales = {
      hook: 'Uncapped commission means uncapped pressure.',
      conf: 'Medium',
      next: NEXT_HVC,
      coe: 'Turning away now saves ≈3 years — the median tenure — of quota work that leaves no diagnosis record behind; the hourly and controls seats hire on exactly that record.',
      step: {
        student: 'First step, as a student: if a “free training” offer ends in commission pay, read the pay paragraph twice. The training is real; so is the quota.',
        early: 'First step, early in: keep your own system log even inside a quota shop. The log is yours; the price book is theirs.',
        mid: 'First step, at 3–5 years: move the record, not the quota — commercial contractors hire on diagnosis proof and pay $35–$45 an hour for it.',
        senior: 'First step, at 5+ years: your reputation in homeowners’ kitchens is worth more under your own name — contractor license, hourly honesty, your own book.'
      }
    };
    V11.hvcapp = {
      hook: 'Six months to a federal card.',
      conf: 'High',
      next: NEXT_HVC,
      step: {
        student: 'First step, as a student: book the EPA 608 exam before you book any school tour. Universal is the version commercial shops ask for.',
        early: 'First step, early in: make yourself the helper who gets sent — clean truck, written notes, systems logged. Shops promote the helper they can bill out.',
        mid: 'First step, at 3–5 years: this seat is behind you — your step is the commercial crossing and one controls platform.',
        senior: 'First step, at 5+ years: hire helpers the way you were hired — a paid seat and a logbook beat a diploma mill’s graduate for your truck too.'
      }
    };
    V11.hvctech = {
      hook: 'Service techs post $28–$50 an hour by level.',
      conf: 'High',
      next: NEXT_HVC
    }; /* composed by the integrator from spec-verbatim facts — the spec shipped V11 for 9 of 15 trade seats */
    V11.hvcown = {
      hook: 'Buyers are paying record prices for HVAC shops.',
      conf: 'High',
      next: NEXT_HVC
    }; /* composed by the integrator from spec-verbatim facts — the spec shipped V11 for 9 of 15 trade seats */
    PROF_STEPS.hvac = {
      student: 'First step, before you start: get the EPA 608 card — the federal refrigerant exam. It costs a few hundred dollars with preparation, and no shop can bill you out as a tech without it. Skip the $21K–$42K diploma for now.',
      early: 'First step, as a helper: start the system log — type, tonnage, fault, fix — from your first week. That log is the experience record the 2+ year postings screen for.',
      mid: 'First step, at 3–5 years: cross into commercial work — rooftops, chillers, refrigeration. Then learn one controls platform; controls postings run $60K–$125K with no commission line.',
      senior: 'First step, at 5+ years: price the book, not the hours — if you own or build a shop, its value is the maintenance agreements and the name; that is what the record deal pace of 2024–2025 was buying.'
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
  var NEXT_ELC = 'We re-check this verdict by December 2027. HVAC and plumber are checked too — the same hands-first map, three different pay traps. Comment FROST or FLOW for those checks.';
  function inject(){
    if (typeof PROFS === 'undefined' || PROFS.electrician) return;
    PROFS.electrician = {
      title: 'Your Path Check — Electrician',
      kick: 'Electrician',
      count: '72,700',
      srcWhat: 'openings a year in the US',
      srcLine: 'the BLS outlook, 36 live job postings and published union wage scales',
      code: 'VOLT',
      tail: 'PATHCHECK — KNOW BEFORE YOU SIGN THE LOAN',
      next: NEXT_ELC
    };
    COFACTS.electrician = ['<b>72,700 openings a year</b> (BLS) — against a training pipe that takes <b>4–5 years</b> per person and is capped by law.', '<b>24 of 36</b> live postings name the <b>state journeyman license</b> — the license is the screen, not the diploma.', '<b>$62.00 an hour</b> is the union scale where the data centers are — and <b>$24 an hour</b> is a real posting for wiring new houses. Same license.'];
    SEATS.elcapp = {
      prof: 'electrician',
      label: 'Apprentice electrician — the door',
      head: 'APPRENTICE ELECTRICIAN — <span class="pink">YES</span>. IT IS THE ONLY DOOR.',
      facts: [
        ['The pay', 'Registered apprenticeships pay from year one — about <span class="pink">$20.30 an hour</span> on published scales — and charge <span class="pink">$0 tuition</span>'],
        ['The catch', 'Slots are capped by law: in many places one journeyman may supervise <span class="pink">one apprentice</span> on site, and classes open <span class="pink">once a year</span>'],
        ['The trap', 'A private school charges <span class="pink">$21,325 to about $42,000</span> — and you still start as a helper owing the same supervised years']
      ],
      door: 'What to do: apply to a registered apprenticeship inside its yearly window — union (IBEW/JATC) or non-union. Get your state apprentice card before you count a single hour.',
      short: 'The apprentice seat is the only real door — it pays you from year one, but the state caps how many apprentices each journeyman can supervise, so the window opens once a year.'
    };
    SEATS.elcjour = {
      prof: 'electrician',
      label: 'Journeyman electrician',
      head: 'JOURNEYMAN ELECTRICIAN — <span class="pink">YES</span>.',
      facts: [
        ['The screen', '<span class="pink">24 of 36</span> live postings name the state journeyman license'],
        ['The pay', 'Posted journeyman bands run <span class="pink">$29–$65 an hour</span>; licensed service posts <span class="pink">$45–$65</span>'],
        ['The floor', 'Residential new construction posts <span class="pink">$24–$30 an hour</span> — the bottom band of the whole scan']
      ],
      door: 'What to do: you hold the asset. Aim it at the buildings that pay — industrial, hospitals, data centers — and keep your hours logged by work type.',
      short: 'The licensed journeyman is a good bet — the license is named in two of three postings, and pay runs $29–$65 an hour depending on the building you work in.'
    };
    SEATS.elcdata = {
      prof: 'electrician',
      label: 'Industrial / data-center electrician',
      head: 'INDUSTRIAL / DATA-CENTER ELECTRICIAN — <span class="pink">YES</span>. THE TOP PAY IN THE TRADE.',
      facts: [
        ['The posting', 'Rosendin posts data-center journeyman work at <span class="pink">$48.50 an hour</span>, with healthcare and retirement on top'],
        ['The scale', 'IBEW Local 26, covering Data Center Alley, pays <span class="pink">$62.00 an hour</span> plus <span class="pink">$28.66</span> of benefits (June 2026 sheet)'],
        ['The driver', 'These are the buildings AI lives in — every one is a small power plant that licensed hands must wire and maintain']
      ],
      door: 'What to do: journeyman license first, then OSHA 30 and NFPA 70E (the electrical-safety card), then apply to the data-center and industrial contractors by name.',
      short: 'The industrial and data-center seat is the top pay in the trade — $48.50 an hour posted, $62 an hour on the union scale where the data centers are.'
    };
    SEATS.elcown = {
      prof: 'electrician',
      label: 'Master electrician / own shop',
      head: 'MASTER ELECTRICIAN / OWN SHOP — <span class="pink">YES</span>.',
      facts: [
        ['The ladder', 'The master exam unlocks supervising, permitting work, and — with the contractor license — <span class="pink">your own customers</span>'],
        ['The proof of value', 'Investor platforms have closed <span class="pink">800+ trade deals since 2022</span> (PitchBook) buying shops exactly like the one you would build'],
        ['The honest limit', 'Nobody publishes audited small-shop income — this pack does not invent a number for your shop']
      ],
      door: 'What to do: pass the master exam when eligible, get the contractor license and insurance before the first solo job, and build a maintenance-contract book — that is what buyers pay for.',
      short: 'Owning the shop is a good bet — the master license plus a contractor license turns your hands into a business, and buyers pay real money for exactly that asset.'
    };
    SEATS.elcsales = {
      prof: 'electrician',
      label: 'Commission sales-tech (residential service platform)',
      head: 'COMMISSION SALES-TECH — <span class="pink">NO</span>.',
      facts: [
        ['The model', 'Your pay is commission on what you <span class="pink">sell the homeowner</span>, under a price book and a quota you did not write'],
        ['The contrast', 'The same license, paid hourly, posts <span class="pink">$45–$65 an hour</span> with no quota (licensed service postings)'],
        ['The churn', 'Trade techs leave at about <span class="pink">21% a year</span>; median tenure is <span class="pink">three years</span> (ServiceTitan figures)']
      ],
      door: 'What to do instead: take the same license to an hourly shop, to industrial work, or into your own name. The NO is on the pay structure, not on you.',
      short: 'The commission sales-tech seat is a dead end as a plan — your license becomes a sales quota, while the same license paid hourly posts $45–$65 an hour.'
    };
    GRIDS.electrician = {
      head: 'ELECTRICIAN IS A YES. THE LICENSE IS THE JOB. THE SEAT DECIDES THE PAY.',
      sub: 'The title covers five different paychecks. They do not share a verdict:',
      corner: 'Industrial and data-center work — the buildings AI lives in. The trap has a price: a private electrical program costs $21,325 to about $42,000 and still graduates a helper who owes the same 4–5 supervised years as the apprentice who was paid from day one.',
      short: '“Electrician” is five different paychecks — the apprentice door is narrow but real, data-center work pays the top of the trade, and the commission sales seat is the one dead end.',
      rows: [
        ['Apprentice — the door', 'YES', 'paid from year one · $0 tuition · slots capped by law', 'elcapp'],
        ['Journeyman electrician', 'YES', 'license named in 24 of 36 postings · $29–$65/hr', 'elcjour'],
        ['Industrial / data-center', 'YES', '$48.50/hr posted · $62.00/hr union scale in Data Center Alley', 'elcdata'],
        ['Master / own shop', 'YES', 'the master license is the business license in most states', 'elcown'],
        ['Commission sales-tech', 'NO', 'your license becomes a sales quota · ~21% yearly churn', 'elcsales']
      ]
    };
    QUOTES.electrician = {
      q: 'I’m a Master Electrician. I want to hire a new apprentice every year. In much of the country, the rules won’t let me keep them all on one crew.',
      by: 'Stewart Manning — Master Electrician, on apprentice ratio rules (LinkedIn, 2026)',
      url: 'https://www.linkedin.com/posts/stewart-manning-m-a-6457a7a_manningmethod-electricians-apprenticeship-activity-7519124817888014337-42Y-'
    };
    GV11.electrician = {hook: 'Robots don’t pull wire in old houses.', next: NEXT_ELC};
    V11.elcdata = {
      hook: 'Data centers pay wiremen $62 an hour.',
      conf: 'High',
      next: NEXT_ELC
    };
    V11.elcsales = {
      hook: 'Your wrench became a sales quota.',
      conf: 'Medium',
      next: NEXT_ELC,
      coe: 'Turning away now saves ≈3 years — the median tenure — of license value spent building a customer book that stays with the platform when you wash out.',
      step: {
        student: 'First step, as a student: do not enter the trade through a commission shop’s “free training” without reading the pay paragraph — after training, the base can drop to minimum wage plus commission.',
        early: 'First step, early in: get your hours registered with the state, whatever the shop calls you. Hours that are not registered do not become a license.',
        mid: 'First step, at 3–5 years: move the license, not the quota — hourly service postings at $45–$65 an hour hire the same hands with no sales target.',
        senior: 'First step, at 5+ years: your customer knowledge is worth more under your own name — master exam, contractor license, your own book.'
      }
    };
    V11.elcapp = {
      hook: 'The door is narrow. The room is empty.',
      conf: 'High',
      next: NEXT_ELC,
      step: {
        student: 'First step, as a student: find your state’s application windows today — JATC classes open once a year, and a missed window costs a full year.',
        early: 'First step, early in: protect the chain — registered hours, every week logged. The license at the end is the whole asset.',
        mid: 'First step, at journeyman level: this seat is behind you — your step is the specialty choice (industrial, service, controls wiring).',
        senior: 'First step, at master level: hire and register apprentices under your ratio — the bottleneck you beat is now your recruiting edge.'
      }
    };
    V11.elcjour = {
      hook: '24 of 36 postings name the license.',
      conf: 'High',
      next: NEXT_ELC
    }; /* composed by the integrator from spec-verbatim facts — the spec shipped V11 for 9 of 15 trade seats */
    V11.elcown = {
      hook: 'Investors closed 800+ trade deals since 2022.',
      conf: 'High',
      next: NEXT_ELC
    }; /* composed by the integrator from spec-verbatim facts — the spec shipped V11 for 9 of 15 trade seats */
    PROF_STEPS.electrician = {
      student: 'First step, before you start: apply to a registered apprenticeship — union JATC or non-union — inside its yearly window. Do not buy a $21K–$42K diploma first: its graduates start as the same helpers.',
      early: 'First step, as an apprentice: get your state apprentice card, then log every hour by work type from day one. Unregistered hours often do not count toward the license.',
      mid: 'First step, as a journeyman: aim the license at the buildings that pay — data-center postings run $48.50 an hour and the Data Center Alley scale is $62.00 — and add OSHA 30 and NFPA 70E.',
      senior: 'First step, as a master: price the business, not the hours — contractor license, insurance, and a maintenance-contract book. That book is what buyers pay multiples for.'
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
  var NEXT_PLB = 'We re-check this verdict by December 2027. Electrician and HVAC are checked too — the same hands-first map, three different pay traps. Comment VOLT or FROST for those checks.';
  function inject(){
    if (typeof PROFS === 'undefined' || PROFS.plumber) return;
    PROFS.plumber = {
      title: 'Your Path Check — Plumber',
      kick: 'Plumber',
      count: '42,000',
      srcWhat: 'openings a year in the US',
      srcLine: 'the BLS outlook, 26 live job postings and published union wage scales',
      code: 'FLOW',
      tail: 'PATHCHECK — KNOW BEFORE YOU PICK THE DOOR',
      next: NEXT_PLB
    };
    COFACTS.plumber = ['<b>Top 10% already earn above $108,420</b> (BLS) — in a trade nobody can offshore.', 'At one company: apprentice seat <b>$55,000–$75,000</b> for year one, licensed journeyman seat <b>$110,000–$130,000</b>. The gap between those numbers is <b>the license</b>.', 'One posting pays <b>100% commission</b>. Another offers the choice in writing: <b>$35–$40 an hour guaranteed</b> — or 25% commission.'];
    SEATS.plbapp = {
      prof: 'plumber',
      label: 'Apprentice plumber — the door',
      head: 'APPRENTICE PLUMBER — <span class="pink">YES</span>. BUT PICK THE DOOR LIKE IT MATTERS.',
      facts: [
        ['The wage door', 'A union apprenticeship charges <span class="pink">$0 tuition</span> and pays <span class="pink">$24.54 an hour</span> in year one (UA Local 486)'],
        ['The chain door', 'The biggest chain takes <span class="pink">no experience</span> and pays in year one — then moves graduates to <span class="pink">minimum-wage base plus 16–22% commission</span>, by its own posting'],
        ['The years', 'Either way the license takes <span class="pink">4–5 years</span> and about <span class="pink">2,000 paid hours a year</span> (BLS) — choose what the years open into']
      ],
      door: 'What to do: apply to registered apprenticeships first. If you take a chain’s free training, read the contract for repayment clauses and get your hours registered with the state from day one.',
      short: 'The apprentice seat is a yes with a warning — one door pays a wage scale for 4–5 years, the other pays for training and then pays commission; both take the same years.'
    };
    SEATS.plbserv = {
      prof: 'plumber',
      label: 'Licensed service plumber (hourly / guaranteed)',
      head: 'LICENSED SERVICE PLUMBER — <span class="pink">YES</span>, ON A GUARANTEED FLOOR.',
      facts: [
        ['The top band', 'A licensed journeyman seat posts <span class="pink">$110,000–$130,000</span> plus a $5,000 sign-on — state license and 3+ years required'],
        ['The printed choice', 'One posting offers <span class="pink">$35–$40 an hour guaranteed</span> with a license — “if you desire a commission, we pay 25%”'],
        ['The priced cost', 'On-call is the trade’s norm (BLS’s own words) — one shop now headlines <span class="pink">“No On-Call”</span> as its top perk, which prices your nights for you']
      ],
      door: 'What to do: you hold the asset every shop in the scan is bidding for. Take the guarantee; let commission be an option on top, never the floor under you.',
      short: 'The licensed service plumber on a guaranteed floor is a good bet — $110K–$130K posted at the top, with on-call as the cost to price, not to absorb.'
    };
    SEATS.plbfit = {
      prof: 'plumber',
      label: 'Pipefitter / industrial fitter',
      head: 'PIPEFITTER — <span class="pink">YES</span>. THE INDUSTRIAL BRANCH OF THIS SAME MAP.',
      facts: [
        ['The postings', 'Five industrial postings, <span class="pink">all union</span>, all requiring the journeyman card or license — <span class="pink">$40.64 to about $54 an hour</span>'],
        ['The scale', 'UA Local 130 (plumbers & pipefitters) publishes <span class="pink">$60.50 an hour</span> base, <span class="pink">$103.85</span> with benefits (June 2025)'],
        ['Why it sits here', 'BLS counts plumbers, pipefitters and steamfitters as <span class="pink">one occupation</span> — one union, one apprenticeship pipe, one license ladder']
      ],
      door: 'What to do: the road in is the same apprenticeship — tell your sponsor you want industrial work, log plant hours, and keep welding practice current.',
      short: 'The pipefitter seat is the industrial branch of plumbing — union scales to $60.50 an hour, every posting gated by the journeyman card or license.'
    };
    SEATS.plbown = {
      prof: 'plumber',
      label: 'Master plumber / own shop',
      head: 'MASTER PLUMBER / OWN SHOP — <span class="pink">YES</span>.',
      facts: [
        ['The ladder', 'Journey level, then the <span class="pink">master exam</span> — and in some states master status is required for the <span class="pink">contractor license</span> itself (BLS)'],
        ['What buyers pay for', 'The license on the wall, the local name, and the <span class="pink">maintenance-agreement book</span> — the assets platforms pay multiples for'],
        ['The honest limit', 'No audited small-shop income exists in this pack — your shop’s number is yours to build, not ours to invent']
      ],
      door: 'What to do: sit the master exam in the first cycle you qualify. Then build the agreement book from month one — it is the sellable asset.',
      short: 'Owning the shop is a good bet — the master license unlocks supervising, permitting and, in many states, the contractor license the business stands on.'
    };
    SEATS.plbsales = {
      prof: 'plumber',
      label: 'Commission-only service tech',
      head: 'COMMISSION-ONLY SERVICE TECH — <span class="pink">NO</span>.',
      facts: [
        ['The pure form', 'One posting in the scan pays <span class="pink">100% commission</span> — a slow week pays <span class="pink">$0</span>'],
        ['The chain form', 'After “free” training: <span class="pink">minimum-wage base plus 16–22%</span> of revenue (the employer’s own pay text)'],
        ['The contrast', 'The same hands, licensed and guaranteed, post <span class="pink">$110,000–$130,000</span> — the guarantee exists in the market; this seat chooses not to offer it']
      ],
      door: 'What to do instead: get your hours registered and finish the license — then take Seat 2’s guarantee at the same kind of company. Nothing about this NO follows you.',
      short: 'The commission-only seat is a dead end as a plan — a slow week pays $0, while licensed guaranteed seats at the same kind of company post $110K–$130K.'
    };
    GRIDS.plumber = {
      head: 'PLUMBER IS A YES. THE LICENSE SETS THE PAY. COMMISSION SETS THE TRAP.',
      sub: 'The title covers five different paychecks. They do not share a verdict:',
      corner: 'The licensed seats — guaranteed service work and the industrial branch. The trap has a price: the chain door’s “free” training ends at minimum-wage base plus 16–22% commission, while a union apprenticeship pays $24.54 an hour in year one at $0 tuition.',
      short: '“Plumber” is five different paychecks — the license is worth double at the same company, the industrial branch pays union scale, and the commission-only seat is the dead end.',
      rows: [
        ['Apprentice — the door', 'YES', 'two doors: $0-tuition wage scale, or free training into commission', 'plbapp'],
        ['Licensed service plumber', 'YES', '$110K–$130K posted · guaranteed floor is the line', 'plbserv'],
        ['Pipefitter / industrial', 'YES', '$40.64–$54/hr posted · UA scale $60.50/hr', 'plbfit'],
        ['Master / own shop', 'YES', 'master exam unlocks the contractor license in many states', 'plbown'],
        ['Commission-only tech', 'NO', '100% commission exists in the postings · a slow week pays $0', 'plbsales']
      ]
    };
    QUOTES.plumber = {
      q: 'We keep saying we can’t find plumbers. But who’s supposed to make them? They don’t grow on trees.',
      by: 'Dennis The Apprentice — working plumbing contractor and trainer, The Trade Traction Podcast (transcript, Oct 2026)',
      url: 'https://podscan.fm/podcasts/the-trade-traction-podcast-with-dennis-the-apprentice'
    };
    GV11.plumber = {hook: 'Nobody offshores a burst pipe.', next: NEXT_PLB};
    V11.plbserv = {
      hook: 'Licensed journeymen post $130K. Apprentices post $65K.',
      conf: 'High',
      next: NEXT_PLB
    };
    V11.plbsales = {
      hook: 'One hundred percent commission. Zero percent security.',
      conf: 'Medium',
      next: NEXT_PLB,
      coe: 'Turning away now saves your 4–5 apprenticeship years from being spent on a sales record that stays with the shop — the license record is the one that leaves with you.',
      step: {
        student: 'First step, as a student: if the training is free, find who pays for it. In the chain model, you do — in commission, after graduation.',
        early: 'First step, early in: get registered hours even inside a commission shop. The license clock is the only clock that pays you later.',
        mid: 'First step, at 3–5 years: move the license to a guarantee — offers like this are posted: $35–$40 an hour guaranteed, commission as an option.',
        senior: 'First step, at 5+ years: your diagnostic reputation is portable and your sales book is not. Price the portable one — hourly shop, industrial branch, or your own name.'
      }
    };
    V11.plbapp = {
      hook: 'Two doors. Opposite insides.',
      conf: 'High',
      next: NEXT_PLB,
      step: {
        student: 'First step, as a student: list every registered program within driving distance and its next window. The wage door fills by calendar, not by luck.',
        early: 'First step, early in: confirm monthly that your hours are being reported to the state. Trust, but verify — it is your license.',
        mid: 'First step, at journeyman level: this seat is behind you — your step is the guarantee check on every offer from here on.',
        senior: 'First step, at master level: train apprentices the way the trade’s own trainers argue for — somebody made you; the shortage is your pricing power only if the pipe keeps flowing.'
      }
    };
    V11.plbfit = {
      hook: 'Union scale: $60.50 an hour in Chicago.',
      conf: 'High',
      next: NEXT_PLB
    }; /* composed by the integrator from spec-verbatim facts — the spec shipped V11 for 9 of 15 trade seats */
    V11.plbown = {
      hook: 'The master exam unlocks the contractor license.',
      conf: 'High',
      next: NEXT_PLB
    }; /* composed by the integrator from spec-verbatim facts — the spec shipped V11 for 9 of 15 trade seats */
    PROF_STEPS.plumber = {
      student: 'First step, before you start: apply to a registered apprenticeship first — the union door pays $24.54 an hour in year one at $0 tuition (UA Local 486). Read any chain’s training contract for repayment clauses before you sign anything.',
      early: 'First step, as an apprentice: register your hours with the state from day one and log them by work type. Unregistered years do not become a license.',
      mid: 'First step, as a journeyman: take service work with a guaranteed floor — the market posts $110,000–$130,000 for licensed journeymen, and one posting prints the hourly-or-commission choice in the open.',
      senior: 'First step, as a master: build the sellable asset — the contractor license where your state requires master status, and a maintenance-agreement book. That book is what acquirers price.'
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
  var NEXT_CYB = 'We re-check this verdict by November 2027. Next map: IT help desk — the bridge job nobody brags about, and the door that actually opens.';
  function inject(){
    if (typeof PROFS === 'undefined' || PROFS.cybersecurity) return;
    PROFS.cybersecurity = {
      title: 'Cybersecurity',
      kick: 'The field is booming. The beginner door is the trap.',
      count: '35',
      srcWhat: 'live job postings + BLS + CyberSeek',
      srcLine: 'Postings opened 1 Nov 2026 · BLS Employment Projections 2025–35 · CyberSeek (NIST/NICE + CompTIA + Lightcast)',
      code: 'SHIELD',
      tail: '514,359 postings. Almost none want beginners.',
      next: NEXT_CYB
    };
    COFACTS.cybersecurity = ['Of the postings in our scan that state years, only <span class="pink">1 of 29</span> accepts <span class="pink">zero experience</span>. One posting is even titled “Early Career” — and asks for 2 years.', 'Job boards counted <span class="pink">514,359</span> US cybersecurity postings in one year (CyberSeek) — and almost none of them want a beginner.', '<span class="pink">9 of 35</span> postings in our scan require US citizenship, a Public Trust, or a security clearance — the part of this market that cannot move offshore.'];
    SEATS.socanalyst = {
      prof: 'cybersecurity',
      label: 'SOC analyst',
      head: 'SOC ANALYST — <span class="pink">YES</span>. REAL HIRING. A FIRST RUNG THAT IS BEING EATEN.',
      facts: [
        ['The work', 'You watch alerts on screens and sort real attacks from noise. Tier 1 sorts. Tier 2 investigates. Tier 3 hunts.'],
        ['The trap', 'Sorting alerts is the first work AI agents and offshore centers take. Microsoft shipped alert-sorting agents in <span class="pink">November 2025</span>.'],
        ['The door', 'Federal employers still hire beginners here: one Tier-1 posting in our scan takes <span class="pink">0–2 years</span> and pays <span class="pink">$46,000–$76,000</span>.']
      ],
      door: 'What to do: enter here if you must start now — and plan your climb to Tier 2 from week one.',
      short: 'Watches alerts, sorts attacks from noise.'
    };
    SEATS.secengineer = {
      prof: 'cybersecurity',
      label: 'Security engineer / detection',
      head: 'SECURITY ENGINEER / DETECTION — <span class="pink">YES</span>. THE PEOPLE WHO BUILD THE ALARMS EARN THE MOST.',
      facts: [
        ['The work', 'You build and tune the systems that catch attacks, and write the rules they catch them with.'],
        ['The pay', 'The top pay in our scan lives here: <span class="pink">$140,000–$155,000</span> for a detection engineer, <span class="pink">$200,000–$240,000</span> for senior threat response.'],
        ['The price', '<span class="pink">Python</span>. Entry postings naming Python doubled in two years, to <span class="pink">46.6%</span>. At senior level it is simply required.']
      ],
      door: 'What to do: not a first job. It is where SOC analysts and IT workers climb to — aim your practice at it early.',
      short: 'Builds the systems that catch attacks.'
    };
    SEATS.cloudsec = {
      prof: 'cybersecurity',
      label: 'Cloud security engineer',
      head: 'CLOUD SECURITY ENGINEER — <span class="pink">YES</span>. GUARDING THE CLOUD PAYS LIKE IT MATTERS.',
      facts: [
        ['The work', 'You guard systems that run on AWS, Azure and Google Cloud — other people’s computers, your responsibility.'],
        ['The pay', 'Postings in our scan pay <span class="pink">$127,000–$198,000</span>. Employers name cloud security their <span class="pink">number-two skills gap</span> (ISC2, 2025).'],
        ['The door', 'The door asks for <span class="pink">3–5 years</span> plus certificates with repeat names: AZ-500, CCSP, AWS Certified Security – Specialty.']
      ],
      door: 'What to do: a move you make from IT or SOC work — not a first step from zero.',
      short: 'Guards systems that run in the cloud.'
    };
    SEATS.pentester = {
      prof: 'cybersecurity',
      label: 'Penetration tester',
      head: 'PENETRATION TESTER — <span class="pink">YES</span>. LEGAL HACKING. A SECOND JOB, NOT A FIRST JOB.',
      facts: [
        ['The work', 'Companies pay you to attack their systems on purpose, with permission, and report the holes before criminals find them.'],
        ['The pay', 'Real money: up to <span class="pink">$221,603</span> in our scan. Every posting asks for <span class="pink">2–5+ years</span> of security work first.'],
        ['The door', 'All <span class="pink">6 postings</span> in our scan name the <span class="pink">OSCP</span> certificate; 3 call it required. None of the 6 hires a beginner.']
      ],
      door: 'What to do: dream job, wrong first step. The road in runs through IT and SOC work first.',
      short: 'Attacks systems on purpose, with permission.'
    };
    SEATS.grcanalyst = {
      prof: 'cybersecurity',
      label: 'GRC analyst',
      head: 'GRC ANALYST — <span class="pink">NO</span> AS A BEGINNER’S FINAL STOP.',
      facts: [
        ['The work', 'You check that a company follows security rules and laws, and you write the proof: rule lists like NIST 800-53 and ISO 27001.'],
        ['The trap', 'Every GRC posting in our scan demands <span class="pink">3–7 years</span>. Zero hire a beginner. Checking documents against lists is also the first security work AI drafts well.'],
        ['The price', 'Courses selling a fast GRC door charge about <span class="pink">$10,000–$25,000</span> — for certificates that themselves require 3–5 years of experience to hold.']
      ],
      door: 'What to do instead: fine specialty at year four. As a beginner’s final stop: no.',
      short: 'Checks companies against security rule lists.'
    };
    GRIDS.cybersecurity = {
      head: 'Five jobs hide inside one word',
      sub: 'Same field. Different doors, different futures.',
      corner: '$10,000–$25,000 — the bootcamp bill for a door that is not hiring beginners',
      short: '“Cybersecurity” is five different jobs — SOC hires beginners but its first rung is being eaten, engineering and cloud pay the top, and GRC is the dead end as a first stop.',
      rows: [
        ['SOC analyst', 'YES', 'Real hiring — but climb past alert-sorting fast.', 'socanalyst'],
        ['Security engineer / detection', 'YES', 'Top pay in the scan: $140,000–$240,000.', 'secengineer'],
        ['Cloud security engineer', 'YES', 'Employers name it a top skills gap. $127,000–$198,000.', 'cloudsec'],
        ['Penetration tester', 'YES', 'A second job. Zero of 6 postings hire beginners.', 'pentester'],
        ['GRC analyst', 'NO', 'As a beginner’s final stop. Every posting demands 3+ years.', 'grcanalyst']
      ]
    };
    QUOTES.cybersecurity = {
      q: 'We’re seeing a propensity to favor traits over knowledge, which can be taught. Recruit for attitude and train for aptitude.',
      by: 'Jon France, CISO at ISC2 — Infosecurity Magazine, 11 June 2025',
      url: 'https://www.infosecurity-magazine.com/news/hands-on-skills-first-cyber-role/'
    };
    GV11.cybersecurity = {hook: '514,359 postings. Almost none want beginners.', next: NEXT_CYB};
    V11.socanalyst = {
      hook: 'Real hiring. A first rung that is being eaten.',
      conf: 'Medium',
      step: {
        student: 'First step, as a student: open the NICE Framework work-role list and read what a Cyber Defense Analyst actually does all day.',
        early: 'First step, early in: get one month of any IT work — help desk counts — and start Security+ the same month.',
        mid: 'First step, at mid level: stop sorting. Pick investigation: take the next alert your team touches and write its full story.',
        senior: 'First step, at senior level: move to hunting or detection rules — the work above the rung the agents took.'
      },
      next: NEXT_CYB
    };
    V11.secengineer = {
      hook: 'The people who build the alarms earn the most.',
      conf: 'High',
      step: {
        student: 'First step, as a student: learn Python before any certificate: one small script a week.',
        early: 'First step, early in: in your SOC or IT job, automate one boring task and keep the script as proof.',
        mid: 'First step, at mid level: write your first detection rule for a real alert system and test it on old alerts.',
        senior: 'First step, at senior level: own a detection area end to end — rules, tuning, and the numbers that prove they work.'
      },
      next: NEXT_CYB
    };
    V11.cloudsec = {
      hook: 'Guarding the cloud pays like it matters.',
      conf: 'High',
      step: {
        student: 'First step, as a student: pick one cloud — AWS or Azure — and learn how its accounts and permissions work.',
        early: 'First step, early in: from IT or SOC work, take every cloud ticket your team gets. Cloud time is the currency here.',
        mid: 'First step, at mid level: sit the AZ-500 or AWS Certified Security – Specialty exam — the names the postings repeat.',
        senior: 'First step, at senior level: guard a whole cloud estate, not one account: guardrails, alerts, and proof for auditors.'
      },
      next: NEXT_CYB
    };
    V11.pentester = {
      hook: 'Legal hacking. A second job, not a first job.',
      conf: 'Medium',
      step: {
        student: 'First step, as a student: build the base first: networking, Linux, Windows. The postings test all three.',
        early: 'First step, early in: two years of IT or SOC work is the real application. Labs are practice, not a substitute.',
        mid: 'First step, at mid level: start OSCP preparation — 3 of 6 postings in our scan call the certificate required.',
        senior: 'First step, at senior level: specialize: web applications or red team. Specialists top the pay band in our scan.'
      },
      next: NEXT_CYB
    };
    V11.grcanalyst = {
      hook: 'The paperwork specialty. Not a beginner door.',
      conf: 'Medium',
      coe: 'Turning away now saves a $10,000–$25,000 course bill for certificates that themselves require 3–5 years of experience to hold — years better spent inside the field, where GRC hires from.',
      step: {
        student: 'First step, as a student: do not start here. Every posting in our scan demands 3+ years of security work first.',
        early: 'First step, early in: build security years in SOC or IT first; GRC hires from inside the field.',
        mid: 'First step, at mid level: with 3+ security years, learn one rule list deeply: NIST 800-53 or ISO 27001.',
        senior: 'First step, at senior level: lead audits and own the evidence. Senior GRC in our scan pays up to $209,618.'
      },
      next: NEXT_CYB
    };
    PROF_STEPS.cybersecurity = {
      student: 'First step, as a student: pick your specialty first — the five jobs inside this word have different doors.',
      early: 'First step, early in: get real IT time. Help desk counts: 90% of hiring managers say prior IT experience is enough to consider you.',
      mid: 'First step, at mid level: climb one floor: from sorting alerts to investigating them. That move is the whole career.',
      senior: 'First step, at senior level: sell judgment, not certificates: detection, cloud or audit ownership — the work AI drafts cannot sign.'
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