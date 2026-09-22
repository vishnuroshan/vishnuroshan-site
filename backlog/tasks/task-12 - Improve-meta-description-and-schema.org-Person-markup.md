---
id: TASK-12
title: Improve meta description and schema.org Person markup
status: Done
assignee: []
created_date: '2026-09-21 06:28'
updated_date: '2026-09-22 19:18'
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
Closed. Vishnu chose not to link an X profile, so twitter:site and twitter:creator were removed. The handle is no longer claimed anywhere.

twitter:card, twitter:title, twitter:description and twitter:image are kept. Those control how the link renders when anyone shares the site on X, and they work without a handle. Only the two tags that named @vishnuroshan are gone.

Everything else in this task was already applied: the meta description rewritten to 154 characters carrying years, stack and domains, og and twitter descriptions synced to it, meta keywords deleted, and schema.org Person extended with hasOccupation and hasCredential.
<!-- SECTION:NOTES:END -->
