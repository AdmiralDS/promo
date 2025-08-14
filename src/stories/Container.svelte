<script lang="ts">
	import './container.css';
	import { Container } from '../shared/ui';

	interface Props {
		/** How large should the bucontainertton be? */
		size?: 'sm' | 'md' | 'lg';
	}

	const { size, ...props }: Props = $props();
</script>

<Container {...props} {size}>
	<div style='height: 50px; width: 50px; background-color: blue'></div>
</Container>
