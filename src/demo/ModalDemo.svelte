<script>
import { Button, Modal } from "../main";
let showModal = false;
let shownModal = false;
</script>

<Button on:click={() => showModal = true} disabled={showModal}>Show modal</Button>
<p>
  Status: {!showModal ? 'Closed' : 'Open'}
</p>
<p>
  Status (including animation time): {!shownModal ? 'Closed' : 'Open'}
</p>
<Modal bind:show={showModal} bind:shown={shownModal}>
  Example!
</Modal>