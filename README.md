# Career Glitch

**Career Glitch gives every worker an AI-Proof Score — and an agent that raises it.**

It is career insurance for the AI era. One product, one door. You name your profession. An agent watches it for you. And juniors get back the first step of the career ladder — the one AI took away.

## One product, one door

You open careerglitch.com, name your profession, and get your AI-Proof Score card. That card is the entry to everything — it is not a separate product. The Score is a hard, honest number from 0 to 100. It is built from real labor data — government job statistics (BLS) and live job posts — and from how much of your daily work AI already does. From that one card, two features open up — one for each pain.
→ https://careerglitch.com

## Watchdog — for people who work in a profession

A personal agent that watches your profession every week. When real news lands — a new AI tool, layoffs, a new rule — your Score moves, and the agent hands you one clear next task. You adapt in time, instead of being surprised.
→ https://careerglitch.com/watchdog

## Lab — for juniors, and for learning new tools

The first rung of the ladder, as a simulator of the real job: clients and managers played by live AI, real tasks, your work checked line by line. When you finish, you get a graduate record that any employer can open and check. And when the radar catches a new tool in your profession, Lab gets a lesson and a practice scene for it — you learn the tool before it learns your job. The first Lab is open now — for Bookkeeper.
→ https://careerglitch.com/lab/bookkeeper

## How it works

1. Open careerglitch.com and name your profession.
2. Get your AI-Proof Score and your kit — the skills that protect you.
3. Watchdog keeps watch every week. Lab gives you practice.

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
