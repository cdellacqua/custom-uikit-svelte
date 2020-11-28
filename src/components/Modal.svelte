<script>
  import UIkit from "uikit";
  import { createEventDispatcher, onDestroy, tick } from "svelte";
import { dispatchCustomEvent } from "../helpers/events";

  /** @type {string|undefined} */
  export let id = undefined;
  /**@type {string|undefined} */
  export let style = undefined;
  /** @type {string|undefined} */
  export let className = undefined;
  /** @type {string|undefined} */
  export let title = undefined;
  /** @type {boolean} */
  export let expand = false;
  /** @type {boolean} */
  export let fullScreen = false;
  /** @type {boolean} */
  export let closeable = true;
  /** @type {'default'|'outside'} */
  export let closeButton = "default";
  /** @type {boolean} */
  export let verticallyCentered = true;
  /** @type {HTMLDivElement} */
  export let ref = undefined;
  /** @type {boolean} */
  export let show = false;
  /** @type {boolean} @readonly */
  export let shown = false;
  /** @type {boolean} */
  export let stack = true;

  let externalAssignment = true;
  $: if (ref) {
    if (externalAssignment) {
      if (show && !ref.classList.contains('uk-open')) {
        UIkit.modal(ref).show();
      } else if (!show && ref.classList.contains('uk-open')) {
        UIkit.modal(ref).hide();
        if (document.querySelectorAll('.uk-modal.uk-open').length <= 1) {
          document.documentElement.classList.remove('uk-modal-page');
        }
      }
    }
    externalAssignment = true;
  }

  onDestroy(() => {
    if (show) {
      dispatchCustomEvent(ref, 'hide');
    }
    if (shown) {
      dispatchCustomEvent(ref, 'hidden');
    }
  });

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

  let noHeader;
  let noFooter;
</script>

<style>
  .fullscreen-dialog {
    display: flex;
    flex-flow: column;
    height: 100vh;
  }
  .fullscreen-footer {
    margin-top: auto;
  }
</style>

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
  bind:this={ref}
  class:uk-modal-full={fullScreen}
  class={className}
  {style}
  {id}
  uk-modal={`esc-close: ${closeable}; bg-close: ${closeable}; stack: ${stack}`}
  class:uk-flex-top={verticallyCentered}>
  <div
    class="uk-modal-dialog"
    class:fullscreen-dialog={fullScreen}
    class:uk-modal-container={expand}
    class:uk-margin-auto-vertical={verticallyCentered}>
    {#if closeable && closeButton}
      <button
        class:uk-modal-close-default={closeButton === 'default'}
        class:uk-modal-close-outside={closeButton === 'outside'}
        class:uk-modal-close-full={fullScreen}
        type="button"
        uk-close />
    {/if}
    {#if title}
      <div class="uk-modal-header">
        <h2 class="uk-modal-title">{title}</h2>
      </div>
    {:else}
      <div class="uk-modal-header" style={noHeader ? 'display: none' : ''}>
        <slot name="header">
          <div bind:this={noHeader} />
        </slot>
      </div>
    {/if}
    {#if !fullScreen}
      <div class="uk-modal-body" uk-overflow-auto>
        <slot />
      </div>
    {:else}
      <div class="uk-modal-body">
        <slot />
      </div>
    {/if}
    <div class="uk-modal-footer" style={noFooter ? 'display: none' : ''} class:fullscreen-footer={fullScreen}>
      <slot name="footer">
        <div bind:this={noFooter} />
      </slot>
    </div>
  </div>
</div>
