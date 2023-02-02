<script>
	/**
	 * @type {import("$lib/data/portfolio").GalleryItem[]}
	 */
	export let items = [];
	export let title = '';
	export let id = 'gallery';
</script>

<section>
	<h1>{title}</h1>
	<div
		{id}
		class="slide carousel carousel-dark carousel-fade relative pb-16"
		data-bs-ride="carousel"
	>
		<div class="carousel-indicators absolute right-0 bottom-0 left-0 mb-12 flex justify-center p-0">
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
		<div class="carousel-inner w-full overflow-hidden">
			<!-- render carousel items -->
			{#each items as { name, image, link, orientation }, i}
				<div class="carousel-item float-left w-full" class:active={i === 0}>
					{#if name}
						<div class="absolute inset-0 z-10 flex h-min justify-center">
							<a href={link}
								><div class="gallery-link p-1 px-4 sm:px-8">
									<span class="text-2xl uppercase blur-none sm:text-3xl">{name}</span>
								</div></a
							>
						</div>
					{/if}
					<!-- carousel title -->
					<div class="mx-auto flex h-min items-start justify-center">
						<img
							src={image}
							alt={name}
							class="h-[150vw] max-h-[max(80vh,400px)] w-full object-contain object-top"
						/>
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
