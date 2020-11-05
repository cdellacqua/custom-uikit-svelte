<script>
  import { createEventDispatcher, onMount, tick } from "svelte";
  import {
    dispatchCustomEvent,
  } from "../../helpers/events";
  import { generateId } from "../../services/html";
  import { fly } from "svelte/transition";
  import { filterAndSort } from "../../helpers/filter-sort";

  /** @type {string} */
  export let id = generateId();
  /**
   * Autocomplete options, the value must be unique
   * @type {Array<{label: string, value: any}>} */
  export let options = [];
  /**
   * The current selected value or null if no value is selected
   * @type {any} */
  export let value = null;
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
   * @description Text to show when the field is required but no value has been chosen
   * @type {string} */
  export let textIfInvalid = "";
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
  /** @type {boolean} */
  export let optional = false;
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
  export let autocomplete = "off";
  /**
   * @description Autocorrect setting of the input tag
   * @type {string|undefined} */
  export let autocorrect = undefined;
  /** @type {string|undefined} */
  export let spellcheck = undefined;
  /**
   * @description In/Out fly animation duration (in milliseconds)
   * @type {number} */
  export let animationDuration = 100;
  /** @type {'initial'|'valid'|'invalid'} */
  export let state = "initial";

  let searchRef;

  let query = "";
  let showSuggested = false;
  let innerClick = false;
  const dispatch = createEventDispatcher();

  function showSuggestedOptions(e) {
    showSuggested = true;
    hideOnBlur = true;
  }

  function hideSuggested() {
    if (!innerClick) {
      showSuggested = false;
    }
    innerClick = false;
  }

  let filteredOptions = [];
  $: {
    filteredOptions = filterAndSort(query.toLowerCase(), options, (o) =>
      o.label.toLowerCase()
    );
    outlineOptionIndex = 0;
  }

  function updateValidity(value) {
    if (searchRef) {
      if (!optional && (value === null || value === undefined)) {
        searchRef.setCustomValidity(textIfInvalid || "Field is required");
      } else {
        searchRef.setCustomValidity("");
      }
    }
  }

  function updateQuery(value) {
    if (value !== null && value !== undefined) {
      query = options.find((o) => o.value === value).label;
    } else {
      query = "";
    }
  }

  $: {
    updateQuery(value);
    outlineOptionIndex = 0;
    updateValidity(value);
  }

  let hideOnBlur = true;
  let everFocused = false;
  function handleBlur() {
    if (everFocused && filteredOptions.length === 0 && value !== null && value !== undefined) {
      value = null;
      dispatchCustomEvent(searchRef, "change", null);
      dispatch("change", null);
    }
    updateValidity(value);
    if (everFocused) {
      state = searchRef.checkValidity() ? "valid" : "invalid";
    }
    if (hideOnBlur) {
      showSuggested = false;
    }
    hideOnBlur = true;
  }

  onMount(() => {
    handleBlur();
  });

  function handleChangeGenerator(option) {
    return function () {
      if (this.checked) {
        if (query !== option.label) {
          query = option.label;
        }
        if (value !== option.value) {
          value = option.value;
          handleBlur();
          dispatchCustomEvent(searchRef, "change", value);
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
    if (filteredOptions.length === 0) {
      suggestedRef.scrollTop = 0;
    } else {
      suggestedRef.scrollTop = Math.max(
        0,
        (suggestedRef.scrollHeight / filteredOptions.length) *
          (outlineOptionIndex - 3)
      );
    }
  }

  $: if (filteredOptions) {
    outlineOptionIndex = Math.min(
      filteredOptions.length - 1,
      Math.max(0, outlineOptionIndex)
    );
    if (filteredOptions.length > 0 && suggestedRef) {
      if (suggestedRef.querySelector("label")) {
        suggestedRef.style.maxHeight =
          suggestedRef.querySelector("label").offsetHeight * 5 + "px";
      }
    }
  }

  function handleInput() {
    if (query !== this.value) {
      const newQuery = this.value;
      tick().then(() => (query = newQuery));
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
      filteredOptions.length > 0 &&
      ["ArrowUp", "ArrowDown", "Enter"].includes(e.key)
    ) {
      e.preventDefault();
      switch (e.key) {
        case "ArrowUp":
          if (outlineOptionIndex === 0) {
            outlineOptionIndex = filteredOptions.length - 1;
          } else {
            outlineOptionIndex--;
          }
          break;
        case "ArrowDown":
          if (outlineOptionIndex === filteredOptions.length - 1) {
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
          dispatchCustomEvent(input, "change");
          break;
      }
    } else if (e.key === 'Enter' && filteredOptions.length === 0) {
      hideOnBlur = false;
      handleBlur();
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
    display: none;
  }

  .outline {
    border: 1px solid currentColor;
  }
  .no-outline {
    border: 1px solid transparent;
  }
</style>

<svelte:body
  on:click={hideSuggested}
  on:touchstart={() => (hideOnBlur = false)}
  on:mousedown={() => (hideOnBlur = false)} />
<div
  bind:this={ref}
  {style}
  class:text-wrapper={true}
  class={className}
  class:uk-margin-bottom={true}
  on:click={() => (innerClick = true)}>
  {#if label}
    <label for={id} class="uk-form-label">{label} {!optional ? '*' : ''}</label>
  {/if}
  <div style="position: relative">
    <input
      bind:this={searchRef}
      {autocapitalize}
      {autocomplete}
      {autocorrect}
      {spellcheck}
      {placeholder}
      class="uk-input"
      class:uk-form-danger={state === 'invalid'}
      class:uk-form-success={state === 'valid'}
      type="search"
      uk-tooltip={tooltip}
      {id}
      value={query}
      on:input={handleInput}
      on:keydown={handleKeydown}
      required={false}
      {disabled}
      on:focus={showSuggestedOptions}
      on:click={showSuggestedOptions}
      on:blur={handleBlur}
      on:focus={() => ((everFocused = true), (state = 'initial'))} />
    {#if value !== null && value !== undefined}
      <!-- svelte-ignore a11y-missing-attribute -->
      <a
        role="button"
        tabindex="0"
        class="uk-form-icon uk-form-icon-flip"
        uk-icon="icon: close"
        on:keydown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            value = null;
            query = '';
            handleBlur();
            dispatchCustomEvent(searchRef, 'change', null);
            dispatch('change', null);
            searchRef.focus();
          }
        }}
        on:click={() => {
          value = null;
          handleBlur();
          dispatchCustomEvent(searchRef, 'change', null);
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
      {#if filteredOptions.length > 0}
        {#each filteredOptions as option, i (option)}
          <label
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
              on:change|stopPropagation={handleChangeGenerator(option)}
              on:click|stopPropagation={handleOptionClickGenerator(option)} />
            {#if option.value === value}
              <span class="uk-icon" uk-icon="icon: check; ratio: .75" />
            {/if}
            {option.label}
          </label>
        {/each}
      {:else if textIfNoResult}
        <div
          class="uk-text-center uk-text-italic uk-width-1-1"
          style="padding-top: .5em; padding-bottom: .5em; cursor: default">
          {textIfNoResult}
        </div>
      {/if}
    </div>
  {/if}
</div>
