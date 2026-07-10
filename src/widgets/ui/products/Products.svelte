<script lang="ts">
  import { SferaLogo, StartLogo, VTBCloudLogo, AutographLogo, Badge, Modal } from '$shared/ui';
  import VTBCloudDarkLogo from '$shared/ui/atoms/icons/VTBCloudDark.svelte';
  import { useMediaQuery } from '$shared/ui/useMediaQuery';

  const isColorsInvertedStore = useMediaQuery('(inverted-colors: inverted)');

  /** Размеры иконок округлены до целых значений */
  const products = $derived([
    {
      id: 'sfera',
      title: 'Сфера',
      description: [
        'Российская платформа для ускорения',
        'разработки ПО. Помогает бизнесу',
        'и ИТ быстрее выпускать продукты,',
        'оптимизировать процессы и снижать',
        'затраты. Разработана холдингом',
        'Т1 — лидером ИТ-рынка',
      ],
      logoComponent: SferaLogo,
      modalLogoHeight: { desktop: '112px', tablet: '72px', phone: '72px' },
      modalLogoWidth: { desktop: '112px', tablet: '72px', phone: '72px' },
      badgeLogoHeight: { desktop: '46px', tablet: '46px', phone: '36px' },
      badgeLogoWidth: { desktop: '46px', tablet: '46px', phone: '36px' },
    },
    {
      id: 'start',
      title: 'Старт',
      description: [
        'Единая цифровая платформа',
        'для сотрудников банка.',
        'Она объединяет все внутренние',
        'сервисы, информацию и инструменты',
        'в одном месте, чтобы упростить работу',
        'и ускорить процессы',
      ],
      logoComponent: StartLogo,
      modalLogoHeight: { desktop: '81px', tablet: '72px', phone: '72px' },
      modalLogoWidth: { desktop: '234px', tablet: '208px', phone: '208px' },
      badgeLogoHeight: { desktop: '42px', tablet: '42px', phone: '26px' },
      badgeLogoWidth: { desktop: '124px', tablet: '124px', phone: '76px' },
    },
    {
      id: 'autograph',
      title: 'Госключ автограф',
      description: [
        'Платформа для работы',
        'с электронными документами',
        'и их подписания в рамках развития',
        'электронного документооборота',
        'и электронной подписи',
      ],
      logoComponent: AutographLogo,
      modalLogoHeight: { desktop: '52px', tablet: '47px', phone: '47px' },
      modalLogoWidth: { desktop: '249px', tablet: '224px', phone: '224px' },
      badgeLogoHeight: { desktop: '48px', tablet: '48px', phone: '20px' },
      badgeLogoWidth: { desktop: '166px', tablet: '166px', phone: '96px' },
    },
    {
      id: 'vtbCloud',
      title: 'VTB Cloud',
      description: [
        'Внутренний сервис банка для',
        'госучреждений и подконтрольных',
        'компаний. Позволяет быстро',
        'получать виртуальные серверы',
        'и IT‑сервисы, платя только',
        'за реальное использование.',
        'Помогает быстрее создавать',
        'и запускать цифровые проекты',
      ],
      logoComponent: $isColorsInvertedStore ? VTBCloudDarkLogo : VTBCloudLogo,
      modalLogoHeight: { desktop: '108px', tablet: '80px', phone: '80px' },
      modalLogoWidth: { desktop: '220px', tablet: '164px', phone: '164px' },
      badgeLogoHeight: { desktop: '48', tablet: '48px', phone: '25px' },
      badgeLogoWidth: { desktop: '97px', tablet: '97px', phone: '52px' },
    },
  ]);

  let showModal = $state(false);
  let productIndex = $state(0);

  let {
    title,
    description,
    modalLogoHeight,
    modalLogoWidth,
    logoComponent: ProductLogo,
  } = $derived(products[productIndex]);
</script>

<div class="products-container background--Main_White">
  <div class="main-container">
    <div class="text-box">
      <div class="text text--Dark_Blue">Помогаем командам</div>
      <div class="text text--Text_Blue">создавать лучшие</div>
      <div class="text text--Text_Blue">продукты на рынке</div>
    </div>
    <div class="image"></div>
  </div>

  {#each products as { id, title, logoComponent: Logo, badgeLogoHeight, badgeLogoWidth }, index (id)}
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
    {#each description as line, index (`${title}-${index}`)}
      {line}{#if index < description.length - 1}<br />{/if}
    {/each}
  </Modal>
</div>

<style lang="scss">
  @use 'styles';
</style>
