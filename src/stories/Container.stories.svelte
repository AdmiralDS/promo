<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Container from './Container.svelte';
	import { fn } from 'storybook/test';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Example/Container',
		component: Container,
		tags: ['autodocs'],
		argTypes: {
			ContainerSize: {
				control: { type: 'select' },
				options: ['sm', 'md', 'lg']
			}
		}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->

<Story name="Cards for components" args={{ size: 'lg' }} />
