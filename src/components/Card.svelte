<script>

	/**
	 * @component The card component allows you to create nice box layouts
	 * @slot {
	 * 	"header": "The content to be put inside the header ('uk-card-header') of the card. Leave empty if no header is wanted",
	 * 	"media-top": "The content to be put inside the 'uk-card-media-top' class. This is useful if you want to add an image to your card which is supposed to take up the top half of the card. Leave empty if you don't want the card to have this layout",
	 * 	"horizontal-media": "For more complex layouts (e.g. an horizontal card with an image to the right/left) you can use this slot, which is placed before the card body. Leave empty if this is not needed",
	 * 	"default": "The content of the card",
	 * 	"media-bottom": "The content to be put inside the 'uk-card-media-bottom' class. This is useful if you want to add an image to your card which is supposed to take up the bottom half of the card. Leave empty if you don't want the card to have this layout",
	 * 	"footer": "Fill this slot if you want your card to have a footer. The content will be put inside the 'uk-card-footer' section"
	 * }
	 * @dispatch {}
	 * @forward {} */

	/** 
	 * @description Used to style the card. If set to hover, the card will appear flat unless it's being hovered
	 * @type {'default'|'primary'|'secondary'|'hover'} */
	export let variant = "default";
	/** 
	 * @description A string containing any additional classes to apply to the component
	 * @type {string|undefined} */
	export let className = undefined;
	/**
	 * @description Add a hover animation to the card
	 * @type {boolean} */
	export let hover = false;
	/** 
	 * @description Defines the padding of the card. In undefined, default values will be applied
	 * @type {'small'|'large'|undefined} */
	export let size = undefined;
	/**
	 * @description The title of the card. This will be represented inside the body of the card. If you have defined a custom header slot, you should manually specify the title inside it and not use this property
	 * @type {string|undefined} */ 
	export let title = undefined;
	/** 
	 * @description The text content of the card badge, which is displayed in the top right angle of the card. If undefined no badge will be added
	 * @type {string|undefined} */
	export let badge = undefined;
	/** 
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
	export let style = undefined;
	/** 
	 * @readonly
	 * @description The HTML reference of the component
	 * @type {HTMLDivElement} */
  export let ref = undefined;

	let headerDefaultSlot = null;
	let footerDefaultSlot = null;
	let mediaTopDefaultSlot = null;
	let mediaBottomDefaultSlot = null;
</script>

<div
	bind:this={ref}
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
		<slot />
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
