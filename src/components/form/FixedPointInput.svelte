<script>
import { createEventDispatcher, onMount } from "svelte";

  import { generateId } from "../../services/html";
  import TextInput from "./TextInput.svelte";

  /** @type {string} */
  export let id = generateId();
  /** @type {number} */
  export let decimalPlaces = 2;
  /** @type {boolean} */
  export let inhibitDecimalSeparatorKey = false;
  /** @type {string} */
  export let label = "";
  /** 
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
  export let style = undefined;
  /** @type {string|undefined} */
  export let className = undefined;
  /** @type {string|undefined} */
  export let textIfInvalid = undefined;
  /** @type {string|undefined} */
  export let textIfValid = undefined;
  /** @type {string|undefined} */
  export let helperText = undefined;
  /** @type {boolean} */
  export let optional = false;
  /** @type {string} */
  export let value;
  /** @type {string|number} */
  export let min = undefined;
  /** @type {string|number} */
  export let max = undefined;
  /** @type {HTMLInputElement} */
  export let ref = undefined;
  /** @type {boolean} */
  export let disabled = false;
  /** @type {string|undefined} */
  export let tooltip = undefined;
  /** @type {string|undefined} */
  export let icon = undefined;
  /** @type {'left'|'right'} */
  export let iconPosition = "left";

  /** @type {'initial'|'valid'|'invalid'} */
  export let state = "initial";

  const dispatch = createEventDispatcher();
  let localeValue = '';
  let decimalSeparator = Number(.1).toLocaleString().replace(/\d/g, '');

  let referenceValue = undefined;

  /** @type {string[]} */
  let digits;
  
  $: {
    if (!value) {
      value = "";
    } else if (typeof value === "number") {
      value = value.toString();
    } else if (typeof value === "string") {
      if (Number.isNaN(Number(value))) {
        throw new Error('invalid string format');
      }
    } else {
      value = ""; // unable to convert
    }
    if (value !== "") {
      while (value[0] === '0') {
        value = value.substring(1); // trim leading 0s
      }
      if (value.includes('.') && value.length - value.indexOf('.') - 1 > decimalPlaces) {
        value = value.substring(0, value.indexOf('.') + decimalPlaces + 1);
      }
      digits = [
        ...value.replace('.', '').split(''),
        ...new Array(decimalPlaces - (value.includes('.') ? value.length - value.indexOf('.') - 1 : 0)).fill('0')
      ];
    } else {
      digits = [];
    }
    updateValue();
    if (referenceValue === undefined) {
      referenceValue = value;
    }
  }

  function digitsToValue() {
    const displayDigits = [...new Array(Math.max(0, decimalPlaces + 1 - digits.length)).fill('0'), ...digits];
    if (displayDigits.length - decimalPlaces < displayDigits.length) {
      displayDigits.splice(displayDigits.length - decimalPlaces, 0, '.');
    }
    return displayDigits.join('');
  }

  function updateValue() {
    value = digitsToValue();
    localeValue = Number(value).toLocaleString(undefined, { minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces });
    updateState();
  }

  let clearBeforeInput = true;
  function handleFocus() {
    clearBeforeInput = true;
  }

  const passthroughKeys = ['Enter', 'Tab'];
  const allowedKeys = ['Backspace', 'Space', 'Delete', 'Escape', decimalSeparator, '.', ...new Array(10).fill(0).map((_, index) => index.toString())];
  
  function handleKey({key, location}) {
    if (allowedKeys.includes(key)) {
      if (clearBeforeInput) {
        digits = [];
        clearBeforeInput = false;
      }
      switch (key) {
        case 'Backspace':
          digits.pop();
          break;
        case 'Delete':
        case 'Escape':
        case 'Space':
          digits = [];
          break;
        case decimalSeparator:
        case '.':
          if (!inhibitDecimalSeparatorKey){
            digits.push(...new Array(decimalPlaces).fill('0'));
          }
          break;
        default:
          digits.push(key);
          
          if (Number(digitsToValue()).toFixed(decimalPlaces).slice(-1) !== key) { // Over maximum admitted value by the Number type
            digits.pop();
          }
          break;
      }
      while (digits[0] === '0') {
        digits.shift();
      }
      updateValue();
      setTimeout(() => ref.setSelectionRange(localeValue.length + 1, localeValue.length + 1), 1); // Evil virtual keyboards...
    }
  }

  /** @param {KeyboardEvent} e */
  function handleKeydown(e) {
    if (e.key !== "Unidentified" && !passthroughKeys.includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      handleKey(e);
    } else if (e.key === 'Enter') {
      updateState();
      if (referenceValue !== value) {
        referenceValue = value;
        dispatch('change', value);
      }
    }
  }

  function handleInput(e) {
    e.preventDefault();
    e.stopPropagation();
    if (ref.value.length > value.length) {
      const key = ref.value.slice(-1);
      ref.value = ref.value.slice(0, -1);

      handleKey({ key: key === ' ' ? 'Space' : key, location: 3});
    } else if (ref.value.length < value.length) {
      const delta = value.length - ref.value.length;
      for (let i = 0; i < delta; i++) {
        handleKey({key: 'Backspace', location: 3});
      }
      setTimeout(() => { // Evil virtual keyboards...
        ref.setSelectionRange(localeValue.length + 1, localeValue.length + 1);
        ref.value = localeValue;
      }, 1);
    }
  }

  function handleBlur() {
    if (referenceValue !== value) {
      referenceValue = value;
      dispatch('change', value);
    }
  }

  function updateState() {
    if (ref) {
      if (max !== undefined && Number(value) > max) {
        ref.setCustomValidity(textIfInvalid || `Value must be less than or equal to ${max}`);
      } else if (min !== undefined && Number(value) < min) {
        ref.setCustomValidity(textIfInvalid || `Value must be greater than or equal to ${min}`);
      } else {
        ref.setCustomValidity('');
      }
    }
  }

  onMount(() => {
    updateState();
  });
</script>

<TextInput
  autocapitalize="off"
  autocomplete="off"
  autocorrect="off"
  spellcheck="false"
  {id}
  {icon}
  {iconPosition}
  {label}
  {style}
  {className}
  {textIfInvalid}
  {textIfValid}
  {helperText}
  {optional}
  {disabled}
  {tooltip}
  value={localeValue}
  bind:state
  bind:ref
  inputmode="numeric"
  on:keydown={handleKeydown}
  on:input={handleInput}
  on:input
  on:change={updateState}
  on:blur={updateState}
  on:blur={handleBlur}
  on:blur
  on:focus={handleFocus} />
