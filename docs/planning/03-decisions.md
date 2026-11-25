# Decisions and discussion record

## Status definitions

- Established preference: owner requested this for the current prototype; see `01-current-product.md`.
- Proposed: suggestion awaiting a decision.
- Approved: owner explicitly accepted the identified decision and scope.
- Deferred: intentionally outside the current milestone.
- Superseded: replaced by another recorded decision; retain history.

## Production decision register

| ID | Decision | Status | Owner answer / approval evidence |
| --- | --- | --- | --- |
| D-001 | Product purpose | Approved | Free education + portfolio; success = use and usefulness |
| D-002 | Audience and languages | Approved | Students/juniors first, working engineers/interview candidates included; English + MSA Arabic with standard technical identifiers retained |
| D-003 | Launch curriculum | Partly approved | Foundations accuracy first; project count can be zero; propose syllabus and launch subset for review |
| D-004 | Monetization, identity, progress | Approved / deferred | Free; local guest progress; complete on final step; authentication deferred, future import required |
| D-005 | Claude workflow | Approved approach | Claude Code; rebuild/refactor permitted after plan agreement; no stack selected |
| D-006 | Hosting and maintenance constraints | Approved | Solo; no deadline; free hosting/subdomain; no-card preferred if possible |
| D-007 | Scenario model | Approved | Predefined demonstrations |
| D-008 | Content process | Partly approved | Sectioned lessons; Claude drafts, owner reviews; repository editing, no admin UI; exact sources/syllabus open |
| D-009 | Visual direction | Approved flexibility | Mix current prototype and references or propose new direction; final design not yet approved |
| D-010 | Stack and provider | Approved direction | Astro/TypeScript/React/SVG/Pagefind; Cloudflare Pages Free; GoatCounter; package approved 2026-11-25 |
| D-011 | Data/accessibility/analytics | Partly approved | Local progress approved; analytics unresolved; bilingual/mobile requirements retained |
| D-012 | Implementation/release milestones | Open | No implementation until material questions and plan are settled |

## Discussion log

### Planning kickoff — 2026-11-22, Africa/Cairo

Owner request: create an implementation plan for Claude; ask necessary business and technical questions; document discussions and approvals in Markdown.

Actions: reviewed prototype README and directory structure; recorded current behavior and explicit historical design preferences; drafted a staged discovery questionnaire, decision register, implementation roadmap, and Claude brief.

Decisions: documentation and discovery are authorized. Production scope, framework, backend, monetization, budget, timeline, and deployment destination are not approved. No website code changed for this planning kickoff.

Next: collect round 1 answers, then refine the scope before selecting architecture.

## Entry template

Date/time:
Owner prompt / answer:
Options discussed and recommendation:
Decision and status:
Approval evidence (quote or precise message reference):
Affected requirements / files:
Next open questions:

## Consolidated discussion — 2026-11-25, Africa/Cairo

Recovered pending documentation of the November 22/24 answers after the workspace became available. Owner prioritizes source-grounded foundations over launching completed system projects; approves sectioned lessons, predefined scenarios, English and fully translated MSA Arabic, local progress and final-step completion, search, optional quizzes, and repository authoring. Initial optional-login-at-launch preference is superseded by the explicit instruction to defer login/signup; future login imports guest progress.

Latest answers authorize researching/proposing books, Claude-authored drafts reviewed by the owner, a proposed curriculum and launch subset, standard acronyms/code/product names in Arabic content, consistent diagram flow with RTL UI, and retryable optional multiple-choice quizzes with explanations. Owner accepted Continue learning, source blocks, and issue reporting; bookmarks/interview Q&A remain later. Owner allows mixed/new visual direction, prefers no-card free hosting where possible, and names the product System Design 101.

Research: author/publisher sources checked for DDIA, Distributed Systems, Computer Networking, Google SRE books, and System Design Interview volumes. Bibliography remains proposed. Reading book descriptions is not technical validation of all curriculum claims.

Remaining: source availability, prerequisite depth, search coverage, reporting destination, and analytics preference. Next deliverables are curriculum, architecture/provider, visual, and implementation proposals for approval. Website code unchanged.

### Reference and product clarifications — 2026-11-25

Owner approves all five proposed reference groups, owns physical DDIA and System Design Interview Volumes 1/2, and may have a Distributed Systems PDF whose location/edition is unknown. No file search authorized by this statement. Physical editions not confirmed. Owner accepts basic programming as the only prerequisite and title-plus-explanation search, and confirms public source repository. Owner asks for clarification of analytics; no measurement provider or collection is authorized. Public issues versus contact link remains a recommendation to resolve in the concrete plan.

Files updated: reference books, product brief, open decisions, this discussion log, and Claude brief. No application code changed.

### Measurement approval — 2026-11-25

Owner answer: “Basic analytics + optional feedback”. Approved capability: basic aggregate usage/completion analytics and voluntary feedback, as described in the preceding explanation. Exclude screen/session recording, keystroke capture, and quiz-answer tracking. Provider, exact events/retention, feedback mechanism, and data handling remain subject to a concrete technical proposal. No application tracking was installed.

Discovery status: sufficient owner direction to prepare the promised curriculum/launch subset, stack/hosting options, visual proposal, and Claude implementation milestones. Do not begin implementation. Public issue reporting is still a proposed mechanism, not an explicitly selected destination.

### Implementation proposal prepared — 2026-11-25

Owner instruction: “continue”. Prepared curriculum (18 proposed lessons, zero mandatory full-system projects), Astro/React/TypeScript/SVG/Pagefind static architecture, Cloudflare Pages Free recommendation, GoatCounter event analytics, public-GitHub feedback proposal, visual baseline, quality criteria, bounded Claude backlog, and gated kickoff prompt. Verified relevant provider/framework capabilities using official documentation. Provider/account-specific no-card onboarding and exact event retention remain setup checks, not asserted facts.

Approval state: all implementation-package choices are proposed; existing product approvals remain unchanged. No app code/dependencies/accounts/deployment changed. Next: owner reviews `15-plan-review.md` and confirms or changes package rows.

### Implementation package approved — 2026-11-25

Owner response: “approve and continue”. Explicit approval covers the review package: 18 bilingual lessons across five sections, structured rebuild, Astro/TypeScript/React/SVG/Pagefind, Cloudflare Pages Free direction, GoatCounter bounded aggregate analytics, optional helpfulness/public GitHub issue feedback, mixed workshop/reference visual baseline, and first bilingual-lesson proof before mass authoring. C00/C01 is the first bounded Claude request. Account signup/paid services/deployment are not part of that task; future features remain deferred.

Handoff actions: finalized approval records, added root `CLAUDE.md`, ready-to-use kickoff instructions, and an implementation status register. No website code or dependencies changed. No Claude process has been launched by this handoff.
