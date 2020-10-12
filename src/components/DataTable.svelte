<script>
  import { createEventDispatcher } from "svelte";
  import { identity, noop } from "../helpers/lambdas";
  import SearchInput from "./form/SearchInput.svelte";

  /**
   * @callback Comparator
   * @param v1
   * @param v2
   * @return {number}
   */

  /**
   * @callback Renderer
   * @param value
   * @param row
   * @return {string|object}
   */

  /** @type {Array<{label: string, key: string, className: string|undefined, textAlign: 'center'|'right'|'left'|undefined, orderable: boolean|Comparator|undefined, searchable: boolean|undefined, render: Renderer|undefined}>} */
  export let columns = [];
  /** @type {Array<Record<string, any>>} */
  export let rows = [];
  /** @type {undefined|'small'} */
  export let size = undefined;
  /** @type {undefined|string} */
  export let className = undefined;
  /** 
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
  export let style = undefined;
  /** @type {'divider'|'striped'} */
  export let appearance = "divider";
  /** @type {boolean} */
  export let stickyHeader = false;
  /** @type {string} */
  export let placeholder = "";
  /** @type {string|undefined} */
  export let noResultText = undefined;
  /** @type {HTMLTableElement} */
  export let ref = undefined;

  const dispatch = createEventDispatcher();

  function fallbackComparator(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }

  let query = "";
  let filteredRows;
  let computedRows;
  $: if (rows) {
    filteredRows = rows.filter((row) =>
      columns.some((col) => {
        if (col.searchable === false) {
          return false;
        }
        if (!col.render) {
          return String(row[col.key])
            .toLowerCase()
            .includes(query.toLowerCase());
        }
        const output = col.render(row[col.key], row);
        if (typeof output === "string") {
          return output.toLowerCase().includes(query.toLowerCase());
        }
        return false;
      })
    );
    computedRows = [...filteredRows];
  }

  let ordering = {};

  function orderBy(col) {
    if (ordering[col.key] === 1) {
      ordering = { [col.key]: -1 };
    } else if (ordering[col.key] === -1) {
      ordering = {};
    } else {
      ordering = { [col.key]: 1 };
    }

    if (Object.keys(ordering).length === 0) {
      computedRows = [...filteredRows];
    } else {
      const orderedRows = [...filteredRows];
      orderedRows.sort((r1, r2) => {
        if (typeof col.orderable === "function") {
          return col.orderable(r1[col.key], r2[col.key]) * ordering[col.key];
        }
        return fallbackComparator(r1[col.key], r2[col.key]) * ordering[col.key];
      });
      computedRows = orderedRows;
    }
  }

  /** @type {HTMLInputElement} */
  let searchInput;
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

  .orderable {
    cursor: row-resize;
  }

  .table-hscroll-wrapper {
    max-width: 100%;
    overflow-x: auto;
  }

  th .uk-icon {
    width: 20px;
  }
</style>

<form on:submit|preventDefault={() => searchInput.blur()}>
  <SearchInput
    bind:ref={searchInput}
    {placeholder}
    bind:value={query}
    optional />
</form>

<div class="table-hscroll-wrapper">
  <table
    bind:this={ref}
    {style}
    class:uk-table={true}
    class:uk-table-middle={true}
    class:uk-table-hover={true}
    class={className}
    class:uk-table-striped={appearance === 'striped'}
    class:uk-table-divider={appearance === 'divider'}
    class:uk-table-small={size === 'small'}>
    <thead>
      <tr>
        {#each columns as col}
          <th
            style="text-align: {col.textAlign || 'left'}"
            class:sticky={stickyHeader}
            class:descending={Object.keys(ordering).some((key) => key === col.key && ordering[key] === -1)}
            on:click={() => (col.orderable !== false ? orderBy(col) : noop())}
            class:orderable={col.orderable !== false}>
            {col.label}
            {#if ordering[col.key] === 1}
              <span class="uk-icon" uk-icon="icon: chevron-up" />
            {:else if ordering[col.key] === -1}
              <span class="uk-icon" uk-icon="icon: chevron-down" />
            {:else if col.orderable !== false}
              <span
                style="visibility: hidden"
                class="uk-icon"
                uk-icon="icon: chevron-down" />
            {/if}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#if computedRows.length === 0 && noResultText}
        <tr>
          <td colspan={columns.length} style="font-style: italic; text-align: center">
            {noResultText}
          </td>
        </tr>
      {:else}
        {#each computedRows as row}
          <tr on:click={() => dispatch('row-click', row)}>
            {#each columns as col}
              <td
                class={col.className}
                style="text-align: {col.textAlign || 'left'}">
                {#if !col.render}
                  {row[col.key]}
                {:else if typeof col.render(row[col.key], row) === 'object'}
                  <svelte:component
                    this={col.render(row[col.key], row).component}
                    {...col.render(row[col.key], row).props} />
                {:else}{col.render(row[col.key], row)}{/if}
              </td>
            {/each}
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>