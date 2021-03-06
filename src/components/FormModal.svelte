<script>
  import { createEventDispatcher, onDestroy, onMount, tick } from "svelte";
  import Form from "./Form.svelte";
  import UIkit from "uikit";
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

  // FORM PROPS

  /** @type {FormSubmitCallback} */
  export let formSubmitAsync;
  /** @type {boolean} */
  export let formDisabled = false;
  /** @type {'initial'|'invalid'|'valid'|'loading'|'error'|'success'} */
  export let formState = "initial";
  /** @type {boolean} */
  export let formValid = true;
  /** @type {HTMLFormElement} */
  export let formRef = undefined;
  /**
   * @description A string specifying custom style properties for the component
   * @type {string|undefined} */
  export let formStyle = undefined;
  /** @type {string|undefined} */
  export let formClassName = '';
  /** @type {'stacked'|'horizontal'} */
  export let formVariant = "stacked";

  let externalAssignment = true;
  $: if (ref) {
    if (externalAssignment) {
      if (show && !ref.classList.contains('uk-open')) {
        UIkit.modal(ref).show();
      } else if (!show && ref.classList.contains('uk-open')) {
        UIkit.modal(ref).hide();
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

  let forceHide = false;
</script>

<style>
  :global(form.fullscreen-dialog-6554ef564e5f4e5r4g6er4ger4g8ergwe65r) {
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
  on:beforehide={(e) => {
    if (!forceHide && formState === 'loading') {
      e.preventDefault();
    }
  }}
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
  <Form
    submitAsync={async () => {
      try {
        await formSubmitAsync();
      } finally {
        if (show === false) {
          if (ref && ref.classList.contains('uk-open')) {
            forceHide = true;
            UIkit.modal(ref).hide();
            forceHide = false;
          }
        }
      }
    }}
    disabled={formDisabled}
    bind:state={formState}
    bind:valid={formValid}
    bind:ref={formRef}
    style={formStyle}
    className="uk-modal-dialog {expand ? 'uk-modal-container' : ''} {verticallyCentered ? 'uk-margin-auto-vertical' : ''} {fullScreen ? 'fullscreen-dialog-6554ef564e5f4e5r4g6er4ger4g8ergwe65r' : ''} {formClassName}"
    variant={formVariant}>
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
  </Form>
</div>
