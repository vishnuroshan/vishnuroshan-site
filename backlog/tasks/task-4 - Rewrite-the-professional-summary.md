---
id: TASK-4
title: Rewrite the professional summary
status: Done
assignee: []
created_date: '2026-09-21 06:27'
updated_date: '2026-09-22 18:29'
labels:
  - resume
  - content
  - ats
dependencies:
  - TASK-1
priority: high
ordinal: 4000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
The summary is roughly 95 words and about 15 of them carry signal. It is the highest keyword-weight block in any resume and it currently contains zero technology names.

Problems:
- Self-deprecating. 'I am not trying to reinvent the wheel' and 'I just want to' lower perceived seniority.
- Unfalsifiable personality claims. 'I ask a lot of questions, stay curious' is what everyone writes.
- No stack named. TypeScript, React, Node.js and PostgreSQL all appear later in the page but not here.
- No domain and no scale. Healthcare? Fintech? What size systems?
- Register clash. The summary is chatty first person while the work bullets use clipped resume voice. One document, two voices.

Target: three sentences, roughly 50 words. Seniority level, years, domain, core stack, one proof point. Pick one voice and apply it to the whole document.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Summary is 50 words or fewer
- [ ] #2 Names the core stack explicitly
- [ ] #3 Contains one concrete proof point drawn from TASK-1
- [ ] #4 No self-deprecating or unfalsifiable personality language remains
- [ ] #5 Voice is consistent with the work history bullets
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Summary rewritten. 95 words to 37. Direction chosen by Vishnu: domain breadth. Voice chosen: impersonal, matching the work history bullets.

New text:
Senior Software Engineer with eight years building full-stack web and mobile products across healthcare, e-commerce, logistics, and HR technology. Currently lead three engineers on retrieval and LLM systems in TypeScript, React, Node.js, and Python.

Removed: 'I am not trying to reinvent the wheel', 'I just want to build solid, dependable solutions', 'I ask a lot of questions, stay curious'. All self-deprecating or unfalsifiable.

Added, none of which appeared anywhere before: the team leadership, the retrieval and LLM work, Python, mobile, and four named domains.

Warehouse management is written as logistics here for brevity. The specific WMS term still appears in the Sedin bullets.

The .emphasis strong wrapper on the job title was preserved; it is a deliberate design element.

The register clash flagged in the original review is resolved. Summary and bullets now share one voice.

KNOCK-ON, not yet done:
- The meta description still reads 'expert in scalable web apps and clean architecture', which no longer matches the summary and never matched well. og:description and twitter:description carry the same stale text. TASK-12.
- llms.txt still carries the old summary and the old skills. TASK-11.
Both were already inconsistent; this rewrite widens the gap.
<!-- SECTION:NOTES:END -->
