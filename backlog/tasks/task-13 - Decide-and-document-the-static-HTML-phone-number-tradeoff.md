---
id: TASK-13
title: Decide and document the static-HTML phone number tradeoff
status: To Do
assignee: []
created_date: '2026-09-21 06:29'
labels:
  - content
  - decision
dependencies: []
priority: low
ordinal: 13000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
The phone number sits behind a JavaScript reveal button plus Turnstile. That is good anti-scrape posture.

The consequence is that no phone number exists in the static HTML. Any non-JavaScript reader sees a contact method that is not actually offered: LLM agents, recruiter extraction tooling, curl, and Reader mode.

This is a reasonable tradeoff if it is deliberate. Confirm that it is.

Regardless of the decision for the website, the PDF must carry a plain-text phone number, because the PDF is the document that genuinely needs to be machine readable.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Decision confirmed and recorded as a backlog decision entry
- [ ] #2 PDF verified to contain a plain-text selectable phone number
- [ ] #3 If gating is kept, a noscript fallback or alternate contact route is considered
<!-- AC:END -->
