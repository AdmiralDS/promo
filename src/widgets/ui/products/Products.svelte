<script lang="ts">
	import { SferaLogo, StartLogo, VTBCloudLogo, AutographLogo, Badge, Modal } from '$shared/ui';
	import shadow from './assets/Shadow.png';

	/** Размеры иконок округлены до целых значений */
	const products = [
		{
			id: 'sfera',
			title: 'Сфера',
			description: `Российская платформа для ускорения<br/>разработки ПО. Помогает бизнесу<br/>и ИТ быстрее выпускать продукты,<br/>
			оптимизировать процессы и снижать<br/>затраты. Разработана холдингом<br/>Т1 — лидером ИТ-рынка`,
			logoComponent: SferaLogo,
			modalLogoHeight: { desktop: '112px', tablet: '72px', phone: '72px' },
			modalLogoWidth: { desktop: '112px', tablet: '72px', phone: '72px' },
			badgeLogoHeight: { desktop: '46px', tablet: '46px', phone: '36px' },
			badgeLogoWidth: { desktop: '46px', tablet: '46px', phone: '36px' }
		},
		{
			id: 'start',
			title: 'Старт',
			description: `Единая цифровая платформа<br/>для сотрудников банка. Она<br/>объединяет все внутренние сервисы,<br/>информацию
			и инструменты в одном<br/>месте, чтобы упростить работу<br/>и ускорить процессы`,
			logoComponent: StartLogo,
			modalLogoHeight: { desktop: '81px', tablet: '72px', phone: '72px' },
			modalLogoWidth: { desktop: '234px', tablet: '208px', phone: '208px' },
			badgeLogoHeight: { desktop: '42px', tablet: '42px', phone: '26px' },
			badgeLogoWidth: { desktop: '124px', tablet: '124px', phone: '76px' }
		},
		{
			id: 'autograph',
			title: 'Госключ автограф',
			description: `Платформа для работы<br/>с электронными документами и их<br/>подписания в рамках развития<br/>электронного 
			документооборота<br/>и электронной подписи`,
			logoComponent: AutographLogo,
			modalLogoHeight: { desktop: '52px', tablet: '47px', phone: '47px' },
			modalLogoWidth: { desktop: '249px', tablet: '224px', phone: '224px' },
			badgeLogoHeight: { desktop: '48px', tablet: '48px', phone: '20px' },
			badgeLogoWidth: { desktop: '166px', tablet: '166px', phone: '96px' }
		},
		{
			id: 'vtbCloud',
			title: 'VTB Cloud',
			description: `Внутренний сервис банка для<br/>госучрежденийи подконтрольных<br/>компаний. Позволяет быстро<br/>получать виртуальные
			серверы и IT-<br/>сервисы, платя только за реальное<br/>использование. Помогает быстрее<br/>создавать и запускать
			цифровые<br/>проекты`,
			logoComponent: VTBCloudLogo,
			modalLogoHeight: { desktop: '108px', tablet: '80px', phone: '80px' },
			modalLogoWidth: { desktop: '220px', tablet: '164px', phone: '164px' },
			badgeLogoHeight: { desktop: '48', tablet: '48px', phone: '25px' },
			badgeLogoWidth: { desktop: '97px', tablet: '97px', phone: '52px' }
		}
	];

	let showModal = $state(false);
	let productIndex = $state(0);

	let {
		title,
		description,
		modalLogoHeight,
		modalLogoWidth,
		logoComponent: ProductLogo
	} = $derived(products[productIndex]);
</script>

<div class="products-container">
	<div class="main-container">
		<div class="text-box">
			<div class="text text--Dark_Blue">Помогаем командам</div>
			<div class="text text--Text_Blue">создавать лучшие</div>
			<div class="text text--Text_Blue">продукты на рынке</div>
		</div>
		<div class="image">
			<img src={shadow} aria-hidden class="image-shadow" />
		</div>
	</div>

	{#each products as { id, title, logoComponent: Logo, badgeLogoHeight, badgeLogoWidth }, index}
		<div class="badge-{id}">
			<Badge
				aria-label="{title} logo"
				onclick={() => {
					showModal = true;
					productIndex = index;
				}}
			>
				<div class="badge-logo badge-logo-{id}">
					<Logo height={badgeLogoHeight} width={badgeLogoWidth}></Logo>
				</div>
			</Badge>
		</div>
	{/each}
	<Modal bind:showModal {title}>
		{#snippet logo()}
			<ProductLogo height={modalLogoHeight} width={modalLogoWidth}></ProductLogo>
		{/snippet}
		{@html description}
	</Modal>
</div>

<style lang="scss">
	@use 'styles';
</style>
