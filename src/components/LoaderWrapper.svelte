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
  /** @type {'bottom'|'right'|'top'|'left'} */
  export let slotPosition = "bottom";

  let refTopLeft;
  let refBottomRight;
  $: ref = refTopLeft || refBottomRight;
</script>

{#if loading}
  <div
    class:uk-flex={center} class:uk-flex-middle={center} class:uk-flex-center={center}
    class:uk-flex-column={slotPosition === 'bottom' || slotPosition === 'top'}
  >
    {#if slotPosition === 'bottom' || slotPosition === 'right'}
      <Loader {className} {ratio} {style} bind:ref={refTopLeft} />
    {/if}
    <slot name="loading" />
    {#if slotPosition === 'top' || slotPosition === 'left'}
      <Loader {className} {ratio} {style} bind:ref={refBottomRight} />
    {/if}
  </div>
{:else}
  <slot />
{/if}
