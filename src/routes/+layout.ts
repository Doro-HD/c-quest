import type { LayoutLoad } from './$types'
import { PUBLIC_DB_URL, PUBLIC_DB_KEY } from '$env/static/public'
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
  depends('supabase:auth')

  const supabase = createSupabaseLoadClient({
    supabaseUrl: PUBLIC_DB_URL,
    supabaseKey: PUBLIC_DB_KEY,
    event: { fetch },
    serverSession: data?.session
  })

  const {
    data: { session }
  } = await supabase.auth.getSession()

  return { supabase, session }
}
