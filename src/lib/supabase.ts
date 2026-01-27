import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

// Only check for variables if we are not in the build phase
if (!supabaseUrl || !supabaseAnonKey) {
    if (process.env.NEXT_PHASE !== 'phase-production-build' && process.env.NODE_ENV === 'production') {
        console.warn('Supabase environment variables are missing.');
    }
}

export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null as any;
