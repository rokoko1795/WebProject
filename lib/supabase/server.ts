import { createClient } from '@supabase/supabase-js'

// Server-side Supabase client for API routes
// Add to .env.local:
// SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})
