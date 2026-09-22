---
id: TASK-3
title: Rewrite work history bullets as quantified achievements
status: In Progress
assignee: []
created_date: '2026-09-21 06:27'
updated_date: '2026-09-22 18:26'
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
TEKNUANCE AND BIONWORKS REWRITTEN. All four roles now done.

Teknuance: restored the detail the site had trimmed but the legacy PDF carried. D-Sci is now described as an end-to-end analytics platform. 'Scalable RESTful APIs' became 'REST APIs in Node.js over PostgreSQL and MongoDB for data-heavy applications', since 'scalable' was an unproven adjective doing no work. Twelve-Factor kept; it is a genuine methodology signal for the level. 'Owned and maintained Olimium' kept verbatim because owned is the strongest verb in the block and sole ownership of a production app eleven months into a career is worth stating plainly.

Bionworks: went from three bullets to two. 'Focused on clean architecture and performance' was deleted outright as exactly the unfalsifiable boilerplate this task exists to remove. Angular 6 and Ionic 3 restored from the PDF and folded into the Healthcommand bullet rather than given a bullet of their own. The PDF narrative lead-ins were not carried over.

Bionworks is now the thinnest block on the page, two bullets against Teknuance's four, despite being the longer tenure at thirteen months versus eleven. That imbalance is honest rather than padded, but it is worth closing.

OPEN, needs Vishnu:
- What are Healthplug MD and PX? The bullet names them with no descriptor, which tells a reader nothing. One clause each would fix it.
- Was there anything else of substance at Bionworks worth a third bullet?
- What is AMS360? D-Sci has a descriptor now and AMS360 does not.

STILL NO MEASURED OUTCOME anywhere in the work history. Two live candidates: Sedstart render time before and after, and ChromaDB monthly hosting cost. Task stays In Progress until at least one lands.
<!-- SECTION:NOTES:END -->
