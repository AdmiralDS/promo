<script>
	import { Badge, StartLogo } from '$shared/ui';
</script>

<Badge aria-label="Partner logo">
	<StartLogo />
</Badge>
<div class="demo-wrap">
	<div class="accent"></div>
	<Badge>
		<StartLogo />
	</Badge>
</div>

<style>
	.accent {
		position: absolute;
		inset: auto 10% 10% auto;
		width: 180px;
		height: 180px;
		border-radius: 24px;
		background: linear-gradient(180deg, #91c0fc, #2991ff);
		opacity: 0.7;
		transform: rotate(8deg);
		left: 55%;
	}
	.demo-wrap {
		position: relative;
		display: grid;
		place-items: center;
		height: 260px;
		border-radius: 16px;
		overflow: hidden;
	}
</style>
