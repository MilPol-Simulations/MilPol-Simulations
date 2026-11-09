# MilPol React migration — initial working foundation

This is a **first-stage React + Vite migration**, not a claim that all old site features have been ported.

## What works in React
- One React app rather than 16 separately maintained HTML pages
- Shared React navigation, responsive dropdown and footer
- Smooth React page entry/exit transitions
- Existing static page content and imagery extracted into `src/pages.json`
- Supabase sign-in, sign-up, account sign-out, and password-reset request
- Black/rivet styling and original site CSS

## Important incomplete areas
- Original page-specific JS does **not** automatically run inside React-injected HTML. Voting, dynamic CMS/news feed, admin functions, storefront, newsletter and translation controls **are not yet migrated**. They must be ported as React components and tested against your real Supabase schema.
- The original pages are preserved at `/legacy/*.html` as an interim fallback. This is intentional to avoid losing features, not the final architecture.
- `src/pages.json` is a transitional content snapshot, not final component-by-component JSX.
- The account page links to its legacy counterpart for old features.
- Test Supabase redirect URLs and password-reset callback before production deployment.
- Direct-route handling on GitHub Pages uses the included `404.html` redirect. Other hosts can use a SPA rewrite.

## Run locally
1. Install Node.js 20.19+ or 22.12+.
2. `npm install`
3. `npm run dev`
4. `npm run build`

## Deploy to GitHub Pages
Configure a GitHub Actions workflow to install dependencies and publish `dist/`. Keep the existing `CNAME` in `public/`; Vite copies it to the build output. Your DNS, Supabase project and Resend backend do not need to change just to deploy this frontend.

## Safety
The existing Supabase publishable key is reused, not a service-role key. Confirm Row Level Security policies. No secret Resend API key belongs in browser code.

## Next migration tasks
Port React components for news/CMS, voting, admin/studio tools, storefront, translations and the complete account flow. Only switch the live domain after testing these against a staging deployment.
