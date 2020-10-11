<script>
import { Button, FormModal, TextInput } from "../main";
  let showModal = false;
  let shownModal = false;
  async function handleSubmit() {
    await new Promise(res => setTimeout(res, 10000));
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
