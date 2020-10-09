<script>
  import Button from "./Button.svelte";

  /** @type {string} */
  export let mode = "hover";
  /** @type {string} */
  export let label = "";
  /** @type {boolean} */
  export let isLabelHtml = false;
  /** @type {string} */
  export let variant = "default";
  /** @type {HTMLDivElement} */
  export let ref = undefined;
</script>

<Button type="button" {variant}>
  {#if isLabelHtml}
    {@html label}
  {:else}{label}{/if}
</Button>
<div bind:this={ref} uk-dropdown={`mode: ${mode}`}>
  <slot />
</div>
