<script>
  import { generateId } from "../../services/html";
  import Field from "./Field.svelte";

  /** @type {string|undefined} */
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
  /** @type {number|string} */
  export let min = undefined;
  /** @type {number|string} */
  export let max = undefined;
  /** @type {number|string} */
  export let step = undefined;
  /** @type {boolean} */
  export let disabled = false;
  /** @type {string|undefined} */
  export let tooltip = undefined;
  /** @type {string|undefined} */
  export let icon = undefined;
  /** @type {'left'|'right'} */
  export let iconPosition = "left";

  /** @type {'initial'|'valid'|'invalid'} */
  export let state = "initial";
</script>

<style>
  .uk-form-icon.right {
    right: 0;
    left: auto;
  }

  .paddingRight {
    padding-right: 40px !important;
  }
</style>

<Field
  hasIcon={icon}
  inputId={id}
  {label}
  {state}
  {className}
  {style}
  {textIfInvalid}
  {textIfValid}
  {helperText}
  {optional}>
  {#if iconPosition === 'left'}
    {#if icon}<span class="uk-form-icon" uk-icon="icon: {icon}" />{/if}
  {/if}
  <input
    {id}
    {name}
    {min}
    {max}
    {step}
    {disabled}
    uk-tooltip={tooltip}
    bind:this={ref}
    required={!optional}
    {placeholder}
    type="number"
    class:paddingRight={iconPosition === 'right'}
    bind:value
    on:change
    class="uk-input"
    class:uk-form-danger={state === 'invalid'}
    class:uk-form-success={state === 'valid'}
    on:blur={() => (state = ref.checkValidity() ? 'valid' : 'invalid')}
    on:focus={() => ((state = 'initial'), ref.select())} />
  {#if iconPosition === 'right'}
    {#if icon}<span class="uk-form-icon right" uk-icon="icon: {icon}" />{/if}
  {/if}
</Field>
