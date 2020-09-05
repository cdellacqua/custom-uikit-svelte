import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { preprocess } from './svelte.config';
import replace from '@rollup/plugin-replace';
import pkg from './package.json';

const { main: umd, module: es } = pkg;
const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());


const production = !process.env.ROLLUP_WATCH;

export default [{
	input: 'src/main.js',
	output: [{
		file: es,
		format: 'es',
		sourcemap: true,
		name,
	},
	{
		file: umd,
		format: 'umd',
		sourcemap: true,
		name,
	}, {
		file: pkg.main.replace('.js', '.min.js'),
		format: 'iife',
		name,
		plugins: [terser()]
	}
	],
	plugins: [
		replace({
			process: JSON.stringify({
				env: {
					NODE_ENV: production ? "production" : "development"
				}
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
			dedupe: ['svelte']
		}),
		commonjs(),
	],
	watch: {
		clearScreen: false
	}
}];
