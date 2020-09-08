<script>
  import { generateId } from "../services/html";
  import Button from "./Button.svelte";

  export const id = generateId();
  export let title = "";
  export let closeButton = "default";
  export let useSections = true;
  export let footerActions = undefined;
  export let expand = false;
  export let fullScreen = false;
  export let closeable = true;
  export let verticallyCentered = true;
  export let ref = undefined;
</script>

<div
  bind:this={ref}
  {id}
  uk-modal={`esc-close: ${closeable}; bg-close: ${closeable}`}
  class:uk-flex-top={verticallyCentered}>
  <div
    class="uk-modal-dialog"
    class:uk-modal-body={!useSections}
    class:uk-modal-container={expand}
    class:uk-modal-full={fullScreen}
    class:uk-margin-auto-vertical={verticallyCentered}
    uk-overflow-auto>
    {#if closeButton}
      <button
        class:uk-modal-close-default={closeButton === 'default'}
        class:uk-modal-close-outside={closeButton === 'outside'}
        class:uk-modal-close-full={fullScreen}
        type="button"
        uk-close />
    {/if}
    {#if useSections}
      {#if title}
        <div class="uk-modal-header">
          <h2 class="uk-modal-title">{title}</h2>
        </div>
      {/if}
      <div class="uk-modal-body">
        <slot />
      </div>
      {#if footerActions}
        <div class="uk-modal-footer uk-flex uk-flex-between">
          {#each footerActions as footerAction}
            <Button
              appearance={footerAction.appearance}
              on:click={footerAction.onClick}
              loading={footerAction.loading}>
              {footerAction.name}
            </Button>
          {/each}
        </div>
      {/if}
    {:else}
      {#if title}
        <h2 class="uk-modal-title">{title}</h2>
      {/if}
      <slot />
      {#if footerActions}
        <div class="uk-flex uk-flex-between">
          {#each footerActions as footerAction}
            <Button
              appearance={footerAction.appearance}
              on:click={footerAction.onClick}
              loading={footerAction.loading}>
              {footerAction.name}
            </Button>
          {/each}
        </div>
      {/if}
    {/if}
  </div>
</div>
