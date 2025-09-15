<script lang="ts">
	import { Card } from '$shared/ui';
	import CardImg1 from './assets/card_img_1_sm.png';
	import CardImg1Big from './assets/card_img_1_big.png';
	import CardImg2 from './assets/card_img_2_sm.png';
	import CardImg2Big from './assets/card_img_2_big.png';
	import CardImg3 from './assets/card_img_3_sm.png';
	import CardImg3Big from './assets/card_img_3_big.png';
	import CardImg4 from './assets/card_img_4_sm.png';
	import CardImg4Big from './assets/card_img_4_big.png';
	import CardImg5 from './assets/card_img_5_sm.png';
	import CardImg5Big from './assets/card_img_5_big.png';

	const cards = $state([
		{
			id: 1,
			title: 'Документация',
			text: 'Обширная информация для разработчиков и дизайнеров',
			img: CardImg1,
			imgBig: CardImg1Big
		},
		{
			id: 2,
			title: 'Легкая темизация',
			text: 'Быстрая настройка своей цветовой схемы для проекта',
			img: CardImg2,
			imgBig: CardImg2Big
		},
		{
			id: 3,
			title: 'Каналы поддержки',
			text: 'Оперативно решаем вопросы и рассказываем об обновлениях',
			img: CardImg3,
			imgBig: CardImg3Big
		},
		{
			id: 4,
			title: 'Кастомизация',
			text: 'Функциональная проработка компонентов под проекты любой сложности',
			img: CardImg4,
			imgBig: CardImg4Big
		},
		{
			id: 5,
			title: 'Библиотека иконок',
			text: 'Большой набор графики в нескольких вариациях',
			img: CardImg5,
			imgBig: CardImg5Big
		}
	]);
</script>

<div class="beyondui-container">
	<div class="main-container">
		<div class="text-box">
			<div class="text first-row text--Dark_Blue">Дизайн-система — гораздо больше,</div>
			<div class="text second-row text--Text_Blue">чем элементы интерфейса</div>
		</div>
		<div class="cards-box">
			{#each cards as card, index}
				<Card
					class={index === 0
						? 'cell-first'
						: index === 3
							? 'cell-forth'
							: index === 4
								? 'cell-fifth'
								: ''}
					title={card.title}
					text={card.text}
					appearance={index === 0 ? 'tertiary' : 'secondary'}
				>
					{#if !!card.imgBig}
						<img class="cards-box-img-big" src={card.imgBig} alt="CellImg" />
					{/if}
					<img class="cards-box-img" src={card.img} alt="CellImg" />
				</Card>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@use 'styles';
</style>
