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
  /** @type {boolean} */
  export let center = true;
</script>

{#if loading}
  <div class:uk-flex={center} class:uk-flex-center={center}>
    <Loader {className} {ratio} {style} bind:ref />
    <slot />
  </div>
{:else}
  <slot />
{/if}