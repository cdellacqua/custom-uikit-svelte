const path = require('path');
const fs = require('fs');

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

fs.writeFileSync(
	path.join('src', 'main.js'),
	"import './init';\n" +
	readdirFilesRecursiveSync(path.join('src', 'components'))
		.filter((entry) => !entry.endsWith('.preview.svelte'))
		.map((entry) => './' + entry.substring('src/'.length))
		.map((entry) => 'export { default as ' + entry.match(/([^/]+).svelte/)[1] + ' } from "' + entry + '";')
		.join('\n')
);