<script>
  import { createEventDispatcher } from "svelte";
  import UIkit from "uikit";

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
  export let index = 0;
  
  let switcherRef = undefined;
  const dispatch = createEventDispatcher();

  let externalAssignment = true;
  $: if (ref) {
    if (externalAssignment) {
      UIkit.switcher(ref).show(index);
    }
    externalAssignment = true;
  }

  function handleShow(e) {
    externalAssignment = false;
    index = [...switcherRef.children].indexOf(e.target);
    dispatch("show", index);
  }
</script>

<ul
  bind:this={ref}
  {style}
  class={className}
  class:uk-subnav={true}
  class:uk-subnav-pill={true}
  uk-switcher={switcher}>
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

<ul class="uk-switcher" on:show={handleShow} bind:this={switcherRef}>
  <slot />
</ul>
