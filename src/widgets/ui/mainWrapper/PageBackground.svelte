<script lang="ts">
  import HeaderAnimation from '$widgets/ui/header/HeaderAnimation.svelte';
</script>

<div class="page-background" aria-hidden="true">
  <HeaderAnimation></HeaderAnimation>
</div>

<style lang="scss">
  .page-background {
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    z-index: 0;
  }
</style>
