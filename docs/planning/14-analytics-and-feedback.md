# Analytics and feedback proposal

> Approval update — 2026-11-25: owner approved this package with “approve and continue”; see `15-plan-review.md`. Earlier proposal wording below is retained as the design rationale. Execute in the approved bounded milestones; future features and provider-specific setup checks remain subject to their stated conditions.


Approved capability: basic aggregate analytics plus optional feedback. This provider/event design remains proposed.

## Recommendation

Use the hosted GoatCounter service for one modest public educational website. Official current pages describe a free donation-supported service for reasonable public usage and document page views plus events. This permits actual lesson events, unlike assuming every page-view analytics product has arbitrary events. Do not self-host a new analytics server for a solo static MVP.

Cloudflare Web Analytics is an alternative for page/performance statistics; do not select it on the assumption that it supplies the required custom lesson events. Use one provider, not both.

## Allowlisted payload design

| Measurement | Trigger | Send | Do not send |
| --- | --- | --- | --- |
| Page view | Public lesson/landing load | Canonical pathname without query/hash | Arbitrary URL params, search terms, identifiers |
| Lesson start | First entry into a lesson in a tab/session | Event path built from approved stable lesson ID and locale | Persistent user/session ID, full browser progress |
| Lesson completion | First transition to final step in that tab/session | Approved lesson ID and locale | Quiz answers, names, email, free text |
| Helpful / not helpful | Optional explicit button | Bounded lesson ID, locale, yes/no event | Written comments or identity |

Proposed launch deliberately excludes step-by-step tracking and individual learner funnels. Deduplicate within session memory/sessionStorage without persistent analytics identity. Aggregate starts/completions are event counts, not proof of learning or unique-user conversion rates; direct final-step links/repeats/blockers affect interpretation. Do not couple completing a lesson to successful analytics delivery.

## Feedback without an application backend

At lesson end show optional helpful/not-helpful controls. For detailed comments/corrections, propose “Report an issue” linking to the actual public GitHub repository's issue template, prefilling lesson ID/locale/step only. Learner reviews/submits it themselves; require no automatic transmission of local progress or personal data. Explain that GitHub feedback is public and creating an issue generally requires a GitHub account; lessons remain guest-accessible. Actual repository URL and this mechanism require owner agreement. No private contact/email destination has been supplied; do not invent one.

## Collection and privacy review

GoatCounter documents aggregate storage, browser/location/referrer metadata, and processing to count visits. Aggregate reporting must not be described as “no data collection.” Review exact settings and privacy policy; disable unnecessary dimensions where supported, strip query/hash, and suppress referrer if not needed. Set a proposed 90-day retention target only if the service supports it; otherwise disclose the actual retention and seek agreement rather than claiming the target is enforced. Keep dashboard private. No session recording, keystroke capture, quiz-answer capture, or sensitive event data.

Provide analytics on/off control and an accurate English/Arabic explanation; determine consent requirements for actual configured service/markets before enabling. Do not make blanket legal compliance promises. Disable analytics on local/dev/preview deployments; provider blockers and network failures must not degrade lessons. Owner account setup, actual no-card/free onboarding, and exact configuration are a release checkpoint, not something verified by this plan.

## Official sources checked 2026-11-25

- Hosting/pricing: https://www.goatcounter.com/
- Events: https://www.goatcounter.com/help/events
- Privacy/data handling: https://www.goatcounter.com/help/privacy
- Terms/reasonable public usage: https://www.goatcounter.com/help/terms
- Cloudflare page/performance analytics alternative: https://developers.cloudflare.com/web-analytics/about/
