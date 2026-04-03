<script lang="ts">
  import { onMount } from 'svelte';
  import HeaderAnimation from '$widgets/ui/header/HeaderAnimation.svelte';
  import CareBenefitsAnimation from '$widgets/ui/careBenefits/CareBenefitsAnimation.svelte';
  import BeyondUIAnimation from '$widgets/ui/beyondUI/BeyondUIAnimation.svelte';
  import TeamAnimation from '$widgets/ui/team/TeamAnimation.svelte';

  let pageBackground: HTMLDivElement | undefined;

  let headerTop = $state(0);
  let careBenefitsCenter = $state(0);
  let beyondUICenter = $state(0);
  let teamCenter = $state(0);

  let rafId = 0;

  let headerEl: HTMLElement | null = null;
  let careBenefitsEl: HTMLElement | null = null;
  let beyondUIEl: HTMLElement | null = null;
  let teamEl: HTMLElement | null = null;

  const getSectionTop = (section: HTMLElement, pageBackgroundTop: number) =>
    section.getBoundingClientRect().top - pageBackgroundTop;

  const getSectionCenter = (section: HTMLElement, pageBackgroundTop: number) =>
    getSectionTop(section, pageBackgroundTop) + section.getBoundingClientRect().height / 2;

  const updatePositions = () => {
    if (!pageBackground) return;

    const pageBackgroundTop = pageBackground.getBoundingClientRect().top;

    headerTop = headerEl ? getSectionTop(headerEl, pageBackgroundTop) : 0;
    careBenefitsCenter = careBenefitsEl ? getSectionCenter(careBenefitsEl, pageBackgroundTop) : 0;
    beyondUICenter = beyondUIEl ? getSectionCenter(beyondUIEl, pageBackgroundTop) : 0;
    teamCenter = teamEl ? getSectionCenter(teamEl, pageBackgroundTop) : 0;
  };

  const scheduleUpdate = () => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(updatePositions);
  };

  onMount(() => {
    headerEl = document.querySelector<HTMLElement>('.header-container');
    careBenefitsEl = document.querySelector<HTMLElement>('.carebenefits-container');
    beyondUIEl = document.querySelector<HTMLElement>('.beyondui-container');
    teamEl = document.querySelector<HTMLElement>('.team-container');

    const resizeObserver = new ResizeObserver(scheduleUpdate);

    [headerEl, careBenefitsEl, beyondUIEl, teamEl]
      .filter(Boolean)
      .forEach((el) => resizeObserver.observe(el as HTMLElement));

    scheduleUpdate();
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', scheduleUpdate);
      cancelAnimationFrame(rafId);
    };
  });
</script>

<div bind:this={pageBackground} class="page-background" aria-hidden="true">
  <HeaderAnimation top={headerTop} />
  <CareBenefitsAnimation top={careBenefitsCenter} />
  <BeyondUIAnimation top={beyondUICenter} />
  <TeamAnimation top={teamCenter} />
</div>

<style lang="scss">
  .page-background {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
  }
</style>
