<script>
	import { Button, DataTable } from "../main";

	let data = [
		{
			column1: new Date(),
			column2: "A string",
			someNumericValue: 10.1,
		},
		{
			column1: new Date("2020-07-06"),
			column2: "C string",
			someNumericValue: null,
		},
		{
			column1: new Date("2020-05-01"),
			column2: "C string",
			someNumericValue: null,
		},
		{
			column1: new Date("2020-01-11"),
			column2: "D string",
			someNumericValue: 8,
		},
	];

	let columns = [
		{
			label: "Column 1",
			key: "column1",
			render: (data) => data.toLocaleString(),
		},
		{
			label: "Column 2",
			key: "column2",
			searchable: (query, col, row) => {
				return [row.column1.toLocaleString(), col]
					.join(" ")
					.toLowerCase()
					.includes(query.toLowerCase());
			},
		},
		{
			label: "Nullable numeric value",
			key: "someNumericValue",
			orderable: (v1, v2) => {
				if (v1 && v2) {
					return v1 - v2;
				}
				if (v1) return -1;
				if (v2) return 1;
				return 0;
			},
			render: (n) => n,
		},
		{
			label: "Button",
			key: "someNumericValue",
			orderable: false,
			searchable: false,
			render: (n) => ({
				component: Button,
				props: {
					variant: "primary",
				},
				onClick: () => alert(n),
				textContent: "I'm a button",
			}),
		},
	];

	function updateRows() {
		data = new Array(10).fill(0).map(() => ({
			column1: new Date(),
			column2: `${String.fromCharCode(Math.floor(Math.random() * 26) + 65)} string`,
			someNumericValue: Math.random() * 10,
		}));
	}
</script>

<Button on:click={updateRows}>Click me to update the rows</Button>
<DataTable
	{columns}
	rows={data}
	recordsPerPage={2}
	orderBy={[{ key: "column1", direction: "asc" }]}
	on:query={({ detail }) => console.log(detail)}
	on:sort={({ detail }) => console.log(detail)}
	instantSearch={false}
	on:row-click={({ detail }) => console.log(detail)}
	on:row-dblclick={({ detail }) => console.log("dbl-click")}
/>
