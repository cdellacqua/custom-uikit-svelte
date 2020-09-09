<script>
import FixedPointInput from "./components/form/FixedPointInput.svelte";
import { Radio } from "./main";
import { Accordion, AccordionItem } from "./main";

</script>

<Accordion multi>
	<AccordionItem title="Accordion item 1">
		<p>Accordion content 1</p>
	</AccordionItem>
	<AccordionItem title="Accordion item 2">
		<p>Accordion content 2</p>
	</AccordionItem>
</Accordion>

<Radio label={"test"} options={[{label: 'opz1', value: 1}, {label: 'opz2', value: 2}, {label: 'opz3', value: 3}]} />

<FixedPointInput value={0.023} decimalPlaces={2} />