<script lang="ts">
	import { Toggle } from '../../shared/ui';

	let checked = $state(false);
</script>

<Toggle bind:checked />
<p></p>
<button
	onclick={() => {
		checked = !checked;
	}}>checked: {checked}</button
>
