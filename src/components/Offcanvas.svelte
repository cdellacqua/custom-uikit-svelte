<script>
  import UIkit from "uikit";
  import { generateId } from "../services/html";
  import { onMount } from "svelte";

  export let id = generateId();
  export let show = false;
  export let ref = undefined;
  /** @type {'left'|'right'} */
  export let side = "left";

  let externalAssignment = true;

  $: if (ref) {
    if (externalAssignment) {
      if (show) {
        UIkit.offcanvas(ref).show();
      } else {
        UIkit.offcanvas(ref).hide();
      }
    }
    externalAssignment = true;
  }

  onMount(() => {
    UIkit.util.on(ref, "show", function () {
      externalAssignment = false;
      show = true;
    });
    UIkit.util.on(ref, "hide", function () {
      externalAssignment = false;
      show = false;
    });
  });

  let innerClick = false;
  function closeOnOuterClick() {
    if (!innerClick && show) {
      show = false;
    }
    innerClick = false;
  }
</script>

<style>
  :global(.uk-offcanvas-bar-animation) {
    transition: left 0.15s ease-out;
  }
  :global(.uk-offcanvas-container) {
    transition: left 0.15s ease-out;
  }
  :global(.uk-offcanvas-reveal) {
    transition: width 0.15s ease-out;
  }
</style>

<div
  on:click={closeOnOuterClick}
  bind:this={ref}
  {id}
  uk-offcanvas="overlay: true; flip: {side === 'left' ? 'false' : 'true'}; mode: slide">
  <div class="uk-offcanvas-bar" on:click={() => (innerClick = true)}>
    <button class="uk-offcanvas-close" type="button" uk-close />
    <slot />
  </div>
</div>
