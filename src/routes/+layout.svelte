<script lang="ts">
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'
  import type { LayoutData } from './$types'
  import '../app.css'

  export let data: LayoutData

  $: ({ supabase } = data)

  onMount(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange(() => {
      invalidate('supabase:auth')
    })

    return () => subscription.unsubscribe()
  })
</script>

<slot />
