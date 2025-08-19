<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Button, type ButtonProps } from '../../shared/ui';
	import LargeTemplate from './Large.template.svelte';
	import SmallTemplate from './Small.template.svelte';
	import { fn } from 'storybook/test';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Example/Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			size: {
				control: { type: 'select' },
				options: ['small', 'medium', 'large']
			}
		},
		args: {
			onclick: fn()
		}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Large" args={{}}>
	{#snippet template(args)}
		<LargeTemplate />
	{/snippet}
</Story>

<Story name="Small">
	{#snippet template(args)}
		<SmallTemplate />
	{/snippet}	
</Story>
