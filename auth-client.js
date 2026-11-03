import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
import { SUPABASE_URL, SUPABASE_ANON_KEY, configured } from './auth-config.js';
export { configured };
export const supabase = configured ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
