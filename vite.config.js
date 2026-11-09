import { defineConfig } from 'vite';

// Custom-domain GitHub Pages site: assets are served from the domain root.
export default defineConfig({
  base: '/',
  build: { outDir: 'dist' },
});
