<script>
import Loader from "./Loader.svelte";

  export let isLoading = true;
  export let className = undefined;
  export let ratio = 1;
  export let style = undefined;
  export let ref = undefined;
</script>

{#if isLoading}
  <Loader {className} {ratio} {style} bind:ref />
{:else}
  <slot />
{/if}