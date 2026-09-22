---
id: TASK-1
title: Collect resume source facts from Vishnu
status: In Progress
assignee: []
created_date: '2026-09-21 06:26'
updated_date: '2026-09-22 19:25'
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
Confirmed: Vishnu worked on both Healthplug MD and PX, so the Bionworks bullet naming them as peers stands.

A Sedin healthcare engagement was identified. The client is a private company and Vishnu flagged it as non-public, so the name is deliberately not recorded here or anywhere in the repository, which is public. The product is compliance infrastructure used by healthcare organisations to manage clinical workforces.

The healthcare bullet was rewritten from 'built patient records and compliance features for clients handling protected health data' to name what the compliance work actually was. Vishnu then corrected the specifics: his work was compliance tracking, not the other areas the same product covers. The bullet reads 'built compliance tracking for a clinical workforce platform'.

Patient records management was then removed from the Sedin entry entirely. Vishnu confirmed it was not Sedin work. It belongs to Bionworks, where the Healthcommand bullet already covers it. The healthcare story now reads honestly across the two employers: records at Bionworks in 2018 to 2019, compliance at Sedin recently.

'Protected health data' was dropped. It fits patient records but overstates this work, which is workforce compliance rather than PHI.

'At scale' was also dropped. It came from the vendor's own marketing copy and carries no number, which is the same unfalsifiable-adjective problem this review has removed everywhere else.

An earlier draft named the specific clinician categories the platform covers. That was judged identifiable, since few companies work in that niche, and Vishnu chose the looser wording. The resume states the problem without pointing at the product category. No client-identifying term appears in any file in this repository.
<!-- SECTION:NOTES:END -->
