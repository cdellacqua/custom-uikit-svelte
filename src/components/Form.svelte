<script>
  import { setContext } from "svelte";
  import { readable } from "svelte/store";
  import { noop } from "../helpers/lambdas";

  export let submitAsync;
  export let disabled = false;
  /** @type {'initial'|'invalid'|'valid'|'loading'|'error'|'success'} */
  export let state = "initial";
  export let valid = true;
  export let ref = undefined;
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

  /** @type {(state: 'initial'|'invalid'|'valid'|'loading'|'error'|'success') => void} */
  let setState = noop;
  /** @type {import("svelte/store").Readable<'initial'|'invalid'|'valid'|'loading'|'error'|'success'>} */
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
    opacity: 0.8;
  }

  form {
    display: block;
  }
</style>

<form
  class={className}
  class:uk-form-horizontal={variant === 'horizontal'}
  class:uk-form-stacked={variant === 'stacked'}
  bind:this={ref}
  on:change={() => (valid = ref.checkValidity())}
  on:submit|preventDefault={valid ? handleSubmit : noop}
  class:disabled={state === 'loading' || disabled}>
  <slot />
</form>
