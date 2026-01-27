<script lang="ts">
	import { Button } from '$shared/ui';
	import { ACCORDION_ARROW_POSITION_OPTIONS, type AccordionArrowPosition } from '../types';
	import SandboxField, { type FieldProps } from './SandboxField.svelte';

	const labels: Record<AccordionArrowPosition, string> = {
		left: 'Слева',
		right: 'Справа'
	};

	let { selected = 0, onSelectedChange }: FieldProps = $props();
</script>

<SandboxField fieldTitle="Стрелка" selected={selected} onSelectedChange={onSelectedChange}>
	{#each ACCORDION_ARROW_POSITION_OPTIONS as position}
		<Button variant="secondary" size="small">{labels[position]}</Button>
	{/each}
</SandboxField>
