<script>
	import { Switcher } from "./main";
	import AccordionDemo from './demo/AccordionDemo.svelte';
	import AlertDemo from './demo/AlertDemo.svelte';
	import AsyncAutocompleteDemo from './demo/AsyncAutocompleteDemo.svelte';
	import AsyncDataTableDemo from './demo/AsyncDataTableDemo.svelte';
	import AutocompleteDemo from './demo/AutocompleteDemo.svelte';
	import DataTableDemo from './demo/DataTableDemo.svelte';
	import FixedPointInputDemo from './demo/FixedPointInputDemo.svelte';
	import FormModalDemo from './demo/FormModalDemo.svelte';
	import ModalDemo from './demo/ModalDemo.svelte';
	import OffcanvasDemo from './demo/OffcanvasDemo.svelte';
	import OrderableListDemo from './demo/OrderableListDemo.svelte';
	import PaginationDemo from './demo/PaginationDemo.svelte';
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
		<h2 class="uk-heading-divider">Divider</h2>
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
					<td>withIcon</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>small</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>vertical</td>
					<td>boolean</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLHRElement</td>
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
			</tbody>
		</table>
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
	</div>
</div>