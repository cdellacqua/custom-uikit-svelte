<script>
import { Button, FormModal, TextInput, Modal } from "../main";
  let showModal = false;
  let showOther = false;
  let shownModal = false;
  async function handleSubmit() {
    await new Promise(res => setTimeout(res, 1000));
    showOther = true;
    await new Promise(res => setTimeout(res, 5000));
    showOther = false;
    showModal = false;
  }
</script>

<Button on:click={() => (showModal = true)} disabled={showModal}>
  Show modal
</Button>
<p>Status: {!showModal ? 'Closed' : 'Open'}</p>
<p>Status (including animation time): {!shownModal ? 'Closed' : 'Open'}</p>
<FormModal bind:show={showModal} bind:shown={shownModal} formSubmitAsync={handleSubmit}>
  <TextInput placeholder="I'm required"></TextInput>
  <div slot="footer">
    <Button type="submit">Submit</Button>
  </div>
</FormModal>
<Modal bind:show={showOther} stack>
  Example of stacked modal
</Modal>