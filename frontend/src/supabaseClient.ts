import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const localSupabaseUrl = import.meta.env.VITE_LOCAL_SUPABASE_URL
const localSupabaseAnonKey = import.meta.env.VITE_LOCAL_SUPABASE_ANON_KEY
const devenv = import.meta.env.VITE_DEV

export let supabase;

if (devenv) {
    supabase = createClient(localSupabaseUrl,localSupabaseAnonKey)
}
else {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
}
