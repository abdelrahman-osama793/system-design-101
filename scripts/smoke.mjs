// Build smoke check: the static build produced a page with the expected heading and a hydrating React island.
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
assert.match(html, /<h1>System Design 101<\/h1>/, 'heading missing from dist/index.html');
assert.match(html, /<astro-island[^>]*client="load"/, 'React island not emitted');
console.log('smoke: dist/index.html OK');
