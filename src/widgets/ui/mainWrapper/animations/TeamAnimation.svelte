<script lang="ts">
  import ResponsiveAnimationVideo from './ResponsiveAnimationVideo.svelte';
  import animationDesktopVideoMp4 from './assets/block_4_team/1920.mp4';
  import animationDesktopSVideoMp4 from './assets/block_4_team/1248.mp4';
  import animationTabletVideoMp4 from './assets/block_4_team/1024.mp4';
  import animationMobileVideoMp4 from './assets/block_4_team/704.mp4';

  let { top = 0 }: { top?: number } = $props();
</script>

<ResponsiveAnimationVideo
  align="center"
  {top}
  fixedHeights={{ desktop: 2352, desktopS: 2104, tablet: 2920, mobile: 773 }}
  desktop={animationDesktopVideoMp4}
  desktopS={animationDesktopSVideoMp4}
  tablet={animationTabletVideoMp4}
  mobile={animationMobileVideoMp4}
/>
