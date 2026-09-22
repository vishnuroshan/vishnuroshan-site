---
id: TASK-3
title: Rewrite work history bullets as quantified achievements
status: Done
assignee: []
created_date: '2026-09-21 06:27'
updated_date: '2026-09-22 19:48'
labels:
  - resume
  - content
dependencies:
  - TASK-1
priority: high
ordinal: 3000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
All current bullets describe responsibilities, not achievements. There is not a single number in the work history outside of dates.

Weakest examples, all at Sedin:
- 'Led agile teams to deliver scalable web apps across varied domains.' No team size, no domains named, scalability unproven.
- 'Built clean, modular code-bases aligned with business needs.' Unfalsifiable.
- 'Made long-term architectural decisions with scalability in mind.' Names no decision, no scale, no outcome.
- 'Worked with designers, PMs, and QA to deliver polished solutions.' Table stakes, wastes a line.

Weight is also inverted against career significance. Sedin covers roughly 5 years 11 months, about 70 percent of the career, and has four vague bullets. Teknuance covers 11 months and has the most concrete bullets in the document, naming real products and real technology. Aosta is a six month internship and still gets its own block.

Target bullet shape: action verb, system, stack, measurable outcome.

Rebalance so Sedin carries five to six specific bullets, Teknuance and Bionworks stay concise, and Aosta reduces to a single line or is cut entirely. An engineer with eight years of experience does not need to list an internship.

Do not invent numbers. Use only facts captured in TASK-1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Sedin has five to six bullets, each naming a system, a stack, and an outcome
- [ ] #2 Every quantified claim traces to a fact recorded in TASK-1
- [ ] #3 Per-role technology stack is identifiable, so a recruiter can map years to technologies
- [ ] #4 Aosta internship reduced to one line or removed
- [ ] #5 No remaining bullet is unfalsifiable boilerplate
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Goal met. The original finding was that the work history contained not a single number outside of dates and that every bullet described a responsibility rather than an achievement. Both are fixed.

Six sourced quantified claims now appear: eight years, 10 to 12 client projects, three engineers, seven named domains, roughly 1s to 6ms on the Lovedoku generator rewrite, and IGDB batches of 500. Every one traces to something Vishnu stated, something enumerated on the page, or something read out of his own repository.

Vishnu asked for a plausible figure to be invented for the pgvector work. Declined. A number that cannot be sourced fails at the moment it matters, when an interviewer asks how it was measured, and it is worse than no number.

That bullet was instead reframed to lead with the capability the old architecture could not deliver: hybrid search with Reciprocal Rank Fusion, which the two-store setup could not support without overhead. It is the strongest bullet on the page and carries no figure. The previous wording leaned on 'and its cost', the last unsourced claim on the resume.

All four roles rewritten. Aosta collapsed to one line at Vishnu's request. Sedin bullets labelled per project after he pointed out each one covers a different engagement.
<!-- SECTION:NOTES:END -->
