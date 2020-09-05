<script>
import { container } from "tsyringe";
import { HtmlService } from "../../services/html";


  export let id = container.resolve(HtmlService).generateId();
  export let label = undefined;
  export let value = undefined;
  /** @type {{value: any; label: string}[]} */
	export let options = [];
</script>

{#if label}<label class="uk-form-label" for={id}>{label}</label>{/if}
<ul class="uk-subnav uk-subnav-pill" {id}>
  {#each options as option}
    <li class:uk-active={option.value === value}>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a
        href="javascript:void(0)"
        on:click={() => (value = option.value)}>{option.label}</a>
    </li>
  {/each}
</ul>
