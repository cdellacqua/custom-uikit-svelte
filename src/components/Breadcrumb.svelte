<script>
  /** 
   * @component A breadcrumb can be added to the page to help the user find where they are in the website and easily go back and forth between pages 
   * @slot {} 
   * @dispatch {}
   * @forward {} */

  /** 
   * @default []
   * @description An array containing the various steps composing the path of the current page. Each step should have an href property, 
   * which is the URL to which the user will be redirected, and a label property, which is displayed. The last element of the array represents the
   * current page and its href property will be ignored
   * @type {Array<{href: string, label: string}>} */
  export let path = [];
  /** 
   * @default undefined
	 * @description A string containing any additional classes to apply to the component
	 * @type {string|undefined} */
	export let className = undefined;
	/** 
   * @default undefined
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
  export let style = undefined;
  /** 
   * @default undefined
	 * @readonly
	 * @description The HTML reference of the component
	 * @type {HTMLUListElement} */
  export let ref = undefined;
</script>

<ul
  bind:this={ref}
  {style}
  class="uk-margin-small-left uk-margin-small-top uk-margin-small-bottom
    uk-breadcrumb {className ? className : ""}">
  {#each path.slice(0, -1) as entry (entry)}
    <li><a href={entry.href}>{entry.label}</a></li>
  {/each}
  {#if path.length > 0}
    <li><span>{path[path.length - 1].label}</span></li>
  {/if}
</ul>
