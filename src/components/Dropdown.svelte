<script>
  import Button from "./Button.svelte";

  /** 
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
  export let style = undefined;
  /** @type {string|undefined} */
  export let className = undefined;
  /** @type {'click'|'hover'} */
  export let mode = "hover";
  /** @type {string} */
  export let label = "";
  /** @type {boolean} */
  export let isLabelHtml = false;
  /** 
   * @default "default"
   * @description This property is used to style the button with one of the base uikit classes for button appearance. Setting this to null will hide the button
   * @type {'default'|'primary'|'secondary'|'danger'|'text'|'link'|null} */
  export let variant = "default";
  /** @type {HTMLDivElement} */
  export let ref = undefined;
</script>

{#if variant}
  <Button type="button" {variant}>
    {#if isLabelHtml}
      {@html label}
    {:else}{label}{/if}
  </Button>
{/if}
<div
  {style}
  class={className}
  on:toggle|stopPropagation
  on:beforeshow|stopPropagation
  on:show|stopPropagation
  on:shown|stopPropagation
  on:beforehide|stopPropagation
  on:hide|stopPropagation
  on:hidden|stopPropagation
  on:stack|stopPropagation
  bind:this={ref} uk-dropdown={`mode: ${mode}`}
>
  <slot />
</div>
