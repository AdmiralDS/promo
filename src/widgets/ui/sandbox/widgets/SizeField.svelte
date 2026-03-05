<script lang="ts">
	import { Button } from '$shared/ui';
	import { APPEARANCE_OPTIONS, type Appearance } from '../types';
	import SandboxField, { type FieldProps } from './SandboxField.svelte';

	const labels: Record<Appearance, string> = { s: 'S', m: 'M', l: 'L' };

	let { selected = 0, onSelectedChange }: FieldProps = $props();
</script>

<SandboxField fieldTitle="Размер" {selected} {onSelectedChange}>
	{#each APPEARANCE_OPTIONS as appearanceOption}
		<Button variant="secondary" size="small">{labels[appearanceOption]}</Button>
	{/each}
</SandboxField>
