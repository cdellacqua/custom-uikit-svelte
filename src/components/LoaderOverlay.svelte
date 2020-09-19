<script>
  import { onMount, onDestroy } from "svelte";
  import Loader from "./Loader.svelte";

  export let className = undefined;
  export let ratio = 1;
  export let style = undefined;
  export let ref = undefined;
  export let opacity = 0.8;

  let originalWrapperRef;
  onMount(() => {
    originalWrapperRef.removeChild(ref);
    document.body.appendChild(ref);
  });

  onDestroy(() => {
    document.body.removeChild(ref);
    originalWrapperRef.appendChild(ref);
  });
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
