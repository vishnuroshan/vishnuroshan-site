---
id: TASK-21
title: Deploy the site and publish the new resume
status: To Do
assignee: []
created_date: '2026-09-22 19:11'
labels:
  - deploy
  - ops
dependencies: []
priority: high
ordinal: 21000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Everything is committed but nothing is live. Three separate steps, in order.

1. Deploy the Worker. The wrangler session has expired: 'Not logged in. Your auth token has expired and could not be refreshed, and the environment is non-interactive.' Vishnu runs wrangler login in an interactive terminal, then the deploy can proceed.

2. Verify the resume download works. The CSP fix in _headers is the reason it was broken: connect-src did not allow challenges.cloudflare.com, so Turnstile could load its script and its iframe but could not complete its challenge request, and no token was ever produced. Confirm after deploying by clicking the button, not by probing the endpoint.

3. Upload the new PDF to R2. The Worker serves from the bucket, not from the repo:
     const object = await env.RESUME_BUCKET.get(RESUME_KEY);
   Bucket vishnuroshan-site, key Vishnu-Roshan-Resume.pdf with a capital V. The repo file is vishnu-Roshan-Resume.pdf with a lowercase v, so the case must be corrected on upload or the download returns 404.

Until step 3, the live download still serves the old Zety resume, which names IQVIA as the direct employer and misspells Railsfactory.

Vishnu reviews the generated PDF before step 3.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 wrangler authenticated
- [ ] #2 Worker deployed with the CSP fix
- [ ] #3 Resume button verified working in a browser
- [ ] #4 New PDF reviewed by Vishnu
- [ ] #5 PDF uploaded to R2 under the exact key Vishnu-Roshan-Resume.pdf
- [ ] #6 PHONE_NUMBER secret removed from the Cloudflare dashboard
<!-- AC:END -->
