<script>
  import UIkit from "uikit";

  /** @type {boolean} */
  export let animation = true;
  /** @type {boolean} */
  export let collapsible = true;
  /** @type {number} */
  export let duration = 200;
  /** @type {boolean} */
  export let multi = false;
  /** @type {number|false|number[]} */
  export let index = multi ? [] : false;
  /** @type {string} */
  export let transition = "ease";
  /** @type {HTMLUListElement} */
  export let ref = undefined;
  /** @type {string|undefined} */
  export let className = undefined;
  /** @type {string|undefined} */
  export let style = undefined;

  let externalAssignment = true;

  function react() {
    if (externalAssignment) {
      const sortedOpenIndices =
        index === false
          ? []
          : (Array.isArray(index) ? [...index] : [index]).sort();
      for (let i = 0, sortedI = 0; i < ref.children.length; i++) {
        if (
          sortedI < sortedOpenIndices.length &&
          i === sortedOpenIndices[sortedI]
        ) {
          if (!ref.children[i].classList.contains("uk-open")) {
            UIkit.accordion(ref).toggle(i);
          }
          sortedI++;
        } else {
          if (ref.children[i].classList.contains("uk-open")) {
            UIkit.accordion(ref).toggle(i);
          }
        }
      }
    }
    externalAssignment = true;
  }

  function toggleMulti() {
    if (multi && !Array.isArray(index)) {
      index = index === false ? [] : [index];
    } else if (!multi && Array.isArray(index)) {
      index = index[0] === undefined ? false : index[0];
    }
  }

  $: refPresent = Boolean(ref);
  $: index, refPresent && react();
  $: multi, toggleMulti();

  function handleToggle() {
    let newIndices = [...ref.children]
      .map((c, i) => ({
        isOpen: c.classList.contains("uk-open"),
        index: i,
      }))
      .filter(({ isOpen }) => isOpen)
      .map(({ index }) => index);
    if (multi) {
      if (
        typeof index !== typeof newIndices ||
        [...newIndices].sort().join(",") !== [...index].sort().join(",")
      ) {
        externalAssignment = false;
        index = newIndices;
      }
    } else {
      let newIndex = newIndices[0];
      if (newIndex === undefined) {
        newIndex = false;
      }
      if (newIndex !== index) {
        externalAssignment = false;
        index = newIndex;
      }
    }
  }

  function handleKeyToggle(e) {
    /** @type {HTMLElement} */
    const target = e.target;
    if (target.classList.contains("uk-accordion-title")) {
      const targetIndex = [...ref.children].indexOf(e.target.parentElement);
      if (targetIndex !== -1) {
        UIkit.accordion(ref).toggle(targetIndex);
      }
    }
  }
</script>

<ul
  class={className}
  on:show={handleToggle}
  on:hide={handleToggle}
  on:hide|stopPropagation
  on:show|stopPropagation
  on:hidden|stopPropagation
  on:shown|stopPropagation
  on:beforehide|stopPropagation
  on:beforeshow|stopPropagation
  on:keyup={(e) => ["Enter"].includes(e.code) && handleKeyToggle(e)}
  {style}
  bind:this={ref}
  uk-accordion="multiple: {multi}; collapsible: {collapsible}; duration: {duration}; transition: {transition}; animation: {animation}"
>
  <slot />
</ul>
