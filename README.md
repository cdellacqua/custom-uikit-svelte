# custom-uikit-svelte

Unofficial Svelte Component Library for the UIkit framework

&nbsp;
&nbsp;
Components
- [Alert](#alert)
- [Article](#article)
- [Badge](#badge)
- [Breadcrumb](#breadcrumb)
- [Button](#button)
- [Card](#card)
- [Comment](#comment)
- [DataTable](#datatable)
- [DescriptionList](#descriptionlist)
- [Divider](#divider)
- [Dropdown](#dropdown)
- [Form](#form)
- [Loader](#loader)
- [LoaderOverlay](#loaderoverlay)
- [LoaderWrapper](#loaderwrapper)
- [Modal](#modal)
- [Offcanvas](#offcanvas)
- [Switcher](#switcher)
- [Tab](#tab)
- [Table](#table)
- [Accordion](#accordion)
- [AccordionItem](#accordionitem)
- [Autocomplete](#autocomplete)
- [Checkbox](#checkbox)
- [DatePicker](#datepicker)
- [EmailInput](#emailinput)
- [Field](#field)
- [FixedPointInput](#fixedpointinput)
- [NumberInput](#numberinput)
- [PasswordInput](#passwordinput)
- [PercentageInput](#percentageinput)
- [Radio](#radio)
- [SearchInput](#searchinput)
- [Select](#select)
- [TextInput](#textinput)
- [Textarea](#textarea)
- [TimePicker](#timepicker)
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
## Alert
This alert can be used to display success, warning and error messages
&nbsp;
&nbsp;
&nbsp;
### Slots
|name|description|
|--|--|
|-|The content of the alert|
&nbsp;
### Custom Events
|name|type|description|
|--|--|--|
|hide|Array.<UIkitComponent>|Fires after the alert is hidden|
|beforehide|Array.<UIkitComponent>|Fires before hiding the alert. If preventDefault is called on this event, the alert will not be hidden|
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|closable|boolean|true|Whether the alert is dismissable|
|variant|'primary'\|'success'\|'danger'\|'warning'\|undefined|undefined|Specifies the look of the component|
|animation|boolean\|string|true|Fade out or use the uikit Animation component|
|animationDuration|number|150|Animation duration in milliseconds|
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined|A string containing any additional classes to apply to the component|
|ref (readonly)|HTMLDivElement|-|The HTML reference of the component|
&nbsp;
&nbsp;
&nbsp;
## Article
Useful to display content such as blog entries or articles
&nbsp;
&nbsp;
&nbsp;
### Slots
|name|description|
|--|--|
|-|The content of the article|
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|className|string\|undefined|undefined|A string containing any additional classes to apply to the component|
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|titleAsHtml|string\|undefined|""|A string that can contain HTML content which represents the title of the article. If omitted, the space dedicated to the title won't be displayed|
|articleMetaAsHtml|string\|undefined|""|A string that can contain HTML content with meta information about the article. If omitted, the space dedicated to the meta content won't be displayed|
|ref (readonly)|HTMLElement|-|The HTML reference of the component|
&nbsp;
&nbsp;
&nbsp;
## Badge
This component can be used as a notification badge or as a general purpose chip
&nbsp;
&nbsp;
&nbsp;
### Slots
|name|description|
|--|--|
|-|The content of the badge|
&nbsp;
### Forwarded Events
|name|source|
|--|--|
|click|HTMLSpanElement|
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|className|string\|undefined|undefined|A string containing any additional classes to apply to the component|
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|ref (readonly)|HTMLSpanElement|-|The HTML reference of the component|
&nbsp;
&nbsp;
&nbsp;
## Breadcrumb
A breadcrumb can be added to the page to help the user find where they are in the website and easily go back and forth between pages
&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|path|Array.<{href: string, label: string}>|[]|An array containing the various steps composing the path of the current page. Each step should have an href property,  which is the URL to which the user will be redirected, and a label property, which is displayed. The last element of the array represents the current page and its href property will be ignored|
|className|string\|undefined|undefined|A string containing any additional classes to apply to the component|
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|ref (readonly)|HTMLUListElement|undefined|The HTML reference of the component|
&nbsp;
&nbsp;
&nbsp;
## Button
This component represents a general purpose button, which can be customized according to its usage
&nbsp;
&nbsp;
&nbsp;
### Slots
|name|description|
|--|--|
|-|The content of the button|
&nbsp;
### Forwarded Events
|name|source|
|--|--|
|click|HTMLButtonElement|
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|className|string\|undefined|undefined|A string containing any additional classes to apply to the component|
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|type|'button'\|'submit'|"button"|The type property of the native HTML button|
|disabled|boolean|false|The disabled property of the native HTML button|
|loading|boolean|false|Whether the button has been used to retrieve some content that is still being loaded. If true, an icon with a spinner will appear next to the text and the button will also be temporarily disabled|
|variant|'default'\|'primary'\|'secondary'\|'danger'\|'text'\|'link'|"default"|This property is used to style the button with one of the base uikit classes for button appearance|
|icon|string\|undefined|undefined|If present, the uikit icon with the given name will be added next to the text of the button|
|iconPosition|'right'\|'left'|"right"|If the icon is set, this property let you decide its position, left or right|
|size|undefined\|'small'\|'large'|undefined|Specifies the size of the button. If undefined, the button will be of regular size|
|tooltip|string\|undefined|undefined|Specifies the uk-tooltip attribute. If undefined, no tooltip will be added to the button|
|ref (readonly)|HTMLButtonElement|-|The HTML reference of the component|
&nbsp;
&nbsp;
&nbsp;
## Card
The card component allows you to create nice box layouts
&nbsp;
&nbsp;
&nbsp;
### Slots
|name|description|
|--|--|
|header|The content to be put inside the header ('uk-card-header') of the card. Leave empty if no header is wanted|
|media-top|The content to be put inside the 'uk-card-media-top' class. This is useful if you want to add an image to your card which is supposed to take up the top half of the card. Leave empty if you don't want the card to have this layout|
|horizontal-media|For more complex layouts (e.g. an horizontal card with an image to the right/left) you can use this slot, which is placed before the card body. Leave empty if this is not needed|
|-|The content of the card|
|media-bottom|The content to be put inside the 'uk-card-media-bottom' class. This is useful if you want to add an image to your card which is supposed to take up the bottom half of the card. Leave empty if you don't want the card to have this layout|
|footer|Fill this slot if you want your card to have a footer. The content will be put inside the 'uk-card-footer' section|
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|variant|'default'\|'primary'\|'secondary'\|'hover'|"default"|Used to style the card. If set to hover, the card will appear flat unless it's being hovered|
|className|string\|undefined|undefined|A string containing any additional classes to apply to the component|
|hover|boolean|false|Add a hover animation to the card|
|size|'small'\|'large'\|undefined|undefined|Defines the padding of the card. In undefined, default values will be applied|
|title|string\|undefined|undefined|The title of the card. This will be represented inside the body of the card. If you have defined a custom header slot, you should manually specify the title inside it and not use this property|
|badge|string\|undefined|undefined|The text content of the card badge, which is displayed in the top right angle of the card. If undefined no badge will be added|
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|ref (readonly)|HTMLDivElement|-|The HTML reference of the component|
&nbsp;
&nbsp;
&nbsp;
## Comment

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|avatarSource|string\|undefined|undefined|The path to the avatar that will be added to the comment. For optimal results, use a square image. Only specify this property if you are not using a custom header, otherwise it will be ignored|
|avatarSize|number|80|Change the size of the avatar.|
|avatarAlt|string|""|The alt property of the avatar image|
|commentTitleAsHtml|string|""|The title of the comment that will be added to the header. It can contain HTML tags. Do not use this property if you are specifying a custom header|
|primary|boolean|false|True to add a different style to this comment (e.g. if it's made by the author)|
|ref (readonly)|HTMLElement|-|The HTML reference of the component|
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined|A string containing any additional classes to apply to the component|
&nbsp;
&nbsp;
&nbsp;
## DataTable

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|columns|Array.<{label: string, key: string, className: (string\|undefined), textAlign: ('center'\|'right'\|'left'\|undefined), orderable: (boolean\|Comparator\|undefined), searchable: (boolean\|undefined), render: (Renderer\|undefined)}>|-||
|rows|Array.<Record.<string, any>>|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
&nbsp;
&nbsp;
&nbsp;
## DescriptionList
Create an already styled description list, perfect for describing key-value properties
&nbsp;
&nbsp;
&nbsp;
### Slots
|name|description|
|--|--|
|-|If you need to add components in the titles or descriptions, use the default slot to specify the content of the description terms and description details|
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|showDivider|boolean|-|If true a divider will be shown between two items|
|className|string\|undefined|-|A string containing any additional classes to apply to the component|
|style|string\|undefined|-|A string specifying custom style properties for the component|
|ref (readonly)|HTMLDListElement|-|The HTML reference of the component|
|termsAreHtml|boolean|-|Whether the terms of your list should be treated as HTML|
|detailsAreHtml|boolean|-|Whether the details of your list should be treated as HTML|
|list|Array.<{term: string, details: string}>|-|An array containing the term-details pairs of the description list. Can be text only or html|
&nbsp;
&nbsp;
&nbsp;
## Divider

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
## Dropdown

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
## Form

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|state|'initial'\|'invalid'\|'valid'\|'loading'\|'error'\|'success'|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|variant|'stacked'\|'horizontal'|-||
&nbsp;
&nbsp;
&nbsp;
## Loader

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
## LoaderOverlay

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
## LoaderWrapper

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
## Modal

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
## Offcanvas

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|side|'left'\|'right'|-||
&nbsp;
&nbsp;
&nbsp;
## Switcher

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|style|string\|undefined|-|A string specifying custom style properties for the component|
&nbsp;
&nbsp;
&nbsp;
## Tab

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|style|string\|undefined|-|A string specifying custom style properties for the component|
&nbsp;
&nbsp;
&nbsp;
## Table

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
## Accordion

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
## AccordionItem

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
## Autocomplete

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|options|Array.<{label: string, value: any}>|-|Autocomplete options, the value must be unique|
|value|any|-|The current selected value or undefined if no value is selected|
|label|string|-|Label of this component|
|className|string\|undefined|-|A string containing any additional classes to apply to the component|
|style|string\|undefined|-|A string specifying custom style properties for the component|
|textIfNoResult|string|-|Text to show when the applied filter doesn't return any result|
|disabled|boolean|-|Control whether the component is disabled or not|
|tooltip|string\|undefined|-|UIkit tooltip|
|placeholder|string\|undefined|-|Input placeholder|
|ref|HTMLDivElement|-|Reference to the div that wraps this component|
|autocapitalize|string\|undefined|-|Autocapitalize setting of the input tag|
|autocomplete|string\|undefined|-|Autocomplete setting of the input tag|
|autocorrect|string\|undefined|-|Autocorrect setting of the input tag|
|animationDuration|number|-|In/Out fly animation duration (in milliseconds)|
&nbsp;
&nbsp;
&nbsp;
## Checkbox

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|style|string\|undefined|-|A string specifying custom style properties for the component|
|state|'initial'\|'valid'\|'invalid'|-||
&nbsp;
&nbsp;
&nbsp;
## DatePicker

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|style|string\|undefined|-|A string specifying custom style properties for the component|
|state|'initial'\|'valid'\|'invalid'|-||
&nbsp;
&nbsp;
&nbsp;
## EmailInput

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|style|string\|undefined|-|A string specifying custom style properties for the component|
|state|'initial'\|'valid'\|'invalid'|-||
&nbsp;
&nbsp;
&nbsp;
## Field

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|style|string\|undefined|-|A string specifying custom style properties for the component|
|state|'initial'\|'valid'\|'invalid'|-||
&nbsp;
&nbsp;
&nbsp;
## FixedPointInput

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|style|string\|undefined|-|A string specifying custom style properties for the component|
|iconPosition|'left'\|'right'|-||
|state|'initial'\|'valid'\|'invalid'|-||
&nbsp;
&nbsp;
&nbsp;
## NumberInput

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|style|string\|undefined|-|A string specifying custom style properties for the component|
|iconPosition|'left'\|'right'|-||
|state|'initial'\|'valid'\|'invalid'|-||
&nbsp;
&nbsp;
&nbsp;
## PasswordInput

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|style|string\|undefined|-|A string specifying custom style properties for the component|
|state|'initial'\|'valid'\|'invalid'|-||
&nbsp;
&nbsp;
&nbsp;
## PercentageInput

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|style|string\|undefined|-|A string specifying custom style properties for the component|
&nbsp;
&nbsp;
&nbsp;
## Radio

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|id|string|-||
|label|string\|undefined|-||
|value|any\|undefined|-||
|options|Array.<{value: any, label: string, disabled: (boolean\|undefined)}>|-||
|disabled|boolean|-||
|tooltip|string\|undefined|-||
|ref|HTMLDivElement|-||
|size|undefined\|'small'\|'large'|-||
|className|string\|undefined|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
&nbsp;
&nbsp;
&nbsp;
## SearchInput

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|style|string\|undefined|-|A string specifying custom style properties for the component|
|iconPosition|'left'\|'right'|-||
|state|'initial'\|'valid'\|'invalid'|-||
&nbsp;
&nbsp;
&nbsp;
## Select

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|style|string\|undefined|-|A string specifying custom style properties for the component|
|options|Array.<{label: string, value: any, disabled: (boolean\|undefined)}>|-||
|state|'initial'\|'valid'\|'invalid'|-||
&nbsp;
&nbsp;
&nbsp;
## TextInput

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|style|string\|undefined|-|A string specifying custom style properties for the component|
|iconPosition|'left'\|'right'|-||
|state|'initial'\|'valid'\|'invalid'|-||
&nbsp;
&nbsp;
&nbsp;
## Textarea

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|style|string\|undefined|-|A string specifying custom style properties for the component|
|state|'initial'\|'valid'\|'invalid'|-||
&nbsp;
&nbsp;
&nbsp;
## TimePicker

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|style|string\|undefined|-|A string specifying custom style properties for the component|
|state|'initial'\|'valid'\|'invalid'|-||