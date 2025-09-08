<script lang="ts">
	import { Card } from '$shared/ui';

	const cards = $state([
		{
			id: 1,
			title: 'Ускоряем создание продуктов',
			text: 'Помогаем бизнесу быстро тестировать гипотезы и выводить решения на рынок'
		},
		{
			id: 2,
			title: 'Формируем единый визуальный стиль',
			text: 'Строим экосистему визуальных решений, которая повышает доверие пользователей'
		},
		{
			id: 3,
			title: 'Создаем комфортное пространство',
			text: 'Помогаем командам говорить на одном языке и улучшать процесс доставки решений'
		}
	]);
</script>

<div class="carebenefits-container">
	<div class="main-container">
		<div class="text-box">
			<div class="text first-row text--Dark_Blue">Заботимся не только о качестве,</div>
			<div class="text second-row text--Text_Blue">но и о вашем времени</div>
		</div>
		<div class="cards-box">
			{#each cards as card (card.id)}
				<Card class="cards-box-item" title={card.title} text={card.text} appearance="primary"></Card>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@use 'styles';
</style>
