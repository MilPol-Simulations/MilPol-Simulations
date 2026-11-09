# MilPol React migration — Stage 2

Migrated the **News & Updates** page (published posts and newsletter subscriptions) and **Admin article editor** (list, create, edit, delete, schedule) into React components. The existing Supabase tables, RPCs and Row Level Security are reused. No SQL changes or Resend redeployment required.

**Not production ready.** Announcements, metrics charts, Resend campaign management, voting, account profile and translations are not yet migrated. Keep the live site unchanged until those features are ported and tested.

To run: `npm install`, then `npm run dev`. To build: `npm run build`. Use `.env.local` with `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` if you need to override the existing public project settings. Never put a service-role key in the frontend.

Test using a staging domain with allowed Supabase Auth redirect URLs. Verify sign-in, admin permissions, scheduled post visibility, newsletter subscription and mobile layout before production deployment.
