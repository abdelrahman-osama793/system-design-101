# Proposed implementation roadmap

Status: draft. Estimates and final tasks depend on discovery; no dates or stack are committed.

## Phase 0 — agree the product

Answer round 1, choose a bounded MVP, list exclusions, define success and launch constraints. Then settle learning behavior, visual examples, content ownership, and architecture questions that affect that scope.

Deliverables: approved product brief, decision records, acceptance criteria, and updated Claude brief. Exit: approval gates A–D are explicit. An unanswered future feature may be deferred instead of blocking the MVP.

## Phase 1 — establish a maintainable foundation

Inventory current source and identify the canonical working directory. Preserve a reference of current behavior. Consolidate duplicated source through an agreed workflow without deleting the only working copy. Set up the approved framework or retained buildless project, development commands, file structure, and checks. Separate lesson content, diagram geometry, simulation/state transitions, and interface rendering.

Deliverables: runnable project, developer documentation, one approved content/scene schema, and repeatable preview. Exit: existing lesson can render in the new structure with no unrelated visual changes.

## Phase 2 — prove one complete lesson

Implement the six-chapter caching lesson end to end using the reusable structure. Refine all components against approved reference images. Use geometry-defined connection anchors, rather than repeated ad hoc path edits. Keep visible paths and packet motion on the same geometry. Define pause, replay, chapter reset, traffic, cache hit/miss, stale data, and failure lifecycles explicitly.

Exit criteria:
- Navigation, direct links, experiments, and failure behavior follow the approved rules.
- Arrows attach to the approved facing-edge midpoints; no floating, intersecting, or hidden markers.
- Small and large audiences scale the illustration and traffic as specified.
- Request/response/failure styles remain distinct in both themes.
- Layout works at agreed screen sizes; fixed navigation/progress do not cover content.
- Keyboard controls respect native controls and editing; reduced-motion behavior is usable.
- Owner reviews real browser previews for both themes and approves the visual baseline.

## Phase 3 — extend to the approved course scope

Add only approved initial lessons. Introduce course navigation, lesson URLs, completion tracking, and search only where approved. Validate content through a shared schema and technical review. Demonstrate that another lesson can be added without rewriting the rendering engine.

## Phase 4 — add approved product services

Conditional work: accounts, cross-device progress, CMS, payments, feedback, or analytics. Skip the entire phase if the approved MVP does not need them. Each included service needs data/access rules, failure handling, cost review, and appropriate tests.

## Phase 5 — prepare launch

Validate lesson correctness, responsive behavior, accessibility, performance, metadata, licensing, and required policy pages. Run CI and browser checks, create a deployment preview, document runtime configuration and rollback, and resolve release blockers. Deploy using the approved service and audience. Verify deployment and provide handover instructions.

## Claude task sizing and review

One task should produce one reviewable result: for example scene schema, connector geometry, theme tokens, or one lesson interaction. Each task states approved requirements, affected files, exclusions, acceptance checks, and completion evidence. Review the result before increasing scope. No autonomous agent delegation is assumed; decide it explicitly if wanted.

## Risks to resolve

- Expanding into a full learning platform before validating one lesson.
- Choosing backend/auth/payment infrastructure before scope requires it.
- Treating illustrative values as measured production data.
- Repeated geometry patches without reusable anchor definitions.
- Declaring visual completion using only syntax or mocked-DOM checks.
- Losing decisions between ChatGPT and Claude or maintaining divergent source copies.

## Scope correction — 2026-11-25

Use `07-product-brief.md` as the current requirement baseline. Build source-backed, bilingual foundations before prioritizing complete design projects. Include grouped sections, guest-local final-step progress, search, optional multiple-choice quiz tab, Continue learning, references, and the agreed reporting mechanism. Login/signup, guest import, and cross-device sync are deferred to future work; no launch CMS or payments. Remaining phases are draft until curriculum, architecture, visuals, and milestone acceptance are approved.

## Detailed roadmap now available — 2026-11-25

See `09-curriculum-proposal.md` for proposed 18-lesson launch and `12-claude-task-backlog.md` for tasks C00–C14, with first bilingual-lesson review before content batches. `13-acceptance-and-quality.md` defines release checks; `15-plan-review.md` records pending package approval. These detailed proposals supersede generic phase descriptions where scope differs.
