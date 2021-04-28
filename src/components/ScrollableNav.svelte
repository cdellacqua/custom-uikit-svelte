<script>
	import { scrollY } from "../stores/responsive";
	import Nav from "./Nav.svelte";

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
</script>

<div
	bind:offsetHeight={height}
	bind:this={ref}
	style="position:absolute;top:0;left:0;width:100%;z-index:980;"
>
	<Nav bind:ref={scrollableNav}>
		<slot />
	</Nav>
</div>
{#if spacer}
	<div style="height: {height}px; width: 100%;" />
{/if}
