<script>
  import { Button, NumberInput, Pagination, Switcher } from "../main";
  
  let numberOfPages = 0;
  let numbersPerSide = 1;
  let pageIndex = 0;
  
</script>

<NumberInput bind:value={numberOfPages} label={'Number of pages'} />
<NumberInput bind:value={numbersPerSide} label={'Numbers per side'} />
<NumberInput bind:value={pageIndex} label={'Page index'} />

<Pagination center {numberOfPages} {numbersPerSide} {pageIndex} />