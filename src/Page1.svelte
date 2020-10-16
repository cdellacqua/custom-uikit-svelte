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
		<h2 class="uk-heading-divider">Alert</h2>
		<p>This alert can be used to display success, warning and error messages</p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<AlertDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
import UIKit from &quot;uikit&quot;;

import &lbrace; Alert, Button, Checkbox, Select &rbrace; from &quot;../main&quot;;

let variant = undefined;
let closable = false;
let ref;
let duration = 150;
function increaseDuration() &lbrace;
  duration = Math.min(2500, duration + 50);
&rbrace;
function decreaseDuration() &lbrace;
  duration = Math.max(duration - 50, 50);
&rbrace;

function showAlert() &lbrace;
  document.querySelector('#demo-alert-wrapper').appendChild(ref);
  ref.hidden = false;
  ref.style.opacity = 1;
  ref.setAttribute('aria-hidden', false);
  UIKit.alert(ref);
&rbrace;
&lt;/script&gt;

&lt;div class=&quot;uk-flex uk-flex-middle&quot;&gt;
  &lt;Select 
    options=&lbrace;[
      &lbrace;label: &quot;None&quot;, value: undefined&rbrace;, 
      &lbrace;label: &quot;Primary&quot;, value: &quot;primary&quot;&rbrace;, 
      &lbrace;label: &quot;Success&quot;, value: &quot;success&quot;&rbrace;, 
      &lbrace;label: &quot;Danger&quot;, value: &quot;danger&quot;&rbrace;, 
      &lbrace;label: &quot;Warning&quot;, value: &quot;warning&quot;&rbrace;]
    &rbrace; 
    bind:value=&lbrace;variant&rbrace;
    label=&quot;Variant&quot;
    className=&quot;uk-margin-right&quot;
  /&gt;
  &lt;Checkbox
    bind:value=&lbrace;closable&rbrace;
    label=&quot;Closable&quot;
    optional
    className=&quot;uk-margin-right uk-margin-remove-bottom&quot;
  /&gt;
  &lt;Button type=&quot;button&quot; size=&quot;small&quot; on:click=&lbrace;increaseDuration&rbrace; className=&quot;uk-margin-right&quot;&gt;
    + duration
  &lt;/Button&gt;
  &lt;Button type=&quot;button&quot; size=&quot;small&quot; on:click=&lbrace;decreaseDuration&rbrace; className=&quot;uk-margin-right&quot;&gt;- duration&lt;/Button&gt;
  &lt;Button type=&quot;button&quot; on:click=&lbrace;showAlert&rbrace; size=&quot;small&quot; variant=&quot;secondary&quot;&gt;Show again&lt;/Button&gt;
&lt;/div&gt;
&lt;div id=&quot;demo-alert-wrapper&quot;&gt;
  &lt;Alert bind:ref &lbrace;variant&rbrace; &lbrace;closable&rbrace; animationDuration=&lbrace;duration&rbrace;&gt;
    This is an alert
  &lt;/Alert&gt;
&lt;/div&gt;
</pre></li>
		</Switcher>
		<h3>Slots</h3>
		<table class="uk-table">
			<thead>
				<tr>
					<th>name</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>-</td>
					<td>The content of the alert</td>
				</tr>
			</tbody>
		</table>
		<h3>Custom Events</h3>
		<table class="uk-table">
			<thead>
				<tr>
					<th>name</th>
					<th>type</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>hide</td>
					<td>Array.&lt;UIkitComponent&gt;</td>
					<td>Fires after the alert is hidden</td>
				</tr>
				<tr>
					<td>beforehide</td>
					<td>Array.&lt;UIkitComponent&gt;</td>
					<td>Fires before hiding the alert. If preventDefault is called on this event, the alert will not be hidden</td>
				</tr>
			</tbody>
		</table>
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
					<td>closable</td>
					<td>boolean</td>
					<td>true</td>
					<td>Whether the alert is dismissable</td>
				</tr>
				<tr>
					<td>variant</td>
					<td>'primary'|'success'|'danger'|'warning'|undefined</td>
					<td>undefined</td>
					<td>Specifies the look of the component</td>
				</tr>
				<tr>
					<td>animation</td>
					<td>boolean|string</td>
					<td>true</td>
					<td>Fade out or use the uikit Animation component</td>
				</tr>
				<tr>
					<td>animationDuration</td>
					<td>number</td>
					<td>150</td>
					<td>Animation duration in milliseconds</td>
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
				<tr>
					<td>ref (readonly)</td>
					<td>HTMLDivElement</td>
					<td>-</td>
					<td>The HTML reference of the component</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Article</h2>
		<p>Useful to display content such as blog entries or articles</p>
		<h3>Slots</h3>
		<table class="uk-table">
			<thead>
				<tr>
					<th>name</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>-</td>
					<td>The content of the article</td>
				</tr>
			</tbody>
		</table>
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
					<td>undefined</td>
					<td>A string containing any additional classes to apply to the component</td>
				</tr>
				<tr>
					<td>style</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>A string specifying custom style properties for the component</td>
				</tr>
				<tr>
					<td>titleAsHtml</td>
					<td>string|undefined</td>
					<td>""</td>
					<td>A string that can contain HTML content which represents the title of the article. If omitted, the space dedicated to the title won't be displayed</td>
				</tr>
				<tr>
					<td>articleMetaAsHtml</td>
					<td>string|undefined</td>
					<td>""</td>
					<td>A string that can contain HTML content with meta information about the article. If omitted, the space dedicated to the meta content won't be displayed</td>
				</tr>
				<tr>
					<td>ref (readonly)</td>
					<td>HTMLElement</td>
					<td>-</td>
					<td>The HTML reference of the component</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">AsyncDataTable</h2>
		<p></p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<AsyncDataTableDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
import Select from '../components/form/Select.svelte';


  import &lbrace; Button, AsyncDataTable &rbrace; from '../main';

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
    &rbrace;];
    let recordsPerPage = 5;
&lt;/script&gt;
&lt;Select
  options=&lbrace;new Array(5).fill(0).map((_, i) =&gt; (&lbrace;
    label: (i + 1) * 5,
    value: (i + 1) * 5
  &rbrace;))&rbrace;
  bind:value=&lbrace;recordsPerPage&rbrace;
/&gt;
&lt;AsyncDataTable
  &lbrace;recordsPerPage&rbrace;
  &lbrace;dataProvider&rbrace;
  &lbrace;columns&rbrace;
  numbersPerSide=&lbrace;4&rbrace;
  ordering=&lbrace;[&lbrace;key: 'column1', direction: 'asc'&rbrace;]&rbrace;
  on:query=&lbrace;(&lbrace; detail &rbrace;) =&gt; console.log(detail)&rbrace;
  on:sort=&lbrace;(&lbrace; detail &rbrace;) =&gt; console.log(detail)&rbrace;
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
					<td>numbersPerSide</td>
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
				<tr>
					<td>total</td>
					<td>number</td>
					<td>-</td>
					<td>@readonly</td>
				</tr>
				<tr>
					<td>filtered</td>
					<td>number</td>
					<td>-</td>
					<td>@readonly</td>
				</tr>
				<tr>
					<td>loading</td>
					<td>boolean</td>
					<td>-</td>
					<td>@readonly</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Badge</h2>
		<p>This component can be used as a notification badge or as a general purpose chip</p>
		<h3>Slots</h3>
		<table class="uk-table">
			<thead>
				<tr>
					<th>name</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>-</td>
					<td>The content of the badge</td>
				</tr>
			</tbody>
		</table>
		<h3>Forwarded Events</h3>
		<table class="uk-table">
			<thead>
				<tr>
					<th>name</th>
					<th>source</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>click</td>
					<td>HTMLSpanElement</td>
				</tr>
			</tbody>
		</table>
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
					<td>undefined</td>
					<td>A string containing any additional classes to apply to the component</td>
				</tr>
				<tr>
					<td>style</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>A string specifying custom style properties for the component</td>
				</tr>
				<tr>
					<td>ref (readonly)</td>
					<td>HTMLSpanElement</td>
					<td>-</td>
					<td>The HTML reference of the component</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Breadcrumb</h2>
		<p>A breadcrumb can be added to the page to help the user find where they are in the website and easily go back and forth between pages</p>
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
					<td>path</td>
					<td>Array.&lt;&lbrace;href: string, label: string&rbrace;&gt;</td>
					<td>[]</td>
					<td>An array containing the various steps composing the path of the current page. Each step should have an href property, 
which is the URL to which the user will be redirected, and a label property, which is displayed. The last element of the array represents the
current page and its href property will be ignored</td>
				</tr>
				<tr>
					<td>className</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>A string containing any additional classes to apply to the component</td>
				</tr>
				<tr>
					<td>style</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>A string specifying custom style properties for the component</td>
				</tr>
				<tr>
					<td>ref (readonly)</td>
					<td>HTMLUListElement</td>
					<td>undefined</td>
					<td>The HTML reference of the component</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Button</h2>
		<p>This component represents a general purpose button, which can be customized according to its usage</p>
		<h3>Slots</h3>
		<table class="uk-table">
			<thead>
				<tr>
					<th>name</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>-</td>
					<td>The content of the button</td>
				</tr>
			</tbody>
		</table>
		<h3>Forwarded Events</h3>
		<table class="uk-table">
			<thead>
				<tr>
					<th>name</th>
					<th>source</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>click</td>
					<td>HTMLButtonElement</td>
				</tr>
			</tbody>
		</table>
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
					<td>className</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>A string containing any additional classes to apply to the component</td>
				</tr>
				<tr>
					<td>style</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>A string specifying custom style properties for the component</td>
				</tr>
				<tr>
					<td>type</td>
					<td>'button'|'submit'</td>
					<td>"button"</td>
					<td>The type property of the native HTML button</td>
				</tr>
				<tr>
					<td>disabled</td>
					<td>boolean</td>
					<td>false</td>
					<td>The disabled property of the native HTML button</td>
				</tr>
				<tr>
					<td>loading</td>
					<td>boolean</td>
					<td>false</td>
					<td>Whether the button has been used to retrieve some content that is still being loaded. If true, an icon with a spinner will appear next to the text and the button will also be temporarily disabled</td>
				</tr>
				<tr>
					<td>variant</td>
					<td>'default'|'primary'|'secondary'|'danger'|'text'|'link'</td>
					<td>"default"</td>
					<td>This property is used to style the button with one of the base uikit classes for button appearance</td>
				</tr>
				<tr>
					<td>icon</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>If present, the uikit icon with the given name will be added next to the text of the button</td>
				</tr>
				<tr>
					<td>iconPosition</td>
					<td>'right'|'left'</td>
					<td>"right"</td>
					<td>If the icon is set, this property let you decide its position, left or right</td>
				</tr>
				<tr>
					<td>size</td>
					<td>undefined|'small'|'large'</td>
					<td>undefined</td>
					<td>Specifies the size of the button. If undefined, the button will be of regular size</td>
				</tr>
				<tr>
					<td>tooltip</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>Specifies the uk-tooltip attribute. If undefined, no tooltip will be added to the button</td>
				</tr>
				<tr>
					<td>ref (readonly)</td>
					<td>HTMLButtonElement</td>
					<td>-</td>
					<td>The HTML reference of the component</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Card</h2>
		<p>The card component allows you to create nice box layouts</p>
		<h3>Slots</h3>
		<table class="uk-table">
			<thead>
				<tr>
					<th>name</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>header</td>
					<td>The content to be put inside the header ('uk-card-header') of the card. Leave empty if no header is wanted</td>
				</tr>
				<tr>
					<td>media-top</td>
					<td>The content to be put inside the 'uk-card-media-top' class. This is useful if you want to add an image to your card which is supposed to take up the top half of the card. Leave empty if you don't want the card to have this layout</td>
				</tr>
				<tr>
					<td>horizontal-media</td>
					<td>For more complex layouts (e.g. an horizontal card with an image to the right/left) you can use this slot, which is placed before the card body. Leave empty if this is not needed</td>
				</tr>
				<tr>
					<td>-</td>
					<td>The content of the card</td>
				</tr>
				<tr>
					<td>media-bottom</td>
					<td>The content to be put inside the 'uk-card-media-bottom' class. This is useful if you want to add an image to your card which is supposed to take up the bottom half of the card. Leave empty if you don't want the card to have this layout</td>
				</tr>
				<tr>
					<td>footer</td>
					<td>Fill this slot if you want your card to have a footer. The content will be put inside the 'uk-card-footer' section</td>
				</tr>
			</tbody>
		</table>
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
					<td>variant</td>
					<td>'default'|'primary'|'secondary'|'hover'</td>
					<td>"default"</td>
					<td>Used to style the card. If set to hover, the card will appear flat unless it's being hovered</td>
				</tr>
				<tr>
					<td>className</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>A string containing any additional classes to apply to the component</td>
				</tr>
				<tr>
					<td>hover</td>
					<td>boolean</td>
					<td>false</td>
					<td>Add a hover animation to the card</td>
				</tr>
				<tr>
					<td>size</td>
					<td>'small'|'large'|undefined</td>
					<td>undefined</td>
					<td>Defines the padding of the card. In undefined, default values will be applied</td>
				</tr>
				<tr>
					<td>title</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>The title of the card. This will be represented inside the body of the card. If you have defined a custom header slot, you should manually specify the title inside it and not use this property</td>
				</tr>
				<tr>
					<td>badge</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>The text content of the card badge, which is displayed in the top right angle of the card. If undefined no badge will be added</td>
				</tr>
				<tr>
					<td>style</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>A string specifying custom style properties for the component</td>
				</tr>
				<tr>
					<td>ref (readonly)</td>
					<td>HTMLDivElement</td>
					<td>-</td>
					<td>The HTML reference of the component</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Comment</h2>
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
					<td>avatarSource</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>The path to the avatar that will be added to the comment. For optimal results, use a square image. Only specify this property if you are not using a custom header, otherwise it will be ignored</td>
				</tr>
				<tr>
					<td>avatarSize</td>
					<td>number</td>
					<td>80</td>
					<td>Change the size of the avatar.</td>
				</tr>
				<tr>
					<td>avatarAlt</td>
					<td>string</td>
					<td>""</td>
					<td>The alt property of the avatar image</td>
				</tr>
				<tr>
					<td>commentTitleAsHtml</td>
					<td>string</td>
					<td>""</td>
					<td>The title of the comment that will be added to the header. It can contain HTML tags. Do not use this property if you are specifying a custom header</td>
				</tr>
				<tr>
					<td>primary</td>
					<td>boolean</td>
					<td>false</td>
					<td>True to add a different style to this comment (e.g. if it's made by the author)</td>
				</tr>
				<tr>
					<td>ref (readonly)</td>
					<td>HTMLElement</td>
					<td>-</td>
					<td>The HTML reference of the component</td>
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
		<h2 class="uk-heading-divider">DataTable</h2>
		<p></p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<DataTableDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
  import &lbrace; Button, DataTable &rbrace; from '../main';

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
  &rbrace;,]

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

&lt;DataTable
  &lbrace;columns&rbrace;
  rows=&lbrace;data&rbrace;
  ordering=&lbrace;[&lbrace;key: 'column1', direction: 'asc'&rbrace;]&rbrace;
  on:query=&lbrace;(&lbrace; detail &rbrace;) =&gt; console.log(detail)&rbrace;
  on:sort=&lbrace;(&lbrace; detail &rbrace;) =&gt; console.log(detail)&rbrace;
  instantSearch=&lbrace;false&rbrace;
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
					<td>Array.&lt;&lbrace;label: string, key: string, className: (string|undefined), textAlign: ('center'|'right'|'left'|undefined), orderable: (boolean|Comparator|undefined), searchable: (boolean|undefined), render: (Renderer|undefined)&rbrace;&gt;</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>rows</td>
					<td>Array.&lt;Record.&lt;string, any&gt;&gt;</td>
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
			</tbody>
		</table>
		<h2 class="uk-heading-divider">DescriptionList</h2>
		<p>Create an already styled description list, perfect for describing key-value properties</p>
		<h3>Slots</h3>
		<table class="uk-table">
			<thead>
				<tr>
					<th>name</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>-</td>
					<td>If you need to add components in the titles or descriptions, use the default slot to specify the content of the description terms and description details</td>
				</tr>
			</tbody>
		</table>
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
					<td>showDivider</td>
					<td>boolean</td>
					<td>-</td>
					<td>If true a divider will be shown between two items</td>
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
					<td>ref (readonly)</td>
					<td>HTMLDListElement</td>
					<td>-</td>
					<td>The HTML reference of the component</td>
				</tr>
				<tr>
					<td>termsAreHtml</td>
					<td>boolean</td>
					<td>-</td>
					<td>Whether the terms of your list should be treated as HTML</td>
				</tr>
				<tr>
					<td>detailsAreHtml</td>
					<td>boolean</td>
					<td>-</td>
					<td>Whether the details of your list should be treated as HTML</td>
				</tr>
				<tr>
					<td>list</td>
					<td>Array.&lt;&lbrace;term: string, details: string&rbrace;&gt;</td>
					<td>-</td>
					<td>An array containing the term-details pairs of the description list. Can be text only or html</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>