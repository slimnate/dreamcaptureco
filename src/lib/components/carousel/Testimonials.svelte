<script>
	import IconQuote from '../icons/IconQuote.svelte';

	/** @type {import('$lib/data/testimonials').TestimonialItem[]}*/
	export let items = [];
</script>

<!-- Section: Testimonials -->
<section class="text-center">
	<h1 class="pb-4">Testimonials</h1>
	<div
		id="testimonialsCarousel"
		class="slide carousel carousel-dark relative"
		data-bs-ride="carousel"
	>
		<div class="carousel-inner relative w-full overflow-hidden">
			{#each items as { name, location, text, image, fitTop }, i}
				<div class="carousel-item relative float-left w-full" class:active={i === 0}>
					<div class="flex flex-wrap justify-center">
						<div
							class="flex w-10/12 max-w-[35rem] flex-col justify-end px-3 sm:w-8/12 md:w-6/12 lg:justify-center"
						>
							<img
								src={image}
								class="mx-auto mb-2 h-[50vw] max-h-[300px]
								w-[50vw] max-w-[300px]
								rounded-full object-cover
								sm:h-[40vw] sm:w-[40vw]
								md:h-[30vw] md:w-[30vw]"
								class:object-top={fitTop}
								alt="{name} testimonial"
							/>
							<h5 class="mb-0 pb-0 text-xl font-bold">{name}</h5>
							<p class="mb-4 text-sm leading-4 opacity-70">{location}</p>
							<!-- TODO use pseudo-elements instead of IconQuote component maybe -->
							<p class="mb-12 leading-8 tracking-wide opacity-80">
								<IconQuote />{text}<IconQuote end />
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<!-- end carousel items -->

		<!-- carousel buttons-->
		<button
			class="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
			type="button"
			data-bs-target="#testimonialsCarousel"
			data-bs-slide="prev"
		>
			<span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
			<span class="visually-hidden">Previous</span>
		</button>
		<button
			class="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
			type="button"
			data-bs-target="#testimonialsCarousel"
			data-bs-slide="next"
		>
			<span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
			<span class="visually-hidden">Next</span>
		</button>
	</div>
</section>
<!-- end Section: Testimonials -->
