# System Design 101 — Claude Code instructions

## Approved task context

This is a free English/Arabic system-design education and portfolio site. The owner approved the implementation package on 2026-11-25 with “approve and continue”; see `docs/planning/15-plan-review.md`. Do not re-ask settled scope/stack decisions.

At session start read `.chat-history/log.md` if present, then `docs/planning/README.md`, `07-product-brief.md`, `03-decisions.md`, `15-plan-review.md`, and `17-implementation-status.md`. Read detailed documents 09–14 before the corresponding task. Later explicit owner instructions take precedence.

First implementation request: execute `docs/planning/16-claude-kickoff-prompt.md`, limited to C00 and C01. Report results before taking on later milestones. The rest of backlog 12 is not a single-task instruction.

## Selected architecture and scope

- Astro static output, TypeScript, React for the interactive lesson workspace, original isometric SVG, Pagefind search.
- Proposed source structure and content validation are specified in architecture document 10, now approved.
- 18 launch lessons in English and Modern Standard Arabic, sectioned navigation, predefined scenarios, optional multiple-choice quizzes, local guest progress and resume.
- Complete on final step; no quiz gate. Preserve progress across language changes. Native slider/text-input keys must not trigger lesson navigation.
- Cloudflare Pages Free, GoatCounter basic analytics, helpfulness feedback and public GitHub issue templates. Verify real setup before enabling; no paid upgrades.
- No launch auth/signup, application backend/database, CMS/admin editor, payments, WebGL, or quantitative traffic simulation.
- Future login imports guest progress; do not build accounts now.

## Working rules

Determine the canonical source/worktree before restructuring; root `dist/` and `.sites-checkout/dist/` are existing prototype copies, not an approved long-term dual-edit workflow. Preserve unrelated user work, current Site identity, and recoverable prototype source. Build output must not become the sole maintained source. Do not deploy as part of C00/C01.

Separate validated content, scene state, diagram geometry, render components, local progress, and analytics. Use named connection anchors; request/response animation must use the visible connector geometry. User/server connector joins platform back-right edge midpoint to server bottom-left edge midpoint with one server-facing arrowhead. Preserve rounded reference-inspired shapes, semantic theme hues, red/white × failures (~400 ms), neutral lines, and full diagram-area grid. Do not reintroduce removed sent/failed/completed/read badges or removed text.

Content must be original and source-verified. The bibliography is approved but actual owned editions must be checked; do not fabricate citations or claim physical books were read. Owner reviews technical content and Arabic before release. Final visual baseline requires real browser review; never substitute syntax checks for it.

Keep secrets out of public source/docs. Do not collect quiz answers, keystrokes, session recordings, or local progress into analytics. Keep provider-specific code behind an adapter and disable it in dev/preview.

Run meaningful checks appropriate to the task; report exactly what ran. Update implementation status and decision/discussion documents after each milestone. Keep proposals, approvals, and completed implementation distinct. Do not launch parallel agents unless explicitly authorized by owner or applicable repository instructions.
