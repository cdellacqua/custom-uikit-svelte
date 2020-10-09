<script>
	/** @type {boolean} */
	export let withIcon = false;
	/** @type {boolean} */
	export let small = false;
	/** @type {boolean} */
	export let vertical = false;
	/** @type {HTMLHRElement} */
	export let ref = undefined;
	/** @type {string|undefined} */
	export let style = undefined;
	/** @type {string|undefined} */
	export let className = undefined;
</script>

<hr {style} class={className} bind:this={ref} class:uk-divider-icon={withIcon} class:uk-divider-small={small} class:uk-divider-vertical={vertical}>