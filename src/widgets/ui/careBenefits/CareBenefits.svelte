<script lang="ts">
	import { Card } from '$shared/ui';
	import CardImg1 from './assets/card_img_1.png';
	import CardImg2 from './assets/card_img_2.png';
	import CardImg3 from './assets/card_img_3.png';

	const cards = $state([
		{
			id: 1,
			title: 'Ускоряем создание продуктов',
			text: 'Помогаем бизнесу быстро тестировать гипотезы и выводить решения на рынок',
			img: CardImg1
		},
		{
			id: 2,
			title: 'Формируем единый визуальный стиль',
			text: 'Строим экосистему визуальных решений, которая повышает доверие пользователей',
			img: CardImg2
		},
		{
			id: 3,
			title: 'Создаем комфортное пространство',
			text: 'Помогаем командам говорить на одном языке и улучшать процесс доставки решений',
			img: CardImg3
		}
	]);
</script>

<div class="carebenefits-container even-container">
	<div class="main-container">
		<div class="text-box">
			<div class="text first-row text--Dark_Blue">Заботимся не только о качестве,</div>
			<div class="text second-row text--Text_Blue">но и о вашем времени</div>
		</div>
		<div class="cards-box">
			{#each cards as card}
				<Card class="cards-box-item" title={card.title} text={card.text} appearance="primary">
					<img class="cards-box-img" src={card.img} alt="CellImg" />
				</Card>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@use 'styles';
</style>
