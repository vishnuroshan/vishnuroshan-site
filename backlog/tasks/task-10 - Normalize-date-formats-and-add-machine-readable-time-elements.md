---
id: TASK-10
title: Normalize date formats and add machine-readable time elements
status: Done
assignee: []
created_date: '2026-09-21 06:28'
updated_date: '2026-09-22 18:38'
labels:
  - resume
  - ats
  - markup
dependencies: []
priority: low
ordinal: 10000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Dates are inconsistent in three ways.

  Work:      Chennai, India - Oct 2020 to Present
  Education: Master of Computer Applications . Aug 2015 - May 2018

- Work uses the word 'to' while education uses an en dash.
- Education uses a middle dot as a field separator while work uses an em dash.
- No time element with a datetime attribute appears anywhere.

For the PDF, standardize on MMM YYYY - MMM YYYY using a plain hyphen. Naive ATS date regexes fail on en dashes and on the word 'to'.

For the HTML, wrap dates in time elements with datetime attributes. Cheap parser win.

Separately, decide how to handle the June 2020 to October 2020 employment gap. It is four months and small, but date-diffing parsers flag it. Either absorb it by rounding Teknuance and Sedin to years, or leave it visible. Use the decision recorded in TASK-1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 All date ranges use one consistent separator across work and education
- [ ] #2 All dates wrapped in time elements with valid datetime attributes
- [ ] #3 PDF uses plain hyphen MMM YYYY - MMM YYYY format
- [ ] #4 Employment gap handled per the TASK-1 decision
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Dates normalized and wrapped in time elements. Education restructured to match the work entries.

All ranges now use a plain hyphen with spaces. The word 'to' is gone from the work entries and the en dash is gone from education. Plain hyphen was chosen over the typographically correct en dash because naive ATS date regexes fail on en dashes, and because the PDF derives from this markup so one format across both artifacts removes a conversion case from TASK-17.

Every endpoint is now a time element with a valid datetime, for example <time datetime="2023-01">Jan 2023</time>. Present is left as plain text since it has no fixed date.

Education restructured from institution-as-heading with a middle-dot separator into the same three-line shape as the work entries: degree as the h3, institution and location as the company line, dates on their own line. Degree-first helps ATS education parsing, and it makes the two sections visually consistent.

Education locations restored from the legacy PDF: PSG at Coimbatore, Guru Nanak at Chennai. That closes one of the TASK-16 gaps.

'B.Sc, Computer Science & Programming' cleaned to 'BSc Computer Science & Programming'. The legacy PDF had it as 'B.Sc, Computer Science: Computer Science And Programming', which was mangled.

The June to October 2020 gap is left visible, per Vishnu's decision.
<!-- SECTION:NOTES:END -->
