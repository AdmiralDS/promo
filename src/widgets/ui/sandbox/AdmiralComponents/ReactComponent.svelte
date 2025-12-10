<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { renderer } from './Renderer';
	import type { Props as RendererOptions } from './WrappedReactComponent';
	import type { Appearance } from '../types';

	export let component = 'Modal';
	export let isDarkTheme: boolean;
	let theme: 'dark' | 'light' = isDarkTheme ? 'dark' : 'light';
	export let appearance: Appearance = 'm';
	export let color: string = 'blue';
	export let fieldCount = 2;
	let currentProps = {
		component,
		theme,
		appearance,
		color,
		fieldCount
	};

	let container: HTMLDivElement | null = null;
		let root: ReturnType<typeof renderer> | null = null;

	const mountReactComponent = () => {
		if (!container) return;

		const options: RendererOptions = {
			component,
			theme,
			appearance,
			color,
			fieldCount
		};

		root = renderer(container, options);
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
		const shouldUpdate =
			currentProps.component !== component ||
			currentProps.theme !== newTheme ||
			currentProps.appearance !== appearance ||
			currentProps.color !== color ||
			currentProps.fieldCount !== fieldCount;

		if (shouldUpdate) {
			theme = newTheme;
			currentProps = {
				component,
				theme: newTheme,
				appearance,
				color,
				fieldCount
			};
			if (root) {
				unmountReactComponent();
				mountReactComponent();
			}
		}
	}
</script>

<div class="component-wrapper" bind:this={container}></div>

<style>
</style>
