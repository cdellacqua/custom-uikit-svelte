<script>
  import { setContext } from "svelte";
  import { readable } from "svelte/store";
  import { noop } from "../helpers/lambdas";

  /**
   * @callback FormSubmitCallback
   * @return {Promise}
   */

  /** @type {FormSubmitCallback} */
  export let submitAsync;
  /** @type {boolean} */
  export let disabled = false;
  /** @type {'initial'|'invalid'|'valid'|'loading'|'error'|'success'} */
  export let state = "initial";
  /**
   * @description Indicates the validity of this form. Its value is updated using formRef.checkValdity(), that gets called
   * each time an element inside this form triggers a bubbling 'change' event
   * @type {boolean} @readonly */
  export let valid = true;
  /** @type {HTMLFormElement} */
  export let ref = undefined;
  /** 
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
  export let style = undefined;
  /** @type {string|undefined} */
  export let className = undefined;
  /** @type {'stacked'|'horizontal'} */
  export let variant = "stacked";

  async function handleSubmit() {
    if (submitAsync) {
      setState("loading");
      try {
        await submitAsync();
        setState("success");
      } catch (err) {
        setState("error");
        throw err;
      }
    }
  }

  let setState = noop;
  /** @type {Readable<'initial'|'invalid'|'valid'|'loading'|'error'|'success'>} */
  let stateStore = readable("initial", (set) => {
    setState = (state) => {
      set(state);
    };
    return () => {
      setState = noop;
    };
  });

  setContext("form", stateStore);

  $: {
    state = $stateStore;
  }

  $: if (!valid) {
    setState("invalid");
  } else {
    setState("valid");
  }
</script>

<style>
  .disabled {
    pointer-events: none;
  }

  form {
    display: block;
  }
</style>

<form
  {style}
  class={className}
  class:uk-form-horizontal={variant === 'horizontal'}
  class:uk-form-stacked={variant === 'stacked'}
  bind:this={ref}
  on:change={() => (valid = ref.checkValidity())}
  on:submit|preventDefault={handleSubmit}
  class:disabled={state === 'loading' || disabled}>
  <slot />
</form>
