<script>
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
  export let name = undefined;
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
  /** @type {HTMLInputElement} */
  export let ref = undefined;
  /** @type {boolean} */
  export let disabled = false;
  /** @type {string|undefined} */
  export let tooltip = undefined;
  /** @type {string|undefined} */
  export let min = undefined;
  /** @type {string|undefined} */
  export let max = undefined;
  /** @type {string|undefined} */
  export let autocapitalize = undefined;
  /** @type {string|undefined} */
  export let autocomplete = undefined;
  /** @type {string|undefined} */
  export let autocorrect = undefined;
  /** @type {string|undefined} */
  export let spellcheck = undefined;

  /** @type {'initial'|'valid'|'invalid'} */
  export let state = "initial";
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
  <input
    {autocapitalize}
    {autocomplete}
    {autocorrect}
    {spellcheck}
    {id}
    {name}
    uk-tooltip={tooltip}
    bind:this={ref}
    required={!optional}
    {placeholder}
    type="date"
    {disabled}
    bind:value
    {min}
    {max}
    on:change
    on:blur
    on:focus
    class="uk-input"
    class:uk-form-danger={state === 'invalid'}
    class:uk-form-success={state === 'valid'}
    on:blur={() => (state = ref.checkValidity() ? 'valid' : 'invalid')}
    on:focus={() => (state = 'initial')} />
</Field>
