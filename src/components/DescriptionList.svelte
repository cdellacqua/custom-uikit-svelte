<script>
	export let showDivider = false;
	export let className = undefined;
	export let style = undefined;

	/** @type {{title: string, description: string}[]} */
	export let list = [];
</script>
<dl {style} class={className ? "uk-description-list " + className : "uk-description-list"} class:uk-description-list-divider={showDivider}>
	<slot>
		{#each list as item}
			<dt>{item.title}</dt>
			<dd>{item.description}</dd>
		{/each}
	</slot>
</dl>