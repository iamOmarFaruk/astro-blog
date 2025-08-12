// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Static by default (SSG), but individual pages can opt into SSR
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  // Optional: Add site URL for SEO
  site: 'https://your-domain.com'
});