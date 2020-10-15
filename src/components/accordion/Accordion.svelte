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
  
  function handleEvent(e) {
    if (name === 'show' || name === 'hide') {
      externalAssignment = false;
      index = [...ref.children].findIndex((c) => c.classList.contains('uk-open'));
      if (index === -1) {
        index = false;
      }
    }
    dispatch(name, index);
  }
</script>

<ul class={className}
  on:show={(e) => handleEvent(e, 'show')}
  on:hide|stopPropagation={(e) => handleEvent(e, 'hide')}
  on:show|stopPropagation={(e) => handleEvent(e, 'show')}
  on:hidden|stopPropagation={(e) => handleEvent(e, 'hidden')}
  on:shown|stopPropagation={(e) => handleEvent(e, 'shown')}
  on:beforehide|stopPropagation={(e) => handleEvent(e, 'beforehide')}
  on:beforeshow|stopPropagation={(e) => handleEvent(e, 'beforeshow')}
  {style} bind:this={ref} uk-accordion="multiple: {multi}; collapsible: {collapsible}; duration: {duration}; active: {index}; transition: {transition}; animation: {animation}">
  <slot />
</ul>