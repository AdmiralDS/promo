<script lang="ts">
	import type { MouseEventHandler, KeyboardEventHandler } from 'svelte/elements';
	import { trapFocus } from './trapFocus.svelte';

	let { showModal = $bindable(), title = '', logo, children } = $props();
	let dialog: HTMLDialogElement | undefined = $state(); // HTMLDialogElement

	$effect(() => {
		if (showModal) {
			dialog?.showModal();
		}
	});

	const handleClose = () => {
		showModal = false;
	};
	const handleClick: MouseEventHandler<HTMLDialogElement> = (event) => {
		if (event.target === dialog) {
			dialog?.close();
		}
	};
	const handleKeyDown: KeyboardEventHandler<HTMLDialogElement> = (event) => {
		if (event.key === 'Escape') {
			// prevent browser-specific escape key behavior (Safari exits fullscreen)
			event.preventDefault();
			dialog?.close();
		}
	};
</script>

<dialog
	class="modal"
	bind:this={dialog}
	use:trapFocus
	onclose={handleClose}
	onclick={handleClick}
	onkeydown={handleKeyDown}
>
	<div class="modal-content">
		<div class="modal-logo">
			{@render logo?.()}
		</div>
		<div class="modal-title">{title}</div>
		{@render children?.()}

		<!-- svelte-ignore a11y_autofocus -->
		<button
			class="modal-close-btn"
			autofocus
			onclick={() => dialog?.close()}
			aria-label="Close button"
			type="button"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				focusable="false"
				aria-hidden="true"
				><path
					fill="#74767B"
					d="M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"
				/></svg
			>
		</button>
	</div>
</dialog>

<style lang="scss">
	@use 'styles';
</style>
