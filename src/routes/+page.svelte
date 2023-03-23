<script lang="ts">
  import type { Session } from "@supabase/supabase-js";

  export let session: Session | null
</script>
{#if session}
  <p>Logged in</p>
{:else}
  <p>Not logged in</p>
{/if}
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
