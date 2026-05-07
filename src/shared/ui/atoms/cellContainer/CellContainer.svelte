<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  export type CellContainerProps = HTMLAttributes<HTMLDivElement>;

  // Получаем пропсы через $props()
  let { class: className = '', children, ...restAttributes }: CellContainerProps = $props();

  // Генерируем классы динамически через $derived
  const cellClasses = $derived(`cell ${className}`);
</script>

<div {...restAttributes} class={cellClasses}>
  <!-- Слот по умолчанию -->
  {@render children?.()}
</div>

<style lang="scss">
  @use 'styles';
</style>
