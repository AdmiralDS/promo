<script lang="ts">
	import Chevron from './Chevron.svelte';

	let isOpen = false;
	let menuRef: HTMLDivElement | null = null;

	const toggleMenu = () => {
		isOpen = !isOpen;
	};

	const handleDocumentClick = (event: MouseEvent) => {
		if (!menuRef) return;
		const target = event.target as Node | null;
		if (target && !menuRef.contains(target)) {
			isOpen = false;
		}
	};
</script>

<svelte:window on:click={handleDocumentClick} />
<div class="menu-button" bind:this={menuRef}>
	<button type="button" aria-expanded={isOpen} on:click={toggleMenu}>
		<div class="icon-wrapper">
			<slot name="icon"></slot>
		</div>
		<div class="chevron-wrapper" class:open={isOpen}>
			<Chevron />
		</div>
	</button>

	{#if isOpen}
		<div class="dropdown-wrapper">
			<slot name="dropdown" />
		</div>
	{/if}
</div>

<style lang="scss">
	@use 'menuButton';
</style>
