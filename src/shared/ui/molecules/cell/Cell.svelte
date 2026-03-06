<script lang="ts">
  import CellContainer from '$shared/ui/atoms/cellContainer/CellContainer.svelte';
  import { ruNbsp } from '../../ruNbsp';

  // Получаем пропсы через $props()
  let { title = '', text = '', children, ...restAttributes } = $props();
</script>

<CellContainer {...restAttributes}>
  <div class="cell-img">
    {@render children?.()}
  </div>
  <div class="cell-info">
    <div class="cell-title">
      {ruNbsp(title)}
    </div>
    <div class="cell-text">
      {ruNbsp(text)}
    </div>
  </div>
</CellContainer>

<style lang="scss">
  @use 'styles';
</style>
