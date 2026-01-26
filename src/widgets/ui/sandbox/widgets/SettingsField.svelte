<script lang="ts">
	import { Button } from '$shared/ui';
	import { useMediaQuery, MOBILE_QUERY } from '$shared/ui/useMediaQuery';
	import SandboxField, { type FieldProps } from './SandboxField.svelte';

	const mobileQuery = useMediaQuery(MOBILE_QUERY);

	const isMobile = $derived($mobileQuery);

	const options = ['Одно', 'Два', 'Три'];

	let { selected = 0, onSelectedChange }: FieldProps = $props();
</script>

<SandboxField fieldTitle={isMobile ? 'Полей' : 'Количество полей'} {selected} {onSelectedChange}>
	{#each options as optionLabel}
		<Button variant="secondary" size="small">{optionLabel}</Button>
	{/each}
</SandboxField>
