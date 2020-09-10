<script>
import AccordionDemo from "./demo/AccordionDemo.svelte";

import { Accordion, AccordionItem, Radio, FixedPointInput, Form, NumberInput } from "./main";

</script>

<div uk-grid class="uk-flex-center uk-padding-small">
	<div class="uk-width-3-5@l uk-width-2-3@m uk-width-5-6@s uk-width-1-1">
		<h2 class="uk-heading-divider">Accordion</h2>
		<AccordionDemo  />
	</div>
</div>


<Radio label={"test"} options={[{label: 'opz1', value: 1}, {label: 'opz2', value: 2}, {label: 'opz3', value: 3}]} />

<Form>
<NumberInput  />
<FixedPointInput value={0.023} decimalPlaces={2} decimalSeparator="," min={10} max={20} textIfInvalid={"oh no"} />
<NumberInput  /></Form>