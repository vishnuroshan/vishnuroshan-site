---
id: TASK-8
title: Reorder DOM so work history precedes projects
status: Done
assignee: []
created_date: '2026-09-21 06:28'
updated_date: '2026-09-22 17:51'
labels:
  - layout
  - seo
  - a11y
dependencies: []
priority: medium
ordinal: 8000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
DOM order in index.html is summary, projects, work, skills, education.

Anything reading the document linearly gets five side projects before the employment history: screen readers, text extractors, LLM crawlers, Reader mode and the print stylesheet. For a senior engineer with eight years of experience that signals the wrong priority.

The visual bento grid can keep its current arrangement via grid-template-areas. Only the source order needs to change, so that the visual layout and the linear reading order can differ deliberately rather than by accident.

Verify that changing source order does not break the grid-area assignments or the tab order.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Work history appears before projects in the DOM
- [ ] #2 Visual bento layout is unchanged at desktop widths
- [ ] #3 Keyboard tab order follows a sensible reading sequence
- [ ] #4 Mobile stacked order places work history above projects
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Swapped the panel--work and panel--projects sections in index.html. New source order: header, summary, work, projects, skills, education.

Desktop layout is unaffected. Placement comes from grid-template-areas combined with the per-panel --area custom property, not from source order, so moving the sections does not move them visually.

Mobile improves as a side effect. The max-width 900px breakpoint sets display block, so panels stack in source order. Work history now precedes projects on mobile, which is the order that was wanted anyway.

Tab order follows source order and now reaches work history before projects.

Not visually verified by me. Vishnu verifies UI himself.
<!-- SECTION:NOTES:END -->
