<script>
  import UIkit from "uikit";
  import { generateId } from "../services/html";
  import { onDestroy, tick } from "svelte";
import { dispatchCustomEvent } from "../helpers/events";

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

  function handleShow() {
    externalAssignment = false;
    show = true;
  }

  function handleHide() {
    externalAssignment = false;
    show = false;
  }

  let previouslyFocusedRef;
  function handleShown() {
    shown = true;
    previouslyFocusedRef = document.activeElement;
    ref && ref.focus();
  }

  async function handleHidden() {
    shown = false;
    await tick();
    previouslyFocusedRef && previouslyFocusedRef.focus();
  }

  onDestroy(() => {
    if (show) {
      dispatchCustomEvent(ref, 'hide');
    }
    if (shown) {
      dispatchCustomEvent(ref, 'hidden');
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
  tabindex="0"
  on:show={handleShow}
  on:hide={handleHide}
  on:shown={handleShown}
  on:hidden={handleHidden}
  on:show|stopPropagation
  on:hide|stopPropagation
  on:shown|stopPropagation
  on:hidden|stopPropagation
  on:beforeshow|stopPropagation
  on:beforehide|stopPropagation
  on:click={closeOnOuterClick}
  bind:this={ref}
  {id}
  uk-offcanvas="overlay: true; flip: {side === 'left' ? 'false' : 'true'}; mode: slide">
  <div class="uk-offcanvas-bar" on:click={() => (innerClick = true)}>
    <button class="uk-offcanvas-close" type="button" uk-close />
    <slot />
  </div>
</div>
