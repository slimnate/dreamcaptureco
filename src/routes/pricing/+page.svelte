<script>
	import IconCheck from '$lib/components/icons/IconCheck.svelte';

	const tiers = [
		{
			name: 'Day Dream',
			price: 100,
			features: [
				'1 hour',
				'1 location',
				'up to 5 subjects',
				'20-30 edits',
				'access to client wardrobe',
				'2-3 week turnaround',
			],
			addOns: ['+$50 shoot with snakes'],
		},
		{
			name: 'Sweet Dream',
			price: 200,
			features: [
				'1.5 hours',
				'1-2 locations',
				'up to 8 subjects',
				'30-40 edits',
				'access to client wardrobe',
				'2-3 week turnaround',
			],
			addOns: ['+$50 shoot with snakes'],
		},
		{
			name: 'Dream Come True',
			price: 300,
			features: [
				'2 hours',
				'up to 3 locations',
				'unlimited subjects',
				'40-50 edits',
				'access to client wardrobe',
				'1-2 week turnaround',
			],
			addOns: ['+$50 shoot with snakes'],
		},
	];
</script>

<section class="pb-12">
	<div id="pricing" class="background-radial-gradient text-center text-eggshell">
		<h2 class="mb-12 text-center text-5xl font-bold">Pricing</h2>
	</div>

	<div class="grid px-6 md:px-12 lg:grid-cols-3 xl:px-32" style="margin-top: -200px">
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

						<button
							type="button"
							class:button-primary={index === 1}
							class="button button-glass"
							data-mdb-ripple="true"
							data-ripple-color="primary"
						>
							Book
						</button>
					</div>
					<div class="p-6">
						<ol class="list-inside">
							{#each tier.features as feature}
								<li class="mb-4 flex items-center">
									<IconCheck />{feature}
								</li>
							{/each}
						</ol>
					</div>
				</div>
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

	.button-primary {
		@apply bg-blackcoffee/75 text-eggshell;
	}

	@media (min-width: 992px) {
		#pricing {
			height: 400px;
			padding-top: 80px;
		}
	}

	.background-radial-gradient {
		background-position: 50%;
		background-image: url('/images/hero-alt.jpg');
	}
</style>
