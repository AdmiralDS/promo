<script lang="ts">
	// Определяем типы для пропсов
	type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
	type ButtonSize = 'sm' | 'md' | 'lg';
	type ButtonType = 'button' | 'submit' | 'reset';

	// Получаем пропсы через $props()
	let {
		variant = 'primary' as ButtonVariant,
		size = 'lg' as ButtonSize,
		disabled = false,
		loading = false,
		type = 'button' as ButtonType,
		class: className = '',
		...restAttributes
	} = $props();

	// Состояние нажатия (используем $state)
	let isPressed = $state(false);

	// Генерируем классы динамически через $derived
	const buttonClasses = $derived(
		`btn btn-${variant} btn-${size} ${disabled ? 'disabled' : ''} ${
			loading ? 'loading' : ''
		} ${isPressed ? 'pressed' : ''} ${className}`
	);

	// Обработчик клика
	function handleClick(event: MouseEvent) {
		if (disabled || loading) return;
		// $emit('click', event) // Испускаем событие
	}

	// Обработчики состояний нажатия
	function press() {
		isPressed = true;
	}
	function release() {
		isPressed = false;
	}
</script>

<!-- 
  Кнопка с новым синтаксисом событий (без двоеточия)
  $$restProps передает все дополнительные атрибуты
-->
<button
	class={buttonClasses}
	disabled={disabled || loading}
	{type}
	onclick={handleClick}
	onmousedown={press}
	onmouseup={release}
	onmouseleave={release}
	{...restAttributes}
>
	<!-- Слот по умолчанию -->
	<slot>
		{#if loading}
			<span class="spinner" />
			Loading...
		{:else}
			Click me
		{/if}
	</slot>
</button>

<style lang="scss">
	@import './styles.scss';
</style>
