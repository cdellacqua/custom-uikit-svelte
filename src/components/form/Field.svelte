<script>
  export let inputId;
  export let hasIcon = false;
  export let label = "";
  export let className = "";
  export let textIfInvalid = undefined;
  export let textIfValid = undefined;
  export let helperText = undefined;
  export let optional = false;
  /** @type {'initial'|'valid'|'invalid'} */
  export let state = "initial";
  export let labelWrap = false;
</script>

<style lang="scss">
  .helper-text,
  .valid-text,
  .invalid-text {
    font-size: 0.95em;
  }
  .relative {
    position: relative;
  }

</style>

<div class={"uk-margin-bottom " + className}>
  {#if labelWrap}
    <div
      class:relative={hasIcon}
      class="uk-form-controls uk-form-controls-text">
      <label for={inputId} class="uk-form-label">
        <slot />
        {label}
        {!optional ? '*' : ''}
      </label>
    </div>
  {:else}
    {#if label}
      <label class="uk-form-label" for={inputId}>
        {label}
        {!optional ? '*' : ''}
      </label>
    {/if}
    <div class:relative={hasIcon} class="uk-form-controls">
      <slot />
    </div>
  {/if}
  {#if helperText || textIfInvalid || textIfValid}
    {#if state === 'initial'}
      <div class="helper-text">{helperText || '\240'}</div>
    {:else if state === 'valid'}
      <div class="valid-text">{textIfValid || '\240'}</div>
    {:else if state === 'invalid'}
      <div class="invalid-text">{textIfInvalid || '\240'}</div>
    {/if}
  {/if}
</div>
