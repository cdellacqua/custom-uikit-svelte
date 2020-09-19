<script>
  import { onMount, onDestroy } from "svelte";
import Loader from "./Loader.svelte";

  export let className = undefined;
  export let ratio = 1;
  export let style = undefined;
  export let ref = undefined;

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

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999999999;
  }
</style>

<div bind:this={originalWrapperRef}>
  <div class="overlay" bind:this={ref}>
    <Loader {className} {ratio} {style} />
  </div>
</div>
