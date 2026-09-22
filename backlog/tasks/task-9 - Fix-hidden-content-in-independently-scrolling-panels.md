---
id: TASK-9
title: Fix hidden content in independently scrolling panels
status: Done
assignee: []
created_date: '2026-09-21 06:28'
updated_date: '2026-09-22 18:38'
labels:
  - layout
  - ux
dependencies: []
priority: medium
ordinal: 9000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
body sets height 100dvh with overflow hidden, and three panels then scroll independently:

  body { height: 100dvh; overflow: hidden; }
  .panel--work, .panel--skills, .panel--projects { overflow-y: auto; }

A recruiter gets roughly 15 seconds and will not discover that three separate boxes each need scrolling. In practice the Bionworks and Aosta entries are invisible in the work panel, and the tail of the skills list is invisible too.

The bento layout is visually strong and is costing content visibility.

Minimum fix: add a scroll affordance, such as a fade mask at the panel bottom edge, so hidden content is discoverable.
Better fix: allow the page to scroll normally below a height threshold rather than locking to the viewport.

Verify against a short laptop viewport, not just a large display.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Hidden overflow is visually signalled in every scrollable panel
- [ ] #2 All work history entries are reachable without discovering per-panel scroll
- [ ] #3 Verified at 1280x720 and at 1440x900
- [ ] #4 Mobile layout unaffected
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Scroll affordance added, and a clipping bug fixed.

BUG FOUND: panel--projects had no overflow-y auto. The arcade branch had added it, and that CSS was reverted when the arcade work was stashed. The base .panel rule sets overflow hidden, so any Playground content past the panel height was clipped with no way to scroll to it. Restored overflow-y auto and the matching scrollbar rules for that panel.

AFFORDANCE: a sticky pseudo-element at the bottom of each scrollable panel, painting a gradient from the panel background to transparent. Negative top margin keeps it from adding height; negative bottom and side margins bleed it into the panel padding so it reaches the true bottom edge. pointer-events none so it never intercepts clicks. Suppressed below the 900px breakpoint, where panels are not scroll containers.

KNOWN TRADEOFF: the fade is always on, including when a panel is scrolled to the end. CSS alone cannot detect scrollability without scroll-driven animations, whose support is too narrow to rely on here. The alternative was JavaScript, which is not worth it for a decorative cue.

NOT DONE: the second, larger fix from the original task, letting the page scroll normally below a viewport height threshold instead of locking to 100dvh. That changes the deliberate bento design, and it cannot be verified from here since Vishnu does his own browser checks. Still worth deciding, and TASK-17 will have to unpick the same 100dvh lock for print regardless.

This matters more than when the task was written. The skills panel went from 26 inline badges to eight labelled groups in TASK-6, so there is more below the fold than before.

Vishnu verifies in browser.
<!-- SECTION:NOTES:END -->
