---
id: TASK-15
title: Decide whether to patch the legacy PDF before the new one ships
status: Done
assignee: []
created_date: '2026-09-22 17:46'
updated_date: '2026-09-22 19:11'
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

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Moot. The replacement shipped, so patching the Zety file was never needed. The generated PDF spells Railsfactory correctly and uses the Bionworks wording from TASK-14. Option 2 in this task, ship the replacement quickly enough that patching is pointless, is what happened.

The old file is still the live download until the new PDF is uploaded to R2, so the misspelling remains visible to anyone downloading right now. That is tracked as a deploy step, not as a patch.
<!-- SECTION:NOTES:END -->
