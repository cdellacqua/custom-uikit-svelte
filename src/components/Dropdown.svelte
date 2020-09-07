<script>
  import Button from "./Button.svelte";

  export let mode = "hover";
  export let label = "";
  export let isLabelHtml = false;
  export let appearance = "default";
</script>

<Button type="button" {appearance}>
  {#if isLabelHtml}
    {@html label}
  {:else}{label}{/if}
</Button>
<div uk-dropdown={`mode: ${mode}`}>
  <slot />
</div>
