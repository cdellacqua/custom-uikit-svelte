export function createNativeEvent(eventName) {
	const e = new CustomEvent(eventName, {
		bubbles: true,
		cancelable: true,
	});
	return e;
}

export function dispatchCustomEvent(element, eventName, detail) {
	element.dispatchEvent(new CustomEvent(eventName, {
		bubbles: true,
		cancelable: true,
		composed: true,
		detail: detail,
	}));
}
