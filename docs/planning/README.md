# System Design 101 — implementation planning

Status: implementation plan approved 2026-11-25. Claude Code handoff ready; application implementation has not started. Selected stack: Astro + TypeScript + React lesson workspace + SVG + Pagefind; Cloudflare Pages Free; GoatCounter analytics.

## Working agreement

Use these Markdown files as the handoff between the owner, ChatGPT, and Claude. Record the substance of every planning discussion, the owner's answers, proposals, rejected alternatives, and explicit approvals. Never turn an unanswered question or recommendation into an approved requirement. Keep historical decision entries; supersede them explicitly instead of deleting them. Remove credentials and other secrets from discussion records.

Read in this order:
1. [Current product and established preferences](01-current-product.md)
2. [Business and technical discovery](02-discovery.md)
3. [Decision register and discussion log](03-decisions.md)
4. [Proposed implementation roadmap](04-roadmap.md)
5. [Claude handoff](05-claude-brief.md)

After each planning exchange, update the relevant answers in `02-discovery.md`, append a concise discussion entry in `03-decisions.md`, and revise the roadmap and Claude brief where necessary. A reference screenshot establishes a visual direction only; it does not approve that reference site's business model, features, content, or implementation.

Product name: System Design 101 (owner-approved 2026-11-25). “System Stories” remains the historical prototype label.

Current approved requirements: [Product brief](07-product-brief.md). Proposed research: [Reference books](06-reference-books.md). [Remaining decisions](08-open-decisions.md). The product brief supersedes unanswered placeholders in the historical questionnaire; preserve discussion history.

## Concrete implementation package — ready for review

Prepared and explicitly approved 2026-11-25; see owner approval record.

- [Curriculum and launch subset](09-curriculum-proposal.md)
- [Architecture and free hosting](10-architecture-proposal.md)
- [Visual direction](11-visual-direction-proposal.md)
- [Claude task backlog](12-claude-task-backlog.md)
- [Acceptance and quality](13-acceptance-and-quality.md)
- [Analytics and feedback](14-analytics-and-feedback.md)
- [Owner decision table](15-plan-review.md)
- [Claude kickoff prompt](16-claude-kickoff-prompt.md)

Start execution with task C00/C01 via the kickoff prompt. Read the approved decision table and detailed plans first. No application code, dependencies, accounts, or deployments changed during planning.

## Execution entry points

- Root `CLAUDE.md`: persistent project instructions for Claude Code.
- [Kickoff prompt](16-claude-kickoff-prompt.md): first bounded implementation request.
- [Implementation status](17-implementation-status.md): update after each task; do not mark work complete without evidence.
