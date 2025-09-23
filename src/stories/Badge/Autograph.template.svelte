<script>
	import { Badge, AutographLogo } from '$shared/ui';
	import figure2 from '$shared/assets/png/figure2.png';
</script>

<Badge aria-label="Partner logo">
	<AutographLogo />
</Badge>
<div class="demo-wrap">
	<div class="figure" style={`background-image: url('${figure2}')`}></div>
	<Badge aria-label="Partner logo">
		<AutographLogo />
	</Badge>
</div>

<style>
	.demo-wrap {
		position: relative;
		display: grid;
		place-items: center;
		height: 260px;
		border-radius: 16px;
		overflow: hidden;
		background: linear-gradient(180deg, #d8ebff 0%, #73b1ff 100%);
	}
	.figure {
		position: absolute;
		width: 200px;
		height: 200px;
		left: 22%;
		top: 18%;
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		filter: blur(1px);
	}
</style>
