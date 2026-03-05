<script lang="ts">
  import { ToggleGroup } from '$shared/ui';

  export interface FieldProps {
    selected?: number;
    onSelectedChange?: (index: number) => void;
  }

  export interface SandboxFieldProps extends FieldProps {
    fieldTitle: string;
    children?: () => any;
  }

  let { selected = 0, fieldTitle, onSelectedChange, children }: SandboxFieldProps = $props();
</script>

<div class="sandbox-field-wrapper">
	<div class="sandbox-field-title">{fieldTitle}</div>
	<ToggleGroup {selected} {onSelectedChange}>
		{@render children?.()}
	</ToggleGroup>
</div>

<style lang="scss">
  @use 'sandboxField';
</style>
