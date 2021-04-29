<script>
  import { generateId } from "../../services/html";
  import { filterAndSort } from "../../helpers/filter-sort";
  import AsyncAutocomplete from "./AsyncAutocomplete.svelte";
  import { noop } from "../../helpers/lambdas";

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
  /** @type {string} */
  export let query = "";

  /** @type {string|undefined} */
  export let requiredMarker = undefined;
  /** @type {string|undefined} */
  export let optionalMarker = undefined;

  function dataProvider(query) {
    return filterAndSort(query.toLowerCase(), options, (o) =>
      o.label.toLowerCase()
    );
  }
</script>

<AsyncAutocomplete
  on:change
  on:query
  {animationDuration}
  {autocomplete}
  {autocapitalize}
  {autocorrect}
  {className}
  {dataProvider}
  dataProviderErrorHandler={noop}
  debounceMs={0}
  {disabled}
  {id}
  {label}
  {optional}
  {optionalMarker}
  {placeholder}
  bind:query
  bind:ref
  {requiredMarker}
  {spellcheck}
  bind:state
  {style}
  {textIfInvalid}
  {textIfNoResult}
  {tooltip}
  bind:value
/>
