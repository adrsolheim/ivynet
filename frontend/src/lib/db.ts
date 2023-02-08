import { createClient, type TypedSupabaseClient } from '@supabase/auth-helpers-sveltekit'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const localSupabaseUrl = import.meta.env.VITE_LOCAL_SUPABASE_URL
const localSupabaseAnonKey = import.meta.env.VITE_LOCAL_SUPABASE_ANON_KEY
const devenv = import.meta.env.VITE_DEV

export const supabaseClient: TypedSupabaseClient = devenv ? createClient(localSupabaseUrl,localSupabaseAnonKey) : createClient(supabaseUrl, supabaseAnonKey);



//if (devenv) {
//    supabaseClient = createClient(localSupabaseUrl,localSupabaseAnonKey)
//}
//else {
//    supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
//}
