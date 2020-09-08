<script>
	export let withIcon = false;
	export let small = false;
	export let vertical = false;
  export let ref = undefined;
</script>

<hr bind:this={ref} class:uk-divider-icon={withIcon} class:uk-divider-small={small} class:uk-divider-vertical={vertical}>