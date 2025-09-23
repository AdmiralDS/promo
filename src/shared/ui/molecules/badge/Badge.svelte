<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		class: className = '',
		children,
		...restAttributes
	}: HTMLAttributes<HTMLDivElement> = $props();

	const BadgeClasses = $derived(`badge ${className}`);
</script>

<div class={BadgeClasses} {...restAttributes}>
	{@render children?.()}
</div>

<style lang="scss">
	@use 'styles';
</style>
