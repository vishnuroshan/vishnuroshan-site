---
id: TASK-23
title: Remove the layout shift when the Turnstile widget opens
status: Done
assignee: []
created_date: '2026-09-22 19:11'
updated_date: '2026-09-22 19:22'
labels:
  - ux
  - layout
dependencies: []
priority: low
ordinal: 23000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Clicking the Resume button makes the whoami panel grow slightly, before the widget itself appears.

Cause: #turnstile-container is the last child of address.contact, which is display grid with gap 0.35rem. runAction sets hidden = false immediately, before the Turnstile script has downloaded. The div is still empty and contributes no height, but making it a visible grid item adds one more gap, about 5.6px. A second, larger shift of roughly 65px follows when the widget actually renders.

Neither affects Lighthouse. Both are click-triggered and therefore excluded from Cumulative Layout Shift. This is cosmetic.

Two fixes, best applied together:
1. Move the unhide to after loadTurnstile() resolves, which removes the premature 5.6px jump.
2. Take the container out of flow, using position absolute inside the panel, which is already position relative. That removes the 65px jump as well.

Not done during the session because it touches the Turnstile flow at the same time as a live bug was being fixed in it.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 No layout shift when the widget opens
- [ ] #2 Turnstile still renders and the resume download still works
- [ ] #3 Verified in browser by Vishnu
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Fixed. runAction now waits for loadTurnstile() to resolve before unhiding #turnstile-container, so the empty div never becomes a visible grid item and never adds the 0.35rem gap that nudged the header panel taller.

The second, larger shift when the widget itself renders was deliberately left. It is roughly 65px of a real widget appearing, which is expected feedback rather than a glitch, and removing it would need the container taken out of flow. That is awkward because .panel sets overflow hidden, so an absolutely positioned child is clipped; it would need position fixed or an overflow exception on the header panel. Not worth it for a transient widget.

Neither shift affects Lighthouse. Both are click-triggered and so excluded from Cumulative Layout Shift.
<!-- SECTION:NOTES:END -->
