<script>
  import { createEventDispatcher, onMount, tick } from "svelte";
  import { dispatchNativeEvent } from "../../helpers/events";
  import { generateId } from "../../services/html";

  export let id = generateId();
  /** @type {{label: string; value: any}[]} */
  export let options = [];
  export let value = undefined;
  export let label = "";
  export let className = undefined;
  export let textIfNoResult = "";
  export let disabled = false;
	export let tooltip = undefined;
  export let placeholder = undefined;
  export let ref = undefined;
  export let autocapitalize = undefined;
  export let autocomplete = undefined;
  export let autocorrect = undefined;

  let query = "";
  let showSuggested = false;
	let innerClick = false;
	const dispatch = createEventDispatcher();

  function resetSelection() {
    value = undefined;
  }

  function showSuggestedOptions(e) {
    showSuggested = true;
  }

  function hideSuggested() {
    if (!innerClick) {
      showSuggested = false;
    }
    innerClick = false;
  }

  let filteredOptions = [];
  $: {
    filteredOptions = [...options]
      .filter((o) => o.label.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => {
        const indexOfA = a.label.toLowerCase().indexOf(query.toLowerCase());
        const indexOfB = b.label.toLowerCase().indexOf(query.toLowerCase());
        if (indexOfA !== indexOfB) {
          return indexOfA - indexOfB;
        } else {
          return a.label.length - b.label.length;
        }
      });
  }

  $: {
    if (value !== undefined) {
      query = options.find((o) => o.value === value).label;
    } else {
      query = "";
    }
    outlineOptionIndex = 0;
  }

  function handleChangeGenerator(option) {
    return function () {
      if (this.checked) {
				if (value !== option.value) {
					value = option.value;
					dispatch('change', value);
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
			if (value !== undefined) {
				value = undefined;
				dispatch('change', null);
			}
			tick().then(() => (query = newQuery));
      showSuggested = true;
    }
  }

  let suggestedRef = null;
  /** @param {KeyboardEvent} e */
  function handleKeydown(e) {
    if (
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
          dispatchNativeEvent(input, "change");
          break;
      }

      switch (e.key) {
        case "ArrowUp":
        case "ArrowDown":
          if (suggestedRef) {
            if (filteredOptions.length === 0) {
              suggestedRef.scrollTop = 0;
            }
            suggestedRef.scrollTop = Math.max(
              0,
              (suggestedRef.scrollHeight / filteredOptions.length) *
                (outlineOptionIndex - 3)
            );
          }
          break;
      }
    }
  }
</script>

<style lang="scss">
  .text-wrapper {
    position: relative;
    .suggested {
      background-color: whitesmoke;
      z-index: 10;
      position: absolute;
      width: 100%;
      cursor: pointer;
      font-size: 0.9em;
      overflow-y: auto;
      label {
        padding: 10px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
        &:hover {
          background-color: whitesmoke;
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
  class={className ? 'text-wrapper ' + className : 'text-wrapper'}
  class:uk-margin-bottom={true}
  on:click={() => (innerClick = true)}>
  <label for={id} class="uk-form-label">{label}</label>
  <div>
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
  </div>
  {#if showSuggested && !disabled}
    <div
      class="uk-grid-small uk-box-shadow-small suggested uk-margin-remove-top
        uk-margin-remove-left uk-grid"
      bind:this={suggestedRef}>
      {#if filteredOptions.length > 0}
        {#each filteredOptions as option, i (option)}
          <label
            class="uk-width-1-1"
            class:outline={i === outlineOptionIndex}
            class:no-outline={i !== outlineOptionIndex}>
            <input
              class="uk-radio interactive-hidden"
              type="radio"
              name={id + '-radio'}
              checked={option.value === value}
              on:change={handleChangeGenerator(option)}
              on:click={handleOptionClickGenerator(option)} />
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
