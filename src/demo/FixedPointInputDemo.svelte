<script>
  import {
    Accordion,
    AccordionItem,
    Checkbox,
    Button,
    FixedPointInput,
  } from "../main";

  let decimalPlaces = 2;
  function increasePrecision() {
    decimalPlaces = Math.min(100, decimalPlaces + 1);
  }
  function decreasePrecision() {
    decimalPlaces = Math.max(decimalPlaces - 1, 0);
  }
</script>

<div class="uk-flex uk-flex-middle">
  <Button size="small" on:click={increasePrecision} className="uk-margin-right">
    + precision
  </Button>
  <Button size="small" on:click={decreasePrecision}>- precision</Button>
</div>
<FixedPointInput {decimalPlaces} value={10.33} />
