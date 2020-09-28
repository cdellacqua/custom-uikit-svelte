<script>
  import { createEventDispatcher } from "svelte";

  import { generateId } from "../../services/html";

  /** @type {string} */
  export let id = generateId();
  /** @type {string|undefined} */
  export let label = undefined;
  /** @type {any|undefined} */
  export let value = undefined;
  /** @type {Array<{value: any, label: string}>} */
  export let options = [];
  /** @type {boolean} */
  export let disabled = false;
  /** @type {string|undefined} */
  export let tooltip = undefined;
  /** @type {HTMLDivElement} */
  export let ref = undefined;
  /** @type {undefined|'small'|'large'} */
  export let size = undefined;
  /** @type {string|undefined} */
  export let className = undefined;
  /**
   * @description A string specifying custom style properties for the component
   * @type {string|undefined} */
  export let style = undefined;

  const dispatch = createEventDispatcher();
</script>

<style>
  .disabled {
    opacity: 0.7;
  }
</style>

<div {style} class={className} class:uk-margin-bottom={true}>
  {#if label}
    <label class="uk-form-label" class:disabled for={id}>{label}</label>
  {/if}
  <div
    {id}
    class:disabled
    uk-tooltip={tooltip}
    bind:this={ref}
    class:uk-flex={true}
    class:uk-width-1-1={true}
    class:uk-flex-stretch={true}
  >
    {#each options as option}
    <div class="uk-flex-1">
      <button
        {disabled}
        class:uk-width-1-1={true}
        class:uk-height-1-1={true}
        class:uk-button-default={option.value !== value}
        class:uk-button-primary={option.value === value}
        class:uk-button-small={size === 'small'}
        class:uk-button-large={size === 'large'}
        class:uk-button={true}
        type="button"
        on:click={() => {
          if (!disabled && value !== option.value) {
            value = option.value;
            dispatch('change', value);
          }
        }}>
        {option.label}
      </button>
    </div>
    {/each}
  </div>
</div>
