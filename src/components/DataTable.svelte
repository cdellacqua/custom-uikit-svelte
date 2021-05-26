<script>
  import { createEventDispatcher } from "svelte";
  import { noop } from "../helpers/lambdas";
  import AsyncDataTable from "./AsyncDataTable.svelte";

  /** @type {Array<{label: string, key: string, className: string|undefined, textAlign: 'center'|'right'|'left'|undefined, orderable: boolean|Comparator|undefined, searchable: boolean|DataTableSearchCallback|undefined, render: DataTableRenderer|undefined}>} */
  export let columns = [];
  /** @type {Array<Record<string, any>>} */
  export let rows = [];
  /** @type {Array<Record<string, any>>} */
  export let visibleRows = [];
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
  /** @type {'default'|'primary'|'secondary'|'danger'|'text'|'link'} */
  export let searchButtonVariant = "default";
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
  /** @type {string} */
  export let query = "";
  /** @type {Array<{key: string, direction: 'desc'|'asc'}>} */
  export let orderBy = [];
  /** @type {boolean} @default true */
  export let horizontalScroll = true;
  /** @type {number} */
  export let recordsPerPage = 25;
  /** @type {number} */
  export let numbersPerSide = 4;
  /** @type {number} */
  export let pageIndex = 0;
  /** @type {number} @readonly */
  export let total = 0;
  /** @type {number} @readonly */
  export let filtered = 0;

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

  function dataProvider(query, orderBy, recordsPerPage, pageIndex) {
    const filteredRows = rows.filter((row) =>
      columns.some((col) => {
        if (col.searchable === false) {
          return query.length === 0;
        }
        if (typeof col.searchable === "function") {
          return col.searchable(query, row[col.key], row);
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

    if (orderBy.length > 0) {
      const columnsByKey = columns.reduce((a, c) => {
        a[c.key] = c;
        return a;
      }, {});
      filteredRows.sort((r1, r2) => {
        for (const columnSort of orderBy) {
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
    }
    return {
      total: rows.length,
      filtered: filteredRows.length,
      records: filteredRows.slice(
        pageIndex * recordsPerPage,
        (pageIndex + 1) * recordsPerPage
      ),
    };
  }

  $: if (orderBy) {
    dispatch("sort", orderBy);
  }
</script>

<AsyncDataTable
  {appearance}
  on:query
  on:row-click
  on:row-dblclick
  {className}
  {columns}
  {dataProvider}
  debounceMs={0}
  bind:filtered
  {horizontalScroll}
  {instantSearch}
  dataProviderErrorHandler={noop}
  {noResultText}
  {numbersPerSide}
  bind:orderBy
  bind:pageIndex
  {placeholder}
  bind:query
  {recordsPerPage}
  bind:ref
  bind:rows={visibleRows}
  {searchButtonVariant}
  {size}
  {stickyHeader}
  {style}
  bind:total
/>
