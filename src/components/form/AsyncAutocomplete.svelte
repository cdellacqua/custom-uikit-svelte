<script>
  /**
   * @callback DataProvider
   * @param {string} query
   * @return {Promise.<Array.<{label: string, value: any}>>}
   */

  import { debounce } from "debounce";
  import { generateId } from "../../services/html";
  import { noop } from "../../helpers/lambdas";
  import { tick, createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  import { dispatchNativeEvent } from "../../helpers/events";
  import Loader from "../Loader.svelte";

  /** @type {string} */
  export let id = generateId();
  /**
   * The current selected value or undefined if no value is selected
   * @type {any} */
  export let value = undefined;
  /**
   * Label of this component
   * @type {string} */
  export let label = "";
  /**
   * @description A string containing any additional classes to apply to the component
   * @type {string|undefined} */
  export let className = undefined;
  /**
   * @description A string specifying custom style properties for the component
   * @type {string|undefined} */
  export let style = undefined;
  /**
   * @description Text to show when the applied filter doesn't return any result
   * @type {string} */
  export let textIfNoResult = "";
  /**
   * @description Control whether the component is disabled or not
   * @type {boolean} */
  export let disabled = false;
  /**
   * @description UIkit tooltip
   * @type {string|undefined} */
  export let tooltip = undefined;
  /**
   * @description Input placeholder
   * @type {string|undefined} */
  export let placeholder = undefined;
  /**
   * @description Reference to the div that wraps this component
   * @type {HTMLDivElement} */
  export let ref = undefined;
  /**
   * @description Autocapitalize setting of the input tag
   * @type {string|undefined} */
  export let autocapitalize = undefined;
  /**
   * @description Autocomplete setting of the input tag
   * @type {string|undefined} */
  export let autocomplete = undefined;
  /**
   * @description Autocorrect setting of the input tag
   * @type {string|undefined} */
  export let autocorrect = undefined;
  /**
   * @description In/Out fly animation duration (in milliseconds)
   * @type {number} */
  export let animationDuration = 100;
  /** @type {string} */
  export let query = "";
  /** @type {DataProvider} */
  export let dataProvider;
  /** @type {Function} */
  export let dataProviderErrorHandler = noop;
  /** @type {boolean} @readonly */
  export let loading = false;
  /** @type {number} */
  export let debounceMs = 200;

  let externalAssignment = true;
  $: if (query.length >= 0) {
    if (externalAssignment) {
      debouncedRefresh.clear();
      debouncedRefresh();
    }
    externalAssignment = true;
  }

  /**
   * Autocomplete options, the value must be unique
   * @type {Array<{label: string, value: any}>} */
  let options = [];
  let lastQuery = null;
  let forceUpdate = false;
  async function refresh() {
    if (!loading && (forceUpdate || query !== lastQuery)) {
      loading = true;
      try {
        let providerQuery;
        let data;

        let debounce = false;

        function updateProviderArgs() {
          providerQuery = query;
        }

        function providerArgsChanged() {
          return (
            providerQuery !== query ||
            forceUpdate
          );
        }

        do {
          do {
            forceUpdate = false;
            updateProviderArgs();
            if (debounce) {
              await sleep(debounceMs);
            }
          } while (providerArgsChanged());

          data = await dataProvider(query);

          debounce = true;
        } while (providerArgsChanged());

        options = data;

        lastQuery = query;
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

  const debouncedRefresh = debounce(refresh, debounceMs);

  let showSuggested = false;
  let innerClick = false;
  const dispatch = createEventDispatcher();

  function showSuggestedOptions(e) {
    showSuggested = true;
  }

  function hideSuggested() {
    if (!innerClick) {
      showSuggested = false;
    }
    innerClick = false;
  }

  function handleChangeGenerator(option) {
    return function () {
      if (this.checked) {
        if (value !== option.value) {
          value = option.value;
          query = option.label;
          dispatch("change", value);
        }
        innerClick = false;
        hideSuggested();
      }
    };
  }

  function handleOptionClickGenerator(option) {
    return function () {
      if (this.checked && value === option.value) {
        hideSuggested();
      }
    };
  }

  let outlineOptionIndex = 0;

  $: if (suggestedRef) {
    if (options.length === 0) {
      suggestedRef.scrollTop = 0;
    } else {
      suggestedRef.scrollTop = Math.max(
        0,
        (suggestedRef.scrollHeight / options.length) * (outlineOptionIndex - 3)
      );
    }
  }

  $: if (options) {
    outlineOptionIndex = Math.min(
      options.length - 1,
      Math.max(0, outlineOptionIndex)
    );
    if (options.length > 0 && suggestedRef) {
      if (suggestedRef.querySelector("label")) {
        suggestedRef.style.maxHeight =
          suggestedRef.querySelector("label").offsetHeight * 5 + "px";
      }
    }
  }

  function handleInput() {
    if (query !== this.value) {
      const newQuery = this.value;
      tick().then(() => {
        query = newQuery;
        dispatch("query", newQuery);
      });
      showSuggested = true;
    }
  }

  let suggestedRef = null;
  /** @param {KeyboardEvent} e */
  function handleKeydown(e) {
    if (e.key === "Escape") {
      showSuggested = false;
    } else if (
      suggestedRef &&
      options.length > 0 &&
      ["ArrowUp", "ArrowDown", "Enter"].includes(e.key)
    ) {
      e.preventDefault();
      switch (e.key) {
        case "ArrowUp":
          if (outlineOptionIndex === 0) {
            outlineOptionIndex = options.length - 1;
          } else {
            outlineOptionIndex--;
          }
          break;
        case "ArrowDown":
          if (outlineOptionIndex === options.length - 1) {
            outlineOptionIndex = 0;
          } else {
            outlineOptionIndex++;
          }
          break;
        case "Enter":
          const input = suggestedRef.querySelectorAll("input")[
            outlineOptionIndex
          ];
          input.checked = true;
          dispatchNativeEvent(input, "change");
          break;
      }
    }
  }
</script>

<style lang="scss">
  .text-wrapper {
    position: relative;
    .suggested {
      z-index: 10;
      position: absolute;
      width: 100%;
      cursor: pointer;
      font-size: 0.9em;
      overflow-y: auto;
      label {
        padding: 10px;
        cursor: pointer;
        &:hover {
          border: 1px solid currentColor;
        }
      }
    }
  }

  .interactive-hidden {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  .outline {
    border: 1px solid currentColor;
  }
  .no-outline {
    border: 1px solid transparent;
  }
</style>

<svelte:body on:click={hideSuggested} />
<div
  bind:this={ref}
  {style}
  class:text-wrapper={true}
  class={className}
  class:uk-margin-bottom={true}
  on:click={() => (innerClick = true)}>
  <label for={id} class="uk-form-label">{label}</label>
  <div style="position: relative">
    <input
      {autocapitalize}
      {autocomplete}
      {autocorrect}
      {placeholder}
      class="uk-input"
      type="search"
      uk-tooltip={tooltip}
      {id}
      value={query}
      on:input={handleInput}
      on:keydown={handleKeydown}
      required={false}
      {disabled}
      on:focus={showSuggestedOptions}
      on:click={showSuggestedOptions} />
    {#if loading && showSuggested}
      <Loader className="uk-form-icon uk-form-icon-flip" ratio={0.4} />
    {:else if value !== undefined}
      <!-- svelte-ignore a11y-missing-attribute -->
      <a
        role="button"
        tabindex="0"
        class="uk-form-icon uk-form-icon-flip"
        uk-icon="icon: close"
        on:click={() => {
          value = undefined;
          query = '';
          dispatch('change', null);
        }}>&ZeroWidthSpace;</a>
    {/if}
  </div>
  {#if showSuggested && !disabled}
    <div
      in:fly={{ y: 50, duration: animationDuration }}
      class="uk-grid-small uk-box-shadow-small suggested uk-background-default
        uk-margin-remove-top uk-margin-remove-left uk-grid"
      bind:this={suggestedRef}>
      {#if options.length > 0}
        {#each options as option, i (option)}
          <label
            in:fly={{ y: -10, duration: animationDuration }}
            class="uk-width-1-1"
            class:uk-background-muted={i === outlineOptionIndex}
            class:outline={i === outlineOptionIndex}
            class:uk-background-default={i !== outlineOptionIndex}
            class:no-outline={i !== outlineOptionIndex}>
            <input
              class="uk-radio interactive-hidden"
              type="radio"
              name={id + '-radio'}
              checked={option.value === value}
              on:change={handleChangeGenerator(option)}
              on:click={handleOptionClickGenerator(option)} />
            {#if option.value === value}
              <span class="uk-icon" uk-icon="icon: check; ratio: .75" />
            {/if}
            {option.label}
          </label>
        {/each}
      {:else if textIfNoResult}
        <div
          class="uk-text-center uk-text-italic uk-width-1-1"
          style="padding-top: .5em; padding-bottom: .5em">
          {textIfNoResult}
        </div>
      {/if}
    </div>
  {/if}
</div>