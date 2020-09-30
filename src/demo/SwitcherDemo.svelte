<script>
  import { Switcher } from "../main";
  let status = [];

  let index = 2;
  function handleTabShow(e) {
    status = [...status, 'show item, current index ' + index];
  }
</script>

<Switcher bind:index className="uk-child-width-expand" titles={['Item 1', 'Item 2', 'Item 3']} on:show={handleTabShow}>
  <div>
    Item 1 Content
  </div>
  <div>
    Item 2 Content
  </div>
  <div>
    Item 3 Content
  </div>
</Switcher>
<div>{@html status.join('<br />')}</div>
