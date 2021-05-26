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
					<td>mode</td>
					<td>'click'|'hover'</td>
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
					<td>'default'|'primary'|'secondary'|'danger'|'text'|'link'|null</td>
					<td>"default"</td>
					<td>This property is used to style the button with one of the base uikit classes for button appearance. Setting this to null will hide the button</td>
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
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<FormDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
  import &lbrace; sleep &rbrace; from &quot;../helpers/time&quot;;

  import &lbrace; Button, Form, TextInput &rbrace; from &quot;../main&quot;;
  async function handleSubmit() &lbrace;
    await sleep(1000);
  &rbrace;

  let status = [];

  let formState;
  $: status = [...status, formState];
&lt;/script&gt;

&lt;Form
  bind:state=&lbrace;formState&rbrace;
  submitAsync=&lbrace;handleSubmit&rbrace;&gt;
  &lt;TextInput placeholder=&quot;I'm required&quot; /&gt;
  &lt;div&gt;
    &lt;Button type=&quot;submit&quot;&gt;Submit&lt;/Button&gt;
  &lt;/div&gt;
&lt;/Form&gt;

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
					<td>submitAsync</td>
					<td>FormSubmitCallback</td>
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
					<td>Indicates the validity of this form. Its value is updated using formRef.checkValdity(), that gets called
each time an element inside this form triggers a bubbling 'change' event</td>
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
  import &lbrace; sleep &rbrace; from &quot;../helpers/time&quot;;

import &lbrace; Button, FormModal, TextInput, Modal &rbrace; from &quot;../main&quot;;
  let showModal = false;
  let showOther = false;
  let shownModal = false;
  let fullScreen = false;
  async function handleSubmit() &lbrace;
    await sleep(1000);
    showOther = true;
  &rbrace;
&lt;/script&gt;

&lt;Button on:click=&lbrace;() =&gt; (showModal = true)&rbrace; disabled=&lbrace;showModal&rbrace;&gt;
  Show modal
&lt;/Button&gt;
&lt;Button on:click=&lbrace;() =&gt; fullScreen = !fullScreen&rbrace; disabled=&lbrace;showModal&rbrace;&gt;Toggle fullScreen (&lbrace;fullScreen ? 'on' : 'off'&rbrace;)&lt;/Button&gt;
&lt;p&gt;Status: &lbrace;!showModal ? 'Closed' : 'Open'&rbrace;&lt;/p&gt;
&lt;p&gt;Status (including animation time): &lbrace;!shownModal ? 'Closed' : 'Open'&rbrace;&lt;/p&gt;
&lt;FormModal bind:show=&lbrace;showModal&rbrace; bind:shown=&lbrace;shownModal&rbrace; formSubmitAsync=&lbrace;handleSubmit&rbrace; &lbrace;fullScreen&rbrace; title=&quot;Modal title&quot;&gt;
  &lt;TextInput placeholder=&quot;I'm required&quot;&gt;&lt;/TextInput&gt;
  &lt;div slot=&quot;footer&quot;&gt;
    &lt;Button type=&quot;submit&quot;&gt;Submit&lt;/Button&gt;
  &lt;/div&gt;
&lt;/FormModal&gt;
&lt;FormModal bind:show=&lbrace;showOther&rbrace; formSubmitAsync=&lbrace;() =&gt; sleep(5000)&rbrace;&gt;
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
					<td>FormSubmitCallback</td>
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
				<tr>
					<td>background</td>
					<td>'default'|'muted'|'primary'|'secondary'</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>backgroundClassName</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>backgroundStyle</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>slotPosition</td>
					<td>'bottom'|'right'|'top'|'left'</td>
					<td>-</td>
					<td>@default 'bottom'</td>
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
				<tr>
					<td>background</td>
					<td>'default'|'muted'|'primary'|'secondary'</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>backgroundClassName</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>backgroundStyle</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>slotPosition</td>
					<td>'bottom'|'right'|'top'|'left'</td>
					<td>-</td>
					<td>@default 'bottom'</td>
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
				<tr>
					<td>slotPosition</td>
					<td>'bottom'|'right'|'top'|'left'</td>
					<td>-</td>
					<td>@default 'bottom'</td>
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
let fullScreen = false;
function toggleMountState() &lbrace;
  mounted = !mounted;
&rbrace;
&lt;/script&gt;

&lt;Button on:click=&lbrace;() =&gt; showModal = true&rbrace; disabled=&lbrace;showModal&rbrace;&gt;Show modal&lt;/Button&gt;
&lt;Button on:click=&lbrace;() =&gt; fullScreen = !fullScreen&rbrace; disabled=&lbrace;showModal&rbrace;&gt;Toggle fullScreen (&lbrace;fullScreen ? 'on' : 'off'&rbrace;)&lt;/Button&gt;
&lt;Button on:click=&lbrace;() =&gt; mounted = true&rbrace; disabled=&lbrace;mounted&rbrace;&gt;Mount modal&lt;/Button&gt;
&lt;p&gt;
  Status: &lbrace;!showModal ? 'Closed' : 'Open'&rbrace;
&lt;/p&gt;
&lt;p&gt;
  Status (including animation time): &lbrace;!shownModal ? 'Closed' : 'Open'&rbrace;
&lt;/p&gt;
&lbrace;#if mounted&rbrace;
  &lt;Modal bind:show=&lbrace;showModal&rbrace; bind:shown=&lbrace;shownModal&rbrace; &lbrace;fullScreen&rbrace; title=&quot;Example&quot;&gt;
    Example!
    &lt;div&gt;
      A modal can safely be unmounted from the document
    &lt;/div&gt;
    &lt;Button on:click=&lbrace;() =&gt; toggleMountState()&rbrace;&gt;Unmount modal&lt;/Button&gt;
    &lt;div slot=&quot;footer&quot;&gt;
      footer
    &lt;/div&gt;
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
		<h2 class="uk-heading-divider">Nav</h2>
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
					<td>ref (readonly)</td>
					<td>HTMLDivElement</td>
					<td>-</td>
					<td>The HTML reference of the component</td>
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
					<td>undefined</td>
					<td>A string containing any additional classes to apply to the component</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>