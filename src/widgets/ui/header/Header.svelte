<script lang="ts">
	import { Button } from '$shared/ui';
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
	import Figure2 from './fig2.svg?component';
	import logo from './assets/logo.png';
	import leftFigure from './assets/left.png';
	import rightFigure from './assets/right.png';

	const handleButtonClick = () => {
		window.open('https://admiralds.github.io/react-ui/', '_blank');
	};
</script>

<div class="header-container">
	<div class="lottie-hero" aria-hidden="true">
		<DotLottieSvelte src="/animation1.json" autoplay loop />
	</div>
</div>

<style lang="scss">
	@use 'styles';
</style>
