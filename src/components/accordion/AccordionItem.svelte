<script>
  export let title = "";
  export let open = false;
</script>

<li class:uk-open={open}>
  <a class="uk-accordion-title" href="#">{title}</a>
  <div class="uk-accordion-content">
    <slot />
  </div>
</li>