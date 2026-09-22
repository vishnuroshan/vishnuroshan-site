---
id: TASK-16
title: Make index.html the canonical resume source
status: To Do
assignee: []
created_date: '2026-09-22 17:46'
updated_date: '2026-09-22 17:50'
labels:
  - resume
  - consistency
dependencies: []
priority: high
ordinal: 16000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Vishnu will generate the new resume from this website, so index.html becomes the single source of truth and the PDF becomes a derived artifact. That removes the drift problem structurally rather than by discipline.

Consequence: the website content must now carry everything an ATS needs, because the ATS-facing document is generated from it. Content that exists only in the Zety PDF has to move into index.html first.

Content currently in the legacy PDF but NOT on the website:
- Phone number as plain text. The site gates it behind Turnstile.
- Education locations: PSG at Coimbatore, Guru Nanak at Chennai.
- Per-role narrative lead-in lines. These should not be carried over; they are personal narrative rather than achievement, and one of them says 'amazing teammates'.
- Technologies named in the Teknuance and Bionworks bullets that the site has trimmed: Angular 6, Ionic 3, Java, Android SDK, 'end-to-end analytics platform' as the description of D-Sci.

Content on the website but NOT in the PDF:
- All five projects: Arcade, Zero Hero, Lovedoku, Steam Lib, tui-tac-toe.
- The full skills list.
- The 8+ years figure.

Decide what the canonical set is, then make index.html hold all of it.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 A single canonical source of resume content exists
- [ ] #2 Summary, skills, employer names and dates are identical across PDF and index.html
- [ ] #3 Projects appear in the PDF, or their omission is a recorded deliberate decision
- [ ] #4 Narrative lead-in sentences are removed or rewritten as achievements
- [ ] #5 index.html contains every piece of content the generated resume needs
- [ ] #6 Technologies dropped from the site bullets are restored where accurate
- [ ] #7 Education locations present
- [ ] #8 Narrative lead-in lines explicitly excluded
- [ ] #9 A note records that index.html is canonical and the PDF is generated
<!-- AC:END -->
