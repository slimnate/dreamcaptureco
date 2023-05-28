<script>
	import { onMount } from 'svelte';

	import IconQuote from '../icons/IconQuote.svelte';
	import IconArrowLeft from '../icons/IconArrowLeft.svelte';
	import IconArrowRight from '../icons/IconArrowRight.svelte';

	onMount(async () => {
		const { Carousel, initTE } = await import('tw-elements');
		initTE({ Carousel });
	});

	/** @type {import('$lib/data/testimonials').TestimonialItem[]}*/
	export let items = [];
</script>

<!-- Section: Testimonials -->
<section class="text-center">
	<h1 class="pb-4">Testimonials</h1>
	<!-- Carousel -->
	<div id="testimonialsCarousel" class="relative" data-te-carousel-init data-te-carousel-slide>
		<!-- Carousel Items container -->
		<div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
			{#each items as { name, location, text, image, fitTop }, i}
				{@const additionalProperties = i === 0 ? { 'data-te-carousel-active': true } : {}}
				<!-- Item -->
				<div
					class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
					class:hidden={i !== 0}
					data-te-carousel-item
					{...additionalProperties}
				>
					<div class="flex flex-wrap justify-center">
						<div
							class="flex w-10/12 max-w-[35rem] flex-col justify-end px-3 sm:w-8/12 md:w-6/12 lg:justify-center"
						>
							<picture>
								<source sizes={image.sizes} srcset={image.avif} type="image/avif" />
								<source sizes={image.sizes} srcset={image.webp} type="image/webp" />
								<img
									srcset={image.jpg}
									sizes={image.sizes}
									class="mx-auto mb-2 h-[50vw] max-h-[300px]
								w-[50vw] max-w-[300px]
								rounded-full object-cover
								sm:h-[40vw] sm:w-[40vw]
								md:h-[30vw] md:w-[30vw]"
									class:object-top={fitTop}
									alt="{name} testimonial"
								/>
							</picture>
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
			class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:no-underline hover:opacity-90 hover:outline-none focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
			type="button"
			data-te-target="#testimonialsCarousel"
			data-te-slide="prev"
		>
			<span class="inline-block h-8 w-8">
				<IconArrowLeft />
			</span>
			<span
				class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
			>
				Previous
			</span>
		</button>
		<button
			class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:no-underline hover:opacity-90 hover:outline-none focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
			type="button"
			data-te-target="#testimonialsCarousel"
			data-te-slide="next"
		>
			<span class="inline-block h-8 w-8">
				<IconArrowRight />
			</span>
			<span
				class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
			>
				Next
			</span>
		</button>
	</div>
</section>
<!-- end Section: Testimonials -->
