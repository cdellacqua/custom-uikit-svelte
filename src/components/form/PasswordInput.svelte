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
  /** @type {string|undefined} @default "off" */
  export let autocapitalize = "off";
  /** @type {string|undefined} */
  export let autocomplete = undefined;
  /** @type {string|undefined} @default "off" */
  export let autocorrect = "off";
  /** @type {string|undefined} @default "off" */
  export let spellcheck = "off";
  /** @type {number|undefined} */
  export let minlength = undefined;
  /** @type {string|undefined} */
  export let maxlength = undefined;

  /** @type {string|undefined} */
  export let requiredMarker = undefined;
  /** @type {string|undefined} */
  export let optionalMarker = undefined;

  /** @type {'initial'|'valid'|'invalid'} */
  export let state = "initial";
</script>

<Field
  inputId={id}
  {requiredMarker}
  {optionalMarker}
  {label}
  {state}
  {style}
  {className}
  {textIfInvalid}
  {textIfValid}
  {helperText}
  {optional}>
  <input
    {minlength}
    {maxlength}
    {autocapitalize}
    {autocomplete}
    {autocorrect}
    {spellcheck}
    {id}
    {name}
    bind:this={ref}
    required={!optional}
    {placeholder}
    type="password"
    bind:value
    {disabled}
    uk-tooltip={tooltip}
    on:input
    on:change
    on:blur
    on:focus
    class="uk-input"
    class:uk-form-danger={state === 'invalid'}
    class:uk-form-success={state === 'valid'}
    on:blur={() => (state = ref.checkValidity() ? 'valid' : 'invalid')}
    on:focus={() => (state = 'initial')} />
</Field>
