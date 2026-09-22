---
id: TASK-16
title: Make index.html the canonical resume source
status: Done
assignee: []
created_date: '2026-09-22 17:46'
updated_date: '2026-09-22 19:11'
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

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
index.html is now the canonical source and the PDF is generated from it, so the two cannot drift.

Gaps listed in this task, all closed:
- Education locations restored, PSG at Coimbatore and Guru Nanak at Chennai, during TASK-10.
- Technologies the site had trimmed are back: Angular 6 and Ionic 3 on Bionworks, Java and the Android SDK on Aosta, D-Sci described as an end-to-end analytics platform.
- Narrative lead-ins from the Zety file were deliberately not carried over.
- The phone number is no longer a gap; it was deleted everywhere rather than moved.

llms.txt still duplicates the summary, the skills and the work history. It is hand-maintained and was refreshed in TASK-11, but it remains a third copy that can drift. Generating it from index.html alongside the PDF is the obvious follow-up and is now tracked separately.
<!-- SECTION:NOTES:END -->
