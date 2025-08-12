// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Static by default (SSG), but individual pages can opt into SSR
  output: 'static',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  },
  // Optional: Add site URL for SEO
  site: 'https://your-domain.com'
});