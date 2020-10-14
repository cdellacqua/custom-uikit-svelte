<script>
  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";
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
   * @return {string|{ component: SvelteComponent, props: Record<string, any>|undefined, onClick: Function}}
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
  /** @type {boolean} @default true */
  export let instantSearch = true;

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
          return query.length === 0;
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

  $: dispatch("query", query);

  /** @type Array.<{key: string, direction: 'desc'|'asc'}> */
  let ordering = [];

  function sort() {
    if (ordering.length === 0) {
      computedRows = [...filteredRows];
    } else {
      const orderedRows = [...filteredRows];
      const columnsByKey = columns.reduce((a, c) => {
        a[c.key] = c;
        return a;
      }, {});
      orderedRows.sort((r1, r2) => {
        for (const columnSort of ordering) {
          let comparison = 0;
          if (typeof columnsByKey[columnSort.key].orderable === "function") {
            comparison =
              columnsByKey[columnSort.key].orderable(
                r1[columnSort.key],
                r2[columnSort.key]
              ) * (columnSort.direction === "asc" ? 1 : -1);
          } else {
            comparison =
              fallbackComparator(r1[columnSort.key], r2[columnSort.key]) *
              (columnSort.direction === "asc" ? 1 : -1);
          }
          if (comparison !== 0) {
            return comparison;
          }
        }
        return 0;
      });
      computedRows = orderedRows;
    }
    dispatch("sort", ordering);
  }

  function orderBy(key, append) {
    if (append) {
      const existingSortIndex = ordering.findIndex((o) => o.key === key);
      if (existingSortIndex > -1) {
        if (ordering[existingSortIndex].direction === "asc") {
          ordering[existingSortIndex].direction = "desc";
        } else {
          ordering.splice(existingSortIndex, 1);
          ordering = [...ordering];
        }
      } else {
        ordering = [...ordering, { key: key, direction: "asc" }];
      }
    } else {
      if (
        ordering.length === 0 ||
        ordering.length > 1 ||
        ordering[0].key !== key
      ) {
        ordering = [{ key: key, direction: "asc" }];
      } else if (ordering[0].direction === "asc") {
        ordering = [{ key: key, direction: "desc" }];
      } else {
        ordering = [];
      }
    }

    sort();
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

  th {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
</style>

{#if columns.some((c) => c.searchable !== false)}
  <form
    on:submit|preventDefault={() => {
      if (!instantSearch) {
        query = searchInput.value;
      }
      searchInput.blur();
    }}
    class="uk-flex uk-width-1-1">
    {#if instantSearch}
      <SearchInput
        className="uk-width-expand"
        bind:ref={searchInput}
        {placeholder}
        bind:value={query}
        optional />
    {:else}
      <SearchInput
        className="uk-width-expand"
        bind:ref={searchInput}
        {placeholder}
        value={query}
        optional />
    {/if}
    <Button
      type="search"
      icon="search"
      className="uk-padding-small uk-padding-remove-vertical uk-margin-bottom" />
  </form>
{/if}

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
            on:click={(e) => {
              if (col.orderable !== false) {
                orderBy(col.key, e.shiftKey);
              }
            }}
            on:contextmenu={(e) => {
              if (col.orderable !== false) {
                e.preventDefault();
                orderBy(col.key, true);
                window.navigator.vibrate?.(50);
              }
            }}
            class:orderable={col.orderable !== false}>
            {col.label}
            {#if ordering.find((o) => o.key === col.key)?.direction === 'asc'}
              <span class="uk-icon" uk-icon="icon: chevron-up" />
            {:else if ordering.find((o) => o.key === col.key)?.direction === 'desc'}
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
          <td
            colspan={columns.length}
            style="font-style: italic; text-align: center">
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
                    {...(col.render(row[col.key], row).props || {})}
                    on:click={(e) => {
                      const onClick = col.render(row[col.key], row).onClick;
                      if (onClick) {
                        e.stopPropagation();
                        onClick(e);
                      }
                    }}
                  >
                    {col.render(row[col.key], row).slot || ''}
                  </svelte:component>
                {:else}{col.render(row[col.key], row)}{/if}
              </td>
            {/each}
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>
