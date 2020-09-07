<script>
	/** @type {'default'|'primary'|'secondary'} */
	export let variant = "default";
	export let className = undefined;
	export let hover = false;
	/** @type {'small'|'large'|undefined} */
	export let size = undefined;
	export let title = undefined;
	/** @type {string|undefined} */
	export let badge = undefined;
	/** @type {string|undefined} */
	export let style = undefined;

	let headerDefaultSlot = null;
	let footerDefaultSlot = null;
	let mediaTopDefaultSlot = null;
	let mediaBottomDefaultSlot = null;
</script>

<div
	{style}
	class={className ? "uk-card " + className : "uk-card"} 
	class:uk-card-small={size === "small"}
	class:uk-card-large={size === "large"}
	class:uk-card-hover={hover}
	class:uk-card-default={variant === "default"}
	class:uk-card-primary={variant === "primary"}
	class:uk-card-secondary={variant === "secondary"}>
	<div class="uk-card-header" class:uk-hidden={!!headerDefaultSlot}>
		<slot name="header">
			<div bind:this={headerDefaultSlot}></div>
		</slot>
	</div>
	<div class:uk-card-media-top={!mediaTopDefaultSlot}>
		<slot name="media-top">
			<div bind:this={mediaTopDefaultSlot}></div>
		</slot>
	</div>
	<slot name="horizontal-media" />
	<div class="uk-card-body">
		{#if title}
			<h3 class="uk-card-title">{title}</h3>
		{/if}
		{#if badge}
			<div class="uk-card-badge uk-label">{badge}</div>
		{/if}
		<slot name="content" />
	</div>
	<div class:uk-card-media-bottom={!mediaBottomDefaultSlot}>
		<slot name="media-bottom">
			<div bind:this={mediaBottomDefaultSlot}></div>
		</slot>
	</div>
	<div class="uk-card-footer" class:uk-hidden={!!footerDefaultSlot}>
		<slot name="footer">
			<div bind:this={footerDefaultSlot}></div>
		</slot>
	</div>
</div>
