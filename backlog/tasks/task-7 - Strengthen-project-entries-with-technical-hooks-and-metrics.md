---
id: TASK-7
title: Strengthen project entries with technical hooks and metrics
status: To Do
assignee: []
created_date: '2026-09-21 06:28'
updated_date: '2026-09-22 19:19'
labels:
  - content
  - projects
dependencies: []
priority: medium
ordinal: 7000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
The projects are good assets and are undersold. None carry external validation: no downloads, stars, users or uptime.

Per project:
- Zero Hero: the first bullet is 40 words of game rules. That is a manual, not a portfolio entry. Nobody hiring cares about the win condition. Lead with what was technically hard, such as the state machine, the solver, the jam constraints or the ship time.
- Lovedoku: 'Built for my wife to pass time without ads' is memorable and differentiating, so keep it verbatim. Pair it with the technical hook. 'Custom puzzle-generation algorithm I am actively improving' hints at something interesting and then stops. Name the approach, for example constraint propagation, backtracking solver, or difficulty grading heuristic.
- Steam Lib: 'rigorous caching strategies to optimize API usage' names no strategy. Specify ISR, stale-while-revalidate, Redis or whatever was used, state the rate limit budget and state how much it was cut. This is the clearest opportunity in the document to demonstrate systems thinking and it is currently a claim rather than evidence.
- tui-tac-toe: the npm package has a public download count. If respectable, it is the only third-party verified number available. Use it.
- Arcade: currently a single line with no bullets while every sibling has them. Asymmetric.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Zero Hero leads with a technical hook rather than game rules
- [ ] #2 Lovedoku names the actual generation or solving approach
- [ ] #3 Steam Lib names concrete caching strategies and a measured effect
- [ ] #4 tui-tac-toe cites its npm download count, or the idea is explicitly rejected
- [ ] #5 Arcade has bullets consistent with sibling entries
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
SCOPE NARROWED. Vishnu is deferring the technical detail and will add repository links himself later.

Deferred, needs Vishnu:
- Lovedoku's generation approach. Constraint propagation, backtracking solver, difficulty grading? The entry currently says 'a custom puzzle generator', which asserts without evidence.
- Steam Lib's caching strategy. ISR, stale-while-revalidate, Redis? What the rate limit budget was and how much it was cut. Currently 'heavily cached to stay inside rate limits'.

NEW, raised by Vishnu: add repository links to the Playground entries. Each entry currently links only to the live demo or the npm page. For an engineer's portfolio the source is often the more useful link, since it is the only place a reader can actually assess the work.

Questions this raises, to settle before implementing:
- Are the repositories public? A link to a private repo is worse than no link, because it looks like an oversight.
- Where does the second link go? The title is already the demo link. Options are a trailing 'source' link in the meta line, or a small icon matching the existing inline SVG set.
- Does the repo link belong in the PDF as well? A second URL per project adds length to an already two-page document, and recruiters do click through. Probably yes for the source, since it is the more substantive of the two.

The structural rewrite of this section is already done. Entries were collapsed to one line each, the Zero Hero rules dump removed, 'Built for my wife' kept, and Ink's marketing language dropped. What remains is content only Vishnu can supply.

tuitactoe download count was looked up at 969 over the last 365 days and recommended against. Under a thousand reads as a weak number on a senior resume; 'npx tuitactoe' is the stronger signal because it is instantly verifiable.
<!-- SECTION:NOTES:END -->
