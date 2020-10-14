import sveltePreprocess from 'svelte-preprocess';

export const preprocess = sveltePreprocess({
    postcss: {
        plugins: [require('autoprefixer')]
    },
    scss: true,
    typescript: false,
});
