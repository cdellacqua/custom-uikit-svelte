<script>
  import { createEventDispatcher } from "svelte";
  import UIkit from "uikit";

  /** @type {string} */
  export let switcher = "";
  /**
   * @description A string specifying custom style properties for the component
   * @type {string|undefined} */
  export let style = undefined;
  /** @type {string|undefined} */
  export let className = undefined;
  /** @type {Array.<string>} */
  export let titles = [];
  /** @type {boolean} */
  export let htmlTitle = false;
  /** @type {HTMLUListElement} */
  export let ref = undefined;
  /** @type {number} */
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

<ul class="uk-switcher"
  on:show={handleShow}
  on:show|stopPropagation
  on:hide|stopPropagation
  on:shown|stopPropagation
  on:hidden|stopPropagation
  on:beforeshow|stopPropagation
  on:beforehide|stopPropagation
  bind:this={switcherRef}>
  <slot />
</ul>
