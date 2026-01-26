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
	export let tableGroupActions = true;
	export let tableRowDrag = true;
	export let tableZebra = true;

	let container: HTMLDivElement | undefined;
	let root: ReturnType<typeof renderer> | null = null;

	const getRendererOptions = (themeValue: 'light' | 'dark'): RendererOptions => ({
		component,
		theme: themeValue,
		appearance,
		color,
		fieldCount,
		tableGroupActions,
		tableRowDrag,
		tableZebra
	});

	let currentProps: RendererOptions = getRendererOptions(theme);

	const mountReactComponent = () => {
		if (!container) return;

		root = renderer(container, getRendererOptions(theme));
	};

	const unmountReactComponent = () => {
		try {
			if (root) {
				root.unmount();
				root = null;
			}
		} catch (err) {
			console.warn(`react-adapter failed to unmount.`, { err });
		}
	};

	onMount(mountReactComponent);

	onDestroy(unmountReactComponent);

	$: {
		const newTheme = isDarkTheme ? 'dark' : 'light';
		const nextProps = getRendererOptions(newTheme);
		const shouldUpdate =
			currentProps.component !== nextProps.component ||
			currentProps.theme !== nextProps.theme ||
			currentProps.appearance !== nextProps.appearance ||
			currentProps.color !== nextProps.color ||
			currentProps.fieldCount !== nextProps.fieldCount ||
			currentProps.tableGroupActions !== nextProps.tableGroupActions ||
			currentProps.tableRowDrag !== nextProps.tableRowDrag ||
			currentProps.tableZebra !== nextProps.tableZebra;

		if (shouldUpdate) {
			theme = newTheme;
			currentProps = nextProps;
			if (root) {
				unmountReactComponent();
				mountReactComponent();
			}
		}
	}
</script>

<div class="react-component-wrapper" bind:this={container}></div>

<style lang="scss">
  @use 'reactComponent';
</style>
