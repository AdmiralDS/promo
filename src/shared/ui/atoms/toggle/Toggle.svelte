<script module lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	export interface ToggleProps extends Omit<HTMLInputAttributes, 'size'> {
		checked?: boolean;
		value?: any;
		disabled?: boolean;
		size?: 'md' | 'sm';
	}
</script>

<script lang="ts">
	let {
		checked = $bindable(),
		disabled = false,
		size = 'md',
		class: className = '',
		children,
		onchange,
		...restAttributes
	}: ToggleProps = $props();

	const labelClass = $derived(`toggle-label toggle--${size} ${className}`.trim());
</script>

<label class={labelClass}>
	<input
		{...restAttributes}
		type="checkbox"
		bind:checked
		{disabled}
		class="toggle-input"
		onchange={onchange}
	/>
	<span class="toggle-track">
		<span class="toggle-thumb"></span>
	</span>
	{@render children?.()}
</label>

<style lang="scss">
	@use 'styles';
</style>
