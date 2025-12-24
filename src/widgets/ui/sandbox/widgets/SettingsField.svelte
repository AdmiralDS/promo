<script lang="ts">
	import { Button } from '$shared/ui';
	import SandboxField, { type FieldProps } from './SandboxField.svelte';

	const options = ['Одно', 'Два', 'Три'];

	let { selected = 0, onSelectedChange }: FieldProps = $props();
</script>

<SandboxField fieldTitle="Количество полей" {selected} {onSelectedChange}>
	{#each options as optionLabel}
		<Button variant="secondary" size="small">{optionLabel}</Button>
	{/each}
</SandboxField>
