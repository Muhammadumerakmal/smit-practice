import { createClient } from "@supabase/supabase-js"

const URlSupabase = 'https://hdcskkvlsqcynknwmnhf.supabase.co'
const ApiKey = "sb_publishable__ngpoq-b_5bHcFaiPBhJHg_RhmMQHMr"
const supabase = createClient(URlSupabase, ApiKey)

export {supabase}