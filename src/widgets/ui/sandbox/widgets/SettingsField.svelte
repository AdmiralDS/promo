<script lang="ts">
	import { Button } from '$shared/ui';
	import SandboxField, { type FieldProps } from './SandboxField.svelte';
	let { selected = 0, onSelectedChange }: FieldProps = $props();
</script>

<SandboxField fieldTitle="Количество полей" {selected} {onSelectedChange}>
	<Button variant="secondary" size="small">Одно</Button>
	<Button variant="secondary" size="small">Два</Button>
	<Button variant="secondary" size="small">Три</Button>
</SandboxField>

<style lang="scss">
</style>
