<script lang="ts">
	import { onMount } from 'svelte';

	let { class: className = '', children } = $props();
	const groupClasses = $derived(`button-switcher ${className}`);

	let rootElement: HTMLDivElement | null = null;
	let selectedIndex = 0;

	function updateSelectionAttributes() {
		if (!rootElement) return;
		if (rootElement.querySelectorAll<HTMLButtonElement>('button.btn').length === 1)
			selectedIndex = -1;
		const buttons = Array.from(rootElement.querySelectorAll<HTMLButtonElement>('button.btn'));
		buttons.forEach((button, index) => {
			const isSelected = index === selectedIndex;
			button.setAttribute('role', 'tab');
			button.setAttribute('aria-selected', isSelected ? 'true' : 'false');
			button.setAttribute('tabindex', isSelected ? '0' : '-1');
		});
	}

	function handleClick(event: MouseEvent) {
		if (!rootElement || rootElement.querySelectorAll<HTMLButtonElement>('button.btn').length === 1)
			return;
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
		buttonContext.scrollIntoView({ behavior: 'smooth' });

		selectedIndex = newIndex;
		updateSelectionAttributes();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!rootElement || rootElement.querySelectorAll<HTMLButtonElement>('button.btn').length === 1)
			return;
		const target = event.target as HTMLElement | null;
		if (!target) return;
		const button = target.closest('button.btn');
		if (!button) return;
		const buttons = Array.from(rootElement.querySelectorAll<HTMLButtonElement>('button.btn'));
		if (buttons.length === 0) return;

		let buttonContext;
		switch (event.key) {
			case 'ArrowRight':
				selectedIndex = (selectedIndex + 1) % buttons.length;
				buttonContext = button.nextElementSibling || button;
				event.preventDefault();
				break;
			case 'ArrowLeft':
				selectedIndex = (selectedIndex - 1 + buttons.length) % buttons.length;
				buttonContext = button.previousElementSibling || button;
				event.preventDefault();
				break;
			case 'Home':
				selectedIndex = 0;
				buttonContext = buttons[0];
				event.preventDefault();
				break;
			case 'End':
				selectedIndex = buttons.length - 1;
				buttonContext = buttons[buttons.length - 1];
				event.preventDefault();
				break;
			case 'Enter':
			case ' ': // Space
				const active = document.activeElement as HTMLElement | null;
				const focusedBtn = active?.closest('button.btn');
				if (focusedBtn) {
					const idx = buttons.indexOf(focusedBtn as HTMLButtonElement);
					if (idx !== -1) selectedIndex = idx;
					buttonContext = focusedBtn;
					event.preventDefault();
				}
				break;
			default:
				return;
		}

		if (!buttonContext) return;
		buttonContext.scrollIntoView({ behavior: 'smooth' });

		updateSelectionAttributes();
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
	@use 'styles';
</style>
