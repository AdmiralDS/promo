<script lang="ts">
	import {
		ToggleGroup,
		Button,
		Color,
		Toggle,
		AVAILABLE_COLORS,
		type ButtonColor
	} from '$shared/ui';
	import { ColorArray, ComponentAppearanceArray, type Appearance, type ThemeColor } from './types';

	export interface ControlContainerProps {
		/**
		 * Внешний вид компонента, отображаемого в песочнице.
		 * Определяет размер и стилизацию демонстрируемого компонента.
		 *
		 * @default 'l'
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
		 * @param {ButtonColor} value - Новое значение цвета для компонента в песочнице
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
	}

	// Получаем пропсы через $props()
	let {
		appearance = 'l' as Appearance,
		color = 'blue' as ButtonColor,
		fieldCount = 3,
		isDarkTheme = false,
		onChangeAppearance,
		onChangeColor,
		onChangeFieldCount,
		onChangeTheme
	}: ControlContainerProps = $props();

	const appearanceSelected = $derived(ComponentAppearanceArray.indexOf(appearance));
	const colorSelected = $derived(ColorArray.indexOf(color));
	const fieldCountSelected = $derived(Math.min(Math.max((fieldCount ?? 1) - 1, 0), 2));

	const handleAppearanceChange = (newIndex: number) => {
		if (newIndex > ComponentAppearanceArray.length - 1) return;
		onChangeAppearance(ComponentAppearanceArray[newIndex]);
	};

	const handleColorChange = (newIndex: number) => {
		if (newIndex > ColorArray.length - 1) return;
		onChangeColor(ColorArray[newIndex]);
	};

	const handleFieldCountChange = (newIndex: number) => {
		if (!onChangeFieldCount) return;
		const newCount = newIndex + 1;
		if (newCount < 1 || newCount > 3) return;
		onChangeFieldCount(newCount);
	};

	const handleThemeChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		onChangeTheme?.(target?.checked);
	};
</script>

<div class="control-container background--Main_White">
	<div class="theme-toggle text--Dark_Blue">
		Настройки
		<Toggle checked={isDarkTheme} onchange={handleThemeChange} />
	</div>
	<div class="sandbox-field">
		<div class="sandbox-field__title text--Dark_Blue">Размер</div>
		<ToggleGroup selected={appearanceSelected} onSelectedChange={handleAppearanceChange}>
			<Button variant="secondary" size="small">S</Button>
			<Button variant="secondary" size="small">M</Button>
			<Button variant="secondary" size="small">XL</Button>
		</ToggleGroup>
	</div>
	<div class="sandbox-field">
		<div class="sandbox-field__title text--Dark_Blue">Цвет</div>
		<ToggleGroup selected={colorSelected} onSelectedChange={handleColorChange}>
			<Color color="blue"></Color>
			<Color color="azure"></Color>
			<Color color="purple"></Color>
			<Color color="green"></Color>
			<Color color="pink"></Color>
		</ToggleGroup>
	</div>
	<div class="sandbox-field">
		<div class="sandbox-field__title text--Dark_Blue">Количество полей</div>
		<ToggleGroup selected={fieldCountSelected} onSelectedChange={handleFieldCountChange}>
			<Button variant="secondary" size="small">Одно</Button>
			<Button variant="secondary" size="small">Два</Button>
			<Button variant="secondary" size="small">Три</Button>
		</ToggleGroup>
	</div>
</div>

<style lang="scss">
	@use 'controlContainer';
</style>
