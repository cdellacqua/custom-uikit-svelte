<script>
  import Button from "./Button.svelte";

  export let mode = "hover";
  export let label = "";
  export let isLabelHtml = false;
  export let appearance = "default";
  export let ref = undefined;
</script>

<Button type="button" {appearance}>
  {#if isLabelHtml}
    {@html label}
  {:else}{label}{/if}
</Button>
<div bind:this={ref} uk-dropdown={`mode: ${mode}`}>
  <slot />
</div>
