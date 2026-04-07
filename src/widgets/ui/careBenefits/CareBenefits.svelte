<script lang="ts">
  import { Card } from '$shared/ui';
  import { useMediaQuery, MOBILE_QUERY, TABLET_QUERY, DESKTOP_S_QUERY } from '$shared/ui/useMediaQuery';

  import Speed_699 from './assets/Speed_699-360.png';
  import Speed_1023 from './assets/Speed_1023-700.png';
  import Speed_1239 from './assets/Speed_1239-1024.png';
  import Speed_1920 from './assets/Speed_1920-1240.png';

  import Style_699 from './assets/Style_699-360.png';
  import Style_1023 from './assets/Style_1023-700.png';
  import Style_1239 from './assets/Style_1239-1024.png';
  import Style_1920 from './assets/Style_1920-1240.png';

  import Space_699 from './assets/Space_699-360.png';
  import Space_1023 from './assets/Space_1023-700.png';
  import Space_1239 from './assets/Space_1239-1024.png';
  import Space_1920 from './assets/Space_1920-1240.png';

  const speedImages = [Speed_699, Speed_1023, Speed_1239, Speed_1920];
  const styleImages = [Style_699, Style_1023, Style_1239, Style_1920];
  const spaceImages = [Space_699, Space_1023, Space_1239, Space_1920];

  const isMobile = useMediaQuery(MOBILE_QUERY);
  const isTabletOrSmaller = useMediaQuery(TABLET_QUERY);
  const isDesktopSOrSmaller = useMediaQuery(DESKTOP_S_QUERY);

  const breakpointIndex = $derived($isMobile ? 0 : $isTabletOrSmaller ? 1 : $isDesktopSOrSmaller ? 2 : 3);

  const cards = $derived([
    {
      id: 1,
      title: 'Ускоряем создание продуктов',
      text: 'Помогаем бизнесу быстро тестировать гипотезы и выводить решения на рынок',
      img: speedImages[breakpointIndex],
    },
    {
      id: 2,
      title: 'Формируем единый визуальный стиль',
      text: 'Строим экосистему визуальных решений, которая повышает доверие пользователей',
      img: styleImages[breakpointIndex],
    },
    {
      id: 3,
      title: 'Создаем комфортное пространство',
      text: 'Помогаем командам говорить на одном языке и улучшать процесс доставки решений',
      img: spaceImages[breakpointIndex],
    },
  ]);

  const cardsOrder = $derived($isDesktopSOrSmaller ? [1, 0, 2] : [0, 1, 2]);
  const orderedCards = $derived(cardsOrder.map((index) => cards[index]));
</script>

<div class="carebenefits-container">
  <div class="main-container">
    <div class="text-box">
      <div class="text first-row text--Dark_Blue">
        <span class="mobile-break-after">Заботимся</span> не только о качестве,
      </div>
      <div class="text second-row text--Text_Blue">но и о вашем времени</div>
    </div>
    <div class="cards-box">
      {#each orderedCards as card}
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
