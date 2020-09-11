<script>
import { createEventDispatcher } from "svelte";

  import { generateId } from "../../services/html";

  export let id = generateId();
  export let label = undefined;
  export let value = undefined;
  /** @type {{value: any; label: string}[]} */
  export let options = [];
  export let disabled = false;
  export let tooltip = undefined;
  export let ref = undefined;

  const dispatch = createEventDispatcher();
</script>

<style>
  .disabled {
    opacity: 0.7;
  }
</style>

<div class="uk-margin-bottom">
  {#if label}
    <label class="uk-form-label" class:disabled for={id}>{label}</label>
  {/if}
  <div {id} class:disabled uk-tooltip={tooltip} bind:this={ref}>
    {#each options as option}
      <button
        bind:this={ref}
        disabled={disabled}
        class:uk-button-default={option.value !== value}
        class:uk-button-primary={option.value === value}
        class:uk-button-small={true}
        class:uk-button={true}
        type="button"
        on:click={() => {
          if (!disabled && value !== option.value) {
            value = option.value;
            dispatch('change', value);
          }
        }}>
        {option.label}
      </button>
    {/each}
  </div>
</div>