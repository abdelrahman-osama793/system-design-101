# Current product and established preferences

## Observed implementation

> Update 2026-11-25 (C00): the prototype now lives in `prototype/dist/` (moved byte-identical from root `dist/`); the root is the canonical Astro source. `.sites-checkout/` remains an untouched, untracked copy.

The current project is a dependency-free HTML/CSS/JavaScript prototype in `dist/`, with corresponding files in `.sites-checkout/dist/`. Its six chapters teach short-link resolution, repeated traffic, a database bottleneck, cache-aside reads, freshness/TTL, and a recap. The source of truth between the two directories must be resolved before production development. Do not maintain two editable copies as a permanent architecture.

There is no application backend, authentication service, persistent course database, payment system, or content editor in the inspected prototype. A hosting project is configured, but prior publication attempts were blocked by restricted network access. Do not assume it is live.

## Explicit owner requests already reflected in the prototype

These are established prototype preferences, not approval of a complete production specification.

- Isometric 3D-looking vector illustrations with rounded shapes, raised user platforms, upright people, centered component icons/labels, soft shading, and clear outlines, guided by the owner's screenshots.
- User count labels plus a representative number of people; figures need not equal the displayed population. Increasing traffic increases concurrent animated request markers.
- Failed requests use a red circle with a white × at the failure location. The failure indicator now lasts about 400 ms.
- Neutral connection lines. Requests, responses, and failures have distinct moving marker styles.
- User-to-server connector: one diagonal from the midpoint of the user platform's back-right edge to the midpoint of the server's bottom-left edge, following the supplied reference. Responses travel in reverse on that path. Do not substitute a corner or a side-center attachment.
- Full illustration-area grid in both themes, rather than a grid limited to SVG bounds.
- Diagram was reduced roughly 30% from its earlier size. Diagram workspace uses remaining desktop height.
- Icon-only light/dark toggle, saved preference, system-theme fallback. Component colors keep their identity between themes, including red overload states.
- Fixed Back/Next bar; Left/Right keyboard navigation must not hijack sliders or text inputs.
- Sidebar progress remains visible at the bottom; the chapter list scrolls independently.
- Breadcrumb and chapter metadata sit inside the diagram header. Large chapter title/subtitle above the diagram were removed.
- “Follow one request” and “What changed” appear at the bottom of the right column. “What changed” is hidden for the initial baseline chapter.
- Removed the external statistics container and the sent/failed/completed/database-read badges. The audience count and cache-hit badge currently remain; their final production treatment is open.
- Removed the model disclaimer sentence, header tagline, and sidebar motivational sentence at the owner's request.
- Header credit: “Created by Abdelrahman Osama” links to https://aerosama.vercel.app/ in a new tab with appropriate opener protection.

## Verification limits and production issues to resolve

Previous edits had syntax, structural, and simulated-DOM logic checks. Recent visual geometry was not verified in a live browser in this session. Pixel alignment, responsive behavior, theme contrast, small-screen readability, and animations still require browser review against owner-approved examples.

Traffic behavior is illustrative: failure outcomes are currently deterministic in the overload chapter, not computed from a capacity/queueing model. Product discovery must decide whether to retain authored demonstrations or build an actual simulation. Removing the visible disclaimer does not justify presenting fabricated benchmark claims.

Do not infer a requirement for true WebGL/3D rendering from “3D-looking”: the current implementation uses editable SVG.
