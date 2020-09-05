<script>
  export let links = [];
  export let current = undefined;
  export let className = undefined;
</script>

<ul class="uk-margin-small-left uk-margin-small-top uk-margin-small-bottom uk-breadcrumb {className}">
  {#each links as link}
  <li><a href={"#" + link.href}>{link.text}</a></li>
  {/each}
  <li><span>{current}</span></li>
</ul>
