import {createClient} from '@supabase/supabase-js';
export const supabase=createClient(import.meta.env.VITE_SUPABASE_URL||'https://hgfhcrqaspzaotuofpdz.supabase.co',import.meta.env.VITE_SUPABASE_ANON_KEY||'sb_publishable_cgibdbZU3YMbPnZSqT_Fdg_7UmUV2CD');
