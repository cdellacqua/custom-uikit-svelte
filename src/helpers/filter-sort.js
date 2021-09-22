import leven from 'leven';

function matchDistance(str, search) {
	const levenDst = leven(str, search);
	const compensation = -Math.max(0, str.length - search.length);
	return levenDst + compensation;
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
		.sort((a, b) => {
			if (a.distance - b.distance === 0) {
				const aHasSubstring = a.value.indexOf(search) !== -1;
				const bHasSubstring = b.value.indexOf(search) !== -1;
				if (aHasSubstring && !bHasSubstring) {
					return -1
				}
				if (!aHasSubstring && bHasSubstring) {
					return 1;
				}
				return a.value.localeCompare(b.value);
			}
			return a.distance - b.distance;
		});
	const filteredAndSorted = new Array(distances.length);
	for (let i = 0; i < distances.length; i++) {
		filteredAndSorted[i] = objects[distances[i].index];
	}

	return filteredAndSorted;
}
