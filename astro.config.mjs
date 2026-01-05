// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://magicat-ai.github.io',
  base: '/europol-site',
  integrations: [mdx()],
  server: {
    port: 4322
  },
  vite: {
    plugins: [tailwindcss()]
  }
});