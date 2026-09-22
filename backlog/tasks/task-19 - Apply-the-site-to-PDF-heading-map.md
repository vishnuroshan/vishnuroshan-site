---
id: TASK-19
title: Apply the site-to-PDF heading map
status: Done
assignee: []
created_date: '2026-09-22 18:05'
updated_date: '2026-09-22 18:52'
labels:
  - resume
  - ats
  - headings
dependencies:
  - TASK-17
priority: high
ordinal: 19000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Vishnu chose to keep personality in the site headings and have the generator map each one to its ATS-standard equivalent. ATS parsers segment a resume by matching known section headers, so the PDF must use conventional names or the parser may fail to find a section and drop its contents.

Agreed map:

  SITE                    PDF
  whoami                  (no heading; contact block carries no header)
  Professional Summary    Summary
  Work History            Experience
  Playground              Side Projects
  Skills                  Skills
  Education               Education

Playground was chosen for the site section holding the side projects. It is not a header any parser recognises, which is exactly why the map exists. The PDF must emit Side Projects.

Side Projects rather than bare Projects was Vishnu's explicit call. It is a widely used resume header and still contains the Projects keyword, so header matchers searching for a known section keyword hit it. It also does the framing work Vishnu wanted: it signals these are not production systems without telling the reader to skip them.

Already applied to the site: the Projects heading now reads Playground in index.html. Internal identifiers were left alone. The section keeps id projects-heading, class panel--projects and grid area projects, since those are structural and renaming them buys nothing.

The map belongs in the generator built by TASK-17, not in the markup. Consider driving it from a data attribute on each panel title, for example data-print-heading='Experience', so the mapping lives next to the content and cannot drift from it.

OPEN QUESTION: the site now mixes registers. whoami and Playground are playful; Professional Summary, Work History, Skills and Education are formal. Decide whether the remaining four move toward the terminal voice for consistency, or whether the two playful ones are deliberate accents. This is a design call for Vishnu, not a technical one.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Generated PDF emits Summary, Experience, Side Projects, Skills and Education as section headings
- [ ] #2 Contact block in the PDF carries no heading
- [ ] #3 pdftotext confirms every standard heading is present and correctly spelled
- [ ] #4 The map is expressed once, in the generator or in markup data attributes, not duplicated
- [ ] #5 Register consistency across the remaining four site headings is decided
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Heading map implemented as data-print-heading attributes on each panel title, exactly as the task proposed, so the mapping lives next to the content and cannot drift.

  .panel-title[data-print-heading] { font-size: 0; }
  .panel-title[data-print-heading]::before { content: attr(data-print-heading); font-size: 10pt; }

The whoami heading is hidden outright in print via header.panel .panel-title, so the contact block carries no header.

Verified in the generated PDF by pdftotext: SUMMARY, EXPERIENCE, SIDE PROJECTS, SKILLS, EDUCATION all present and correctly spelled. The site still shows whoami, Professional Summary, Work History, Playground, Skills, Education.

The register consistency question raised in this task, whether the remaining four site headings should move toward the terminal voice, is still open. It is a design call for Vishnu and does not block anything.
<!-- SECTION:NOTES:END -->
