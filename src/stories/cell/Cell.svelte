<script lang="ts">
	import { Cell } from '../../shared/ui';
	import CellImg from './assets/CellImg.png';

	interface Props {
		title?: string;
		text?: string;
	}

	const { title, text, ...props }: Props = $props();

	const title1 = 'Андрей Иванов';
	const text1 = 'Лидер стрима';
</script>

<Cell {...props} title={title1} text={text1}>
	<img class="cell-img" src={CellImg} alt="CellImg" />
</Cell>

<style lang="scss">
	@use 'cell';
</style>
