<script>
	import { tick } from "svelte";

	import { Autocomplete, Checkbox, Form } from "../main";

	const options = [
		{
			label: "Ananas",
			value: 1,
		},
		{
			label: "Banana",
			value: { kg: "3.14" },
		},
		{
			label: "Bananana",
			value: { kg: "6.28" },
		},
		{
			label: "Strawberry",
			value: "strawberry",
		},
	];

	$: console.log(value);

	let multi = false;
	let value;
	function handleMultiChange() {
		value = multi ? ["strawberry"] : "strawberry";
	}
	$: multi, tick().then(() => handleMultiChange());
</script>

<Checkbox bind:value={multi} label="Enable multiple value selection" />
<Form submitAsync={() => alert(value)}>
	<Autocomplete
		{multi}
		bind:value
		{options}
		label={"Search a fruit"}
		placeholder={"Banana"}
		textIfNoResult={"No match"}
		on:change={(e) => console.log(e)}
	/>
</Form>
