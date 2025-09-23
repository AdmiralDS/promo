<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Color } from '../../shared/ui';
	import DefaultTemplate from './Default.template.svelte';
	import WithScrollTemplate from './WithScroll.template.svelte';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'Example/Color',
		component: Color,
		tags: ['autodocs'],
		argTypes: {
			color: {
				control: { type: 'select' },
				options: ['blue', 'azure', 'purple', 'green', 'pink']
			}
		},
		args: {
			onclick: fn()
		}
	});
</script>

<Story name="Default" args={{}}>
	{#snippet template(args)}
		<DefaultTemplate />
	{/snippet}
</Story>

<Story name="With Scroll" args={{}}>
	{#snippet template(args)}
		<WithScrollTemplate />
	{/snippet}
</Story>
