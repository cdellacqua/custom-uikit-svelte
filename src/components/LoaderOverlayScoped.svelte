<script>
  import Loader from "./Loader.svelte";

  /** @type {string|undefined} */
  export let className = undefined;
  /** @type {number} */
  export let ratio = 1;
  /** @type {string|undefined} */
  export let style = undefined;
  /** @type {HTMLDivElement} */
  export let ref = undefined;
  /** @type {number} */
  export let opacity = 0.8;
  /** @type {boolean} */
  export let loading = true;
  /** @type {'default'|'muted'|'primary'|'secondary'} */
  export let background = 'default';
  /** @type {string|undefined} */
  export let backgroundClassName = undefined;
  /** @type {string|undefined} */
  export let backgroundStyle = undefined;
  /** @type {'bottom'|'right'|'top'|'left'} */
  export let slotPosition = "bottom";
</script>

<style>
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999999999;
	}
	.overlay > div {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
</style>

{#if loading}
  <div
    class:overlay={true}
    bind:this={ref}
    class={className}
    {style}>
    <div
      style="opacity: {opacity}; {backgroundStyle || ''}"
      class:uk-background-muted={background === 'muted'}
      class:uk-background-default={background === 'default'}
      class:uk-background-primary={background === 'primary'}
      class:uk-background-secondary={background === 'secondary'}
      class={backgroundClassName}
    ></div>
    <div
        class="uk-flex uk-flex-middle uk-flex-center uk-flex"
        class:uk-flex-column={slotPosition === 'bottom' || slotPosition === 'top'}>
        {#if slotPosition === 'bottom' || slotPosition === 'right'}
          <Loader {ratio} />
        {/if}
        <slot />
        {#if slotPosition === 'top' || slotPosition === 'left'}
          <Loader {ratio} />
        {/if}
      </div>
  </div>
{/if}
