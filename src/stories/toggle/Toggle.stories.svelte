<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Toggle from './Toggle.svelte';

	const { Story } = defineMeta({
		title: 'Example/Toggle',
		component: Toggle,
		tags: ['autodocs']
	});
</script>

<Story name="Theme toggle" />
