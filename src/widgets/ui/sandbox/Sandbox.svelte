<script lang="ts">
	import { ToggleGroup, Tab } from '$shared/ui';
	import { MOBILE_QUERY, useMediaQuery } from '$shared/ui/useMediaQuery';
	import ReactComponent from './AdmiralComponents/ReactComponent.svelte';
	import ControlContainer from './ControlContainer.svelte';
	import { type Appearance, type ThemeColor } from './types';

	type SandboxConfig = {
		appearance: Appearance;
		color: ThemeColor;
		fieldCount: number;
		isDarkTheme: boolean;
	};

	const isMobileStore = useMediaQuery(MOBILE_QUERY);
	let isMobile = $state(false);

	$effect(() => {
		isMobile = $isMobileStore;
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
		isDarkTheme: false
	});

	// Обновление через патч
	function updateConfig(patch: Partial<SandboxConfig>) {
		config = { ...config, ...patch };
	}

	// Хэндлеры, совместимые с API ControlContainer
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
</script>

<div class="sandbox-container background--Main_White">
	<div class="main-container">
		<div class="header">
			<div class="text first-row text--Dark_Blue">Просто и доступно</div>
			<div class="text second-row text--Text_Blue">попробуйте сами</div>
			<ToggleGroup selected={activeComponentIndex} onSelectedChange={handleComponentChange}>
				{#each components as componentOption}
					<Tab>{componentOption.rus}</Tab>
				{/each}
			</ToggleGroup>
		</div>
		<div class="sandbox Sandbox_Gradient">
			<div class="component-wrapper">
				{#key `${activeComponent}-${config.appearance}`}
					<ReactComponent
						component={activeComponent ?? 'Modal'}
						appearance={config.appearance}
						color={config.color}
						fieldCount={config.fieldCount}
						isDarkTheme={config.isDarkTheme}
					/>
				{/key}
			</div>
			<ControlContainer
				appearance={config.appearance}
				color={config.color}
				fieldCount={config.fieldCount}
				isDarkTheme={config.isDarkTheme}
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
