<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	// Определяем типы для пропсов
	type ButtonVariant = 'primary' | 'secondary';
	type ButtonSize = 'small' | 'large';

	export interface ButtonProps extends HTMLButtonAttributes {
		/**
		 * Визуальный вариант кнопки, определяющий ее стиль и назначение.
		 *
		 * Варианты:
		 * - `primary` - Основное действие, призыв к действию
		 * - `secondary` - Второстепенное действие
		 *
		 * @default 'primary'
		 * @example
		 * <Button variant="primary">Сохранить</Button>
		 * <Button variant="danger">Удалить</Button>
		 */
		variant?: ButtonVariant;
		/**
		 * Размер кнопки, определяющий ее вертикальный ритм и визуальную значимость.
		 *
		 * Размеры:
		 * - `sm` - Маленький (компактный, для плотных интерфейсов)
		 * - `lg` - Большой (акцентный, для главных действий)
		 *
		 * @default 'lg'
		 * @example
		 * <Button size="sm">Компактная</Button>
		 * <Button size="lg">Важное действие</Button>
		 */
		size?: ButtonSize;
	}

	// Получаем пропсы через $props()
	let {
		variant = 'primary' as ButtonVariant,
		size = 'large' as ButtonSize,
		type = 'button',
		disabled = false,
		class: className = '',
		children,
		...restAttributes
	}: ButtonProps = $props();

	// Генерируем классы динамически через $derived
	const buttonClasses = $derived(`btn btn-${variant} btn-${size} ${className}`);
</script>

<button class={buttonClasses} {type} {...restAttributes}>
	{@render children?.()}
</button>

<style lang="scss">
	@use 'styles';
</style>
