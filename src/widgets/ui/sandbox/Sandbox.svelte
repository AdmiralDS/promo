<script lang="ts">
	import { ButtonSwitcher, Button, TabGroup, Tab } from '$shared/ui';
</script>

<div class="sandbox-container even-container">
	<div class="main-container">
		<div class="header">
			<div class="text first-row text--Dark_Blue">Просто и доступно</div>
			<div class="text second-row text--Text_Blue">попробуйте сами</div>
			<TabGroup>
				<Tab>Таблица</Tab>
				<Tab>Модальное окно</Tab>
				<Tab>Дропдаун</Tab>
			</TabGroup>
		</div>
		<div class="sandbox Sandbox_Gradient">
			<ButtonSwitcher>
				<Button size="small"></Button>
			</ButtonSwitcher>
		</div>
	</div>
</div>

<style lang="scss">
	@use 'styles';
</style>
