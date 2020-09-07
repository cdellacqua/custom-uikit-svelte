<script>
  import { generateId } from "../../services/html";
  import Field from "./Field.svelte";

  export let id = generateId();
  export let label = "";
  export let className = "";
  export let textIfInvalid = undefined;
  export let textIfValid = undefined;
  export let helperText = undefined;
  export let placeholder = "";
  export let optional = false;
  export let value;
  export let ref = undefined;
  export let min = undefined;
  export let max = undefined;
  export let step = undefined;
  export let disabled = false;
  export let tooltip = undefined;
  export let icon = undefined;
  /** @type {'left'|'right'} */
  export let iconPosition = "left";

  /** @type {'initial'|'valid'|'invalid'} */
  let state = "initial";
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
  {textIfInvalid}
  {textIfValid}
  {helperText}
  {optional}>
  {#if iconPosition === 'left'}
    {#if icon}<span class="uk-form-icon" uk-icon="icon: {icon}" />{/if}
  {/if}
  <input
    {id}
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
