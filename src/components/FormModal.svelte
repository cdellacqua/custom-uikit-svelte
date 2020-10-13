<script>
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import Form from "./Form.svelte";
  import UIkit from "uikit";

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

  /**
   * @callback SubmitCallback
   * @return {Promise}
   */

  /** @type {SubmitCallback} */
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
  export let formClassName = undefined;
  /** @type {'stacked'|'horizontal'} */
  export let formVariant = "stacked";

  const dispatch = createEventDispatcher();

  let externalAssignment = true;
  $: if (ref) {
    if (externalAssignment) {
      if (show) {
        UIkit.modal(ref).show();
      } else {
        UIkit.modal(ref).hide();
      }
    }
    externalAssignment = true;
  }

  onDestroy(() => {
    if (show && document.querySelectorAll('.uk-modal.uk-open').length === 1) {
      document.documentElement.classList.remove('uk-modal-page');
    }
  });

  function handleShow() {
    externalAssignment = false;
    show = true;
    dispatch("show");
  }

  function handleHide() {
    externalAssignment = false;
    show = false;
    dispatch("hide");
  }

  let noHeader;
  let noFooter;
</script>

<div
  on:show={handleShow}
  on:hide={handleHide}
  on:beforehide={(e) => {
    if (!externalAssignment && formState === 'loading') {
      e.preventDefault();
    }
  }}
  on:shown={() => (shown = true)}
  on:hidden={() => (shown = false)}
  bind:this={ref}
  class:uk-modal-full={fullScreen}
  class={className}
  {style}
  {id}
  uk-modal={`esc-close: ${closeable}; bg-close: ${closeable}; stack: ${stack}`}
  class:uk-flex-top={verticallyCentered}>
  <Form
    submitAsync={formSubmitAsync}
    disabled={formDisabled}
    bind:state={formState}
    bind:valid={formValid}
    bind:ref={formRef}
    style={formStyle}
    className="uk-modal-dialog {expand ? 'uk-modal-container' : ''} {verticallyCentered ? 'uk-margin-auto-vertical' : ''} {formClassName}"
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
    <div class="uk-modal-body" uk-overflow-auto>
      <slot />
    </div>
    <div class="uk-modal-footer" style={noFooter ? 'display: none' : ''}>
      <slot name="footer">
        <div bind:this={noFooter} />
      </slot>
    </div>
  </Form>
</div>
