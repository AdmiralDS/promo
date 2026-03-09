<script lang="ts">
  import { onMount } from 'svelte';
  import { renderer } from './Renderer';
  import type { Props as RendererOptions } from './WrappedReactComponent';

  interface Props extends Omit<RendererOptions, 'theme'> {
    isDarkTheme: boolean;
  }

  // Пропсы с использованием runes
  let {
    component = 'Modal',
    appearance = 'm',
    color = 'blue',
    fieldCount = 2,
    isDarkTheme = false,
    tableGroupActions = false,
    tableRowDrag = false,
    tableZebra = false,
    dropdownMode = 'multiselect',
    accordionArrowPosition = 'left',
    accordionLineCount = 4,
    isMobile = false,
    isTablet = false,
  }: Props = $props();

  let container: HTMLDivElement;
  let root: {
    updateProps: (options: RendererOptions) => void;
    unmount: () => void;
  } | null = null;

  // Монтируем React-компонент
  onMount(() => {
    if (!container) return;

    const options: RendererOptions = {
      component,
      theme: isDarkTheme ? 'dark' : 'light',
      appearance,
      color,
      fieldCount,
      tableGroupActions,
      tableRowDrag,
      tableZebra,
      dropdownMode,
      accordionArrowPosition,
      accordionLineCount,
      isMobile,
      isTablet,
    };

    root = renderer(container, options);

    return () => {
      if (root) {
        root.unmount();
        root = null;
      }
    };
  });

  $effect(() => {
    if (!root) return;

    // Просто обращаемся ко всем пропсам, чтобы $effect отслеживал их
    const currentOptions: RendererOptions = {
      component,
      theme: isDarkTheme ? 'dark' : 'light',
      appearance,
      color,
      fieldCount,
      tableGroupActions,
      tableRowDrag,
      tableZebra,
      dropdownMode,
      accordionArrowPosition,
      accordionLineCount,
      isMobile,
      isTablet,
    };

    // Обновляем пропсы через renderer
    root.updateProps(currentOptions);
  });
</script>

<div bind:this={container} class="react-component-container"></div>
