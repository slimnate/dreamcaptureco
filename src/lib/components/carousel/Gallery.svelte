<script>
	/**
	 * @type {{name: string, description: string, image: string, link: string}[]}
	 */
	export let items = [];
	export let title = '';
	export let titleFloating = true;
</script>

<section class="mb-0 text-center">
	{#if title && !titleFloating}
		<div class="my-8 text-3xl font-bold">{title}</div>
	{/if}
	<div id="galleryCarousel" class="slide carousel relative" data-bs-ride="carousel">
		{#if title && titleFloating}
			<div class="absolute inset-0 top-0 z-10 flex h-min justify-center">
				<div class="rounded-b-3xl bg-burly-wood/70 p-2 px-8 backdrop-blur-[1px]">
					<span class="p-2 text-3xl uppercase text-black/70 blur-none">{title}</span>
				</div>
			</div>
		{/if}
		<div class="carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0">
			<!-- render carousel indicators -->
			{#each items as item, i}
				<button
					type="button"
					data-bs-target="#galleryCarousel"
					data-bs-slide-to={i}
					class:active={i === 0}
					aria-current={i === 0}
					aria-label={item.name}
				/>
			{/each}
		</div>
		<div class="carousel-inner relative w-full overflow-hidden">
			<!-- render carousel items -->
			{#each items as { name, description, image, link }, i}
				<div class="carousel-item relative float-left w-full" class:active={i === 0}>
					<div
						class="relative overflow-hidden bg-cover bg-no-repeat"
						style="background-position: 50%;"
					>
						<img src={image} class="block w-full" alt="Gallery Item 1" />
						<div
							class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"
						/>
					</div>
					<div class="carousel-caption absolute hidden text-center md:block">
						<h5 class="text-xl">{name}</h5>
						<p>{description}</p>
						<button
							type="button"
							class="mt-2 inline-block rounded-full border-2 border-gray-200 px-6 py-2
					text-xs font-medium uppercase leading-tight text-gray-200
					transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-50 focus:outline-none focus:ring-0"
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
				data-bs-target="#galleryCarousel"
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
				<span class="visually-hidden">Previous</span>
			</button>
			<button
				class="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
				type="button"
				data-bs-target="#galleryCarousel"
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</div>
</section>
