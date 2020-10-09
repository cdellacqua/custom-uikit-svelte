<script>
  /** @type {string|undefined} */
  export let className = undefined;
  /** @type {number} */
  export let ratio = 1;
  /** @type {string|undefined} */
  export let style = undefined;
  /** @type {HTMLDivElement} */
  export let ref = undefined;
</script>

<div bind:this={ref} class={className} {style} uk-spinner="ratio: {ratio}" />
