<script>
	/**
	 * @component Create an already styled description list, perfect for describing key-value properties
	 * @slot {"default": "If you need to add components in the titles or descriptions, use the default slot to specify the content of the description terms and description details"}
	 * @dispatch {}
	 * @forward {} */

	/**
	 * @description If true a divider will be shown between two items
	 * @type {boolean} */
	export let showDivider = false;
	/** 
	 * @description A string containing any additional classes to apply to the component
	 * @type {string|undefined} */
	 export let className = undefined;
	/** 
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
	export let style = undefined;
	/** 
	 * @readonly
	 * @description The HTML reference of the component
	 * @type {HTMLDListElement} */
	export let ref = undefined;
	/**
	 * @description Whether the terms of your list should be treated as HTML
	 * @type {boolean} */
	export let termsAreHtml = false;
	/**
	 * @description Whether the details of your list should be treated as HTML
	 * @type {boolean} */
	export let detailsAreHtml = false;
	/** 
	 * @description An array containing the term-details pairs of the description list. Can be text only or html 
	 * @type {Array<{term: string, details: string}>} */
	export let list = [];
</script>
<dl bind:this={ref} {style} class={className ? "uk-description-list " + className : "uk-description-list"} class:uk-description-list-divider={showDivider}>
	<slot>
		{#each list as item}
			<dt>
				{#if termsAreHtml}
					{@html item.term}
				{:else}
					{item.term}
				{/if}
			</dt>
			<dd>
				{#if detailsAreHtml}
					{@html item.details}
				{:else}
					{item.details}
				{/if}
			</dd>
		{/each}
	</slot>
</dl>