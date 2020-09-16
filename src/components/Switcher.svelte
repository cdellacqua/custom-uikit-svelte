<script>
  export let switcher = "";
  export let className = undefined;
  export let titles = [];
  export let htmlTitle = false;
</script>

<ul class={className} class:uk-subnav={true} class:uk-subnav-pill={true} uk-switcher={switcher}>
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
