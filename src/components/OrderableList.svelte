<script>
import { tick } from "svelte";

import { fade } from "svelte/transition";


	export let items = [];
	export let type = undefined;
	export let ref = undefined;

	function invert(fromIndex, toIndex) {
		if (toIndex < 0 || toIndex >= items.length) {
			return;
		}
		let fromLi = ref.querySelector('li:nth-child(' + (fromIndex + 1) + ')');
		let toLi = ref.querySelector('li:nth-child(' + (toIndex + 1) + ')');
		fromLi.classList.remove('uk-animation-slide-bottom-medium', 'uk-animation-slide-top-medium');
		toLi.classList.remove('uk-animation-slide-bottom-medium', 'uk-animation-slide-top-medium');
		items = items.map((item, index) => (index === fromIndex) ? items[toIndex] : (index === toIndex) ? items[fromIndex] : item);
		tick().then(_ => {
			if (fromIndex > toIndex) {
				fromLi.classList.add('uk-animation-slide-bottom-medium', 'uk-animation-fast');
				toLi.classList.add('uk-animation-slide-top-medium', 'uk-animation-fast');
			} else {
				fromLi.classList.add('uk-animation-slide-top-medium', 'uk-animation-fast');
				toLi.classList.add('uk-animation-slide-bottom-medium', 'uk-animation-fast');
			}
		});
		
	}
</script>
<ul class="uk-list" bind:this={ref}>
	{#each items as item, index (item) }
		<li class="uk-box-shadow-hover-small uk-padding-small" transition:fade|local>
			<div class="uk-flex">
				<div class="uk-flex uk-flex-column uk-margin-small-right">
					<!-- svelte-ignore a11y-missing-attribute -->
					<!-- svelte-ignore a11y-missing-content -->
					<a uk-icon="chevron-up" role="button" disabled={index === 0} on:click={() => invert(index, index - 1)}></a>
					<!-- svelte-ignore a11y-missing-attribute -->
					<!-- svelte-ignore a11y-missing-content -->
					<a uk-icon="chevron-down" role="button" disabled={index >= items.length - 1} on:click={() => invert(index, index + 1)}></a>
				</div>
				
				{#if !type && !item.type}
					{#if item.html}
						{@html item.html}
					{:else if item.text}
						{item.text}
					{/if}
				{:else}
					<svelte:component
						this={item.type || type}
						{...(item.props || {})}
					>
					{#if item.text}
						{item.text}
					{:else if item.html}
						{@html item.html}
					{/if}
					</svelte:component>
				{/if}
			</div>
		</li>
	{/each}
</ul>