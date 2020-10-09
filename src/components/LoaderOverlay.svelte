<script>
  import Loader from "./Loader.svelte";

  /** @type {string|undefined} */
  export let className = undefined;
  /** @type {number} */
  export let ratio = 1;
  /** @type {string|undefined} */
  export let style = undefined;
  /** @type {HTMLDivElement} */
  export let ref = undefined;
  /** @type {number} */
  export let opacity = 0.8;
  /** @type {boolean} */
  export let loading = true;

  let originalWrapperRef;
  $: if (originalWrapperRef) {
    if (loading) {
      originalWrapperRef.removeChild(ref);
      document.body.appendChild(ref);
    } else {
      document.body.removeChild(ref);
      originalWrapperRef.appendChild(ref);
    }
  }
</script>

<style lang="scss">
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999999999;
    > div {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
</style>

{#if loading}
  <div bind:this={originalWrapperRef}>
    <div
      class="overlay"
      bind:this={ref}
      {className}
      {style}>
      <div class="uk-background-muted" style="opacity: {opacity}"></div>
      <div class="uk-flex uk-flex-middle uk-flex-center">
        <Loader {ratio} />
      </div>
    </div>
  </div>
{/if}