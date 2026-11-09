# MilPol React Stage 5

This is a full replacement for Stage 4 in the React development repository. Back up Stage 4 before uploading. Keep the live domain/repository unchanged until tested.

## Added
- Compact burger menu at all viewport widths, with keyboard Escape close and route-change close.
- Native React aircraft store with the two planned W-3 packages and nonfunctional purchase buttons removed (sales are not open).
- Native React account dashboard with email, sign-out, administrator link (when authorised), and Aircraft Manager download.
- Native React admin voting totals using the existing `milpol_admin_vote_totals` Supabase RPC; Stage 4 article CMS, announcements, metrics and newsletter controls retained.

## Deployment and checks
- GitHub Pages: Settings > Pages > Source: GitHub Actions.
- `vite.config.js` has `base: '/'` for a root custom domain. For a github.io project subpath, change `base` to '/YOUR-REPOSITORY/' and configure domain accordingly.
- Add the installer yourself at `public/downloads/MilPol Aircraft Manager.exe` (it is excluded from this ZIP).
- Test sign-in, admin role, vote totals, article editing, newsletter actions, store, mobile navigation and asset paths before launch.
- Do not put Resend or Render server-side credentials in this repository.
- Supabase RPCs and RLS must already be configured on the server. No backend mutations were performed.
- Legacy pages/scripts are intentionally retained for unported translations and behaviours; do not delete them yet.

## Limitations
- Render purchase/licence flow remains independent and is not called by this storefront.
- Multilingual support and some original styling/content still require verification/migration.
- This package is not a claim of end-to-end production testing.
