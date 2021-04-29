<script>
  import { Autocomplete, Form } from "../main";

  const options = [
    {
      label: 'Ananas',
      value: 1
    },
    {
      label: 'Banana',
      value: { kg: '3.14' }
    },
    {
      label: 'Bananana',
      value: { kg: '6.28' }
    },
    {
      label: 'Strawberry',
      value: 'strawberry'
    },
  ];
  let value = "strawberry";

  $: console.log(value);
</script>

<Form submitAsync={() => alert(value)}>
  <Autocomplete bind:value {options} label={'Search a fruit'} placeholder={'Banana'} textIfNoResult={'No match'} on:change={(e) => console.log(e)} />
</Form>