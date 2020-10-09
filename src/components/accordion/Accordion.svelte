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
  
  function handleShow(e) {
    externalAssignment = false;
    index = [...ref.children].indexOf(e.target);
    dispatch("show", index);
  }
</script>

<ul class={className} on:show={handleShow} {style} bind:this={ref} uk-accordion="multiple: {multi}; collapsible: {collapsible}; duration: {duration}; active: {index}; transition: {transition}; animation: {animation}">
  <slot />
</ul>