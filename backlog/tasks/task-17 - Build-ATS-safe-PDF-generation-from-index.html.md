---
id: TASK-17
title: Build ATS-safe PDF generation from index.html
status: In Progress
assignee: []
created_date: '2026-09-22 17:50'
updated_date: '2026-09-22 18:52'
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
PDF GENERATION WORKING. Approach chosen: a print stylesheet inside index.html plus headless Chrome, rather than a separate print view. index.html stays the single source and no dependency was added beyond Chrome, which was already installed.

Files:
- scripts/build-resume-pdf.sh, the repeatable command. Serves the repo over python3 -m http.server on 127.0.0.1, drives Chrome headless with --print-to-pdf and --no-pdf-header-footer, then cleans up.
- scripts/print-page.py, injects the phone number into a temporary .resume-print.html.
- A @media print block in index.html that linearises the bento grid.

Usage: ./scripts/build-resume-pdf.sh [output.pdf]
Phone comes from RESUME_PHONE, or from PHONE_NUMBER in .dev.vars if that file exists. The script warns and continues if neither is set.

PHONE SOLVED WITHOUT WEAKENING THE GATING. The site keeps the Turnstile-gated reveal button and the number never appears in committed markup. The build injects it into a temporary file that is deleted on exit via a trap, including on failure. This closes the TASK-13 tension: gated on the web, plain text in the PDF.

VERIFIED AGAINST THE TASK-5 DEFECT LIST, every item confirmed absent:
- Single column, reading order matches visual order. Contact details extract FIRST, not after the work history.
- LinkedIn and GitHub URLs extract as complete unbroken strings on one line.
- No orphaned bullet glyphs. Bullet text extracts as clean lines.
- Skills section names real technologies, grouped and labelled.
- Phone extracts as plain selectable text.
- Dates use MMM YYYY - MMM YYYY with a plain hyphen and Present, not Current.
- No decorative rating bars, no icon-only contact details, no layout tables.
- All fonts embedded and subset with working ToUnicode maps.
- Years of experience stated in the summary.

Multi-word keyword integrity checked programmatically after adding white-space nowrap to the skill badges. Without it, wrapped lines split 'Web performance' and 'AI-assisted development' across lines, which would have broken those keywords for a parser. Verified intact: Web performance, AI-assisted development, Clean architecture, Vector search, Reciprocal Rank Fusion, React Native, Design systems.

NO CSP CHANGE REQUIRED. Nothing external is loaded; the print styles are inline and the chevron is inline SVG rather than a data URI, which default-src 'self' would have blocked.

OPEN:
- Output is two A4 pages. Vishnu to decide whether to compress to one.
- Section order follows the DOM: Summary, Experience, Side Projects, Skills, Education. Skills before Side Projects is the more conventional and more ATS-friendly order. Needs a decision.
- Fonts resolve to Menlo from the ui-monospace stack. A monospace resume is unusual; it is on-brand for this site but worth a deliberate decision.
- .resume-print.html should be added to .gitignore once the arcade stash is popped, since .gitignore currently has stashed modifications.
<!-- SECTION:NOTES:END -->
