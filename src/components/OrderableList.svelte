<script>
	import { cubicInOut } from "svelte/easing";

	/** @type {Array.<{text: string|undefined, html: string|undefined, props: Record<string, any>|undefined, type: SvelteComponent|undefined}>} */
	export let items = [];
	/** @type {SvelteComponent|undefined} */
	export let type = undefined;
	/** @type {HTMLUListElement} @readonly */
	export let ref = undefined;
	/** @type {number} */
	export let animationDuration = 500;
	/**
	 * Whether to show or hide the move-to-top and move-to-bottom buttons
	 * @type {boolean} */
	export let moveToBoundaries = false;

	let foregroundElement = null;
	function moveItem(previousIndex, delta) {
		const element = ref.children[previousIndex];
		foregroundElement = element;
		const swapElement =
			element[delta === -1 ? "previousElementSibling" : "nextElementSibling"];
		if (swapElement) {
			const tmp = items[previousIndex];
			items[previousIndex] = items[previousIndex + delta];
			items[previousIndex + delta] = tmp;
			items = [...items];
		}
	}
	function moveUp(index) {
		moveItem(index, -1);
	}
	function moveDown(index) {
		moveItem(index, 1);
	}

	function moveTop(index) {
		foregroundElement = ref.children[index];
		const subject = items.splice(index, 1)[0];
		items = [subject, ...items];
	}

	function moveBottom(index) {
		foregroundElement = ref.children[index];
		const subject = items.splice(index, 1)[0];
		items = [...items, subject];
	}

	function animation(node, { from, to }, params) {
		const dx = from.left - to.left;
		const dy = from.top - to.top;

		return {
			delay: 0,
			duration: animationDuration,
			easing: cubicInOut,
			css: (t, u) => {
				const isForeground = node === foregroundElement;
				const ratio =
					1 +
					(isForeground
						? (0.5 - Math.abs(t - 0.5)) / 25
						: -(0.5 - Math.abs(u - 0.5)) / 25);
				return `
					position: relative;
					transform: translate(${u * dx}px, ${u * dy}px) scale(${ratio});
					z-index: ${isForeground ? "1" : "0"};
				`;
			},
		};
	}
</script>

<style>
	.cursor-pointer {
		cursor: pointer;
	}
</style>

<ul class="uk-list" bind:this={ref}>
	{#each items as item, index (item)}
		<li
			animate:animation
			class="uk-box-shadow-medium uk-padding-small uk-background-default	">
			<div class="uk-flex">
				<div
					class="uk-flex uk-flex-column uk-flex-center uk-margin-small-right">
					{#if moveToBoundaries}
						<span
							uk-icon="icon: chevron-double-up; ratio: 1.2"
							role="button"
							class:cursor-pointer={index > 0}
							disabled={index === 0}
							on:click={() => index > 0 && moveTop(index)} />
					{/if}

					<span
						uk-icon="icon: chevron-up; ratio: 1.2"
						role="button"
						class:cursor-pointer={index > 0}
						disabled={index === 0}
						on:click={() => index > 0 && moveUp(index)} />

					<span
						uk-icon="icon: chevron-down; ratio: 1.2"
						role="button"
						class:cursor-pointer={index < items.length - 1}
						disabled={index >= items.length - 1}
						on:click={() => index < items.length - 1 && moveDown(index)} />
					{#if moveToBoundaries}
						<span
							uk-icon="icon: chevron-double-down; ratio: 1.2"
							role="button"
							class:cursor-pointer={index < items.length - 1}
							disabled={index >= items.length - 1}
							on:click={() => index < items.length - 1 && moveBottom(index)} />
					{/if}
				</div>
				<div class="uk-margin-small-right">
					<hr class="uk-divider-vertical uk-height-1-1" />
				</div>

				{#if !type && !item.type}
					{#if item.html}
						{@html item.html}
					{:else if item.text}{item.text}{/if}
				{:else if item.text}
					<svelte:component this={item.type || type} {...(item.props || {})}>
						{item.text}
					</svelte:component>
				{:else if item.html}
					<svelte:component this={item.type || type} {...(item.props || {})}>
						{@html item.html}
					</svelte:component>
				{:else}
					<svelte:component this={item.type || type} {...(item.props || {})} />
				{/if}
			</div>
		</li>
	{/each}
</ul>
