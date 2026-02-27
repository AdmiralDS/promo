<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ThemeToggle from './ThemeToggle.svelte';

  const { Story } = defineMeta({
    title: 'Example/ThemeToggle',
    component: ThemeToggle,
    tags: ['autodocs'],
  });
</script>

<Story name="Theme toggle" />
