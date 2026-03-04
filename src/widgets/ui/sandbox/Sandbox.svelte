<script lang="ts">
	import { ToggleGroup, Tab } from '$shared/ui';
	import { MOBILE_QUERY, TABLET_QUERY, useMediaQuery } from '$shared/ui/useMediaQuery';
	import ReactComponent from './AdmiralComponents/ReactComponent.svelte';
	import ControlContainer from './ControlContainer.svelte';
	import {
		type AccordionArrowPosition,
		type AccordionLineCount,
		type Appearance,
		type DropdownMode,
		type ThemeColor
	} from './types';

	type SandboxConfig = {
		appearance: Appearance;
		color: ThemeColor;
		fieldCount: number;
		isDarkTheme: boolean;
		tableGroupActions: boolean;
		tableRowDrag: boolean;
		tableZebra: boolean;
		dropdownMode: DropdownMode;
		accordionArrowPosition: AccordionArrowPosition;
		accordionLineCount: AccordionLineCount;
	};

	const isTabletStore = useMediaQuery(TABLET_QUERY);
	const isMobileStore = useMediaQuery(MOBILE_QUERY);
	let isTablet = $state(false);
	let isMobile = $state(false);

	$effect(() => {
		isMobile = $isMobileStore;
		isTablet = $isTabletStore && !isMobile;
	});

	const componentsFull: { eng: string; rus: string }[] = [
		{ eng: 'Table', rus: 'Таблица' },
		{ eng: 'Modal', rus: 'Модальное окно' },
		{ eng: 'Dropdown', rus: 'Дропдаун' }
	];
	const componentsMobile: { eng: string; rus: string }[] = [
		{ eng: 'Accordion', rus: 'Аккордион' },
		{ eng: 'Modal', rus: 'Модальное окно' },
		{ eng: 'Dropdown', rus: 'Дропдаун' }
	];

	const components = $derived(isMobile ? componentsMobile : componentsFull);
	let activeComponentIndex = $state(0);
	const activeComponent = $derived(components[activeComponentIndex]?.eng);

	const handleComponentChange = (currentComponentIndex: number) => {
		activeComponentIndex = currentComponentIndex;
	};

	let config = $state<SandboxConfig>({
		appearance: 'm',
		color: 'blue',
		fieldCount: 3,
		isDarkTheme: false,
		tableGroupActions: false,
		tableRowDrag: false,
		tableZebra: false,
		dropdownMode: 'multiselect',
		accordionArrowPosition: 'left',
		accordionLineCount: 4
	});

	function updateConfig(patch: Partial<SandboxConfig>) {
		config = { ...config, ...patch };
	}

	function handleAppearanceChange(newAppearance: Appearance) {
		updateConfig({ appearance: newAppearance });
	}

	function handleColorChange(newColor: ThemeColor) {
		updateConfig({ color: newColor });
	}

	function handleFieldCountChange(newFieldCount: number) {
		updateConfig({ fieldCount: newFieldCount });
	}

	function handleThemeChange(newThemeState: boolean) {
		updateConfig({ isDarkTheme: newThemeState });
	}

	function handleTableGroupActionsChange(nextValue: boolean) {
		updateConfig({ tableGroupActions: nextValue });
	}

	function handleTableRowDragChange(nextValue: boolean) {
		updateConfig({ tableRowDrag: nextValue });
	}

	function handleTableZebraChange(nextValue: boolean) {
		updateConfig({ tableZebra: nextValue });
	}

	function handleDropdownModeChange(nextValue: DropdownMode) {
		updateConfig({ dropdownMode: nextValue });
	}

	function handleAccordionArrowPositionChange(nextValue: AccordionArrowPosition) {
		updateConfig({ accordionArrowPosition: nextValue });
	}

	function handleAccordionLineCountChange(nextValue: AccordionLineCount) {
		updateConfig({ accordionLineCount: nextValue });
	}
</script>

<div class="sandbox-container background--Main_White">
	<div class="main-container">
		<div class="header">
			<div class="text first-row text--Dark_Blue">Просто и доступно</div>
			<div class="text second-row text--Text_Blue">попробуйте сами</div>
			<ToggleGroup onSelectedChange={handleComponentChange}>
				{#each components as componentOption}
					<Tab>{componentOption.rus}</Tab>
				{/each}
			</ToggleGroup>
		</div>
		<div class={`sandbox ${config.isDarkTheme ? 'Dark_Sandbox_Gradient' : 'Sandbox_Gradient'}`}>
			<div
				class={`component-wrapper ${
					activeComponent === 'Dropdown' ? 'component-wrapper--dropdown' : ''
				}`}
			>
				{#key `${activeComponent}-${config.appearance}-${config.color}-${config.fieldCount}-${config.isDarkTheme}-${config.tableGroupActions}-${config.tableRowDrag}-${config.tableZebra}-${config.dropdownMode}-${config.accordionArrowPosition}-${config.accordionLineCount}`}
					<ReactComponent
						component={activeComponent ?? 'Modal'}
						appearance={config.appearance}
						color={config.color}
						fieldCount={config.fieldCount}
						isDarkTheme={config.isDarkTheme}
						tableGroupActions={config.tableGroupActions}
						tableRowDrag={config.tableRowDrag}
						tableZebra={config.tableZebra}
						dropdownMode={config.dropdownMode}
						accordionArrowPosition={config.accordionArrowPosition}
						accordionLineCount={config.accordionLineCount}
						{isMobile}
						{isTablet}
					/>
				{/key}
			</div>
			<ControlContainer
				activeComponent={activeComponent ?? 'Modal'}
				appearance={config.appearance}
				color={config.color}
				fieldCount={config.fieldCount}
				isDarkTheme={config.isDarkTheme}
				tableGroupActions={config.tableGroupActions}
				tableRowDrag={config.tableRowDrag}
				tableZebra={config.tableZebra}
				dropdownMode={config.dropdownMode}
				accordionArrowPosition={config.accordionArrowPosition}
				accordionLineCount={config.accordionLineCount}
				onChangeAppearance={handleAppearanceChange}
				onChangeColor={handleColorChange}
				onChangeFieldCount={handleFieldCountChange}
				onChangeTheme={handleThemeChange}
				onChangeTableGroupActions={handleTableGroupActionsChange}
				onChangeTableRowDrag={handleTableRowDragChange}
				onChangeTableZebra={handleTableZebraChange}
				onChangeDropdownMode={handleDropdownModeChange}
				onChangeAccordionArrowPosition={handleAccordionArrowPositionChange}
				onChangeAccordionLineCount={handleAccordionLineCountChange}
			/>
		</div>
	</div>
</div>

<style lang="scss">
	@use 'sandbox';
</style>
