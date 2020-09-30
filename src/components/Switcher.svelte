<script>
  import UIkit from "uikit";
  import { createEventDispatcher, onMount } from "svelte";

  export let switcher = "";
  /** 
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
	export let style = undefined;
  export let className = undefined;
  export let titles = [];
  export let htmlTitle = false;
  /** @type {HTMLUListElement} */
  export let ref = undefined;

  const dispatch = createEventDispatcher();

  onMount(() => {
    UIkit.util.on(ref, "show", function (e) {
      dispatch('show', e);
    });
  });
</script>

<ul bind:this={ref} {style} class={className} class:uk-subnav={true} class:uk-subnav-pill={true} uk-switcher={switcher}>
  {#each titles as title}
    <li>
			<!-- svelte-ignore a11y-missing-attribute -->
      <a role="button">
        {#if htmlTitle}
          {@html title}
        {:else}{title}{/if}
      </a>
    </li>
  {/each}
</ul>

<ul class="uk-switcher">
  <slot />
</ul>
