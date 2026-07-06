# Next Actions — TokyoWarashibe Challenge

## Immediate (today)
1. [ ] Verify cron job health — check `crontab -l` and last run logs
2. [ ] Review 3 pending content drafts (content-pipeline/pending/)
## Immediate (today)
1. [x] Verify cron job health and logs — DONE. Root cause: OpenRouter credit exhaustion
2. [x] Review 3 pending content drafts (Jun 26) — DONE. Still valid but stale; 6 new drafts generated
3. [x] Generate fresh X posts for Mon/Tue/Wed (JA+EN) — DONE. 6 drafts in content-pipeline/pending/
4. [x] Write gap-day journals (Jul 2–5) — DONE
5. [x] Prepare CocorixChange plan for Jul 14 — DONE. Saved to strategy/cocorixchange-2026-07-14.md
6. [x] Update GitHub Pages landing page — DONE. Day count added

## This week
7. [ ] Approve and publish X posts (Jul 6–8)
8. [ ] Approve CocorixChange attendance and travel (Jul 14)
9. [ ] Fix cron job provider / credit issue
10. [ ] Push committed changes to GitHub
11. [ ] Execute first trade at CocorixChange (Jul 14)

## Blockers
- **OpenRouter credit exhaustion** — all LLM-driven cron jobs paused. Need either: (a) add OpenRouter credits, or (b) switch cron jobs to opencode-go provider, or (c) convert jobs to no-agent scripts
- **Content approval bottleneck** — 9 drafts pending approval
- **Physical presence for trades** — Brian must attend CocorixChange

## Decisions needed
1. Add OpenRouter credits OR switch cron provider?
2. Approve publishing of pending X posts?
3. Approve CocorixChange travel on 2026-07-14?
4. Approve GitHub push of local commit?
