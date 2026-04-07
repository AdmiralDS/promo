<script lang="ts">
  import { useMediaQuery, MOBILE_QUERY, TABLET_QUERY, DESKTOP_S_QUERY } from '$shared/ui/useMediaQuery';

  type VideoSource = string;
  type FixedHeights = {
    desktop: number;
    desktopS: number;
    tablet: number;
    mobile: number;
  };

  let {
    className = '',
    align = 'top',
    top = 0,
    fixedHeights,
    desktop,
    desktopS,
    tablet,
    mobile,
  }: {
    className?: string;
    align?: 'top' | 'center';
    top?: number;
    fixedHeights?: FixedHeights;
    desktop: VideoSource;
    desktopS: VideoSource;
    tablet: VideoSource;
    mobile: VideoSource;
  } = $props();

  const isMobile = useMediaQuery(MOBILE_QUERY);
  const isTabletOrSmaller = useMediaQuery(TABLET_QUERY);
  const isDesktopSOrSmaller = useMediaQuery(DESKTOP_S_QUERY);

  const layerStyle = $derived(`top: ${top}px`);

  const breakpointIndex = $derived($isMobile ? 0 : $isTabletOrSmaller ? 1 : $isDesktopSOrSmaller ? 2 : 3);

  const videoSources = $derived([mobile, tablet, desktopS, desktop]);

  const currentHeight = $derived(
    fixedHeights
      ? [fixedHeights.mobile, fixedHeights.tablet, fixedHeights.desktopS, fixedHeights.desktop][breakpointIndex]
      : null,
  );

  const currentVideoSource = $derived(videoSources[breakpointIndex]);

  const videoStyle = $derived(currentHeight ? `height: ${currentHeight}px;` : '');
</script>

<div
  class={`animation-layer ${align === 'center' ? 'animation-layer-centered' : ''} ${fixedHeights ? 'animation-layer-fixed-height' : ''} ${className}`.trim()}
  style={layerStyle}
  aria-hidden="true"
>
  <video class="block-video" style={videoStyle} autoplay muted loop playsinline preload="auto">
    <source src={currentVideoSource} type="video/mp4" />
  </video>
</div>

<style lang="scss">
  .animation-layer {
    inset-inline: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    z-index: 0;
  }

  .block-video {
    display: block;
    width: auto;
    max-width: none;
  }

  .animation-layer-fixed-height {
    display: flex;
    justify-content: center;
  }

  .animation-layer-centered {
    transform: translateY(-50%);
  }
</style>
