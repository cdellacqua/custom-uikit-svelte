<script>
	export let closable = true;
	/** @type {'primary'|'success'|'danger'|'warning'|undefined} */
	export let variant = undefined;
	export let animation = true;
	export let animationDuration = 150;
	export let style = undefined;
	export let className = undefined;
	export let ref = undefined;
</script>
<div
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
</div>