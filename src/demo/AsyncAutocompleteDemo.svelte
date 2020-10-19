<script>
import AsyncAutocomplete from "../components/form/AsyncAutocomplete.svelte";

  import { Autocomplete } from "../main";

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

  async function dataProvider(query) {
    await new Promise(res => setTimeout(res, 200));
    return options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()));
  }
</script>

<div on:change={(e) => console.log(e)}>
<AsyncAutocomplete value={1} query={'na'} label={'Search a fruit'} placeholder={'Banana'} textIfNoResult={'No match'} {dataProvider} />
</div>