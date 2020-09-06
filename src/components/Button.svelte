<script>
  import { getContext } from "svelte";
  import { readable } from "svelte/store";
  import Loader from "./Loader.svelte";

  export let className = "";
  /** @type {'button'|'submit'} */
  export let type = "button";
  export let disabled = false;
  export let loading = false;
  /** @type {'default'|'primary'|'secondary'|'danger'|'text'|'link'} */
  export let variant = type === "submit" ? "primary" : "secondary";
  export let icon = type === "submit" ? "newline" : "";
  /** @type {''|'small'|'large'} */
  export let size = "";
  export let tooltip = undefined;

  /** @type {import("svelte/store").Readable<'initial'|'invalid'|'loading'|'error'|'success'>} */
  const formState = getContext("form") || readable("initial");
</script>

<button
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
  uk-tooltip={tooltip}
  on:click>
  <slot />
  {#if loading || (type === 'submit' && $formState === 'loading')}
    <Loader className="uk-icon" ratio={0.4} />
  {:else if icon}
    <span class="uk-icon" uk-icon="icon: {icon}; ratio: .75" />
  {/if}
</button>
