# System Design 101 — confirmed product brief

Updated: 2026-11-25 (Africa/Cairo). Status: requirements recorded; concrete implementation package awaiting owner review; implementation not started. This consolidates the owner's answers from November 22, 24, and 25, including answers that could not previously be saved during a workspace outage.

## Purpose and audience

Free educational website and portfolio project. Success means learners use it and find it useful; quantitative targets are not set. Prioritize students and junior developers with relevant computing background; also serve working engineers and interview candidates. Do not assume advanced distributed-systems knowledge.

## Curriculum and learning

Accuracy, clarity, and well-structured foundations are more important than the number of projects. Complete design projects at launch can number zero, one, or more. Future examples include short URLs, news feeds, ride-hailing, chat, and social media. Interview Q&A is future scope.

The owner authorizes proposing a complete curriculum and selecting a launch subset for approval. Sidebar lessons must be grouped into sections (examples: Foundations, Scaling, Storage, Systems); exact names and lesson counts are not yet approved.

Retain step-based explanations, animated illustrations, free Next/Back progression, and optional experiments for now. Use predefined scenarios, not a capacity simulation engine. A lesson completes when the learner reaches its final step.

Claude drafts original source-grounded content for the owner's review before publishing. Content is edited through Claude Code/repository files; no admin editor. The reference shortlist is approved; identifying a book does not mean its complete contents have been read. Each lesson should distinguish verified source material, teaching simplifications, and scenario assumptions.

## Languages

Both English and Arabic at launch. Fully translate explanations and UI into Modern Standard Arabic. The owner accepted preserving standard acronyms (API/HTTP/SQL), code, and product names, with RTL surrounding interface and consistent diagram flow between languages. Keep progress tied to lesson identity, not translated titles.

## Launch features

- Sectioned lesson navigation, step progression, and lesson search.
- Guest progress in the browser; browser data clearing can erase it and automatic cross-device sync is not expected.
- Optional per-lesson “Check your understanding” quiz tab, retryable multiple-choice questions, with explanations; quiz score never gates lesson completion.
- Continue learning, source/reference blocks, and report-content-issue functionality. Reporting mechanism remains open; this is not authorization to add a backend.
- Mobile support, light/dark themes, and accessible native control behavior. Specific visual composition remains to be proposed and reviewed.

## Deferred and excluded

The initial optional-login proposal is superseded for launch: skip login/signup now. Future optional accounts must import guest progress and may support cross-device progress. No launch paid access, payment system, admin editor, bookmarks, or interview Q&A. A future feature must not force premature infrastructure.

## Visual direction

Owner allows mixing the current prototype and supplied screenshots or proposing a new direction if useful. This permits design proposals; it does not approve a specific new layout. Keep the established interaction/diagram preferences unless explicitly revised. Reference illustrations guide original vector geometry; do not copy unrelated reference-site features.

## Delivery constraints

Product name: System Design 101 (approved). Claude Code will implement it; refactor or rebuild is allowed once the final plan is agreed. No preferred technical stack yet; owner requested suggestions. Owner is sole maintainer, no launch date. Free hosting only; provider subdomain acceptable; prefer no payment card if possible. No paid deployment or card-required fallback is authorized without discussion.

## Remaining decisions

See `08-open-decisions.md`. Stack, provider, exact curriculum, and final visual baseline are not yet approved; the book shortlist is approved. Keep implementation paused while material discovery questions are settled.

## Clarifications approved — 2026-11-25

The reference shortlist is approved. Owner has physical DDIA and System Design Interview Volumes 1/2; actual editions must be checked before source-specific authoring. Assume only basic programming; introduce HTTP, databases, and networking within the curriculum. Search covers both lesson titles and explanations; excluding quiz answers was the presented recommendation and has no separate explicit confirmation. Repository is public. The choice between issue tracker and contact reporting is not yet explicit. Analytics were pending at that point; the subsequent measurement decision below supersedes that status.

## Measurement decision — 2026-11-25

Approved: basic aggregate analytics plus optional feedback. Approval follows the explanation of visits, lesson openings, final-step completion, and potential step-level abandonment patterns. No session recording, keystroke capture, or quiz-answer collection. Guest progress remains browser-local. Provider, exact event schema, retention, and feedback delivery mechanism are proposals to review before implementation; do not claim provider-specific anonymity or compliance before checking its behavior. Use free services under the existing hosting/cost constraints.

## Implementation package approval — 2026-11-25

The owner approved the complete presented direction with “approve and continue”. See `15-plan-review.md` for approved scope/architecture/provider/feedback/visual/milestone choices. Earlier pending-plan statements are superseded. Execution proceeds through bounded Claude Code tasks, beginning C00/C01. Provider accounts/configuration, repository URL, and actual book editions remain setup inputs before their respective tasks.
