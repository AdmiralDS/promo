<script lang="ts">
	import Chevron from './Chevron.svelte';
	let isOpen = false;

	const toggleMenu = () => {
		isOpen = !isOpen;
	};
</script>

<div class="menu-button">
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
