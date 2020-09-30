<script>
  import { Tab } from "../main";
  let status = [];

  let index = 2;
  function handleTabShow(e) {
    status = [...status, 'show tab, current index ' + index];
  }
</script>

<Tab bind:index className="uk-child-width-expand" titles={['Tab 1', 'Tab 2', 'Tab 3']} on:show={handleTabShow}>
  <div>
    Tab 1 Content
  </div>
  <div>
    Tab 2 Content
  </div>
  <div>
    Tab 3 Content
  </div>
</Tab>
<div>{@html status.join('<br />')}</div>
