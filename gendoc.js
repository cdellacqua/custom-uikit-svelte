const path = require('path');
const fs = require('fs');
const jsdocExtractor = require('jsdoc-extractor');
const { scan, TOKENS } = require('jsdoc-tokenizer');

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
const componentFiles = readdirFilesRecursiveSync(path.join('src', 'components'))
	.filter((entry) => !entry.endsWith('.preview.svelte'));

const docLines = [
	`# custom-uikit-svelte`,
	``,
	`Unofficial Svelte Component Library for the UIkit framework`,
	``,
	``,
	`Components`
];

for (const entry of componentFiles) {
	docLines.push(
		`- [${entry.match(/([^/]+).svelte/)[1]}](###${entry.match(/([^/]+).svelte/)[1]})`,
	);
}

docLines.push(
	``,
	``,
);

(async () => {
	for (const entry of componentFiles) {

		\/\*\*(.+?)\*\/\s*\r?\n\s*([^\r\n]+)?
		const content = (fs.readFileSync(entry).toString().match(/<script>(.*)<\/script>/s) || [])[1];
		const commentBlocks = jsdocExtractor(Buffer.from(content));
		for (const [block] of commentBlocks) {
			const tokens = scan(Buffer.from(block));
			for (const [token, v] of tokens) {
				const value = v instanceof Uint8Array ? String.fromCharCode(...v) : (typeof v === 'number' ? String.fromCharCode(v) : v);
				console.log(token);
				console.log(value);
			}
		}
		break;
		
		docLines.push(
			`### ${entry.match(/([^/]+).svelte/)[1]}`,
			`${description || 'No description'}`,
			``,
			``,
		);
	}

	fs.writeFileSync(path.join('README.md'), docLines.join('\n'));
})();