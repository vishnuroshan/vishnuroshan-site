---
id: TASK-6
title: Restructure the skills section and close keyword gaps
status: Done
assignee: []
created_date: '2026-09-21 06:28'
updated_date: '2026-09-22 18:09'
labels:
  - resume
  - content
  - ats
dependencies:
  - TASK-1
priority: medium
ordinal: 6000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
The skills panel is 26 undifferentiated badges with no grouping, no proficiency and no years. Humans cannot scan it for signal.

Focus dilution: four design entries, being UX Design, Interaction Design (IxD), Design systems and Figma, sit alongside Responsive design and Accessibility. For a Senior Software Engineer this halves engineering density. Either commit to a design-engineer hybrid position and state it in the summary, or demote design to a secondary group.

Missing keywords, each a likely false negative and each a red flag by absence at senior level:
- Cloud: no AWS, GCP, Azure or Cloudflare listed, yet this very repository runs Cloudflare Workers, Pages and Turnstile.
- Testing: none listed, yet this repository contains vitest.config.js and a test directory.
- Containers: no Docker, no Kubernetes.
- Version control: Git unlisted.
- Caching and queues: no Redis, despite Steam Lib claiming rigorous caching strategies.
- GraphQL, Agile or Scrum, Nginx and Linux all absent.
- Ruby on Rails absent, despite six years in a division named Railsfactory. If Rails was touched, that is a differentiating keyword currently being discarded.

'AI-assisted development' is vague. Name the tools or cut it.

Add nothing that cannot be defended in an interview. Use the technology confirmations from TASK-1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Skills are grouped into labelled categories
- [ ] #2 Every confirmed technology from TASK-1 is represented
- [ ] #3 Cloud and testing categories are populated or explicitly confirmed as not applicable
- [ ] #4 Design skills either demoted to a secondary group or matched by an explicit hybrid positioning in the summary
- [ ] #5 Vague entries such as AI-assisted development are made specific or removed
- [ ] #6 schema.org knowsAbout array updated to match
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Skills regrouped in index.html from a flat 26-badge list into eight labelled categories. Added .skill-group and .skill-group-title CSS using existing tokens. schema.org knowsAbout updated to match.

Confirmed by Vishnu as production use:
Cloudflare, AWS, Docker, Redis, GraphQL, Python, Jest, Vitest, Playwright, Jenkins, Claude Code, LiteLLM, Celery, RabbitMQ, PostgreSQL.

Confirmed absent by omission, and correctly NOT added: GCP, Azure, Kubernetes, Ruby on Rails, Go, Cypress.

Note on Rails: six years in a division named Railsfactory but no Rails. Vishnu works the JavaScript and Python side. The keyword opportunity flagged in the original review does not exist and was dropped.

THREE TECHNOLOGIES SURFACED THAT WERE NEVER ASKED ABOUT, all previously absent from both the site and the legacy PDF:
- LiteLLM. An LLM gateway. Its presence means Vishnu has built LLM-backed product features, not merely used AI tooling.
- Celery and RabbitMQ. With Python and Redis already present, this is a real distributed async backend stack.

IMPORTANT DISTINCTION now reflected in the grouping: the old single badge 'AI-assisted development' conflated two different things.
- Claude Code is AI-assisted development, meaning how Vishnu writes code.
- LiteLLM is LLM application engineering, meaning what Vishnu builds.
The second is far more valuable on a resume. Both now sit under an AI Engineering group so the distinction is visible.

Final groups: Languages, Frontend, Backend and Data, Cloud and Delivery, Testing, AI Engineering, Architecture and Practice, Design.

Design was demoted to last per the full-stack positioning decision.

LAYOUT RISK, not yet verified: eight labelled groups make the skills panel substantially taller than 26 inline badges. The panel sits in a fixed-height grid area with overflow-y auto, so more content is now below the fold. This increases the importance of TASK-9. Vishnu verifies in browser.
<!-- SECTION:NOTES:END -->
