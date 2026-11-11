# Stage 7 — GitHub Pages navigation fix

Fixes links that returned to the homepage after Stage 6. Uses HashRouter so GitHub Pages can serve every React route from the root. All nav links now resolve as `https://milpol-sim.com/#/development`, `/#/w3rm`, etc. The existing legacy .html links in page content are rewritten. Direct old-style URLs use the 404 redirect to the hash route.

**Install:** Upload `src/main.jsx` and `public/404.html` to the existing Stage 6 repository (or replace the whole project). Wait for GitHub Actions, then hard-refresh. No Supabase/Render/Resend settings change.

Photos from Stage 6 are preserved. Check both new .webp files exist in `public/assets`.

**Note:** Hash URLs are an intentional GitHub Pages compatibility trade-off. Later migration to hosting with SPA fallback can restore clean URLs.
