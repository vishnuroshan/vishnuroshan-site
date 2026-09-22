---
id: TASK-2
title: Add job titles to every work history entry
status: Done
assignee: []
created_date: '2026-09-21 06:27'
updated_date: '2026-09-22 17:48'
labels:
  - resume
  - content
  - ats
dependencies:
  - TASK-1
priority: high
ordinal: 2000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
SCOPE CORRECTED after the PDF audit in TASK-5.

The PDF already carries job titles on all four roles:
  Sedin Technologies - Railfactory - Senior Software Engineer   10/2020 - Current
  Teknuance Info Solutions - Software Engineer                  07/2019 - 06/2020
  IQVIA - Full Stack Developer                                  05/2018 - 06/2019
  Aosta Software Solutions - Software Engineer Intern           12/2017 - 05/2018

The website does not. index.html uses the company name as the h3.job-title heading on every role, so no title appears anywhere on the page.

This is therefore a website-only defect, not the ATS catastrophe first assumed. It still matters: it breaks recruiter boolean search on the public page, weakens schema.org, and hides title progression.

Current shape:
  <h3 class="job-title">Sedin Technologies - Railsfactory Division</h3>
  <span class="meta">Chennai, India - Oct 2020 to Present</span>

Target: a distinct title element per role, company as a subordinate element.

OPEN QUESTION for Vishnu: the PDF shows only Senior Software Engineer at Sedin across the full six years. Confirm whether there was an earlier title and when it changed, so progression can be shown.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Each of the four roles shows an explicit job title distinct from the employer name
- [ ] #2 Sedin title progression is visible with dates
- [ ] #3 Heading semantics match content: the job-title element contains the title, not the company
- [ ] #4 schema.org markup updated if it references role information
- [ ] #5 Same titles present in the PDF resume
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Done for the website. index.html now carries an explicit job title as the h3 on all four roles, with the employer moved to a new p.company line beneath it.

Sedin progression is shown as two lines, since Vishnu confirmed he joined as Software Engineer and was promoted to Senior Software Engineer roughly three years ago:
  Senior Software Engineer / Sedin Technologies - Railsfactory Division / 2023 to Present
  Software Engineer / Oct 2020 to 2023

Added one CSS rule, .job .company, matching existing type scale.

Employer for 2018-2019 kept as 'Bionworks Technologies (now part of IQVIA)' per the recommendation in TASK-14. The PDF still says IQVIA alone; TASK-14 closes that gap.

OPEN: the promotion year 2023 is derived from 'three years ago' and has no month. Needs an exact month before the PDF is regenerated.
<!-- SECTION:NOTES:END -->
