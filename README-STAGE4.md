# MilPol React — Stage 4 integration migration

This is a complete replacement of Stage 3 source files, intended for the **development repository only**. Keep the live site and a backup until browser testing succeeds.

## Implemented in React
- Studio statistics: existing `milpol_studio_metrics` RPC.
- Site announcement editor and public banner: existing `milpol_announcements` table with enabled/date windows.
- Newsletter campaign controls: existing `milpol-newsletter` Supabase Edge Function; each click triggers one server-defined batch, with confirmation.
- Future-project voting: existing `future_project_votes` table; signed-in upsert.
- Store sign-in gate, with purchasing explicitly unavailable pending verification of Render purchase endpoints.
- Password recovery request and new-password form via Supabase Auth.
- Existing Stage 3 news/CMS, authentication and account fallback retained.

## Not migrated or verified
- Render licence purchase server, payment processing, licence issuance, Resend purchase emails: no verified API endpoints or backend source supplied. Do not expose Render/Resend secrets in React.
- Full legacy account dashboard, translation system, and some legacy HTML interactions.
- Existing backend permissions/RLS/Edge Function behaviour must be tested against the deployed environment.
- React pages may still include legacy markup as reference. Do not delete `public/legacy` yet.

## Deployment
Use GitHub Pages source **GitHub Actions**, with the included `.github/workflows/deploy.yml`. The current `vite.config.js` assumes the custom domain is served at the domain root (`base: '/'`). For a repository-subpath development URL, change `base` to `/<repo-name>/` and verify routing. `public/CNAME` is intentionally absent.

## Security
Supabase publishable key is public by design; enforce RLS and admin authorization on the backend. Keep Resend and Render credentials server-side. Never send an unverified licence request from the browser.
