<script>
	import { Switcher } from "./main";
	import AccordionDemo from './demo/AccordionDemo.svelte';
	import AlertDemo from './demo/AlertDemo.svelte';
	import AutocompleteDemo from './demo/AutocompleteDemo.svelte';
	import DataTableDemo from './demo/DataTableDemo.svelte';
	import FixedPointInputDemo from './demo/FixedPointInputDemo.svelte';
	import FormModalDemo from './demo/FormModalDemo.svelte';
	import ModalDemo from './demo/ModalDemo.svelte';
	import OffcanvasDemo from './demo/OffcanvasDemo.svelte';
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
		<h2 class="uk-heading-divider">Autocomplete</h2>
		<p></p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<AutocompleteDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
  import &lbrace; Autocomplete &rbrace; from &quot;../main&quot;;

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
&lt;/script&gt;

&lt;Autocomplete &lbrace;options&rbrace; label=&lbrace;'Search a fruit'&rbrace; placeholder=&lbrace;'Banana'&rbrace; textIfNoResult=&lbrace;'No match'&rbrace; /&gt;
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
					<td>options</td>
					<td>Array.&lt;&lbrace;label: string, value: any&rbrace;&gt;</td>
					<td>-</td>
					<td>Autocomplete options, the value must be unique</td>
				</tr>
				<tr>
					<td>value</td>
					<td>any</td>
					<td>-</td>
					<td>The current selected value or undefined if no value is selected</td>
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
					<td>animationDuration</td>
					<td>number</td>
					<td>-</td>
					<td>In/Out fly animation duration (in milliseconds)</td>
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
		<h2 class="uk-heading-divider">DatePicker</h2>
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
					<td>placeholder</td>
					<td>string</td>
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
					<td>string</td>
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
		<h2 class="uk-heading-divider">EmailInput</h2>
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
					<td>placeholder</td>
					<td>string</td>
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
					<td>string</td>
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
					<td>autocapitalize</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocomplete</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocorrect</td>
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
		<h2 class="uk-heading-divider">Field</h2>
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
					<td>style</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>A string specifying custom style properties for the component</td>
				</tr>
				<tr>
					<td>state</td>
					<td>'initial'|'valid'|'invalid'</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">FixedPointInput</h2>
		<p></p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<FixedPointInputDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
  import &lbrace;
    Accordion,
    AccordionItem,
    Checkbox,
    Button,
    FixedPointInput,
  &rbrace; from &quot;../main&quot;;

  let decimalPlaces = 2;
  function increasePrecision() &lbrace;
    decimalPlaces = Math.min(100, decimalPlaces + 1);
  &rbrace;
  function decreasePrecision() &lbrace;
    decimalPlaces = Math.max(decimalPlaces - 1, 0);
  &rbrace;
&lt;/script&gt;

&lt;div class=&quot;uk-flex uk-flex-middle&quot;&gt;
  &lt;Button size=&quot;small&quot; on:click=&lbrace;increasePrecision&rbrace; className=&quot;uk-margin-right&quot;&gt;
    + precision
  &lt;/Button&gt;
  &lt;Button size=&quot;small&quot; on:click=&lbrace;decreasePrecision&rbrace;&gt;- precision&lt;/Button&gt;
&lt;/div&gt;
&lt;FixedPointInput &lbrace;decimalPlaces&rbrace; value=&lbrace;10.33&rbrace; /&gt;
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
					<td>decimalPlaces</td>
					<td>number</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>inhibitDecimalSeparatorKey</td>
					<td>boolean</td>
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
					<td>string</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>min</td>
					<td>string|number</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>max</td>
					<td>string|number</td>
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
					<td>icon</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>iconPosition</td>
					<td>'left'|'right'</td>
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
		<h2 class="uk-heading-divider">MonthPicker</h2>
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
					<td>placeholder</td>
					<td>string</td>
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
					<td>string</td>
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