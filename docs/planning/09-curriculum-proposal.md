# Curriculum proposal — System Design 101

> Approval update — 2026-11-25: owner approved this package with “approve and continue”; see `15-plan-review.md`. Earlier proposal wording below is retained as the design rationale. Execute in the approved bounded milestones; future features and provider-specific setup checks remain subject to their stated conditions.


Date: 2026-11-25. Status: proposed, not owner-approved. No lesson content has been authored by this plan. Source shortlist is approved; claims still require chapter-level verification against actual accessible editions.

## Learning contract

Assume basic programming only. Introduce web/network/database terminology before using it to explain distributed designs. Each lesson has prerequisites, one main objective, 5–8 authored steps as a starting guideline, an original animated scene, an optional experiment when useful, a recap, 3–5 optional multiple-choice questions with explanations, and references. Length is a guideline, not an excuse to compress an important distinction.

English and Modern Standard Arabic ship together for each published lesson. Standard acronyms, product names, and code remain unchanged with translated explanations. A completed system project is not a launch requirement.

## Proposed first release: 18 lessons, zero mandatory full-system projects

| ID | Section / lesson | Learning objective and prerequisites | Authoring references to verify |
| --- | --- | --- | --- |
| F01 | Foundations: What is system design? | Identify components, workloads, constraints, and trade-offs; basic programming | DDIA introduction; interview-book introductory material |
| F02 | Requirements before architecture | Separate functional requirements from quality targets; F01 | DDIA reliability/scalability/maintainability; interview framework |
| F03 | Latency, throughput, and concurrency | Distinguish delay, request rate, work in flight, and percentiles; F02 | Networking performance; SRE latency; DDIA scalability |
| F04 | Estimating a workload | Estimate requests, storage, and bandwidth with units/assumptions; F03 | Networking performance; interview estimation examples |
| N01 | Networking: A request's journey | Explain DNS, connection/TLS, HTTP, server response; F01 | Networking application/transport chapters |
| N02 | Protocols and connections | Distinguish HTTP semantics from transport guarantees, connection reuse, timeout; N01 | Networking application and transport chapters |
| N03 | Synchronous versus asynchronous work | Trace request/response and queued background work; N02, F03 | Distributed Systems communication; DDIA messaging |
| S01 | Scaling: Vertical versus horizontal | Compare larger machines with more machines and their limits; F03–F04, N01 | DDIA scalability; interview scaling chapter |
| S02 | Load balancing and stateless servers | Route requests and explain why session placement matters; S01, N02 | Distributed Systems architecture; interview scaling |
| S03 | Cache-aside and freshness | Trace misses/hits, expiry, stale copies, and overload; F03, N01, basic key/value record introduced inline | DDIA storage/replication trade-offs; interview caching; relevant official cache docs for specifics |
| S04 | Caching nearer the user: CDN | Distinguish browser/edge caching from application caching; S03, N02 | Networking web/application material; official CDN documentation for behavior |
| D01 | Storage: Data models and database choices | Compare relational/document/key-value models and query needs; F02; introduce tables, keys, and basic queries inline | DDIA data models |
| D02 | Indexes and read/write trade-offs | Explain why indexes help some queries and cost writes/storage; D01 | DDIA storage/retrieval; database reference material verified before drafting |
| D03 | Replication and stale reads | Distinguish replicas, backups, lag, and failover; D01, F03 | DDIA replication; Distributed Systems consistency/replication |
| D04 | Partitioning and hot spots | Distribute records while preserving useful query paths; D01, D03, F04 | DDIA partitioning; Distributed Systems distribution |
| R01 | Reliability: Timeouts, retries, idempotency | Show lost responses, duplicate effects, bounded retries and backoff; N03, D01 | Distributed Systems fault tolerance; SRE overload; verified primary implementation docs |
| R02 | Availability, consistency, and partitions | Explain a concrete partition trade-off without the misleading blanket “pick any two”; D03, N02 | DDIA distributed consistency; Distributed Systems; primary CAP material verified before authoring |
| R03 | Measuring reliability | Explain service objectives, latency/error signals and safe overload behavior; F03, R01 | SRE and workbook chapters |

Sidebar sections: Foundations, Networking, Scaling, Storage, Reliability. Display prerequisites and a recommended learning path; allow free navigation without unlocking gates. Proposed dependency-respecting path: F01 → F02 → F03 → N01 → N02 → D01 → F04 → N03 → S01 → S02 → S03 → S04 → D02 → D03 → D04 → R01 → R02 → R03. Section browsing and this recommended path may differ; prerequisites remain explicit. Freeze the actual ordered syllabus before authoring and reject circular dependencies.

## Full curriculum expansion map (not a launch commitment)

| Section | Later lesson candidates |
| --- | --- |
| Foundations | Capacity versus demand; cost trade-offs; workload/read-write patterns; security/trust boundaries |
| Networking | WebSockets/SSE/polling; service discovery; gateways; rate limits; retries across service boundaries |
| Scaling | Autoscaling; backpressure; admission control; cache stampedes; cache invalidation; regional deployment |
| Storage | Transactions/isolation; durability and logs; data migrations; search indexes; object storage; backup/restore |
| Messaging | Queues versus streams; delivery semantics; ordering; consumer groups; outbox; dead-letter handling |
| Distributed Systems | Clocks; coordination; consensus; leaders; quorums; distributed transactions; failure detection |
| Reliability | Redundancy; circuit breakers; graceful degradation; deployment/rollback; incident response; disaster recovery |
| Security | Authentication/authorization; tenant isolation; secrets; abuse prevention; data protection |
| Systems | URL shortener; news feed; chat; ride-hailing; social media; notifications; file storage |
| Interview practice | Clarifying requirements, estimation drills, trade-off questions, timed case studies |

Systems follow prerequisite concepts. Start any eventual system project by defining its scope, workload, assumptions, and alternatives; avoid a single “correct diagram.”

## Source and publication workflow

1. Inventory available book editions. Do not invent page references or claim to have read physical copies.
2. For each lesson, create an evidence sheet: learning goals, claim → source/section mapping, reviewed excerpts or notes, assumptions, misconceptions, and unresolved claims.
3. Claude drafts original English content and examples. Verify claims before translation; scientific claims may need additional primary sources beyond the approved books.
4. Draft Arabic through a shared glossary; owner reviews technical equivalence, grammar, and bidi rendering. Do not translate code identifiers.
5. Validate diagrams against narration and quiz explanations against learning objectives.
6. Owner signs off technical content and both language versions. Publish only when the required translations, references, and checks pass.

## Production batches

Proof lesson: S03 (existing cache lesson), then confirm reusable format. Batch 1: F01–F04 and N01–N03. Batch 2: S01–S04 and D01–D04. Batch 3: R01–R03 plus final course consistency review. Batches are implementation checkpoints; proposed public first release contains all 18. Revisit scope explicitly if owner prefers earlier staged publication.
