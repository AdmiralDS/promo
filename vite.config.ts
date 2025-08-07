// import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svelte-svgr';

export default defineConfig({
	plugins: [
		sveltekit(),
		// devtoolsJson(),
		svgr()
	]
});
