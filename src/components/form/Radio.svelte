<script>
  import { createEventDispatcher } from "svelte";

  import { generateId } from "../../services/html";
  import { globalOptionalMarker, globalRequiredMarker } from '../../stores/markers';

  /** @type {string} */
  export let id = generateId();
  /** @type {string|undefined} */
  export let label = undefined;
  /** @type {string|undefined} */
  export let name = undefined;
  /** @type {any|undefined} */
  export let value = undefined;
  /** @type {Array<{value: any, label: string, disabled: boolean|undefined}>} */
  export let options = [];
  /** @type {boolean} */
  export let disabled = false;
  /** @type {boolean} */
  export let optional = false;
  /** @type {string|undefined} */
  export let tooltip = undefined;
  /** @type {HTMLDivElement} */
  export let ref = undefined;
  /** @type {undefined|'small'|'large'} */
  export let size = undefined;
  /** @type {string|undefined} */
  export let className = undefined;
  /** 
   * @description This property is used to style the button corresponding to the selected value with one of the base uikit classes for button appearance
   * @type {'primary'|'secondary'|'danger'} */
  export let variant = "primary";
  /**
   * @description A string specifying custom style properties for the component
   * @type {string|undefined} */
  export let style = undefined;

  /** @type {string|undefined} */
  export let requiredMarker = undefined;
  /** @type {string|undefined} */
  export let optionalMarker = undefined;

  let suffix = '';
  function updateLabelSuffix() {
    if (optional) {
      suffix = typeof optionalMarker === 'string'
        ? optionalMarker
        : $globalOptionalMarker;
    } else {
      suffix = typeof requiredMarker === 'string'
        ? requiredMarker
        : $globalRequiredMarker
    }
  }

  $: optional, requiredMarker, optionalMarker, $globalRequiredMarker, $globalOptionalMarker, updateLabelSuffix();

  const dispatch = createEventDispatcher();
</script>

<style>
  .disabled {
    opacity: 0.7;
  }
  .radio-wrapper {
    position: relative;
  }
  .radio-wrapper > select {
    position: absolute;
    top: 1rem;
    left: 1rem;
    opacity: 0;
    pointer-events: none;
    width: 0;
    height: 0;
    appearance: none;
  }
</style>

<div
  {style}
  class={className}
  class:uk-margin-bottom={true}
  class:custom-uk-radio-wrapper={true}
  class:radio-wrapper={true}>
  {#if label}
    <label class="uk-form-label" class:disabled for={id}>
      {label}
      {suffix}
    </label>
  {/if}
  <div
    {id}
    class:disabled
    uk-tooltip={tooltip}
    bind:this={ref}
    class:uk-flex={true}
    class:uk-width-1-1={true}
    class:uk-flex-wrap={true}>
    {#each options as option (option)}
      <div class="uk-flex-1">
        <button
          disabled={disabled || option.disabled}
          class:uk-text-nowrap={true}
          class:uk-width-1-1={true}
          class:uk-height-1-1={true}
          class:custom-uk-active={option.value === value}
          class:uk-button-primary={option.value === value && variant === 'primary'}
          class:uk-button-secondary={option.value === value && variant === 'secondary'}
          class:uk-button-danger={option.value === value && variant === 'danger'}
          class:uk-button-default={option.value !== value}
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
  <select tabindex="-1" required={!optional} {disabled} {name}>
    <option selected disaled value="" />
    {#each options as option, i (option)}
      <option
        selected={option.value === value}
        value={i}
        disabled={option.disabled || false}>
        {option.label}
      </option>
    {/each}
  </select>
</div>
