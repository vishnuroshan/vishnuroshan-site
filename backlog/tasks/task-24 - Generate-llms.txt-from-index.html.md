---
id: TASK-24
title: Generate llms.txt from index.html
status: Done
assignee: []
created_date: '2026-09-22 19:11'
updated_date: '2026-09-22 19:39'
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

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Done. scripts/build-llms-txt.py generates llms.txt from index.html, and scripts/build.sh runs it alongside the PDF build so the two artifacts cannot diverge.

The generator is a small HTMLParser subclass building a tree with find, find_all and children_by helpers. Standard library only, no dependency added, and no regex scraping of markup. It reads the structural classes the page already uses, so it holds no private copy of the content.

Verified three ways: output is byte-identical across repeated runs; a probe skill injected into index.html appeared in the output, confirming it tracks drift; and the full build still passes the PDF extraction checks.

The generated file is better than the hand-maintained one it replaces. Title now leads each experience entry rather than the company, matching the resume. All eight skill groups appear with their real labels instead of seven abridged ones. Every work bullet is included rather than a hand-picked subset, which had left Teknuance and Bionworks thin. Project text matches the page exactly. code elements are preserved as markdown backticks, so pgvector and npx tuitactoe render correctly.

This removes the last structural duplication. The summary, the skills and the work history existed in three places and had already drifted once.

Arcade still needs adding back when TASK-18 restores that work, but it will now come through automatically, since the generator reads whatever is in the Playground panel.
<!-- SECTION:NOTES:END -->
