---
id: TASK-20
title: Design a stronger hover effect for the skills badges
status: To Do
assignee: []
created_date: '2026-09-22 18:06'
labels:
  - design
  - ux
  - deferred
dependencies:
  - TASK-6
priority: low
ordinal: 20000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Vishnu wants a more striking hover interaction on the skills badges. Explicitly deferred until the content review is finished, so this is parked, not started.

Depends on TASK-6. That task regroups the flat 26-badge list into labelled categories, which changes the markup the effect attaches to. Designing the interaction first would mean designing it twice.

Current behaviour in index.html:

  .badges li:hover {
    color: var(--accent-strong);
    border-color: var(--accent);
    background: color-mix(in srgb, var(--accent) 8%, var(--panel));
  }

A flat colour and border swap over 0.15s. Functional, unremarkable.

Constraints the design has to respect:
- The site ships a Content Security Policy and is served through a Cloudflare Worker. No external libraries, no CDN scripts.
- Lighthouse 100 is a stated goal, so nothing that forces layout or triggers reflow on hover. Stay on transform and opacity.
- prefers-reduced-motion is already honoured for the h1 caret animation. Any new motion needs the same guard.
- Hover does not exist on touch. The effect must be purely additive so the mobile experience loses nothing.
- Badges are in a scrollable panel, so effects that overflow the element need care around the panel clipping bounds.
- The palette is a light theme built on CSS custom properties. Keep to the existing tokens rather than introducing new colours.
- No comments in source files, per the repo convention.

Open direction to discuss when it is picked up: whether the effect carries meaning, for example revealing proficiency or years, or whether it is purely decorative.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Effect agreed with Vishnu before implementation
- [ ] #2 No external dependencies and no CSP changes
- [ ] #3 Animates only transform and opacity
- [ ] #4 prefers-reduced-motion guard present
- [ ] #5 Touch and keyboard focus states are not degraded
- [ ] #6 Vishnu verifies in browser
<!-- AC:END -->
