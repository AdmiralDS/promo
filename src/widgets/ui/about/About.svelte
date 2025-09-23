<script lang="ts">
	import { ComponentContainer } from '$shared/ui';
	import type { ContainerSize } from '$shared/ui/types';
	import ReactComponent from './AdmiralComponents/ReactComponent.svelte';

	const components = $state([
		{
			id: 1,
			text: 'Calendar',
			class: 'component-first',
			size: 'md'
		},
		{
			id: 2,
			text: 'Pagination',
			class: 'component-second',
			size: 'lg'
		},
		{
			id: 3,
			text: 'ProgressPage',
			class: 'component-third',
			size: 'sm'
		},
		{
			id: 4,
			text: 'Buttons',
			class: 'component-fourth',
			size: 'sm'
		},
		{
			id: 5,
			text: 'SliderRange',
			class: 'component-fifth',
			size: 'lg'
		},
		{
			id: 6,
			text: 'Stepper',
			class: 'component-sixth',
			size: 'md'
		},
		{
			id: 7,
			text: 'ContentSwitcher',
			class: 'component-seventh',
			size: 'sm'
		},
		{
			id: 8,
			text: 'CheckboxGroup',
			class: 'component-eighth',
			size: 'sm'
		}
	]);
</script>

<div class="about-container background--Main_White">
	<div class="main-container">
		<div class="text-box">
			<div class="text first-row text--Dark_Blue">Дизайн-система</div>
			<div class="text second-row text--Text_Blue">понятная каждому</div>
			<div class="text third-row text--Snow_Gray">
				Собрали в одну систему правила, компоненты и инструменты, чтобы упростить процесс создания
				решений
			</div>
		</div>
		<div class="components-box">
			{#each components as component}
				<ComponentContainer
					size={component.size as ContainerSize}
					class={`component ${component.class}`}
				>
					<ReactComponent component={component.text} isDarkTheme={false}></ReactComponent>
				</ComponentContainer>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@use 'styles';
</style>
