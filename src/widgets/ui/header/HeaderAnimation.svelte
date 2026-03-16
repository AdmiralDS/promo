<script lang="ts">
  import animationDesktopVideo from './assets/animation/1920x1019.webm';
  import animationDesktopSVideo from './assets/animation/1239x991.webm';
  import animationTabletVideo from './assets/animation/1023x897.webm';
  import animationMobileVideo from './assets/animation/699x600.webm';
  import { MOBILE_QUERY, TABLET_QUERY, DESKTOP_S_QUERY } from '$shared/ui/useMediaQuery';
</script>

<div class="animation-layer" aria-hidden="true">
  <video class="hero-video" autoplay muted loop playsinline preload="auto">
    <source src={animationMobileVideo} media={MOBILE_QUERY} type="video/webm" />
    <source src={animationTabletVideo} media={TABLET_QUERY} type="video/webm" />
    <source src={animationDesktopSVideo} media={DESKTOP_S_QUERY} type="video/webm" />
    <source src={animationDesktopVideo} type="video/webm" />
  </video>
</div>

<style lang="scss">
  @use '$shared/ui/breakpoints' as breakpoints;

  .animation-layer {
    height: 1019px;
    inset: 0 0 auto;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    z-index: 0;

    @include breakpoints.respond-until(breakpoints.$desktopS) {
      height: 991px;
    }

    @include breakpoints.respond-until(breakpoints.$tablet) {
      height: 897px;
    }

    @include breakpoints.respond-until(breakpoints.$phone) {
      height: 600px;
    }
  }

  .hero-video {
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
</style>
