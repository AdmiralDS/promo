<script>
	import { Badge, VTBCloudLogo } from '$shared/ui';
</script>

<Badge aria-label="Partner logo">
	<VTBCloudLogo />
</Badge>
<div class="demo-wrap img-bg">
	<div class="blob"></div>
	<Badge>
		<VTBCloudLogo />
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
	.img-bg {
		background: url('/images/og-image.png') center/cover no-repeat;
	}
	.blob {
		position: absolute;
		width: 220px;
		height: 220px;
		border-radius: 50%;
		background: radial-gradient(closest-side, #86b5ff, #6b7cff 70%, transparent 100%);
		left: 25%;
		top: 10%;
		filter: blur(2px);
	}
</style>
