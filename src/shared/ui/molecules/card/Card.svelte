<script lang="ts">
	import CardContainer from '$shared/ui/atoms/cardContainer/CardContainer.svelte';
  import type { CardContainerAppearance } from '$shared/ui/types';

	// Получаем пропсы через $props()
	let {
		appearance = 'first' as CardContainerAppearance,
		title = '',
		text = '',
		children,
		class: className = '',
		...restAttributes
	} = $props();

	// Генерируем классы динамически через $derived
	const titleClass = $derived(`card-title card-title-${appearance}`);
	const textClass = $derived(`card-text card-text-${appearance}`);
</script>

<CardContainer {...restAttributes}>
	{@render children?.()}
	<div class={titleClass}>
		{title}
	</div>
	<div class={textClass}>
		{text}
	</div>
</CardContainer>

<style lang="scss">
	@use 'styles';
</style>
