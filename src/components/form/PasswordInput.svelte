<script>
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
  export let ref = undefined;
  export let disabled = false;
  export let tooltip = undefined;

  /** @type {'initial'|'valid'|'invalid'} */
  export let state = "initial";
</script>

<Field
  inputId={id}
  {label}
  {state}
  {style}
  {className}
  {textIfInvalid}
  {textIfValid}
  {helperText}
  {optional}>
  <input
    {id}
    bind:this={ref}
    required={!optional}
    {placeholder}
    type="password"
    bind:value
    {disabled}
    uk-tooltip={tooltip}
    on:change
    on:blur
    on:focus
    class="uk-input"
    class:uk-form-danger={state === 'invalid'}
    class:uk-form-success={state === 'valid'}
    on:blur={() => (state = ref.checkValidity() ? 'valid' : 'invalid')}
    on:focus={() => (state = 'initial')} />
</Field>
