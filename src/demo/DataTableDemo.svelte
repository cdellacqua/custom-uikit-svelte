<script>
  import { DataTable } from '../main';

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
    column2: 'B string',
    someNumericValue: null,
  },{
    column1: new Date("2020-01-11"),
    column2: 'D string',
    someNumericValue: 8,
  },]

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
		}];
</script>

<DataTable
  {columns}
  rows={data}
  instantSearch={false}
/>