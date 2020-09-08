<script>
	export let className = undefined;
	export let style = undefined;
</script>

<span class={className ? "uk-badge " + className : "uk-badge"} {style}>
	<slot />
</span>