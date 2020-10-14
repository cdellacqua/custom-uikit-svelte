<script>
  import UIkit from "uikit";
  import { generateId } from "../services/html";
  import { onDestroy } from "svelte";

  /** @type {string} */
  export let id = generateId();
  /** @type {boolean} */
  export let show = false;
  /** @type {boolean} @readonly */
  export let shown = false;
  /** @type {HTMLDivElement} */
  export let ref = undefined;
  /** @type {'left'|'right'} */
  export let side = "left";

  let externalAssignment = true;
  $: if (ref) {
    if (externalAssignment) {
      if (show && !ref.classList.contains('uk-open')) {
        UIkit.offcanvas(ref).show();
      } else if (!show && ref.classList.contains('uk-open')) {
        UIkit.offcanvas(ref).hide();
      }
    }
    externalAssignment = true;
  }

  function handleShow(e) {
    externalAssignment = false;
    show = true;
  }

  function handleHide() {
    externalAssignment = false;
    show = false;
  }

  onDestroy(() => {
    if (show && document.querySelectorAll('.uk-offcanvas.uk-open').length === 1) {
      document.documentElement.classList.remove('uk-offcanvas-page');
    }
  });

  let innerClick = false;
  function closeOnOuterClick() {
    if (!innerClick && show) {
      show = false;
    }
    innerClick = false;
  }
</script>

<div
  on:show={handleShow}
  on:hide={handleHide}
  on:shown={() => (shown = true)}
  on:hidden={() => (shown = false)}
  on:show
  on:hide
  on:shown
  on:hidden
  on:click={closeOnOuterClick}
  bind:this={ref}
  {id}
  uk-offcanvas="overlay: true; flip: {side === 'left' ? 'false' : 'true'}; mode: slide">
  <div class="uk-offcanvas-bar" on:click={() => (innerClick = true)}>
    <button class="uk-offcanvas-close" type="button" uk-close />
    <slot />
  </div>
</div>
