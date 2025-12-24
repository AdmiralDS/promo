<script lang="ts">
	import { Button } from '$shared/ui';
	import SandboxField, { type FieldProps } from './SandboxField.svelte';
	let { selected = 0, onSelectedChange }: FieldProps = $props();
</script>

<SandboxField fieldTitle="Размер" selected={selected} onSelectedChange={onSelectedChange}>
	<Button variant="secondary" size="small">S</Button>
	<Button variant="secondary" size="small">M</Button>
	<Button variant="secondary" size="small">XL</Button>
</SandboxField>

<style lang="scss">
</style>
