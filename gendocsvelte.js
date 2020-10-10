const path = require('path');
const fs = require('fs');
const allComponents = require('./components-data.json');

const chunkSize = 10;

fs.readdirSync('src')
	.filter(file => file.match(/Page\d+\.svelte/g))
	.forEach(file => fs.unlinkSync(path.join('src', file)));

const appLines = ['<script>'];
for (i = 0; i < allComponents.length; i += chunkSize) {
	appLines.push(`\timport Page${Math.floor(i / chunkSize) + 1} from "./Page${Math.floor(i / chunkSize) + 1}.svelte";`);
}
appLines.push('</script>');

for (i = 0; i < allComponents.length; i += chunkSize) {
	appLines.push(`<Page${Math.floor(i / chunkSize) + 1} />`);
}
fs.writeFileSync(path.join('src', 'App.svelte'), appLines.join('\n'));

for (i = 0; i < allComponents.length; i += chunkSize) {
	const components = allComponents.slice(i, i + chunkSize);

	const demoFiles = fs.readdirSync(path.join('src', 'demo'));

	const docLines = [
		`<script>`,
		`\timport { Switcher } from "./main";`
	];

	for (const entry of demoFiles) {
		docLines.push(
			`\timport ${entry.match(/([^/]+).svelte/)[1]} from './demo/${entry}';`,
		);
	}
	docLines.push(`</script>`);

	docLines.push('<style>');
	docLines.push('\tcode {');
	docLines.push('\t\twhite-space: pre;');
	docLines.push('\t}');
	docLines.push('</style>');

	docLines.push(
		`<div uk-grid class="uk-flex-center uk-padding-small">`,
		`\t<div class="uk-width-3-5@l uk-width-2-3@m uk-width-5-6@s uk-width-1-1">`,
	);

	for (const component of components) {
		docLines.push(
			`\t\t<h2 class="uk-heading-divider">${component.name}</h2>`,
			`\t\t<p>${component.description || ''}</p>`,
		);

		const demoFile = demoFiles.find(entry => entry === component.name + 'Demo.svelte');
		if (demoFile) {
			docLines.push(
				"\t\t<Switcher titles={['Output', 'Code']}>",
				`\t\t\t<li>`,
				`\t\t\t\t<hr class="uk-divider-icon">`,
				`\t\t\t\t<${demoFile.match(/([^/]+).svelte/)[1]} />`,
				`\t\t\t\t<hr class="uk-divider-icon">`,
				`\t\t\t</li>`,
				`\t\t\t<li><pre>${fs
					.readFileSync(path.join('src', 'demo', demoFile))
					.toString()
					.replace(/&/g, '&amp;')
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;')
					.replace(/"/g, '&quot;')
					.replace(/{/g, '&lbrace;')
					.replace(/}/g, '&rbrace;')
					.replace(/\t/g, '&nbsp;&nbsp;')
					.split('\n')
					.join('\n')
				}</pre></li>`,
				"\t\t</Switcher>",
			);
		}

		if (Object.keys(component.slots).length > 0) {
			docLines.push(
				`\t\t<h3>Slots</h3>`,
				`\t\t<table class="uk-table">`,
				`\t\t\t<thead>`,
				`\t\t\t\t<tr>`,
				`\t\t\t\t\t<th>name</th>`,
				`\t\t\t\t\t<th>description</th>`,
				`\t\t\t\t</tr>`,
				`\t\t\t</thead>`,
				`\t\t\t<tbody>`,
			);
			for (const name of Object.keys(component.slots)) {
				docLines.push(
					`\t\t\t\t<tr>`,
					`\t\t\t\t\t<td>${name === 'default' ? '-' : name}</td>`,
					`\t\t\t\t\t<td>${component.slots[name]}</td>`,
					`\t\t\t\t</tr>`,
				);
			}
			docLines.push(
				`\t\t\t</tbody>`,
				`\t\t</table>`,
			);
		}
		if (Object.keys(component.dispatch).length > 0) {
			docLines.push(
				`\t\t<h3>Custom Events</h3>`,
				`\t\t<table class="uk-table">`,
				`\t\t\t<thead>`,
				`\t\t\t\t<tr>`,
				`\t\t\t\t\t<th>name</th>`,
				`\t\t\t\t\t<th>type</th>`,
				`\t\t\t\t\t<th>description</th>`,
				`\t\t\t\t</tr>`,
				`\t\t\t</thead>`,
				`\t\t\t<tbody>`,
			);
			for (const name of Object.keys(component.dispatch)) {
				docLines.push(
					`\t\t\t\t<tr>`,
					`\t\t\t\t\t<td>${name}</td>`,
					`\t\t\t\t\t<td>${(component.dispatch[name].type || 'any').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/{/g, '&lbrace;').replace(/}/g, '&rbrace;')}</td>`,
					`\t\t\t\t\t<td>${component.dispatch[name].description}</td>`,
					`\t\t\t\t</tr>`,
				);
			}
			docLines.push(
				`\t\t\t</tbody>`,
				`\t\t</table>`,
			);
		}

		if (Object.keys(component.forward).length > 0) {
			docLines.push(
				`\t\t<h3>Forwarded Events</h3>`,
				`\t\t<table class="uk-table">`,
				`\t\t\t<thead>`,
				`\t\t\t\t<tr>`,
				`\t\t\t\t\t<th>name</th>`,
				`\t\t\t\t\t<th>source</th>`,
				`\t\t\t\t</tr>`,
				`\t\t\t</thead>`,
				`\t\t\t<tbody>`,
			);
			for (const name of Object.keys(component.forward)) {
				docLines.push(
					`\t\t\t\t<tr>`,
					`\t\t\t\t\t<td>${name}</td>`,
					`\t\t\t\t\t<td>${component.forward[name]}</td>`,
					`\t\t\t\t</tr>`,
				);
			}
			docLines.push(
				`\t\t\t</tbody>`,
				`\t\t</table>`,
			);
		}
		let firstProp = true;
		for (const block of component.exports) {
			if (firstProp) {
				firstProp = false;

				docLines.push(
					`\t\t<h3>Props</h3>`,
					`\t\t<table class="uk-table">`,
					`\t\t\t<thead>`,
					`\t\t\t\t<tr>`,
					`\t\t\t\t\t<th>name</th>`,
					`\t\t\t\t\t<th>type</th>`,
					`\t\t\t\t\t<th>default</th>`,
					`\t\t\t\t\t<th>description</th>`,
					`\t\t\t\t</tr>`,
					`\t\t\t</thead>`,
					`\t\t\t<tbody>`,
				);
			}
			docLines.push(
				`\t\t\t\t<tr>`,
				`\t\t\t\t\t<td>${block.name}${block.readonly ? ' (readonly)' : ''}</td>`,
				`\t\t\t\t\t<td>${block.type.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/{/g, '&lbrace;').replace(/}/g, '&rbrace;')}</td>`,
				`\t\t\t\t\t<td>${block.default || '-'}</td>`,
				`\t\t\t\t\t<td>${block.description}</td>`,
				`\t\t\t\t</tr>`,
			);
		}
		if (!firstProp) {

			docLines.push(
				`\t\t\t</tbody>`,
				`\t\t</table>`,
			);
		}
	}

	docLines.push(
		`\t</div>`,
		`</div>`,
	);

	fs.writeFileSync(path.join('src', `Page${Math.floor(i / chunkSize) + 1}.svelte`), docLines.join('\n'));
}