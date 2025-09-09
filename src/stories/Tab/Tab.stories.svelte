<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Tab } from '../../shared/ui';
	import GroupTemplate from './Group.template.svelte';
	import SingleTemplate from './Single.template.svelte';
	import { fn } from 'storybook/test';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Example/Tab',
		component: Tab,
		tags: ['autodocs'],
		argTypes: {},
		args: {
			onclick: fn()
		}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Single">
	{#snippet template(args)}
		<SingleTemplate />
	{/snippet}
</Story>

<Story name="Group">
	{#snippet template(args)}
		<GroupTemplate />
	{/snippet}
</Story>
