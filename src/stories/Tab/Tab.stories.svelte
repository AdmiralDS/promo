<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Tab } from '../../shared/ui';
  import SingleTemplate from './Single.template.svelte';
  import WithScrollTemplate from './WithScroll.template.svelte';
  import { fn } from 'storybook/test';

  const { Story } = defineMeta({
    title: 'Example/Tab',
    component: Tab,
    tags: ['autodocs'],
    argTypes: {},
    args: {
      onclick: fn(),
    },
  });
</script>

<Story name="Single">
  {#snippet template(args)}
    <SingleTemplate />
  {/snippet}
</Story>

<Story name="With Scroll" args={{}}>
  {#snippet template(args)}
    <WithScrollTemplate />
  {/snippet}
</Story>
