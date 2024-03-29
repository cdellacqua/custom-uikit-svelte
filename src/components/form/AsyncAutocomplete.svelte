<script>
	import { debounce } from "debounce";
	import { generateId } from "../../services/html";
	import { sleep } from "../../helpers/time";
	import { tick, createEventDispatcher, onMount } from "svelte";
	import { fly } from "svelte/transition";
	import { dispatchCustomEvent } from "../../helpers/events";
	import Loader from "../Loader.svelte";
	import {
		globalOptionalMarker,
		globalRequiredMarker,
	} from "../../stores/markers";

	/** @type {string} */
	export let id = generateId();
	/**
	 * Whether or not the autocomplete supports multiple values selected at the same time
	 * @type {boolean}
	 */
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
	/** @type {AsyncAutocompleteDataProvider} */
	export let dataProvider;
	/** @type {CallableFunction} */
	export let dataProviderErrorHandler = (err) => console.error(err);
	/** @type {boolean} @readonly */
	export let loading = false;
	/** @type {number} */
	export let debounceMs = 200;
	/** @type {number} */
	export let maxSuggestions = 5;

	/** @type {string|undefined} */
	export let requiredMarker = undefined;
	/** @type {string|undefined} */
	export let optionalMarker = undefined;

	let suffix = "";
	function updateLabelSuffix() {
		if (optional) {
			suffix =
				typeof optionalMarker === "string"
					? optionalMarker
					: $globalOptionalMarker;
		} else {
			suffix =
				typeof requiredMarker === "string"
					? requiredMarker
					: $globalRequiredMarker;
		}
	}

	$: optional,
		requiredMarker,
		optionalMarker,
		$globalRequiredMarker,
		$globalOptionalMarker,
		updateLabelSuffix();

	let searchRef;

	/**
	 * Autocomplete options, the value must be unique
	 * @type {Array<{label: string, value: any}>} */
	let options = [];
	let lastQuery = null;
	let forceUpdate = false;
	async function _reload() {
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
					return providerQuery !== query || forceUpdate;
				}

				do {
					do {
						forceUpdate = false;
						updateProviderArgs();
						if (debounce && debounceMs > 0) {
							await sleep(debounceMs);
						}
					} while (providerArgsChanged());

					data = await dataProvider(query);

					debounce = true;
				} while (providerArgsChanged());

				options = data;

				lastQuery = query;
			} catch (err) {
				dataProviderErrorHandler(err);
			} finally {
				loading = false;
			}
		}
	}

	export function reload() {
		forceUpdate = true;
		return _reload();
	}

	const debouncedReload =
		debounceMs > 0 ? debounce(_reload, debounceMs) : _reload;

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

	function updateValidity() {
		if (searchRef) {
			if (
				!optional &&
				((multi && value.length === 0) ||
					(!multi && (value === null || value === undefined)))
			) {
				searchRef.setCustomValidity(textIfInvalid || "Field is required");
			} else {
				searchRef.setCustomValidity("");
			}
		}
	}

	$: {
		value;
		outlineOptionIndex = 0;
		updateValidity();
	}

	let hideOnBlur = true;
	let everFocused = false;
	function handleBlur() {
		if (
			everFocused &&
			options.length === 0 &&
			((multi && value.length > 0) ||
				(!multi && value !== null && value !== undefined))
		) {
			value = multi ? [] : null;
			dispatchCustomEvent(searchRef, "change", value);
			dispatch("change", value);
		}
		updateValidity();
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

	function toggleOption(option, checked) {
		if (checked) {
			if (multi) {
				if (query !== "") {
					query = "";
				}
				if (!value.includes(option.value)) {
					value = [...value, option.value];
					selectedOptions = [...selectedOptions, option];
				}
			} else {
				if (query !== option.label) {
					query = option.label;
				}
				if (value !== option.value) {
					value = option.value;
				}
				selectedOptions = [option];
			}
			innerClick = false;
			hideSuggested();
		} else {
			if (multi) {
				if (value.includes(option.value)) {
					const optionIndex = selectedOptions.indexOf(option);
					if (optionIndex !== -1) {
						selectedOptions.splice(optionIndex, 1);
						selectedOptions = [...selectedOptions];
					}
					const valueIndex = value.indexOf(option.value);
					if (valueIndex !== -1) {
						value.splice(valueIndex, 1);
						value = [...value];
					}
				}
			} else {
				selectedOptions = [];
			}
		}
		handleBlur();
		dispatchCustomEvent(searchRef, "change", value);
		dispatch("change", value);
	}

	function handleChangeGenerator(option) {
		return function () {
			toggleOption(option, this.checked);
		};
	}

	let outlineOptionIndex = 0;

	$: if (options) {
		outlineOptionIndex = 0;
	}

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

	let optionsRenderedRef;
	$: optionsRendered = Boolean(optionsRenderedRef);
	$: if (optionsRendered) {
		updateSuggestedMaxHeight();
	}
	function updateSuggestedMaxHeight() {
		if (suggestedRef && suggestedRef.querySelector("label")) {
			suggestedRef.style.maxHeight =
				suggestedRef.querySelector("label").offsetHeight * maxSuggestions + "px";
		}
	}

	function handleInput() {
		if (query !== this.value) {
			query = this.value;
			dispatch("query", query);
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
			["ArrowUp", "ArrowDown", "Enter", "PageUp", "PageDown"].includes(e.key)
		) {
			e.preventDefault();
			switch (e.key) {
				case "ArrowUp":
					outlineOptionIndex = Math.max(0, outlineOptionIndex - 1);
					break;
				case "ArrowDown":
					outlineOptionIndex = Math.min(options.length - 1, outlineOptionIndex + 1);
					break;
				case "PageUp":
					outlineOptionIndex = Math.max(0, outlineOptionIndex - maxSuggestions);
					break;
				case "PageDown":
					outlineOptionIndex = Math.min(options.length - 1, outlineOptionIndex + maxSuggestions);
					break;
				case "Enter":
					const input =
						suggestedRef.querySelectorAll("input")[outlineOptionIndex];
					input.checked = true;
					dispatchCustomEvent(input, "change");
					break;
			}
		} else if (e.key === "Enter" && options.length === 0) {
			hideOnBlur = false;
			handleBlur();
		}
	}
	function resetQueryAndValue() {
		if (multi) {
			value = [];
		} else {
			value = null;
		}
		selectedOptions = [];
		query = "";
	}
	let lastMultiValue = multi;
	function handleMultiChange() {
		if (multi === lastMultiValue) {
			return;
		}
		lastMultiValue = multi;
		resetQueryAndValue();
	}
	$: multi, handleMultiChange();

	let filteredOptions = [];
	function updateFilteredOptions() {
		filteredOptions = options.filter((o) => !multi || !value.includes(o.value));
	}
	$: multi, options, updateFilteredOptions();

	function scheduleDataProviderCall() {
		if (debouncedReload.clear) {
			debouncedReload.clear();
		}
		debouncedReload();
	}
	$: query, scheduleDataProviderCall();
</script>

<svelte:body
	on:click={hideSuggested}
	on:touchstart={() => (hideOnBlur = false)}
	on:mousedown={() => (hideOnBlur = false)} />
<div
	class:custom-uk-autocomplete-wrapper={true}
	bind:this={ref}
	{style}
	class:text-wrapper={true}
	class={className}
	class:uk-margin-bottom={true}
	on:click={() => (innerClick = true)}
>
	{#if label}
		<label for={id} class="uk-form-label">{label} {suffix}</label>
	{/if}
	<div style="position: relative">
		<input
			class:custom-uk-autocomplete-input={true}
			bind:this={searchRef}
			{autocapitalize}
			{autocomplete}
			{autocorrect}
			{spellcheck}
			{placeholder}
			class="uk-input"
			class:uk-form-danger={state === "invalid"}
			class:uk-form-success={state === "valid"}
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
			on:focus={() => ((everFocused = true), (state = "initial"))}
		/>
		{#if loading && showSuggested}
			<Loader className="uk-form-icon uk-form-icon-flip" ratio={0.4} />
		{:else if ((multi && value.length > 0) || (!multi && value !== null && value !== undefined)) && !disabled}
			<!-- svelte-ignore a11y-missing-attribute -->
			<a
				role="button"
				tabindex="0"
				class="uk-form-icon uk-form-icon-flip"
				uk-icon="icon: close"
				on:keydown={(e) => {
					if (["Enter"].includes(e.code)) {
						e.preventDefault();
						resetQueryAndValue();
						handleBlur();
						dispatchCustomEvent(searchRef, "change", value);
						dispatch("change", value);
						searchRef.focus();
					}
				}}
				on:click={() => {
					resetQueryAndValue();
					handleBlur();
					dispatchCustomEvent(searchRef, "change", value);
					dispatch("change", value);
				}}>&ZeroWidthSpace;</a
			>
		{/if}
	</div>
	{#if multi && selectedOptions.length > 0}
		<div class="uk-margin-small-top">
			{#each selectedOptions as option (option)}
				<span class="uk-badge uk-margin-small-right uk-margin-small-bottom"
					>{option.label}
					&nbsp;
					<!-- svelte-ignore a11y-missing-attribute -->
					<a
						role="button"
						tabindex="0"
						uk-icon="icon: close"
						on:keydown={(e) => {
							if (["Enter"].includes(e.code)) {
								e.preventDefault();
								toggleOption(option, false);
							}
						}}
						on:click={() => {
							toggleOption(option, false);
						}}>&ZeroWidthSpace;</a
					>
				</span>
			{/each}
		</div>
	{/if}
	{#if showSuggested && !disabled}
		<div
			class:custom-uk-autocomplete-suggested={true}
			in:fly={{ y: 50, duration: animationDuration }}
			class="uk-grid-small uk-box-shadow-small suggested uk-background-default
        uk-margin-remove-top uk-margin-remove-left uk-grid"
			bind:this={suggestedRef}
		>
			{#if filteredOptions.length > 0}
				<div bind:this={optionsRenderedRef} style="display:none" />
				{#each filteredOptions as option, i (option)}
					<label
						in:fly={{ y: -10, duration: animationDuration }}
						class="uk-width-1-1"
						class:uk-background-muted={i === outlineOptionIndex}
						class:outline={i === outlineOptionIndex}
						class:uk-background-default={i !== outlineOptionIndex}
						class:no-outline={i !== outlineOptionIndex}
					>
						<input
							class="uk-radio interactive-hidden"
							type="radio"
							name={id + "-radio"}
							checked={option.value === value}
							on:change|stopPropagation={handleChangeGenerator(option)}
							on:click|stopPropagation={handleChangeGenerator(option)}
						/>
						{#if !multi && option.value === value}
							<span class="uk-icon" uk-icon="icon: check; ratio: .75" />
						{/if}
						{option.label}
					</label>
				{/each}
			{:else if textIfNoResult}
				<div
					class="uk-text-center uk-text-italic uk-width-1-1"
					style="padding-top: .5em; padding-bottom: .5em; cursor: default"
				>
					{textIfNoResult}
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.text-wrapper {
		position: relative;
	}
	.text-wrapper .suggested {
		z-index: 10;
		position: absolute;
		width: 100%;
		cursor: pointer;
		font-size: 0.9em;
		overflow-y: auto;
	}
	.text-wrapper .suggested label {
		padding: 10px;
		cursor: pointer;
	}
	.text-wrapper .suggested label:hover {
		border: 1px solid currentColor;
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
