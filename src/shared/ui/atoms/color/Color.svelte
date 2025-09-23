<script module lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	const AVAILABLE_COLORS = {
		blue: 'Blue',
		azure: 'Azure',
		purple: 'Purple',
		green: 'Green',
		pink: 'Pink'
	} as const;

	// Тип автоматически выводится из ключей объекта
	export type ButtonColor = keyof typeof AVAILABLE_COLORS;

	export interface ColorProps extends HTMLButtonAttributes {
		/**
		 * Цвет кнопки, определяющий ее стиль.
		 *
		 * Варианты:
		 *
		 * - `blue`
		 * - `azure`
		 * - `purple`
		 * - `green`
		 * - `pink`
		 *
		 * @default 'blue'
		 * @example
		 * <Color color="blue"></Color>
		 * <Color color="purple"></Color>
		 */
		color?: ButtonColor;
	}
</script>

<script lang="ts">
	let {
		color = 'blue' as import('./Color.svelte').ButtonColor,
		type = 'button',
		disabled = false,
		class: className = '',
		children,
		...restAttributes
	}: ColorProps = $props();

	const ColorClasses = $derived(
		`btn ${className} btn-Circle_${AVAILABLE_COLORS[color] || AVAILABLE_COLORS.blue}`
	);
</script>

<button class={ColorClasses} {type} {...restAttributes}>
	{@render children?.()}
</button>

<style lang="scss">
	@use 'styles.module';
</style>
