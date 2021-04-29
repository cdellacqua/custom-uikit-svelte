<script>
  /** @type {Array<string|{label: string, className: string|undefined, textAlign: 'center'|'right'|'left'|undefined}>} */
  export let heading = [];
  /** @type {'small'|undefined} */
  export let size = undefined;
  /** @type {string|undefined} */
  export let className = undefined;
  /** @type {string|undefined} */
  export let style = undefined;
  /** @type {'divider'|'striped'|undefined} */
  export let appearance = undefined;
  /** @type {boolean} */
  export let stickyHeader = false;
  /** @type {HTMLTableElement} */
  export let ref = undefined;
  /** @type {string|undefined} */
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
        {#each heading as col (col)}
          <th
            class={typeof col === 'object' ? col.className : undefined}
            style="text-align: {typeof col === 'object' ? (col.textAlign || 'left') : 'left'}"
            class:sticky={stickyHeader}
          >{typeof col === 'object' ? col.label : col}</th>
        {/each}
      </tr>
    </thead>
  {/if}
  <tbody>
    <slot />
  </tbody>
</table>
