<script>
import { createEventDispatcher } from "svelte";

  import { generateId } from "../../services/html";
  import Field from "./Field.svelte";

  /** @type {string} */
  export let id = generateId();
  /** @type {string} */
  export let label = "";
  /** 
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
  export let style = undefined;
  /** @type {string|undefined} */
  export let className = undefined;
  /** @type {string|undefined} */
  export let textIfInvalid = undefined;
  /** @type {string|undefined} */
  export let textIfValid = undefined;
  /** @type {string|undefined} */
  export let helperText = undefined;
  /** @type {string} */
  export let placeholder = "";
  /** @type {boolean} */
  export let optional = false;
  /** @type {string} */
  export let value;
  /** @type {Array<{label: string, value: any, disabled: boolean|undefined}>} */
  export let options = [];
  /** @type {HTMLSelectElement} */
  export let ref = undefined;
  /** @type {boolean} */
  export let disabled = false;
  /** @type {string|undefined} */
  export let tooltip = undefined;

  /** @type {string|undefined} */
  export let requiredMarker = undefined;
  /** @type {string|undefined} */
  export let optionalMarker = undefined;

  /** @type {'initial'|'valid'|'invalid'} */
  export let state = "initial";

  const dispatch = createEventDispatcher();

  let referenceValue;
  $: referenceValue = value;
</script>

<Field
  inputId={id}
  {requiredMarker}
  {optionalMarker}
  {label}
  {state}
  {className}
  {style}
  {textIfInvalid}
  {textIfValid}
  {helperText}
  {optional}>
  <select
    bind:this={ref}
    on:change={(e) => {
      value = options[Number(e.target.value)].value;
      if (referenceValue !== value) {
        referenceValue = value;
        dispatch('change', value);
      }
    }}
    on:blur={() => (state = ref.checkValidity() ? 'valid' : 'invalid')}
    on:focus={() => (state = 'initial')}
    class="uk-select"
    {disabled}
    uk-tooltip={tooltip}>
    {#if placeholder}
      <option value="" disabled selected>{placeholder}</option>
    {/if}
    {#each options as option, i (option)}
      <option selected={option.value === value} value={i} disabled={option.disabled || false}>
        {option.label}
      </option>
    {/each}
  </select>
</Field>
