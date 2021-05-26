<script>
	/** 
	 * @component This alert can be used to display success, warning and error messages
	 * @slot {"default": "The content of the alert"}
	 * @dispatch {"hide": {"type": "Array<UIkitComponent>", "description": "Fires after the alert is hidden"}, 
	 * 						"beforehide": {"type": "Array<UIkitComponent>", "description": "Fires before hiding the alert. If preventDefault is called on this event, the alert will not be hidden"}} 
	 * @forward {} */

	/** 
	 * @default true
	 * @description Whether the alert is dismissible
	 * @type {boolean} */
	export let closable = true;
	/** 
	 * @default undefined
	 * @description Specifies the look of the component
	 * @type {'primary'|'success'|'danger'|'warning'|undefined} */
	export let variant = undefined;
	/** 
	 * @default true
	 * @description Fade out or use the uikit Animation component
	 * @type {boolean|string} */
	export let animation = true;
	/** 
	 * @default 150
	 * @description Animation duration in milliseconds
	 * @type {number} */
	export let animationDuration = 150;
	/** 
	 * @default undefined
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
	export let style = undefined;
	/** 
	 * @default undefined
	 * @description A string containing any additional classes to apply to the component
	 * @type {string|undefined} */
	export let className = undefined;
	/** 
	 * @readonly
	 * @description The HTML reference of the component
	 * @type {HTMLDivElement} */
	export let ref = undefined;
</script>
<div
	on:hide|stopPropagation
	on:beforehide|stopPropagation
	bind:this={ref}
	{style}
	class={className}
	class:uk-alert-primary={variant === "primary"}
	class:uk-alert-success={variant === "success"}
	class:uk-alert-warning={variant === "warning"}
	class:uk-alert-danger={variant === "danger"}
	uk-alert="animation: {animation}; duration: {animationDuration};">
	{#if closable}
		<button class="uk-alert-close" uk-close></button>
	{/if}
	<slot />
</div>
