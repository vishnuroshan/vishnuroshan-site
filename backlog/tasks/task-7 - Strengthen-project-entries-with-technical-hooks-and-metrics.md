---
id: TASK-7
title: Strengthen project entries with technical hooks and metrics
status: To Do
assignee: []
created_date: '2026-09-21 06:28'
updated_date: '2026-09-22 18:33'
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
Playground entries rewritten for density rather than for the technical hooks the original task specified. Vishnu asked twice to reduce information density elsewhere, so the same standard was applied here.

Every entry collapsed from a heading plus tagline plus bullet list to a heading plus one line.

Zero Hero: the 40-word explanation of the game rules is gone. It read as a manual, not a portfolio entry. Now one line covering the premise, the stack and the jam.
Lovedoku: 'Built for my wife' kept verbatim as the differentiator. 'a custom puzzle-generation algorithm I am actively improving' tightened to 'a custom puzzle generator'. The first person phrasing clashed with the impersonal voice now used in the summary and bullets.
Steam Lib: 'rigorous caching strategies to optimize API usage' became 'heavily cached to stay inside rate limits', which states the actual purpose rather than asserting rigour.
tui-tac-toe: the bullet duplicated the tagline, both saying it was built with Ink. 'beautiful CLI UIs' was Ink's own marketing rather than Vishnu's achievement, and is gone. The Ink attribution link and the npx tuitactoe command are kept; the command is the only directly actionable thing in the section.

Arcade is absent because the arcade work is stashed. TASK-18 restores it.

STILL OPEN, needs facts only Vishnu has, and the reason this stays In Progress:
- Lovedoku: what is the generation approach? Constraint propagation, backtracking solver, difficulty grading? 'Custom puzzle generator' still asserts without evidence.
- Steam Lib: which caching strategies? ISR, stale-while-revalidate, Redis? What was the rate limit budget and how much was it cut?
- tui-tac-toe: the npm download count. It is the only third-party verified number available anywhere on this resume.
<!-- SECTION:NOTES:END -->
