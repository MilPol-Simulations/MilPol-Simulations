import { defineConfig } from 'vite';

// GitHub Actions sets VITE_BASE_PATH to /repository-name/ for project Pages.
// Locally and on the final custom domain, use /.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  build: { outDir: 'dist' },
});
