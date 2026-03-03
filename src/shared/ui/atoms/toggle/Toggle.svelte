<script module lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	export interface ToggleProps extends Omit<HTMLInputAttributes, 'size'> {
		checked?: boolean;
		value?: any;
		disabled?: boolean;
		size?: 'md' | 'sm';
		label?: string;
	}
</script>

<script lang="ts">
	let {
		checked = false,
		disabled = false,
		size = 'md',
		label,
		class: className = '',
		onchange,
		...restAttributes
	}: ToggleProps = $props();

	const hasText = $derived(Boolean(label));
	const labelClass = $derived(
		`toggle-label toggle--${size} ${hasText ? 'toggle--with-text' : ''} ${className}`.trim()
	);

	const handleChange = (event: Event) => {
		onchange?.(event as Event & { currentTarget: HTMLInputElement });
	};
</script>

<label class={labelClass}>
	<input
		{...restAttributes}
		type="checkbox"
		{checked}
		{disabled}
		class="toggle-input"
		onchange={handleChange}
	/>
	<span class="toggle-track">
		<span class="toggle-thumb"></span>
		<span class="toggle-track-visible"><span class="toggle-thumb-visible"></span></span>
	</span>
	{#if label}
		<span class="toggle-label-text">
			{label}
		</span>
	{/if}
</label>

<style lang="scss">
	@use 'styles';
</style>
