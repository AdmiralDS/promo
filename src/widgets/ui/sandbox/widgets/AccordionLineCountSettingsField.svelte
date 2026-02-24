<script lang="ts">
	import { Button } from '$shared/ui';
	import { ACCORDION_LINE_COUNT_OPTIONS } from '../types';
	import SandboxField, { type FieldProps } from './SandboxField.svelte';

	const labels = ['Одна', 'Две', 'Три', 'Четыре'];

	let { selected = 0, onSelectedChange }: FieldProps = $props();
</script>

<SandboxField fieldTitle="Количество строк" {selected} {onSelectedChange}>
	{#each ACCORDION_LINE_COUNT_OPTIONS as lineCount, index}
		<Button variant="secondary" size="small">{labels[index] ?? lineCount}</Button>
	{/each}
</SandboxField>
