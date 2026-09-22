---
id: TASK-14
title: 'Resolve employer name conflict: IQVIA vs Bionworks Technologies'
status: Done
assignee: []
created_date: '2026-09-22 17:46'
updated_date: '2026-09-22 19:11'
labels:
  - resume
  - consistency
  - risk
dependencies: []
priority: high
ordinal: 14000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
The two documents disagree about who employed Vishnu from May 2018 to June 2019.

  PDF:     'IQVIA - Full Stack Developer'
  Website: 'Bionworks Technologies (Now part of IQVIA)'

Bionworks was acquired by IQVIA. Listing IQVIA alone as the employer for a period when the actual payroll entity was Bionworks overstates the association, and an employment background check would surface Bionworks, not IQVIA. That is a credibility risk at offer stage for no real gain.

The website framing is both honest and still captures the IQVIA brand benefit. Recommend the PDF adopt the website wording.

Decide the canonical form and apply it to the PDF, index.html, llms.txt and schema.org markup.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Canonical employer name decided and recorded
- [ ] #2 PDF, index.html and llms.txt all use the same employer name
- [ ] #3 Framing does not claim direct employment by IQVIA for the 2018-2019 period unless that is factually accurate
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Settled on 'Bionworks Technologies (now part of IQVIA)' across every artifact. index.html carries it, llms.txt carries it, and the generated PDF inherits it because it is produced from index.html. The legacy Zety wording, which named IQVIA as the direct employer for 2018 to 2019, is gone with the file it lived in. The background-check risk this task was raised for no longer exists.
<!-- SECTION:NOTES:END -->
