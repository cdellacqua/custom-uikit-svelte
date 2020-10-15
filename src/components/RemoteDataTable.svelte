<script>
  import { createEventDispatcher, onMount } from "svelte";
  import Button from "./Button.svelte";
  import SearchInput from "./form/SearchInput.svelte";
import Loader from "./Loader.svelte";
import LoaderOverlayScoped from "./LoaderOverlayScoped.svelte";
import { debounce } from 'debounce';
import { noop } from "../helpers/lambdas";

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
  export let paginationShortcuts = 4;
  /** @type {number} */
  export let pageIndex = 0;

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
  $: if (ordering || pageIndex >= 0) {
    if (externalAssignment) {
      debouncedRefresh.clear();
      debouncedRefresh();
    }
    externalAssignment = true;
  }

  let total = 0;
  let filtered = 0;

  let rows = null;
  let lastQuery = null;
  let lastOrdering = null;
  let lastRecordsPerPage = null;
  let lastPageIndex = null;
  let refreshing = false;
  async function refresh() {
    if (
      !refreshing && (
        query !== lastQuery
        || JSON.stringify(ordering) !== JSON.stringify(lastOrdering)
        || lastRecordsPerPage !== recordsPerPage
        || lastPageIndex !== pageIndex
      )
    ) {
      refreshing = true;
      try {
        lastQuery = query;
        lastOrdering = ordering.map((o) => ({ ...o }));
        lastRecordsPerPage = recordsPerPage;
        lastPageIndex = pageIndex;
        const data = await dataProvider(query, ordering, recordsPerPage, pageIndex);
        rows = data.records;
        total = data.total;
        filtered = data.filtered;
        externalAssignment = false;
      } catch (err) {
        dataProviderErrorHandler(err);
      }
      finally {
        refreshing = false;
      }
    }
  }

  const debouncedRefresh = debounce(refresh, 200);

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
        on:input={() => {debouncedRefresh.clear(); debouncedRefresh()}}
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
      on:click={() => {
        lastQuery = null; // forces refresh
        refresh();
      }}
      className="uk-padding-small uk-padding-remove-vertical uk-margin-bottom" />
  </form>
{/if}

<div style="position: relative">
  <div class:table-hscroll-wrapper={horizontalScroll}>
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
      <tbody>
        {#if !rows}
          <tr>
            <td colspan={columns.length} class:uk-text-center={true}>
            </td>
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
                      {...(col.render(row[col.key], row).props || {})}
                      on:click={(e) => {
                        const onClick = col.render(row[col.key], row).onClick;
                        if (onClick) {
                          e.stopPropagation();
                          onClick(e);
                        }
                      }}
                    >
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
  </div>
  <ul class="uk-pagination uk-flex-center" uk-margin>
      {#if pageIndex > 0}
        <!-- svelte-ignore a11y-missing-attribute -->
        <li><a role="button" tabindex="0" on:click={() => pageIndex = Math.max(0, pageIndex - 1)}><span uk-pagination-previous></span></a></li>
      {:else}
        <li class="uk-disabled"><span><span uk-pagination-previous></span></span></li>
      {/if}
      {#each new Array(Math.min(paginationShortcuts, Math.ceil(total / recordsPerPage))).fill(0) as _, index}
        {#if index === pageIndex}
          <li class="uk-active"><span>{index + 1}</span></li>
        {:else}
          <!-- svelte-ignore a11y-missing-attribute -->
          <li><a role="button" tabindex="0" on:click={() => pageIndex = index}>{index + 1}</a></li>
        {/if}
      {/each}
      {#if Math.ceil(total / recordsPerPage) > paginationShortcuts * 2}
        {#if pageIndex + 1 > paginationShortcuts && pageIndex + 1 <= Math.ceil(total / recordsPerPage) - paginationShortcuts}
          {#if pageIndex + 1 > paginationShortcuts + 1}
            <li class="uk-disabled"><span>..</span></li>
          {/if}
          <li class="uk-active"><span>{pageIndex + 1}</span></li>
          {#if pageIndex + 1 < Math.ceil(total / recordsPerPage) - paginationShortcuts}
            <li class="uk-disabled"><span>..</span></li>
          {/if}
        {:else}
          <li class="uk-disabled"><span>..</span></li>
        {/if}
      {/if}
      {#each new Array(Math.min(paginationShortcuts, Math.max(0, Math.ceil(total / recordsPerPage) - paginationShortcuts))).fill(Math.max(paginationShortcuts, Math.max(0, Math.ceil(total / recordsPerPage) - paginationShortcuts))) as offset, index}
        {#if offset + index === pageIndex}
          <li class="uk-active"><span>{offset + index + 1}</span></li>
        {:else}
          <!-- svelte-ignore a11y-missing-attribute -->
          <li><a role="button" tabindex="0" on:click={() => pageIndex = offset + index}>{offset + index + 1}</a></li>
        {/if}
      {/each}
      {#if pageIndex + 1 < Math.ceil(total / recordsPerPage)}
        <!-- svelte-ignore a11y-missing-attribute -->
        <li><a role="button" tabindex="0" on:click={() => pageIndex = Math.min(Math.ceil(total / recordsPerPage) - 1, pageIndex + 1)}><span uk-pagination-next></span></a></li>
      {:else}
        <li class="uk-disabled"><span><span uk-pagination-next></span></span></li>
      {/if}
  </ul>
  {#if refreshing}
    <LoaderOverlayScoped opacity={.2} />
  {/if}
</div>
