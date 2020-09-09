<script>
  import { generateId } from "../../services/html";
  import TextInput from "./TextInput.svelte";

  export let id = generateId();
  export let decimalSeparator = Number(.1).toLocaleString().replace(/\d/g, '');
  export let decimalPlaces = 2;
  export let inhibitDecimalSeparatorKey = false;
  export let label = "";
  export let className = "";
  export let textIfInvalid = undefined;
  export let textIfValid = undefined;
  export let helperText = undefined;
  export let optional = false;
  export let value;
  export let ref = undefined;
  export let disabled = false;
  export let tooltip = undefined;
  export let icon = undefined;
  /** @type {'left'|'right'} */
  export let iconPosition = "left";

  /** @type {'initial'|'valid'|'invalid'} */
  let state = "initial";

  if (decimalPlaces <= 0) {
    throw new Error('cannot create a fixed point input without decimal places');
  }

  /** @type {string[]} */
  let digits;
  
  $: {
    if (!value) {
      value = "";
    } else if (typeof value === "number") {
      value = value.toString().replace('.', decimalSeparator);
    } else if (typeof value === "string") {
      if (Number.isNaN(Number(value.replace(decimalSeparator, '.')))) {
        throw new Error('invalid string format');
      }
    } else {
      value = ""; // unable to convert
    }
    if (value !== "") {
      while (value[0] === '0') {
        value = value.substring(1); // trim leading 0s
      }
      if (value.includes(decimalSeparator) && value.length - value.indexOf(decimalSeparator) - 1 > decimalPlaces) {
        value = value.substring(0, value.indexOf(decimalSeparator) + decimalPlaces + 1);
      }
      digits = [
        ...value.replace(decimalSeparator, '').split(''),
        ...new Array(decimalPlaces - (value.includes(decimalSeparator) ? value.length - value.indexOf(decimalSeparator) - 1 : 0)).fill('0')
      ];
    } else {
      digits = [];
    }
    updateValue();
  }

  function updateValue() {
    const displayDigits = [...new Array(Math.max(0, decimalPlaces + 1 - digits.length)).fill('0'), ...digits];
    displayDigits.splice(displayDigits.length - decimalPlaces, 0, decimalSeparator);
    value = displayDigits.join('');
  }

  const allowedKeys = ['Backspace', 'Delete', 'Escape', decimalSeparator, ...new Array(10).fill(0).map((_, index) => index.toString())];
  
  /** @param {KeyboardEvent} e */
  function handleKeydown(e) {
    e.preventDefault();
    e.stopPropagation();
    if (allowedKeys.includes(e.key)) {
      switch (e.key) {
        case 'Backspace':
          digits.pop();
          break;
        case 'Delete':
        case 'Escape':
          digits = [];
          break;
        case decimalSeparator:
          if (!inhibitDecimalSeparatorKey) {
            digits.push(...new Array(decimalPlaces).fill('0'));
          }
          break;
        default:
          digits.push(e.key);
          break;
      }
      while (digits[0] === '0') {
        digits.shift();
      }
      updateValue();
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
  {value}
  bind:ref
  inputmode="numeric"
  on:keydown={handleKeydown}
  pattern={`[0-9]+${'\\'+decimalSeparator}[0-9]+`} />
