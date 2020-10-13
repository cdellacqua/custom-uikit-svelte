<script>
import { Button, Modal } from "../main";
let showModal = false;
let shownModal = false;
let mounted = true;
function toggleMountState() {
  mounted = !mounted;
}
</script>

<Button on:click={() => showModal = true} disabled={showModal}>Show modal</Button>
<Button on:click={() => mounted = true} disabled={mounted}>Mount modal</Button>
<p>
  Status: {!showModal ? 'Closed' : 'Open'}
</p>
<p>
  Status (including animation time): {!shownModal ? 'Closed' : 'Open'}
</p>
{#if mounted}
  <Modal bind:show={showModal} bind:shown={shownModal}>
    Example!
    <div>
      A modal can safely be unmounted from the document
    </div>
    <Button on:click={() => toggleMountState()}>Unmount modal</Button>
  </Modal>
{/if}
