<script module lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	export interface RadioButtonProps extends Omit<HTMLInputAttributes, 'size'> {
		checked?: boolean;
		size?: 'md' | 'sm';
	}
</script>

<script lang="ts">
	let {
		checked = false,
		disabled = false,
		size = 'md',
		class: className = '',
		children,
		onchange,
		...restAttributes
	}: RadioButtonProps = $props();

	const labelClass = $derived(`radio-label radio--${size} ${className}`.trim());
	const radioClasses = $derived('radio-input');
</script>

<label class={labelClass}>
	<input
		class={radioClasses}
		type="radio"
		{checked}
		{disabled}
		onchange={onchange}
		{...restAttributes}
	/>
	<span class="radio-visual"></span>
	{@render children?.()}
</label>

<style lang="scss">
	@use 'styles.module';
</style>
