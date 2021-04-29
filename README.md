# custom-uikit-svelte

Unofficial Svelte Component Library for the UIkit framework

&nbsp;
### Install from npm

```npm i custom-uikit-svelte```

You can find the published package [here](https://www.npmjs.com/package/custom-uikit-svelte)

&nbsp;

### Run the demo

The demo included in this repo shows some components in action with examples

```
git clone git@github.com:cdellacqua/custom-uikit-svelte.git
cd custom-uikit-svelte
npm i
npm run dev
```

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
## AsyncDataTable

&nbsp;
&nbsp;
&nbsp;
### Props
|name|type|default|description|
|--|--|--|--|
|columns|Array.<{label: string, key: string, className: (string\|undefined), textAlign: ('center'\|'right'\|'left'\|undefined), orderable: (boolean\|undefined), searchable: (boolean\|undefined), render: (Renderer\|undefined)}>|-||
|size|undefined\|'small'|-||
|className|undefined\|string|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|appearance|'divider'\|'striped'|-||
|searchButtonVariant|'default'\|'primary'\|'secondary'\|'danger'\|'text'\|'link'|-||
|stickyHeader|boolean|-||
|placeholder|string|-||
|noResultText|string\|undefined|-||
|ref|HTMLTableElement|-||
|instantSearch|boolean|-|@default true|
|query|string|-||
|orderBy|Array.<{key: string, direction: ('desc'\|'asc')}>|-||
|horizontalScroll|boolean|-|@default true|
|dataProvider|DataProvider|-||
|dataProviderErrorHandler|function|-||
|recordsPerPage|number|-||
|numbersPerSide|number|-||
|pageIndex|number|-||
|total|number|-|@readonly|
|filtered|number|-|@readonly|
|loading|boolean|-|@readonly|
|debounceMs|number|-||

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
|id|string\|undefined|-||
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
|columns|Array.<{label: string, key: string, className: (string\|undefined), textAlign: ('center'\|'right'\|'left'\|undefined), orderable: (boolean\|Comparator\|undefined), searchable: (boolean\|SearchCallback\|undefined), render: (Renderer\|undefined)}>|-||
|rows|Array.<Record.<string, any>>|-||
|size|undefined\|'small'|-||
|className|undefined\|string|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|appearance|'divider'\|'striped'|-||
|searchButtonVariant|'default'\|'primary'\|'secondary'\|'danger'\|'text'\|'link'|-||
|stickyHeader|boolean|-||
|placeholder|string|-||
|noResultText|string\|undefined|-||
|ref|HTMLTableElement|-||
|instantSearch|boolean|-|@default true|
|query|string|-||
|orderBy|Array.<{key: string, direction: ('desc'\|'asc')}>|-||
|horizontalScroll|boolean|-|@default true|

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
### Props
|name|type|default|description|
|--|--|--|--|
|withIcon|boolean|-||
|small|boolean|-||
|vertical|boolean|-||
|ref|HTMLHRElement|-||
|style|string\|undefined|-||
|className|string\|undefined|-||

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
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|mode|'click'\|'hover'|-||
|label|string|-||
|isLabelHtml|boolean|-||
|variant|'default'\|'primary'\|'secondary'\|'danger'\|'text'\|'link'\|null|"default"|This property is used to style the button with one of the base uikit classes for button appearance. Setting this to null will hide the button|
|ref|HTMLDivElement|-||

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
|submitAsync|SubmitCallback|-||
|disabled|boolean|-||
|state|'initial'\|'invalid'\|'valid'\|'loading'\|'error'\|'success'|-||
|valid|boolean|-|Indicates the validity of this form. Its value is updated using formRef.checkValdity(), that gets called each time an element inside this form triggers a bubbling 'change' event|
|ref|HTMLFormElement|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|variant|'stacked'\|'horizontal'|-||

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
|id|string\|undefined|-||
|style|string\|undefined|-||
|className|string\|undefined|-||
|title|string\|undefined|-||
|expand|boolean|-||
|fullScreen|boolean|-||
|closeable|boolean|-||
|closeButton|'default'\|'outside'|-||
|verticallyCentered|boolean|-||
|ref|HTMLDivElement|-||
|show|boolean|-||
|shown|boolean|-|@readonly|
|stack|boolean|-||
|formSubmitAsync|SubmitCallback|-||
|formDisabled|boolean|-||
|formState|'initial'\|'invalid'\|'valid'\|'loading'\|'error'\|'success'|-||
|formValid|boolean|-||
|formRef|HTMLFormElement|-||
|formStyle|string\|undefined|-|A string specifying custom style properties for the component|
|formClassName|string\|undefined|-||
|formVariant|'stacked'\|'horizontal'|-||

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
|className|string\|undefined|-||
|ratio|number|-||
|style|string\|undefined|-||
|ref|HTMLDivElement|-||

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
|className|string\|undefined|-||
|ratio|number|-||
|style|string\|undefined|-||
|ref|HTMLDivElement|-||
|opacity|number|-||
|loading|boolean|-||
|background|'default'\|'muted'\|'primary'\|'secondary'|-||
|backgroundClassName|string\|undefined|-||
|backgroundStyle|string\|undefined|-||
|slotPosition|'bottom'\|'right'\|'top'\|'left'|-|@default 'bottom'|

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
|className|string\|undefined|-||
|ratio|number|-||
|style|string\|undefined|-||
|ref|HTMLDivElement|-||
|opacity|number|-||
|loading|boolean|-||
|background|'default'\|'muted'\|'primary'\|'secondary'|-||
|backgroundClassName|string\|undefined|-||
|backgroundStyle|string\|undefined|-||
|slotPosition|'bottom'\|'right'\|'top'\|'left'|-|@default 'bottom'|

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
|loading|boolean|-||
|className|string\|undefined|-||
|ratio|number|-||
|style|string\|undefined|-||
|ref|HTMLDivElement|-||
|center|boolean|-||
|slotPosition|'bottom'\|'right'\|'top'\|'left'|-|@default 'bottom'|

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
|id|string\|undefined|-||
|style|string\|undefined|-||
|className|string\|undefined|-||
|title|string\|undefined|-||
|expand|boolean|-||
|fullScreen|boolean|-||
|closeable|boolean|-||
|closeButton|'default'\|'outside'|-||
|verticallyCentered|boolean|-||
|ref|HTMLDivElement|-||
|show|boolean|-||
|shown|boolean|-|@readonly|
|stack|boolean|-||

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
|ref (readonly)|HTMLDivElement|-|The HTML reference of the component|
|style|string\|undefined|-|A string specifying custom style properties for the component|
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
|id|string|-||
|show|boolean|-||
|shown|boolean|-|@readonly|
|ref|HTMLDivElement|-||
|side|'left'\|'right'|-||

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
|items|Array.<{text: (string\|undefined), html: (string\|undefined), props: (Record.<string, any>\|undefined), component: (SvelteComponent\|undefined)}>|-||
|component|SvelteComponent\|undefined|-||
|ref|HTMLUListElement|-|@readonly|
|animationDuration|number|-||
|moveToBoundaries|boolean|-|Whether to show or hide the move-to-top and move-to-bottom buttons|
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
|className|string\|undefined|-||
|style|string\|undefined|-||
|center|boolean|-||
|pageIndex|number|-||
|numberOfPages|number|-||
|numbersPerSide|number|-||

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
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|undefined|A string containing any additional classes to apply to the component|
|navStyle|string\|undefined|-|A string specifying custom style properties for the contained Nav component|
|navClassName|string\|undefined|undefined|A string containing any additional classes to apply to the contained Nav component|
|ref (readonly)|HTMLDivElement|-|The HTML reference of the component|
|height (readonly)|number|-|The current height of this component|
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
|connect|string|-||
|toggle|string|-||
|animation|string\|false|-||
|duration|number|-||
|swiping|boolean|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|titles|Array.<string>|-||
|htmlTitle|boolean|-||
|ref|HTMLUListElement|-||
|index|number|-||

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
|connect|string|-||
|toggle|string|-||
|animation|string\|false|-||
|duration|number|-||
|swiping|boolean|-||
|media|number\|string|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|titles|Array.<string>|-||
|htmlTitle|boolean|-||
|ref|HTMLDivElement|-||
|index|number|-||

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
|heading|Array.<(string\|{label: string, className: (string\|undefined), textAlign: ('center'\|'right'\|'left'\|undefined)})>|-||
|size|'small'\|undefined|-||
|className|string\|undefined|-||
|style|string\|undefined|-||
|appearance|'divider'\|'striped'\|undefined|-||
|stickyHeader|boolean|-||
|ref|HTMLTableElement|-||
|caption|string\|undefined|-||

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
|index|number\|false|-||
|animation|boolean|-||
|collapsible|boolean|-||
|duration|number|-||
|multi|boolean|-||
|transition|string|-||
|ref|HTMLUListElement|-||
|className|string\|undefined|-||
|style|string\|undefined|-||

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
|id|string|-||
|value|any|-|The current selected value or null if no value is selected|
|label|string|-|Label of this component|
|className|string\|undefined|-|A string containing any additional classes to apply to the component|
|style|string\|undefined|-|A string specifying custom style properties for the component|
|textIfNoResult|string|-|Text to show when the applied filter doesn't return any result|
|textIfInvalid|string|-|Text to show when the field is required but no value has been chosen|
|disabled|boolean|-|Control whether the component is disabled or not|
|tooltip|string\|undefined|-|UIkit tooltip|
|placeholder|string\|undefined|-|Input placeholder|
|optional|boolean|-||
|ref|HTMLDivElement|-|Reference to the div that wraps this component|
|autocapitalize|string\|undefined|-|Autocapitalize setting of the input tag|
|autocomplete|string\|undefined|-|Autocomplete setting of the input tag|
|autocorrect|string\|undefined|-|Autocorrect setting of the input tag|
|spellcheck|string\|undefined|-||
|animationDuration|number|-|In/Out fly animation duration (in milliseconds)|
|state|'initial'\|'valid'\|'invalid'|-||
|query|string|-||
|dataProvider|DataProvider|-||
|dataProviderErrorHandler|function|-||
|loading|boolean|-|@readonly|
|debounceMs|number|-||
|requiredMarker|string\|undefined|-||
|optionalMarker|string\|undefined|-||

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
|id|string|-||
|options|Array.<{label: string, value: any}>|-|Autocomplete options, the value must be unique|
|value|any|-|The current selected value or null if no value is selected|
|label|string|-|Label of this component|
|className|string\|undefined|-|A string containing any additional classes to apply to the component|
|style|string\|undefined|-|A string specifying custom style properties for the component|
|textIfNoResult|string|-|Text to show when the applied filter doesn't return any result|
|textIfInvalid|string|-|Text to show when the field is required but no value has been chosen|
|disabled|boolean|-|Control whether the component is disabled or not|
|tooltip|string\|undefined|-|UIkit tooltip|
|placeholder|string\|undefined|-|Input placeholder|
|optional|boolean|-||
|ref|HTMLDivElement|-|Reference to the div that wraps this component|
|autocapitalize|string\|undefined|-|Autocapitalize setting of the input tag|
|autocomplete|string\|undefined|-|Autocomplete setting of the input tag|
|autocorrect|string\|undefined|-|Autocorrect setting of the input tag|
|spellcheck|string\|undefined|-||
|animationDuration|number|-|In/Out fly animation duration (in milliseconds)|
|state|'initial'\|'valid'\|'invalid'|-||
|requiredMarker|string\|undefined|-||
|optionalMarker|string\|undefined|-||

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
|id|string|-||
|label|string|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|name|string\|undefined|-||
|textIfInvalid|string\|undefined|-||
|textIfValid|string\|undefined|-||
|helperText|string\|undefined|-||
|optional|boolean|-||
|value|boolean|-||
|ref|HTMLInputElement|-||
|disabled|boolean|-||
|tooltip|string\|undefined|-||
|requiredMarker|string\|undefined|-||
|optionalMarker|string\|undefined|-||
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
|id|string|-||
|label|string|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|name|string\|undefined|-||
|textIfInvalid|string\|undefined|-||
|textIfValid|string\|undefined|-||
|helperText|string\|undefined|-||
|placeholder|string|-||
|optional|boolean|-||
|value|string|-||
|ref|HTMLInputElement|-||
|disabled|boolean|-||
|tooltip|string\|undefined|-||
|min|string\|undefined|-||
|max|string\|undefined|-||
|autocapitalize|string\|undefined|-||
|autocomplete|string\|undefined|-||
|autocorrect|string\|undefined|-||
|spellcheck|string\|undefined|-||
|requiredMarker|string\|undefined|-||
|optionalMarker|string\|undefined|-||
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
|id|string|-||
|label|string|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|name|string\|undefined|-||
|textIfInvalid|string\|undefined|-||
|textIfValid|string\|undefined|-||
|helperText|string\|undefined|-||
|placeholder|string|-||
|optional|boolean|-||
|value|string|-||
|ref|HTMLInputElement|-||
|disabled|boolean|-||
|tooltip|string\|undefined|-||
|autocapitalize|string\|undefined|-||
|autocomplete|string\|undefined|-||
|autocorrect|string\|undefined|-|@default "off"|
|spellcheck|string\|undefined|-|@default "off"|
|requiredMarker|string\|undefined|-||
|optionalMarker|string\|undefined|-||
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
|requiredMarker|string\|undefined|-||
|optionalMarker|string\|undefined|-||

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
|id|string|-||
|decimalPlaces|number|-||
|inhibitDecimalSeparatorKey|boolean|-||
|label|string|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|textIfInvalid|string\|undefined|-||
|textIfValid|string\|undefined|-||
|helperText|string\|undefined|-||
|optional|boolean|-||
|value|string|-||
|min|string\|number|-||
|max|string\|number|-||
|ref|HTMLInputElement|-||
|disabled|boolean|-||
|tooltip|string\|undefined|-||
|icon|string\|undefined|-||
|iconPosition|'left'\|'right'|-||
|state|'initial'\|'valid'\|'invalid'|-||

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
|id|string|-||
|label|string|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|name|string\|undefined|-||
|textIfInvalid|string\|undefined|-||
|textIfValid|string\|undefined|-||
|helperText|string\|undefined|-||
|placeholder|string|-||
|optional|boolean|-||
|value|string|-||
|ref|HTMLInputElement|-||
|disabled|boolean|-||
|tooltip|string\|undefined|-||
|autocapitalize|string\|undefined|-||
|autocomplete|string\|undefined|-||
|autocorrect|string\|undefined|-||
|spellcheck|string\|undefined|-||
|requiredMarker|string\|undefined|-||
|optionalMarker|string\|undefined|-||
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
|id|string|-||
|label|string|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|name|string\|undefined|-||
|textIfInvalid|string\|undefined|-||
|textIfValid|string\|undefined|-||
|helperText|string\|undefined|-||
|placeholder|string|-||
|optional|boolean|-||
|value|string|-||
|ref|HTMLInputElement|-||
|min|number\|string|-||
|max|number\|string|-||
|step|number\|string|-||
|disabled|boolean|-||
|tooltip|string\|undefined|-||
|icon|string\|undefined|-||
|iconPosition|'left'\|'right'|-||
|autocapitalize|string\|undefined|-||
|autocomplete|string\|undefined|-||
|autocorrect|string\|undefined|-||
|spellcheck|string\|undefined|-||
|requiredMarker|string\|undefined|-||
|optionalMarker|string\|undefined|-||
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
|id|string|-||
|label|string|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|name|string\|undefined|-||
|textIfInvalid|string\|undefined|-||
|textIfValid|string\|undefined|-||
|helperText|string\|undefined|-||
|placeholder|string|-||
|optional|boolean|-||
|value|string|-||
|ref|HTMLInputElement|-||
|disabled|boolean|-||
|tooltip|string\|undefined|-||
|autocapitalize|string\|undefined|-|@default "off"|
|autocomplete|string\|undefined|-||
|autocorrect|string\|undefined|-|@default "off"|
|spellcheck|string\|undefined|-|@default "off"|
|minlength|number\|undefined|-||
|maxlength|string\|undefined|-||
|requiredMarker|string\|undefined|-||
|optionalMarker|string\|undefined|-||
|state|'initial'\|'valid'\|'invalid'|-||

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
|id|string|-||
|label|string|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|name|string\|undefined|-||
|textIfInvalid|string\|undefined|-||
|textIfValid|string\|undefined|-||
|helperText|string\|undefined|-||
|placeholder|string|-||
|optional|boolean|-||
|value|string|-||
|ref|HTMLInputElement|-||
|disabled|boolean|-||
|tooltip|string\|undefined|-||
|autocapitalize|string\|undefined|-|@default "off"|
|autocomplete|string\|undefined|-||
|autocorrect|string\|undefined|-|@default "off"|
|spellcheck|string\|undefined|-|@default "off"|
|minlength|number\|undefined|-||
|maxlength|string\|undefined|-||
|requiredMarker|string\|undefined|-||
|optionalMarker|string\|undefined|-||
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
|autocapitalize|string\|undefined|-||
|autocomplete|string\|undefined|-||
|autocorrect|string\|undefined|-||
|spellcheck|string\|undefined|-||

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
|name|string\|undefined|-||
|value|any\|undefined|-||
|options|Array.<{value: any, label: string, disabled: (boolean\|undefined)}>|-||
|disabled|boolean|-||
|optional|boolean|-||
|tooltip|string\|undefined|-||
|ref|HTMLDivElement|-||
|size|undefined\|'small'\|'large'|-||
|className|string\|undefined|-||
|variant|'primary'\|'secondary'\|'danger'|"primary"|This property is used to style the button corresponding to the selected value with one of the base uikit classes for button appearance|
|style|string\|undefined|-|A string specifying custom style properties for the component|
|requiredMarker|string\|undefined|-||
|optionalMarker|string\|undefined|-||

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
|id|string|-||
|label|string|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|name|string\|undefined|-||
|textIfInvalid|string\|undefined|-||
|textIfValid|string\|undefined|-||
|helperText|string\|undefined|-||
|placeholder|string|-||
|optional|boolean|-||
|value|string|-||
|ref|HTMLInputElement|-||
|disabled|boolean|-||
|tooltip|string\|undefined|-||
|icon|string\|undefined|-||
|iconPosition|'left'\|'right'|-||
|inputmode|string\|undefined|-||
|pattern|string\|undefined|-||
|autocapitalize|string\|undefined|-||
|autocomplete|string\|undefined|-||
|autocorrect|string\|undefined|-||
|spellcheck|string\|undefined|-||
|minlength|number\|undefined|-||
|maxlength|string\|undefined|-||
|requiredMarker|string\|undefined|-||
|optionalMarker|string\|undefined|-||
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
|id|string|-||
|label|string|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|textIfInvalid|string\|undefined|-||
|textIfValid|string\|undefined|-||
|helperText|string\|undefined|-||
|placeholder|string|-||
|optional|boolean|-||
|value|any|-|Current value of the select. Setting it to undefined sets the selected index to 0, choosing the first option, whether it's disabled, the placeholder, or a valid option|
|options|Array.<{label: string, value: any, disabled: (boolean\|undefined)}>|-||
|ref|HTMLSelectElement|-||
|disabled|boolean|-||
|tooltip|string\|undefined|-||
|requiredMarker|string\|undefined|-||
|optionalMarker|string\|undefined|-||
|state|'initial'\|'valid'\|'invalid'|-||

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
|id|string|-||
|label|string|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|name|string\|undefined|-||
|textIfInvalid|string\|undefined|-||
|textIfValid|string\|undefined|-||
|helperText|string\|undefined|-||
|placeholder|string|-||
|optional|boolean|-||
|value|string|-||
|ref|HTMLInputElement|-||
|disabled|boolean|-||
|tooltip|string\|undefined|-||
|autocapitalize|string\|undefined|-||
|autocomplete|string\|undefined|-||
|autocorrect|string\|undefined|-||
|spellcheck|string\|undefined|-||
|minlength|number\|undefined|-||
|maxlength|string\|undefined|-||
|requiredMarker|string\|undefined|-||
|optionalMarker|string\|undefined|-||
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
|id|string|-||
|label|string|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|name|string\|undefined|-||
|textIfInvalid|string\|undefined|-||
|textIfValid|string\|undefined|-||
|helperText|string\|undefined|-||
|placeholder|string|-||
|optional|boolean|-||
|value|string|-||
|ref|HTMLInputElement|-||
|disabled|boolean|-||
|tooltip|string\|undefined|-||
|icon|string\|undefined|-||
|iconPosition|'left'\|'right'|-||
|inputmode|string\|undefined|-||
|pattern|string\|undefined|-||
|autocapitalize|string\|undefined|-||
|autocomplete|string\|undefined|-||
|autocorrect|string\|undefined|-||
|spellcheck|string\|undefined|-||
|minlength|number\|undefined|-||
|maxlength|string\|undefined|-||
|requiredMarker|string\|undefined|-||
|optionalMarker|string\|undefined|-||
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
|id|string|-||
|label|string|-||
|name|string\|undefined|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|textIfInvalid|string\|undefined|-||
|textIfValid|string\|undefined|-||
|helperText|string\|undefined|-||
|placeholder|string|-||
|optional|boolean|-||
|value|string|-||
|ref|HTMLTextAreaElement|-||
|rows|number|-||
|disabled|boolean|-||
|tooltip|string\|undefined|-||
|autocapitalize|string\|undefined|-||
|autocomplete|string\|undefined|-||
|autocorrect|string\|undefined|-||
|spellcheck|string\|undefined|-||
|minlength|number\|undefined|-||
|maxlength|string\|undefined|-||
|requiredMarker|string\|undefined|-||
|optionalMarker|string\|undefined|-||
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
|id|string|-||
|label|string|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|name|string\|undefined|-||
|textIfInvalid|string\|undefined|-||
|textIfValid|string\|undefined|-||
|helperText|string\|undefined|-||
|placeholder|string|-||
|optional|boolean|-||
|value|string|-||
|ref|HTMLInputElement|-||
|disabled|boolean|-||
|tooltip|string\|undefined|-||
|autocapitalize|string\|undefined|-||
|autocomplete|string\|undefined|-||
|autocorrect|string\|undefined|-||
|spellcheck|string\|undefined|-||
|requiredMarker|string\|undefined|-||
|optionalMarker|string\|undefined|-||
|state|'initial'\|'valid'\|'invalid'|-||

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
|id|string|-||
|label|string|-||
|style|string\|undefined|-|A string specifying custom style properties for the component|
|className|string\|undefined|-||
|name|string\|undefined|-||
|textIfInvalid|string\|undefined|-||
|textIfValid|string\|undefined|-||
|helperText|string\|undefined|-||
|placeholder|string|-||
|optional|boolean|-||
|value|string|-||
|ref|HTMLInputElement|-||
|disabled|boolean|-||
|tooltip|string\|undefined|-||
|autocapitalize|string\|undefined|-||
|autocomplete|string\|undefined|-||
|autocorrect|string\|undefined|-||
|spellcheck|string\|undefined|-||
|requiredMarker|string\|undefined|-||
|optionalMarker|string\|undefined|-||
|state|'initial'\|'valid'\|'invalid'|-||
