<script>
  import { Accordion, AccordionItem, Checkbox, Button } from "../main";
  let multi = false;
  let collapsible = true;
  let duration = 200;

  let index = false;

  function increaseDuration() {
    duration = Math.min(2500, duration + 50);
  }
  function decreaseDuration() {
    duration = Math.max(duration - 50, 50);
  }
</script>

<div class="uk-flex uk-flex-middle">
  <Checkbox
    bind:value={multi}
    label="Multi"
    optional
    className="uk-margin-right uk-margin-remove-bottom" />
  <Checkbox
    bind:value={collapsible}
    label="Collapsible"
    className="uk-margin-right uk-margin-remove-bottom"
    optional />
  <Button size="small" on:click={increaseDuration} className="uk-margin-right">
    + duration
  </Button>
  <Button size="small" on:click={decreaseDuration}>- duration</Button>
</div>
<Accordion {multi} {collapsible} {duration} bind:index on:show={() => console.log(index)}>
  <AccordionItem title="First">
    <p>Use the options above to see how the accordion can be customized.</p>
  </AccordionItem>
  <AccordionItem title="Second">
    <p>Some content</p>
  </AccordionItem>
  <AccordionItem
    title="Title <span class='uk-text-primary'>with <i>HTML</i></span>"
    isTitleHtml>
    <p>Other content</p>
  </AccordionItem>
</Accordion>
