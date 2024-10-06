import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://dan-collins-dev.github.io',
  integrations: [svelte(), mdx()],
});