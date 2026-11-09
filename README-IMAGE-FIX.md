# Stage 2 — GitHub Pages image-path fix

Upload **the contents** of this folder to your React development GitHub repository (not the ZIP itself). Replace existing files.

Changes:
- GitHub Actions sets `VITE_BASE_PATH` automatically to the repository name.
- Vite builds under that base path.
- React Router uses the same basename.
- Navigation logo and images in migrated page HTML resolve to the correct `/repository-name/assets/...` URL.
- CSS and favicon links in `index.html` use Vite's `%BASE_URL%` placeholder.
- The `public/CNAME` file is omitted from this **development** package to protect the live domain.

**Important:** GitHub repository Settings > Pages > Build and deployment > Source should be **GitHub Actions**. Then commit/push to main and wait for deployment.

When migrating to the live custom domain, change the workflow build environment to `VITE_BASE_PATH: /` and restore `public/CNAME` containing `milpol-sim.com`.

Note: The legacy HTML content is still under migration; this fixes common asset-path issues, not every feature of the old website.
