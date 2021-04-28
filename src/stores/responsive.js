import { derived, readable } from 'svelte/store';

export const windowSize = readable({
	width: window.innerWidth,
	height: window.innerHeight,
}, (set) => {
	let previousWidth = null;
	let previousHeight = null;
	let timeout = 0;
	function update() {
		if (timeout) {
			cancelAnimationFrame(timeout);
		}
		timeout = requestAnimationFrame(() => {
			if (previousWidth !== window.innerWidth || previousHeight !== window.innerHeight) {
				previousWidth = window.innerWidth;
				previousHeight = window.innerHeight;
				set({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			}
		});
	}
	window.addEventListener('resize', update);
	return () => {
		window.removeEventListener('resize', update);
	};
});

export const innerWidth = derived(windowSize, ($windowSize) => $windowSize.width);

export const innerHeight = derived(windowSize, ($windowSize) => $windowSize.height);

export const windowScroll = readable({
	x: window.scrollX,
	y: window.scrollY,
}, (set) => {
	let previousX = null;
	let previousY = null;
	let timeout = 0;
	function update() {
		if (timeout) {
			cancelAnimationFrame(timeout);
		}
		timeout = requestAnimationFrame(() => {
			if (previousX !== window.scrollX || previousY !== window.scrollY) {
				previousX = window.scrollX;
				previousY = window.scrollY;
				set({
					x: window.scrollX,
					y: window.scrollY,
				});
			}
		});
	}
	window.addEventListener('scroll', update);
	return () => {
		window.removeEventListener('scroll', update);
	};
});

export const scrollX = derived(windowScroll, ($windowScroll) => $windowScroll.x);

export const scrollY = derived(windowScroll, ($windowScroll) => $windowScroll.y);

export const Size = {
	xs: 0,
	s: 1,
	m: 2,
	l: 3,
	xl: 4,
};

function getBreakpoints() {
	const documentComputedStyle = getComputedStyle(document.documentElement);
	return {
		[Size.xs]: 0,
		[Size.s]: Number(documentComputedStyle
			.getPropertyValue('--uk-breakpoint-s').slice(0, -2)),
		[Size.m]: Number(documentComputedStyle
			.getPropertyValue('--uk-breakpoint-m').slice(0, -2)),
		[Size.l]: Number(documentComputedStyle
			.getPropertyValue('--uk-breakpoint-l').slice(0, -2)),
		[Size.xl]: Number(documentComputedStyle
			.getPropertyValue('--uk-breakpoint-xl').slice(0, -2)),
	};
}

export const breakpoints = readable(getBreakpoints(), (set) => {
	function update() {
		set(getBreakpoints());
	}

	window.addEventListener('load', update);

	return () => {
		window.removeEventListener('load', update);
	};
});

export const size = derived([innerWidth, breakpoints], ([$innerWidth, $breakpoints]) => {
	if ($innerWidth >= $breakpoints[Size.xl]) {
		return Size.xl;
	}
	if ($innerWidth >= $breakpoints[Size.l]) {
		return Size.l;
	}
	if ($innerWidth >= $breakpoints[Size.m]) {
		return Size.m;
	}
	if ($innerWidth >= $breakpoints[Size.s]) {
		return Size.s;
	}
	return Size.xs;
});
