---
id: TASK-25
title: Salvage the worker test scaffolding from the arcade stash
status: To Do
assignee: []
created_date: '2026-09-22 21:02'
labels:
  - testing
  - salvage
dependencies: []
priority: medium
ordinal: 25000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
The repository has no tests. stash@{1} contains a complete Cloudflare Workers test setup that was written alongside the arcade work but is independent of it.

Files: package.json, package-lock.json, vitest.config.js, test/worker.test.js, .github/workflows/test.yml. Built on @cloudflare/vitest-pool-workers with miniflare bindings, and the CI workflow runs on push and pull request.

Reusable as-is: the /api/resume suite, which covers Turnstile verification and R2 retrieval, and the static asset suite.

Needs changing before it lands:
- The /api/phone suite is dead. That endpoint was removed when the phone number was deleted; the tests will fail against the current worker.
- vitest.config.js binds PHONE_NUMBER in miniflare. Remove it.
- The /arcade/data suite tests a worker route that no longer exists and is not coming back.
- .assetsignore in the stash excludes package.json, package-lock.json, vitest.config.js, test and .cache from the Workers asset upload. Those exclusions are still wanted and must come across.
- The CI workflow uses npm ci --legacy-peer-deps, which suggests a peer dependency conflict between vitest 4 and the pool-workers version. Verify it still installs cleanly.

Recover the files with git show stash@{1}^3:<path> rather than popping the stash, since popping will conflict with worker/index.js and .gitignore, both of which changed after the stash was made.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Test scaffolding committed and npm test passes locally
- [ ] #2 Dead phone and arcade suites removed
- [ ] #3 .assetsignore exclusions carried over
- [ ] #4 CI workflow green on a pull request
<!-- AC:END -->
