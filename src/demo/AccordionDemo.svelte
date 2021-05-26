<script>
  import NumberInput from "../components/form/NumberInput.svelte";
  import { Accordion, AccordionItem, Checkbox, Button } from "../main";
  let collapsible = true;
  let duration = 200;

  let index = false;
  let indices = [];

  function increaseDuration() {
    duration = Math.min(2500, duration + 50);
  }
  function decreaseDuration() {
    duration = Math.max(duration - 50, 50);
  }
</script>

<div class="uk-flex uk-flex-middle">
  <Checkbox
    bind:value={collapsible}
    label="Collapsible"
    className="uk-margin-right uk-margin-remove-bottom"
    optional
  />
  <Button size="small" on:click={increaseDuration} className="uk-margin-right">
    + duration
  </Button>
  <Button size="small" on:click={decreaseDuration}>- duration</Button>
</div>
<p>Simple Accordion</p>
<div class="uk-flex uk-flex-middle">
  <Checkbox
    optional
    className="uk-margin-right uk-margin-top"
    label="Toggle open"
    value={index !== false}
    on:change={({ target }) => (target.checked ? (index = 0) : (index = false))}
  />
  <NumberInput
    optional
    label="Open index"
    min={0}
    max={2}
    step={1}
    value={index === false ? "" : index}
    on:change={({ target }) =>
      (index = target.value ? Number(target.value) : false)}
  />
</div>
<Accordion
  {collapsible}
  {duration}
  bind:index
  on:show={() => console.log(index)}
>
  <AccordionItem title="First">
    <p>Use the options above to see how the accordion can be customized.</p>
  </AccordionItem>
  <AccordionItem title="Second">
    <p>Some content</p>
  </AccordionItem>
  <AccordionItem
    title="Title <span class='uk-text-primary'>with <i>HTML</i></span>"
    isTitleHtml
  >
    <p>Other content</p>
  </AccordionItem>
</Accordion>

<p>Multi Accordion</p>
<div class="uk-flex uk-flex-middle">
  {#each [0, 1, 2] as itemIndex}
    <Checkbox
      optional
      label={"open index " + itemIndex}
      value={indices.includes(itemIndex)}
      on:change={({ target }) =>
        target.checked
          ? (indices = [...indices, itemIndex])
          : (indices = indices.filter((i) => itemIndex !== i))}
    />
  {/each}
</div>
<Accordion
  multi
  {collapsible}
  {duration}
  bind:index={indices}
  on:show={() => console.log(indices)}
>
  <AccordionItem title="First">
    <p>Use the options above to see how the accordion can be customized.</p>
  </AccordionItem>
  <AccordionItem title="Second">
    <p>Some content</p>
  </AccordionItem>
  <AccordionItem
    title="Title <span class='uk-text-primary'>with <i>HTML</i></span>"
    isTitleHtml
  >
    <p>Other content</p>
  </AccordionItem>
</Accordion>
