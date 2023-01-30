<script>
	/**
	 * @type {{image: string, link: string, name?: string}[]}
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
		<div class="carousel-inner w-full overflow-hidden">
			<!-- render carousel items -->
			{#each items as { name, image, link }, i}
				<div class="carousel-item float-left w-full" class:active={i === 0}>
					{#if name}
						<div class="absolute inset-0 z-10 flex h-min justify-center">
							<a href={link}
								><div class="gallery-link p-2 px-8">
									<span class="p-2 text-3xl uppercase blur-none">{name}</span>
								</div></a
							>
						</div>
					{/if}
					<!-- carousel content -->
					<div class="flex max-h-[500px] w-full items-center justify-center">
						<img src={image} alt={name} />
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
