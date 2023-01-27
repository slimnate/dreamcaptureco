<script>
	import Spacer from '../Spacer.svelte';

	/**
	 * @type {{name: string, image: string, link: string}[]}
	 */
	export let items = [];
	export let title = '';
	export let id = 'gallery';
</script>

<section class="mb-0 text-center">
	<div {id} class="slide carousel relative" data-bs-ride="carousel">
		{#if title}
			<div class="absolute inset-0 top-0 z-10 flex h-min justify-center">
				<div class="rounded-b-lg bg-eggshell/70 p-2 px-8 backdrop-blur-[1px]">
					<span class="p-2 text-3xl uppercase blur-none">{title}</span>
				</div>
			</div>
		{/if}
		<div class="carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0">
			<!-- render carousel indicators -->
			{#each items as item, i}
				<button
					type="button"
					data-bs-target={`#${id}`}
					data-bs-slide-to={i}
					class:active={i === 0}
					aria-current={i === 0}
					aria-label={item.name}
				/>
			{/each}
		</div>
		<div class="carousel-inner relative w-full overflow-hidden">
			<!-- render carousel items -->
			{#each items as { name, image, link }, i}
				<div class="carousel-item relative float-left w-full" class:active={i === 0}>
					{#if name}
						<div class="absolute inset-0 top-0 z-10 flex h-min justify-center">
							<div class="rounded-b-lg bg-eggshell/70 p-2 px-8 backdrop-blur-[1px]">
								<span class="p-2 text-3xl uppercase blur-none">{name}</span>
							</div>
						</div>
					{/if}
					<div
						class="relative overflow-hidden bg-cover bg-no-repeat"
						style="background-position: 50%;"
					>
						<img src={image} class="block w-full" alt={name} />
					</div>
					<div class="carousel-caption absolute text-center md:block">
						<button
							type="button"
							class="mt-2 inline-block hidden rounded-full border-2 bg-blackcoffee/50 px-6
					py-2 text-xs font-medium uppercase
					leading-tight transition duration-150 ease-in-out hover:bg-black/70 focus:outline-none focus:ring-0"
						>
							<a href={link}>See More</a>
						</button>
					</div>
				</div>
			{/each}

			<!-- carousel buttons -->
			<button
				class="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
				type="button"
				data-bs-target={`#${id}`}
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
				<span class="visually-hidden">Previous</span>
			</button>
			<button
				class="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
				type="button"
				data-bs-target={`#${id}`}
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</div>
</section>
