<script lang="ts">
  import CardContainer from '$shared/ui/atoms/cardContainer/CardContainer.svelte';
  import type { CardContainerAppearance } from '$shared/ui/types';
  import { ruNbsp } from '../../ruNbsp';

  // Получаем пропсы через $props()
  let {
    appearance = '' as CardContainerAppearance,
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

<CardContainer {...restAttributes} {appearance} class={className}>
  {@render children?.()}
  <div class={titleClass}>
    {ruNbsp(title)}
  </div>
  <div class={textClass}>
    {ruNbsp(text)}
  </div>
</CardContainer>

<style lang="scss">
  @use 'styles';
</style>
