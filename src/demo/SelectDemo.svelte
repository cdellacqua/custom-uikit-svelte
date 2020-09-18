<script>
  import { Select } from "../main";

  let status = [];
  let obj = { test: 1 };
</script>

<Select
  value={obj}
  options={[{ label: 'Label 1', value: 1, disabled: true }, { label: 'Label 2', value: 2, disabled: false }, { label: 'Label 3', value: obj }]}
  on:change={({ detail }) => {
    status = [...status, 'Change: ' + JSON.stringify(detail)];
  }} />
<div>{@html status.join('<br />')}</div>
