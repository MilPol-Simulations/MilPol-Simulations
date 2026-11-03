// Use only your Supabase public publishable/anon key, NEVER a service-role key.
export const SUPABASE_URL = 'https://hgfhcrqaspzaotuofpdz.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_cgibdbZU3YMbPnZSqT_Fdg_7UmUV2CD';
export const configured = SUPABASE_URL.startsWith('https://') && !SUPABASE_ANON_KEY.startsWith('YOUR_');
