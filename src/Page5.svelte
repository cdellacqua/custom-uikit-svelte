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
	import ScrollableNavDemo from './demo/ScrollableNavDemo.svelte';
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
		<h2 class="uk-heading-divider">PercentageInput</h2>
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
					<td>undefined</td>
					<td>A string specifying custom style properties for the component</td>
				</tr>
				<tr>
					<td>autocapitalize</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocomplete</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocorrect</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>spellcheck</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Radio</h2>
		<p></p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<RadioDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
  import &lbrace; Radio, Form, Button &rbrace; from &quot;../main&quot;;

  let status = [];
  let obj = '';

  function handleSubmit() &lbrace;
    console.log(obj);
  &rbrace;
&lt;/script&gt;

&lt;Form submitAsync=&lbrace;handleSubmit&rbrace;&gt;
  &lt;Radio
    bind:value=&lbrace;obj&rbrace;
    options=&lbrace;[&lbrace; label: 'Label 1', value: 1, disabled: true &rbrace;, &lbrace; label: 'Label 2 with a long text', value: 0, disabled: false &rbrace;, &lbrace; label: 'Label 3', value: '' &rbrace;, &lbrace; label: 'Label obj', value: &lbrace; prop: 2 &rbrace; &rbrace;, &lbrace; label: 'Label true', value: true &rbrace;, &lbrace; label: 'Label false', value: false &rbrace;]&rbrace;
    on:change=&lbrace;(&lbrace; detail &rbrace;) =&gt; &lbrace;
      status = [...status, 'Change: ' + JSON.stringify(detail)];
    &rbrace;&rbrace; /&gt;
  &lt;Button type=&quot;submit&quot;&gt;Submit&lt;/Button&gt;
  &lt;div&gt;
    &lbrace;@html status.join('&lt;br /&gt;')&rbrace;
  &lt;/div&gt;
&lt;/Form&gt;
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
					<td>generateId()</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>label</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>name</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>value</td>
					<td>any|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>options</td>
					<td>Array.&lt;&lbrace;value: any, label: string, disabled: (boolean|undefined)&rbrace;&gt;</td>
					<td>[]</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>disabled</td>
					<td>boolean</td>
					<td>false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>optional</td>
					<td>boolean</td>
					<td>false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>tooltip</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLDivElement</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>size</td>
					<td>undefined|'small'|'large'</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>className</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>variant</td>
					<td>'primary'|'secondary'|'danger'</td>
					<td>"primary"</td>
					<td>This property is used to style the button corresponding to the selected value with one of the base uikit classes for button appearance</td>
				</tr>
				<tr>
					<td>style</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>A string specifying custom style properties for the component</td>
				</tr>
				<tr>
					<td>requiredMarker</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>optionalMarker</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">SearchInput</h2>
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
					<td>generateId()</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>label</td>
					<td>string</td>
					<td>""</td>
					<td>undefined</td>
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
					<td>undefined</td>
				</tr>
				<tr>
					<td>name</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>textIfInvalid</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>textIfValid</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>helperText</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>placeholder</td>
					<td>string</td>
					<td>""</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>optional</td>
					<td>boolean</td>
					<td>false</td>
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
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>disabled</td>
					<td>boolean</td>
					<td>false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>tooltip</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>icon</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>iconPosition</td>
					<td>'left'|'right'</td>
					<td>"left"</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>inputmode</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>pattern</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocapitalize</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocomplete</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocorrect</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>spellcheck</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>minlength</td>
					<td>number|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>maxlength</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>requiredMarker</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>optionalMarker</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>state</td>
					<td>'initial'|'valid'|'invalid'</td>
					<td>"initial"</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Select</h2>
		<p></p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<SelectDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
  import &lbrace; Select &rbrace; from &quot;../main&quot;;

  let status = [];
  let obj = &lbrace; test: 1 &rbrace;;
&lt;/script&gt;

&lt;Select
  value=&lbrace;obj&rbrace;
  options=&lbrace;[&lbrace; label: 'Label 1', value: 1, disabled: true &rbrace;, &lbrace; label: 'Label 2', value: 2, disabled: false &rbrace;, &lbrace; label: 'Label 3', value: obj &rbrace;]&rbrace;
  on:change=&lbrace;(&lbrace; detail &rbrace;) =&gt; &lbrace;
    status = [...status, 'Change: ' + JSON.stringify(detail)];
  &rbrace;&rbrace; /&gt;
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
					<td>id</td>
					<td>string</td>
					<td>generateId()</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>label</td>
					<td>string</td>
					<td>""</td>
					<td>undefined</td>
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
					<td>undefined</td>
				</tr>
				<tr>
					<td>textIfInvalid</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>textIfValid</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>helperText</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>placeholder</td>
					<td>string</td>
					<td>""</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>optional</td>
					<td>boolean</td>
					<td>false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>value</td>
					<td>any</td>
					<td>-</td>
					<td>Current value of the select. Setting it to undefined sets the selected index to 0,
choosing the first option, whether it's disabled, the placeholder, or a valid option</td>
				</tr>
				<tr>
					<td>options</td>
					<td>Array.&lt;&lbrace;label: string, value: any, disabled: (boolean|undefined)&rbrace;&gt;</td>
					<td>[]</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLSelectElement</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>disabled</td>
					<td>boolean</td>
					<td>false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>tooltip</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>requiredMarker</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>optionalMarker</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>state</td>
					<td>'initial'|'valid'|'invalid'</td>
					<td>"initial"</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">TelInput</h2>
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
					<td>generateId()</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>label</td>
					<td>string</td>
					<td>""</td>
					<td>undefined</td>
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
					<td>undefined</td>
				</tr>
				<tr>
					<td>name</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>textIfInvalid</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>textIfValid</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>helperText</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>placeholder</td>
					<td>string</td>
					<td>""</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>optional</td>
					<td>boolean</td>
					<td>false</td>
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
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>disabled</td>
					<td>boolean</td>
					<td>false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>tooltip</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocapitalize</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocomplete</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocorrect</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>spellcheck</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>minlength</td>
					<td>number|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>maxlength</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>requiredMarker</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>optionalMarker</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>state</td>
					<td>'initial'|'valid'|'invalid'</td>
					<td>"initial"</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">TextInput</h2>
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
					<td>generateId()</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>label</td>
					<td>string</td>
					<td>""</td>
					<td>undefined</td>
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
					<td>undefined</td>
				</tr>
				<tr>
					<td>name</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>textIfInvalid</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>textIfValid</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>helperText</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>placeholder</td>
					<td>string</td>
					<td>""</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>optional</td>
					<td>boolean</td>
					<td>false</td>
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
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>disabled</td>
					<td>boolean</td>
					<td>false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>tooltip</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>icon</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>iconPosition</td>
					<td>'left'|'right'</td>
					<td>"left"</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>inputmode</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>pattern</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocapitalize</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocomplete</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocorrect</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>spellcheck</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>minlength</td>
					<td>number|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>maxlength</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>requiredMarker</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>optionalMarker</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>state</td>
					<td>'initial'|'valid'|'invalid'</td>
					<td>"initial"</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Textarea</h2>
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
					<td>generateId()</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>label</td>
					<td>string</td>
					<td>""</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>name</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
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
					<td>undefined</td>
				</tr>
				<tr>
					<td>textIfInvalid</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>textIfValid</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>helperText</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>placeholder</td>
					<td>string</td>
					<td>""</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>optional</td>
					<td>boolean</td>
					<td>false</td>
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
					<td>HTMLTextAreaElement</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>rows</td>
					<td>number</td>
					<td>5</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>disabled</td>
					<td>boolean</td>
					<td>false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>tooltip</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocapitalize</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocomplete</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocorrect</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>spellcheck</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>minlength</td>
					<td>number|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>maxlength</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>requiredMarker</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>optionalMarker</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>state</td>
					<td>'initial'|'valid'|'invalid'</td>
					<td>"initial"</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">TimePicker</h2>
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
					<td>generateId()</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>label</td>
					<td>string</td>
					<td>""</td>
					<td>undefined</td>
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
					<td>undefined</td>
				</tr>
				<tr>
					<td>name</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>textIfInvalid</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>textIfValid</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>helperText</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>placeholder</td>
					<td>string</td>
					<td>""</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>optional</td>
					<td>boolean</td>
					<td>false</td>
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
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>disabled</td>
					<td>boolean</td>
					<td>false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>tooltip</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocapitalize</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocomplete</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocorrect</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>spellcheck</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>requiredMarker</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>optionalMarker</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>state</td>
					<td>'initial'|'valid'|'invalid'</td>
					<td>"initial"</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">WeekPicker</h2>
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
					<td>generateId()</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>label</td>
					<td>string</td>
					<td>""</td>
					<td>undefined</td>
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
					<td>undefined</td>
				</tr>
				<tr>
					<td>name</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>textIfInvalid</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>textIfValid</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>helperText</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>placeholder</td>
					<td>string</td>
					<td>""</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>optional</td>
					<td>boolean</td>
					<td>false</td>
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
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>disabled</td>
					<td>boolean</td>
					<td>false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>tooltip</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocapitalize</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocomplete</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>autocorrect</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>spellcheck</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>requiredMarker</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>optionalMarker</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>state</td>
					<td>'initial'|'valid'|'invalid'</td>
					<td>"initial"</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>