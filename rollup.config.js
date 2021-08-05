import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { preprocess } from './svelte.config';
import replace from '@rollup/plugin-replace';
import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

const external = [
	...Object.keys(pkg.devDependencies || {}),
	...Object.keys(pkg.peerDependencies || {}),
	...Object.keys(pkg.dependencies || {})
];

export default [{
	input: 'src/main.js',
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'es' }
	],
	external,
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
