<script>

import { Button, DescriptionList } from "../main";

import { OrderableList } from "../main";

let items = [{
	props: { variant: 'primary'},
	text: 'Hello.',
	type: Button
}, {
	props: { list: [{ term: 'first', details: 'description one'}, { term: 'second', details: 'description two'},  { term: 'second', details: 'description two'},  { term: 'second', details: 'description two'},  { term: 'second', details: 'description two'}] },
	type: DescriptionList,
}, {
	text: "I'm just some plain text"
}];

</script>
<OrderableList {items} on:move={({detail}) => console.log('move', detail)} on:moved={({detail}) => console.log('moved', detail)}></OrderableList>