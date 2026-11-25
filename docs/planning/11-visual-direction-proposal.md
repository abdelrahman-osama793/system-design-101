# Visual direction — proposed review baseline

> Approval update — 2026-11-25: owner approved this package with “approve and continue”; see `15-plan-review.md`. Earlier proposal wording below is retained as the design rationale. Execute in the approved bounded milestones; future features and provider-specific setup checks remain subject to their stated conditions.


Status: proposal. Keep product interactions already agreed; no application styles changed by this plan.

## Direction

Combine the current workshop layout with the reference images' rounded isometric primitives. Use a calm, readable educational workspace with original SVG artwork. Preserve blue API servers, green cache, purple database, red overload/failure, and neutral user platforms. In dark mode change luminance/contrast while keeping semantic hue. Do not copy reference-site branding, typography, text, or the entire interface.

## Layout

Desktop: compact header (product identity, search, language, theme, creator link), sectioned sidebar with independently scrolling lessons and anchored progress, dominant diagram workspace, and a readable right panel. Breadcrumb and chapter/step metadata belong to the diagram header. Explanations/optional experiments occupy the right panel; “Follow one request” and “What changed” sit at its bottom. Hide the latter on a baseline step with no change. Back/Next remain in a fixed bottom bar; reserve its exact height in content layout.

Use remaining viewport height for the diagram, with a full-area subtle grid. Compact diagram scale is a review baseline from the earlier 30% reduction, not a hard width rule for every device. Favor readable labels over preserving tiny diagrams. On intermediate screens reduce sidebar before forcing narrow text. Mobile: drawer sections, diagram then explanation/experiments, accessible controls, fixed navigation with safe-area padding. At zoom/short heights allow scrolling; never clip critical content to force a viewport fit.

## Shape and connector contract

Raised user platform with representative people and audience label; smooth rounded blue blocks with centered upright server glyph/label; simple database cylinder; rounded cache block. Original assets share perspective, stroke weight, corner radius, shadow direction, and baseline. Statistics previously removed stay removed. Cache-hit display is provisional and must not clutter the scene.

The user/server reference connector joins the midpoint of the platform's back-right edge to the midpoint of the server's bottom-left edge, diagonally upward toward the server, with one server-facing arrowhead. Return dots use the same geometry in reverse; do not draw a second user/server line or use center-to-center clipping as a substitute for the requested facing-edge midpoints. Other connections use named anchors and scene-aware routing; review each scene with/without cache.

Lines stay neutral. Request = solid blue dot; response = hollow orange-ring dot; failure = red circle/white × at the receiving failure location, quick fade with a ~400 ms lifecycle. A failed request does not emit a success response. Color alone is not the only failure cue. Named packet types must remain distinguishable in both themes.

## Arabic and accessibility

Modern Standard Arabic for UI/content, RTL layout and correct text alignment. Diagram flow remains unchanged across languages. Use a reviewed glossary, bidi isolation for acronyms/code/numbers, and font coverage suitable for Arabic. Do not mirror server icons or move arrowheads solely because locale changes. Left/Right keys remain the owner's explicitly requested Back/Next shortcuts; label/document them and leave native sliders/editing unaffected.

Target WCAG 2.2 AA where applicable. Body text at least 16px and regular control labels at least 14px; use rem. Focus visibility, semantic buttons, keyboard navigation, and labeled theme/language controls. Static scene plus readable request sequence in reduced-motion mode; pause animation when hidden. Show original creator credit opening the owner's website in a new tab.

## Required visual review artifact before mass authoring

Review the same lesson in: English/light, English/dark, Arabic/light, Arabic/dark, desktop and mobile. Include one user, a crowd, a miss/hit, stale data, and failed database reads. Capture actual implementation views for review; diagram syntax checks alone do not prove geometry. Owner approves the first bilingual lesson before propagating its design to the remaining 17.
