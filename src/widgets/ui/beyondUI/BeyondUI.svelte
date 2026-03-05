<script lang="ts">
  import { Card } from '$shared/ui';
  import { useMediaQuery, MOBILE_QUERY, TABLET_QUERY, DESKTOP_S_QUERY } from '$shared/ui/useMediaQuery';

  // Document (CardImg1)
  import Document_699 from './assets/Document_699-360.png';
  import Document_1023 from './assets/Document_1023-700.png';
  import Document_1239 from './assets/Document_1239-1024.png';
  import Document_1920 from './assets/Document_1920-1240.png';
  // Theme (CardImg2)
  import Theme_699 from './assets/Theme_699-360.png';
  import Theme_1023 from './assets/Theme_1023-700.png';
  import Theme_1239 from './assets/Theme_1239-1024.png';
  import Theme_1920 from './assets/Theme_1920-1240.png';
  // Support (CardImg3)
  import Support_699 from './assets/Support_699-360.png';
  import Support_1023 from './assets/Support_1023-700.png';
  import Support_1239 from './assets/Support_1239-1024.png';
  import Support_1920 from './assets/Support_1920-1240.png';
  // Custom (CardImg4)
  import Custom_699 from './assets/Custom_699-360.png';
  import Custom_1023 from './assets/Custom_1023-700.png';
  import Custom_1239 from './assets/Custom_1239-1024.png';
  import Custom_1920 from './assets/Custom_1920-1240.png';
  // Icons (CardImg5)
  import Icons_699 from './assets/Icons_699-360.png';
  import Icons_1023 from './assets/Icons_1023-700.png';
  import Icons_1239 from './assets/Icons_1239-1024.png';
  import Icons_1920 from './assets/Icons_1920-1240.png';

  const documentImages = [Document_699, Document_1023, Document_1239, Document_1920];
  const themeImages = [Theme_699, Theme_1023, Theme_1239, Theme_1920];
  const supportImages = [Support_699, Support_1023, Support_1239, Support_1920];
  const customImages = [Custom_699, Custom_1023, Custom_1239, Custom_1920];
  const iconsImages = [Icons_699, Icons_1023, Icons_1239, Icons_1920];

  const isMobile = useMediaQuery(MOBILE_QUERY);
  const isTabletOrSmaller = useMediaQuery(TABLET_QUERY);
  const isDesktopSOrSmaller = useMediaQuery(DESKTOP_S_QUERY);

  // 0: ≤699px, 1: 700–1023px, 2: 1024–1239px, 3: ≥1240px
  const breakpointIndex = $derived($isMobile ? 0 : $isTabletOrSmaller ? 1 : $isDesktopSOrSmaller ? 2 : 3);

  const cards = $derived([
    {
      id: 1,
      title: 'Документация',
      text: 'Обширная информация для разработчиков и дизайнеров',
      img: documentImages[breakpointIndex],
    },
    {
      id: 2,
      title: 'Легкая темизация',
      text: 'Быстрая настройка своей цветовой схемы для проекта',
      img: themeImages[breakpointIndex],
    },
    {
      id: 3,
      title: 'Каналы поддержки',
      text: 'Оперативно решаем вопросы и рассказываем об обновлениях',
      img: supportImages[breakpointIndex],
    },
    {
      id: 4,
      title: 'Кастомизация',
      text: 'Функциональная проработка компонентов под проекты любой сложности',
      img: customImages[breakpointIndex],
    },
    {
      id: 5,
      title: 'Библиотека иконок',
      text: 'Большой набор графики в нескольких вариациях',
      img: iconsImages[breakpointIndex],
    },
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
          class={index === 0 ? 'cell-first' : index === 3 ? 'cell-forth' : index === 4 ? 'cell-fifth' : ''}
          title={card.title}
          text={card.text}
          appearance={index === 0 ? 'tertiary' : 'secondary'}
        >
          <img class="cards-box-img" src={card.img} alt="CellImg" />
        </Card>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  @use 'styles';
</style>
