<script>
	import { Switcher } from "./main";
	import AccordionDemo from './demo/AccordionDemo.svelte';
	import AlertDemo from './demo/AlertDemo.svelte';
	import AsyncAutocompleteDemo from './demo/AsyncAutocompleteDemo.svelte';
	import AsyncDataTableDemo from './demo/AsyncDataTableDemo.svelte';
	import AutocompleteDemo from './demo/AutocompleteDemo.svelte';
	import BadgeDemo from './demo/BadgeDemo.svelte';
	import DataTableDemo from './demo/DataTableDemo.svelte';
	import FixedPointInputDemo from './demo/FixedPointInputDemo.svelte';
	import FormDemo from './demo/FormDemo.svelte';
	import FormModalDemo from './demo/FormModalDemo.svelte';
	import ModalDemo from './demo/ModalDemo.svelte';
	import OffcanvasDemo from './demo/OffcanvasDemo.svelte';
	import OrderableListDemo from './demo/OrderableListDemo.svelte';
	import PaginationDemo from './demo/PaginationDemo.svelte';
	import PasswordInputAltDemo from './demo/PasswordInputAltDemo.svelte';
	import RadioDemo from './demo/RadioDemo.svelte';
	import SelectDemo from './demo/SelectDemo.svelte';
	import SwitcherDemo from './demo/SwitcherDemo.svelte';
	import TabDemo from './demo/TabDemo.svelte';
	import TableDemo from './demo/TableDemo.svelte';
</script>
<style>
	code {
		white-space: pre;
	}
</style>
<div uk-grid class="uk-flex-center uk-padding-small">
	<div class="uk-width-3-5@l uk-width-2-3@m uk-width-5-6@s uk-width-1-1">
		<h2 class="uk-heading-divider">OrderableList</h2>
		<p></p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<OrderableListDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;

import &lbrace; Button, DescriptionList &rbrace; from &quot;../main&quot;;

import &lbrace; OrderableList &rbrace; from &quot;../main&quot;;

let items = [&lbrace;
&nbsp;&nbsp;props: &lbrace; variant: 'primary'&rbrace;,
&nbsp;&nbsp;text: 'Hello.',
&nbsp;&nbsp;component: Button
&rbrace;, &lbrace;
&nbsp;&nbsp;props: &lbrace; list: [&lbrace; term: 'first', details: 'description one'&rbrace;, &lbrace; term: 'second', details: 'description two'&rbrace;,  &lbrace; term: 'second', details: 'description two'&rbrace;,  &lbrace; term: 'second', details: 'description two'&rbrace;,  &lbrace; term: 'second', details: 'description two'&rbrace;] &rbrace;,
&nbsp;&nbsp;component: DescriptionList,
&rbrace;, &lbrace;
&nbsp;&nbsp;text: &quot;I'm just some plain text&quot;
&rbrace;];

&lt;/script&gt;
&lt;OrderableList &lbrace;items&rbrace; on:move=&lbrace;(&lbrace;detail&rbrace;) =&gt; console.log('move', detail)&rbrace; on:moved=&lbrace;(&lbrace;detail&rbrace;) =&gt; console.log('moved', detail)&rbrace;&gt;&lt;/OrderableList&gt;</pre></li>
		</Switcher>
		<h3>Props</h3>
		<table class="uk-table">
			<thead>
				<tr>
					<th>name</th>
					<th>type</th>
					<th>default</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>items</td>
					<td>Array.&lt;&lbrace;text: (string|undefined), html: (string|undefined), props: (Record.&lt;string, any&gt;|undefined), component: (SvelteComponent|undefined)&rbrace;&gt;</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>component</td>
					<td>SvelteComponent|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLUListElement</td>
					<td>-</td>
					<td>@readonly</td>
				</tr>
				<tr>
					<td>animationDuration</td>
					<td>number</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>moveToBoundaries</td>
					<td>boolean</td>
					<td>-</td>
					<td>Whether to show or hide the move-to-top and move-to-bottom buttons</td>
				</tr>
				<tr>
					<td>style</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>A string specifying custom style properties for the component</td>
				</tr>
				<tr>
					<td>className</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>A string containing any additional classes to apply to the component</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Pagination</h2>
		<p></p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<PaginationDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
  import &lbrace; Button, NumberInput, Pagination, Switcher &rbrace; from &quot;../main&quot;;
  
  let numberOfPages = 0;
  let numbersPerSide = 1;
  let pageIndex = 0;
  
&lt;/script&gt;

&lt;NumberInput bind:value=&lbrace;numberOfPages&rbrace; label=&lbrace;'Number of pages'&rbrace; /&gt;
&lt;NumberInput bind:value=&lbrace;numbersPerSide&rbrace; label=&lbrace;'Numbers per side'&rbrace; /&gt;
&lt;NumberInput bind:value=&lbrace;pageIndex&rbrace; label=&lbrace;'Page index'&rbrace; /&gt;

&lt;Pagination center &lbrace;numberOfPages&rbrace; &lbrace;numbersPerSide&rbrace; &lbrace;pageIndex&rbrace; /&gt;</pre></li>
		</Switcher>
		<h3>Props</h3>
		<table class="uk-table">
			<thead>
				<tr>
					<th>name</th>
					<th>type</th>
					<th>default</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>className</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>style</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>center</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>pageIndex</td>
					<td>number</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>numberOfPages</td>
					<td>number</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>numbersPerSide</td>
					<td>number</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Switcher</h2>
		<p></p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<SwitcherDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
  import &lbrace; Switcher &rbrace; from &quot;../main&quot;;
  let status = [];

  let index = 2;
  function handleTabShow() &lbrace;
    status = [...status, 'show item, current index ' + index];
  &rbrace;
&lt;/script&gt;

&lt;Switcher bind:index className=&quot;uk-child-width-expand&quot; titles=&lbrace;['Item 1', 'Item 2', 'Item 3']&rbrace; on:show=&lbrace;handleTabShow&rbrace;&gt;
  &lt;div&gt;
    Item 1 Content
  &lt;/div&gt;
  &lt;div&gt;
    Item 2 Content
  &lt;/div&gt;
  &lt;div&gt;
    Item 3 Content
  &lt;/div&gt;
&lt;/Switcher&gt;
&lt;div&gt;&lbrace;@html status.join('&lt;br /&gt;')&rbrace;&lt;/div&gt;
</pre></li>
		</Switcher>
		<h3>Props</h3>
		<table class="uk-table">
			<thead>
				<tr>
					<th>name</th>
					<th>type</th>
					<th>default</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>connect</td>
					<td>string</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>toggle</td>
					<td>string</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>animation</td>
					<td>string|false</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>duration</td>
					<td>number</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>swiping</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>style</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>A string specifying custom style properties for the component</td>
				</tr>
				<tr>
					<td>className</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>titles</td>
					<td>Array.&lt;string&gt;</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>htmlTitle</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLUListElement</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>index</td>
					<td>number</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Tab</h2>
		<p></p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<TabDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
  import &lbrace; Tab &rbrace; from &quot;../main&quot;;
  let status = [];

  let index = 2;
  function handleTabShow() &lbrace;
    status = [...status, 'show tab, current index ' + index];
  &rbrace;
&lt;/script&gt;

&lt;Tab bind:index className=&quot;uk-child-width-expand&quot; titles=&lbrace;['Tab 1', 'Tab 2', 'Tab 3']&rbrace; on:show=&lbrace;handleTabShow&rbrace;&gt;
  &lt;li&gt;
    Tab 1 Content
  &lt;/li&gt;
  &lt;li&gt;
    Tab 2 Content
  &lt;/li&gt;
  &lt;li&gt;
    Tab 3 Content
  &lt;/li&gt;
&lt;/Tab&gt;
&lt;div&gt;&lbrace;@html status.join('&lt;br /&gt;')&rbrace;&lt;/div&gt;
</pre></li>
		</Switcher>
		<h3>Props</h3>
		<table class="uk-table">
			<thead>
				<tr>
					<th>name</th>
					<th>type</th>
					<th>default</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>connect</td>
					<td>string</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>toggle</td>
					<td>string</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>animation</td>
					<td>string|false</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>duration</td>
					<td>number</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>swiping</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>media</td>
					<td>number|string</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>style</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>A string specifying custom style properties for the component</td>
				</tr>
				<tr>
					<td>className</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>titles</td>
					<td>Array.&lt;string&gt;</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>htmlTitle</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLDivElement</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>index</td>
					<td>number</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Table</h2>
		<p></p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<TableDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
  import &lbrace; Table &rbrace; from &quot;../main&quot;;
&lt;/script&gt;

&lt;Table appearance=&quot;striped&quot; heading=&lbrace;[&lbrace;label: 'First', textAlign: 'center'&rbrace;, 'Second', &lbrace;label: 'Third', textAlign: 'right', className: 'uk-text-italic'&rbrace;]&rbrace;&gt;
  &lbrace;#each [1,2,3,4,5] as n&rbrace;
    &lt;tr&gt;
      &lt;td&gt;&lbrace;n&rbrace; First&lt;/td&gt;
      &lt;td&gt;Second&lt;/td&gt;
      &lt;td&gt;Third&lt;/td&gt;
    &lt;/tr&gt;
  &lbrace;/each&rbrace;
&lt;/Table&gt;
</pre></li>
		</Switcher>
		<h3>Props</h3>
		<table class="uk-table">
			<thead>
				<tr>
					<th>name</th>
					<th>type</th>
					<th>default</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>heading</td>
					<td>Array.&lt;(string|&lbrace;label: string, className: (string|undefined), textAlign: ('center'|'right'|'left'|undefined)&rbrace;)&gt;</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>size</td>
					<td>'small'|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>className</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>style</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>appearance</td>
					<td>'divider'|'striped'|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>stickyHeader</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLTableElement</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>caption</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Accordion</h2>
		<p></p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<AccordionDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
  import &lbrace; Accordion, AccordionItem, Checkbox, Button &rbrace; from &quot;../main&quot;;
  let multi = false;
  let collapsible = true;
  let duration = 200;

  let index = false;

  function increaseDuration() &lbrace;
    duration = Math.min(2500, duration + 50);
  &rbrace;
  function decreaseDuration() &lbrace;
    duration = Math.max(duration - 50, 50);
  &rbrace;
&lt;/script&gt;

&lt;div class=&quot;uk-flex uk-flex-middle&quot;&gt;
  &lt;Checkbox
    bind:value=&lbrace;multi&rbrace;
    label=&quot;Multi&quot;
    optional
    className=&quot;uk-margin-right uk-margin-remove-bottom&quot; /&gt;
  &lt;Checkbox
    bind:value=&lbrace;collapsible&rbrace;
    label=&quot;Collapsible&quot;
    className=&quot;uk-margin-right uk-margin-remove-bottom&quot;
    optional /&gt;
  &lt;Button size=&quot;small&quot; on:click=&lbrace;increaseDuration&rbrace; className=&quot;uk-margin-right&quot;&gt;
    + duration
  &lt;/Button&gt;
  &lt;Button size=&quot;small&quot; on:click=&lbrace;decreaseDuration&rbrace;&gt;- duration&lt;/Button&gt;
&lt;/div&gt;
&lt;Accordion &lbrace;multi&rbrace; &lbrace;collapsible&rbrace; &lbrace;duration&rbrace; bind:index on:show=&lbrace;() =&gt; console.log(index)&rbrace;&gt;
  &lt;AccordionItem title=&quot;First&quot;&gt;
    &lt;p&gt;Use the options above to see how the accordion can be customized.&lt;/p&gt;
  &lt;/AccordionItem&gt;
  &lt;AccordionItem title=&quot;Second&quot;&gt;
    &lt;p&gt;Some content&lt;/p&gt;
  &lt;/AccordionItem&gt;
  &lt;AccordionItem
    title=&quot;Title &lt;span class='uk-text-primary'&gt;with &lt;i&gt;HTML&lt;/i&gt;&lt;/span&gt;&quot;
    isTitleHtml&gt;
    &lt;p&gt;Other content&lt;/p&gt;
  &lt;/AccordionItem&gt;
&lt;/Accordion&gt;
</pre></li>
		</Switcher>
		<h3>Props</h3>
		<table class="uk-table">
			<thead>
				<tr>
					<th>name</th>
					<th>type</th>
					<th>default</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>index</td>
					<td>number|false</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>animation</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>collapsible</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>duration</td>
					<td>number</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>multi</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>transition</td>
					<td>string</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLUListElement</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>className</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>style</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">AccordionItem</h2>
		<p></p>
		<h2 class="uk-heading-divider">AsyncAutocomplete</h2>
		<p></p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<AsyncAutocompleteDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
  import AsyncAutocomplete from &quot;../components/form/AsyncAutocomplete.svelte&quot;;

  import &lbrace; Autocomplete, Form &rbrace; from &quot;../main&quot;;

  const options = [
    &lbrace;
      label: &quot;Ananas&quot;,
      value: 1,
    &rbrace;,
    &lbrace;
      label: &quot;Banana&quot;,
      value: &lbrace; kg: &quot;3.14&quot; &rbrace;,
    &rbrace;,
    &lbrace;
      label: &quot;Bananana&quot;,
      value: &lbrace; kg: &quot;6.28&quot; &rbrace;,
    &rbrace;,
    &lbrace;
      label: &quot;Strawberry&quot;,
      value: &quot;strawberry&quot;,
    &rbrace;,
  ];

  async function dataProvider(query) &lbrace;
    await new Promise((res) =&gt; setTimeout(res, 200));
    return options.filter((o) =&gt;
      o.label.toLowerCase().includes(query.toLowerCase())
    );
  &rbrace;

  let value = 1;
&lt;/script&gt;

&lt;div on:change=&lbrace;(e) =&gt; console.log(e)&rbrace;&gt;
  &lt;Form submitAsync=&lbrace;() =&gt; alert(value)&rbrace;&gt;
    &lt;AsyncAutocomplete
      bind:value
      query=&lbrace;'na'&rbrace;
      label=&lbrace;'Search a fruit'&rbrace;
      placeholder=&lbrace;'Banana'&rbrace;
      textIfNoResult=&lbrace;'No match'&rbrace;
      &lbrace;dataProvider&rbrace;
      on:change=&lbrace;(e) =&gt; console.log(e)&rbrace; /&gt;
  &lt;/Form&gt;
&lt;/div&gt;
</pre></li>
		</Switcher>
		<h3>Props</h3>
		<table class="uk-table">
			<thead>
				<tr>
					<th>name</th>
					<th>type</th>
					<th>default</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>id</td>
					<td>string</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>value</td>
					<td>any</td>
					<td>-</td>
					<td>The current selected value or null if no value is selected</td>
				</tr>
				<tr>
					<td>label</td>
					<td>string</td>
					<td>-</td>
					<td>Label of this component</td>
				</tr>
				<tr>
					<td>className</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>A string containing any additional classes to apply to the component</td>
				</tr>
				<tr>
					<td>style</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>A string specifying custom style properties for the component</td>
				</tr>
				<tr>
					<td>textIfNoResult</td>
					<td>string</td>
					<td>-</td>
					<td>Text to show when the applied filter doesn't return any result</td>
				</tr>
				<tr>
					<td>textIfInvalid</td>
					<td>string</td>
					<td>-</td>
					<td>Text to show when the field is required but no value has been chosen</td>
				</tr>
				<tr>
					<td>disabled</td>
					<td>boolean</td>
					<td>-</td>
					<td>Control whether the component is disabled or not</td>
				</tr>
				<tr>
					<td>tooltip</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>UIkit tooltip</td>
				</tr>
				<tr>
					<td>placeholder</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>Input placeholder</td>
				</tr>
				<tr>
					<td>optional</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLDivElement</td>
					<td>-</td>
					<td>Reference to the div that wraps this component</td>
				</tr>
				<tr>
					<td>autocapitalize</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>Autocapitalize setting of the input tag</td>
				</tr>
				<tr>
					<td>autocomplete</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>Autocomplete setting of the input tag</td>
				</tr>
				<tr>
					<td>autocorrect</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>Autocorrect setting of the input tag</td>
				</tr>
				<tr>
					<td>spellcheck</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>animationDuration</td>
					<td>number</td>
					<td>-</td>
					<td>In/Out fly animation duration (in milliseconds)</td>
				</tr>
				<tr>
					<td>state</td>
					<td>'initial'|'valid'|'invalid'</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>query</td>
					<td>string</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>dataProvider</td>
					<td>DataProvider</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>dataProviderErrorHandler</td>
					<td>function</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>loading</td>
					<td>boolean</td>
					<td>-</td>
					<td>@readonly</td>
				</tr>
				<tr>
					<td>debounceMs</td>
					<td>number</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Autocomplete</h2>
		<p></p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<AutocompleteDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
  import &lbrace; Autocomplete, Form &rbrace; from &quot;../main&quot;;

  const options = [
    &lbrace;
      label: 'Ananas',
      value: 1
    &rbrace;,
    &lbrace;
      label: 'Banana',
      value: &lbrace; kg: '3.14' &rbrace;
    &rbrace;,
    &lbrace;
      label: 'Bananana',
      value: &lbrace; kg: '6.28' &rbrace;
    &rbrace;,
    &lbrace;
      label: 'Strawberry',
      value: 'strawberry'
    &rbrace;,
  ];
  let value = &quot;strawberry&quot;;
&lt;/script&gt;

&lt;Form submitAsync=&lbrace;() =&gt; alert(value)&rbrace;&gt;
  &lt;Autocomplete bind:value &lbrace;options&rbrace; label=&lbrace;'Search a fruit'&rbrace; placeholder=&lbrace;'Banana'&rbrace; textIfNoResult=&lbrace;'No match'&rbrace; on:change=&lbrace;(e) =&gt; console.log(e)&rbrace; /&gt;
&lt;/Form&gt;</pre></li>
		</Switcher>
		<h3>Props</h3>
		<table class="uk-table">
			<thead>
				<tr>
					<th>name</th>
					<th>type</th>
					<th>default</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>id</td>
					<td>string</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>options</td>
					<td>Array.&lt;&lbrace;label: string, value: any&rbrace;&gt;</td>
					<td>-</td>
					<td>Autocomplete options, the value must be unique</td>
				</tr>
				<tr>
					<td>value</td>
					<td>any</td>
					<td>-</td>
					<td>The current selected value or null if no value is selected</td>
				</tr>
				<tr>
					<td>label</td>
					<td>string</td>
					<td>-</td>
					<td>Label of this component</td>
				</tr>
				<tr>
					<td>className</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>A string containing any additional classes to apply to the component</td>
				</tr>
				<tr>
					<td>style</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>A string specifying custom style properties for the component</td>
				</tr>
				<tr>
					<td>textIfNoResult</td>
					<td>string</td>
					<td>-</td>
					<td>Text to show when the applied filter doesn't return any result</td>
				</tr>
				<tr>
					<td>textIfInvalid</td>
					<td>string</td>
					<td>-</td>
					<td>Text to show when the field is required but no value has been chosen</td>
				</tr>
				<tr>
					<td>disabled</td>
					<td>boolean</td>
					<td>-</td>
					<td>Control whether the component is disabled or not</td>
				</tr>
				<tr>
					<td>tooltip</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>UIkit tooltip</td>
				</tr>
				<tr>
					<td>placeholder</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>Input placeholder</td>
				</tr>
				<tr>
					<td>optional</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLDivElement</td>
					<td>-</td>
					<td>Reference to the div that wraps this component</td>
				</tr>
				<tr>
					<td>autocapitalize</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>Autocapitalize setting of the input tag</td>
				</tr>
				<tr>
					<td>autocomplete</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>Autocomplete setting of the input tag</td>
				</tr>
				<tr>
					<td>autocorrect</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>Autocorrect setting of the input tag</td>
				</tr>
				<tr>
					<td>spellcheck</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>animationDuration</td>
					<td>number</td>
					<td>-</td>
					<td>In/Out fly animation duration (in milliseconds)</td>
				</tr>
				<tr>
					<td>state</td>
					<td>'initial'|'valid'|'invalid'</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Checkbox</h2>
		<p></p>
		<h3>Props</h3>
		<table class="uk-table">
			<thead>
				<tr>
					<th>name</th>
					<th>type</th>
					<th>default</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>id</td>
					<td>string</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>label</td>
					<td>string</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>style</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>A string specifying custom style properties for the component</td>
				</tr>
				<tr>
					<td>className</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>name</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>textIfInvalid</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>textIfValid</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>helperText</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>optional</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>value</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLInputElement</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>disabled</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>tooltip</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>state</td>
					<td>'initial'|'valid'|'invalid'</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>