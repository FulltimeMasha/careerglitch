/* ===== PathCheck — profession added Nov 1, 2026 (expansion wave 4).
   Loaded by v11.js via document.write (same split as /cst.js,
   /profs2.js and /profs3.js: v11.js sits at the ~98KB upload cap).
   The profession registers in its own inject block, following the
   cybersecurity precedent: PROFS / COFACTS / SEATS / GRIDS / QUOTES /
   GV11 / V11 / PROF_STEPS are assigned into the gate globals; seat
   rules are unshifted ahead of the base rules in package priority
   order; the cluster rule is spliced before the legacy fin rule.
   Every number traces to the profession's pilot package — digits
   never change. */

/* ================= AI PRODUCT MANAGER =================
   Source: ~/workspace/pathcheck-aipm-pilot/ (42 live postings opened
   and coded, 1 Nov 2026 + BLS layer: BLS counts NO product managers —
   nearest occupations labeled as proxies).
   Cluster: AI PRODUCT MANAGER IS A YES. THE TITLE IS NOT THE JOB.
   (Medium — grid-confidence wrapper below.) Code word: SHIP
   (proposal). Matcher (spec §2): every keyword carries the AI marker
   in the string itself; bare 'product manager' is deliberately NOT
   claimed — it is its own huge profession in the research queue
   (decision + justification: pilot method-v11.md §5). Seat order is
   load-bearing: evals > platform > growth > enterprise > entry >
   feature-default, because seat strings nest ('associate ai product
   manager' contains 'ai product manager'). */
(function(){
  var NEXT_AIPM = 'THE FULL REPORT — $5, OR FREE WHEN YOU SHARE: the six seats scored filter by filter — the evals proof the quality seat screens for, the three program doors priced, and the exact bridge in from data scientist and business analyst. We re-check these verdicts by June 2027 — or sooner if a quarterly scan shows the evals line stalling or the junior door widening. Next map: product manager — the huge plain title this check deliberately does not claim.';
  function inject(){
    if (typeof PROFS === 'undefined' || PROFS.aipm) return;
    PROFS.aipm = {
      title: 'AI Product Manager',
      kick: 'The top pay in tech. The title is not the job.',
      count: '42',
      srcWhat: 'live job postings (BLS counts no product managers)',
      srcLine: 'Postings opened 1 Nov 2026 · BLS Employment Projections 2025–35 — nearest occupations only, labeled as proxies',
      code: 'SHIP',
      tail: 'Three programs hire beginners. The other postings want years.',
      next: NEXT_AIPM
    };
    COFACTS.aipm = ['<b>20 of 26</b> postings that state a years number ask for <span class="pink">5+ years</span> of product work — the screen is years, not a diploma.', 'In <span class="pink">10 of 42</span> postings, the core job is <span class="pink">evals</span> — building the tests that grade the AI’s answers.', 'The <span class="pink">median pay band</span> across the postings that print one is <span class="pink">$204,500</span> — and the official statistics do not count this job at all.'];
    SEATS.platpm = {
      prof: 'aipm',
      label: 'Platform / model PM',
      head: 'PLATFORM / MODEL PM — <span class="pink">YES</span>. THE DEEPEST PAY IN THE SCAN.',
      facts: [
        ['Posted pay', 'OpenAI <span class="pink">$347K–$490K</span> · Google Group PM <span class="pink">$214K–$320K</span> · Voyager <span class="pink">$225K–$275K</span>'],
        ['The screen', 'Voyager asks <span class="pink">10+ years</span> of product work, 5+ owning platforms · Google asks <span class="pink">10 years</span> and five shipped products'],
        ['The work', 'You own what the model platform can do — its abilities, its cost, and every team that builds on it']
      ],
      door: 'What to do: you are in a YES seat if you have owned a technical platform or shipped model-facing work — the Full Report sequences that proof.',
      short: 'Platform / model PM is the money seat. OpenAI posts $347K–$490K for it, and the screen is a decade of technical product work.'
    };
    SEATS.evalpm = {
      prof: 'aipm',
      label: 'Evals / AI quality PM',
      head: 'EVALS / AI QUALITY PM — <span class="pink">YES</span>. THE SEAT EATING THE PROFESSION.',
      facts: [
        ['The work', 'You build the tests — called evals — that grade the AI’s answers, and you decide what is good enough to ship'],
        ['The job, in their words', 'LinkedIn: “own quality end to end” · Humana: golden sets, live evals, the <span class="pink">hallucination rate</span> — how often the model states false things with confidence'],
        ['Posted pay', 'LinkedIn <span class="pink">$155K–$253K</span> · Glean AI Quality <span class="pink">$160K–$240K</span> · Humana <span class="pink">$151.6K–$208.4K</span>']
      ],
      door: 'What to do: you are in a YES seat if you can build a test set and defend a grade — the Full Report sequences one eval set → hand-graded answers → your own automated grader.',
      short: 'Evals PM is a good choice. In 10 of 42 postings this grading work is the whole job, and it posts $151K–$253K.'
    };
    SEATS.featpm = {
      prof: 'aipm',
      label: 'AI feature PM',
      head: 'AI FEATURE PM — <span class="pink">YES</span>. THE AI TITLE ALONE IS A NO.',
      facts: [
        ['The size', '<span class="pink">17 of 42</span> postings — the biggest seat in the scan'],
        ['Posted pay', 'Adobe <span class="pink">$125.8K–$239.7K</span> · Microsoft Copilot <span class="pink">$119.8K–$274.8K</span> · lowest senior floor <span class="pink">$117,000</span>'],
        ['The trap', 'Two postings in our scan wear an AI title and name <span class="pink">no AI work</span> in their text — ordinary coordination is the part AI drafts now']
      ],
      door: 'What to do: you are in a YES seat if you shipped one AI feature and can grade its answers — the Full Report shows how an ordinary PM seat becomes this one.',
      short: 'AI feature PM is a good choice — the biggest seat, 17 of 42 postings. The version that never touches the model is the trap inside it.'
    };
    SEATS.entpm = {
      prof: 'aipm',
      label: 'Enterprise / agent deployment PM',
      head: 'ENTERPRISE / AGENT DEPLOYMENT PM — <span class="pink">YES</span>. DOMAIN IS THE MOAT.',
      facts: [
        ['The work', 'You take AI agents — software that does tasks on its own — into real companies: law firms, hospitals, insurers'],
        ['Posted pay', 'Harvey staff agent PM <span class="pink">$213.6K–$300K</span> · Harvey plain PM <span class="pink">$149.5K–$202.5K</span>, open to product <span class="pink">or engineering</span> pasts at 2–4+ years'],
        ['The screen', 'Knowing the customer’s real work: one employer screens on <span class="pink">first-hand investment-research experience</span> instead of a years number']
      ],
      door: 'What to do: you are in a YES seat if you know one industry’s real work and can ship into it — the Full Report sequences the domain proof.',
      short: 'Enterprise agent PM is a good choice. Agents are going into law, health and finance, and the seat pays for domain knowledge, $149K–$300K.'
    };
    SEATS.growpm = {
      prof: 'aipm',
      label: 'Growth AI PM',
      head: 'GROWTH AI PM — <span class="pink">YES</span>. SMALL SEAT, SENIOR PRICE.',
      facts: [
        ['The size', '<span class="pink">3 of 42</span> postings — small, and honest about it'],
        ['Posted pay', 'Anthropic B2B Growth <span class="pink">$275K–$305K</span> at <span class="pink">6–10 years</span> · API Growth asks <span class="pink">6+ years</span>, most of them in growth'],
        ['The screen', 'Experiments — trying version A against version B — are named in only <span class="pink">3 of 42</span> postings in the whole scan; <span class="pink">2 of the 3</span> are growth seats']
      ],
      door: 'What to do: you are in a YES seat if you already run growth on a real product and can read a funnel in numbers — the Full Report sequences it.',
      short: 'Growth AI PM is a good choice for people who already do growth. It is 3 of 42 postings, posts $275K–$305K, and screens at 6–10 years.'
    };
    SEATS.apmpm = {
      prof: 'aipm',
      label: 'APM / entry AI PM',
      head: 'APM / ENTRY AI PM — <span class="pink">NO</span> AS A PLAN. THE DOOR IS THREE PROGRAMS.',
      facts: [
        ['The three doors', 'Addepar Early Career, <span class="pink">0–2 years</span> of any work, <span class="pink">$83K–$130K</span> · Databricks new-grad APM, a <span class="pink">CS degree</span> required, <span class="pink">$133K–$150K</span> · Square’s 12-month APM rotation'],
        ['The wall', '<span class="pink">20 of 26</span> postings that state a number ask <span class="pink">5+ years</span> · no posting hires a zero-experience, non-CS candidate outside a named program'],
        ['The price', 'Aiming at the title from zero costs <span class="pink">≈$100K and 1–2 years</span> — the adjacent job pays while it builds the years this scan screens for']
      ],
      door: 'What to do instead: apply to a program if you fit its screen — or take an adjacent seat (analyst, data, support, engineering) whose years convert, and enter from year two.',
      short: 'Entry AI PM is a bad plan as an open-market search: 3 beginner postings of 42, all programs. The programs themselves are real doors, $83K–$150K.'
    };
    GRIDS.aipm = {
      head: 'AI PRODUCT MANAGER IS A YES. THE TITLE IS NOT THE JOB.',
      sub: 'The words “AI product manager” cover six different jobs. They do not share a verdict:',
      corner: 'OpenAI posts $347,000–$490,000 for a plain-titled PM. The trap is at the other end: of 42 real postings we opened, 3 take beginners — and all 3 are named programs.',
      short: '“AI product manager” is six different jobs. Platform, evals, feature, enterprise and growth seats are good choices, posting $117K–$490,000. The beginner version barely exists: 3 of 42 postings, all programs. Product manager without the AI is a different profession — it has no check yet.',
      rows: [
        ['Platform / model PM', 'YES', 'deepest pay in the scan · OpenAI posts $347K–$490K', 'platpm'],
        ['Evals / AI quality PM', 'YES', 'evals are the whole job in 10 of 42 postings', 'evalpm'],
        ['AI feature PM', 'YES', 'the biggest seat · 17 of 42 postings', 'featpm'],
        ['Enterprise / agent deployment PM', 'YES', 'agents into law, health, finance · $149K–$300K', 'entpm'],
        ['Growth AI PM', 'YES', 'experiments are the screen · posts $275K–$305K', 'growpm'],
        ['APM / entry AI PM', 'NO · AS A PLAN', '3 beginner postings of 42 · all three are programs', 'apmpm'],
        ['OTHER MAP', 'Data Scientist — a different profession', 'models & degrees · its own check (VECTOR) · the bridge here is evals + one shipped AI feature', 'datascientist']
      ]
    };
    QUOTES.aipm = {
      q: 'Evals are how we measure how good or bad that middle box – the product – is performing.',
      by: 'Aman Khan, Director of Product at Arize AI (Behind the Craft interview, Jan 2025 — the work claim only; every market fact on this card is from the 2026 scan)',
      url: 'https://creatoreconomy.so/p/ai-skill-that-will-define-your-pm-career-aman-khan'
    };
    GV11.aipm = {hook: 'AI PM posts $490K. Entry is three programs.', conf: 'Medium', next: NEXT_AIPM};
    V11.platpm = {
      hook: 'The top pay has no “senior” in its title.',
      conf: 'Medium',
      step: {
        student: 'First step, as a student: learn how models are served and priced — platform seats screen on technical depth, not on certificates.',
        early: 'First step, early in: own one model-facing surface where you are — an API, an internal tool — and write down its cost and its failure kinds.',
        mid: 'First step, at 3–5 years: own an evaluation framework for one model surface. That is the platform seat’s senior proof.',
        senior: 'First step, at 5+ years: price the platforms you owned — OpenAI posts $347K–$490K for this seat’s judgment.'
      },
      next: NEXT_AIPM
    };
    V11.evalpm = {
      hook: 'Evals are the job in 10 of 42.',
      conf: 'Medium',
      step: {
        student: 'First step, as a student: build a tiny test set for a chatbot you use — 20 questions, right answers written down. That file is this seat in miniature.',
        early: 'First step, early in: grade 50 real answers from your product’s AI feature by hand and write the failure kinds. Hand grades come before automated ones.',
        mid: 'First step, at 3–5 years: own quality end to end on one feature — eval set, rubric, and the ship decision. That sentence is a real posting’s first line.',
        senior: 'First step, at 5+ years: price the quality systems you built — this seat posts $151K–$253K for defended grades.'
      },
      next: NEXT_AIPM
    };
    V11.featpm = {
      hook: 'The biggest seat. The title alone is a no.',
      conf: 'Medium',
      step: {
        student: 'First step, as a student: take one app you use daily and write which of its features an AI could do — and how you would know it did it well.',
        early: 'First step, early in: ship one AI feature, however small, in your current product — and grade its answers yourself.',
        mid: 'First step, at 3–5 years: put an eval set on your main AI feature. That is the line between this seat’s YES version and its trap.',
        senior: 'First step, at 5+ years: price the shipped features and their quality numbers — feature seats post to $274,800 for exactly that.'
      },
      next: NEXT_AIPM
    };
    V11.entpm = {
      hook: 'Agents into real companies. Domain is the moat.',
      conf: 'Medium',
      step: {
        student: 'First step, as a student: learn one industry’s real paperwork — legal, health or finance. This seat screens on the domain before the model.',
        early: 'First step, early in: sit with real users of one workflow and write where an agent would break it. Deployment truth beats demos.',
        mid: 'First step, at 3–5 years: run one deployment end to end — pilot, failure list, fix. Regulated customers grade their agents; be the one holding the grades.',
        senior: 'First step, at 5+ years: price the deployments you shipped — Harvey posts $213.6K–$300K for this seat’s record.'
      },
      next: NEXT_AIPM
    };
    V11.growpm = {
      hook: 'Experiments are the screen. The seat is senior.',
      conf: 'Medium',
      step: {
        student: 'First step, as a student: learn funnels before models — this seat reads sign-ups and conversion, not model papers.',
        early: 'First step, early in: run one honest A/B test on anything real and write the call you made from it.',
        mid: 'First step, at 3–5 years: own a growth number on an AI product — activation or conversion — and be able to show the experiments behind it.',
        senior: 'First step, at 5+ years: price the growth record — Anthropic posts $275K–$305K at 6–10 years for it.'
      },
      next: NEXT_AIPM
    };
    V11.apmpm = {
      hook: 'Three programs hire beginners. Nobody else does.',
      conf: 'Medium',
      step: {
        student: 'First step, as a student: pick which program screen you can pass — a CS degree (Databricks), new-grad timing (Square), or 0–2 years of any work (Addepar) — and aim at that screen.',
        early: 'First step, early in: if a program is not open to you, take the adjacent seat whose years convert — analyst, data, support, engineering — and ship one AI feature inside it.',
        mid: 'First step, at 3–5 years: you are past this door — aim at the evals or feature seat; your years are the screen they actually read.',
        senior: 'First step, at 5+ years: this seat is behind you. Price the seat above it — the median band midpoint in our scan is $204,500.'
      },
      next: NEXT_AIPM
    };
    PROF_STEPS.aipm = {
      student: 'First step, as a student: aim at a program’s screen, not at the title — the three beginner doors ask for a CS degree, new-grad timing, or 0–2 years of any work.',
      early: 'First step, early in: ship one AI feature where you are and grade its answers — that proof is what the 1–3-year doors read.',
      mid: 'First step, at 3–5 years: own quality on one AI feature — build its eval set. Evals are the core job in 10 of 42 postings.',
      senior: 'First step, at 5+ years: price the seat, not the title — platform posts to $490,000 and the median band midpoint is $204,500.'
    };
    SEAT_RULES.unshift(
      [['ai quality', 'evals product manager', 'evaluation product manager', 'ai evals', 'ai evaluation pm'], 'evalpm'],
      [['ai platform product manager', 'platform ai pm', 'model product manager', 'ai infrastructure product manager', 'ml platform product manager', 'core models product manager'], 'platpm'],
      [['ai growth product manager', 'growth ai pm', 'ai growth pm'], 'growpm'],
      [['agent product manager', 'ai agent product manager', 'agentic product manager', 'enterprise ai product manager', 'ai deployment product manager'], 'entpm'],
      [['associate ai product manager', 'ai apm', 'associate product manager ai', 'junior ai product manager', 'entry level ai product manager', 'ai product manager intern', 'ai pm intern'], 'apmpm']
    );
    /* No default seat rule: generic AI-PM titles land on the GRID
       (the cluster rule below), where the six seats are picked —
       the same behaviour as every other profession. Seat rules
       above fire only for seat-named strings. */
    var finIdx = -1;
    for (var i = 0; i < CLUSTER_RULES.length; i++) if (CLUSTER_RULES[i][1] === 'fin') { finIdx = i; break; }
    var rule = [['ai product manager', 'ai pm', 'product manager ai', 'ml product manager', 'genai pm', 'gen ai product manager', 'generative ai product manager', 'llm product manager', 'ai product management', 'product manager, ai', 'artificial intelligence product manager', 'ai product'], 'aipm'];
    if (finIdx >= 0) CLUSTER_RULES.splice(finIdx, 0, rule); else CLUSTER_RULES.push(rule);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();

/* stateFact extension (EN) — wraps the stateFact declared in v11.js
   so v11.js itself stays untouched. Lookup happens at call time in
   both the gate and the app, so this wrap covers both. */
(function () {
  var _sfAipm = stateFact;
  stateFact = function (prof, code, name) {
    if (!name) return '';
    if (prof === 'aipm') {
      return 'Your state: no license decides what an AI product manager earns in ' + name + ' — there is no license for this work, and the official statistics do not even count this job. What moves the pay is the seat and the city: the same profession posts $83,000 at an entry program and $347,000–$490,000 at a frontier lab, and several big-tech bands print a higher range for the San Francisco Bay Area and New York metro.';
    }
    return _sfAipm(prof, code, name);
  };
})();

/* AI PM grid confidence: cluster is Medium (pilot verdict card).
   showGrid hard-codes High; same wrapper pattern as cyber/truck. */
(function(){
  function wrap(){
    if (typeof window.showGrid !== 'function' || window.__aipmGridConfWrap) return;
    window.__aipmGridConfWrap = true;
    var orig = window.showGrid;
    window.showGrid = function(prof){
      var r = orig.apply(null, arguments);
      try {
        if (prof === 'aipm'){
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
