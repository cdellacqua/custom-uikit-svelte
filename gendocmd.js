const path = require('path');
const fs = require('fs');
const components = require('./components-data.json');

const docLines = `# custom-uikit-svelte

Unofficial Svelte Component Library for the UIkit framework

&nbsp;
### Install from npm

\`\`\`npm i custom-uikit-svelte\`\`\`

You can find the published package [here](https://www.npmjs.com/package/custom-uikit-svelte)

&nbsp;

### Demo with examples

The demo included in this repo shows some components in action with examples

You can have a look at it here: [custom-uikit-svelte demo](https://cdellacqua.github.io/custom-uikit-svelte/)

The demo files can be found in [src/](https://github.com/cdellacqua/custom-uikit-svelte/blob/master/src/)

&nbsp;

Components`.split('\n');

for (const component of components) {
	docLines.push(
		`- [${component.name}](#${component.name.toLowerCase()})`,
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
		docLines.push('');
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
		}docLines.push('');
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
		docLines.push('');
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
	docLines.push('');
}

docLines.push(
	`&nbsp;`,
	`## Special Types`,
	``,
	``,
	'```typescript',
	...fs.readFileSync('./extra-types.d.ts').toString().split('\n'),
	'```'
)

fs.writeFileSync(path.join('README.md'), docLines.join('\n'));
