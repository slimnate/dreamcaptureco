<script>
	import { page } from '$app/stores';
	import IconCheck from '$lib/components/icons/IconCheck.svelte';

	import bgImageJpg from '$lib/images/header-pricing.jpg?w=1400';
	import bgImageWebp from '$lib/images/header-pricing.jpg?w=1400&format=webp';
	import { browser } from '$app/environment';
	import pricing from '$lib/data/pricing';

	function supportsWebp() {
		// console.log(browser && document.documentElement.classList.contains('webp'));
		return browser && document.documentElement.classList.contains('webp');
	}

	const bgImage = supportsWebp() ? bgImageWebp : bgImageJpg;

	const tiers = pricing.packages;
	const addOns = pricing.addOns;
</script>

<svelte:head>
	<title>Pricing - Dream Capture Co</title>
</svelte:head>

<section class="pb-12">
	<!-- Pricing header -->
	<div
		id="pricing"
		class="h-[300px] overflow-hidden bg-cover bg-no-repeat text-center text-eggshell sm:h-[400px] md:h-[500px]"
		style:background-image={`url(${bgImage})`}
		style="
			background-position: 50%;
		"
	>
		<h2 class="mb-12 text-center text-5xl font-bold">Pricing</h2>
	</div>

	<!-- Pricing content -->
	<div class="mb-4 grid px-6 md:grid-cols-3 md:px-12 xl:px-32" style="margin-top: -200px">
		{#each tiers as tier, index}
			<!-- Price block -->
			<div class:py-12={index !== 1} class="p-0">
				<div
					class:z-10={index === 1}
					class:lg:rounded-br-none={index === 0}
					class:lg:rounded-tr-none={index === 0}
					class:lg:rounded-bl-none={index === 2}
					class:lg:rounded-tl-none={index === 2}
					class="block h-full rounded-lg bg-eggshell shadow-lg"
				>
					<div class="border-b border-gray-300 p-6 text-center">
						<p class="uppercase">
							<strong>{tier.name}</strong>
						</p>
						<p class="mb-4 uppercase">
							<small class="text-sm text-gray-500">package</small>
						</p>
						<h3 class="mb-6 text-2xl">
							<strong>$ {tier.price}</strong>
							<small class="text-sm text-gray-500">/session</small>
						</h3>

						<a href="/booking">
							<button
								type="button"
								class="button button-glass"
								data-mdb-ripple="true"
								data-ripple-color="primary"
							>
								Book
							</button>
						</a>
					</div>
					<div class="p-6">
						<ol class="list-none">
							{#each tier.features as feature}
								<li class="mb-4 grid grid-flow-col-dense items-center justify-start text-start">
									<IconCheck />
									{feature}
								</li>
							{/each}
						</ol>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Event consultation -->
	<p class="mb-4 tracking-wide text-blackcoffee/80 before:content-['***'] after:content-['***']">
		For weddings, parties, or other events, please reach out to schedule a free consultation.
	</p>

	<a href="/booking"><button class="button-glass mb-8 text-2xl">Schedule Now</button></a>

	<!-- Add ons -->
	<div class="bold m-4 text-3xl font-bold text-blackcoffee">Add-Ons</div>
	<div class="grid gap-3 p-4 md:grid-cols-2 md:flex-row md:gap-4 md:px-12 xl:grid-cols-4 xl:px-32">
		{#each addOns as { name, description, price }}
			<div
				class="flex grow flex-col justify-between gap-2 rounded-lg bg-eggshell p-4 shadow-lg sm:!p-8 md:gap-4 xl:!p-4"
			>
				<div
					class="flex flex-row justify-between gap-2 text-left md:!flex-col md:items-center md:!text-center"
				>
					<span class="text-xl font-bold uppercase">{name}</span>
					<span class="font-bold text-blackcoffee/70">{price}</span>
				</div>
				<span class="font-small text-blackcoffee/70">{description}</span>
			</div>
		{/each}
	</div>
</section>

<!-- Section: Design Block -->
<style lang="postcss">
	#pricing {
		height: 300px;
		padding-top: 55px;
	}

	.button {
		@apply w-full px-6 py-2.5;
		@apply text-sm leading-tight;

		@apply transition duration-500 ease-in-out;
	}

	#pricing {
		@apply /* height:
			400px; padding-top: 80px;
			*/ md:h-96 md:pt-20;
	}
</style>
