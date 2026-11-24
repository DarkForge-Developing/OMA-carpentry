import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://mixdfjjwmfifjnnaqmly.supabase.co"

const supabaseAnonKey =
  "sb_publishable_08dZdOVQXYvq-MTOoRJvqg_z8wPLWTR"

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
