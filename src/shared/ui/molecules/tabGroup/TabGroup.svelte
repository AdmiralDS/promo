<script lang="ts">
	import { onMount } from 'svelte';

	let { class: className = '', children } = $props();
	const groupClasses = $derived(`tab-group ${className}`);

	let rootElement: HTMLDivElement | null = null;
	let selectedIndex = 0;

	function updateSelectionAttributes() {
		if (!rootElement) return;
		if (rootElement.querySelectorAll<HTMLButtonElement>('button.tab').length === 1)
			selectedIndex = -1;
		const tabs = Array.from(rootElement.querySelectorAll<HTMLButtonElement>('button.tab'));
		tabs.forEach((tab, index) => {
			const isSelected = index === selectedIndex;
			tab.setAttribute('role', 'tab');
			tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
			tab.setAttribute('tabindex', isSelected ? '0' : '-1');
		});
	}

	function handleClick(event: MouseEvent) {
		if (!rootElement || rootElement.querySelectorAll<HTMLButtonElement>('button.tab').length === 1)
			return;
		const target = event.target as HTMLElement | null;
		if (!target) return;
		const tab = target.closest('button.tab');
		if (!tab) return;
		const tabs = Array.from(rootElement.querySelectorAll<HTMLButtonElement>('button.tab'));
		const newIndex = tabs.indexOf(tab as HTMLButtonElement);
		if (newIndex === -1 || newIndex === selectedIndex) return;

		let tabContext;
		if (newIndex > selectedIndex) {
			tabContext = tab.nextElementSibling || tab;
		} else if (newIndex < selectedIndex) {
			tabContext = tab.previousElementSibling || tab;
		}
		if (!tabContext) return;
		tabContext.scrollIntoView({ behavior: 'smooth' });

		selectedIndex = newIndex;
		updateSelectionAttributes();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!rootElement || rootElement.querySelectorAll<HTMLButtonElement>('button.tab').length === 1)
			return;
		const target = event.target as HTMLElement | null;
		if (!target) return;
		const tab = target.closest('button.tab');
		if (!tab) return;
		const tabs = Array.from(rootElement.querySelectorAll<HTMLButtonElement>('button.tab'));
		if (tabs.length === 0) return;

		let tabContext;
		switch (event.key) {
			case 'ArrowRight':
				selectedIndex = (selectedIndex + 1) % tabs.length;
				tabContext = tab.nextElementSibling || tab;
				event.preventDefault();
				break;
			case 'ArrowLeft':
				selectedIndex = (selectedIndex - 1 + tabs.length) % tabs.length;
				tabContext = tab.previousElementSibling || tab;
				event.preventDefault();
				break;
			case 'Home':
				selectedIndex = 0;
				tabContext = tabs[0];
				event.preventDefault();
				break;
			case 'End':
				selectedIndex = tabs.length - 1;
				tabContext = tabs[tabs.length - 1];
				event.preventDefault();
				break;
			case 'Enter':
			case ' ':
				const active = document.activeElement as HTMLElement | null;
				const focusedTab = active?.closest('button.tab');
				if (focusedTab) {
					const idx = tabs.indexOf(focusedTab as HTMLButtonElement);
					if (idx !== -1) selectedIndex = idx;
					tabContext = focusedTab;
					event.preventDefault();
				}
				break;
			default:
				return;
		}

		if (!tabContext) return;
		tabContext.scrollIntoView({ behavior: 'smooth' });

		updateSelectionAttributes();
		queueMicrotask(() => tabs[selectedIndex]?.focus());
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
