<script>
  export let path = [];
  export let className = undefined;
</script>

<ul class="uk-margin-small-left uk-margin-small-top uk-margin-small-bottom uk-breadcrumb {className}">
  {#each path.slice(0, -1) as entry}
    <li><a href={"#" + entry.href}>{entry.label}</a></li>
  {/each}
  {#if path.length > 0}
    <li><span>{path[path.length - 1].label}</span></li>
  {/if}
</ul>
