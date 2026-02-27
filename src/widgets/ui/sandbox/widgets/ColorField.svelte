<script lang="ts">
  import { Color } from '$shared/ui';
  import { SANDBOX_COLOR_OPTIONS } from '../types';
  import SandboxField, { type FieldProps } from './SandboxField.svelte';

  let { selected = 0, onSelectedChange }: FieldProps = $props();
</script>

<SandboxField fieldTitle="Цвет" {selected} {onSelectedChange}>
  {#each SANDBOX_COLOR_OPTIONS as colorOption}
    <Color color={colorOption} />
  {/each}
</SandboxField>
