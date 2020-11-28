<script>
import { Button, Modal } from "../main";
let showModal = false;
let shownModal = false;
let mounted = true;
let fullScreen = false;
function toggleMountState() {
  mounted = !mounted;
}
</script>

<Button on:click={() => showModal = true} disabled={showModal}>Show modal</Button>
<Button on:click={() => fullScreen = !fullScreen} disabled={showModal}>Toggle fullScreen ({fullScreen ? 'on' : 'off'})</Button>
<Button on:click={() => mounted = true} disabled={mounted}>Mount modal</Button>
<p>
  Status: {!showModal ? 'Closed' : 'Open'}
</p>
<p>
  Status (including animation time): {!shownModal ? 'Closed' : 'Open'}
</p>
{#if mounted}
  <Modal bind:show={showModal} bind:shown={shownModal} {fullScreen} title="Example">
    Example!
    <div>
      A modal can safely be unmounted from the document
    </div>
    <Button on:click={() => toggleMountState()}>Unmount modal</Button>
    <div slot="footer">
      footer
    </div>
  </Modal>
{/if}
