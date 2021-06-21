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
	 * Whether or not the autocomplete supports multiple values selected at the same time
	 * @type {boolean}
	 * @default false */
	export let multi = false;
	/**
	 * If not in multi-mode (default): the current selected value or null if no value is selected
	 * Else: the list of currently selected values
	 * @type {any|null|any[]} */
	export let value = !multi ? null : [];
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
	/**
	 * The current search string
	 * @type {string} */
	export let query = "";
	/**
	 * Currently selected options
	 * @type {Array<{label: string, value: any}>} */
	 export let selectedOptions = [];

	/** @type {string|undefined} */
	export let requiredMarker = undefined;
	/** @type {string|undefined} */
	export let optionalMarker = undefined;

	function dataProvider(query) {
		return filterAndSort(query.toLowerCase(), options, (o) =>
			o.label.toLowerCase()
		);
	}

	function handleValueChange() {
		if (!multi) {
			const candidate = options.find((o) => o.value === value);
			if (candidate) {
				query = candidate.label;
				selectedOptions = [candidate];
			} else {
				query = "";
				selectedOptions = [];
			}
		} else {
			query = "";
			// Keeps the selection order
			selectedOptions = value.map((v) => options.find((o) => o.value === v));
		}
	}

	$: value, handleValueChange();
	
	let asyncAutocomplete;
	export async function reload() {
		if (!asyncAutocomplete) {
			return;
		}
		return asyncAutocomplete.reload();
	}
	$: options, reload();
</script>

<AsyncAutocomplete
	bind:this={asyncAutocomplete}
	on:change
	on:query
	bind:selectedOptions
	{multi}
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
