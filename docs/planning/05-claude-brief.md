# System Design 101 — Claude implementation brief

Status: discovery draft. Use now for read-only assessment and planning. Do not treat open questions as implementation authorization.

## Context

We are building System Design Website. The current “System Stories” prototype teaches caching through six interactive chapters. Read `docs/planning/README.md`, then all linked planning documents before starting.

## Immediate task

1. Inspect the project and identify source duplication, application boundaries, current behavior, and verification gaps.
2. Read the decision register. Separate approved requirements from established prototype preferences and unapproved proposals.
3. Identify questions that materially change architecture or scope. Ask for missing answers instead of inventing requirements.
4. Propose the smallest implementation milestone consistent with the approved scope. Include files, rationale, acceptance criteria, and verification.
5. Wait for the owner's scope/architecture approval before a broad rebuild, dependency migration, backend addition, or paid-service setup. Bounded work already explicitly authorized may proceed.

## Implementation rules once approved

- Work in the agreed canonical checkout. Preserve unrelated user changes.
- Keep lesson content, scene geometry, traffic/state logic, and interface components separate.
- Preserve explicitly retained UX requirements in `01-current-product.md`.
- Build diagram objects as reusable components with named connection anchors and bounds. Derive visible wires and packet paths from the same connection definition. Match the approved reference images in browser review.
- Isometric SVG is the current technique, not an approved final stack constraint. Do not introduce WebGL or a backend without a justified approved requirement.
- Keep semantic component colors consistent across themes; use tokens rather than scattered hard-coded colors.
- Do not reintroduce removed statistics badges, disclaimers, or headlines without owner approval.
- Do not add reference-site features merely because they appear in screenshots.
- Model scenario values honestly and apply the approved authored-demo/simulation policy.
- Verify meaningful behavior with appropriate checks. Visual work requires real browser inspection; report any unavailable verification accurately.
- Keep secrets outside source and planning records. Use the approved deployment and access settings.
- Update planning documents after decisions and milestones; never claim an unresolved proposal was approved.

## Required milestone report

State implemented behavior, files changed, checks run and outcomes, visual-review evidence or limitations, unresolved issues, and the next proposed task. Do not claim publication unless deployment is verified.

## Fill after discovery

Primary audience: pending.
Launch scope/exclusions: pending.
Language(s): pending.
Business model: pending.
Approved architecture and rendering: pending.
Content authoring: pending.
Progress and identity: pending.
Hosting/domain: pending.
Budget/timeline: pending.
Definition of done: pending owner approval.

## Current requirements override — 2026-11-25

Read `07-product-brief.md`, `06-reference-books.md`, and `08-open-decisions.md` before the historical placeholders above. They contain the consolidated owner answers. Guest-only launch, bilingual sectioned lessons, predefined scenarios, search, optional quizzes, and repository editing are confirmed. Stack, provider, exact syllabus, source selection, and final visual proposal need agreement. Do not start implementation yet.

## Latest discovery clarification — 2026-11-25

Bibliography shortlist approved; confirm actual editions before citations. Teach network/web/database basics assuming basic programming only. Search titles and explanations. Repository is public. Analytics await owner understanding/decision; public issue reporting remains proposed. Do not add tracking or search the owner's machine for PDFs without a scoped request.

## Measurement update — 2026-11-25

Basic aggregate analytics and optional feedback are approved capabilities. Propose provider, exact events, retention, and feedback mechanism within free-service constraints. Exclude session/screen recording, keystroke capture, and quiz-answer collection. This supersedes the earlier pending measurement choice. Next work is the reviewable implementation plan, not application changes.

## Concrete implementation package — 2026-11-25

Read proposals 09–14 and approval table 15. Use kickoff prompt 16 only after applicable choices are approved. The task backlog supersedes the earlier generic roadmap for detailed task order; its proposed public scope is 18 bilingual lessons, with a single bilingual caching proof before mass authoring. No new approval has been inferred from “continue.”

## Approved execution update — 2026-11-25

The owner has explicitly approved the package with “approve and continue”. Earlier read-only/discovery restrictions are superseded for the bounded C00/C01 implementation request. Root `CLAUDE.md`, `15-plan-review.md`, `16-claude-kickoff-prompt.md`, and `17-implementation-status.md` define the current entry point. Follow approved constraints and report actual verification; no need to re-ask approval for the selected stack or scope.
