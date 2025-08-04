import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			// Алиасы для FSD-слоев
			$app: path.resolve('./src/app'),
			$pages: path.resolve('./src/pages'),
			$features: path.resolve('./src/features'),
			$widgets: path.resolve('./src/widgets'),
			$shared: path.resolve('./src/shared'),
			$entities: path.resolve('./src/entities')
		}
	}
};

export default config;
