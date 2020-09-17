<script>
  export let heading = [];
  export let size = undefined;
  export let className = undefined;
  export let appearance = undefined;
  export let stickyHeader = false;
  export let ref = undefined;
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
  bind:this={ref}
  class={className ? 'uk-table uk-table-middle ' + className : 'uk-table uk-table-middle'}
  class:uk-table-striped={appearance === 'striped'}
  class:uk-table-divider={appearance === 'divider'}
  class:uk-table-small={size === 'small'}>
  {#if heading && heading.length > 0}
    <thead>
      <tr>
        {#each heading as col}
          <th class:sticky={stickyHeader}>{col}</th>
        {/each}
      </tr>
    </thead>
  {/if}
  <tbody>
    <slot />
  </tbody>
</table>
