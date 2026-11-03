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
  var NEXT_AIPM = 'THE FULL REPORT — $5, OR FREE WHEN YOU SHARE: your shortest path through all six jobs, step by step. What proof the AI-checking job wants. What the three beginner programs cost. And the fastest way in from data scientist or business analyst. We re-check this by June 2027. Sooner if AI-checking jobs slow down or more beginner jobs open. Next check: product manager — the big plain title this check does not cover.';
  function inject(){
    if (typeof PROFS === 'undefined' || PROFS.aipm) return;
    PROFS.aipm = {
      title: 'AI Product Manager',
      kick: 'The top pay in tech. Here\'s your shortcut in.',
      count: '42',
      srcWhat: 'real job posts (the government doesn\'t count product managers)',
      srcLine: 'Job posts opened 1 Nov 2026 · BLS Employment Projections 2025–35 (government job numbers) — only the closest jobs, marked as stand-ins',
      code: 'SHIP',
      tail: 'Three programs hire beginners. Other job posts want years.',
      next: NEXT_AIPM
    };
    COFACTS.aipm = ['<b>20 of 26</b> job posts that name a number ask for <span class="pink">5+ years</span> of product work. They check what you did, not a diploma. So skip extra school.', 'AI changed what employers ask for. In <span class="pink">10 of 42</span> job posts, the main job is <span class="pink">checking AI</span>: you build tests that grade its answers.', 'The <span class="pink">middle pay</span> in job posts that show pay is <span class="pink">$204,500</span>. The government doesn\'t even count this new job yet.'];
    SEATS.platpm = {
      prof: 'aipm',
      label: 'PM for the AI itself',
      head: 'PM FOR THE AI ITSELF — <span class="pink">YES</span>. THE HIGHEST PAY WE FOUND.',
      facts: [
        ['The pay', 'OpenAI <span class="pink">$347K–$490K</span> · Google Group PM <span class="pink">$214K–$320K</span> · Voyager <span class="pink">$225K–$275K</span>'],
        ['What they check', 'Voyager asks <span class="pink">10+ years</span> of product work, 5+ running platforms · Google asks <span class="pink">10 years</span> and five shipped products'],
        ['The work', 'You decide what the AI can do inside a big company. Its skills, its cost, and every team that builds on it']
      ],
      door: 'What to do: this is a YES job for you if you ran big tech systems or shipped work with AI inside. This is the top pay job. The Full Report shows the steps to prove it.',
      short: 'PM for the AI itself is the money job. OpenAI pays $347K–$490K. You decide what the AI can do. They want about ten years of tech product work.'
    };
    SEATS.evalpm = {
      prof: 'aipm',
      label: 'AI checking PM',
      head: 'AI CHECKING PM — <span class="pink">YES</span>. THIS JOB IS GROWING FAST.',
      facts: [
        ['The work', 'You build tests that grade the AI’s answers (people call them "evals"). Then you decide if it\'s good enough to launch'],
        ['The job, in their own words', 'LinkedIn: “own quality end to end” · Humana: sets of right answers, live checks, the <span class="pink">hallucination rate</span> (how often the AI says false things like they\'re true)'],
        ['The pay', 'LinkedIn <span class="pink">$155K–$253K</span> · Glean AI Quality <span class="pink">$160K–$240K</span> · Humana <span class="pink">$151.6K–$208.4K</span>']
      ],
      door: 'What to do: this is a YES job for you if you can build a set of test questions and explain your grades. You can start this week, for free. The Full Report shows the steps: one test set → grade answers by hand → build your own auto-grader.',
      short: 'AI checking PM is a good choice. In 10 of 42 job posts, grading AI answers is the whole job. It pays $151K–$253K.'
    };
    SEATS.featpm = {
      prof: 'aipm',
      label: 'PM for an AI part of an app',
      head: 'PM FOR AN AI PART OF AN APP — <span class="pink">YES</span>. BUT JUST HAVING “AI” IN THE TITLE IS A NO.',
      facts: [
        ['How many jobs', '<span class="pink">17 of 42</span> job posts — the most common job we found'],
        ['The pay', 'Adobe <span class="pink">$125.8K–$239.7K</span> · Microsoft Copilot <span class="pink">$119.8K–$274.8K</span> · lowest senior pay <span class="pink">$117,000</span>'],
        ['The trap', 'Two job posts have AI in the title but <span class="pink">no AI work</span> in the text. Plain organizing work is what AI can do itself now']
      ],
      door: 'What to do: this is a YES job for you if you shipped one AI part of an app and can grade its answers. The Full Report shows how a normal PM job turns into this one.',
      short: 'PM for an AI part of an app is a good choice. It\'s the most common job: 17 of 42 job posts. The trap: a version that never touches the AI.'
    };
    SEATS.entpm = {
      prof: 'aipm',
      label: 'PM for AI helpers in big companies',
      head: 'PM FOR AI HELPERS IN BIG COMPANIES — <span class="pink">YES</span>. KNOWING THE INDUSTRY PROTECTS YOU.',
      facts: [
        ['The work', 'You bring AI helpers (software that does tasks by itself) into real companies: law firms, hospitals, insurers'],
        ['The pay', 'Harvey senior AI-helper PM <span class="pink">$213.6K–$300K</span> · Harvey plain PM <span class="pink">$149.5K–$202.5K</span>, open to people from product <span class="pink">or engineering</span> with 2–4+ years'],
        ['What they check', 'Knowing the customer’s real work. One company asks for <span class="pink">hands-on investment-research experience</span> instead of years. That\'s a shortcut']
      ],
      door: 'What to do: this is a YES job for you if you know one industry’s real work and can build for it. Your past job counts here. The Full Report shows how to prove it.',
      short: 'PM for AI helpers is a good choice. AI helpers are going into law, health and finance. This job pays for knowing the industry: $149K–$300K.'
    };
    SEATS.growpm = {
      prof: 'aipm',
      label: 'Growth PM for AI products',
      head: 'AI PRODUCT GROWTH PM — <span class="pink">YES</span>. FEW JOBS, HIGH PAY.',
      facts: [
        ['How many jobs', '<span class="pink">3 of 42</span> job posts. Small, and that\'s OK'],
        ['The pay', 'Anthropic B2B Growth (growth for business clients) <span class="pink">$275K–$305K</span> for <span class="pink">6–10 years</span> · its developer tools growth job asks <span class="pink">6+ years</span>, mostly in growth'],
        ['What they check', 'Experiments (testing version A against version B) show up in only <span class="pink">3 of 42</span> job posts. <span class="pink">2 of the 3</span> are growth jobs']
      ],
      door: 'What to do: this is a YES job for you if you already help a real product get more users and can read the numbers. The Full Report shows the steps.',
      short: 'Growth PM for AI products is a good choice if you already grow products. It\'s 3 of 42 job posts. It pays $275K–$305K and wants 6–10 years.'
    };
    SEATS.apmpm = {
      prof: 'aipm',
      label: 'Beginner AI PM',
      head: 'BEGINNER AI PM — <span class="pink">NO</span> AS A PLAN. THE WAY IN IS THREE PROGRAMS.',
      facts: [
        ['The three ways in', 'Addepar Early Career, <span class="pink">0–2 years</span> of any work, <span class="pink">$83K–$130K</span> · Databricks new-grad program, needs a <span class="pink">CS degree</span>, <span class="pink">$133K–$150K</span> · Square’s 12-month beginner program'],
        ['The wall', '<span class="pink">20 of 26</span> job posts that name a number ask <span class="pink">5+ years</span> · outside these programs, nobody hires with zero experience and no CS degree'],
        ['The price', 'Going for the title from zero costs <span class="pink">≈$100K and 1–2 years</span>. A nearby job pays you while you build those years. That\'s the faster road']
      ],
      door: 'What to do instead: apply to a program if you fit what it asks. Or take a nearby job (analyst, data, support, engineering). Those years count. Then move over in year two. You\'ve got this.',
      short: 'Beginner AI PM is a bad plan if you just search job sites. Only 3 of 42 job posts take beginners, and all are programs. The programs are real ways in: $83K–$150K.'
    };
    GRIDS.aipm = {
      head: 'AI PRODUCT MANAGER IS A YES. THE TITLE IS NOT THE JOB.',
      sub: 'AI already does part of a product manager\'s work: notes, plans, simple organizing. Worried your experience won\'t count? “AI product manager” means six jobs. Here\'s what stays with people and pays well:',
      corner: 'OpenAI pays $347,000–$490,000 for a plain PM title. That\'s the very top. The catch: of 42 real job posts we opened, only 3 take beginners. All 3 are special programs.',
      short: '“AI product manager” is six different jobs. Five are good choices: the AI itself, AI checking, AI parts of apps, AI helpers for big companies, and growth. They pay $117K–$490,000. The beginner version barely exists: 3 of 42 job posts, all programs. Product manager without AI is a different job. We haven\'t checked it yet.',
      rows: [
        ['PM for the AI itself', 'YES', 'highest pay we found · OpenAI pays $347K–$490K', 'platpm'],
        ['AI checking PM', 'YES', 'checking AI answers is the whole job in 10 of 42 job posts', 'evalpm'],
        ['PM for an AI part of an app', 'YES', 'the most common job · 17 of 42 job posts', 'featpm'],
        ['PM for AI helpers in big companies', 'YES', 'AI helpers for law, health, finance · $149K–$300K', 'entpm'],
        ['Growth PM for AI products', 'YES', 'reading user numbers matters most · pays $275K–$305K', 'growpm'],
        ['Beginner AI PM', 'NO · AS A PLAN', '3 beginner job posts of 42 · all three are programs', 'apmpm'],
        ['OTHER MAP', 'Data Scientist — a different profession', 'models & degrees · its own check (VECTOR) · the way over: AI checks + one AI part you shipped', 'datascientist']
      ]
    };
    QUOTES.aipm = {
      q: 'Evals are how we measure how good or bad that middle box – the product – is performing.',
      by: 'Aman Khan, Director of Product at Arize AI (Behind the Craft interview, Jan 2025 — about the work only; all job market facts here are from the 2026 check)',
      url: 'https://creatoreconomy.so/p/ai-skill-that-will-define-your-pm-career-aman-khan'
    };
    GV11.aipm = {hook: 'AI PM pays $490K. Here\'s your shortest way in.', conf: 'Medium', next: NEXT_AIPM};
    V11.platpm = {
      hook: 'The top pay doesn\'t even say “senior” in the title.',
      conf: 'Medium',
      step: {
        student: 'First step, as a student: learn how AI models run and what they cost. Ask Claude or ChatGPT to explain it simply. These jobs check how deep your tech skills go, not certificates.',
        early: 'First step, early in: own one part of your work that uses AI, like a developer connection or an internal tool. Write down what it costs and how it breaks.',
        mid: 'First step, at 3–5 years: own the testing for one AI part. That\'s the senior proof for this job.',
        senior: 'First step, at 5+ years: put a price on the AI systems you ran. OpenAI pays $347K–$490K for this kind of judgment.'
      },
      next: NEXT_AIPM
    };
    V11.evalpm = {
      hook: 'Checking AI is the whole job in 10 of 42.',
      conf: 'Medium',
      step: {
        student: 'First step, as a student: build a tiny test for a chatbot you use. 20 questions, with the right answers written down. That file is this job in mini size.',
        early: 'First step, early in: grade 50 real answers from your product’s AI by hand. Write down how it fails. Hand grading comes before auto-grading.',
        mid: 'First step, at 3–5 years: own quality for one AI part, start to finish. Test set, grading rules, and the launch decision. That\'s the first line of a real job post.',
        senior: 'First step, at 5+ years: put a price on the quality systems you built. This job pays $151K–$253K for grades you can explain.'
      },
      next: NEXT_AIPM
    };
    V11.featpm = {
      hook: 'The most common job. “AI” in the title alone is a no.',
      conf: 'Medium',
      step: {
        student: 'First step, as a student: pick one app you use daily. Write which parts an AI could do. And how you\'d know it did them well. With ChatGPT next to you, that\'s one evening.',
        early: 'First step, early in: ship one AI part in your current product, even a small one. Grade its answers yourself.',
        mid: 'First step, at 3–5 years: add a set of test questions to your main AI part. That\'s what separates the YES version of this job from the trap.',
        senior: 'First step, at 5+ years: put a price on what you shipped and its quality numbers. These jobs pay up to $274,800 for exactly that.'
      },
      next: NEXT_AIPM
    };
    V11.entpm = {
      hook: 'AI helpers for real companies. Knowing the industry protects you.',
      conf: 'Medium',
      step: {
        student: 'First step, as a student: learn one industry’s real paperwork: legal, health or finance. This job checks that before AI skills.',
        early: 'First step, early in: sit with real users of one task. Write where an AI helper would break it. Real use beats a demo.',
        mid: 'First step, at 3–5 years: run one launch start to finish: test, list what broke, fix it. Strict industries grade their AI helpers. Be the one with the grades.',
        senior: 'First step, at 5+ years: put a price on the launches you shipped. Harvey pays $213.6K–$300K for this kind of record.'
      },
      next: NEXT_AIPM
    };
    V11.growpm = {
      hook: 'Reading user numbers matters most. This is a senior job.',
      conf: 'Medium',
      step: {
        student: 'First step, as a student: learn user numbers before AI. How many people sign up, and how many then pay. This job reads that, not AI papers.',
        early: 'First step, early in: run one honest test of version A against version B on something real. Write down what you decided from it.',
        mid: 'First step, at 3–5 years: own one growth number on an AI product, like sign-ups that stick or sales. Be ready to show the tests behind it.',
        senior: 'First step, at 5+ years: put a price on your growth record. Anthropic pays $275K–$305K for 6–10 years of it.'
      },
      next: NEXT_AIPM
    };
    V11.apmpm = {
      hook: 'Three programs hire beginners. Nobody else does.',
      conf: 'Medium',
      step: {
        student: 'First step, as a student: pick the program you can get into: a CS degree (Databricks), fresh graduate (Square), or 0–2 years of any work (Addepar). Aim at that one.',
        early: 'First step, early in: if no program fits you, take a nearby job whose years count: analyst, data, support, engineering. Ship one AI feature there.',
        mid: 'First step, at 3–5 years: you\'re past the beginner stage. Aim at the AI checking or AI app-part job. Your years are what they look at.',
        senior: 'First step, at 5+ years: you\'re past this job. Aim at the one above it. The middle pay in our check is $204,500.'
      },
      next: NEXT_AIPM
    };
    PROF_STEPS.aipm = {
      student: 'First step, as a student: aim at what a program asks for, not the title. The three beginner ways in want a CS degree, fresh graduate, or 0–2 years of any work.',
      early: 'First step, early in: ship one AI part where you work and grade its answers. Jobs asking 1–3 years look for that proof.',
      mid: 'First step, at 3–5 years: own quality on one AI part. Build its test set. Checking AI is the main job in 10 of 42 job posts.',
      senior: 'First step, at 5+ years: price the job, not the title. PM for the AI itself pays up to $490,000. The middle pay is $204,500.'
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
      return 'Your state: no license decides AI product manager pay in ' + name + '. There\'s no license for this work. The government doesn\'t even count this job. Pay depends on the job type and the city. The same job pays $83,000 in a beginner program and $347,000–$490,000 at a top AI lab. Some big tech companies pay more in the San Francisco Bay Area and New York.';
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
