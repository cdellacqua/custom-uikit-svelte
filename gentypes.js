const path = require('path');
const fs = require('fs');
const components = require('./components-data.json');

let output = [
	...fs.readFileSync('./extra-types.d.ts').toString().split('\n'),
	`export class SvelteComponent {`,
	`\t$$prop_def: {};`,
	`\t$$slot_def: {};`,
	``,
	`\t$on(event: string, handler: (e: CustomEvent) => any): () => void;`,
	`}`,
];

components.forEach((component) => {
	let $$prop_def = [];
	let $on = "";

	component.exports.forEach((prop) => {
		$$prop_def.push(
			"\t\t/**",
		);

		if (prop.description !== undefined) {
			$$prop_def.push(
				`\t\t * ${prop.description.replace(/\n/g, '\n\t\t * ')}`,
			);
		}

		if (prop.default !== undefined) {
			$$prop_def.push(`\t\t * @default ${prop.default}`);
		}

		$$prop_def.push("\t\t */");
		$$prop_def.push(`\t\t${prop.name}${prop.default !== undefined || prop.readonly ? '?' : ''}: ${prop.type.replace(/\.</g, '<') || 'any'};`);
	});

	if (Object.keys(component.dispatch).length > 0) {
		$on = `$on(event: ${Object.keys(component.dispatch).map((name) => `'${name}'`).join('|')}, handler: (e: CustomEvent<${Object.keys(component.dispatch).map((name) => component.dispatch[name].type).join('|')}>) => any): () => void;`
	}

	output.push(`export class ${component.name} extends SvelteComponent {`);
	if ($$prop_def.length > 0) {
		output.push(
			`\t$$prop_def: {`,
			$$prop_def.join('\n'),
			"\t}"
		);
	}
	if ($on) {
		output.push(
			`\t${$on}`
		);
	}

	output.push(`}`);
});

fs.writeFileSync(path.join('dist', 'index.d.ts'), output.join('\n'));
