# Claude Code kickoff prompt — ready to run

Owner approved the package on 2026-11-25 with “approve and continue”; see `15-plan-review.md`. Run this in Claude Code from the project root.

---

You are implementing System Design 101, a free bilingual educational/portfolio site. First read repository instructions and `docs/planning/README.md`, `07-product-brief.md`, `03-decisions.md`, and the current approval record `15-plan-review.md`. Then read proposals 09–14 and the handoff brief. If the selected stack/scope has not actually been approved, stop before implementation and identify the missing decision.

Implement only tasks C00 and C01 from `12-claude-task-backlog.md` in this request. Inspect the actual repository/source duplication, preserve existing work and prototype behavior, document the canonical source checkout, and establish the approved static application foundation. Do not overwrite a working Site identity or deploy anything. Do not implement 18 lessons, authentication, a database, payments, admin UI, analytics collection, or a new visual redesign in this task.

Record current source files before changes. Pick supported compatible dependency versions from official docs, write and preserve a dependency lockfile; follow repository instructions for any Git operations, and document install/dev/build/check commands. Include the smallest meaningful build smoke verification. If the approved hosting requires runtime server features, flag that inconsistency instead of silently changing the architecture.

Report what changed, actual files affected, commands/checks run with outcomes, unresolved issues, and the next bounded task. Update the Markdown implementation/decision record, preserving approval history. No blanket completion claims or invented visual test results.

---

Subsequent prompts should identify one C-task, its prerequisites, approved decisions, acceptance criteria, and file scope; do not ask Claude to implement the entire backlog in one run.
