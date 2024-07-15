<script lang="ts">
  import { onMount } from "svelte";

  let resString = ""

  onMount(async() => {
    const response = await fetch("http://127.0.0.1:3000/api/test/")
    const parsed = await response.json()
    resString = parsed.response
  })
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>{resString}</p>
