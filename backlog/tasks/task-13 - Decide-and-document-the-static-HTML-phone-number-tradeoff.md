---
id: TASK-13
title: Decide and document the static-HTML phone number tradeoff
status: Done
assignee: []
created_date: '2026-09-21 06:29'
updated_date: '2026-09-22 19:11'
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

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Resolved by deletion rather than by decision. Vishnu chose to remove the phone number entirely, from the site and from the PDF. It is gone from index.html, app.js, worker/index.js and .dev.vars.example, and the /api/phone endpoint no longer exists. The tradeoff this task existed to weigh no longer applies. The PHONE_NUMBER secret can be deleted from the Cloudflare dashboard.
<!-- SECTION:NOTES:END -->
