<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Badge } from '../../shared/ui';
	import VTBCloudTemplate from './VTBCloud.template.svelte';
	import StartTemplate from './Start.template.svelte';
	import SferaTemplate from './Sfera.template.svelte';
	import AutographTemplate from './Autograph.template.svelte';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'Example/Badge',
		component: Badge,
		tags: ['autodocs'],
		argTypes: {},
		args: {
			onclick: fn()
		}
	});
</script>

<Story name="VTBCloud" args={{}}>
	{#snippet template(args)}
		<VTBCloudTemplate />
	{/snippet}
</Story>

<Story name="Start" args={{}}>
	{#snippet template(args)}
		<StartTemplate />
	{/snippet}
</Story>

<!-- Badge с иконкой Сфера дефолтная и с заданными height и width -->
<Story name="Sfera" args={{}}>
	{#snippet template(args)}
		<SferaTemplate />
	{/snippet}
</Story>

<Story name="Autograph" args={{}}>
	{#snippet template(args)}
		<AutographTemplate />
	{/snippet}
</Story>
