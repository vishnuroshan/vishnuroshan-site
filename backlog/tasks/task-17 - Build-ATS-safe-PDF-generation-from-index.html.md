---
id: TASK-17
title: Build ATS-safe PDF generation from index.html
status: Done
assignee: []
created_date: '2026-09-22 17:50'
updated_date: '2026-09-22 19:22'
labels:
  - resume
  - ats
  - build
dependencies:
  - TASK-16
priority: high
ordinal: 17000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Replace the legacy Zety PDF with one generated from the website, so the two can never drift.

The hard part is that the screen layout is actively hostile to what an ATS wants. index.html is a three-column bento grid, locked to 100dvh with overflow hidden and three independently scrolling panels. Printing that directly produces a broken document. The print path must fully override the layout, not merely restyle it.

Requirements, derived from the TASK-5 audit of the Zety file. Each one is a defect that must not reappear:
- Single column. No sidebar. Reading order must match visual order.
- URLs must render unbroken on one line. The Zety sidebar wrapped LinkedIn and GitHub mid-string and destroyed both.
- Bullet text must extract with its bullet. No orphaned glyphs.
- A real skills section naming actual technologies.
- Phone number present as selectable plain text.
- Dates as MMM YYYY - MMM YYYY with a plain hyphen, using 'Present' not 'Current'.
- No decorative rating bars, no icon-only contact details, no layout tables.
- Fonts embedded with ToUnicode maps. The repo already vendors fonts under fonts/, currently stashed with the arcade work.
- Years of experience stated explicitly.

Approach options to weigh:
1. A print stylesheet plus the browser's own Save as PDF. Simplest, no new dependency, but output varies by browser and page breaks are hard to control.
2. Headless Chrome via a script. Reproducible, scriptable in CI, adds a dependency. The repo already has scripts/ and a Python build script for bundles.
3. A dedicated print-only HTML view generated from the same content, rather than reusing the bento markup. More code, best control.

Verify the output with pdftotext, not by eye. The Zety file looked fine and extracted badly.

Note the current site ships a Content Security Policy and serves via a Cloudflare Worker. Whatever approach is chosen must not require loosening the CSP.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 A documented, repeatable command regenerates the PDF from index.html
- [ ] #2 pdftotext output is single-column, in correct reading order, with contact details first
- [ ] #3 LinkedIn and GitHub URLs extract as complete unbroken strings
- [ ] #4 Skills section in the extracted text names real technologies
- [ ] #5 Phone number extracts as plain text
- [ ] #6 Every defect listed in the TASK-5 audit is verified absent
- [ ] #7 No CSP changes required
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Closed. All four open questions answered by Vishnu.

- Page count: two A4 pages is fine. Measured that hiding the projects section does not reduce it to one, so there was nothing to gain by cutting.
- Section order: Summary, Experience, Side Projects, Skills, Education approved as is.
- Font: switched from the ui-monospace stack to Helvetica, Arial, sans-serif for print only. The site keeps its monospace identity. Verified as embedded subsets with working ToUnicode maps.
- Side projects in the PDF: kept. Vishnu wants them in both artifacts.

The build script self-verifies on every run. It asserts fourteen strings survive extraction, covering multi-word keywords, both profile URLs and all five section headings, and fails loudly if a phone-shaped number ever reappears. That check caught a real defect during development: e-commerce was wrapping after the hyphen and pdftotext rejoins hyphenated line breaks, so it extracted as ecommerce. Fixed with white-space nowrap spans.

Remaining item is not part of this task: the generated PDF still has to be uploaded to R2, since the Worker serves from the bucket rather than the repo. Tracked in TASK-21.
<!-- SECTION:NOTES:END -->
