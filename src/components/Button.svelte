<script>
  import { getContext } from "svelte";
  import { readable } from "svelte/store";
  import Loader from "./Loader.svelte";

  /**
   * @component This component represents a general purpose button, which can be customized according to its usage 
   * @slot {"default": "The content of the button"}
   * @dispatch {}
   * @forward {"click": "HTMLButtonElement"} */

  /** 
	 * @description A string containing any additional classes to apply to the component
	 * @type {string|undefined} */
  export let className = undefined;
  /** 
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
   export let style = undefined;
  /** 
   * @description The type property of the native HTML button
   * @type {'button'|'submit'} */
  export let type = "button";
  /**
   * @description The disabled property of the native HTML button
   * @type {boolean} */
  export let disabled = false;
  /**
   * @description Whether the button has been used to retrieve some content that is still being loaded. If true, an icon with a spinner will appear next to the text and the button will also be temporarily disabled
   * @type {boolean} */
  export let loading = false;
  /** 
   * @description This property is used to style the button with one of the base uikit classes for button appearance
   * @type {'default'|'primary'|'secondary'|'danger'|'text'|'link'} */
  export let variant = type === "submit" ? "primary" : "default";
  /**
   * @description If present, the uikit icon with the given name will be added next to the text of the button
   * @type {string|undefined} */
  export let icon = type === "submit" ? "newline" : undefined;
  /** 
   * @description Specifies the size of the button. If undefined, the button will be of regular size
   * @type {undefined|'small'|'large'} */
  export let size = undefined;
  /**
   * @description Specifies the uk-tooltip attribute. If undefined, no tooltip will be added to the button
   * @type {string|undefined} */
  export let tooltip = undefined;
  /** 
	 * @readonly
	 * @description The HTML reference of the component
	 * @type {HTMLButtonElement} */
  export let ref = undefined;

  /** @type {Readable<'initial'|'invalid'|'loading'|'error'|'success'>} */
  const formState = getContext("form") || readable("initial");
</script>

<button
  bind:this={ref}
  disabled={disabled || loading || (type === 'submit' && ['loading'].includes($formState))}
  class:uk-button-default={variant === 'default'}
  class:uk-button-primary={variant === 'primary'}
  class:uk-button-secondary={variant === 'secondary'}
  class:uk-button-danger={variant === 'danger'}
  class:uk-button-text={variant === 'text'}
  class:uk-button-link={variant === 'link'}
  class:uk-button-small={size === 'small'}
  class:uk-button-large={size === 'large'}
  class:uk-button={true}
  class={className}
  {type}
  {style}
  uk-tooltip={tooltip}
  on:click>
  <slot />
  {#if loading || (type === 'submit' && $formState === 'loading')}
    <Loader className="uk-icon" ratio={0.4} />
  {:else if icon}
    <span class="uk-icon" uk-icon="icon: {icon}; ratio: .75" />
  {/if}
</button>
