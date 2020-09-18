<script>
  export let heading = [];
  export let size = undefined;
  export let className = undefined;
  export let style = undefined;
  export let appearance = undefined;
  export let stickyHeader = false;
  export let ref = undefined;
  export let caption = undefined;
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
  class:uk-table={true}
  class:uk-table-middle={true}
  class:uk-table-striped={appearance === 'striped'}
  class:uk-table-divider={appearance === 'divider'}
  class:uk-table-small={size === 'small'}
  class={className}
  {style}>
  {#if caption}
    <caption>{caption}</caption>
  {/if}
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
