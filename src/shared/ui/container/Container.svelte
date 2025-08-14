<script lang="ts">
	// Определяем типы для пропсов
	type ContainerSize = 'sm' | 'md' | 'lg';

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

<div class={containerClasses} {...restAttributes}>
	<!-- Слот по умолчанию -->
	{@render children?.()}
</div>

<style lang="scss">
	@use 'styles';
</style>
