<script lang="ts">
	import { Toggle } from '$shared/ui';
	import { DESKTOP_S_QUERY, useMediaQuery } from '$shared/ui/useMediaQuery';

	export interface TableSettingsFieldProps {
		groupActions?: boolean;
		rowDrag?: boolean;
		zebra?: boolean;
		variant?: 'block' | 'dropdown';
		onChangeGroupActions?: (value: boolean) => void;
		onChangeRowDrag?: (value: boolean) => void;
		onChangeZebra?: (value: boolean) => void;
	}

	let {
		groupActions = true,
		rowDrag = true,
		zebra = true,
		variant = 'block',
		onChangeGroupActions,
		onChangeRowDrag,
		onChangeZebra
	}: TableSettingsFieldProps = $props();

	const desktopSQuery = useMediaQuery(DESKTOP_S_QUERY);
	const isCompact = $derived($desktopSQuery);
	const toggleSize = $derived(isCompact ? 'sm' : 'md');

	const handleGroupActionsChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		onChangeGroupActions?.(target?.checked);
	};

	const handleRowDragChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		onChangeRowDrag?.(target?.checked);
	};

	const handleZebraChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		onChangeZebra?.(target?.checked);
	};
</script>

<div class={`table-settings ${variant === 'dropdown' ? 'table-settings--dropdown' : ''}`.trim()}>
	<div class="table-settings-row text--Dark_Blue">
		<span>Групповые действия</span>
		<Toggle size={toggleSize} checked={groupActions} onchange={handleGroupActionsChange} />
	</div>
	<div class="table-settings-row text--Dark_Blue">
		<span>Перетаскивание строк</span>
		<Toggle size={toggleSize} checked={rowDrag} onchange={handleRowDragChange} />
	</div>
	<div class="table-settings-row text--Dark_Blue">
		<span>Зебра</span>
		<Toggle size={toggleSize} checked={zebra} onchange={handleZebraChange} />
	</div>
</div>

<style lang="scss">
	@use 'tableSettingsField';
</style>
