<script lang="ts">
  import ResponsiveAnimationVideo from './ResponsiveAnimationVideo.svelte';
  import animationDesktopVideoMp4 from './assets/block_3_beyond-ui/1920.hevc.mp4';
  import animationDesktopSVideoMp4 from './assets/block_3_beyond-ui/1239.hevc.mp4';
  import animationTabletVideoMp4 from './assets/block_3_beyond-ui/1023.hevc.mp4';
  import animationMobileVideoMp4 from './assets/block_3_beyond-ui/699.hevc.mp4';

  let { top = 0 }: { top?: number } = $props();
</script>

<ResponsiveAnimationVideo
  align="center"
  {top}
  fixedHeights={{ desktop: 1614, desktopS: 1540, tablet: 1478, mobile: 1822 }}
  desktop={animationDesktopVideoMp4}
  desktopS={animationDesktopSVideoMp4}
  tablet={animationTabletVideoMp4}
  mobile={animationMobileVideoMp4}
/>
