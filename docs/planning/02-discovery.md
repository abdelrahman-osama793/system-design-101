# Discovery questionnaire

For each answer record: answer, status (open/proposed/approved/deferred), reason, and related decision ID. “Not in MVP” is a valid answer. Ask questions in stages; do not require every future-feature question to be settled before a bounded MVP can start.

## Round 1 — product boundaries (ask first)

1. What is the primary outcome: public educational product, personal portfolio, commercial course business, internal teaching tool, or another goal? What would success look like three months after launch?
2. Who is the first audience: beginners, working backend engineers, senior interview candidates, or another group? Which language(s) launch first?
3. What is the first release: polish this single caching lesson, launch several specified lessons, or build a reusable course platform? Name must-have lesson topics and any features beyond lessons.
4. Is the first release free, paid, freemium, or undecided? Does it need accounts, saved progress across devices, or payments at launch?
5. Will Claude implement this through Claude Code in this repository, a VS Code integration, or another workflow? Should it refactor the existing prototype or rebuild from an agreed specification? Any stack preferences or constraints?
6. What is the target launch date and approximate budget for development, hosting, and paid services? Is the owner the sole maintainer?

Answers: pending.

## Round 2 — curriculum and learning experience

- Learning objectives for each lesson; depth and prerequisites; expected lesson length.
- Authored step-by-step demonstrations versus parameter-driven simulations. What input changes should affect traffic, capacity, queues, failures, cache behavior, and recovery?
- Which controls are essential? Pause, replay, speed, traffic slider, keyboard shortcuts, touch interactions, zoom/pan?
- Must experiments remain optional and never block progression? Are quizzes or completion checks wanted?
- How is progress earned: opening a step, finishing a lesson, answering questions, or explicit completion? Does restarting preserve it?
- Is the navigation hierarchy courses → sections → lessons → steps, or something else? Are direct links and resume supported?
- Are practice questions, design labs, cheat sheets, search, bookmarks, certificates, or AI tutoring in scope? Explicitly defer unneeded features.
- Who writes content and who reviews technical accuracy? What is the publishing cadence?
- How will updates affect stored progress and existing lesson links?
- Which reference images are authoritative? Which screen sizes and light/dark examples must be approved?
- Keep current color families, typography, brand name, attribution, and illustrations? What can change?
- What data should be visible on each component? Keep/remove cache hits? Distinguish user population, request rate, queue size, latency, and cumulative counts.

Answers: pending.

## Round 3 — business, operations, and content ownership

- Who owns the product, domain, deployment accounts, and source repository? Public or private source?
- What differentiates this product, and how will learners find it? SEO, communities, social content, or existing audience?
- What matters most: lesson completion, returning learners, interview preparation outcomes, signups, or revenue? What analytics are acceptable?
- If monetized: subscription or one-time purchase, currencies/markets, free preview, refunds, purchase access, and billing ownership. Defer detailed payment design if payments are excluded.
- Does the site need contact, feedback, bug reports, support, or moderation? Who handles them?
- Are screenshots only references? Confirm permission/licensing for any external text, illustrations, fonts, or assets actually reused.
- What user data will be collected, retained, exportable, or deletable? Are children an intended audience? Which markets need launch review?
- Content authoring: repository files, Markdown, structured lesson files, headless CMS, or custom editor? Who can draft, review, publish, and roll back?
- Accessibility, supported devices/browsers, Arabic/RTL requirements, and performance expectations.

Answers: pending.

## Round 4 — architecture and delivery

- Approved hosting destination: existing Sites project, Vercel, another provider, or undecided? Domain and recurring cost limit?
- Frontend framework/build tooling or plain HTML/JS? TypeScript? Existing organizational conventions?
- SVG versus Canvas versus actual 3D: is editable isometric SVG sufficient? Expected diagram size, component count, and mobile density?
- How should lesson content and diagram scenes be represented, validated, versioned, and localized?
- Shared simulation engine or separate authored scenarios? Deterministic replay, reproducible failures, and seeded randomness?
- Is client-side state sufficient? If backend is required, choose API style, storage, identity provider, authorization, and migrations only after the requirements justify them.
- Local progress versus signed-in progress: sync, merge conflicts, anonymous-to-account migration, offline behavior, and data deletion.
- Static rendering/SEO needs, canonical lesson URLs, social previews, sitemap, and redirects from prototype hashes.
- Dependency/licensing constraints; browser support; image/font loading; mobile performance budget.
- Tests: content/schema validation, simulation invariants, route/progress logic, keyboard behavior, meaningful end-to-end tests, and visual comparisons.
- CI checks, preview environments, production access, release approvals, rollback, monitoring, backups, and incident ownership.
- Claude permissions, allowed commands, secret handling, review process, branch strategy, and milestone size.

Answers: pending.

## Approval gates

A. Product scope and explicit exclusions.
B. Curriculum structure, interaction rules, and visual acceptance examples.
C. Architecture, content format, hosting, costs, and data handling.
D. Implementation backlog and acceptance criteria.
E. Release readiness and any required deployment approval.

## Consolidated answers — 2026-11-25

The owner has answered the product-boundary and follow-up questionnaires. See [confirmed product brief](07-product-brief.md) for all current answers and [remaining decisions](08-open-decisions.md) for the genuinely unanswered items. Earlier “Answers: pending” labels are historical, not instructions to re-ask settled questions. The latest guest-only launch decision supersedes the earlier login-at-launch preference.
