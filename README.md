# System Design 101

Free English/Arabic system-design lessons. Static Astro site (TypeScript, React lesson workspace, SVG). Planning and decisions: [`docs/planning/`](docs/planning/README.md).

## Requirements

Node 24 LTS (`.nvmrc`; run `nvm use`). npm with the committed `package-lock.json`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Clean install from the lockfile |
| `npm run dev` | Local dev server (http://localhost:4321) |
| `npm run check` | Astro + TypeScript diagnostics |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve the built `dist/` |
| `npm run verify` | check + build + build smoke test (`scripts/smoke.mjs`) |

## Layout

- `src/` — application source (canonical).
- `prototype/` — original “System Stories” prototype, kept as a behavior/visual reference; not edited further.
- `dist/` — build output, never edited or committed.
- `.sites-checkout/` — separate local Site checkout, untracked here.
