<script>
  import Button from "./Button.svelte";
  
  export let mode = "hover";
  export let label = "";
  export let appearance = "default";

</script>

<Button type="button" {appearance}> {@html label}</Button>
<div uk-dropdown={`mode: ${mode}`}>
  <slot />
</div>