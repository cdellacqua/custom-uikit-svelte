<script>
  import { createEventDispatcher } from "svelte";

  import UIkit from "uikit";


  /** @type {string} */
  export let connect = "~.uk-switcher";
  /** @type {string} */
  export let toggle = "> *";
  /** @type {string|false} */
  export let animation = false;
  /** @type {number} */
  export let duration = 200;
  /** @type {boolean} */
  export let swiping = true;
  /** @type {number|string} */
  export let media = 200;
  /** 
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
	export let style = undefined;
  /** @type {string|undefined} */
  export let className = undefined;
  /** @type {Array<string>} */
  export let titles = [];
  /** @type {boolean} */
  export let htmlTitle = false;
  /** @type {HTMLDivElement} */
  export let ref = undefined;
  /** @type {number} */
  export let index = 0;  
  
  let switcherRef = undefined;
  let externalAssignment = true;
  $: if (ref) {
    if (externalAssignment) {
      UIkit.tab(ref).show(index);
    }
    externalAssignment = true;
  }

  const dispatch = createEventDispatcher();

  function handleShow(e) {
    externalAssignment = false;
    index = [...switcherRef.children].indexOf(e.target);
  }
</script>

<ul bind:this={ref} {style} class={className}
uk-tab={`connect: ${connect}; toggle: ${toggle}; animation: ${animation}; duration: ${duration}; swiping: ${swiping}; media: ${media}`}>
  {#each titles as title, i (title)}
    <li>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a role="button" tabindex="0" on:keyup={(e) => ['Enter'].includes(e.code) && (externalAssignment = false, index = i, UIkit.switcher(ref).show(index))}>
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