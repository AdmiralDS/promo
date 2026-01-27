<script lang="ts">
	import { ThemeToggle } from '$shared/ui';
	import {
		APPEARANCE_OPTIONS,
		FIELD_COUNT_OPTIONS,
		getCircleFill,
		SANDBOX_COLOR_OPTIONS,
		type Appearance,
		type DropdownMode,
		type ThemeColor
	} from './types';
	import {
		useMediaQuery,
		MOBILE_QUERY,
		TABLET_QUERY,
		DESKTOP_S_QUERY
	} from '$shared/ui/useMediaQuery';
	import MenuButton from './MenuButton.svelte';
	import SizeIcon from './Size.svelte';
	import SettingsIcon from './Settings.svelte';
	import ColorIcon from './Color.svelte';
	import SizeField from './widgets/SizeField.svelte';
	import SettingsField from './widgets/SettingsField.svelte';
	import ColorField from './widgets/ColorField.svelte';
	import DropdownSettingsField from './widgets/DropdownSettingsField.svelte';
	import TableSettingsField from './widgets/TableSettingsField.svelte';

	export interface ControlContainerProps {
		/**
		 * Название компонента, выбранного в песочнице.
		 */
		activeComponent?: string;
		/**
		 * Внешний вид компонента, отображаемого в песочнице.
		 * Определяет размер и стилизацию демонстрируемого компонента.
		 *
		 * @default 'm'
		 */
		appearance: Appearance;

		/**
		 * Callback-функция, вызываемая при изменении внешнего вида компонента в песочнице.
		 * Используется для обновления параметров демонстрации.
		 *
		 * @param {Appearance} value - Новое значение внешнего вида для компонента в песочнице
		 * @example
		 * const handleAppearanceChange = (newAppearance) => {
		 *   // Обновляет внешний вид компонента в песочнице
		 *   updateSandboxComponent({ appearance: newAppearance });
		 * };
		 */
		onChangeAppearance: (value: Appearance) => void;

		/**
		 * Цветовая схема компонента, отображаемого в песочнице.
		 * Определяет основной цвет демонстрируемого компонента.
		 *
		 * @default 'blue'
		 * @example
		 * // В песочнице будет показан компонент с зеленой цветовой схемой
		 * <ControlContainer color="green" />
		 */
		color: ThemeColor;

		/**
		 * Callback-функция, вызываемая при изменении цвета компонента в песочнице.
		 *
		 * @param {ThemeColor} value - Новое значение цвета для компонента в песочнице
		 * @returns {void}
		 * @example
		 * const handleColorChange = (newColor) => {
		 *   // Обновляет цвет компонента в песочнице
		 *   updateSandboxComponent({ color: newColor });
		 * };
		 */
		onChangeColor: (value: ThemeColor) => void;

		/**
		 * Количество полей ввода, отображаемых в компоненте внутри песочницы.
		 * Используется для демонстрации компонента с разным количеством элементов.
		 * Если свойство не указано, поля ввода не отображаются.
		 *
		 * @default 3
		 * @minimum 1
		 * @maximum 3
		 * @optional
		 * @example
		 * // В песочнице будет показан компонент с 2 полями ввода
		 * <ControlContainer fieldCount={2} />
		 *
		 * @example
		 * // Поля ввода не отображаются
		 * <ControlContainer />
		 */
		fieldCount?: number;

		/**
		 * Callback-функция, вызываемая при изменении количества полей в компоненте песочницы.
		 *
		 * @param {number} value - Новое количество полей для компонента в песочнице (от 1 до 3)
		 * @returns {void}
		 * @example
		 * const handleFieldCountChange = (newCount) => {
		 *   // Обновляет количество полей в компоненте песочницы
		 *   updateSandboxComponent({ fieldCount: newCount });
		 * };
		 */
		onChangeFieldCount?: (value: number) => void;

		/**
		 * Флаг использования темной темы в песочнице.
		 */
		isDarkTheme?: boolean;

		/**
		 * Callback для переключения темы песочницы.
		 */
		onChangeTheme?: (value: boolean) => void;

		tableGroupActions?: boolean;
		tableRowDrag?: boolean;
		tableZebra?: boolean;
		onChangeTableGroupActions?: (value: boolean) => void;
		onChangeTableRowDrag?: (value: boolean) => void;
		onChangeTableZebra?: (value: boolean) => void;
		dropdownMode?: DropdownMode;
		onChangeDropdownMode?: (value: DropdownMode) => void;
	}

	// Получаем пропсы через $props()
	let {
		activeComponent = 'Modal',
		appearance = 'm' as Appearance,
		color = 'blue' as ThemeColor,
		fieldCount = 3,
		isDarkTheme = false,
		tableGroupActions = false,
		tableRowDrag = false,
		tableZebra = false,
		dropdownMode = 'multiselect',
		onChangeAppearance,
		onChangeColor,
		onChangeFieldCount,
		onChangeTheme,
		onChangeTableGroupActions,
		onChangeTableRowDrag,
		onChangeTableZebra,
		onChangeDropdownMode
	}: ControlContainerProps = $props();

	const mobileQuery = useMediaQuery(MOBILE_QUERY);
	const tabletQuery = useMediaQuery(TABLET_QUERY);
	const desktopSQuery = useMediaQuery(DESKTOP_S_QUERY);

	const isMobile = $derived($mobileQuery);
	const isTablet = $derived($tabletQuery);
	const isDesktopS = $derived($desktopSQuery);
	const isCompact = $derived(isTablet || isDesktopS);

	const toSelectedIndex = <T,>(options: readonly T[], value: T) => {
		const index = options.indexOf(value);
		return index === -1 ? 0 : index;
	};

	const appearanceSelected = $derived(toSelectedIndex(APPEARANCE_OPTIONS, appearance));
	const colorSelected = $derived(toSelectedIndex(SANDBOX_COLOR_OPTIONS, color));
	const fieldCountSelected = $derived(toSelectedIndex(FIELD_COUNT_OPTIONS, fieldCount ?? 1));
	const showFieldCount = $derived(activeComponent === 'Modal');
	const showTableSettings = $derived(activeComponent === 'Table');
	const showDropdownSettings = $derived(activeComponent === 'Dropdown');

	function handleSelection<T>(options: readonly T[], index: number, onChange?: (value: T) => void) {
		if (!onChange) return;
		const nextValue = options[index];
		if (nextValue !== undefined) {
			onChange(nextValue);
		}
	}

	const handleAppearanceChange = (newIndex: number) =>
		handleSelection(APPEARANCE_OPTIONS, newIndex, onChangeAppearance);

	const handleColorChange = (newIndex: number) =>
		handleSelection(SANDBOX_COLOR_OPTIONS, newIndex, onChangeColor);

	const handleFieldCountChange = (newIndex: number) =>
		handleSelection(FIELD_COUNT_OPTIONS, newIndex, onChangeFieldCount);

	const handleThemeChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		onChangeTheme?.(target?.checked);
	};

	const handleToggleChange = (value: boolean, onChange?: (nextValue: boolean) => void) => {
		onChange?.(value);
	};

	const handleTableGroupActionsChange = (value: boolean) =>
		handleToggleChange(value, onChangeTableGroupActions);

	const handleTableRowDragChange = (value: boolean) =>
		handleToggleChange(value, onChangeTableRowDrag);

	const handleTableZebraChange = (value: boolean) =>
		handleToggleChange(value, onChangeTableZebra);

	const handleDropdownModeChange = (value: DropdownMode) =>
		onChangeDropdownMode?.(value);
</script>

<div class="control-container background--Main_White">
	{#if isMobile}
		<div class="button-block-wrapper">
			{#if showFieldCount}
				<MenuButton>
					<SettingsIcon slot="icon" />
					<SettingsField
						slot="dropdown"
						selected={fieldCountSelected}
						onSelectedChange={handleFieldCountChange}
					/>
				</MenuButton>
			{:else if showTableSettings}
				<MenuButton>
					<SettingsIcon slot="icon" />
					<TableSettingsField
						slot="dropdown"
						variant="dropdown"
						groupActions={tableGroupActions}
						rowDrag={tableRowDrag}
						zebra={tableZebra}
						onChangeGroupActions={handleTableGroupActionsChange}
						onChangeRowDrag={handleTableRowDragChange}
						onChangeZebra={handleTableZebraChange}
					/>
				</MenuButton>
			{:else if showDropdownSettings}
				<MenuButton>
					<SettingsIcon slot="icon" />
					<DropdownSettingsField
						slot="dropdown"
						variant="dropdown"
						selected={dropdownMode}
						onSelectedChange={handleDropdownModeChange}
					/>
				</MenuButton>
			{/if}

			<MenuButton>
				<ColorIcon slot="icon" fill={getCircleFill(color)} />
				<ColorField slot="dropdown" selected={colorSelected} onSelectedChange={handleColorChange} />
			</MenuButton>
		</div>
		<div class="divider-vertical"></div>
		<ThemeToggle checked={isDarkTheme} onchange={handleThemeChange} />
	{:else if isCompact}
		<div class="button-block-wrapper">
			<MenuButton>
				<SizeIcon slot="icon" />
				<SizeField
					slot="dropdown"
					selected={appearanceSelected}
					onSelectedChange={handleAppearanceChange}
				/>
			</MenuButton>

			{#if showFieldCount}
				<MenuButton>
					<SettingsIcon slot="icon" />
					<SettingsField
						slot="dropdown"
						selected={fieldCountSelected}
						onSelectedChange={handleFieldCountChange}
					/>
				</MenuButton>
			{:else if showTableSettings}
				<MenuButton>
					<SettingsIcon slot="icon" />
					<TableSettingsField
						slot="dropdown"
						variant="dropdown"
						groupActions={tableGroupActions}
						rowDrag={tableRowDrag}
						zebra={tableZebra}
						onChangeGroupActions={handleTableGroupActionsChange}
						onChangeRowDrag={handleTableRowDragChange}
						onChangeZebra={handleTableZebraChange}
					/>
				</MenuButton>
			{:else if showDropdownSettings}
				<MenuButton>
					<SettingsIcon slot="icon" />
					<DropdownSettingsField
						slot="dropdown"
						variant="dropdown"
						selected={dropdownMode}
						onSelectedChange={handleDropdownModeChange}
					/>
				</MenuButton>
			{/if}

			<MenuButton>
				<ColorIcon slot="icon" fill={getCircleFill(color)} />
				<ColorField slot="dropdown" selected={colorSelected} onSelectedChange={handleColorChange} />
			</MenuButton>
		</div>
		<div class="divider-vertical"></div>
		<ThemeToggle checked={isDarkTheme} onchange={handleThemeChange} />
	{:else}
		<div class="theme-toggle text--Dark_Blue">
			Настройки
			<ThemeToggle checked={isDarkTheme} onchange={handleThemeChange} />
		</div>

		<SizeField selected={appearanceSelected} onSelectedChange={handleAppearanceChange} />
		<ColorField selected={colorSelected} onSelectedChange={handleColorChange} />
    <div class="divider-horizontal"></div>
		{#if showFieldCount}
			<SettingsField selected={fieldCountSelected} onSelectedChange={handleFieldCountChange} />
		{:else if showTableSettings}
			<TableSettingsField
				groupActions={tableGroupActions}
				rowDrag={tableRowDrag}
				zebra={tableZebra}
				onChangeGroupActions={handleTableGroupActionsChange}
				onChangeRowDrag={handleTableRowDragChange}
				onChangeZebra={handleTableZebraChange}
			/>
		{:else if showDropdownSettings}
			<DropdownSettingsField
				selected={dropdownMode}
				onSelectedChange={handleDropdownModeChange}
			/>
		{/if}
	{/if}
</div>

<style lang="scss">
	@use 'controlContainer';
</style>
