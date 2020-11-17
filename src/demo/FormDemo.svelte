<script>
  import { sleep } from "../helpers/time";

  import { Button, Form, TextInput } from "../main";
  async function handleSubmit() {
    await sleep(1000);
  }

  let status = [];

  let formState;
  $: status = [...status, formState];
</script>

<Form
  bind:state={formState}
  submitAsync={handleSubmit}>
  <TextInput placeholder="I'm required" />
  <div>
    <Button type="submit">Submit</Button>
  </div>
</Form>

<div>{@html status.join('<br />')}</div>

