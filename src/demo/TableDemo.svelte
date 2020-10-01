<script>
  import { Table } from "../main";
</script>

<Table appearance="striped" heading={[{label: 'First', textAlign: 'center'}, 'Second', {label: 'Third', textAlign: 'right', className: 'uk-text-italic'}]}>
  {#each [1,2,3,4,5] as n}
    <tr>
      <td>{n} First</td>
      <td>Second</td>
      <td>Third</td>
    </tr>
  {/each}
</Table>
