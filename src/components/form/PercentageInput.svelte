<script>
  import TextInput from "./TextInput.svelte";
  import NumberInput from "./NumberInput.svelte";
  import { generateId } from "../../services/html";

  export let id = generateId();
  export let label = "";
  export let className = "";
  export let textIfInvalid = undefined;
  export let textIfValid = undefined;
  export let helperText = undefined;
  export let optional = false;
  export let value;
  export let ref = undefined;
  export let allowNegative = false;
  export let disabled = false;
  export let tooltip = undefined;
</script>

<NumberInput
  {tooltip}
  {disabled}
  {id}
  min={allowNegative ? -100 : 0}
  max={100}
  icon="percentage"
  iconPosition={'right'}
  {label}
  {className}
  {textIfInvalid}
  {textIfValid}
  {helperText}
  {optional}
  on:change={() => (value = ref.value.replace(',', '.'))}
  {value}
  bind:ref />
