<script>
  export let title = "";
  export let isTitleHtml = false;
  export let ref = undefined;
</script>

<li bind:this={ref}>
  <!-- svelte-ignore a11y-missing-attribute -->
  <a class="uk-accordion-title" role="button" tabindex="0">
    {#if isTitleHtml}
      {@html title}
    {:else}{title}{/if}
  </a>
  <div class="uk-accordion-content">
    <slot />
  </div>
</li>
