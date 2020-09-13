const path = require('path');
const fs = require('fs');
const components = require('./components-data');

const docLines = [
	`# custom-uikit-svelte`,
	``,
	`Unofficial Svelte Component Library for the UIkit framework`,
	`&nbsp;`,
	`&nbsp;`,
	`Components`
];

for (const component of components) {
	docLines.push(
		`- [${component.name}](###${component.name})`,
	);
}

docLines.push(
	`&nbsp;`,
	`&nbsp;`,
);

for (const component of components) {
	docLines.push(
		`&nbsp;`,
		`&nbsp;`,
		`&nbsp;`,
		`## ${component.name}`,
		`${component.description || ''}`,
		`&nbsp;`,
		`&nbsp;`,
	);

	if (Object.keys(component.slots).length > 0) {
		docLines.push(
			`&nbsp;`,
			`### Slots`,
			`|name|description|`,
			`|--|--|`,
		);
		for (const name of Object.keys(component.slots)) {
			docLines.push(
				`|${name === 'default' ? '-' : name}|${component.slots[name].replace(/\n/g, ' ')}|`
			);
		}
	}
	if (Object.keys(component.dispatch).length > 0) {
		docLines.push(
			`&nbsp;`,
			`### Custom Events`,
			`|name|type|description|`,
			`|--|--|--|`,
		);
		for (const name of Object.keys(component.dispatch)) {
			docLines.push(
				`|${name}|${component.dispatch[name].type || 'any'}|${component.dispatch[name].description.replace(/\n/g, ' ')}|`
			);
		}
	}

	if (Object.keys(component.forward).length > 0) {
		docLines.push(
			`&nbsp;`,
			`### Forwarded Events`,
			`|name|source|`,
			`|--|--|`,
		);
		for (const name of Object.keys(component.forward)) {
			docLines.push(
				`|${name}|${component.forward[name]}|`
			);
		}
	}
	let firstProp = true;
	for (const block of component.exports) {
		if (firstProp) {
			firstProp = false;

			docLines.push(
				`&nbsp;`,
				`### Props`,
				`|name|type|default|description|`,
				`|--|--|--|--|`,
			);
		}
		docLines.push(
			`|${block.name}${block.readonly ? ' (readonly)' : ''}|${block.type.replace(/\|/g, '\\|')}|${block.default || '-'}|${(block.description || '').replace(/\n/g, ' ')}|`
		);
	}
}

fs.writeFileSync(path.join('README.md'), docLines.join('\n'));