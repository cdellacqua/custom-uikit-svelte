<script>
  import { container } from "tsyringe";
  import { HtmlService } from "../../services/html";
  import Field from "./Field.svelte";

  export let id = container.resolve(HtmlService).generateId();

  export let label = "";
  export let className = "";
  export let textIfInvalid = undefined;
  export let textIfValid = undefined;
  export let helperText = undefined;
  export let optional = false;
  export let value;
  export let ref = undefined;
  export let disabled = false;
  export let tooltip = undefined;

  /** @type {'initial'|'valid'|'invalid'} */
  let state = "initial";
</script>

<Field
  inputId={id}
  labelWrap
  {label}
  {state}
  {className}
  {textIfInvalid}
  {textIfValid}
  {helperText}
  {optional}>
  <input
    {id}
    uk-tooltip={tooltip}
    bind:this={ref}
    required={!optional}
    type="checkbox"
    bind:checked={value}
    on:change
    {disabled}
    class="uk-checkbox"
    class:uk-form-danger={state === 'invalid'}
    class:uk-form-success={state === 'valid'}
    on:blur={() => (state = ref.checkValidity() ? 'valid' : 'invalid')}
    on:focus={() => (state = 'initial')} />
</Field>
