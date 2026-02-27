<script lang="ts">
  import { RadioButton } from '$shared/ui';
  import { DESKTOP_S_QUERY, useMediaQuery } from '$shared/ui/useMediaQuery';
  import type { DropdownMode } from '../types';

  export interface DropdownSettingsFieldProps {
    selected?: DropdownMode;
    variant?: 'block' | 'dropdown';
    onSelectedChange?: (value: DropdownMode) => void;
  }

  let { selected = 'multiselect', variant = 'block', onSelectedChange }: DropdownSettingsFieldProps = $props();

  const desktopSQuery = useMediaQuery(DESKTOP_S_QUERY);
  const isCompact = $derived($desktopSQuery);
  const radioSize = $derived(isCompact ? 'sm' : 'md');

  const handleChange = (value: DropdownMode) => {
    onSelectedChange?.(value);
  };
</script>

<fieldset class={`dropdown-settings ${variant === 'dropdown' ? 'dropdown-settings--dropdown' : ''}`.trim()}>
  <RadioButton
    class="dropdown-settings-control text--Dark_Blue"
    size={radioSize}
    name="dropdown-mode"
    label="Селект"
    checked={selected === 'select'}
    onchange={() => handleChange('select')}
  />
  <RadioButton
    class="dropdown-settings-control text--Dark_Blue"
    size={radioSize}
    name="dropdown-mode"
    label="Мультиселект"
    checked={selected === 'multiselect'}
    onchange={() => handleChange('multiselect')}
  />
</fieldset>

<style lang="scss">
  @use 'dropdownSettingsField';
</style>
