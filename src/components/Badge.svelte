<script>
	/**
	 * @component This component can be used as a notification badge or as a general purpose chip
	 * @slot {"default": "The content of the badge"} 
	 * @dispatch {}
	 * @forward {"click": "HTMLSpanElement"} */

	/** 
	 * @description A string containing any additional classes to apply to the component
	 * @type {string|undefined} */
	export let className = undefined;
	/** 
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
	export let style = undefined;
	/** 
	 * @readonly
	 * @description The HTML reference of the component
	 * @type {HTMLSpanElement} */
  export let ref = undefined;
</script>

<span bind:this={ref} class={className ? "uk-badge " + className : "uk-badge"} {style} on:click>
	<slot />
</span>