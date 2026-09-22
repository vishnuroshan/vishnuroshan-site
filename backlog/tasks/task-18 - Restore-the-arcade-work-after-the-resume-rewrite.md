---
id: TASK-18
title: Restore the arcade work after the resume rewrite
status: Done
assignee: []
created_date: '2026-09-22 18:02'
updated_date: '2026-09-22 21:02'
labels:
  - arcade
  - git
dependencies: []
priority: low
ordinal: 18000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
The arcade work was stashed so the resume rewrite lands as an isolated diff. Two stash entries hold it.

  stash@{1}  arcade wip   arcade.html, arcade.js, fonts/, vendor/, test/, scripts/build-bundles.py,
                          package.json, package-lock.json, vitest.config.js,
                          .github/workflows/test.yml, and modifications to
                          .assetsignore, .gitattributes, .gitignore, 404.html, worker/index.js
  stash@{0}  games/       DOS game assets

Restore with git stash pop twice, oldest last, or git stash apply by name. Check git stash list first; indices shift as entries are popped.

Three small index.html hunks were also part of the arcade work and were reverted separately, because index.html has since been rewritten and popping them would conflict. Re-apply these by hand:

1. Add .panel--projects to the overflow-y auto rule alongside .panel--work and .panel--skills.
2. Add .panel--projects::-webkit-scrollbar to the width 8px rule.
3. Add .panel--projects::-webkit-scrollbar-thumb to the thumb rule.
4. Re-add the Arcade entry to the Projects panel:

     <div class="job">
       <h3 class="job-title"><a href="/arcade">Arcade</a></h3>
       <span class="meta">DOS shareware games running in the browser</span>
     </div>

Items 1 to 3 may be unnecessary by then. TASK-9 covers panel scrolling and may supersede them. Item 4 should follow whatever project entry format TASK-7 settles on, rather than the original markup.

Until the stashes are restored, the live site has no /arcade route. The Arcade link was removed from index.html as part of this, so nothing on the page points at a 404.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Both stash entries restored without conflict
- [ ] #2 Arcade entry re-added to the Projects panel in the current format
- [ ] #3 /arcade route works
- [ ] #4 Panel scroll CSS reconciled with whatever TASK-9 produced
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Superseded rather than restored. The arcade idea shipped in a much smaller form: two icons in the whoami contact row that open DOOM or Wolfenstein 3D in a dialog on the same page, with the games running from archive.org's own emulator.

The stashed implementation was inspected and abandoned. It could not have shipped as it stood:
- _headers was never modified, and the vendored js-dos needs WASM compilation plus blob-URL workers, which the current script-src 'self' blocks.
- The client fetched /games/doom1.jsdos as a static asset while worker/index.js served bundles from R2 at /arcade/data/, and games/*.jsdos was gitignored, so a clean clone could resolve the bundle by neither path.
- Wolfenstein 3D existed only in markup and fake BIOS text. No bundle, no GAMES entry, no build source.

Dropped with it: the /arcade route, arcade.html, arcade.js, vendor/js-dos at 2.57 MB under GPL-2.0, games/doom1.jsdos at 2.44 MB, scripts/build-bundles.py, and the .gitattributes, .assetsignore and .gitignore rules that existed only to manage those assets.

BOTH STASHES ARE DELIBERATELY LEFT IN PLACE. They still hold two things unrelated to arcade, tracked as TASK-25 and TASK-26. Do not drop them until those are resolved.
<!-- SECTION:NOTES:END -->
