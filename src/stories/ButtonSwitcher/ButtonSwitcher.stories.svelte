<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Button } from '../../shared/ui';
	import SecondaryBtnTemplate from './SecondaryBtn.template.svelte';
	import TabsTemplate from './Tabs.template.svelte';
	import ColorsTemplate from './Colors.template.svelte';
	import WithBtnScrollTemplate from './WithButtonScroll.template.svelte';
	import WithTabScrollTemplate from './WithTabScroll.template.svelte';
	import WithColorScrollTemplate from './WithColorScroll.template.svelte';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'Example/ButtonSwitcher',
		component: Button,
		tags: ['autodocs'],
		argTypes: {},
		args: {
			onclick: fn()
		}
	});
</script>

<!-- Группировка Buttons в ButtonSwitcher -->
<Story name="Secondary Button" args={{}}>
	{#snippet template(args)}
		<SecondaryBtnTemplate />
	{/snippet}
</Story>

<!-- Группировка Tabs в ButtonSwitcher -->
<Story name="Tabs" args={{}}>
	{#snippet template(args)}
		<TabsTemplate />
	{/snippet}
</Story>

<!-- Группировка Colors в ButtonSwitcher -->
<Story name="Colors" args={{}}>
	{#snippet template(args)}
		<ColorsTemplate />
	{/snippet}
</Story>

<!-- Группировка Buttons в ButtonSwitcher со скроллом -->
<Story name="With Button Scroll" args={{}}>
	{#snippet template(args)}
		<WithBtnScrollTemplate />
	{/snippet}
</Story>

<!-- Группировка Tabs в ButtonSwitcher со скроллом-->
<Story name="With Tabs Scroll" args={{}}>
	{#snippet template(args)}
		<WithTabScrollTemplate />
	{/snippet}
</Story>

<!-- Группировка Colors в ButtonSwitcher со скроллом-->
<Story name="With Colors Scroll" args={{}}>
	{#snippet template(args)}
		<WithColorScrollTemplate />
	{/snippet}
</Story>
