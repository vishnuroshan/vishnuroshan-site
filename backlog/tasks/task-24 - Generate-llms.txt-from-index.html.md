---
id: TASK-24
title: Generate llms.txt from index.html
status: To Do
assignee: []
created_date: '2026-09-22 19:11'
labels:
  - content
  - build
dependencies:
  - TASK-17
priority: low
ordinal: 24000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
llms.txt duplicates the summary, the skills and the work history, all of which also live in index.html. That is a third copy of the same content, maintained by hand.

It has already drifted once. Before TASK-11 it listed three projects while the page showed five, carried the old summary, and had no work history at all.

The PDF is now generated from index.html by scripts/build-resume-pdf.sh. The same approach applies here: extract the summary, the skills groups, the work history and the Playground entries from the markup and write llms.txt. The heading names differ between artifacts, so reuse the data-print-heading mapping rather than inventing a second one.

Arcade must be added back to llms.txt when TASK-18 restores the arcade work; it is currently omitted because the route does not resolve.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 A command regenerates llms.txt from index.html
- [ ] #2 Output matches the current page content
- [ ] #3 Generation runs alongside the PDF build so the two cannot diverge
<!-- AC:END -->
