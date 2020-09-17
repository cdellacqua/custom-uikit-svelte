<script>
  import TextInput from "./TextInput.svelte";
  import NumberInput from "./NumberInput.svelte";
  import { generateId } from "../../services/html";

  export let id = generateId();
  export let label = "";
  /** 
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
	export let style = undefined;
  export let className = undefined;
  export let textIfInvalid = undefined;
  export let textIfValid = undefined;
  export let helperText = undefined;
  export let optional = false;
  export let value;
  export let ref = undefined;
  export let allowNegative = false;
  export let disabled = false;
  export let tooltip = undefined;
  export let step = undefined;
</script>

<NumberInput
  {tooltip}
  {disabled}
  {id}
  min={allowNegative ? -100 : 0}
  max={100}
  {step}
  icon="percentage"
  iconPosition={'right'}
  {label}
  {style}
  {className}
  {textIfInvalid}
  {textIfValid}
  {helperText}
  {optional}
  on:change={() => (value = ref.value.replace(',', '.'))}
  {value}
  bind:ref />
