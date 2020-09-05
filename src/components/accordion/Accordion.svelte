<script>
  export let activeIndex = false;
  export let duration = 200;
  export let multi = false;
  export let collapsible = true;
</script>

<ul uk-accordion="multiple: {multi}; collapsible: {collapsible}; duration: {duration}; active: {activeIndex}">
  <slot />
</ul>