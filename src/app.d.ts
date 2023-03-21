import type { SupabaseClient, Session } from '@supabase/supabase-js'
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface Locals {
			supabase: SupabaseClient
			getSession: () => Promise<Session | null>
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
