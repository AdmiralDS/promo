<script lang="ts">
  import { onMount } from 'svelte';

  export interface ToggleGroupProps {
    /**
     * Дополнительные CSS-классы для корневого элемента компонента.
     * Позволяет кастомизировать внешний вид контейнера переключателя.
     */
    class?: string;

    /**
     * Функция-рендер для отображения кнопок-вкладок внутри переключателя.
     * Должна возвращать один или несколько элементов button с классом 'btn'.
     *
     * @example
     * <ToggleGroup>
     *   {() => (
     *     <>
     *       <button class="btn">Профиль</button>
     *       <button class="btn">Настройки</button>
     *       <button class="btn">История</button>
     *     </>
     *   )}
     * </ToggleGroup>
     */
    children?: () => any;

    /**
     * Индекс выбранной кнопки-вкладки в контролируемом режиме.
     * Если свойство указано, компонент переходит в контролируемый режим
     * и управление состоянием осуществляется извне.
     *
     * @minimum 0
     * @optional
     * @example
     * // Компонент будет показывать вторую вкладку как активную
     * <ToggleGroup selected={1}>
     *   {() => (
     *     <>
     *       <button class="btn">Первая</button>
     *       <button class="btn">Вторая</button>
     *       <button class="btn">Третья</button>
     *     </>
     *   )}
     * </ToggleGroup>
     */
    selected?: number;

    /**
     * Callback-функция, вызываемая при изменении выбранной кнопки.
     * Используется только в контролируемом режиме (когда указано свойство selected).
     *
     * @param {number} index - Индекс новой выбранной кнопки (начиная с 0)
     * @returns {void}
     * @optional
     * @example
     * const [activeTab, setActiveTab] = createSignal(0);
     *
     * const handleTabChange = (newIndex: number) => {
     *   setActiveTab(newIndex);
     *   console.log(`Переключено на вкладку ${newIndex + 1}`);
     * };
     *
     * <ToggleGroup
     *   selected={activeTab()}
     *   onSelectedChange={handleTabChange}
     * >
     *   {() => (
     *     <>
     *       <button class="btn">Вкладка 1</button>
     *       <button class="btn">Вкладка 2</button>
     *     </>
     *   )}
     * </ToggleGroup>
     */
    onSelectedChange?: (index: number) => void;
  }

  let { class: className = '', children, selected: controlledSelected, onSelectedChange }: ToggleGroupProps = $props();

  const groupClasses = $derived(`toggle-group ${className}`);

  let rootElement: HTMLDivElement | null = null;
  // let selectedIndex = 0;

  // Внутреннее состояние для неконтролируемого режима
  let internalSelectedIndex = $state(0);

  // Определяем, работает ли компонент в контролируемом режиме
  const isControlled = controlledSelected !== undefined;

  // Вычисляемый выбранный индекс
  const selectedIndex = $derived(isControlled ? controlledSelected : internalSelectedIndex);

  // Эффект для обновления selectedIndex при изменении controlledSelected
  $effect(() => {
    updateSelectionAttributes();
  });

  function updateSelectionAttributes() {
    if (!rootElement) return;
    if (rootElement.querySelectorAll<HTMLButtonElement>('button.btn').length === 1) setSelectedIndex(-1);
    const buttons = Array.from(rootElement.querySelectorAll<HTMLButtonElement>('button.btn'));
    buttons.forEach((button, index) => {
      const isSelected = index === selectedIndex;
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      button.setAttribute('tabindex', isSelected ? '0' : '-1');
    });
  }

  function setSelectedIndex(newIndex: number) {
    if (isControlled) {
      // В контролируемом режиме вызываем только callback
      onSelectedChange?.(newIndex);
    } else {
      // В неконтролируемом режиме обновляем внутреннее состояние
      internalSelectedIndex = newIndex;
      updateSelectionAttributes();
      onSelectedChange?.(newIndex);
    }
  }

  function handleClick(event: MouseEvent) {
    if (!rootElement || rootElement.querySelectorAll<HTMLButtonElement>('button.btn').length === 1) return;
    const target = event.target as HTMLElement | null;
    if (!target) return;
    const button = target.closest('button.btn');
    if (!button) return;
    const buttons = Array.from(rootElement.querySelectorAll<HTMLButtonElement>('button.btn'));
    const newIndex = buttons.indexOf(button as HTMLButtonElement);
    if (newIndex === -1 || newIndex === selectedIndex) return;

    let buttonContext;
    if (newIndex > selectedIndex) {
      buttonContext = button.nextElementSibling || button;
    } else if (newIndex < selectedIndex) {
      buttonContext = button.previousElementSibling || button;
    }
    if (!buttonContext) return;
    buttonContext.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });

    setSelectedIndex(newIndex);
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!rootElement || rootElement.querySelectorAll<HTMLButtonElement>('button.btn').length === 1) return;
    const target = event.target as HTMLElement | null;
    if (!target) return;
    const button = target.closest('button.btn');
    if (!button) return;
    const buttons = Array.from(rootElement.querySelectorAll<HTMLButtonElement>('button.btn'));
    if (buttons.length === 0) return;

    let newIndex = selectedIndex;
    let buttonContext;

    switch (event.key) {
      case 'ArrowRight':
        newIndex = (selectedIndex + 1) % buttons.length;
        buttonContext = button.nextElementSibling || button;
        event.preventDefault();
        break;
      case 'ArrowLeft':
        newIndex = (selectedIndex - 1 + buttons.length) % buttons.length;
        buttonContext = button.previousElementSibling || button;
        event.preventDefault();
        break;
      case 'Home':
        newIndex = 0;
        buttonContext = buttons[0];
        event.preventDefault();
        break;
      case 'End':
        newIndex = buttons.length - 1;
        buttonContext = buttons[buttons.length - 1];
        event.preventDefault();
        break;
      case 'Enter':
      case ' ': // Space
        const active = document.activeElement as HTMLElement | null;
        const focusedBtn = active?.closest('button.btn');
        if (focusedBtn) {
          const idx = buttons.indexOf(focusedBtn as HTMLButtonElement);
          if (idx !== -1) newIndex = idx;
          buttonContext = focusedBtn;
          event.preventDefault();
        }
        break;
      default:
        return;
    }

    if (newIndex === selectedIndex) return;

    if (!buttonContext) return;
    buttonContext.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });

    // Устанавливаем новый выбранный индекс
    setSelectedIndex(newIndex);

    // В контролируемом режиме нужно обновить атрибуты после изменения
    if (isControlled) {
      updateSelectionAttributes();
    }

    queueMicrotask(() => buttons[selectedIndex]?.focus());
  }

  onMount(() => {
    updateSelectionAttributes();
  });
</script>

<div
  bind:this={rootElement}
  class={groupClasses}
  role="tablist"
  tabindex="0"
  onclick={handleClick}
  onkeydown={handleKeydown}
>
  {@render children?.()}
</div>

<style lang="scss">
  @use 'styles.module';
</style>
