<script lang="ts">
  import PageBackground from './PageBackground.svelte';
</script>

<div class="wrapper-main">
  <PageBackground></PageBackground>
  <div class="page-content">
    <slot />
  </div>
</div>

<style lang="scss">
  @use 'styles';
</style>
