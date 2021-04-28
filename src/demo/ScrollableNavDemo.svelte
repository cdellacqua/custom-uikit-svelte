<script>
	import { ScrollableNav } from "../main";
	import { scrollY } from "../stores/responsive";

	let ref;
</script>

<div bind:this={ref}>
	<i>Scroll past this element to enable the scrollable nav and then scroll up to see it</i>
</div>
{#if ref && $scrollY < ref.offsetTop}
	<ScrollableNav spacer={false}>
		<div class="uk-navbar-left">
			<ul class="uk-navbar-nav">
				<li class="uk-active"><a href="/#">Home</a></li>
			</ul>
		</div>
	</ScrollableNav>
{/if}
