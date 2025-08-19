<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	// Определяем типы для пропсов
	type ButtonVariant = 'primary' | 'secondary';
	type ButtonSize = 'small' | 'large';

	export interface ButtonProps extends HTMLButtonAttributes {
		variant?: ButtonVariant;
		/** How large should the button be? */
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
