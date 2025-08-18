<script lang="ts">
	// Определяем типы для пропсов
	type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
	type ButtonSize = 'sm' | 'md' | 'lg';
	type ButtonType = 'button' | 'submit' | 'reset';

	// Получаем пропсы через $props()
	let {
		variant = 'primary' as ButtonVariant,
		size = 'lg' as ButtonSize,
		type = 'button' as ButtonType,
		disabled = false,
		class: className = '',
		children,
		...restAttributes
	} = $props();

	// Генерируем классы динамически через $derived
	const buttonClasses = $derived(`btn btn-${variant} btn-${size} ${className}`);
</script>

<button class={buttonClasses} {type} {...restAttributes}>
	<!-- Слот по умолчанию -->
	{@render children?.()}
</button>

<style lang="scss">
	@use 'styles';
</style>
