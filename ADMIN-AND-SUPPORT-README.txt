MILPOL ADMIN DASHBOARD + FAQ/SUPPORT

1. Upload all changed files to the ROOT of the GitHub Pages repository.
2. Supabase > Authentication > Users: copy your account UUID.
3. Supabase > SQL Editor: run SUPABASE-ADMIN-SETUP.sql (after existing voting SQL).
4. In SQL Editor, execute: insert into public.milpol_admins(user_id) values ('YOUR-REAL-ACCOUNT-UUID');
   Do not run the commented placeholder as-is.
5. Sign in to your MilPol account and visit /admin.html. The account page includes a link.
6. /support.html is public and linked from the navigation and footer.

SECURITY: the admin dashboard is protected by a server-side RPC membership check.
Hiding a link is NOT security. The RPC only returns aggregate counts.
No secret or service-role key belongs in website JavaScript.
The SQL must be executed by a trusted project owner.

NOTE: This was syntax/static checked but not tested against your live Supabase instance.
