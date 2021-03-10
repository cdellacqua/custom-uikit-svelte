import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { preprocess } from './svelte.config';
import replace from '@rollup/plugin-replace';
import pkg from './package.json';

const { main: umd, module: es } = pkg;
const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());


const production = !process.env.ROLLUP_WATCH;

const globals = {
	'uikit': 'UIkit',
	'svelte': 'svelte',
	'uikit/dist/js/uikit-icons': 'Icons',
	'svelte/store': 'store'
};

export default [{
	input: 'src/main.js',
	output: [{
		file: es,
		format: 'es',
		sourcemap: true,
		name,
		globals,
	},
	{
		file: umd,
		format: 'umd',
		sourcemap: true,
		name,
		globals,
	}],
	external: Object.keys(globals),
	plugins: [
		replace({
			'process.env': JSON.stringify({
				NODE_ENV: production ? "production" : "development"
			})
		}),
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			preprocess,
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte'],
			preferBuiltins: false,
		}),
		commonjs(),
	],
	watch: {
		clearScreen: false
	}
}];
