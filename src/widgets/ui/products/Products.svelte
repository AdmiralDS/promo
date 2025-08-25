<script>
	/**
	 * Компонент Products - это начальный вариант раздела сайта
	 * "Помогаем командам создавать лучшие продукты на рынке".
	 * Здесь приведен пример того, как использовать компонент Modal и логотипы продуктов.
	 **/

	import { Modal } from '$shared/ui';
	import { SferaLogo, StartLogo, VTBCloudLogo, AutographLogo } from './icons/index';

	const products = [
		{
			title: 'Сфера',
			description: `Российская платформа для ускорения<br/>разработки ПО. Помогает бизнесу<br/>и ИТ быстрее выпускать продукты,<br/>
	оптимизировать процессы и снижать<br/>затраты. Разработана холдингом<br/>Т1 — лидером ИТ-рынка`,
			logo: {
				component: SferaLogo,
				height: { desktop: '112px', tablet: '72px' },
				width: { desktop: '112px', tablet: '72px' }
			}
		},
		{
			title: 'Старт',
			description: `Единая цифровая платформа<br/>для сотрудников банка. Она<br/>объединяет все внутренние сервисы,<br/>информацию
		и инструменты в одном<br/>месте, чтобы упростить работу<br/>и ускорить процессы`,
			logo: {
				component: StartLogo,
				height: { desktop: '80px', tablet: '72px' },
				width: { desktop: '234px', tablet: '208px' }
			}
		},
		{
			title: 'Госключ автограф',
			description: `Платформа для работы<br/>с электронными документами и их<br/>подписания в рамках развития<br/>электронного документооборота<br/>
		и электронной подписи`,
			logo: {
				component: AutographLogo,
				height: { desktop: '51px', tablet: '47px' },
				width: { desktop: '248px', tablet: '224px' }
			}
		},
		{
			title: 'VTB Cloud',
			description: `Внутренний сервис банка для<br/>госучрежденийи подконтрольных<br/>компаний. Позволяет быстро<br/>получать виртуальные
		серверы и IT-<br/>сервисы, платя только за реальное<br/>использование. Помогает быстрее<br/>создавать и запускать
		цифровые<br/>проекты`,
			logo: {
				component: VTBCloudLogo,
				height: { desktop: '108px', tablet: '80px' },
				width: { desktop: '220px', tablet: '164px' }
			}
		}
	];

	let showModal = $state(false);
	let productIndex = $state(0);

	let product = $derived(products[productIndex]);
	let ProductLogo = $derived(products[productIndex].logo.component);
</script>

{#each products as product, index}
	<button
		onclick={() => {
			showModal = true;
			productIndex = index;
		}}
	>
		Show info about {product.title}
	</button>
{/each}

<Modal bind:showModal title={product.title}>
	{#snippet logo()}
		<ProductLogo height={product.logo.height} width={product.logo.width}></ProductLogo>
	{/snippet}
	{@html product.description}
</Modal>
