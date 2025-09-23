<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let {
		type = 'button',
		disabled = false,
		class: className = '',
		children,
		...restAttributes
	}: HTMLButtonAttributes = $props();

	const TabClasses = $derived(`btn ${className}`);
</script>

<button class={TabClasses} {type} {...restAttributes}>
	{@render children?.()}
</button>

<style lang="scss">
	@use 'styles.module';
</style>
