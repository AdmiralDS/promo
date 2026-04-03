<script lang="ts">
  import ResponsiveAnimationVideo from '$shared/ui/ResponsiveAnimationVideo.svelte';
  import animationDesktopVideo from './assets/animation/1920.webm';
  import animationDesktopSVideo from './assets/animation/1239.webm';
  import animationTabletVideo from './assets/animation/1023.webm';
  import animationMobileVideo from './assets/animation/699.webm';
  import animationDesktopVideoMp4 from './assets/animation/1920.hevc.mp4';
  import animationDesktopSVideoMp4 from './assets/animation/1239.hevc.mp4';
  import animationTabletVideoMp4 from './assets/animation/1023.hevc.mp4';
  import animationMobileVideoMp4 from './assets/animation/699.hevc.mp4';

  let { top = 0 }: { top?: number } = $props();
</script>

<ResponsiveAnimationVideo
  align="center"
  {top}
  desktop={{ webm: animationDesktopVideo, mp4: animationDesktopVideoMp4 }}
  desktopS={{ webm: animationDesktopSVideo, mp4: animationDesktopSVideoMp4 }}
  tablet={{ webm: animationTabletVideo, mp4: animationTabletVideoMp4 }}
  mobile={{ webm: animationMobileVideo, mp4: animationMobileVideoMp4 }}
/>
