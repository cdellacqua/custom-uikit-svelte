<script>
  import { createEventDispatcher } from "svelte";
  import { identity, noop } from "../helpers/lambdas";
  import SearchInput from "./form/SearchInput.svelte";

  /** @type {{label: string; key: string; className?: string; textAlign?: 'center'|'right'|'left'; orderable?: boolean|((v1, v2) => -1|1|0); searchable?: boolean; render?: (value: any, row: any) => string|object}[]} */
  export let columns = [];
  /** @type {Record<string, any>[]} */
  export let rows = [];
  export let size = undefined;
  export let className = undefined;
  export let appearance = "divider";
  export let stickyHeader = false;
  export let placeholder = "";

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
  th.sticky {
    top: 0;
    position: sticky;
    background-color: #fff;
  }
</style>

<form on:submit|preventDefault={() => searchInput.blur()}>
  <SearchInput
    bind:ref={searchInput}
    {placeholder}
    bind:value={query}
    optional />
</form>

<table
  class={className ? 'uk-table uk-table-middle uk-table-hover ' + className : 'uk-table uk-table-middle uk-table-hover'}
  class:uk-table-striped={appearance === 'striped'}
  class:uk-table-divider={appearance === 'divider'}
  class:uk-table-small={size === 'small'}>
  <thead>
    <tr>
      {#each columns as col}
        <th
          class:uk-text-truncate={true}
          class:sticky={stickyHeader}
          class:descending={Object.keys(ordering).some((key) => key === col.key && ordering[key] === -1)}
          on:click={() => (col.orderable !== false ? orderBy(col) : noop())}>
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
  </tbody>
</table>
