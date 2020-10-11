<script>
  import UIkit from "uikit";
  import { createEventDispatcher } from "svelte";

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
  export let stack = false;

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
  on:shown={() => (shown = true)}
  on:hidden={() => (shown = false)}
  bind:this={ref}
  class:uk-modal-full={fullScreen}
  class={className}
  {style}
  {id}
  uk-modal={`esc-close: ${closeable}; bg-close: ${closeable}; stack: ${stack}`}
  class:uk-flex-top={verticallyCentered}>
  <div
    class="uk-modal-dialog"
    class:uk-modal-container={expand}
    class:uk-margin-auto-vertical={verticallyCentered}
    uk-overflow-auto>
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
    <div class="uk-modal-body">
      <slot />
    </div>
    <div class="uk-modal-footer" style={noFooter ? 'display: none' : ''}>
      <slot name="footer">
        <div bind:this={noFooter} />
      </slot>
    </div>
  </div>
</div>
