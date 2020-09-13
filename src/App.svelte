<script>
	import { Alert, Article, Badge, Breadcrumb, Button, Card, Comment, DataTable, DescriptionList, Divider, Dropdown, Form, Loader, Modal, Offcanvas, Table, Accordion, AccordionItem, Autocomplete, Checkbox, DatePicker, EmailInput, Field, FixedPointInput, NumberInput, PasswordInput, PercentageInput, Radio, SearchInput, Select, TextInput, Textarea, TimePicker } from "./main";
	import AccordionDemo from './demo/AccordionDemo.svelte';
</script>
<div uk-grid class="uk-flex-center uk-padding-small">
	<div class="uk-width-3-5@l uk-width-2-3@m uk-width-5-6@s uk-width-1-1">
		<h2 class="uk-heading-divider">Alert</h2>
		<p>This alert can be used to display success, warning and error messages</p>
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
					<td>-</td>
					<td>Whether the alert is dismissable</td>
				</tr>
				<tr>
					<td>variant</td>
					<td>'primary'|'success'|'danger'|'warning'|undefined</td>
					<td>-</td>
					<td>Specifies the look of the component</td>
				</tr>
				<tr>
					<td>animation</td>
					<td>boolean|string</td>
					<td>-</td>
					<td>Fade out or use the uikit Animation component</td>
				</tr>
				<tr>
					<td>animationDuration</td>
					<td>number</td>
					<td>-</td>
					<td>Animation duration in milliseconds</td>
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
					<td>titleAsHtml</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>A string that can contain HTML content which represents the title of the article. If omitted, the space dedicated to the title won't be displayed</td>
				</tr>
				<tr>
					<td>articleMetaAsHtml</td>
					<td>string|undefined</td>
					<td>-</td>
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
					<td>-</td>
					<td>An array containing the various steps composing the path of the current page. Each step should have an href property, 
which is the URL to which the user will be redirected, and a label property, which is displayed. The last element of the array represents the
current page and its href property will be ignored</td>
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
					<td>HTMLUListElement</td>
					<td>-</td>
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
					<td>type</td>
					<td>'button'|'submit'</td>
					<td>-</td>
					<td>The type property of the native HTML button</td>
				</tr>
				<tr>
					<td>disabled</td>
					<td>boolean</td>
					<td>-</td>
					<td>The disabled property of the native HTML button</td>
				</tr>
				<tr>
					<td>loading</td>
					<td>boolean</td>
					<td>-</td>
					<td>Whether the button has been used to retrieve some content that is still being loaded. If true, an icon with a spinner will appear next to the text and the button will also be temporarily disabled</td>
				</tr>
				<tr>
					<td>variant</td>
					<td>'default'|'primary'|'secondary'|'danger'|'text'|'link'</td>
					<td>-</td>
					<td>This property is used to style the button with one of the base uikit classes for button appearance</td>
				</tr>
				<tr>
					<td>icon</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>If present, the uikit icon with the given name will be added next to the text of the button</td>
				</tr>
				<tr>
					<td>size</td>
					<td>undefined|'small'|'large'</td>
					<td>-</td>
					<td>Specifies the size of the button. If undefined, the button will be of regular size</td>
				</tr>
				<tr>
					<td>tooltip</td>
					<td>string|undefined</td>
					<td>-</td>
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
					<td>-</td>
					<td>Used to style the card. If set to hover, the card will appear flat unless it's being hovered</td>
				</tr>
				<tr>
					<td>className</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>A string containing any additional classes to apply to the component</td>
				</tr>
				<tr>
					<td>hover</td>
					<td>boolean</td>
					<td>-</td>
					<td>Add a hover animation to the card</td>
				</tr>
				<tr>
					<td>size</td>
					<td>'small'|'large'|undefined</td>
					<td>-</td>
					<td>Defines the padding of the card. In undefined, default values will be applied</td>
				</tr>
				<tr>
					<td>title</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>The title of the card. This will be represented inside the body of the card. If you have defined a custom header slot, you should manually specify the title inside it and not use this property</td>
				</tr>
				<tr>
					<td>badge</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>The text content of the card badge, which is displayed in the top right angle of the card. If undefined no badge will be added</td>
				</tr>
				<tr>
					<td>style</td>
					<td>string|undefined</td>
					<td>-</td>
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
					<td>-</td>
					<td>The path to the avatar that will be added to the comment. For optimal results, use a square image. Only specify this property if you are not using a custom header, otherwise it will be ignored</td>
				</tr>
				<tr>
					<td>avatarSize</td>
					<td>number</td>
					<td>-</td>
					<td>Change the size of the avatar.</td>
				</tr>
				<tr>
					<td>avatarAlt</td>
					<td>string</td>
					<td>-</td>
					<td>The alt property of the avatar image</td>
				</tr>
				<tr>
					<td>commentTitleAsHtml</td>
					<td>string</td>
					<td>-</td>
					<td>The title of the comment that will be added to the header. It can contain HTML tags. Do not use this property if you are specifying a custom header</td>
				</tr>
				<tr>
					<td>primary</td>
					<td>boolean</td>
					<td>-</td>
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
					<td>-</td>
					<td>A string specifying custom style properties for the component</td>
				</tr>
				<tr>
					<td>className</td>
					<td>string|undefined</td>
					<td>-</td>
					<td>A string containing any additional classes to apply to the component</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">DataTable</h2>
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
		<h2 class="uk-heading-divider">Divider</h2>
		<p></p>
		<h2 class="uk-heading-divider">Dropdown</h2>
		<p></p>
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
					<td>state</td>
					<td>'initial'|'invalid'|'valid'|'loading'|'error'|'success'</td>
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
		<h2 class="uk-heading-divider">Loader</h2>
		<p></p>
		<h2 class="uk-heading-divider">Modal</h2>
		<p></p>
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
					<td>side</td>
					<td>'left'|'right'</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">Table</h2>
		<p></p>
		<h2 class="uk-heading-divider">Accordion</h2>
		<p></p>
				<AccordionDemo />
			<hr class="uk-divider-icon">
		<h2 class="uk-heading-divider">AccordionItem</h2>
		<p></p>
		<h2 class="uk-heading-divider">Autocomplete</h2>
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
					<td>options</td>
					<td>Array.&lt;&lbrace;label: string, value: any&rbrace;&gt;</td>
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
					<td>state</td>
					<td>'initial'|'valid'|'invalid'</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">FixedPointInput</h2>
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
					<td>decimalPlaces</td>
					<td>'.'|','</td>
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
		<h2 class="uk-heading-divider">NumberInput</h2>
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
		<h2 class="uk-heading-divider">PasswordInput</h2>
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
					<td>state</td>
					<td>'initial'|'valid'|'invalid'</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
		<h2 class="uk-heading-divider">PercentageInput</h2>
		<p></p>
		<h2 class="uk-heading-divider">Radio</h2>
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
					<td>options</td>
					<td>Array.&lt;&lbrace;value: any, label: string&rbrace;&gt;</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>size</td>
					<td>undefined|'small'|'large'</td>
					<td>-</td>
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
		<h2 class="uk-heading-divider">Select</h2>
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
					<td>options</td>
					<td>Array.&lt;&lbrace;label: string, value: any&rbrace;&gt;</td>
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
					<td>state</td>
					<td>'initial'|'valid'|'invalid'</td>
					<td>-</td>
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
					<td>state</td>
					<td>'initial'|'valid'|'invalid'</td>
					<td>-</td>
					<td>undefined</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>