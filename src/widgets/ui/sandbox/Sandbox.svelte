<script lang="ts">
	import { ToggleGroup, Tab } from '$shared/ui';
	import ControlContainer from './ControlContainer.svelte';
	import { type Appearance, type ThemeColor } from './types';

	const updateSandboxComponent = (value) => {
		console.log(value);
	};

	const handleAppearanceChange = (newAppearance: Appearance) => {
		// Обновляет внешний вид компонента в песочнице
		updateSandboxComponent({ appearance: newAppearance });
	};

	const handleColorChange = (newColor: ThemeColor) => {
		// Обновляет внешний вид компонента в песочнице
		updateSandboxComponent({ color: newColor });
	};
</script>

<div class="sandbox-container even-container">
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
			<ControlContainer
				appearance={'m'}
				color={'green'}
				fieldCount={3}
				onChangeAppearance={handleAppearanceChange}
				onChangeColor={handleColorChange}
			/>
		</div>
	</div>
</div>

<style lang="scss">
	@use 'styles';
</style>
