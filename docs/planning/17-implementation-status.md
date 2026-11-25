# Implementation status

Updated: 2026-11-25. C00 and C01 delivered; awaiting owner review before C02.

| Tasks | Status | Evidence / next action |
| --- | --- | --- |
| Planning and package review | Complete | Owner “approve and continue”; `15-plan-review.md` |
| Claude Code handoff | Ready | Root `CLAUDE.md` and kickoff prompt 16 |
| C00 — Canonical source / baseline | Done, pending owner review | Canonical checkout = project root, now a Git repo pushed to GitHub `system-design-101`; see C00/C01 record below |
| C01 — Static project foundation | Done, pending owner review | Astro 7 static + React 19 + TypeScript 6 on Node 24; `npm run verify` passes; see record below |
| C02–C07 — Platform / cache proof | Not started | Follow backlog after prerequisite completion |
| C08 — Bilingual proof review | Not started | Real browser review and owner content/language approval |
| C09–C11 — Curriculum batches | Not started | After first-lesson baseline review |
| C12 — Analytics / feedback | Not started | Verify actual configuration; use real repository destination |
| C13–C14 — Release / deployment | Not started | Quality gate and actual free hosting setup |

## Per-task record template

Task ID and date:
Behavior delivered:
Canonical checkout and files changed:
Checks executed and results:
Visual/content review evidence or limitations:
Open issues:
Next bounded task:

Do not mark a task complete merely because code was written. Record passing acceptance checks and honest verification gaps. Keep approval history in `03-decisions.md`.

## C00/C01 record — 2026-11-25

Task ID and date: C00 + C01, 2026-11-25.

Behavior delivered: canonical source established; Astro static foundation with one placeholder page and a minimal React island proving hydration. No lessons, layout, styling, analytics, search or deployment.

Source inventory before changes:
- Root `.git/` was an empty directory, not a repository. Replaced by a real repo (`main`).
- Root `dist/` (prototype: `index.html` 11 195 B, `app.js` 20 496 B, `style.css` 25 057 B) was byte-identical to `.sites-checkout/dist/`; `README.md`, `.openai/hosting.json`, and `generated_images/` were also identical in both.
- `.sites-checkout/` is its own Git repo with zero commits. Left untouched and gitignored here; it holds the existing Site identity.
- `system-stories-workshop.zip` is an older prototype snapshot (all three files differ from `dist/`).
- `.agents/`, `.aws/`, `.codex/`, `workshop/dist/` were empty; left in place, gitignored.
- `generated_images/` holds three AI-generated design-direction concept images; committed as design history.

Canonical checkout and files changed:
- Canonical source: project root (`/home/osama/Study/system-design-website`), remote `github.com/abdelrahman-osama793/system-design-101` (public). `.sites-checkout/` is not an editable source.
- Moved `dist/` → `prototype/dist/` (byte-identical), `README.md` → `prototype/README.md` (serve path updated), zip → `prototype/`.
- Added `.gitignore`, `.nvmrc` (24), `package.json`, `package-lock.json`, `astro.config.mjs` (`output: 'static'`), `tsconfig.json`, `src/pages/index.astro`, `src/components/IslandCheck.tsx`, `scripts/smoke.mjs`, new root `README.md` (commands).
- Versions: Node 24.22.3, npm 11.19.1, astro 7.4.13, @astrojs/react 7.1.9, react/react-dom 19.3.1, typescript 6.0.3, @astrojs/check 0.9.12. Astro 7 requires Node ≥22.23.4 (local default was 20.20.2, EOL). TypeScript 7 not used: `@astrojs/check` peer range is `^5 || ^6`.

Checks executed and results:
- `rm -rf node_modules && npm ci` — 0 vulnerabilities.
- `npm run verify` — `astro check` 0 errors/warnings/hints (5 files); `astro build` 1 static page; smoke script asserts heading and `client="load"` island in `dist/index.html` — passed.
- `astro preview` + built-in browser at `http://localhost:4321/`: page rendered and island text switched to “Interactive layer ready.”, confirming React hydration.

Visual/content review evidence or limitations: none applicable; placeholder only, no visual baseline claimed.

Open issues:
- Root `.openai/hosting.json` (copied from the Site config) points `static.directory` at `dist`, which is now Astro output, not the prototype. Do not publish from the root with that config until the owner decides the Site's future.
- `nvm` default alias is still Node 20; run `nvm use` in this folder (or `nvm alias default 24`).
- No CI workflow yet; add with C02 tests (`npm ci && npm run verify`).
- Book editions not yet inventoried (DDIA edition, SDI Vol 1/2 printing); needed before C08.

Next bounded task: C02 — content and localization contract (schemas, stable IDs, validation, bilingual fixture, Vitest).
