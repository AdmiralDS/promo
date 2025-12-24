<script lang="ts">
	import { ToggleGroup } from '$shared/ui';

	export interface FieldProps extends Pick<SandboxFieldProps, 'selected' | 'onSelectedChange'> {}

	export interface SandboxFieldProps {
		fieldTitle: string;
		selected?: number;
		onSelectedChange?: (index: number) => void;
		children?: () => any;
	}

	let { selected = 0, fieldTitle, onSelectedChange, children }: SandboxFieldProps = $props();
</script>

<div class="sandbox-field-wrapper">
	<div class="sandbox-field-title text--Dark_Blue">{fieldTitle}</div>
	<ToggleGroup {selected} {onSelectedChange}>
		{@render children?.()}
	</ToggleGroup>
</div>

<style lang="scss">
	@use 'sandboxField';
</style>
