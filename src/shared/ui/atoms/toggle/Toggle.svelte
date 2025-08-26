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

<label class="toggle-label">
	<input {...restAttributes} type="checkbox" bind:checked {disabled} class="sr-only" />
	<div class="toggle-thumb" class:checked></div>
	<div class="toggle-hover" class:checked></div>
	<div class="toggle-icons">
		<SunIcon active={!checked} />
		<MoonIcon active={checked} />
	</div>
</label>

<style lang="scss">
	@use 'styles';
</style>
