---
id: TASK-5
title: Audit the legacy Zety PDF and capture its defects as requirements
status: Done
assignee: []
created_date: '2026-09-21 06:28'
updated_date: '2026-09-22 17:50'
labels:
  - resume
  - ats
  - pdf
dependencies: []
priority: high
ordinal: 5000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
The PDF is the artifact an applicant tracking system actually ingests. The website is never seen by an ATS. This file therefore carries all ATS risk and has not yet been reviewed, because no PDF text extraction tooling is installed on this machine.

A raw extraction attempt over the PDF content streams returned font program data rather than legible text. That evidence is inconclusive, since the extraction method was crude. But it matches a known auto-rejection failure mode: a subset-embedded font, in this case Montserrat, with a missing or broken ToUnicode map extracts as mojibake, and the ATS then scores the candidate on mojibake.

Prerequisite: brew install poppler

Checks to run once tooling is available:
- Does pdftotext return clean, correctly ordered text?
- Is the layout single column? Multi-column layouts scramble parser reading order.
- Is any contact information rendered as an icon or image rather than text?
- Is contact information inside a header or footer region, where many parsers drop it?
- Are tables used for layout?
- Are fonts embedded with a valid ToUnicode map?
- Is the phone number present as plain selectable text?
- Do dates use a parser-safe format?

Then mirror every content fix from the HTML tasks into the PDF.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 poppler installed and pdftotext runs against the resume
- [ ] #2 Extracted text is legible, correctly ordered, and complete
- [ ] #3 Layout confirmed single column with no layout tables
- [ ] #4 Contact details, including phone, present as selectable text outside header and footer regions
- [ ] #5 Fonts embedded with working ToUnicode maps
- [ ] #6 Job titles, rewritten summary, rewritten bullets and updated skills all present in the PDF
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
SCOPE CHANGED. Vishnu confirmed the current PDF was produced in Zety and is to be treated as legacy. A new resume will be generated from this website instead. Fixing the Zety file is therefore wasted effort, so this task ends at the audit.

The audit stands as the requirements list for the replacement. Every defect below must not reappear in the generated PDF. See TASK-17.

Verified with pdfinfo, pdffonts, pdftotext and a rendered page image:
- Fonts embed correctly with working ToUnicode maps. Text extraction is clean. The mojibake risk raised in the first review does not exist.
- Two-column layout. pdftotext reads the full left column, then the sidebar, so contact details, skills and education all land after the work history in the extracted stream.
- Bullet glyphs detach from their text and pile up as orphans at the end of each job block.
- LinkedIn and GitHub URLs hard-wrap mid-string in the sidebar and extract as broken token pairs. Both links are unusable to a parser.
- The skills section contains zero technologies. Seven entries, all soft or architectural: Microservices architecture, Project leadership, Client requirements, Requirements gathering, Software architecture, Web application development, AI assisted software development.
- Decorative segmented rating bars beside each skill carry no text.
- 'high-performance' extracts as 'highperformance'.
- Dates use MM/YYYY with 'Current' rather than 'Present'.
- Not tagged. No structure tree.
- No years-of-experience figure anywhere.
- No projects section.

The legacy file stays live at vishnu-Roshan-Resume.pdf, behind the Turnstile-gated resume button, until the replacement ships.
<!-- SECTION:NOTES:END -->
