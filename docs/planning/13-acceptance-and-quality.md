# Acceptance and quality plan

> Approval update — 2026-11-25: owner approved this package with “approve and continue”; see `15-plan-review.md`. Earlier proposal wording below is retained as the design rationale. Execute in the approved bounded milestones; future features and provider-specific setup checks remain subject to their stated conditions.


Status: proposal, to be used after plan approval.

## Content correctness

Every published lesson has one explicit objective, known prerequisites, original explanations, a reference/claim evidence sheet with actual edition/section, a reviewed Arabic equivalent, and answer explanations. No fabricated page numbers; unverified claims block publication. Scenario traffic is an authored illustration; interface need not reintroduce the removed disclaimer sentence, but references/source notes document assumptions. No universal recommendations where workloads change the answer.

## Meaningful automated verification

- Content: stable unique IDs; valid prerequisites with no cycles; bilingual structure parity; scenes/anchors/routes resolve; valid answers and source metadata; draft lessons excluded from publication.
- Scenario: navigation resets transient work; pause freezes it; replay returns to start; packet outcome conservation; failed request cannot complete; miss reaches database and populates cache; hit skips database; stale copy returns old destination until refresh.
- Geometry: route endpoints match named anchors under object transforms; reverse path really reverses; failure marker uses the route destination. Test deterministic geometry rather than merely asserting a hardcoded path string exists.
- Progress: final-step completion including direct links; monotonic completed set except explicit reset; locale-independent IDs; invalid/blocked/full storage; content version migrations; no accidental clears on replay.
- Search: production static HTML indexes text from all steps; EN/AR isolation, standard acronyms, and Arabic query normalization; no quiz explanations in index by proposed policy.
- UI end-to-end: navigation and hashes; localized routes; free progression; input-safe arrow keys; optional quiz retry; theme persistence; no-script text access; reduced motion; analytics failure does not affect learning.

Use Vitest for pure logic/schema checks and Playwright for meaningful browser workflows and reference comparisons, with versions verified during setup. These tool choices are proposed, not installed.

## Browser review matrix

Representative widths: 360, 768, 1280, and 1920 CSS px; include a short desktop viewport and 200% zoom. Check Chromium and Firefox, plus WebKit smoke coverage. Inspect the proof lesson in both languages and both themes. Verify diagram labels are readable, platform/server connectors attach correctly, crowd figures stay on their platform, counters do not reappear, sidebar/progress/nav remain reachable, and no layout unexpectedly overlaps.

## Accessibility and performance targets

Propose WCAG 2.2 AA for applicable UI: contrast, keyboard/focus, touch targets, correct lang/dir, no keyboard trap, screen-reader reading order, concise static diagram description, and a reduced-motion alternative. Full conformance requires review, not merely an automated score.

Propose initial Lighthouse mobile performance/accessibility/SEO >=90 under a documented controlled profile, treated as a diagnostic target rather than a real-user guarantee. Propose median of three cold lesson-route lab runs with LCP <=2.5 s and CLS <=0.1 under an agreed profile; measure hydration/animation responsiveness on a real mid-range phone before setting hard JS budgets. Do not load all scenes/search/quiz code on every marketing page. One animation scheduler per scene, bounded packet count, no per-frame React rerender of the whole interface, and suspend work in background tabs.

## Release gate

All 18 proposed lessons in both locales, technical/language owner reviews recorded, CI green, no known blocking functional/visual defects, analytics configuration/disclosure reviewed, feedback route tested without sending unrequested messages, free-hosting setup verified, rollback documented, and production smoke test passed. If public release scope changes, explicitly update and approve it; do not silently ship fewer lessons.

## Operational handover

Document adding a lesson/translation/scene/quiz, updating sources, local commands, CI/build/indexing, analytics/feedback settings, dependency updates, production deployment, rollback, and progress-schema migrations. Free services must be removable through adapters/configuration; no automatic paid upgrades.
