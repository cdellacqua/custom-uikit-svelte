<script>
  export let className = undefined;
  export let ratio = 1;
  export let style = undefined;
  export let ref = undefined;
</script>

<div bind:this={ref} class={className} {style} uk-spinner="ratio: {ratio}" />
