---
id: TASK-11
title: Refresh llms.txt and humans.txt
status: Done
assignee: []
created_date: '2026-09-21 06:28'
updated_date: '2026-09-22 18:33'
labels:
  - content
  - metadata
dependencies: []
priority: low
ordinal: 11000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Both files have drifted from the page.

llms.txt lists three projects while index.html shows five. Zero Hero and Arcade are missing. This file exists specifically for LLM consumption, so an agent screening the candidate receives an outdated picture.

humans.txt records 'Last update: 2026/07/14', roughly two months stale.

Once the summary and skills tasks land, llms.txt must also be re-synced to the new summary wording and the regrouped skills, otherwise the drift simply reopens.

Consider whether keeping these in sync manually is sustainable, or whether they should be generated from a single content source.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 llms.txt lists all five projects including Zero Hero and Arcade
- [ ] #2 llms.txt summary and skills match the rewritten index.html content
- [ ] #3 humans.txt last update date is current
- [ ] #4 A decision is recorded on whether to generate these files or maintain them by hand
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
llms.txt rewritten and humans.txt date updated to 2026/09/23.

llms.txt now carries the new summary, the grouped skills including pgvector, LiteLLM, Celery, RabbitMQ and React Native, and a new Experience section it never had. Experience matters here: this file exists for LLM consumption, and an agent screening Vishnu previously got skills and projects with no work history at all.

Projects section renamed to Playground to match the site, and the entries reduced to the four currently live. Arcade is deliberately excluded because the arcade work is stashed and the /arcade route does not resolve. It must be added back when TASK-18 restores that work.

The decision recorded in the acceptance criteria, on whether to generate these files or maintain them by hand, is still open. It is now more pressing: llms.txt duplicates the summary, the skills and the work history, all of which also live in index.html. That is three copies of the same content. TASK-16 makes index.html canonical, so llms.txt should be generated from it by the same pipeline as the PDF in TASK-17.
<!-- SECTION:NOTES:END -->
