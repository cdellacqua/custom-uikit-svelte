<script>
  import { createEventDispatcher, onMount } from "svelte";
  import Button from "./Button.svelte";
  import SearchInput from "./form/SearchInput.svelte";
  import Loader from "./Loader.svelte";
  import LoaderOverlayScoped from "./LoaderOverlayScoped.svelte";
  import { debounce } from "debounce";
  import { noop } from "../helpers/lambdas";
  import Pagination from "./Pagination.svelte";
  import { sleep } from "../helpers/time";

  /**
   * @callback Renderer
   * @param value
   * @param row
   * @return {string|{ component: SvelteComponent, props: Record<string, any>|undefined, onClick: Function, textContent: string|undefined}}
   */

  /**
   * @callback DataProvider
   * @param {string} query
   * @param {Array.<{key: string, direction: 'asc'|'desc'}>} ordering
   * @param {number} recordsPerPage
   * @param {number} pageIndex
   * @return {Promise.<{total: number, filtered: number, records: Array.<Record.<string, any>>}>}
   */

  /** @type {Array<{label: string, key: string, className: string|undefined, textAlign: 'center'|'right'|'left'|undefined, orderable: boolean|undefined, searchable: boolean|undefined, render: Renderer|undefined}>} */
  export let columns = [];
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
  /** @type {string} */
  export let query = "";
  /** @type Array.<{key: string, direction: 'desc'|'asc'}> */
  export let ordering = [];
  /** @type {boolean} @default true */
  export let horizontalScroll = true;
  /** @type {DataProvider} */
  export let dataProvider;
  /** @type {Function} */
  export let dataProviderErrorHandler = noop;
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
  /** @type {boolean} @readonly */
  export let loading = false;
  /** @type {number} */
  export let debounceMs = 200;

  const dispatch = createEventDispatcher();

  $: dispatch("query", query);

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
  }

  let externalAssignment = true;
  $: if (ordering || pageIndex >= 0 || recordsPerPage >= 0) {
    if (externalAssignment) {
      debouncedRefresh.clear();
      debouncedRefresh();
    }
    externalAssignment = true;
  }

  let rows = null;
  let lastQuery = null;
  let lastOrdering = null;
  let lastRecordsPerPage = null;
  let lastPageIndex = null;
  let forceUpdate = false;
  async function _reload() {
    if (
      !loading &&
      (forceUpdate ||
        query !== lastQuery ||
        JSON.stringify(ordering) !== JSON.stringify(lastOrdering) ||
        lastRecordsPerPage !== recordsPerPage ||
        lastPageIndex !== pageIndex)
    ) {
      loading = true;
      try {
        let providerQuery = lastQuery;
        let providerRecordsPerPage = lastRecordsPerPage;
        let providerOrdering = lastOrdering;
        let providerPageIndex = lastPageIndex;
        let data;
        let debounce = false;

        function updateProviderArgs() {
          providerQuery = query;
          providerRecordsPerPage = recordsPerPage;
          providerOrdering = ordering.map((o) => ({ ...o }));
          providerPageIndex = pageIndex;
        }

        function providerArgsChanged() {
          return (
            providerQuery !== query ||
            providerRecordsPerPage !== recordsPerPage ||
            JSON.stringify(providerOrdering) !== JSON.stringify(ordering) ||
            providerPageIndex !== pageIndex ||
            forceUpdate
          );
        }

        do {
          do {
            if (recordsPerPage !== providerRecordsPerPage) {
              pageIndex = Math.floor(
                (lastPageIndex * providerRecordsPerPage) / recordsPerPage
              );
            }
            if (query !== providerQuery) {
              pageIndex = 0;
            }

            forceUpdate = false;
            updateProviderArgs();
            if (debounce) {
              await sleep(debounceMs);
            }
          } while (providerArgsChanged());

          data = await dataProvider(query, ordering, recordsPerPage, pageIndex);

          debounce = true;
        } while (providerArgsChanged());

        rows = data.records;
        total = data.total;
        filtered = data.filtered;

        lastQuery = query;
        lastRecordsPerPage = recordsPerPage;
        lastOrdering = ordering.map((o) => ({ ...o }));
        lastPageIndex = pageIndex;

        externalAssignment = false;
      } catch (err) {
        dataProviderErrorHandler(err);
      } finally {
        loading = false;
      }
    }
  }

  export function reload() {
    forceUpdate = true;
    _reload();
  }

  const debouncedRefresh = debounce(_reload, debounceMs);

  /** @type {HTMLInputElement} */
  let searchInput;

  let loaderTop = 0;
  let loaderHeight = 0;

  function updateLoaderTop() {
    loaderTop = ref.querySelector('th').offsetHeight;
  }
  onMount(() => {
    updateLoaderTop();
  });
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

  .inhibit {
    pointer-events: none;
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
        on:input={() => {
          debouncedRefresh.clear();
          debouncedRefresh();
        }}
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
      on:click={() => reload()}
      className="uk-padding-small uk-padding-remove-vertical uk-margin-bottom" />
  </form>
{/if}
<svelte:window on:resize={() => updateLoaderTop()} />
<div style="position: relative">
  <div class:table-hscroll-wrapper={horizontalScroll}>
    <table
      class:uk-margin-remove={true}
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
          {#each columns as col (col)}
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
              {#if col.orderable !== false && ordering.find((o) => o.key === col.key)?.direction === 'asc'}
                <span class="uk-icon" uk-icon="icon: chevron-up" />
              {:else if col.orderable !== false && ordering.find((o) => o.key === col.key)?.direction === 'desc'}
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
      <tbody class:inhibit={loading} bind:offsetHeight={loaderHeight}>
        {#if !rows}
          <tr>
            <td colspan={columns.length} class:uk-text-center={true} />
          </tr>
        {:else if rows.length === 0 && noResultText}
          <tr>
            <td
              colspan={columns.length}
              style="font-style: italic; text-align: center">
              {noResultText}
            </td>
          </tr>
        {:else}
          {#each rows as row (row)}
            <tr on:click={() => dispatch('row-click', row)}>
              {#each columns as col (col)}
                <td
                  class={col.className}
                  style="text-align: {col.textAlign || 'left'}">
                  {#if !col.render}
                    {row[col.key]}
                  {:else if typeof col.render(row[col.key], row) === 'object'}
                    <svelte:component
                      this={col.render(row[col.key], row).component}
                      {...col.render(row[col.key], row).props || {}}
                      on:click={(e) => {
                        const onClick = col.render(row[col.key], row).onClick;
                        if (onClick) {
                          e.stopPropagation();
                          onClick(e);
                        }
                      }}>
                      {col.render(row[col.key], row).textContent || ''}
                    </svelte:component>
                  {:else}{col.render(row[col.key], row)}{/if}
                </td>
              {/each}
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>
    {#if loading}
      <div style={`position: absolute; left: 0; right: 0; height: ${loaderHeight}px; top: ${loaderTop}px; z-index: 999999`}>
        <LoaderOverlayScoped opacity={0.2} />
      </div>
    {/if}
  </div>
  <Pagination
    center
    numberOfPages={Math.ceil(filtered / recordsPerPage)}
    {pageIndex}
    {numbersPerSide}
    on:page-click={({ detail }) => (pageIndex = detail)} />
</div>
