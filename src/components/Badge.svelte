<script>
	export let className = undefined;
	export let style = undefined;
  export let ref = undefined;
</script>

<span bind:this={ref} class={className ? "uk-badge " + className : "uk-badge"} {style}>
	<slot />
</span>