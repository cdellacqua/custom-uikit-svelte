<script>
import { Button, FormModal, TextInput } from "../main";
  let showModal = false;
  let shownModal = false;
</script>

<Button on:click={() => (showModal = true)} disabled={showModal}>
  Show modal
</Button>
<p>Status: {!showModal ? 'Closed' : 'Open'}</p>
<p>Status (including animation time): {!shownModal ? 'Closed' : 'Open'}</p>
<FormModal bind:show={showModal} bind:shown={shownModal} formSubmitAsync={() => showModal = false}>
  <TextInput placeholder="I'm required"></TextInput>
  <div slot="footer">
    <Button type="submit">Submit</Button>
  </div>
</FormModal>
