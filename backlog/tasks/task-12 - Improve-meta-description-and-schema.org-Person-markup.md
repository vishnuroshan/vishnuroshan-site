---
id: TASK-12
title: Improve meta description and schema.org Person markup
status: To Do
assignee: []
created_date: '2026-09-21 06:28'
updated_date: '2026-09-22 18:33'
labels:
  - seo
  - metadata
dependencies: []
priority: low
ordinal: 12000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Metadata issues in index.html:

- The meta description reads 'Senior Software Engineer Vishnu Roshan, expert in scalable web apps and clean architecture.' It spends a 155 character budget on a weak self-label. 'Expert' asserts; years and stack prove. It contains no '8 years', no TypeScript and no React.
- The Twitter handle @vishnuroshan appears in meta tags but is not linked anywhere on the page. Either link it or drop the meta tags.
- The schema.org Person block is thin. It is missing hasOccupation, missing worksFor.startDate and missing degree detail under alumniOf. There is no ProfilePage wrapper.
- The schema image points at banner.webp rather than a headshot, which weakens Google knowledge panel eligibility.
- meta keywords has been ignored by every major search engine since roughly 2009. Harmless, but dead weight.

Keep the og and twitter card descriptions in sync with whatever the meta description becomes.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 meta description includes years of experience and core stack within 155 characters
- [ ] #2 og:description and twitter:description match the new description
- [ ] #3 Twitter handle either linked on the page or removed from meta
- [ ] #4 schema.org Person includes hasOccupation and worksFor.startDate
- [ ] #5 alumniOf entries include degree detail
- [ ] #6 meta keywords removed
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Mostly done.

meta description replaced. Old text was 'Senior Software Engineer Vishnu Roshan, expert in scalable web apps and clean architecture', which asserted expertise instead of proving it and named no technology. New text is 154 characters and carries years, stack and domains: 'Senior Software Engineer, 8 years full-stack. React, React Native, Node.js, Python. Retrieval and LLM systems across healthcare, e-commerce and logistics.'

og:description and twitter:description updated to the same string.

meta keywords removed. Ignored by every major engine since roughly 2009.

schema.org Person extended with hasOccupation, including the O*NET occupationalCategory 15-1252.00 for software developers, and hasCredential entries naming both degrees and the institutions that awarded them. hasCredential was used rather than stuffing degree detail into alumniOf, which is the cleaner modelling. JSON-LD validated as parseable after the edit.

STILL OPEN, needs a decision from Vishnu: the Twitter handle @vishnuroshan appears in twitter:site and twitter:creator but is not linked anywhere on the page. Either add it beside the GitHub and LinkedIn icon buttons, or drop both meta tags. Task stays open on that alone.
<!-- SECTION:NOTES:END -->
