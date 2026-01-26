<script lang="ts">
  import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
  import { Button } from '$shared/ui';
  import logo from './assets/logo.png';
  import heroDesktop from './assets/Hero_1920-1024.png';
  import heroTablet from './assets/Hero_1023-700.png';
  import heroMobile from './assets/Hero_699-360.png';
  import animation699 from './assets/animation/699.json?url';
  import animation1023 from './assets/animation/1023.json?url';
  import animation1239 from './assets/animation/1239.json?url';
  import animation1920 from './assets/animation/1920.json?url';
  import { useMediaQuery, MOBILE_QUERY, TABLET_QUERY, DESKTOP_S_QUERY } from '$shared/ui/useMediaQuery';

  const animationSources = [animation699, animation1023, animation1239, animation1920];
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const isTabletOrSmaller = useMediaQuery(TABLET_QUERY);
  const isDesktopSOrSmaller = useMediaQuery(DESKTOP_S_QUERY);
  const breakpointIndex = $derived($isMobile ? 0 : $isTabletOrSmaller ? 1 : $isDesktopSOrSmaller ? 2 : 3);
  const animationSrc = $derived(animationSources[breakpointIndex]);

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
  <div class="lottie-hero" aria-hidden="true">
    <DotLottieSvelte src={animationSrc} autoplay loop />
  </div>
</div>

<style lang="scss">
  @use 'styles';
</style>
