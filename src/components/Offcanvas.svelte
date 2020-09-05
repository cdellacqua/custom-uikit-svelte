<script>
  import { onMount } from "svelte";
  
  export let id = HtmlService.generateId();
  export let show = false;
  export let ref = undefined;
  /** @type {'left'|'right'} */
  export let side = 'left';

  import UIkit from "uikit";
  import { HtmlService } from "../services/html";
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
  bind:this={ref}
  {id}
  uk-offcanvas="overlay: true; flip: {side === 'left' ? 'false' : 'true'}; mode: slide"
  style="transition-duration: .1s">
  <div class="uk-offcanvas-bar">
    <button class="uk-offcanvas-close" type="button" uk-close />
    <slot />
  </div>
</div>
