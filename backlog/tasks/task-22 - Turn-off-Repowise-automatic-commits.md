---
id: TASK-22
title: Turn off Repowise automatic commits
status: Done
assignee: []
created_date: '2026-09-22 19:11'
updated_date: '2026-09-22 19:16'
labels:
  - tooling
  - git
dependencies: []
priority: medium
ordinal: 22000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Repowise created a commit in this repository without being asked. Reflog entry b11931d, 'Update various cache and state files; add wikiPageIds to knowledge graph entries', appeared between two of Claude's commits. No git commit was run by Claude at that point, and the message style is Repowise's own.

The immediate consequence was that an amend intended for one commit landed on Repowise's instead. That was corrected, but the underlying behaviour remains.

.repowise is now gitignored so there is much less for it to commit, but it still rewrites the Repowise block inside .claude/CLAUDE.md on every index, and that file is tracked.

.repowise/config.yaml has no setting for this. commit_limit is how far back history is read, not a write control. The setting is elsewhere, in Repowise's global configuration or its MCP server options.

Decide whether Repowise should be allowed to commit at all. A tool interleaving its own commits with a person's makes history hard to reason about and can silently capture unrelated staged work.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 The source of the automatic commit identified
- [ ] #2 Automatic commits disabled, or a deliberate decision recorded to keep them
- [ ] #3 Decision made on whether .claude/CLAUDE.md should stay tracked given it is rewritten on every index
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Vishnu accepts Repowise making its own commits. No change. Recorded so the behaviour is not re-raised as a surprise: commits authored by Repowise will appear interleaved with his own, and .claude/CLAUDE.md is rewritten on every index.
<!-- SECTION:NOTES:END -->
