---
id: TASK-1
title: Collect resume source facts from Vishnu
status: Done
assignee: []
created_date: '2026-09-21 06:26'
updated_date: '2026-09-22 19:51'
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
Fact collection complete. Both residual questions answered.

The project previously labelled with an invented name is now 'Management consulting'. The client is a consultancy and Vishnu asked that the more specific industry term not be used, so the label and the corpus description were both generalised. The bullet describes the corpus as mixed prose and structured records, which preserves the technical justification for hybrid search without naming the industry. No client-identifying term appears anywhere in the repository; verified by grep.

Positioning: domain-neutral, confirmed by Vishnu. The summary lists four domains as evidence of breadth rather than claiming a specialty, and the work history now names seven. Healthcare remains available as a specialist framing later, spanning two employers and roughly seven years, but is not claimed.

Everything this task set out to collect is applied: titles and the January 2023 promotion, seven domains, team size, technology confirmation, the Zety origin of the legacy PDF, Sedstart ownership, Healthplug MD and PX, the healthcare engagement, the Teknuance products, the Lovedoku algorithm and the Steam Lib caching strategy.

Measured outcomes closed separately in TASK-3.
<!-- SECTION:NOTES:END -->
