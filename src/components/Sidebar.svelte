<script>
import { HtmlService } from "../services/html";

  import Offcanvas from "./Offcanvas.svelte";
  export let id = HtmlService.generateId();
</script>

<Offcanvas {id}>
  <ul class="uk-nav uk-nav-default uk-nav-parent-icon" uk-nav="multiple: true">
    <li class="uk-nav-header">TITOLO</li>
  </ul>
</Offcanvas>
