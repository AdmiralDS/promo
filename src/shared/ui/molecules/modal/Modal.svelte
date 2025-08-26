<script lang="ts">
	import type { MouseEventHandler, KeyboardEventHandler, HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { trapFocus } from './trapFocus.svelte';

	interface ModalProps extends HTMLAttributes<HTMLDialogElement> {
		/** Состояние модального окна: открыто/закрыто */
		showModal: boolean;
		/** Заголовок модального окна */
		title: string;
		/** Сниппет для отрисовки логотипа */
		logo: Snippet;
	}

	let { showModal = $bindable(), title = '', logo, children, ...props }: ModalProps = $props();
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
	{...props}
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
				focusable="false"
				aria-hidden="true"
				width="24"
				height="25"
				viewBox="0 0 24 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M4.29192 18.5413C3.90139 18.9318 3.90139 19.5649 4.29192 19.9555C4.68244 20.346 5.31561 20.346 5.70613 19.9555L11.7169 13.9447C11.8731 13.7885 12.1264 13.7885 12.2826 13.9447L18.2934 19.9555C18.6839 20.346 19.317 20.346 19.7076 19.9555C20.0981 19.565 20.0981 18.9318 19.7076 18.5413L13.6968 12.5305C13.5406 12.3743 13.5406 12.121 13.6968 11.9648L19.7074 5.95418C20.0979 5.56365 20.0979 4.93049 19.7074 4.53996C19.3169 4.14944 18.6837 4.14944 18.2932 4.53996L12.2826 10.5506C12.1264 10.7068 11.8731 10.7068 11.7169 10.5506L5.70628 4.54C5.31576 4.14948 4.68259 4.14948 4.29207 4.54C3.90154 4.93053 3.90154 5.56369 4.29207 5.95422L10.3027 11.9648C10.4589 12.121 10.4589 12.3743 10.3027 12.5305L4.29192 18.5413Z"
					fill="#456B8D"
				/>
			</svg>
		</button>
	</div>
</dialog>

<style lang="scss">
	@use 'styles';
</style>
