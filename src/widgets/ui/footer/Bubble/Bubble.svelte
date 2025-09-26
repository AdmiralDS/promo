<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type ArrowPosition = 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
	type BubbleAppearance = 'primary' | 'secondary' | 'tertiary';

	export interface BubbleProps extends HTMLAttributes<HTMLDivElement> {
		arrowPosition: ArrowPosition;
		appearance: BubbleAppearance;
	}

	function getRole(appearance: BubbleAppearance) {
		switch (appearance) {
			case 'primary':
				return 'developer';
			case 'secondary':
				return 'designer';
			case 'tertiary':
				return 'analyst';
		}
	}

	let {
		arrowPosition,
		appearance,
		class: className = '',
		children,
		...restAttributes
	}: BubbleProps = $props();

	const wrapperClasses = $derived(`bubble-wrapper ${className}`);
	const arrowClasses = $derived(
		`bubble-arrow bubble-arrow-${arrowPosition} bubble-arrow-${appearance}`
	);
	const bubbleClasses = $derived(`bubble text--Main_White bubble-${appearance}`);
	const gradientId = $derived(`${getRole(appearance)}`);
</script>

<div {...restAttributes} class={wrapperClasses}>
	<div class={bubbleClasses}>
		{@render children?.()}
	</div>
	<div class={arrowClasses}>
		<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M13.7504 20.9279L24.7012 2.71157C25.2736 1.75948 24.4239 0.595309 23.3106 0.806352L2.0111 4.84423C0.863355 5.06182 0.554278 6.51721 1.51935 7.15979L8.57904 11.8604C8.83792 12.0328 9.02513 12.2892 9.10701 12.5837L11.3401 20.6149C11.6454 21.7128 13.1603 21.9095 13.7504 20.9279Z"
				fill={`url(#${gradientId})`}
			/>
			<defs>
				<linearGradient
					id="developer"
					x1="-1.08"
					y1="40.55"
					x2="-16.54"
					y2="-3.36"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0.0024" stop-color="#C3EBFF" />
					<stop offset="0.5803" stop-color="#0099FF" />
				</linearGradient>

				<linearGradient
					id="designer"
					x1="-10.66"
					y1="-15.24"
					x2="-28.66"
					y2="16.77"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0.3264" stop-color="#006FFF" />
					<stop offset="0.9354" stop-color="#AAD6FF" />
				</linearGradient>

				<linearGradient
					id="analyst"
					x1="-13.32"
					y1="38.65"
					x2="38.76"
					y2="44.21"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#AABAFF" />
					<stop offset="0.4631" stop-color="#4000FF" />
				</linearGradient>
			</defs>
		</svg>
	</div>
</div>

<style lang="scss">
	@use 'styles';
</style>
