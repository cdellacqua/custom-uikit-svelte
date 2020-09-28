<script>
import UIKit from "uikit";

import { Alert, Button, Checkbox, Select } from "../main";

let variant = undefined;
let closable = false;
let ref;
let duration = 150;
function increaseDuration() {
  duration = Math.min(2500, duration + 50);
}
function decreaseDuration() {
  duration = Math.max(duration - 50, 50);
}

function showAlert() {
  document.querySelector('#demo-alert-wrapper').appendChild(ref);
  ref.hidden = false;
  ref.style.opacity = 1;
  ref.setAttribute('aria-hidden', false);
  UIKit.alert(ref);
}
</script>

<div class="uk-flex uk-flex-middle">
  <Select 
    options={[
      {label: "None", value: undefined}, 
      {label: "Primary", value: "primary"}, 
      {label: "Success", value: "success"}, 
      {label: "Danger", value: "danger"}, 
      {label: "Warning", value: "warning"}]
    } 
    bind:value={variant}
    label="Variant"
    className="uk-margin-right"
  />
  <Checkbox
    bind:value={closable}
    label="Closable"
    optional
    className="uk-margin-right uk-margin-remove-bottom"
  />
  <Button type="button" size="small" on:click={increaseDuration} className="uk-margin-right">
    + duration
  </Button>
  <Button type="button" size="small" on:click={decreaseDuration} className="uk-margin-right">- duration</Button>
  <Button type="button" on:click={showAlert} size="small" variant="secondary">Show again</Button>
</div>
<div id="demo-alert-wrapper">
  <Alert bind:ref {variant} {closable} animationDuration={duration}>
    This is an alert
  </Alert>
</div>
