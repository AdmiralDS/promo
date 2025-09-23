<script lang="ts">
	import type { ContainerSize } from "$shared/ui/types";


	// Получаем пропсы через $props()
	let {
		size = 'lg' as ContainerSize,
		class: className = '',
		children,
		...restAttributes
	} = $props();

	// Генерируем классы динамически через $derived
	const containerClasses = $derived(`cntr cntr-${size} ${className}`);
</script>

<div {...restAttributes} class={containerClasses}>
	<!-- Слот по умолчанию -->
	{@render children?.()}
</div>

<style lang="scss">
	@use 'styles';
</style>
