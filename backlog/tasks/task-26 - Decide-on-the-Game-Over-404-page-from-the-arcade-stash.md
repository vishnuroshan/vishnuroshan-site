---
id: TASK-26
title: Decide on the Game Over 404 page from the arcade stash
status: To Do
assignee: []
created_date: '2026-09-22 21:02'
labels:
  - design
  - salvage
dependencies: []
priority: low
ordinal: 26000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
stash@{1} contains a retheme of 404.html: the title becomes Game Over, with a phosphor and scanline CRT treatment and a CSS-only 'Continue? 9...0' countdown. Purely cosmetic and independent of the games.

It depends on fonts/press-start-2p.woff2, also in the stash, at 4,704 bytes. A self-hosted pixel font, needed because the CSP is default-src 'self' and font CDNs are not an option.

Worth deciding rather than assuming. It is a 148-line change carrying a webfont, for a page almost nobody sees, and its CRT aesthetic belongs to the abandoned arcade concept rather than to the current site. The counter-argument is that a 404 is exactly where personality costs nothing.

Recover with git show stash@{1}:404.html and git show stash@{1}^3:fonts/press-start-2p.woff2 rather than popping the stash.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Decision recorded either way
- [ ] #2 If kept: 404.html and the font committed, and the font is not excluded by .assetsignore
- [ ] #3 If dropped: both stashes can then be dropped, once TASK-25 is also resolved
<!-- AC:END -->
