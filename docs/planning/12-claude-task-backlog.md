# Claude Code task backlog

> Approval update — 2026-11-25: owner approved this package with “approve and continue”; see `15-plan-review.md`. Earlier proposal wording below is retained as the design rationale. Execute in the approved bounded milestones; future features and provider-specific setup checks remain subject to their stated conditions.


Status: proposed. Each task is a separate bounded Claude request/review; do not paste this backlog as “build everything”. Owner approval of the plan is required before implementation. No dates/effort guarantees.

| Task | Work and deliverables | Acceptance / dependency |
| --- | --- | --- |
| C00 — Baseline and source ownership | Read planning files and repository instructions; inspect Git/worktrees and `dist`/`.sites-checkout`; document actual canonical checkout and source/build output distinction; preserve prototype reference and unrelated work | Canonical source explicit; no accidental Site identity changes or lost files; inventory book editions before detailed citations |
| C01 — Project foundation | Set up approved Astro/TypeScript/React structure, Node/package versions compatible with verified docs, lockfile, local dev/static build, initial CI commands | Repeatable clean install/build; no server-only runtime dependency; no dependency churn during implementation |
| C02 — Content and localization contract | Define validated course/lesson/step/scenario/quiz/reference schemas; stable IDs; localization helpers, glossary, routing | Reject duplicate/missing IDs, broken references, cycles and translated-step mismatches; one small test fixture in both languages |
| C03 — Layout proof | Build header, grouped sidebar, fixed navigation/progress, theme/language controls; scene and narration placeholders | Desktop/mobile and both directions usable; creator URL/new tab; keyboard focus; no forced clipping |
| C04 — Geometry/components | Create rounded platform/people/server/cache/database SVG components, anchor registry, connection function, packet types and theme tokens | Exact user/server facing-edge midpoint test plus real visual check; no duplicate visible return line; no removed stats badges |
| C05 — Cache lesson vertical slice | Migrate the six-step caching narrative to authored scenes/actions; single state machine for step/pause/replay/traffic/miss/hit/stale/failure | Visible paths and packet routes identical; cleanup on navigation; deterministic outcomes; no success after failure; no drift after replay |
| C06 — Progress and quizzes | Local adapter, continue learning, final-step completion; optional multiple-choice tab with feedback/retry | Language-independent completion; corruption/blocked-storage handling; no quiz gate; no accounts; no quiz responses sent to analytics |
| C07 — Search and static reading | Generate complete lesson/transcript HTML; Pagefind build and localized search | Search finds text from a non-initial step in EN and AR, Arabic diacritics/common forms and API terms tested; quiz answers not indexed by proposal |
| C08 — First-lesson owner review | Book/source evidence sheet, correct English, reviewed MSA Arabic; browser snapshots across agreed modes | Owner signs off technical claims and visual/language baseline; no mass copying before approval |
| C09 — Curriculum batch 1 | F01–F04 and N01–N03; scenarios, translation, quizzes, references | Every lesson passes source/review/localization checks; dependency order verified |
| C10 — Curriculum batch 2 | S01–S04 and D01–D04, reusing proof lesson S03 | No copied bookkeeping bugs; storage terminology introduced before use; all lessons reviewed |
| C11 — Curriculum batch 3 | R01–R03; full prerequisite and glossary consistency review | No “exactly once” or CAP oversimplifications; retry/failure assumptions explicit |
| C12 — Measurement/feedback | Implement approved provider adapter, bounded events, analytics control and disclosure; public issue templates/link after actual repo URL agreed | No sensitive payloads/query terms/answers; optional scripts cannot break reading; prefilled feedback requires learner submission; preview/test tracking disabled |
| C13 — Release review | Type/build/schema/tests, browser accessibility/performance, mobile/RTL, source/license/privacy review; release notes | Acceptance checklist satisfied; blockers documented; bilingual 18-lesson content approved |
| C14 — Deployment and handover | Configure approved free static host, Git build/preview, production and rollback; verify actual no-card/free setup | Public URL verified, no paid features, origin choice stable for progress, CI required before release; owner has maintenance instructions |

## Prompt contract for every task

State objective, prerequisites, approved decisions, files in scope, exclusions, checks, and stop conditions. Claude reports changed files, observable behavior, executed checks, visual evidence/limitations, and pending issues. Update decision/discussion records. Do not describe checks that were not run.

## Sequencing

C00→C01→C02→C03/C04→C05→C06/C07→C08. Then C09–C11 in reviewed content batches, C12, C13, C14. C03/C04 describe separate work packages, not authorization for multiple agents. No autonomous delegation assumed.

## Future backlog (not part of first release)

Optional accounts and guest-progress import, cross-device sync, bookmarks, more quiz formats, interview Q&A, expanded systems curriculum, content corrections workflow, and optional user-controlled progress export/import. Do not build speculative backend infrastructure now.
