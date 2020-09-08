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

{#if label}
  <label class="uk-form-label" class:disabled for={id}>{label}</label>
{/if}
<ul class="uk-subnav uk-subnav-pill" {id} class:disabled uk-tooltip={tooltip} bind:this={ref}>
  {#each options as option}
    <li class:uk-active={option.value === value}>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a
        on:click={() => {
          if (!disabled && value !== option.value) {
            value = option.value;
            dispatch('change', value);
          }
        }}>{option.label}</a>
    </li>
  {/each}
</ul>
