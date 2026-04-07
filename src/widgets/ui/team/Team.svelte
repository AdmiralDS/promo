<script lang="ts">
  import { Cell } from '$shared/ui';
  import a_ivanov from './assets/01_a_ivanov.png';
  import i_ivanov from './assets/02_i_ivanov.png';
  import d_ivanova from './assets/03_d_ivanova.png';
  import eldar from './assets/04_eldar.png';
  import a_staloverov from './assets/05_a_staloverov.png';
  import a_dyatkov from './assets/06_a_dyatkov.png';
  import e_kutepova from './assets/07_e_kutepova.png';
  import l_markova from './assets/08_l_markova.png';
  import i_almazov from './assets/09_i_almazov.png';
  import a_babaev from './assets/10_a_babaev.png';
  import v_pleshakova from './assets/11_v_pleshakova.png';
  import { useMediaQuery, MOBILE_QUERY } from '$shared/ui/useMediaQuery';

  const isMobileStore = useMediaQuery(MOBILE_QUERY);
  let isMobile = $state(false);

  $effect(() => {
    isMobile = $isMobileStore;
  });

  const cells = $state([
    {
      id: 1,
      title: 'Андрей Иванов',
      text: 'Лидер стрима',
      img: a_ivanov,
    },
    {
      id: 2,
      title: 'Игорь Иванов',
      text: 'Руководитель дизайна',
      img: i_ivanov,
    },
    {
      id: 3,
      title: 'Диана Иванова',
      text: 'Руководитель проекта',
      img: d_ivanova,
    },
    {
      id: 4,
      title: 'Эльдар Гызыев',
      text: 'Дизайнер ОДС Aдмирал',
      img: eldar,
    },
    {
      id: 5,
      title: 'Александр Сталоверов',
      text: 'Лидер команды разработки',
      img: a_staloverov,
    },
    {
      id: 6,
      title: 'Андрей Дятков',
      text: 'Лидер мобильной разработки',
      img: a_dyatkov,
    },
    {
      id: 7,
      title: 'Екатерина Кутепова',
      text: 'Разработчик',
      img: e_kutepova,
    },
    {
      id: 8,
      title: 'Лариса Маркова',
      text: 'Разработчик',
      img: l_markova,
    },
    {
      id: 9,
      title: 'Иван Алмазов',
      text: 'Разработчик',
      img: i_almazov,
    },
    {
      id: 10,
      title: 'Адиль Бабаев',
      text: 'Разработчик',
      img: a_babaev,
    },
    {
      id: 11,
      title: 'Вероника Плешакова',
      text: 'Разработчик',
      img: v_pleshakova,
    },
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
        <div class="text-accent text--Text_Blue">10+</div>
        <div class="text-paragraph text--Snow_Gray">
          участников уже<br class="team-break-over-desktop-s" /> работают<br class="team-break-until-desktop-s" />
          над развитием<br class="team-break-not-mobile" /> дизайн-системы
        </div>
      </div>

      {#if isMobile}
        <!-- На мобильных — горизонтальный скролл -->
        <div class="cells-box-cards-scroll">
          {#each cells as cell (cell.title)}
            <Cell title={cell.title} text={cell.text} class="cells-box-item">
              <img class="cells-box-img" src={cell.img} alt="CellImg" />
            </Cell>
          {/each}
        </div>
      {:else}
        <!-- На десктопе/планшете — Grid -->
        {#each cells as cell (cell.title)}
          <Cell title={cell.title} text={cell.text} class="cells-box-item">
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
