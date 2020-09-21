<script>
  import { Autocomplete, Select } from "../main";

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
</script>

<Autocomplete {options} label={'Search a fruit'} placeholder={'Banana'} textIfNoResult={'No match'} />
