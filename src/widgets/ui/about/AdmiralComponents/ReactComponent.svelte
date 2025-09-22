<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { renderer } from './Renderer';

	export let component = 'Calendar';
	export let isDarkTheme: boolean;
	let theme: 'dark' | 'light' = isDarkTheme ? 'dark' : 'light';

	let container;
	let root;

	const mountReactComponent = () => {
		if (container)
			root = renderer(container, {
				component,
				theme
			});
	};

	const unmountReactComponent = () => {
		try {
			if (root) root.unmount();
		} catch (err) {
			console.warn(`react-adapter failed to unmount.`, { err });
		}
	};

	onMount(mountReactComponent);

	onDestroy(unmountReactComponent);

	$: {
		const newTheme = isDarkTheme ? 'dark' : 'light';
		if (theme !== newTheme) {
			theme = newTheme;
			unmountReactComponent();
			mountReactComponent();
		}
	}
</script>

<div class="component-wrapper" bind:this={container}></div>

<style>
</style>
