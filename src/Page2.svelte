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
	import RemoteDataTableDemo from './demo/RemoteDataTableDemo.svelte';
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
&lt;FormModal bind:show=&lbrace;showOther&rbrace; formSubmitAsync=&lbrace;handleSubmit&rbrace;&gt;
  Example of stacked modal
  &lt;div slot=&quot;footer&quot;&gt;
    &lt;Button type=&quot;submit&quot;&gt;Submit&lt;/Button&gt;
  &lt;/div&gt;
&lt;/FormModal&gt;</pre></li>
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
		<h2 class="uk-heading-divider">LoaderOverlayScoped</h2>
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
let mounted = true;
function toggleMountState() &lbrace;
  mounted = !mounted;
&rbrace;
&lt;/script&gt;

&lt;Button on:click=&lbrace;() =&gt; showModal = true&rbrace; disabled=&lbrace;showModal&rbrace;&gt;Show modal&lt;/Button&gt;
&lt;Button on:click=&lbrace;() =&gt; mounted = true&rbrace; disabled=&lbrace;mounted&rbrace;&gt;Mount modal&lt;/Button&gt;
&lt;p&gt;
  Status: &lbrace;!showModal ? 'Closed' : 'Open'&rbrace;
&lt;/p&gt;
&lt;p&gt;
  Status (including animation time): &lbrace;!shownModal ? 'Closed' : 'Open'&rbrace;
&lt;/p&gt;
&lbrace;#if mounted&rbrace;
  &lt;Modal bind:show=&lbrace;showModal&rbrace; bind:shown=&lbrace;shownModal&rbrace;&gt;
    Example!
    &lt;div&gt;
      A modal can safely be unmounted from the document
    &lt;/div&gt;
    &lt;Button on:click=&lbrace;() =&gt; toggleMountState()&rbrace;&gt;Unmount modal&lt;/Button&gt;
  &lt;/Modal&gt;
&lbrace;/if&rbrace;
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
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<OffcanvasDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
  import &lbrace; Offcanvas, Button &rbrace; from &quot;../main&quot;;
  let status = [];

  let showSidebar = false;
  function handleOffcanvasEvent(eventName) &lbrace;
    status = [...status, eventName];
  &rbrace;
  const menu = [
    &lbrace;
      href: &quot;/#_1&quot;,
      label: &quot;Link 1&quot;,
    &rbrace;,
    &lbrace;
      href: &quot;/#_2&quot;,
      label: &quot;Link 2&quot;,
    &rbrace;,
    &lbrace;
      href: &quot;/#_3&quot;,
      label: &quot;Link 3&quot;,
    &rbrace;,
  ];
&lt;/script&gt;

&lt;Offcanvas
  bind:show=&lbrace;showSidebar&rbrace;
  on:show=&lbrace;() =&gt; handleOffcanvasEvent('show')&rbrace;
  on:hide=&lbrace;() =&gt; handleOffcanvasEvent('hide')&rbrace;
  on:shown=&lbrace;() =&gt; handleOffcanvasEvent('shown')&rbrace;
  on:hidden=&lbrace;() =&gt; handleOffcanvasEvent('hidden')&rbrace;
&gt;
  &lt;ul class=&quot;uk-nav uk-nav-default sidebar-list&quot;&gt;
    &lt;li class=&quot;uk-nav-header&quot; /&gt;
    &lbrace;#each menu as item&rbrace;
      &lt;li class=&quot;uk-nav-header&quot;&gt;
        &lt;a
          href=&lbrace;item.href&rbrace;
          on:click=&lbrace;() =&gt; (showSidebar = false)&rbrace;&gt;&lbrace;item.label&rbrace;&lt;/a&gt;
      &lt;/li&gt;
    &lbrace;/each&rbrace;
  &lt;/ul&gt;
&lt;/Offcanvas&gt;
&lt;Button on:click=&lbrace;() =&gt; (showSidebar = !showSidebar)&rbrace; disabled=&lbrace;showSidebar&rbrace;&gt;
  Show offcanvas
&lt;/Button&gt;
&lt;div&gt;
  &lbrace;@html status.join('&lt;br /&gt;')&rbrace;
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
		<h2 class="uk-heading-divider">RemoteDataTable</h2>
		<p></p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<RemoteDataTableDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;

  import &lbrace; Button, RemoteDataTable &rbrace; from '../main';

  let data = [&lbrace;
    column1: new Date(),
    column2: 'A string',
    someNumericValue: 10.1,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-07-06&quot;),
    column2: 'C string',
    someNumericValue: null,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-05-01&quot;),
    column2: 'C string',
    someNumericValue: null,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-01-11&quot;),
    column2: 'D string',
    someNumericValue: 8,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-01-11&quot;),
    column2: 'D string',
    someNumericValue: 8,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-01-11&quot;),
    column2: 'D string',
    someNumericValue: 8,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-01-11&quot;),
    column2: 'D string',
    someNumericValue: 8,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-01-11&quot;),
    column2: 'D string',
    someNumericValue: 8,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-01-11&quot;),
    column2: 'D string',
    someNumericValue: 8,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-01-11&quot;),
    column2: 'D string',
    someNumericValue: 8,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-01-11&quot;),
    column2: 'D string',
    someNumericValue: 8,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-01-11&quot;),
    column2: 'D string',
    someNumericValue: 8,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-01-11&quot;),
    column2: 'D string',
    someNumericValue: 8,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-01-11&quot;),
    column2: 'D string',
    someNumericValue: 8,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-01-11&quot;),
    column2: 'D string',
    someNumericValue: 8,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-01-11&quot;),
    column2: 'D string',
    someNumericValue: 8,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-01-11&quot;),
    column2: 'D string',
    someNumericValue: 8,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-01-11&quot;),
    column2: 'D string',
    someNumericValue: 8,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-01-11&quot;),
    column2: 'D string',
    someNumericValue: 8,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-01-11&quot;),
    column2: 'D string',
    someNumericValue: 8,
  &rbrace;,&lbrace;
    column1: new Date(&quot;2020-01-11&quot;),
    column2: 'D string',
    someNumericValue: 8,
  &rbrace;,];

  async function dataProvider(query, ordering, recordsPerPage, pageIndex) &lbrace;
    const filtered = data.filter((d) =&gt; JSON.stringify(d).includes(query))
      .sort((d1, d2) =&gt; &lbrace;
        if (ordering.length &gt; 0) &lbrace;
          const multiplier = ordering[0].direction === 'asc' ? 1 : -1;
          if (d1[ordering[0].key] &gt; d2[ordering[0].key]) &lbrace;
            return multiplier * -1;
          &rbrace;
          if (d1[ordering[0].key] &lt; d2[ordering[0].key]) &lbrace;
            return multiplier * 1;
          &rbrace;
          return 0;
        &rbrace;
      &rbrace;);
    await new Promise(res =&gt; setTimeout(res, 200));
    return &lbrace;
      records: filtered.slice(pageIndex * recordsPerPage, pageIndex * recordsPerPage + recordsPerPage),
      total: data.length,
      filtered: filtered.length,
    &rbrace;
  &rbrace;

  let columns = [&lbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: 'Column 1',
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: 'column1',
      render: (data) =&gt; data.toLocaleString(),
&nbsp;&nbsp;&nbsp;&nbsp;&rbrace;,
&nbsp;&nbsp;&nbsp;&nbsp;&lbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: 'Column 2',
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: 'column2',
&nbsp;&nbsp;&nbsp;&nbsp;&rbrace;,
&nbsp;&nbsp;&nbsp;&nbsp;&lbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: 'Nullable numeric value',
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: 'someNumericValue',
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;orderable: (v1, v2) =&gt; &lbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (v1 &amp;&amp; v2) &lbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return v1 - v2;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&rbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (v1) return -1;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (v2) return 1;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 0;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&rbrace;,
&nbsp;&nbsp;&nbsp;&nbsp;&rbrace;,
&nbsp;&nbsp;&nbsp;&nbsp;&lbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: 'Button',
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: 'someNumericValue',
      orderable: false,
      searchable: false,
      render: (n) =&gt; (&lbrace;
        component: Button,
        props: &lbrace;
          variant: 'primary',
        &rbrace;,
        onClick: () =&gt; alert(n),
        textContent: 'I\'m a button',
      &rbrace;),
&nbsp;&nbsp;&nbsp;&nbsp;&rbrace;];
&lt;/script&gt;

&lt;RemoteDataTable
  &lbrace;dataProvider&rbrace;
  &lbrace;columns&rbrace;
  paginationShortcuts=&lbrace;4&rbrace;
  ordering=&lbrace;[&lbrace;key: 'column1', direction: 'asc'&rbrace;]&rbrace;
  on:query=&lbrace;(&lbrace; detail &rbrace;) =&gt; console.log(detail)&rbrace;
  on:sort=&lbrace;(&lbrace; detail &rbrace;) =&gt; console.log(detail)&rbrace;
  recordsPerPage=&lbrace;2&rbrace;
  instantSearch
  on:row-click=&lbrace;(&lbrace; detail &rbrace;) =&gt; console.log(detail)&rbrace;
/&gt;</pre></li>
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
					<td>columns</td>
					<td>Array.&lt;&lbrace;label: string, key: string, className: (string|undefined), textAlign: ('center'|'right'|'left'|undefined), orderable: (boolean|undefined), searchable: (boolean|undefined), render: (Renderer|undefined)&rbrace;&gt;</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>size</td>
					<td>undefined|'small'</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>className</td>
					<td>undefined|string</td>
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
					<td>appearance</td>
					<td>'divider'|'striped'</td>
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
					<td>placeholder</td>
					<td>string</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>noResultText</td>
					<td>string|undefined</td>
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
					<td>instantSearch</td>
					<td>boolean</td>
					<td>-</td>
					<td>@default true</td>
				</tr>
				<tr>
					<td>query</td>
					<td>string</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ordering</td>
					<td>Array.&lt;&lbrace;key: string, direction: ('desc'|'asc')&rbrace;&gt;</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>horizontalScroll</td>
					<td>boolean</td>
					<td>-</td>
					<td>@default true</td>
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
					<td>recordsPerPage</td>
					<td>number</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>paginationShortcuts</td>
					<td>number</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>pageIndex</td>
					<td>number</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>