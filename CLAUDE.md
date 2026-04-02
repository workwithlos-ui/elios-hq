# CLAUDE.md — ORBIT (Elios HQ)
# Drop this in the root of workwithlos-ui/elios-hq

## What this is
ORBIT is the 33V portfolio operating system for multi-entity operators.
Tracks all companies, priorities, revenue, bugs. The 33V holding company command center.
Live: elios-hq.vercel.app | Target: orbit.33v.ai

## Stack
Next.js 14 App Router · TypeScript · Claude API · Vercel

## Env var
ANTHROPIC_API_KEY

## What's live (most complete of all 6 products)
- Priority queue: 10 items ranked by revenue impact with time estimates
- Project status cards: LIVE|BUILDING|NEEDS WORK|DOWN with color coding
- Bug tracker: critical issues with severity and blocking status
- Revenue tracker: MRR display, $10K target, nearest revenue unlocks
- Sidebar nav: Dashboard, Projects, Tasks, Docs, Revenue, Timeline, Settings

## Portfolio companies tracked
FORGE (Content Factory) · Acquisition OS · FundingHub · Vault Ventures CRM ·
Vault Ventures Investor · Boardroom Brain · TradesBot · Elios HQ · CMO OS

## Build queue (in order)
1. Stripe: GET /api/integrations/stripe → pull real MRR (replaces $0 manual entry)
2. GitHub: GET /api/integrations/github → open issues + PR status per repo
3. Vercel: GET /api/integrations/vercel → deployment status + error rates
4. AI triage: POST /api/ai/triage → Claude surfaces 3 daily high-leverage actions
5. Team assignment: tasks assignable to Los, Jax, others
6. Weekly digest: Monday Claude summary → email via Resend + Slack DM
7. Investor view: /investor/[token] → read-only dashboard
8. Auth (Clerk) + Stripe billing

## NEVER break
- Priority queue rank ordering (revenue impact = sort key)
- Project status color system (green=LIVE, yellow=BUILDING, orange=NEEDS WORK, red=DOWN)
- Revenue tracker and MRR display
- The active deals/pipeline display

## Test after any change
elios-hq.vercel.app → Dashboard → priority queue visible → project status cards visible
Revenue tracker shows MRR and target
