const path = require('path');
const fs = require('fs');
const components = require('./components-data');

const demoFiles = fs.readdirSync(path.join('src', 'demo'));

const docLines = [
	`<script>`,
	`\timport { ${components.map((c) => c.name).join(', ')} } from "./main";`
];

for (const entry of demoFiles) {
	docLines.push(
		`\timport ${entry.match(/([^/]+).svelte/)[1]} from './demo/${entry}';`,
	);
}
docLines.push(`</script>`);

docLines.push(
	`<div uk-grid class="uk-flex-center uk-padding-small">`,
	`\t<div class="uk-width-3-5@l uk-width-2-3@m uk-width-5-6@s uk-width-1-1">`,
);

for (const component of components) {
	docLines.push(
		`<h2 class="uk-heading-divider">${component.name}</h2>`,
		`<p>${component.description || ''}</p>`,
	);

	const demoFile = demoFiles.find(entry => entry.endsWith(component.name + 'Demo.svelte'));
	if (demoFile) {
		docLines.push(
			`\t\t<${demoFile.match(/([^/]+).svelte/)[1]} />`,
			`\t<hr class="uk-divider-icon">`,
		);
	}

	if (Object.keys(component.slots).length > 0) {
		docLines.push(
			`<h3>Slots</h3>`,
			`<table class="uk-table">`,
			`\t<thead>`,
			`\t\t<tr>`,
			`\t\t\t<th>name</th>`,
			`\t\t\t<th>description</th>`,
			`\t\t</tr>`,
			`\t</thead>`,
			`\t<tbody>`,
		);
		for (const name of Object.keys(component.slots)) {
			docLines.push(
				`\t\t<tr>`,
				`\t\t\t<td>${name === 'default' ? '-' : name}</td>`,
				`\t\t\t<td>${component.slots[name]}</td>`,
				`\t\t</tr>`,
			);
		}
		docLines.push(
			`\t</tbody>`,
			`</table>`,
		);
	}
	if (Object.keys(component.dispatch).length > 0) {
		docLines.push(
			`<h3>Custom Events</h3>`,
			`<table class="uk-table">`,
			`\t<thead>`,
			`\t\t<tr>`,
			`\t\t\t<th>name</th>`,
			`\t\t\t<th>description</th>`,
			`\t\t\t<th>type</th>`,
			`\t\t</tr>`,
			`\t</thead>`,
			`\t<tbody>`,
		);
		for (const name of Object.keys(component.dispatch)) {
			docLines.push(
				`\t\t<tr>`,
				`\t\t\t<td>${name}</td>`,
				`\t\t\t<td>${component.dispatch[name].description}</td>`,
				`\t\t\t<td>${(component.dispatch[name].type || 'any').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/{/g, '&lbrace;').replace(/}/g, '&rbrace;')}</td>`,
				`\t\t</tr>`,
			);
		}
		docLines.push(
			`\t</tbody>`,
			`</table>`,
		);
	}

	if (Object.keys(component.forward).length > 0) {
		docLines.push(
			`<h3>Forwarded Events</h3>`,
			`<table class="uk-table">`,
			`\t<thead>`,
			`\t\t<tr>`,
			`\t\t\t<th>name</th>`,
			`\t\t\t<th>source</th>`,
			`\t\t</tr>`,
			`\t</thead>`,
			`\t<tbody>`,
		);
		for (const name of Object.keys(component.forward)) {
			docLines.push(
				`\t\t<tr>`,
				`\t\t\t<td>${name}</td>`,
				`\t\t\t<td>${component.forward[name]}</td>`,
				`\t\t</tr>`,
			);
		}
		docLines.push(
			`\t</tbody>`,
			`</table>`,
		);
	}
	let firstProp = true;
	for (const block of component.exports) {
		if (firstProp) {
			firstProp = false;

			docLines.push(
				`<h3>Props</h3>`,
				`<table class="uk-table">`,
				`\t<thead>`,
				`\t\t<tr>`,
				`\t\t\t<th>name</th>`,
				`\t\t\t<th>type</th>`,
				`\t\t\t<th>default</th>`,
				`\t\t\t<th>description</th>`,
				`\t\t</tr>`,
				`\t</thead>`,
				`\t<tbody>`,
			);
		}
		docLines.push(
			`\t\t<tr>`,
			`\t\t\t<td>${block.name}${block.readonly ? ' (readonly)' : ''}</td>`,
			`\t\t\t<td>${block.type.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/{/g, '&lbrace;').replace(/}/g, '&rbrace;')}</td>`,
			`\t\t\t<td>${block.default || '-'}</td>`,
			`\t\t\t<td>${block.description}</td>`,
			`\t\t</tr>`,
		);
	}
	if (!firstProp) {

		docLines.push(
			`\t</tbody>`,
			`</table>`,
		);
	}
}

docLines.push(
	`\t</div>`,
	`</div>`,
);

fs.writeFileSync(path.join('src', 'App.svelte'), docLines.join('\n'));