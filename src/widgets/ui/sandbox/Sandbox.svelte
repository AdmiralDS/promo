<script lang="ts">
	import { ToggleGroup, Tab } from '$shared/ui';
	import ReactComponent from './AdmiralComponents/ReactComponent.svelte';
	import ControlContainer from './ControlContainer.svelte';
	import { type Appearance, type ThemeColor } from './types';

  const components = ['Accordion', 'Dropdown', 'Modal', 'Table'];
  let activeComponent = 'Dropdown';
  let prevActiveComponent = activeComponent;
  const handleCLickOnActiveComponent = (currentComponent: string) => (activeComponent = currentComponent);

	let dimension: Appearance = 'm';
	let color: ThemeColor = 'blue';
	let fieldCount = 3;
	let isDarkTheme = false;

	const handleAppearanceChange = (newAppearance: Appearance) => {
		dimension = newAppearance;
	};

	const handleColorChange = (newColor: ThemeColor) => {
		color = newColor;
	};

	const handleFieldCountChange = (newFieldCount: number) => {
		fieldCount = newFieldCount;
	};

	const handleThemeChange = (newThemeState: boolean) => {
		isDarkTheme = newThemeState;
	};
</script>

<div class="sandbox-container background--Main_White">
	<div class="main-container">
		<div class="header">
			<div class="text first-row text--Dark_Blue">Просто и доступно</div>
			<div class="text second-row text--Text_Blue">попробуйте сами</div>
			<ToggleGroup>
				<Tab>Таблица</Tab>
				<Tab>Модальное окно</Tab>
				<Tab>Дропдаун</Tab>
			</ToggleGroup>
		</div>
		<div class="sandbox Sandbox_Gradient">
			<div class="component-wrapper">
				<ReactComponent
					component="Dropdown"
					color={color}
					dimension={dimension}
					fieldCount={fieldCount}
					isDarkTheme={isDarkTheme}
				/>
			</div>
			<ControlContainer
				appearance={dimension}
				color={color}
				fieldCount={fieldCount}
				isDarkTheme={isDarkTheme}
				onChangeAppearance={handleAppearanceChange}
				onChangeColor={handleColorChange}
				onChangeFieldCount={handleFieldCountChange}
				onChangeTheme={handleThemeChange}
			/>
		</div>
	</div>
</div>

<style lang="scss">
	@use 'styles';
</style>
