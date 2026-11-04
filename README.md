# Career Glitch

**Career Glitch gives every worker an AI-Proof Score — and an agent that raises it.**

It is career insurance for the AI era. You check your profession. An agent watches it for you. And juniors get back the first step of the career ladder — the one AI took away.

## What you can do today

**1. Check a profession — PathCheck.** Free.
You get a hard yes or no: will this profession survive AI? The answer is built from real labor data — government job statistics (BLS) and live job posts. If the answer is yes, you also get a path to the top 1% in that niche.
→ https://careerglitch.com/gate

**2. Get a Watchdog.** A personal agent that watches your profession every week.
It gives you an AI-Proof Score from 0 to 100. When real news lands — a new AI tool, layoffs, a new rule — your Score moves, and the agent hands you one clear next task.
→ https://careerglitch.com/watchdog

**3. Practice in the Lab.** The first rung of the ladder, for juniors.
A simulator of the real job: clients and managers played by live AI, real tasks, your work checked line by line. When you finish, you get a graduate record that any employer can open and check. The first Lab is open now — for Bookkeeper.
→ https://careerglitch.com/lab/bookkeeper

## How it works

1. Pick your profession.
2. Get your card and your AI-Proof Score.
3. The agent keeps watch every week — and in the Lab, you practice the skills your Score says you need.

## Built with

Meta Muse Spark is the brain of the product: it builds the profession profiles, personalizes your card, and plays the clients and managers in the Lab, including checking your work. Muse Image draws the share cards. The site itself is plain HTML with small serverless functions on Vercel. User data lives in Supabase.

**Demo video:** https://x.com/careerglitch/status/2118027524470882331

Submitted to the Meta Global AI Developer Hackathon (Startup track).

## What is next

- More Lab professions (Bookkeeper is the pilot).
- Payments fully wired: card payments already work; automatic trial handling (Stripe webhook) is next.
- Card emails switched on: the emails are written and queued; they start sending once the sending domain is verified.

## Notes for maintainers

- Deploy is simple: push to `main`, Vercel ships it. This repo is the only source of truth for the site.
- The Watchdog weekly cycle is a script: it reads fresh, source-checked news for each profession, moves Scores, and creates the weekly tasks.
