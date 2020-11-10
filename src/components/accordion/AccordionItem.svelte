<script>
  export let title = "";
  export let isTitleHtml = false;
  export let open = false;
  export let ref = undefined;
</script>

<li class:uk-open={open} bind:this={ref}>
  <!-- svelte-ignore a11y-missing-attribute -->
  <a class="uk-accordion-title" role="button" tabindex="0" on:keyup={(e) => ['Enter'].includes(e.code) && (open = !open)}>
    {#if isTitleHtml}
      {@html title}
    {:else}{title}{/if}
  </a>
  <div class="uk-accordion-content">
    <slot />
  </div>
</li>
