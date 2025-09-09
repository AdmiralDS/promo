<script lang="ts">
	import { Button } from '$shared/ui';
	import Figure2 from './fig2.svg?component';
	import logo from './assets/logo.png';
	import leftFigure from './assets/left.png';
	import rightFigure from './assets/right.png';

	const handleButtonClick = () => {
		window.open('https://admiralds.github.io/react-ui/', '_blank');
	};
</script>

<div class="header-container">
	<div class="elipse1"></div>
	<div class="figure2">
		<Figure2 />
	</div>

	<div class="main-container">
		<img src={logo} alt={'logo'} class="logo centered" />
		<div class="text-box">
			<div class="text first-row text--Dark_Blue">Создавайте</div>
			<div class="text second-row text--Dark_Blue">IT-продукты</div>
			<div class="text third-row text--Text_Blue">с Адмиралом</div>
		</div>
		<div class="centered">
			<Button onclick={handleButtonClick}>Сторибук</Button>
		</div>
		<img src={leftFigure} alt={'leftFigure'} class="left-figure element-to-animate" />
		<img src={rightFigure} alt={'rightFigure'} class="right-figure element-to-animate" />
	</div>
</div>

<style lang="scss">
	@use 'styles';
</style>
