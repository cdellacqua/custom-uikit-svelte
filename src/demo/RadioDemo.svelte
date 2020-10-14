<script>
  import { Radio, Form, Button } from "../main";

  let status = [];
  let obj = '';

  function handleSubmit() {
    console.log(obj);
  }
</script>

<Form submitAsync={handleSubmit}>
  <Radio
    bind:value={obj}
    options={[{ label: 'Label 1', value: 1, disabled: true }, { label: 'Label 2 with a long text', value: 0, disabled: false }, { label: 'Label 3', value: '' }, { label: 'Label obj', value: { prop: 2 } }, { label: 'Label true', value: true }, { label: 'Label false', value: false }]}
    on:change={({ detail }) => {
      status = [...status, 'Change: ' + JSON.stringify(detail)];
    }} />
  <Button type="submit">Submit</Button>
  <div>
    {@html status.join('<br />')}
  </div>
</Form>
