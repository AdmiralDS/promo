<script lang="ts">
	import Header from '$widgets/ui/header/Header.svelte';
	import About from '$widgets/ui/about/About.svelte';
	import CareBenefits from '$widgets/ui/careBenefits/CareBenefits.svelte';
	import Sandbox from '$widgets/ui/sandbox/Sandbox.svelte';
	import BeyondUi from '$widgets/ui/beyondUI/BeyondUI.svelte';
	import Team from '$widgets/ui/team/Team.svelte';
	import Products from '$widgets/ui/products/Products.svelte';
	import Footer from '$widgets/ui/footer/Footer.svelte';
	import MainWrapper from '$widgets/ui/mainWrapper/MainWrapper.svelte';
</script>

<MainWrapper>
	<Header></Header>
	<About></About>
	<CareBenefits></CareBenefits>
	<Products></Products>
	<BeyondUi></BeyondUi>
	<Sandbox></Sandbox>
	<Team></Team>
	<Footer></Footer>
</MainWrapper>
