<script>
  import { HtmlService } from "../../services/html";
  import Field from "./Field.svelte";

  export let id = HtmlService.generateId();

  export let label = "";
  export let className = "";
  export let textIfInvalid = undefined;
  export let textIfValid = undefined;
  export let helperText = undefined;
  export let placeholder = "";
  export let optional = false;
  export let value;
  /** @type {{label: string; value: any}[]} */
  export let options = [];
  export let ref = undefined;
  export let disabled = false;
  export let tooltip = undefined;

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
  <select
    bind:this={ref}
    class="uk-select"
    {disabled}
    bind:value
    uk-tooltip={tooltip}>
    {#if placeholder}
      <option value="" disabled selected>{placeholder}</option>
    {/if}
    {#each options as option}
      <option selected={option.value === value} value={option.value}>
        {option.label}
      </option>
    {/each}
  </select>
</Field>
