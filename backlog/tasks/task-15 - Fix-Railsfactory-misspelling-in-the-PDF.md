---
id: TASK-15
title: Decide whether to patch the legacy PDF before the new one ships
status: To Do
assignee: []
created_date: '2026-09-22 17:46'
updated_date: '2026-09-22 17:50'
labels:
  - resume
  - typo
dependencies: []
priority: low
ordinal: 15000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Originally raised to fix 'Sedin Technologies - Railfactory' in the PDF, which is missing the s in Railsfactory.

Now that the PDF is legacy and will be regenerated from the website, patching it may not be worth the effort. It depends on timing.

The legacy file is still the live download behind the resume button on vishnuroshan.in. Until the replacement ships, every recruiter who downloads it sees a misspelled current employer, plus IQVIA named as the direct employer for 2018-2019.

Two options:
1. Patch the Zety file once for Railsfactory and the IQVIA wording, accepting that it is throwaway work.
2. Ship the replacement quickly enough that patching is pointless, and pull or leave the current download in the meantime.

Decide based on how soon TASK-17 lands.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 PDF reads Railsfactory
- [ ] #2 Division naming matches index.html exactly
- [ ] #3 Decision recorded
- [ ] #4 If patching: Railsfactory spelling and employer wording both corrected in the live PDF
- [ ] #5 If not patching: a target date for the replacement is set
<!-- AC:END -->
