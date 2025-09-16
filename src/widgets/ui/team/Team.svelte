<script lang="ts">
	import { Cell } from '$shared/ui';
	import CellImg1 from './assets/cell_img_1_sm.png';
	import CellImg1Big from './assets/cell_img_1_big.png';
	import CellImg2Big from './assets/cell_img_2_big.png';
	import { useMedia } from './useMedia';

	// const isMobile = useMedia('(max-width: 767px)');
	let isMobile = $state(false);

	$effect.pre(() => {
		if (typeof window === 'undefined') return;

		const media = window.matchMedia('(max-width: 767px)');
		const update = () => (isMobile = media.matches);

		update();
		media.addEventListener('change', update);

		return () => media.removeEventListener('change', update);
	});

	const cells = $state([
		{
			id: 1,
			title: 'Андрей Иванов',
			text: 'Лидер стрима',
			img: CellImg1,
			imgBig: CellImg1Big
		},
		{
			id: 2,
			title: 'Игорь Иванов',
			text: 'Руководитель дизайна',
			img: CellImg1,
			imgBig: CellImg2Big
		},
		{
			id: 3,
			title: 'Диана Иванова',
			text: 'Руководитель дизайна',
			img: CellImg1,
			imgBig: CellImg2Big
		},
		{
			id: 4,
			title: 'Эльдар Гызыев',
			text: 'Дизайнер ОДС Aдмирал',
			img: CellImg1,
			imgBig: CellImg2Big
		},
		{
			id: 5,
			title: 'Андрей Литвинов',
			text: 'Лидер команды разработки',
			img: CellImg1,
			imgBig: CellImg2Big
		},
		{
			id: 6,
			title: 'Виктория Шуваева',
			text: 'Менеджер проекта',
			img: CellImg1,
			imgBig: CellImg2Big
		},
		{
			id: 7,
			title: 'Никита Маслов',
			text: 'Менеджер проекта',
			img: CellImg1,
			imgBig: CellImg2Big
		}
	]);
</script>

<div class="team-container">
	<div class="main-container">
		<div class="text-box">
			<div class="text text--Dark_Blue">Команда проекта</div>
			<div class="text text--Text_Blue">самый важный компонент</div>
		</div>
		<div class="cells-box">
			<!-- Текст как полноценная ячейка -->
			<div class="cells-box-item cells-box-intro">
				<div class="text-accent text--Text_Blue">12+</div>
				<div class="text-paragraph text--Snow_Gray">участников уже работают над развитием дизайн-системы</div>
			</div>

			{#if isMobile}
				<!-- На мобильных — горизонтальный скролл -->
				<div class="cells-box-cards-scroll">
					{#each cells as cell (cell.title)}
						<Cell title={cell.title} text={cell.text} class="cells-box-item">
							{#if !!cell.imgBig}
								<img class="cells-box-img-big" src={cell.imgBig} alt="CellImg" />
							{/if}
							<img class="cells-box-img" src={cell.img} alt="CellImg" />
						</Cell>
					{/each}
				</div>
			{:else}
				<!-- На десктопе/планшете — Grid -->
				{#each cells as cell (cell.title)}
					<Cell title={cell.title} text={cell.text} class="cells-box-item">
						{#if !!cell.imgBig}
							<img class="cells-box-img-big" src={cell.imgBig} alt="CellImg" />
						{/if}
						<img class="cells-box-img" src={cell.img} alt="CellImg" />
					</Cell>
				{/each}
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	@use 'styles';
</style>
