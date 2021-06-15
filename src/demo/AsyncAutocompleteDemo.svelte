<script>
	import { tick } from "svelte";

	import { AsyncAutocomplete, Form, Checkbox } from "../main";

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

	async function dataProvider(query) {
		await new Promise((res) => setTimeout(res, 200));
		return options.filter((o) =>
			o.label.toLowerCase().includes(query.toLowerCase())
		);
	}

	$: console.log(value);

	let multi = false;
	let value;
	let selectedOptions = [];
	function handleMultiChange() {
		value = multi ? ["strawberry"] : "strawberry";
		selectedOptions = [
			{
				label: "Strawberry",
				value: "strawberry",
			},
		];
	}
	$: multi, tick().then(() => handleMultiChange());
</script>

<div on:change={(e) => console.log(e)}>
	<Form submitAsync={() => alert(value)}>
		<Checkbox bind:value={multi} label="Enable multiple value selection" />
		<AsyncAutocomplete
			{multi}
			{selectedOptions}
			bind:value
			query={"na"}
			label={"Search a fruit"}
			placeholder={"Banana"}
			textIfNoResult={"No match"}
			{dataProvider}
			on:change={(e) => console.log(e)}
		/>
	</Form>
</div>
