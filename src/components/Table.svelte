<script>
  export let heading = [];
  export let size = undefined;
  export let className = undefined;
  export let appearance = undefined;
  export let stickyHeader = false;
</script>

<style>
  th {
    white-space: nowrap;
  }
  th.sticky {
    top: 0;
    position: sticky;
    background-color: #fff;
  }
</style>

<table
  class={className ? 'uk-table uk-table-middle ' + className : 'uk-table uk-table-middle'}
  class:uk-table-striped={appearance === 'striped'}
  class:uk-table-divider={appearance === 'divider'}
  class:uk-table-small={size === 'small'}>
  <thead>
    <tr>
      {#each heading as col}
        <th class:sticky={stickyHeader}>{col}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    <slot />
  </tbody>
</table>
