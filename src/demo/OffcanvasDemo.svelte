<script>
  import { Offcanvas, Button } from "../main";
  let status = [];

  let showSidebar = false;
  function handleOffcanvasEvent(eventName) {
    status = [...status, eventName];
  }
  const menu = [
    {
      href: "/#_1",
      label: "Link 1",
    },
    {
      href: "/#_2",
      label: "Link 2",
    },
    {
      href: "/#_3",
      label: "Link 3",
    },
  ];

  let mounted = true;
</script>

{#if mounted}
  <Offcanvas
    bind:show={showSidebar}
    on:show={() => handleOffcanvasEvent('show')}
    on:hide={() => handleOffcanvasEvent('hide')}
    on:shown={() => handleOffcanvasEvent('shown')}
    on:hidden={() => handleOffcanvasEvent('hidden')}>
    <ul class="uk-nav uk-nav-default sidebar-list">
      <li class="uk-nav-header" />
      {#each menu as item}
        <li class="uk-nav-header">
          <a
            href={item.href}
            on:click={() => (showSidebar = false)}>{item.label}</a>
        </li>
      {/each}
      <!-- svelte-ignore a11y-missing-attribute -->
      <li><a role="button" tabindex="0" on:keyup={(e) => ['Enter'].includes(e.code) && (mounted = false)} on:click={() => (mounted = false)}>Unmount</a></li>
    </ul>
  </Offcanvas>
{/if}
<Button on:click={() => (showSidebar = !showSidebar)}>
  Show offcanvas
</Button>
<Button on:click={() => (mounted = true)} disabled={mounted}>
  Mount offcanvas
</Button>
<div>
  {@html status.join('<br />')}
</div>
