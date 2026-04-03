<script lang="ts">
  import animationDesktopVideo from './assets/animation/1920x1019.webm';
  import animationDesktopSVideo from './assets/animation/1239x991.webm';
  import animationTabletVideo from './assets/animation/1023x897.webm';
  import animationMobileVideo from './assets/animation/699x600.webm';
  import animationDesktopVideoMp4 from './assets/animation/1920.hevc.mp4';
  import animationDesktopSVideoMp4 from './assets/animation/1239.hevc.mp4';
  import animationTabletVideoMp4 from './assets/animation/1023.hevc.mp4';
  import animationMobileVideoMp4 from './assets/animation/699.hevc.mp4';
  import { MOBILE_QUERY, TABLET_QUERY, DESKTOP_S_QUERY } from '$shared/ui/useMediaQuery';
</script>

<div class="animation-layer" aria-hidden="true">
  <video class="block-video" autoplay muted loop playsinline preload="auto">
    <source src={animationMobileVideo} media={MOBILE_QUERY} type="video/webm" />
    <source src={animationMobileVideoMp4} media={MOBILE_QUERY} type="video/mp4" />

    <source src={animationTabletVideo} media={TABLET_QUERY} type="video/webm" />
    <source src={animationTabletVideoMp4} media={TABLET_QUERY} type="video/mp4" />

    <source src={animationDesktopSVideo} media={DESKTOP_S_QUERY} type="video/webm" />
    <source src={animationDesktopSVideoMp4} media={DESKTOP_S_QUERY} type="video/mp4" />

    <source src={animationDesktopVideo} type="video/webm" />
    <source src={animationDesktopVideoMp4} type="video/mp4" />
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

  .block-video {
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
</style>
