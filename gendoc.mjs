import path from 'path';
import fs from 'fs';

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

for (const entry of componentFiles) {
	const content = fs.readFileSync(entry).toString();
	let description = (content.match(/@component\s+([^@]+)/m) || content.match(/@component\s+(.+)\*\/\n$/ms) || [])[1] || '';
	description = description.split('\n').map((s) => s.match(/^(\s*\*\s*)?(.*)/)[2]).filter((s) => s !== '').join('\n');
	docLines.push(
		`### ${entry.match(/([^/]+).svelte/)[1]}`,
		`${description || 'No description'}`,
		``,
		``,
	);
}

fs.writeFileSync(path.join('README.md'), docLines.join('\n'));
