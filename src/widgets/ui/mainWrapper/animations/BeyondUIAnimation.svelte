<script lang="ts">
  import ResponsiveAnimationVideo from './ResponsiveAnimationVideo.svelte';
  import animationDesktopVideoMp4 from './assets/block_3_beyond-ui/1920.mp4';
  import animationDesktopSVideoMp4 from './assets/block_3_beyond-ui/1248.mp4';
  import animationTabletVideoMp4 from './assets/block_3_beyond-ui/1024.mp4';
  import animationMobileVideoMp4 from './assets/block_3_beyond-ui/704.mp4';

  let { top = 0 }: { top?: number } = $props();
</script>

<ResponsiveAnimationVideo
  align="center"
  {top}
  fixedHeights={{ desktop: 1672, desktopS: 1600, tablet: 1576, mobile: 1888 }}
  desktop={animationDesktopVideoMp4}
  desktopS={animationDesktopSVideoMp4}
  tablet={animationTabletVideoMp4}
  mobile={animationMobileVideoMp4}
/>
