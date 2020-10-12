<script>
	import { Switcher } from "./main";
	import AccordionDemo from './demo/AccordionDemo.svelte';
	import AlertDemo from './demo/AlertDemo.svelte';
	import AutocompleteDemo from './demo/AutocompleteDemo.svelte';
	import DataTableDemo from './demo/DataTableDemo.svelte';
	import FixedPointInputDemo from './demo/FixedPointInputDemo.svelte';
	import FormModalDemo from './demo/FormModalDemo.svelte';
	import ModalDemo from './demo/ModalDemo.svelte';
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
		<h2 class="uk-heading-divider">Dropdown</h2>
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
					<td>mode</td>
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
					<td>isLabelHtml</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>variant</td>
					<td>string</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLDivElement</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Form</h2>
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
					<td>submitAsync</td>
					<td>SubmitCallback</td>
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
					<td>state</td>
					<td>'initial'|'invalid'|'valid'|'loading'|'error'|'success'</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>valid</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLFormElement</td>
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
					<td>variant</td>
					<td>'stacked'|'horizontal'</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">FormModal</h2>
		<p></p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<FormModalDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
import &lbrace; Button, FormModal, TextInput, Modal &rbrace; from &quot;../main&quot;;
  let showModal = false;
  let showOther = false;
  let shownModal = false;
  async function handleSubmit() &lbrace;
    await new Promise(res =&gt; setTimeout(res, 1000));
    showOther = true;
    await new Promise(res =&gt; setTimeout(res, 5000));
    showOther = false;
    showModal = false;
  &rbrace;
&lt;/script&gt;

&lt;Button on:click=&lbrace;() =&gt; (showModal = true)&rbrace; disabled=&lbrace;showModal&rbrace;&gt;
  Show modal
&lt;/Button&gt;
&lt;p&gt;Status: &lbrace;!showModal ? 'Closed' : 'Open'&rbrace;&lt;/p&gt;
&lt;p&gt;Status (including animation time): &lbrace;!shownModal ? 'Closed' : 'Open'&rbrace;&lt;/p&gt;
&lt;FormModal bind:show=&lbrace;showModal&rbrace; bind:shown=&lbrace;shownModal&rbrace; formSubmitAsync=&lbrace;handleSubmit&rbrace;&gt;
  &lt;TextInput placeholder=&quot;I'm required&quot;&gt;&lt;/TextInput&gt;
  &lt;div slot=&quot;footer&quot;&gt;
    &lt;Button type=&quot;submit&quot;&gt;Submit&lt;/Button&gt;
  &lt;/div&gt;
&lt;/FormModal&gt;
&lt;Modal bind:show=&lbrace;showOther&rbrace; stack&gt;
  Example of stacked modal
&lt;/Modal&gt;</pre></li>
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
					<td>className</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>title</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>expand</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>fullScreen</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>closeable</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>closeButton</td>
					<td>'default'|'outside'</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>verticallyCentered</td>
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
					<td>show</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>shown</td>
					<td>boolean</td>
					<td>-</td>
					<td>@readonly</td>
				</tr>
				<tr>
					<td>stack</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>formSubmitAsync</td>
					<td>SubmitCallback</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>formDisabled</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>formState</td>
					<td>'initial'|'invalid'|'valid'|'loading'|'error'|'success'</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>formValid</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>formRef</td>
					<td>HTMLFormElement</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>formStyle</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>A string specifying custom style properties for the component</td>
				</tr>
				<tr>
					<td>formClassName</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>formVariant</td>
					<td>'stacked'|'horizontal'</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Loader</h2>
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
					<td>className</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ratio</td>
					<td>number</td>
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
					<td>ref</td>
					<td>HTMLDivElement</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">LoaderOverlay</h2>
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
					<td>className</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ratio</td>
					<td>number</td>
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
					<td>ref</td>
					<td>HTMLDivElement</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>opacity</td>
					<td>number</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>loading</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">LoaderWrapper</h2>
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
					<td>loading</td>
					<td>boolean</td>
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
					<td>ratio</td>
					<td>number</td>
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
					<td>ref</td>
					<td>HTMLDivElement</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>center</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Modal</h2>
		<p></p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<ModalDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
import &lbrace; Button, Modal &rbrace; from &quot;../main&quot;;
let showModal = false;
let shownModal = false;
&lt;/script&gt;

&lt;Button on:click=&lbrace;() =&gt; showModal = true&rbrace; disabled=&lbrace;showModal&rbrace;&gt;Show modal&lt;/Button&gt;
&lt;p&gt;
  Status: &lbrace;!showModal ? 'Closed' : 'Open'&rbrace;
&lt;/p&gt;
&lt;p&gt;
  Status (including animation time): &lbrace;!shownModal ? 'Closed' : 'Open'&rbrace;
&lt;/p&gt;
&lt;Modal bind:show=&lbrace;showModal&rbrace; bind:shown=&lbrace;shownModal&rbrace;&gt;
  Example!
&lt;/Modal&gt;</pre></li>
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
					<td>className</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>title</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>expand</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>fullScreen</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>closeable</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>closeButton</td>
					<td>'default'|'outside'</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>verticallyCentered</td>
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
					<td>show</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>shown</td>
					<td>boolean</td>
					<td>-</td>
					<td>@readonly</td>
				</tr>
				<tr>
					<td>stack</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Offcanvas</h2>
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
					<td>show</td>
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
					<td>side</td>
					<td>'left'|'right'</td>
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
  function handleTabShow(e) &lbrace;
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
					<td>switcher</td>
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
  function handleTabShow(e) &lbrace;
    status = [...status, 'show tab, current index ' + index];
  &rbrace;
&lt;/script&gt;

&lt;Tab bind:index className=&quot;uk-child-width-expand&quot; titles=&lbrace;['Tab 1', 'Tab 2', 'Tab 3']&rbrace; on:show=&lbrace;handleTabShow&rbrace;&gt;
  &lt;div&gt;
    Tab 1 Content
  &lt;/div&gt;
  &lt;div&gt;
    Tab 2 Content
  &lt;/div&gt;
  &lt;div&gt;
    Tab 3 Content
  &lt;/div&gt;
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
					<td>tab</td>
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
	</div>
</div>