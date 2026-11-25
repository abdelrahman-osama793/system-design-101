# Architecture and free-hosting proposal

> Approval update — 2026-11-25: owner approved this package with “approve and continue”; see `15-plan-review.md`. Earlier proposal wording below is retained as the design rationale. Execute in the approved bounded milestones; future features and provider-specific setup checks remain subject to their stated conditions.


Date: 2026-11-25. Status: proposal for owner review. No framework installed, provider account created, or code migrated. Pin supported package versions when implementation starts; do not infer versions from this document.

## Recommended approach

A structured rebuild of the prototype's internals while preserving approved behaviors and original reusable vector artwork: Astro static generation + TypeScript, React for the interactive lesson workspace, authored SVG scenes, build-time validated repository content, Pagefind search, browser-local progress, Cloudflare Pages hosting, GoatCounter analytics, and GitHub issues for voluntary feedback. No runtime application API/database/auth for launch.

Why: most content is author-written and bilingual; static output makes it portable and searchable. A single React lesson island owns controls, active step, diagram state, and narration so they cannot drift between disconnected components. Astro layouts render surrounding content; React is not loaded for purely informational pages. SVG is sufficient for the approved isometric appearance; no WebGL engine is needed.

## Alternatives

| Option | Fit | Trade-off / recommendation |
| --- | --- | --- |
| Astro + React + TypeScript | Static educational content plus bounded interactive workspace | Recommended; introduces two component systems but keeps responsibility boundaries explicit |
| React + Vite static SPA | Strong fit if the whole product is an app-like workspace | Viable; requires extra prerender/indexing work for full lesson search and metadata; fewer framework concepts |
| Next.js | Useful if server features become core later | Not needed for the guest-only authored-content launch; static export is possible but server-only capabilities must not sneak in |
| Retain plain JS prototype | Lowest migration overhead for one lesson | Existing direct DOM mutations, mixed content/state, duplicated source, and repeated CSS overrides need substantial refactoring before 18 bilingual lessons |

## Boundaries and planned modules

| Module | Responsibility |
| --- | --- |
| Course content | Stable section/lesson/step IDs, order, prerequisites, localized text, references, quiz data, review status |
| Scenario definitions | Predefined state snapshots, named actions, workload presentation, routes, durations and outcomes |
| Diagram renderer | Reusable people/platform/server/database/cache glyphs, theme tokens, bounds and named anchors |
| Connection geometry | Derive one shared visible path and request/response motion paths from named facing-edge anchors; no arbitrary duplicated coordinates |
| Lesson state machine | Active step, play/pause/replay, optional actions, transient failures; deterministic cleanup on navigation |
| Progress adapter | Versioned local storage, completion and resume; independent of translated slugs and analytics |
| Localization | Localized strings/glossary, explicit lang/dir, bidi-isolated technical tokens; scene direction stays fixed |
| Search | Static content index and localized search UI |
| Analytics adapter | Optional allowlisted events, no direct provider calls throughout UI |

Proposed source locations: `src/components/lesson/`, `src/components/diagram/`, `src/lib/scenarios/`, `src/lib/progress/`, `src/lib/analytics/`, `src/content/lessons/en/`, `src/content/lessons/ar/`, `src/content/scenes/`, `src/i18n/`, `src/pages/[locale]/learn/`, `tests/`, `docs/`. No directories here are created as application code by this planning task.

## Content contract

Use validated YAML/JSON for structured lesson steps and scenario declarations; Markdown for explanations and source notes where useful. Astro collections can load local Markdown/YAML/JSON. Each lesson has a stable ID, section ID, explicit prerequisites, localized title/summary/steps, source IDs, ordered stable step IDs, diagram states, and optional quiz questions with answer explanations. No raw arbitrary executable JavaScript in lesson files.

Validate unique IDs, no prerequisite cycles, referenced scene entities/actions, bilingual step parity, reference existence, quiz correctness/explanations, and publication-review status. Do not make Arabic a machine-translated fallback for published English lessons.

A lesson route is `/en/learn/<lesson-slug>/` or `/ar/learn/<lesson-slug>/`, with optional `#step-<stable-step-id>`. Language switching retains lesson/step identity. Proposed root is a language chooser with remembered preference; no forced geolocation detection. Map prototype hashes to the migrated caching lesson when its location is finalized.

Render the complete approved lesson text into generated HTML, including non-initial steps, for accessibility/no-JS reading and indexing. Progressive enhancement shows the selected step. Add a full readable transcript if needed; ensure it is generated from the same source rather than maintaining a second text copy. Pagefind must index lesson titles/explanations from all steps, not just React's first mounted view. Proposed quiz explanations are excluded from search until the owner asks otherwise.

## Local progress contract

Store a schema version, completed lesson IDs, last-opened lesson/step IDs, and theme/language preferences. Reaching the final step marks completion; a direct final-step link also counts under the approved rule. Moving backward does not revoke completion. Replays do not clear progress; offer a separate confirmed reset action. Invalid/missing storage must fail gracefully without breaking lessons. Switching language does not duplicate completion. Progress is browser/origin-local, not cross-device; clearing data or changing deployment origin can lose access to it. Provide a user-initiated JSON export/import as a future enhancement, not an unapproved launch feature.

Keep a storage interface so a future account adapter can merge completed sets and import guest progress; no account scaffolding/API database now.

## Hosting comparison and limits checked 2026-11-25

| Provider | Assessment |
| --- | --- |
| Cloudflare Pages Free | Recommended for this static build, `pages.dev` URL, Git integration and preview deployments. Official limits currently include 500 builds/month, one build at a time, 20-minute build timeout, 20,000 files, 25 MiB per asset, and 100 retained deployments. Never require Functions/R2/paid add-ons for the proposed launch |
| Vercel Hobby | Viable alternative familiar from owner's portfolio; official Hobby policy limits use to personal non-commercial projects. Re-check eligibility if business purpose changes. No need for Vercel Functions |
| Existing Sites project | Keep historical identity intact; do not deploy or replace it as part of this proposal. Current production direction is a separately agreed public Git repository workflow |

Prefer card-free signup. Official free-plan pages do not establish every future/account-specific onboarding requirement: verify actual setup before committing, stop and discuss any card/billing requirement, never enable paid upgrades automatically. Free plans can change; document migration using the same static output. Re-check relevant limits at deployment.

## Evidence (official documentation)

- Astro islands: https://docs.astro.build/en/concepts/islands/
- Astro content collections: https://docs.astro.build/en/guides/content-collections/
- Astro internationalization: https://docs.astro.build/en/guides/internationalization/
- Pagefind multilingual search: https://pagefind.app/docs/multilingual/
- Cloudflare Pages: https://www.cloudflare.com/products/pages/
- Cloudflare Pages limits: https://developers.cloudflare.com/pages/platform/limits/
- Vercel Hobby: https://vercel.com/docs/plans/hobby
- GoatCounter events: https://www.goatcounter.com/help/events

## Launch exclusions

No backend API, database service, Redis, NestJS server, CMS, auth provider, payment integration, real traffic simulator, or arbitrary diagram editor. These are exclusions of this proposed architecture, not claims that the educational lessons should omit those subjects.
