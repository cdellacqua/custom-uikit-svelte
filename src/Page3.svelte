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

  let mounted = true;
&lt;/script&gt;

&lbrace;#if mounted&rbrace;
  &lt;Offcanvas
    bind:show=&lbrace;showSidebar&rbrace;
    on:show=&lbrace;() =&gt; handleOffcanvasEvent('show')&rbrace;
    on:hide=&lbrace;() =&gt; handleOffcanvasEvent('hide')&rbrace;
    on:shown=&lbrace;() =&gt; handleOffcanvasEvent('shown')&rbrace;
    on:hidden=&lbrace;() =&gt; handleOffcanvasEvent('hidden')&rbrace;&gt;
    &lt;ul class=&quot;uk-nav uk-nav-default sidebar-list&quot;&gt;
      &lt;li class=&quot;uk-nav-header&quot; /&gt;
      &lbrace;#each menu as item&rbrace;
        &lt;li class=&quot;uk-nav-header&quot;&gt;
          &lt;a
            href=&lbrace;item.href&rbrace;
            on:click=&lbrace;() =&gt; (showSidebar = false)&rbrace;&gt;&lbrace;item.label&rbrace;&lt;/a&gt;
        &lt;/li&gt;
      &lbrace;/each&rbrace;
      &lt;!-- svelte-ignore a11y-missing-attribute --&gt;
      &lt;li&gt;&lt;a role=&quot;button&quot; tabindex=&quot;0&quot; on:keyup=&lbrace;(e) =&gt; ['Enter'].includes(e.code) &amp;&amp; (mounted = false)&rbrace; on:click=&lbrace;() =&gt; (mounted = false)&rbrace;&gt;Unmount&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/Offcanvas&gt;
&lbrace;/if&rbrace;
&lt;Button on:click=&lbrace;() =&gt; (showSidebar = !showSidebar)&rbrace;&gt;
  Show offcanvas
&lt;/Button&gt;
&lt;Button on:click=&lbrace;() =&gt; (mounted = true)&rbrace; disabled=&lbrace;mounted&rbrace;&gt;
  Mount offcanvas
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
					<td>generateId()</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>show</td>
					<td>boolean</td>
					<td>false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>shown</td>
					<td>boolean</td>
					<td>false</td>
					<td>@readonly</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLDivElement</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>side</td>
					<td>'left'|'right'</td>
					<td>"left"</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
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
					<td>[]</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>component</td>
					<td>SvelteComponent|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLUListElement</td>
					<td>undefined</td>
					<td>@readonly</td>
				</tr>
				<tr>
					<td>animationDuration</td>
					<td>number</td>
					<td>200</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>moveToBoundaries</td>
					<td>boolean</td>
					<td>false</td>
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
					<td>""</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>style</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>center</td>
					<td>boolean</td>
					<td>true</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>pageIndex</td>
					<td>number</td>
					<td>0</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>numberOfPages</td>
					<td>number</td>
					<td>0</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>numbersPerSide</td>
					<td>number</td>
					<td>4</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">ScrollableNav</h2>
		<p></p>
		<Switcher titles={['Output', 'Code']}>
			<li>
				<hr class="uk-divider-icon">
				<ScrollableNavDemo />
				<hr class="uk-divider-icon">
			</li>
			<li><pre>&lt;script&gt;
&nbsp;&nbsp;import &lbrace; ScrollableNav &rbrace; from &quot;../main&quot;;
&nbsp;&nbsp;import &lbrace; scrollY &rbrace; from &quot;../stores/responsive&quot;;

&nbsp;&nbsp;let ref;
&lt;/script&gt;

&lt;div bind:this=&lbrace;ref&rbrace;&gt;
&nbsp;&nbsp;&lt;i&gt;Scroll past this element to enable the scrollable nav and then scroll up to see it&lt;/i&gt;
&lt;/div&gt;
&lbrace;#if ref &amp;&amp; $scrollY &gt; ref.offsetTop&rbrace;
&nbsp;&nbsp;&lt;ScrollableNav spacer=&lbrace;false&rbrace;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class=&quot;uk-navbar-left&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul class=&quot;uk-navbar-nav&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li class=&quot;uk-active&quot;&gt;&lt;a href=&quot;/#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
&nbsp;&nbsp;&lt;/ScrollableNav&gt;
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
					<td>navStyle</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>A string specifying custom style properties for the contained Nav component</td>
				</tr>
				<tr>
					<td>navClassName</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>A string containing any additional classes to apply to the contained Nav component</td>
				</tr>
				<tr>
					<td>ref (readonly)</td>
					<td>HTMLDivElement</td>
					<td>undefined</td>
					<td>The HTML reference of the component</td>
				</tr>
				<tr>
					<td>height (readonly)</td>
					<td>number</td>
					<td>0</td>
					<td>The current height of this component</td>
				</tr>
				<tr>
					<td>spacer</td>
					<td>boolean</td>
					<td>true</td>
					<td>Whether to add a spacer underneath this component or not</td>
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
					<td>"~.uk-switcher"</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>toggle</td>
					<td>string</td>
					<td>"> * > :first-child"</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>animation</td>
					<td>string|false</td>
					<td>false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>duration</td>
					<td>number</td>
					<td>200</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>swiping</td>
					<td>boolean</td>
					<td>true</td>
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
					<td>titles</td>
					<td>Array.&lt;string&gt;</td>
					<td>[]</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>htmlTitle</td>
					<td>boolean</td>
					<td>false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLUListElement</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>index</td>
					<td>number</td>
					<td>0</td>
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
					<td>"~.uk-switcher"</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>toggle</td>
					<td>string</td>
					<td>"> *"</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>animation</td>
					<td>string|false</td>
					<td>false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>duration</td>
					<td>number</td>
					<td>200</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>swiping</td>
					<td>boolean</td>
					<td>true</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>media</td>
					<td>number|string</td>
					<td>200</td>
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
					<td>titles</td>
					<td>Array.&lt;string&gt;</td>
					<td>[]</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>htmlTitle</td>
					<td>boolean</td>
					<td>false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLDivElement</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>index</td>
					<td>number</td>
					<td>0</td>
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
					<td>[]</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>size</td>
					<td>'small'|undefined</td>
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
					<td>style</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>appearance</td>
					<td>'divider'|'striped'|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>stickyHeader</td>
					<td>boolean</td>
					<td>false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLTableElement</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>caption</td>
					<td>string|undefined</td>
					<td>undefined</td>
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
  import NumberInput from &quot;../components/form/NumberInput.svelte&quot;;
  import &lbrace; Accordion, AccordionItem, Checkbox, Button &rbrace; from &quot;../main&quot;;
  let collapsible = true;
  let duration = 200;

  let index = false;
  let indices = [];

  function increaseDuration() &lbrace;
    duration = Math.min(2500, duration + 50);
  &rbrace;
  function decreaseDuration() &lbrace;
    duration = Math.max(duration - 50, 50);
  &rbrace;
&lt;/script&gt;

&lt;div class=&quot;uk-flex uk-flex-middle&quot;&gt;
  &lt;Checkbox
    bind:value=&lbrace;collapsible&rbrace;
    label=&quot;Collapsible&quot;
    className=&quot;uk-margin-right uk-margin-remove-bottom&quot;
    optional
  /&gt;
  &lt;Button size=&quot;small&quot; on:click=&lbrace;increaseDuration&rbrace; className=&quot;uk-margin-right&quot;&gt;
    + duration
  &lt;/Button&gt;
  &lt;Button size=&quot;small&quot; on:click=&lbrace;decreaseDuration&rbrace;&gt;- duration&lt;/Button&gt;
&lt;/div&gt;
&lt;p&gt;Simple Accordion&lt;/p&gt;
&lt;div class=&quot;uk-flex uk-flex-middle&quot;&gt;
  &lt;Checkbox
    optional
    className=&quot;uk-margin-right uk-margin-top&quot;
    label=&quot;Toggle open&quot;
    value=&lbrace;index !== false&rbrace;
    on:change=&lbrace;(&lbrace; target &rbrace;) =&gt; (target.checked ? (index = 0) : (index = false))&rbrace;
  /&gt;
  &lt;NumberInput
    optional
    label=&quot;Open index&quot;
    min=&lbrace;0&rbrace;
    max=&lbrace;2&rbrace;
    step=&lbrace;1&rbrace;
    value=&lbrace;index === false ? &quot;&quot; : index&rbrace;
    on:change=&lbrace;(&lbrace; target &rbrace;) =&gt;
      (index = target.value ? Number(target.value) : false)&rbrace;
  /&gt;
&lt;/div&gt;
&lt;Accordion
  &lbrace;collapsible&rbrace;
  &lbrace;duration&rbrace;
  bind:index
  on:show=&lbrace;() =&gt; console.log(index)&rbrace;
&gt;
  &lt;AccordionItem title=&quot;First&quot;&gt;
    &lt;p&gt;Use the options above to see how the accordion can be customized.&lt;/p&gt;
  &lt;/AccordionItem&gt;
  &lt;AccordionItem title=&quot;Second&quot;&gt;
    &lt;p&gt;Some content&lt;/p&gt;
  &lt;/AccordionItem&gt;
  &lt;AccordionItem
    title=&quot;Title &lt;span class='uk-text-primary'&gt;with &lt;i&gt;HTML&lt;/i&gt;&lt;/span&gt;&quot;
    isTitleHtml
  &gt;
    &lt;p&gt;Other content&lt;/p&gt;
  &lt;/AccordionItem&gt;
&lt;/Accordion&gt;

&lt;p&gt;Multi Accordion&lt;/p&gt;
&lt;div class=&quot;uk-flex uk-flex-middle&quot;&gt;
  &lbrace;#each [0, 1, 2] as itemIndex&rbrace;
    &lt;Checkbox
      optional
      label=&lbrace;&quot;open index &quot; + itemIndex&rbrace;
      value=&lbrace;indices.includes(itemIndex)&rbrace;
      on:change=&lbrace;(&lbrace; target &rbrace;) =&gt;
        target.checked
          ? (indices = [...indices, itemIndex])
          : (indices = indices.filter((i) =&gt; itemIndex !== i))&rbrace;
    /&gt;
  &lbrace;/each&rbrace;
&lt;/div&gt;
&lt;Accordion
  multi
  &lbrace;collapsible&rbrace;
  &lbrace;duration&rbrace;
  bind:index=&lbrace;indices&rbrace;
  on:show=&lbrace;() =&gt; console.log(indices)&rbrace;
&gt;
  &lt;AccordionItem title=&quot;First&quot;&gt;
    &lt;p&gt;Use the options above to see how the accordion can be customized.&lt;/p&gt;
  &lt;/AccordionItem&gt;
  &lt;AccordionItem title=&quot;Second&quot;&gt;
    &lt;p&gt;Some content&lt;/p&gt;
  &lt;/AccordionItem&gt;
  &lt;AccordionItem
    title=&quot;Title &lt;span class='uk-text-primary'&gt;with &lt;i&gt;HTML&lt;/i&gt;&lt;/span&gt;&quot;
    isTitleHtml
  &gt;
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
					<td>animation</td>
					<td>boolean</td>
					<td>true</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>collapsible</td>
					<td>boolean</td>
					<td>true</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>duration</td>
					<td>number</td>
					<td>200</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>multi</td>
					<td>boolean</td>
					<td>false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>index</td>
					<td>number|false|Array.&lt;number&gt;</td>
					<td>multi ? [] : false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>transition</td>
					<td>string</td>
					<td>"ease"</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLUListElement</td>
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
					<td>style</td>
					<td>string|undefined</td>
					<td>undefined</td>
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
&nbsp;&nbsp;import &lbrace; tick &rbrace; from &quot;svelte&quot;;

&nbsp;&nbsp;import &lbrace; AsyncAutocomplete, Form, Checkbox &rbrace; from &quot;../main&quot;;

&nbsp;&nbsp;const options = [
&nbsp;&nbsp;&nbsp;&nbsp;&lbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: &quot;Ananas&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: 1,
&nbsp;&nbsp;&nbsp;&nbsp;&rbrace;,
&nbsp;&nbsp;&nbsp;&nbsp;&lbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: &quot;Banana&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: &lbrace; kg: &quot;3.14&quot; &rbrace;,
&nbsp;&nbsp;&nbsp;&nbsp;&rbrace;,
&nbsp;&nbsp;&nbsp;&nbsp;&lbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: &quot;Bananana&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: &lbrace; kg: &quot;6.28&quot; &rbrace;,
&nbsp;&nbsp;&nbsp;&nbsp;&rbrace;,
&nbsp;&nbsp;&nbsp;&nbsp;&lbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: &quot;Strawberry&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: &quot;strawberry&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&rbrace;,
&nbsp;&nbsp;];

&nbsp;&nbsp;async function dataProvider(query) &lbrace;
&nbsp;&nbsp;&nbsp;&nbsp;await new Promise((res) =&gt; setTimeout(res, 200));
&nbsp;&nbsp;&nbsp;&nbsp;return options.filter((o) =&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o.label.toLowerCase().includes(query.toLowerCase())
&nbsp;&nbsp;&nbsp;&nbsp;);
&nbsp;&nbsp;&rbrace;

&nbsp;&nbsp;$: console.log(value);

&nbsp;&nbsp;let multi = false;
&nbsp;&nbsp;let value;
&nbsp;&nbsp;let selectedOptions = [];
&nbsp;&nbsp;function handleMultiChange() &lbrace;
&nbsp;&nbsp;&nbsp;&nbsp;value = multi ? [&quot;strawberry&quot;] : &quot;strawberry&quot;;
&nbsp;&nbsp;&nbsp;&nbsp;selectedOptions = [
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: &quot;Strawberry&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: &quot;strawberry&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&rbrace;,
&nbsp;&nbsp;&nbsp;&nbsp;];
&nbsp;&nbsp;&rbrace;
&nbsp;&nbsp;$: multi, tick().then(() =&gt; handleMultiChange());
&lt;/script&gt;

&lt;div on:change=&lbrace;(e) =&gt; console.log(e)&rbrace;&gt;
&nbsp;&nbsp;&lt;Form submitAsync=&lbrace;() =&gt; alert(value)&rbrace;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;Checkbox bind:value=&lbrace;multi&rbrace; label=&quot;Enable multiple value selection&quot; /&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;AsyncAutocomplete
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lbrace;multi&rbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lbrace;selectedOptions&rbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bind:value
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;query=&lbrace;&quot;na&quot;&rbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label=&lbrace;&quot;Search a fruit&quot;&rbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;placeholder=&lbrace;&quot;Banana&quot;&rbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;textIfNoResult=&lbrace;&quot;No match&quot;&rbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lbrace;dataProvider&rbrace;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on:change=&lbrace;(e) =&gt; console.log(e)&rbrace;
&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
&nbsp;&nbsp;&lt;/Form&gt;
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
					<td>generateId()</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>multi</td>
					<td>boolean</td>
					<td>false</td>
					<td>Whether or not the autocomplete supports multiple values selected at the same time</td>
				</tr>
				<tr>
					<td>value</td>
					<td>any|null|Array.&lt;any&gt;</td>
					<td>!multi ? null : []</td>
					<td>If not in multi-mode (default): the current selected value or null if no value is selected
Else: the list of currently selected values</td>
				</tr>
				<tr>
					<td>label</td>
					<td>string</td>
					<td>""</td>
					<td>Label of this component</td>
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
					<td>textIfNoResult</td>
					<td>string</td>
					<td>""</td>
					<td>Text to show when the applied filter doesn't return any result</td>
				</tr>
				<tr>
					<td>textIfInvalid</td>
					<td>string</td>
					<td>""</td>
					<td>Text to show when the field is required but no value has been chosen</td>
				</tr>
				<tr>
					<td>disabled</td>
					<td>boolean</td>
					<td>false</td>
					<td>Control whether the component is disabled or not</td>
				</tr>
				<tr>
					<td>tooltip</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>UIkit tooltip</td>
				</tr>
				<tr>
					<td>placeholder</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>Input placeholder</td>
				</tr>
				<tr>
					<td>optional</td>
					<td>boolean</td>
					<td>false</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>ref</td>
					<td>HTMLDivElement</td>
					<td>undefined</td>
					<td>Reference to the div that wraps this component</td>
				</tr>
				<tr>
					<td>autocapitalize</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>Autocapitalize setting of the input tag</td>
				</tr>
				<tr>
					<td>autocomplete</td>
					<td>string|undefined</td>
					<td>"off"</td>
					<td>Autocomplete setting of the input tag</td>
				</tr>
				<tr>
					<td>autocorrect</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>Autocorrect setting of the input tag</td>
				</tr>
				<tr>
					<td>spellcheck</td>
					<td>string|undefined</td>
					<td>undefined</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>animationDuration</td>
					<td>number</td>
					<td>100</td>
					<td>In/Out fly animation duration (in milliseconds)</td>
				</tr>
				<tr>
					<td>state</td>
					<td>'initial'|'valid'|'invalid'</td>
					<td>"initial"</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>query</td>
					<td>string</td>
					<td>""</td>
					<td>The current search string</td>
				</tr>
				<tr>
					<td>selectedOptions</td>
					<td>Array.&lt;&lbrace;label: string, value: any&rbrace;&gt;</td>
					<td>[]</td>
					<td>Currently selected options</td>
				</tr>
				<tr>
					<td>dataProvider</td>
					<td>AsyncAutocompleteDataProvider</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>dataProviderErrorHandler</td>
					<td>CallableFunction</td>
					<td>(err) => console.error(err)</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>loading</td>
					<td>boolean</td>
					<td>false</td>
					<td>@readonly</td>
				</tr>
				<tr>
					<td>debounceMs</td>
					<td>number</td>
					<td>200</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>maxSuggestions</td>
					<td>number</td>
					<td>5</td>
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
			</tbody>
		</table>
	</div>
</div>