<script>
  import { sleep } from "../helpers/time";

import { Button, FormModal, TextInput, Modal } from "../main";
  let showModal = false;
  let showOther = false;
  let shownModal = false;
  async function handleSubmit() {
    await sleep(1000);
    showOther = true;
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
<FormModal bind:show={showOther} formSubmitAsync={() => sleep(5000)}>
  Example of stacked modal
  <div slot="footer">
    <Button type="submit">Submit</Button>
  </div>
</FormModal>