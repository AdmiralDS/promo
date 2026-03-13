<script lang="ts">
  import { Button } from '$shared/ui';
  import logo from './assets/logo.png';
  import heroDesktop from './assets/Hero_1920-1024.png';
  import heroTablet from './assets/Hero_1023-700.png';
  import heroMobile from './assets/Hero_699-360.png';
  import animation1920Video from './assets/animation/1920.webm';
  import { useMediaQuery, MOBILE_QUERY, TABLET_QUERY, DESKTOP_S_QUERY } from '$shared/ui/useMediaQuery';

  const isMobile = useMediaQuery(MOBILE_QUERY);
  const isTabletOrSmaller = useMediaQuery(TABLET_QUERY);
  const isDesktopSOrSmaller = useMediaQuery(DESKTOP_S_QUERY);
  const useVideoAnimation = $derived(!$isMobile && !$isTabletOrSmaller && !$isDesktopSOrSmaller);

  const handleButtonClick = () => {
    window.open('https://admiralds.github.io/react-ui/', '_blank');
  };
</script>

<div class="header-container">
  <div class="main-container">
    <img src={logo} alt={'logo'} class="logo centered" />
    <div class="text-box">
      <div class="text first-two-row text--Dark_Blue">Создавайте</div>
      <div class="text first-two-row text--Dark_Blue">IT-продукты</div>
      <div class="text text--Text_Blue">с Адмиралом</div>
    </div>
    <div class="centered">
      <Button onclick={handleButtonClick}>Сторибук</Button>
    </div>
    <picture class="hero centered">
      <source srcset={heroMobile} media={MOBILE_QUERY} />
      <source srcset={heroTablet} media={TABLET_QUERY} />
      <img src={heroDesktop} alt="Hero" loading="lazy" />
    </picture>
  </div>
  {#if useVideoAnimation}
    <div class="animation-hero" aria-hidden="true">
      <video class="hero-video" autoplay muted loop playsinline preload="auto">
        <source src={animation1920Video} type="video/webm" />
      </video>
    </div>
  {/if}
</div>

<style lang="scss">
  @use 'styles';
</style>
