<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type CardContainerAppearance = 'primary' | 'secondary';

	export interface CardContainerProps extends HTMLAttributes<HTMLDivElement> {
		appearance?: CardContainerAppearance;
	}

	// Получаем пропсы через $props()
	let {
		appearance = 'primary' as CardContainerAppearance,
		class: className = '',
		children,
		...restAttributes
	}: CardContainerProps = $props();

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
