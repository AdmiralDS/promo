<script lang="ts">
  import { MOBILE_QUERY, TABLET_QUERY, DESKTOP_S_QUERY } from '$shared/ui/useMediaQuery';

  type SourcePair = {
    webm: string;
    mp4: string;
  };

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
    desktop: SourcePair;
    desktopS: SourcePair;
    tablet: SourcePair;
    mobile: SourcePair;
  } = $props();
</script>

<div
  class={`animation-layer ${align === 'center' ? 'animation-layer-centered' : ''} ${className}`.trim()}
  style={`top: ${top}px;`}
  aria-hidden="true"
>
  <video class="block-video" autoplay muted loop playsinline preload="auto">
    <source src={mobile.webm} media={MOBILE_QUERY} type="video/webm" />
    <source src={mobile.mp4} media={MOBILE_QUERY} type="video/mp4" />

    <source src={tablet.webm} media={TABLET_QUERY} type="video/webm" />
    <source src={tablet.mp4} media={TABLET_QUERY} type="video/mp4" />

    <source src={desktopS.webm} media={DESKTOP_S_QUERY} type="video/webm" />
    <source src={desktopS.mp4} media={DESKTOP_S_QUERY} type="video/mp4" />

    <source src={desktop.webm} type="video/webm" />
    <source src={desktop.mp4} type="video/mp4" />
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
