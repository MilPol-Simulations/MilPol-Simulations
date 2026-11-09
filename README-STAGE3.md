# MilPol Stage 3 – React consolidation

This is a development-repository package, not a live-site replacement.

## Changes
- Consolidated React entry point at `src/main.jsx` (removed conflicting root copies).
- Installed native React news and admin article components under `src/components/`.
- Reused existing Supabase client and existing table names.
- Fixed GitHub Pages repository basename and deployment Vite base path.
- Kept legacy assets and scripts for unfinished features.
- Kept original site in `public/legacy` for reference.
- Excluded custom-domain `CNAME` from development.

## Deployment
Replace development repository contents with this package. GitHub Pages must deploy through GitHub Actions. The workflow sets `VITE_BASE_PATH` from repository name. For local dev, `npm install` then `npm run dev`.

## Still to migrate
Account profile/dashboard features, voting, full i18n, site-wide announcements, Resend campaign management, statistics, and legacy interactive widgets. Do not delete legacy code yet.

## Important
Supabase policies must enforce admin rights server-side. The UI's admin check alone does not secure data. Validate authentication, CMS and newsletter operations in your own Supabase project before production deployment.
