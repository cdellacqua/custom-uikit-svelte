<script>
import Loader from "./Loader.svelte";

  /** @type {boolean} */
  export let loading = true;
  /** @type {string|undefined} */
  export let className = undefined;
  /** @type {number} */
  export let ratio = 1;
  /** @type {string|undefined} */
  export let style = undefined;
  /** @type {HTMLDivElement} */
  export let ref = undefined;
</script>

{#if loading}
  <Loader {className} {ratio} {style} bind:ref />
{:else}
  <slot />
{/if}