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
  export let placeholder = "";
  export let optional = false;
  export let value;
  export let ref = undefined;
  export let rows = 5;

  /** @type {'initial'|'valid'|'invalid'} */
  let state = "initial";
</script>

<Field
  inputId={id}
  {label}
  {state}
  {className}
  {textIfInvalid}
  {textIfValid}
  {helperText}
  {optional}>
  <textarea
		{id}
    bind:this={ref}
    required={!optional}
    {placeholder}
    bind:value
    {rows}
    on:change
    on:blur
    on:focus
    class="uk-textarea"
    class:uk-form-danger={state === 'invalid'}
    class:uk-form-success={state === 'valid'}
    on:blur={() => (state = ref.checkValidity() ? 'valid' : 'invalid')}
    on:focus={() => (state = 'initial')} />
</Field>