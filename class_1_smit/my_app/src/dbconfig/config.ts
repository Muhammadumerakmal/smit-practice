import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://hdcskkvlsqcynknwmnhf.supabase.co';
const SUPABASE_KEY = 'sb_publishable__ngpoq-b_5bHcFaiPBhJHg_RhmMQHMr';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;