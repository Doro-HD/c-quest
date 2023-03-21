import { PUBLIC_DB_URL, PUBLIC_DB_KEY } from '$env/static/public'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_DB_URL,
    supabaseKey: PUBLIC_DB_KEY,
    event
  })

  event.locals.getSession = async () => {
    const {
      data: { session }
    } = await event.locals.supabase.auth.getSession()

    return session
  }

  resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range';
    }
  })
}
