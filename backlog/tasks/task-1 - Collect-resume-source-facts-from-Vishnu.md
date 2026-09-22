---
id: TASK-1
title: Collect resume source facts from Vishnu
status: In Progress
assignee: []
created_date: '2026-09-21 06:26'
updated_date: '2026-09-22 18:09'
labels:
  - resume
  - content
  - blocker
dependencies: []
priority: high
ordinal: 1000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Everything that requires real data is blocked on facts only Vishnu has. Gather them once, in one place, so the rewrite tasks can proceed without fabricating achievements.

Needed:
- Actual job title at each of the four companies, plus promotion dates and prior titles at Sedin Technologies.
- Team size led or worked within, per role.
- Largest traffic, data volume, or user count handled, per role.
- One migration, rewrite, or architecture decision owned per role, and what measurably improved.
- Any before/after number available: build time, p95 latency, error rate, deploy frequency, infrastructure cost.
- Confirmation of which technologies were genuinely used: AWS, GCP, Azure, Cloudflare, Docker, Kubernetes, Redis, GraphQL, Ruby on Rails, Jest, Vitest, Cypress, Playwright, Git workflows, CI platforms.
- Desired positioning: pure backend, full-stack, or explicit design-engineer hybrid.
- Whether the June 2020 to October 2020 employment gap should be absorbed by rounding dates to years, or left visible.

Record answers in backlog/docs so later tasks can cite them.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 All four job titles captured, including Sedin promotion history
- [ ] #2 At least two quantified outcomes captured per role, or an explicit note that none exist
- [ ] #3 Technology confirmation list answered yes/no for every item
- [ ] #4 Positioning decision recorded
- [ ] #5 Employment gap handling decision recorded
- [ ] #6 Answers written to a document under backlog/docs
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
TECHNOLOGY CONFIRMATION RECEIVED. Full detail in the TASK-6 notes.

Yes: Cloudflare, AWS, Docker, Redis, GraphQL, Python, Jest, Vitest, Playwright, Jenkins, Claude Code, LiteLLM, Celery, RabbitMQ, PostgreSQL.
No, by omission: GCP, Azure, Kubernetes, Ruby on Rails, Go, Cypress.
CI platform: Jenkins.
AI tools: Claude Code and LiteLLM.

STILL OPEN, and these are now the only things blocking TASK-3 and TASK-4:
- Sedin team size, and whether direct reports or tech lead without reports
- One architecture decision owned, with a before and after
- Any measured number at all
- Exact promotion month at Sedin
- Healthcare specialist versus domain-neutral positioning
<!-- SECTION:NOTES:END -->
