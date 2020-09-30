import leven from 'leven';

function matchDistance(str, search) {
	return leven(str, search) - Math.max(0, str.length - search.length);
}

/**
 * @template T
 * @param {string} search 
 * @param {T[]} objects 
 * @param {(o: T) => string} stringExtractor 
 */
export function filterAndSort(search, objects, stringExtractor) {
	const searchLower = search.toLowerCase();
	const distances = objects.map((o, index) => ({
		distance: matchDistance(stringExtractor(o).toLowerCase(), searchLower),
		index,
		value: stringExtractor(o).toLowerCase(),
	}))
		.filter((d) => d.distance < d.value.length)
		.sort((a, b) => a.distance - b.distance);
	const filteredAndSorted = new Array(distances.length);
	for (let i = 0; i < distances.length; i++) {
		filteredAndSorted[i] = objects[distances[i].index];
	}

	return filteredAndSorted;
}