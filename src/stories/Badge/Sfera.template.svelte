<script>
	import { Badge, SferaLogo } from '$shared/ui';
	import figure1 from '$shared/assets/png/figure1.png';
</script>

<Badge aria-label="Partner logo">
	<SferaLogo />
</Badge>
<Badge aria-label="Partner logo">
	<SferaLogo
		height={{ desktop: '48px', tablet: '48px', phone: '36px' }}
		width={{ desktop: '116px', tablet: '116px', phone: '36px' }}
	/>
</Badge>
<div class="demo-wrap">
	<div class="figure" style={`background-image: url('${figure1}')`}></div>
	<Badge aria-label="Partner logo">
		<SferaLogo
			height={{ desktop: '48px', tablet: '48px', phone: '36px' }}
			width={{ desktop: '116px', tablet: '116px', phone: '36px' }}
		/>
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
	}
	.figure {
		position: absolute;
		width: 180px;
		height: 180px;
		left: 30%;
		top: 24%;
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		filter: blur(1px);
	}
</style>
