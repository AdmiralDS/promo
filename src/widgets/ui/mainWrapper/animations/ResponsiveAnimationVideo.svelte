<script lang="ts">
  import { MOBILE_QUERY, TABLET_QUERY, DESKTOP_S_QUERY } from '$shared/ui/useMediaQuery';

  type VideoSource = string;

  let {
    className = '',
    align = 'top',
    top = 0,
    desktop,
    desktopS,
    tablet,
    mobile,
  }: {
    className?: string;
    align?: 'top' | 'center';
    top?: number;
    desktop: VideoSource;
    desktopS: VideoSource;
    tablet: VideoSource;
    mobile: VideoSource;
  } = $props();
</script>

<div
  class={`animation-layer ${align === 'center' ? 'animation-layer-centered' : ''} ${className}`.trim()}
  style={`top: ${top}px;`}
  aria-hidden="true"
>
  <video class="block-video" autoplay muted loop playsinline preload="auto">
    <source src={mobile} media={MOBILE_QUERY} type="video/mp4" />

    <source src={tablet} media={TABLET_QUERY} type="video/mp4" />

    <source src={desktopS} media={DESKTOP_S_QUERY} type="video/mp4" />

    <source src={desktop} type="video/mp4" />
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
    height: auto;
    width: 100%;
  }

  .animation-layer-centered {
    transform: translateY(-50%);
  }
</style>
