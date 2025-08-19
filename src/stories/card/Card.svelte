<script lang="ts">
	import { Card } from '../../shared/ui';
	import type { CardContainerAppearance } from '$shared/ui/types';
	import CardImg1 from './assets/CardImg1.png';
	import CardImg2 from './assets/CardImg2.png';

	interface Props {
		/** How large should the bucontainertton be? */
		appearance?: CardContainerAppearance;
		title?: string;
		text?: string;
	}

	const { appearance, title, text, ...props }: Props = $props();

	const title1 = 'Формируем единый визуальный стиль';
	const text1 = 'Строим экосистему визуальных решений, которая повышает доверие пользователей';
	const title2 = 'Легкая темизация';
	const text2 = 'Быстрая настройка своей цветовой схемы для проекта';
</script>

<Card {...props} appearance="primary" title={title1} text={text1}>
	<img class="card-img" src={CardImg1} alt="CardImg1" />
</Card>
<div style="height: 20px; width: 50px"></div>
<Card {...props} appearance="secondary" title={title2} text={text2}>
	<img class="card-img" src={CardImg2} alt="CardImg2" />
</Card>

<style lang="scss">
	@use 'card';
</style>
