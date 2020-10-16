<script>
import Select from '../components/form/Select.svelte';


  import { Button, AsyncDataTable } from '../main';

  let data = [{
    column1: new Date(),
    column2: 'A string',
    someNumericValue: 10.1,
  },{
    column1: new Date("2020-07-06"),
    column2: 'C string',
    someNumericValue: null,
  },{
    column1: new Date("2020-05-01"),
    column2: 'C string',
    someNumericValue: null,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },];
  console.log(data.length);

  async function dataProvider(query, ordering, recordsPerPage, pageIndex) {
    const filtered = data.filter((d) => JSON.stringify(d).includes(query))
      .sort((d1, d2) => {
        if (ordering.length > 0) {
          const multiplier = ordering[0].direction === 'asc' ? 1 : -1;
          if (d1[ordering[0].key] > d2[ordering[0].key]) {
            return multiplier * -1;
          }
          if (d1[ordering[0].key] < d2[ordering[0].key]) {
            return multiplier * 1;
          }
          return 0;
        }
      });
    await new Promise(res => setTimeout(res, 200));
    return {
      records: filtered.slice(pageIndex * recordsPerPage, pageIndex * recordsPerPage + recordsPerPage),
      total: data.length,
      filtered: filtered.length,
    }
  }

  let columns = [{
			label: 'Column 1',
			key: 'column1',
      render: (data) => data.toLocaleString(),
		},
		{
			label: 'Column 2',
			key: 'column2',
		},
		{
			label: 'Nullable numeric value',
			key: 'someNumericValue',
			orderable: (v1, v2) => {
				if (v1 && v2) {
					return v1 - v2;
				}
				if (v1) return -1;
				if (v2) return 1;
				return 0;
			},
		},
		{
			label: 'Button',
			key: 'someNumericValue',
      orderable: false,
      searchable: false,
      render: (n) => ({
        component: Button,
        props: {
          variant: 'primary',
        },
        onClick: () => alert(n),
        textContent: 'I\'m a button',
      }),
    }];
    let recordsPerPage = 5;
</script>
<Select
  options={new Array(5).fill(0).map((_, i) => ({
    label: (i + 1) * 5,
    value: (i + 1) * 5
  }))}
  bind:value={recordsPerPage}
/>
<AsyncDataTable
  {recordsPerPage}
  {dataProvider}
  {columns}
  numbersPerSide={4}
  ordering={[{key: 'column1', direction: 'asc'}]}
  on:query={({ detail }) => console.log(detail)}
  on:sort={({ detail }) => console.log(detail)}
  instantSearch
  on:row-click={({ detail }) => console.log(detail)}
/>