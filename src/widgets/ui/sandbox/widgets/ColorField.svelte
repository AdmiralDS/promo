<script lang="ts">
	import { Color } from '$shared/ui';
	import SandboxField, { type FieldProps } from './SandboxField.svelte';
	let { selected = 0, onSelectedChange }: FieldProps = $props();
</script>

<SandboxField fieldTitle="Цвет" {selected} {onSelectedChange}>
	<Color color="blue"></Color>
	<Color color="azure"></Color>
	<Color color="purple"></Color>
	<Color color="green"></Color>
	<Color color="pink"></Color>
</SandboxField>

<style lang="scss">
</style>
