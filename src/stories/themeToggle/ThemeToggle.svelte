<script lang="ts">
	import { ThemeToggle } from '../../shared/ui';

	let checked = $state(false);
</script>

<ThemeToggle bind:checked />
<p></p>
<button
	onclick={() => {
		checked = !checked;
	}}>checked: {checked}</button
>
