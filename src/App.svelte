<script>
	import Page1 from "./Page1.svelte";
	import Page2 from "./Page2.svelte";
	import Page3 from "./Page3.svelte";
	import Page4 from "./Page4.svelte";
	import Page5 from "./Page5.svelte";
	import { globalOptionalMarker } from './main';

	// Example: you can replace the default optional marker for all fields
	$globalOptionalMarker = '(optional)';
</script>
<Page1 />
<Page2 />
<Page3 />
<Page4 />
<Page5 />