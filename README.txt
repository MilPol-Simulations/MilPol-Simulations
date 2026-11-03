MilPol Simulations — W-3 Rugged Website + Accounts

The original design and W-3 paid expansion wording are preserved.

SETUP REQUIRED
1. Create a Supabase project (https://supabase.com) and enable Email authentication.
2. Edit auth-config.js: add your Supabase project URL and PUBLIC publishable/anon key. NEVER put a service_role or secret key here.
3. In Supabase Auth > URL Configuration, set Site URL to your deployed HTTPS website and allow redirect URLs https://YOUR-DOMAIN/account.html and https://YOUR-DOMAIN/reset-password.html.
4. Keep email confirmation enabled and configure production email delivery (the default email sender has limits).
5. Deploy all files to your HTTPS static host. Sign-up, sign-in, password reset, and account page then work through Supabase.

INSTALLER
The supplied executable is included unchanged in downloads/MilPol Aircraft Manager.exe and linked on account.html.
IMPORTANT: On a static website, the EXE remains publicly accessible to anyone who knows its URL, even though the account page only displays the link after login. This is NOT secure download authorization. To actually restrict access, put the EXE in PRIVATE storage and serve it through a server-side endpoint that validates authentication, or a short-lived signed URL.
The executable has not been executed, audited, or code-signed here.

Initial release: W-3 + W-3RM. Small-fee expansion: W-3PL + W-3WARM.
