# custom-uikit-svelte

Unofficial Svelte Component Library for the UIkit framework

&nbsp;
### Install from npm

```npm i custom-uikit-svelte```

You can find the published package [here](https://www.npmjs.com/package/custom-uikit-svelte)

&nbsp;

### Demo with examples

The demo included in this repo shows some components in action with examples

You can have a look at it here: [custom-uikit-svelte demo](https://cdellacqua.github.io/custom-uikit-svelte/)

The demo files can be found in [src/](https://github.com/cdellacqua/custom-uikit-svelte/blob/master/src/)

&nbsp;

Components
- [Alert](#alert)
- [Article](#article)
- [AsyncDataTable](#asyncdatatable)
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
- [FormModal](#formmodal)
- [Loader](#loader)
- [LoaderOverlay](#loaderoverlay)
- [LoaderOverlayScoped](#loaderoverlayscoped)
- [LoaderWrapper](#loaderwrapper)
- [Modal](#modal)
- [Nav](#nav)
- [Offcanvas](#offcanvas)
- [OrderableList](#orderablelist)
- [Pagination](#pagination)
- [ScrollableNav](#scrollablenav)
- [Switcher](#switcher)
- [Tab](#tab)
- [Table](#table)
- [Accordion](#accordion)
- [AccordionItem](#accordionitem)
- [AsyncAutocomplete](#asyncautocomplete)
- [Autocomplete](#autocomplete)
- [Checkbox](#checkbox)
- [DatePicker](#datepicker)
- [EmailInput](#emailinput)
- [Field](#field)
- [FixedPointInput](#fixedpointinput)
- [MonthPicker](#monthpicker)
- [NumberInput](#numberinput)
- [PasswordInput](#passwordinput)
- [PasswordInputAlt](#passwordinputalt)
- [PercentageInput](#percentageinput)
- [Radio](#radio)
- [SearchInput](#searchinput)
- [Select](#select)
- [TelInput](#telinput)
- [TextInput](#textinput)
- [Textarea](#textarea)
- [TimePicker](#timepicker)
- [WeekPicker](#weekpicker)
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
|hide|Array<UIkitComponent>|Fires after the alert is hidden|
|beforehide|Array<UIkitComponent>|Fires before hiding the alert. If preventDefault is called on this event, the alert will not be hidden|

&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|closable|boolean|true|Whether the alert is dismissible|
|variant|'primary'\|'success'\|'danger'\|'warning'\|undefined|undefined|Specifies the look of the component|
|animation|boolean\|string|true|Fade out or use the uikit Animation component|
|animationDuration|number|150|Animation duration in milliseconds|
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined|A string containing any additional classes to apply to the component|
|ref (readonly)|HTMLDivElement|undefined|The HTML reference of the component|

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
|ref (readonly)|HTMLElement|undefined|The HTML reference of the component|

&nbsp;
&nbsp;
&nbsp;
## AsyncDataTable

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|columns|Array.<{label: string, key: string, className: (string\|undefined), textAlign: ('center'\|'right'\|'left'\|undefined), orderable: (boolean\|undefined), searchable: (boolean\|undefined), render: (DataTableRenderer\|undefined)}>|[]||
|size|undefined\|'small'|undefined||
|className|undefined\|string|undefined||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|appearance|'divider'\|'striped'|"divider"||
|searchButtonVariant|'default'\|'primary'\|'secondary'\|'danger'\|'text'\|'link'|"default"||
|stickyHeader|boolean|false||
|placeholder|string|""||
|noResultText|string\|undefined|undefined||
|ref|HTMLTableElement|undefined||
|instantSearch|boolean|true||
|query|string|""||
|orderBy|Array.<{key: string, direction: ('desc'\|'asc')}>|[]||
|horizontalScroll|boolean|true||
|dataProvider|AsyncDataTableDataProvider|-||
|dataProviderErrorHandler|CallableFunction|(err) => console.error(err)||
|recordsPerPage|number|25||
|numbersPerSide|number|4||
|pageIndex|number|0||
|total|number|0|@readonly|
|filtered|number|0|@readonly|
|loading|boolean|false|@readonly|
|debounceMs|number|200||
|rows|Array.<Record.<string, any>>\|null|null|Contains the current visible rows|

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
|ref (readonly)|HTMLSpanElement|undefined|The HTML reference of the component|

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
|id|string\|undefined|undefined||
|className|string\|undefined|undefined|A string containing any additional classes to apply to the component|
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|type|'button'\|'submit'|"button"|The type property of the native HTML button|
|disabled|boolean|false|The disabled property of the native HTML button|
|loading|boolean|false|Whether the button has been used to retrieve some content that is still being loaded. If true, an icon with a spinner will appear next to the text and the button will also be temporarily disabled|
|variant|'default'\|'primary'\|'secondary'\|'danger'\|'text'\|'link'|type === "submit" ? "primary" : "default"|This property is used to style the button with one of the base uikit classes for button appearance|
|icon|string\|undefined|type === "submit" ? "newline" : undefined|If present, the uikit icon with the given name will be added next to the text of the button|
|iconPosition|'right'\|'left'|'right'|If the icon is set, this property let you decide its position, left or right|
|size|undefined\|'small'\|'large'|undefined|Specifies the size of the button. If undefined, the button will be of regular size|
|tooltip|string\|undefined|undefined|Specifies the uk-tooltip attribute. If undefined, no tooltip will be added to the button|
|ref (readonly)|HTMLButtonElement|undefined|The HTML reference of the component|

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
|ref (readonly)|HTMLDivElement|undefined|The HTML reference of the component|

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
|ref (readonly)|HTMLElement|undefined|The HTML reference of the component|
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
|columns|Array.<{label: string, key: string, className: (string\|undefined), textAlign: ('center'\|'right'\|'left'\|undefined), orderable: (boolean\|Comparator\|undefined), searchable: (boolean\|DataTableSearchCallback\|undefined), render: (DataTableRenderer\|undefined)}>|[]||
|rows|Array.<Record.<string, any>>|[]||
|visibleRows|Array.<Record.<string, any>>|[]||
|size|undefined\|'small'|undefined||
|className|undefined\|string|undefined||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|appearance|'divider'\|'striped'|"divider"||
|searchButtonVariant|'default'\|'primary'\|'secondary'\|'danger'\|'text'\|'link'|"default"||
|stickyHeader|boolean|false||
|placeholder|string|""||
|noResultText|string\|undefined|undefined||
|ref|HTMLTableElement|undefined||
|instantSearch|boolean|true||
|query|string|""||
|orderBy|Array.<{key: string, direction: ('desc'\|'asc')}>|[]||
|horizontalScroll|boolean|true||
|recordsPerPage|number|25||
|numbersPerSide|number|4||
|pageIndex|number|0||
|total|number|0|@readonly|
|filtered|number|0|@readonly|

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
|showDivider|boolean|false|If true a divider will be shown between two items|
|className|string\|undefined|undefined|A string containing any additional classes to apply to the component|
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|ref (readonly)|HTMLDListElement|undefined|The HTML reference of the component|
|termsAreHtml|boolean|false|Whether the terms of your list should be treated as HTML|
|detailsAreHtml|boolean|false|Whether the details of your list should be treated as HTML|
|list|Array.<{term: string, details: string}>|[]|An array containing the term-details pairs of the description list. Can be text only or html|

&nbsp;
&nbsp;
&nbsp;
## Divider

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|withIcon|boolean|false||
|small|boolean|false||
|vertical|boolean|false||
|ref|HTMLHRElement|undefined||
|style|string\|undefined|undefined||
|className|string\|undefined|undefined||

&nbsp;
&nbsp;
&nbsp;
## Dropdown

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|mode|'click'\|'hover'|"hover"||
|label|string|""||
|isLabelHtml|boolean|false||
|variant|'default'\|'primary'\|'secondary'\|'danger'\|'text'\|'link'\|null|"default"|This property is used to style the button with one of the base uikit classes for button appearance. Setting this to null will hide the button|
|ref|HTMLDivElement|undefined||

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
|submitAsync|FormSubmitCallback|-||
|disabled|boolean|false||
|state|'initial'\|'invalid'\|'valid'\|'loading'\|'error'\|'success'|"initial"||
|valid|boolean|true|Indicates the validity of this form. Its value is updated using formRef.checkValdity(), that gets called each time an element inside this form triggers a bubbling 'change' event|
|ref|HTMLFormElement|undefined||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|variant|'stacked'\|'horizontal'|"stacked"||

&nbsp;
&nbsp;
&nbsp;
## FormModal

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|id|string\|undefined|undefined||
|style|string\|undefined|undefined||
|className|string\|undefined|undefined||
|title|string\|undefined|undefined||
|expand|boolean|false||
|fullScreen|boolean|false||
|closeable|boolean|true||
|closeButton|'default'\|'outside'|"default"||
|verticallyCentered|boolean|true||
|ref|HTMLDivElement|undefined||
|show|boolean|false||
|shown|boolean|false|@readonly|
|stack|boolean|true||
|formSubmitAsync|FormSubmitCallback|-||
|formDisabled|boolean|false||
|formState|'initial'\|'invalid'\|'valid'\|'loading'\|'error'\|'success'|"initial"||
|formValid|boolean|true||
|formRef|HTMLFormElement|undefined||
|formStyle|string\|undefined|undefined|A string specifying custom style properties for the component|
|formClassName|string\|undefined|''||
|formVariant|'stacked'\|'horizontal'|"stacked"||

&nbsp;
&nbsp;
&nbsp;
## Loader

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|className|string\|undefined|undefined||
|ratio|number|1||
|style|string\|undefined|undefined||
|ref|HTMLDivElement|undefined||

&nbsp;
&nbsp;
&nbsp;
## LoaderOverlay

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|className|string\|undefined|undefined||
|ratio|number|1||
|style|string\|undefined|undefined||
|ref|HTMLDivElement|undefined||
|opacity|number|0.8||
|loading|boolean|true||
|background|'default'\|'muted'\|'primary'\|'secondary'|"default"||
|backgroundClassName|string\|undefined|undefined||
|backgroundStyle|string\|undefined|undefined||
|slotPosition|'bottom'\|'right'\|'top'\|'left'|"bottom"||

&nbsp;
&nbsp;
&nbsp;
## LoaderOverlayScoped

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|className|string\|undefined|undefined||
|ratio|number|1||
|style|string\|undefined|undefined||
|ref|HTMLDivElement|undefined||
|opacity|number|0.8||
|loading|boolean|true||
|background|'default'\|'muted'\|'primary'\|'secondary'|'default'||
|backgroundClassName|string\|undefined|undefined||
|backgroundStyle|string\|undefined|undefined||
|slotPosition|'bottom'\|'right'\|'top'\|'left'|"bottom"||

&nbsp;
&nbsp;
&nbsp;
## LoaderWrapper

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|loading|boolean|true||
|className|string\|undefined|undefined||
|ratio|number|1||
|style|string\|undefined|undefined||
|ref|HTMLDivElement|undefined||
|center|boolean|true||
|slotPosition|'bottom'\|'right'\|'top'\|'left'|"bottom"||

&nbsp;
&nbsp;
&nbsp;
## Modal

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|id|string\|undefined|undefined||
|style|string\|undefined|undefined||
|className|string\|undefined|undefined||
|title|string\|undefined|undefined||
|expand|boolean|false||
|fullScreen|boolean|false||
|closeable|boolean|true||
|closeButton|'default'\|'outside'|"default"||
|verticallyCentered|boolean|true||
|ref|HTMLDivElement|undefined||
|show|boolean|false||
|shown|boolean|false|@readonly|
|stack|boolean|true||

&nbsp;
&nbsp;
&nbsp;
## Nav

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|ref (readonly)|HTMLDivElement|undefined|The HTML reference of the component|
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined|A string containing any additional classes to apply to the component|

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
|id|string|generateId()||
|show|boolean|false||
|shown|boolean|false|@readonly|
|ref|HTMLDivElement|undefined||
|side|'left'\|'right'|"left"||

&nbsp;
&nbsp;
&nbsp;
## OrderableList

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|items|Array.<{text: (string\|undefined), html: (string\|undefined), props: (Record.<string, any>\|undefined), component: (SvelteComponent\|undefined)}>|[]||
|component|SvelteComponent\|undefined|undefined||
|ref|HTMLUListElement|undefined|@readonly|
|animationDuration|number|200||
|moveToBoundaries|boolean|false|Whether to show or hide the move-to-top and move-to-bottom buttons|
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined|A string containing any additional classes to apply to the component|

&nbsp;
&nbsp;
&nbsp;
## Pagination

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|className|string\|undefined|""||
|style|string\|undefined|undefined||
|center|boolean|true||
|pageIndex|number|0||
|numberOfPages|number|0||
|numbersPerSide|number|4||

&nbsp;
&nbsp;
&nbsp;
## ScrollableNav

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined|A string containing any additional classes to apply to the component|
|navStyle|string\|undefined|undefined|A string specifying custom style properties for the contained Nav component|
|navClassName|string\|undefined|undefined|A string containing any additional classes to apply to the contained Nav component|
|ref (readonly)|HTMLDivElement|undefined|The HTML reference of the component|
|height (readonly)|number|0|The current height of this component|
|spacer|boolean|true|Whether to add a spacer underneath this component or not|

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
|connect|string|"~.uk-switcher"||
|toggle|string|"> * > :first-child"||
|animation|string\|false|false||
|duration|number|200||
|swiping|boolean|true||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|titles|Array.<string>|[]||
|htmlTitle|boolean|false||
|ref|HTMLUListElement|undefined||
|index|number|0||

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
|connect|string|"~.uk-switcher"||
|toggle|string|"> *"||
|animation|string\|false|false||
|duration|number|200||
|swiping|boolean|true||
|media|number\|string|200||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|titles|Array.<string>|[]||
|htmlTitle|boolean|false||
|ref|HTMLDivElement|undefined||
|index|number|0||

&nbsp;
&nbsp;
&nbsp;
## Table

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|heading|Array.<(string\|{label: string, className: (string\|undefined), textAlign: ('center'\|'right'\|'left'\|undefined)})>|[]||
|size|'small'\|undefined|undefined||
|className|string\|undefined|undefined||
|style|string\|undefined|undefined||
|appearance|'divider'\|'striped'\|undefined|undefined||
|stickyHeader|boolean|false||
|ref|HTMLTableElement|undefined||
|caption|string\|undefined|undefined||

&nbsp;
&nbsp;
&nbsp;
## Accordion

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|animation|boolean|true||
|collapsible|boolean|true||
|duration|number|200||
|multi|boolean|false||
|index|number\|false\|Array.<number>|multi ? [] : false||
|transition|string|"ease"||
|ref|HTMLUListElement|undefined||
|className|string\|undefined|undefined||
|style|string\|undefined|undefined||

&nbsp;
&nbsp;
&nbsp;
## AccordionItem

&nbsp;
&nbsp;

&nbsp;
&nbsp;
&nbsp;
## AsyncAutocomplete

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|id|string|generateId()||
|multi|boolean|false|Whether or not the autocomplete supports multiple values selected at the same time|
|value|any\|null\|Array.<any>|!multi ? null : []|If not in multi-mode (default): the current selected value or null if no value is selected Else: the list of currently selected values|
|label|string|""|Label of this component|
|className|string\|undefined|undefined|A string containing any additional classes to apply to the component|
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|textIfNoResult|string|""|Text to show when the applied filter doesn't return any result|
|textIfInvalid|string|""|Text to show when the field is required but no value has been chosen|
|disabled|boolean|false|Control whether the component is disabled or not|
|tooltip|string\|undefined|undefined|UIkit tooltip|
|placeholder|string\|undefined|undefined|Input placeholder|
|optional|boolean|false||
|ref|HTMLDivElement|undefined|Reference to the div that wraps this component|
|autocapitalize|string\|undefined|undefined|Autocapitalize setting of the input tag|
|autocomplete|string\|undefined|"off"|Autocomplete setting of the input tag|
|autocorrect|string\|undefined|undefined|Autocorrect setting of the input tag|
|spellcheck|string\|undefined|undefined||
|animationDuration|number|100|In/Out fly animation duration (in milliseconds)|
|state|'initial'\|'valid'\|'invalid'|"initial"||
|query|string|""|The current search string|
|selectedOptions|Array.<{label: string, value: any}>|[]|Currently selected options|
|dataProvider|AsyncAutocompleteDataProvider|-||
|dataProviderErrorHandler|CallableFunction|(err) => console.error(err)||
|loading|boolean|false|@readonly|
|debounceMs|number|200||
|maxSuggestions|number|5||
|requiredMarker|string\|undefined|undefined||
|optionalMarker|string\|undefined|undefined||

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
|id|string|generateId()||
|options|Array.<{label: string, value: any}>|[]|Autocomplete options, the value must be unique|
|multi|boolean|false|Whether or not the autocomplete supports multiple values selected at the same time|
|value|any\|null\|Array.<any>|!multi ? null : []|If not in multi-mode (default): the current selected value or null if no value is selected Else: the list of currently selected values|
|label|string|""|Label of this component|
|className|string\|undefined|undefined|A string containing any additional classes to apply to the component|
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|textIfNoResult|string|""|Text to show when the applied filter doesn't return any result|
|textIfInvalid|string|""|Text to show when the field is required but no value has been chosen|
|disabled|boolean|false|Control whether the component is disabled or not|
|tooltip|string\|undefined|undefined|UIkit tooltip|
|placeholder|string\|undefined|undefined|Input placeholder|
|optional|boolean|false||
|ref|HTMLDivElement|undefined|Reference to the div that wraps this component|
|autocapitalize|string\|undefined|undefined|Autocapitalize setting of the input tag|
|autocomplete|string\|undefined|"off"|Autocomplete setting of the input tag|
|autocorrect|string\|undefined|undefined|Autocorrect setting of the input tag|
|spellcheck|string\|undefined|undefined||
|animationDuration|number|100|In/Out fly animation duration (in milliseconds)|
|state|'initial'\|'valid'\|'invalid'|"initial"||
|query|string|""|The current search string|
|selectedOptions|Array.<{label: string, value: any}>|[]|Currently selected options|
|requiredMarker|string\|undefined|undefined||
|optionalMarker|string\|undefined|undefined||

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
|id|string|generateId()||
|label|string|""||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|name|string\|undefined|undefined||
|textIfInvalid|string\|undefined|undefined||
|textIfValid|string\|undefined|undefined||
|helperText|string\|undefined|undefined||
|optional|boolean|false||
|value|boolean|-||
|ref|HTMLInputElement|undefined||
|disabled|boolean|false||
|tooltip|string\|undefined|undefined||
|requiredMarker|string\|undefined|undefined||
|optionalMarker|string\|undefined|undefined||
|state|'initial'\|'valid'\|'invalid'|"initial"||

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
|id|string|generateId()||
|label|string|""||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|name|string\|undefined|undefined||
|textIfInvalid|string\|undefined|undefined||
|textIfValid|string\|undefined|undefined||
|helperText|string\|undefined|undefined||
|placeholder|string|""||
|optional|boolean|false||
|value|string|-||
|ref|HTMLInputElement|undefined||
|disabled|boolean|false||
|tooltip|string\|undefined|undefined||
|min|string\|undefined|undefined||
|max|string\|undefined|undefined||
|autocapitalize|string\|undefined|undefined||
|autocomplete|string\|undefined|undefined||
|autocorrect|string\|undefined|undefined||
|spellcheck|string\|undefined|undefined||
|requiredMarker|string\|undefined|undefined||
|optionalMarker|string\|undefined|undefined||
|state|'initial'\|'valid'\|'invalid'|"initial"||

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
|id|string|generateId()||
|label|string|""||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|name|string\|undefined|undefined||
|textIfInvalid|string\|undefined|undefined||
|textIfValid|string\|undefined|undefined||
|helperText|string\|undefined|undefined||
|placeholder|string|""||
|optional|boolean|false||
|value|string|-||
|ref|HTMLInputElement|undefined||
|disabled|boolean|false||
|tooltip|string\|undefined|undefined||
|autocapitalize|string\|undefined|'off'||
|autocomplete|string\|undefined|undefined||
|autocorrect|string\|undefined|'off'||
|spellcheck|string\|undefined|'off'||
|requiredMarker|string\|undefined|undefined||
|optionalMarker|string\|undefined|undefined||
|state|'initial'\|'valid'\|'invalid'|"initial"||

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
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|state|'initial'\|'valid'\|'invalid'|"initial"||
|requiredMarker|string\|undefined|undefined||
|optionalMarker|string\|undefined|undefined||

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
|id|string|generateId()||
|decimalPlaces|number|2||
|inhibitDecimalSeparatorKey|boolean|false||
|label|string|""||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|textIfInvalid|string\|undefined|undefined||
|textIfValid|string\|undefined|undefined||
|helperText|string\|undefined|undefined||
|optional|boolean|false||
|value|string|-||
|min|string\|number|undefined||
|max|string\|number|undefined||
|ref|HTMLInputElement|undefined||
|disabled|boolean|false||
|tooltip|string\|undefined|undefined||
|icon|string\|undefined|undefined||
|iconPosition|'left'\|'right'|"left"||
|state|'initial'\|'valid'\|'invalid'|"initial"||

&nbsp;
&nbsp;
&nbsp;
## MonthPicker

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|id|string|generateId()||
|label|string|""||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|name|string\|undefined|undefined||
|textIfInvalid|string\|undefined|undefined||
|textIfValid|string\|undefined|undefined||
|helperText|string\|undefined|undefined||
|placeholder|string|""||
|optional|boolean|false||
|value|string|-||
|ref|HTMLInputElement|undefined||
|disabled|boolean|false||
|tooltip|string\|undefined|undefined||
|autocapitalize|string\|undefined|undefined||
|autocomplete|string\|undefined|undefined||
|autocorrect|string\|undefined|undefined||
|spellcheck|string\|undefined|undefined||
|requiredMarker|string\|undefined|undefined||
|optionalMarker|string\|undefined|undefined||
|state|'initial'\|'valid'\|'invalid'|"initial"||

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
|id|string|generateId()||
|label|string|""||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|name|string\|undefined|undefined||
|textIfInvalid|string\|undefined|undefined||
|textIfValid|string\|undefined|undefined||
|helperText|string\|undefined|undefined||
|placeholder|string|""||
|optional|boolean|false||
|value|string|-||
|ref|HTMLInputElement|undefined||
|min|number\|string|undefined||
|max|number\|string|undefined||
|step|number\|string|undefined||
|disabled|boolean|false||
|tooltip|string\|undefined|undefined||
|icon|string\|undefined|undefined||
|iconPosition|'left'\|'right'|"left"||
|autocapitalize|string\|undefined|undefined||
|autocomplete|string\|undefined|undefined||
|autocorrect|string\|undefined|undefined||
|spellcheck|string\|undefined|undefined||
|requiredMarker|string\|undefined|undefined||
|optionalMarker|string\|undefined|undefined||
|state|'initial'\|'valid'\|'invalid'|"initial"||

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
|id|string|generateId()||
|label|string|""||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|name|string\|undefined|undefined||
|textIfInvalid|string\|undefined|undefined||
|textIfValid|string\|undefined|undefined||
|helperText|string\|undefined|undefined||
|placeholder|string|""||
|optional|boolean|false||
|value|string|-||
|ref|HTMLInputElement|undefined||
|disabled|boolean|false||
|tooltip|string\|undefined|undefined||
|autocapitalize|string\|undefined|"off"||
|autocomplete|string\|undefined|undefined||
|autocorrect|string\|undefined|"off"||
|spellcheck|string\|undefined|"off"||
|minlength|number\|undefined|undefined||
|maxlength|string\|undefined|undefined||
|requiredMarker|string\|undefined|undefined||
|optionalMarker|string\|undefined|undefined||
|state|'initial'\|'valid'\|'invalid'|"initial"||

&nbsp;
&nbsp;
&nbsp;
## PasswordInputAlt

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|id|string|generateId()||
|label|string|""||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|name|string\|undefined|undefined||
|textIfInvalid|string\|undefined|undefined||
|textIfValid|string\|undefined|undefined||
|helperText|string\|undefined|undefined||
|placeholder|string|""||
|optional|boolean|false||
|value|string|-||
|ref|HTMLInputElement|undefined||
|disabled|boolean|false||
|tooltip|string\|undefined|undefined||
|autocapitalize|string\|undefined|"off"||
|autocomplete|string\|undefined|undefined||
|autocorrect|string\|undefined|"off"||
|spellcheck|string\|undefined|"off"||
|minlength|number\|undefined|undefined||
|maxlength|string\|undefined|undefined||
|requiredMarker|string\|undefined|undefined||
|optionalMarker|string\|undefined|undefined||
|state|'initial'\|'valid'\|'invalid'|"initial"||

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
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|autocapitalize|string\|undefined|undefined||
|autocomplete|string\|undefined|undefined||
|autocorrect|string\|undefined|undefined||
|spellcheck|string\|undefined|undefined||

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
|id|string|generateId()||
|label|string\|undefined|undefined||
|name|string\|undefined|undefined||
|value|any\|undefined|undefined||
|options|Array.<{value: any, label: string, disabled: (boolean\|undefined)}>|[]||
|disabled|boolean|false||
|optional|boolean|false||
|tooltip|string\|undefined|undefined||
|ref|HTMLDivElement|undefined||
|size|undefined\|'small'\|'large'|undefined||
|className|string\|undefined|undefined||
|variant|'primary'\|'secondary'\|'danger'|"primary"|This property is used to style the button corresponding to the selected value with one of the base uikit classes for button appearance|
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|requiredMarker|string\|undefined|undefined||
|optionalMarker|string\|undefined|undefined||

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
|id|string|generateId()||
|label|string|""||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|name|string\|undefined|undefined||
|textIfInvalid|string\|undefined|undefined||
|textIfValid|string\|undefined|undefined||
|helperText|string\|undefined|undefined||
|placeholder|string|""||
|optional|boolean|false||
|value|string|-||
|ref|HTMLInputElement|undefined||
|disabled|boolean|false||
|tooltip|string\|undefined|undefined||
|icon|string\|undefined|undefined||
|iconPosition|'left'\|'right'|"left"||
|inputmode|string\|undefined|undefined||
|pattern|string\|undefined|undefined||
|autocapitalize|string\|undefined|undefined||
|autocomplete|string\|undefined|undefined||
|autocorrect|string\|undefined|undefined||
|spellcheck|string\|undefined|undefined||
|minlength|number\|undefined|undefined||
|maxlength|string\|undefined|undefined||
|requiredMarker|string\|undefined|undefined||
|optionalMarker|string\|undefined|undefined||
|state|'initial'\|'valid'\|'invalid'|"initial"||

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
|id|string|generateId()||
|label|string|""||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|textIfInvalid|string\|undefined|undefined||
|textIfValid|string\|undefined|undefined||
|helperText|string\|undefined|undefined||
|placeholder|string|""||
|optional|boolean|false||
|value|any|-|Current value of the select. Setting it to undefined sets the selected index to 0, choosing the first option, whether it's disabled, the placeholder, or a valid option|
|options|Array.<{label: string, value: any, disabled: (boolean\|undefined)}>|[]||
|ref|HTMLSelectElement|undefined||
|disabled|boolean|false||
|tooltip|string\|undefined|undefined||
|requiredMarker|string\|undefined|undefined||
|optionalMarker|string\|undefined|undefined||
|state|'initial'\|'valid'\|'invalid'|"initial"||

&nbsp;
&nbsp;
&nbsp;
## TelInput

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|id|string|generateId()||
|label|string|""||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|name|string\|undefined|undefined||
|textIfInvalid|string\|undefined|undefined||
|textIfValid|string\|undefined|undefined||
|helperText|string\|undefined|undefined||
|placeholder|string|""||
|optional|boolean|false||
|value|string|-||
|ref|HTMLInputElement|undefined||
|disabled|boolean|false||
|tooltip|string\|undefined|undefined||
|autocapitalize|string\|undefined|undefined||
|autocomplete|string\|undefined|undefined||
|autocorrect|string\|undefined|undefined||
|spellcheck|string\|undefined|undefined||
|minlength|number\|undefined|undefined||
|maxlength|string\|undefined|undefined||
|requiredMarker|string\|undefined|undefined||
|optionalMarker|string\|undefined|undefined||
|state|'initial'\|'valid'\|'invalid'|"initial"||

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
|id|string|generateId()||
|label|string|""||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|name|string\|undefined|undefined||
|textIfInvalid|string\|undefined|undefined||
|textIfValid|string\|undefined|undefined||
|helperText|string\|undefined|undefined||
|placeholder|string|""||
|optional|boolean|false||
|value|string|-||
|ref|HTMLInputElement|undefined||
|disabled|boolean|false||
|tooltip|string\|undefined|undefined||
|icon|string\|undefined|undefined||
|iconPosition|'left'\|'right'|"left"||
|inputmode|string\|undefined|undefined||
|pattern|string\|undefined|undefined||
|autocapitalize|string\|undefined|undefined||
|autocomplete|string\|undefined|undefined||
|autocorrect|string\|undefined|undefined||
|spellcheck|string\|undefined|undefined||
|minlength|number\|undefined|undefined||
|maxlength|string\|undefined|undefined||
|requiredMarker|string\|undefined|undefined||
|optionalMarker|string\|undefined|undefined||
|state|'initial'\|'valid'\|'invalid'|"initial"||

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
|id|string|generateId()||
|label|string|""||
|name|string\|undefined|undefined||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|textIfInvalid|string\|undefined|undefined||
|textIfValid|string\|undefined|undefined||
|helperText|string\|undefined|undefined||
|placeholder|string|""||
|optional|boolean|false||
|value|string|-||
|ref|HTMLTextAreaElement|undefined||
|rows|number|5||
|disabled|boolean|false||
|tooltip|string\|undefined|undefined||
|autocapitalize|string\|undefined|undefined||
|autocomplete|string\|undefined|undefined||
|autocorrect|string\|undefined|undefined||
|spellcheck|string\|undefined|undefined||
|minlength|number\|undefined|undefined||
|maxlength|string\|undefined|undefined||
|requiredMarker|string\|undefined|undefined||
|optionalMarker|string\|undefined|undefined||
|state|'initial'\|'valid'\|'invalid'|"initial"||

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
|id|string|generateId()||
|label|string|""||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|name|string\|undefined|undefined||
|textIfInvalid|string\|undefined|undefined||
|textIfValid|string\|undefined|undefined||
|helperText|string\|undefined|undefined||
|placeholder|string|""||
|optional|boolean|false||
|value|string|-||
|ref|HTMLInputElement|undefined||
|disabled|boolean|false||
|tooltip|string\|undefined|undefined||
|autocapitalize|string\|undefined|undefined||
|autocomplete|string\|undefined|undefined||
|autocorrect|string\|undefined|undefined||
|spellcheck|string\|undefined|undefined||
|requiredMarker|string\|undefined|undefined||
|optionalMarker|string\|undefined|undefined||
|state|'initial'\|'valid'\|'invalid'|"initial"||

&nbsp;
&nbsp;
&nbsp;
## WeekPicker

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|id|string|generateId()||
|label|string|""||
|style|string\|undefined|undefined|A string specifying custom style properties for the component|
|className|string\|undefined|undefined||
|name|string\|undefined|undefined||
|textIfInvalid|string\|undefined|undefined||
|textIfValid|string\|undefined|undefined||
|helperText|string\|undefined|undefined||
|placeholder|string|""||
|optional|boolean|false||
|value|string|-||
|ref|HTMLInputElement|undefined||
|disabled|boolean|false||
|tooltip|string\|undefined|undefined||
|autocapitalize|string\|undefined|undefined||
|autocomplete|string\|undefined|undefined||
|autocorrect|string\|undefined|undefined||
|spellcheck|string\|undefined|undefined||
|requiredMarker|string\|undefined|undefined||
|optionalMarker|string\|undefined|undefined||
|state|'initial'\|'valid'\|'invalid'|"initial"||

&nbsp;
## Special Types


```typescript
/**
 * Compares two values
 */
export type Comparator = (v1: any, v2: any) => number;

/**
 * Returns a Promise that will contain an array of options (label + value) given a query string
 */
export type AsyncAutocompleteDataProvider = (query: string) => Promise<Array<{ label: string, value: any }>>;


/**
 * Returns a Promise that will contain an object describing the result given a query string
 */
export type AsyncDataTableDataProvider =
	(query: string, orderBy: Array<{ key: string, direction: 'asc' | 'desc' }>, recordsPerPage: number, pageIndex: number) => Promise<AsyncDataTableDataProviderResult>;

export interface AsyncDataTableDataProviderResult {
	/** (optional) the number of available records */
	total: number|undefined,
	/** the number of records, filtered by the given query. This is used to create the pagination buttons of the table */
	filtered: number,
	/** the chunk of records to display */
	records: Array<Record<string, any>>
}


/**
 * Given the column value and its current row object, this function returns a representation of that cell
 */
export type DataTableRenderer = (value: any, row: Record<string, any>) => string | DataTableRenderWithComponent
export interface DataTableRenderWithComponent {
	/** The Svelte component that will render the cell */
	component: SvelteComponent,
	/** Props passed to the Svelte component */
	props: Record<string, any> | undefined,
	/** An "on:click" handler. Note that this handler will stop the propagation of the click event to the entire row */
	onClick: (e) => any,
	/** The text content that will be passed to the default slot of the Svelte component */
	textContent: string | undefined
}


/**
 * Given the current query, the column value and the entire row that column is part of, returns a boolean indicating
 * whether or not the current row should be displayed
 */
export type DataTableSearchCallback = (query: string, columnValue: any, row: Record<string, any>) => boolean;


/**
 * Once called, returns a Promise. While waiting for the Promise to settle (either by resolving or rejecting) the form will show a loading state
 */
export type FormSubmitCallback = () => Promise<any>;

```