<script>
	/** 
	 * @component Useful to display content such as blog entries or articles 
	 * @slot {"default": "The content of the article"}
	 * @dispatch {}
	 * @forward {} */

	/** 
	 * @default undefined
	 * @description A string containing any additional classes to apply to the component
	 * @type {string|undefined} */
	export let className = undefined;
	/** 
	 * @default undefined
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
	export let style = undefined;
	/**
	 * @default ""
	 * @description A string that can contain HTML content which represents the title of the article. If omitted, the space dedicated to the title won't be displayed
	 * @type {string|undefined} */
	export let titleAsHtml = "";
	/**
	 * @default ""
	 * @description A string that can contain HTML content with meta information about the article. If omitted, the space dedicated to the meta content won't be displayed
	 * @type {string|undefined} */
	export let articleMetaAsHtml = "";
	/** 
	 * @readonly
	 * @description The HTML reference of the component
	 * @type {HTMLElement} */
  export let ref = undefined;
</script>
<article bind:this={ref} {style} class={className ? "uk-article " + className : "uk-article"}>
	{#if titleAsHtml}
		<h1 class="uk-article-title">{@html titleAsHtml}</h1>
	{/if}
	{#if articleMetaAsHtml}
		<p class="uk-article-meta">{@html articleMetaAsHtml}</p>
	{/if}
	<slot />
</article>