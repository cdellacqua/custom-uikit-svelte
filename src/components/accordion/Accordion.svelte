<script>
  import { createEventDispatcher } from "svelte";
  import UIkit from 'uikit';

  /** @type {number|false} */
  export let index = false;
  /** @type {boolean} */
  export let animation = true;
  /** @type {boolean} */
  export let collapsible = true;
  /** @type {number} */
  export let duration = 200;
  /** @type {boolean} */
  export let multi = false;
  /** @type {string} */
  export let transition = "ease";
  /** @type {HTMLUListElement} */
  export let ref = undefined;
  /** @type {string|undefined} */
  export let className = undefined;
  /** @type {string|undefined} */
  export let style = undefined;

  const dispatch = createEventDispatcher();

  let externalAssignment = true;
  $: if (ref) {
    if (externalAssignment) {
      if (index !== false) {
        UIkit.accordion(ref).toggle(index);
      }
    }
    externalAssignment = true;
  }
  
  function handleToggle() {
    externalAssignment = false;
    index = [...ref.children].findIndex((c) => c.classList.contains('uk-open'));
    if (index === -1) {
      index = false;
    }
  }
</script>

<ul class={className}
  on:show={handleToggle}
  on:hide={handleToggle}
  on:hide|stopPropagation
  on:show|stopPropagation
  on:hidden|stopPropagation
  on:shown|stopPropagation
  on:beforehide|stopPropagation
  on:beforeshow|stopPropagation
  {style} bind:this={ref} uk-accordion="multiple: {multi}; collapsible: {collapsible}; duration: {duration}; active: {index}; transition: {transition}; animation: {animation}">
  <slot />
</ul>