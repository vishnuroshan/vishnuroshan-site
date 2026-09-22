---
id: TASK-1
title: Collect resume source facts from Vishnu
status: In Progress
assignee: []
created_date: '2026-09-21 06:26'
updated_date: '2026-09-22 19:18'
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
Healthplug MD and PX descriptors recovered from the web, since Vishnu did not remember them. Healthplug MD is a mobile-first EMR combining point-of-care records, multi-disciplinary task management and secure team messaging, integrating with existing EHR systems. Healthplug PX is the multilingual patient engagement app. Bionworks was founded in 2016 for secondary and tertiary care hospitals, and IQVIA acquired the product business in 2021, which confirms both the 'now part of IQVIA' wording and that Vishnu's 2018 to 2019 tenure predates the acquisition.

These descriptors are sourced from the web, not from Vishnu, and he has been asked to sanity-check them before interviewing on them.

One discrepancy noted and deliberately not acted on: sources describe Bionworks as Bangalore-based, while the resume says Chennai. Vishnu knows where he worked; the resume was left alone.

tuitactoe npm figures looked up: 969 downloads over the last 365 days, 7 versions, first published 2026-01-23. Recommended against putting the download count on the resume. Under a thousand invites a dismissive reaction rather than admiration, and 'npx tuitactoe' is more persuasive because a recruiter can run it in seconds.

STILL OPEN: measured outcomes, deferred by Vishnu; the real name for the project labelled 'Search and retrieval'; what AMS360 is; healthcare specialist versus domain-neutral positioning; Lovedoku's generation approach; Steam Lib's caching strategy.
<!-- SECTION:NOTES:END -->
