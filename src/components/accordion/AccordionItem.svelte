<script>
  export let title = "";
  export let open = false;
</script>

<li class:uk-open={open}>
  <!-- svelte-ignore a11y-missing-attribute -->
  <a class="uk-accordion-title" role="button">{title}</a>
  <div class="uk-accordion-content">
    <slot />
  </div>
</li>