<script lang="ts">
  import ResponsiveAnimationVideo from './ResponsiveAnimationVideo.svelte';
  import animationDesktopVideoMp4 from './assets/block_4_team/1920.hevc.mp4';
  import animationDesktopSVideoMp4 from './assets/block_4_team/1239.hevc.mp4';
  import animationTabletVideoMp4 from './assets/block_4_team/1023.hevc.mp4';
  import animationMobileVideoMp4 from './assets/block_4_team/699.hevc.mp4';

  let { top = 0 }: { top?: number } = $props();
</script>

<ResponsiveAnimationVideo
  align="center"
  {top}
  fixedHeights={{ desktop: 2304, desktopS: 2003, tablet: 2662, mobile: 773 }}
  desktop={animationDesktopVideoMp4}
  desktopS={animationDesktopSVideoMp4}
  tablet={animationTabletVideoMp4}
  mobile={animationMobileVideoMp4}
/>
