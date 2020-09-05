export function createNativeEvent(eventName) {
	const e = new CustomEvent(eventName, {
		bubbles: true,
		cancelable: true,
	});
	return e;
}

export function dispatchNativeEvent(element, eventName) {
	element.dispatchEvent(createNativeEvent(eventName));
}
