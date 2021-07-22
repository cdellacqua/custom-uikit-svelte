<script>
	/**
	 * @readonly
	 * @description The HTML reference of the component
	 * @type {HTMLDivElement} */
	export let ref = undefined;
	/**
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
	export let style = undefined;
	/**
	 * @description A string containing any additional classes to apply to the component
	 * @type {string|undefined} */
	export let className = undefined;
</script>

<nav
	bind:this={ref}
	class="uk-navbar-container {className || ''}"
	uk-navbar
	{style}
>
	<slot />
</nav>
