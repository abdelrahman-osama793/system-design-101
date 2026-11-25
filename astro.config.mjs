// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Static output only: Cloudflare Pages serves dist/ with no server runtime.
export default defineConfig({
  output: 'static',
  integrations: [react()],
});
