<script>
	import { onDestroy, onMount } from "svelte";

	import { scrollY } from "../stores/responsive";
	import Nav from "./Nav.svelte";

	/**
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
	export let style = undefined;
	/**
	 * @default undefined
	 * @description A string containing any additional classes to apply to the component
	 * @type {string|undefined} */
	export let className = undefined;

	/**
	 * @description A string specifying custom style properties for the contained Nav component
	 * @type {string|undefined} */
	export let navStyle = undefined;
	/**
	 * @default undefined
	 * @description A string containing any additional classes to apply to the contained Nav component
	 * @type {string|undefined} */
	export let navClassName = undefined;

	/**
	 * @readonly
	 * @description The HTML reference of the component
	 * @type {HTMLDivElement} */
	export let ref = undefined;
	/**
	 * @description The current height of this component
	 * @type {number}
	 * @readonly */
	export let height = 0;
	/**
	 * @default true
	 * @description Whether to add a spacer underneath this component or not
	 * @type {boolean} */
	export let spacer = true;

	let scrollableNav;
	let animationFrameId = null;
	let oldY = 0;
	let accumulatorY = 0;
	function updateNavbar() {
		if (animationFrameId) {
			window.cancelAnimationFrame(animationFrameId);
		}
		animationFrameId = window.requestAnimationFrame(() => {
			const newY = window.scrollY;
			accumulatorY = Math.min(
				0,
				Math.max(-ref.offsetHeight, accumulatorY - (newY - oldY))
			);
			if (window.scrollY < 0) {
				accumulatorY = 0;
			}
			if (accumulatorY === 0) {
				ref.style.position = "fixed";
				ref.style.top = "0";
			} else {
				ref.style.position = "absolute";
				ref.style.top = accumulatorY + window.scrollY + "px";
			}
			oldY = newY;
		});
	}
	$: $scrollY, updateNavbar();

	/** @type {ResizeObserver} */
	let observer = null;
	onMount(() => {
		if (window.ResizeObserver) {
			observer = new ResizeObserver(() => {
				if (ref) {
					height = ref.offsetHeight;
				}
			});
			observer.observe(ref);
		}
	});
	onDestroy(() => {
		if (observer) {
			observer.disconnect();
			observer = null;
		}
	});
</script>

<div
	bind:this={ref}
	class={className}
	style="position:absolute;top:0;left:0;width:100%;z-index:980;{style || ''}"
>
	<Nav bind:ref={scrollableNav} style={navStyle} className={navClassName}>
		<slot />
	</Nav>
</div>
{#if spacer}
	<div style="height: {height}px; width: 100%;" />
{/if}
