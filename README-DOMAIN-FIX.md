# MilPol Stage 3 — Custom-domain asset path fix

This package fixes the blank screen caused by generated JS/CSS URLs containing `/MilPol-Simulations/` when the site is served at `https://milpol-sim.com/`.

Changes: `vite.config.js` uses `base: '/'`; `.github/workflows/deploy.yml` no longer overrides the base path.

Install by replacing the files in the React repository and committing. Check GitHub Actions for a successful deployment, then hard refresh the site.

IMPORTANT: This package is for a site served at the ROOT of a custom domain. If your React site is instead served at `https://USERNAME.github.io/REPO/`, the base must be `/REPO/` and the deployment workflow adjusted accordingly.

Do not alter Fasthosts DNS, GitHub Pages custom-domain settings, or the live site's CNAME without confirming which repository currently serves milpol-sim.com. The package does not contain a CNAME.
