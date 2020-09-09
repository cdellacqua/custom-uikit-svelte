<script>
  export let activeIndex = false;
  export let animation = true;
  export let collapsible = true;
  export let duration = 200;
  export let multi = false;
  export let transition = "ease";
  export let ref = undefined;
  export let className = undefined;
  export let style = undefined;
</script>

<ul class={className} {style} bind:this={ref} uk-accordion="multiple: {multi}; collapsible: {collapsible}; duration: {duration}; active: {activeIndex}; transition: {transition}; animation: {animation}">
  <slot />
</ul>