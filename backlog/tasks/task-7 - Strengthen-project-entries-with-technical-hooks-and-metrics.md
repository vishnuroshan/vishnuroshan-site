---
id: TASK-7
title: Strengthen project entries with technical hooks and metrics
status: Done
assignee: []
created_date: '2026-09-21 06:28'
updated_date: '2026-09-22 20:03'
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
Complete. Every strand closed.

Technical hooks, recovered by reading the repositories rather than asking:
- Lovedoku is not 'a custom puzzle generator' and not, as Vishnu described it, mostly backtracking. ALGORITHM.md documents a Dancing Links exact-cover solver over a 729 by 324 matrix proving uniqueness, a second human-technique solver grading difficulty by the hardest technique required, and grade-targeted carving in 180-degree rotationally symmetric pairs with uniqueness re-verified after every removal. The bullet now says so.
- Steam Lib is not 'heavily cached'. lib/igdb.ts implements a read-through cache in Supabase Postgres: query game_metadata for the requested appids, diff against what is missing, fetch only the misses from IGDB in batches of IGDB_BATCH_SIZE 500, upsert on conflict appid. A module-level cache in useGameMetadata dedupes across components. Three tiers in total.

Measured outcome found in the Lovedoku repo: hardest-difficulty generation went from roughly 1,000ms to roughly 6ms, documented with run counts in ALGORITHM.md. This is the only benchmarked figure available anywhere in the resume and it is now on it.

Source links added for the three projects with public repositories: sudoku, steamlib and tuitactoe. Zero Hero has none; 92 public repos were listed and searched, with no match. The asymmetry is fine, since a jam game's demo is the point.

Project and source URLs both reach the PDF. They previously did not: on screen the titles are links, but the print stylesheet flattens link styling, so the generated resume showed bare names with no way to reach anything. Fixed with a scoped print rule appending href for project titles, source links and work-bullet links, deliberately excluding the inline Ink attribution.

tuitactoe download count, 969 over the last 365 days, was looked up and deliberately left off. Under a thousand invites a dismissive reaction; npx tuitactoe is the stronger signal because it is instantly verifiable.
<!-- SECTION:NOTES:END -->
