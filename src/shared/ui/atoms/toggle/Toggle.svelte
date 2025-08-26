<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { default as SunIcon } from './sun-icon.svelte';
	import { default as MoonIcon } from './moon-icon.svelte';

	export interface ToggleProps extends HTMLInputAttributes {
		checked?: boolean;
		value?: any;
		disabled?: boolean;
	}

	// Получаем пропсы через $props()
	let {
		checked = $bindable(),
		disabled = false,
		class: className = '',
		children,
		...restAttributes
	}: ToggleProps = $props();
</script>

<label class="toggle-container">
	<input
		{...restAttributes}
		type="checkbox"
		bind:checked
		{disabled}
		class="sr-only"
	/>

	<SunIcon active={!checked} />
	<MoonIcon active={checked} />
</label>

<style lang="scss">
	@use 'styles';
</style>
