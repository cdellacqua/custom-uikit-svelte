<script>
import { createEventDispatcher } from "svelte";

  import { generateId } from "../../services/html";
  import TextInput from "./TextInput.svelte";

  export let id = generateId();
  /** @type {'.'|','} */
  export let decimalPlaces = 2;
  export let inhibitDecimalSeparatorKey = false;
  export let label = "";
  export let className = "";
  export let textIfInvalid = undefined;
  export let textIfValid = undefined;
  export let helperText = undefined;
  export let optional = false;
  export let value;
  export let min = undefined;
  export let max = undefined;
  export let ref = undefined;
  export let disabled = false;
  export let tooltip = undefined;
  export let icon = undefined;
  /** @type {'left'|'right'} */
  export let iconPosition = "left";

  /** @type {'initial'|'valid'|'invalid'} */
  export let state = "initial";

  const dispatch = createEventDispatcher();
  let localeValue = '';
  let decimalSeparator = Number(.1).toLocaleString().replace(/\d/g, '');

  if (decimalPlaces <= 0) {
    throw new Error('cannot create a fixed point input without decimal places');
  }

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
    displayDigits.splice(displayDigits.length - decimalPlaces, 0, '.');
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
          if (!inhibitDecimalSeparatorKey && ((key === '.' && location === 3) || key === decimalSeparator)){
            digits.push(...new Array(decimalPlaces).fill('0'));
          }
          break;
        default:
          digits.push(key);
          if (Number(digitsToValue()).toString().slice(-1) !== key) { // Over maximum admitted value by the Number type
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
</script>

<TextInput
  {id}
  {icon}
  {iconPosition}
  {label}
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
  on:focus={handleFocus}
  pattern={`[0-9]+${decimalSeparator === '.' ? '\\' + decimalSeparator : decimalSeparator}[0-9]+`} />
