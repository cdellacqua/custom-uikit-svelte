<script>
	/**
	 * @readonly
	 * @description The HTML reference of the component
	 * @type {HTMLDivElement} */
	export let ref = undefined;
</script>

<nav bind:this={ref} class="uk-navbar-container" uk-navbar>
	<slot />
</nav>
