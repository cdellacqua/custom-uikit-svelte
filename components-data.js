const path = require('path');
const fs = require('fs');
const jsdocApi = require('jsdoc-api');

const components = [];

function readdirFilesRecursiveSync(dir, output) {
	output = output || [];
	fs.readdirSync(dir).forEach(file => {
		let fullPath = path.join(dir, file);
		if (fs.lstatSync(fullPath).isDirectory()) {
			readdirFilesRecursiveSync(fullPath, output);
		} else {
			output.push(fullPath);
		}
	});
	return output;
}

/** @type {string[]} */
const componentFiles = readdirFilesRecursiveSync(path.join('src', 'components'));

for (const entry of componentFiles) {
	const componentData = {
		path: entry,
		name: entry.match(/([^/]+).svelte/)[1],
		description: '',
		slots: {},
		dispatch: {},
		forward: {}
	};

	let content = (fs.readFileSync(entry).toString().match(/<script>(.*)<\/script>/s) || [])[1];
	const componentDescription = content.match(/(\s*\/\*\*[^@]+@component.*?\*\/)/s);
	if (componentDescription) {
		content = content.replace(/(\s*\/\*\*[^@]+@component.*?\*\/)/s, '$&\nlet __3242423__234234__2312;');
	}
	const commentBlocks = jsdocApi.explainSync({
		source: content,
	}).filter(c => Boolean(c.comment));
	
	
	if (componentDescription) {
	
		componentData.description = commentBlocks[0].tags.find(t => t.originalTitle === 'component').value;
		
		const slotTag = commentBlocks[0].tags.find(t => t.originalTitle === 'slot');
		if (slotTag) {
			componentData.slots = JSON.parse(slotTag.text);
		}

		const dispatchTag = commentBlocks[0].tags.find(t => t.originalTitle === 'dispatch');
		if (dispatchTag) {
			componentData.dispatch = JSON.parse(dispatchTag.text);
		}

		const forwardTag = commentBlocks[0].tags.find(t => t.originalTitle === 'forward');
		if (forwardTag) {
			componentData.forward = JSON.parse(forwardTag.text);
		}
		commentBlocks.splice(0, 1);
	}
	componentData.exports = [];
	for (const block of commentBlocks) {
		if (block.meta && block.meta.code && block.meta.code && block.meta.code.name && block.meta.code.name.startsWith('exports.')) {
			componentData.exports.push({
				readonly: !!block.readonly,
				name: block.name,
				type: block.type.names.join('|'),
				default: block.default,
				description: block.description
			});
		}
	}

	components.push(componentData);
}

module.exports = components;