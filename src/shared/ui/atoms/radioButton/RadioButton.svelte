<script module lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	export interface RadioButtonProps extends Omit<HTMLInputAttributes, 'size'> {
		checked?: boolean;
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
	}: RadioButtonProps = $props();

	const hasText = $derived(Boolean(label));
	const labelClass = $derived(
		`radio-label radio--${size} ${hasText ? 'radio--with-text' : ''} ${className}`.trim()
	);
	const radioClasses = $derived('radio-input');

	const handleChange = (event: Event) => {
		onchange?.(event as Event & { currentTarget: HTMLInputElement });
	};
</script>

<label class={labelClass}>
	{#if label}
		<span class="radio-label-text">
			{label}
		</span>
	{/if}
	<input
		class={radioClasses}
		type="radio"
		{checked}
		{disabled}
		onchange={handleChange}
		{...restAttributes}
	/>
	<span class="radio-visual"></span>
</label>

<style lang="scss">
	@use 'styles.module';
</style>
