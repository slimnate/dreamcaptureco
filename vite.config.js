import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { imagetoolsGenerate } from './vite-imagetools-generate.js';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		imagetoolsGenerate({
			defaultParams: {
				formats: 'avif,webp,jpg',
				as: 'srcset',
			},
			wrapInObject: true,
		}),
		imagetools(),
		sveltekit(),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
};

export default config;
