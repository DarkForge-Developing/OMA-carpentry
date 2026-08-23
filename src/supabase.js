import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://dpabrohzekcrayumtvtq.supabase.co"

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwYWJyb2h6ZWtjcmF5dW10dnRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc1MDI3NTcsImV4cCI6MjEwMzA3ODc1N30.EINz1SgCG2g0rKBFlPqDE0c35ry90M-UScCdwrAQiMQ"

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)