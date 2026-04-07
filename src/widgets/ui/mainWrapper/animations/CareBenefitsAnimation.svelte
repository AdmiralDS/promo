<script lang="ts">
  import ResponsiveAnimationVideo from './ResponsiveAnimationVideo.svelte';
  import animationDesktopVideoMp4 from './assets/block_2_care-benefits/1920.hevc.mp4';
  import animationDesktopSVideoMp4 from './assets/block_2_care-benefits/1239.hevc.mp4';
  import animationTabletVideoMp4 from './assets/block_2_care-benefits/1023.hevc.mp4';
  import animationMobileVideoMp4 from './assets/block_2_care-benefits/699.hevc.mp4';

  let { top = 0 }: { top?: number } = $props();
</script>

<ResponsiveAnimationVideo
  align="center"
  {top}
  fixedHeights={{ desktop: 1104, desktopS: 1008, tablet: 960, mobile: 1280 }}
  desktop={animationDesktopVideoMp4}
  desktopS={animationDesktopSVideoMp4}
  tablet={animationTabletVideoMp4}
  mobile={animationMobileVideoMp4}
/>
