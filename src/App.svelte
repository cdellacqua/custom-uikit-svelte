<script>
import { Accordion, AccordionItem, Radio, FixedPointInput, Form, NumberInput } from "./main";

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

<Form>
<NumberInput  />
<FixedPointInput value={0.023} decimalPlaces={2} decimalSeparator="," />
<NumberInput  /></Form>