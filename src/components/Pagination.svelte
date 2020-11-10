<script>
import { createEventDispatcher } from "svelte";

	/** @type {string|undefined} */
	export let className = "";
	/** @type {string|undefined} */
	export let style = undefined;
	/** @type {boolean} */
	export let center = true;
	/** @type {number} */
	export let pageIndex = 0;
	/** @type {number} */
	export let numberOfPages = 0;
	/** @type {number} */
	export let numbersPerSide = 4;

	const dispatch = createEventDispatcher();

	function goToIndex(index) {
		dispatch('page-click', index);
	}
</script>

<ul class={className} class:uk-pagination={true} class:uk-margin={true} class:uk-flex-center={center} {style}>
	{#if pageIndex > 0}
		<!-- svelte-ignore a11y-missing-attribute -->
		<li><a role="button" tabindex="0" on:keyup={(e) => ['Enter'].includes(e.code) && goToIndex(pageIndex - 1)} on:click={() => goToIndex(pageIndex - 1)}><span uk-pagination-previous></span></a></li>
	{:else}
		<li class="uk-disabled"><span><span uk-pagination-previous></span></span></li>
	{/if}
	{#each new Array(Math.min(numbersPerSide, numberOfPages)).fill(0) as _, index}
		{#if index === pageIndex}
			<li class="uk-active"><span>{index + 1}</span></li>
		{:else}
			<!-- svelte-ignore a11y-missing-attribute -->
			<li><a role="button" tabindex="0" on:keyup={(e) => ['Enter'].includes(e.code) && goToIndex(index)} on:click={() => goToIndex(index)}>{index + 1}</a></li>
		{/if}
	{/each}
	{#if numberOfPages > numbersPerSide * 2}
		{#if pageIndex + 1 > numbersPerSide && pageIndex + 1 < numberOfPages - numbersPerSide + 1}
			{#if pageIndex + 1 > numbersPerSide + 1}
				<li class="uk-disabled"><span>..</span></li>
			{/if}
			<li class="uk-active"><span>{pageIndex + 1}</span></li>
			{#if pageIndex + 1 < numberOfPages - numbersPerSide}
				<li class="uk-disabled"><span>..</span></li>
			{/if}
		{:else}
			<li class="uk-disabled"><span>..</span></li>
		{/if}
	{/if}
	{#each new Array(Math.min(numbersPerSide, Math.max(0, numberOfPages - numbersPerSide))).fill(Math.max(numbersPerSide, numberOfPages - numbersPerSide)) as offset, index}
		{#if offset + index === pageIndex}
			<li class="uk-active"><span>{offset + index + 1}</span></li>
		{:else}
			<!-- svelte-ignore a11y-missing-attribute -->
			<li><a role="button" tabindex="0" on:keyup={(e) => ['Enter'].includes(e.code) && goToIndex(offset + index)} on:click={() => goToIndex(offset + index)}>{offset + index + 1}</a></li>
		{/if}
	{/each}
	{#if pageIndex + 1 < numberOfPages}
		<!-- svelte-ignore a11y-missing-attribute -->
		<li><a role="button" tabindex="0" on:keyup={(e) => ['Enter'].includes(e.code) && goToIndex(pageIndex + 1)} on:click={() => goToIndex(pageIndex + 1)}><span uk-pagination-next></span></a></li>
	{:else}
		<li class="uk-disabled"><span><span uk-pagination-next></span></span></li>
	{/if}
</ul>