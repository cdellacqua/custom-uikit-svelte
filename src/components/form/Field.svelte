<script>
  import { globalOptionalMarker, globalRequiredMarker } from '../../stores/markers';

  export let inputId;
  export let hasIcon = false;
  export let label = "";
  /** 
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
	export let style = undefined;
  export let className = undefined;
  export let textIfInvalid = undefined;
  export let textIfValid = undefined;
  export let helperText = undefined;
  export let optional = false;
  /** @type {'initial'|'valid'|'invalid'} */
  export let state = "initial";
  export let labelWrap = false;
  export let ref = undefined;

  /** @type {string|undefined} */
  export let requiredMarker = undefined;
  /** @type {string|undefined} */
  export let optionalMarker = undefined;

  let suffix = '';
  function updateLabelSuffix() {
    if (optional) {
      suffix = typeof optionalMarker === 'string'
        ? optionalMarker
        : $globalOptionalMarker;
    } else {
      suffix = typeof requiredMarker === 'string'
        ? requiredMarker
        : $globalRequiredMarker
    }
  }

  $: optional, requiredMarker, optionalMarker, $globalRequiredMarker, $globalOptionalMarker, updateLabelSuffix();
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

<div {style} class={className} class:uk-margin-bottom={true} bind:this={ref}>
  {#if labelWrap}
    <div
      class:relative={hasIcon}
      class="uk-form-controls uk-form-controls-text">
      <label for={inputId} class="uk-form-label">
        <slot />
        {label}
        {suffix}
      </label>
    </div>
  {:else}
    {#if label}
      <label class="uk-form-label" for={inputId}>
        {label}
        {suffix}
      </label>
    {/if}
    <div class:relative={hasIcon} class="uk-form-controls">
      <slot />
    </div>
  {/if}
  {#if helperText || textIfInvalid || textIfValid}
    {#if state === 'initial'}
      <div class="helper-text">{helperText || '\xA0'}</div>
    {:else if state === 'valid'}
      <div class="valid-text">{textIfValid || '\xA0'}</div>
    {:else if state === 'invalid'}
      <div class="invalid-text">{textIfInvalid || '\xA0'}</div>
    {/if}
  {/if}
</div>
