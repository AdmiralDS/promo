<script lang="ts">
  import ResponsiveAnimationVideo from './ResponsiveAnimationVideo.svelte';
  import animationDesktopVideoMp4 from './assets/block_1_header/1920.mp4';
  import animationDesktopSVideoMp4 from './assets/block_1_header/1248.mp4';
  import animationTabletVideoMp4 from './assets/block_1_header/1024.mp4';
  import animationMobileVideoMp4 from './assets/block_1_header/704.mp4';

  let { top = 0 }: { top?: number } = $props();
</script>

<ResponsiveAnimationVideo
  className="header-animation-layer"
  {top}
  fixedHeights={{ desktop: 1019, desktopS: 991, tablet: 897, mobile: 600 }}
  desktop={animationDesktopVideoMp4}
  desktopS={animationDesktopSVideoMp4}
  tablet={animationTabletVideoMp4}
  mobile={animationMobileVideoMp4}
/>
