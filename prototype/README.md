# System Stories — Workshop prototype

A dependency-free, responsive six-chapter system-design lesson. Serve `prototype/dist/` with any static server, for example `python3 -m http.server 5173 --directory prototype/dist`. `system-stories-workshop.zip` is an older snapshot of the same prototype (all three files differ from `dist/`).

The lesson follows resolving a short link, repeated traffic, a database bottleneck, cache-aside reads, freshness and TTL, and a recap. Next always works; experiments never block progression. Chapters have hash links, the illustration traces requests and responses in sequence, and pause/replay and reduced-motion preferences are supported.

This is an educational model, not a benchmark or a complete production design. The name is provisional. All diagrams are editable SVG and HTML, rather than flattened mockup images.
