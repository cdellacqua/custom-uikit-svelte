import { writable } from 'svelte/store';

export const globalRequiredMarker = writable('*');
export const globalOptionalMarker = writable('');
