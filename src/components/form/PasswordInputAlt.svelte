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
  /** @type {string|undefined} @default "off" */
  export let autocomplete = "off";
  /** @type {string|undefined} @default "off" */
  export let autocorrect = "off";
  /** @type {string|undefined} @default "off" */
  export let spellcheck = "off";

  let refPassword;
  let refText;
  $: ref = refPassword || refText;

  /** @type {'initial'|'valid'|'invalid'} */
  export let state = "initial";

  export let show = false;
</script>

<Field
  hasIcon={true}
  inputId={id}
  {label}
  {state}
  {style}
  {className}
  {textIfInvalid}
  {textIfValid}
  {helperText}
  {optional}>
  {#if !show}
    <input
      {autocapitalize}
      {autocomplete}
      {autocorrect}
      {spellcheck}
      {id}
      {name}
      bind:this={refPassword}
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
      on:blur={() => (state = refPassword.checkValidity() ? 'valid' : 'invalid')}
      on:focus={() => (state = 'initial')} />
  {:else}
    <input
      {autocapitalize}
      {autocomplete}
      {autocorrect}
      {spellcheck}
      {id}
      {name}
      bind:this={refText}
      required={!optional}
      {placeholder}
      type="text"
      bind:value
      {disabled}
      uk-tooltip={tooltip}
      on:change
      on:blur
      on:focus
      class="uk-input"
      class:uk-form-danger={state === 'invalid'}
      class:uk-form-success={state === 'valid'}
      on:blur={() => (state = refText.checkValidity() ? 'valid' : 'invalid')}
      on:focus={() => (state = 'initial')} />
  {/if}
  <!-- svelte-ignore a11y-missing-attribute -->
  <a role="button" on:click={() => show = !show} class="uk-form-icon uk-form-icon-flip" uk-icon="icon: {show ? 'unlock' : 'lock'}">&ZeroWidthSpace;</a>
</Field>
