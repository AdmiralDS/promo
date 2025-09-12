<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Button } from '../../shared/ui';
	import SecondaryTemplate from './Secondary.template.svelte';
	import WithScrollTemplate from './WithScroll.template.svelte';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'Example/ButtonSwitcher',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			size: {
				control: { type: 'radio' },
				options: ['small', 'large']
			}
		},
		args: {
			onclick: fn()
		}
	});
</script>

<Story name="Secondary" args={{}}>
	{#snippet template(args)}
		<SecondaryTemplate />
	{/snippet}
</Story>

<Story name="With scroll" args={{}}>
	{#snippet template(args)}
		<WithScrollTemplate />
	{/snippet}
</Story>
