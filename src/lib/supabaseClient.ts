import { createClient } from '@supabase/auth-helpers-sveltekit'
import { PUBLIC_DB_URL, PUBLIC_DB_KEY } from '$env/static/public'

export const supabase = createClient(PUBLIC_DB_URL, PUBLIC_DB_KEY)
