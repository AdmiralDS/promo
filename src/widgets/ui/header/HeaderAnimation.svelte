<script lang="ts">
  import ResponsiveAnimationVideo from '$shared/ui/ResponsiveAnimationVideo.svelte';
  import animationDesktopVideoMp4 from './assets/animation/1920.hevc.mp4';
  import animationDesktopSVideoMp4 from './assets/animation/1239.hevc.mp4';
  import animationTabletVideoMp4 from './assets/animation/1023.hevc.mp4';
  import animationMobileVideoMp4 from './assets/animation/699.hevc.mp4';

  let { top = 0 }: { top?: number } = $props();
</script>

<ResponsiveAnimationVideo
  className="header-animation-layer"
  {top}
  desktop={animationDesktopVideoMp4}
  desktopS={animationDesktopSVideoMp4}
  tablet={animationTabletVideoMp4}
  mobile={animationMobileVideoMp4}
/>
