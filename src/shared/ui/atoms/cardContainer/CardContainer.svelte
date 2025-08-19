<script lang="ts">
	import type { CardContainerAppearance } from '$shared/ui/types';

	// Получаем пропсы через $props()
	let {
		appearance = 'primary' as CardContainerAppearance,
		class: className = '',
		children,
		...restAttributes
	} = $props();

	// Генерируем классы динамически через $derived
	const containerClasses = $derived(`card card-${appearance} ${className}`);
</script>

<div {...restAttributes} class={containerClasses}>
	<!-- Слот по умолчанию -->
	{@render children?.()}
</div>

<style lang="scss">
	@use 'styles';
</style>
