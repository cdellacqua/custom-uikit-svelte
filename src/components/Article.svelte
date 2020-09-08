<script>
	export let className = undefined;
	export let style = undefined;
	export let titleAsHtml = "";
	export let articleMetaAsHtml = "";
</script>
<article {style} class={className ? "uk-article " + className : "uk-article"}>
	{#if titleAsHtml}
		<h1 class="uk-article-title">{@html titleAsHtml}</h1>
	{/if}
	{#if articleMetaAsHtml}
		<p class="uk-article-meta">{@html articleMetaAsHtml}</p>
	{/if}
	<slot />
</article>