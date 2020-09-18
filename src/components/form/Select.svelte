<script>
import { createEventDispatcher } from "svelte";

  import { generateId } from "../../services/html";
  import Field from "./Field.svelte";

  export let id = generateId();
  export let label = "";
  /** 
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
	export let style = undefined;
  export let className = undefined;
  export let textIfInvalid = undefined;
  export let textIfValid = undefined;
  export let helperText = undefined;
  export let placeholder = "";
  export let optional = false;
  export let value;
  /** @type {Array<{label: string, value: any, disabled: boolean|undefined}>} */
  export let options = [];
  export let ref = undefined;
  export let disabled = false;
  export let tooltip = undefined;

  /** @type {'initial'|'valid'|'invalid'} */
  export let state = "initial";

  const dispatch = createEventDispatcher();

  let referenceValue;
  $: referenceValue = value;
</script>

<Field
  inputId={id}
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
