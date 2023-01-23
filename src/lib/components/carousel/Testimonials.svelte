<script>
	import IconQuote from '../icons/IconQuote.svelte';

	const testimonials = [
		{
			name: 'Electra',
			location: 'Kansas City, MO',
			text: 'Izzy is one of the sweetest photographers I have met! She is so fun and creative to work with! She makes your ideas come to life! I would recommend her to anyone! I have nothing but wonderful things to say!',
			image: '/images/testimonials/electra-02.jpg',
		},
		{
			name: 'Bri',
			location: 'Lees Summit, MO',
			text: 'Not only are Izzy’s photos beautiful, but she is incredible to work with. I’m always amazed at how quickly Izzy gets me comfortable in front of the camera, and how beautiful she makes me feel in her pictures!',
			image: '/images/testimonials/bri-02.jpg',
			fitTop: true,
		},
		{
			name: 'Quinton',
			location: 'Lawrence, KS',
			text: 'Izzy takes her time, she is very professional, and has a unique way of interacting with her clients. She’s a fantastic photographer! I will continue going back to Izzy for all my shoots!',
			image: '/images/testimonials/quinton-01.jpg',
		},
		{
			name: 'Dani',
			location: 'Kansas City, MO',
			text: 'Izzy was amazing! I had a toddler and a puppy for our photoshoot and Izzy made it SO breezy. My son absolutely adored her positivity and how welcoming she was. I adore all of the pictures she got of us off guard, she captures all the best moments & makes them timeless!',
			image: '/images/testimonials/dani-02.jpg',
			fitTop: true,
		},
	];
</script>

<!-- Section: Testimonials -->
<section class="text-center">
	<div
		id="testimonialsCarousel"
		class="slide carousel carousel-dark relative border-b border-xanadu"
		data-bs-ride="carousel"
	>
		<div class="carousel-inner relative w-full overflow-hidden">
			{#each testimonials as { name, location, text, image, fitTop }, i}
				<div class="carousel-item relative float-left w-full" class:active={i === 0}>
					<div class="flex flex-wrap justify-center">
						<div class="flex w-full flex-col justify-end px-3 md:w-8/12 lg:justify-center">
							<img
								src={image}
								class="mx-auto mb-6 h-[200px] w-[200px] rounded-full object-cover md:h-[300px] md:w-[300px]"
								class:object-top={fitTop}
								alt="{name} testimonial"
							/>
							<h5 class="mb-3 text-lg font-bold drop-shadow-md">{name}</h5>
							<p class="mb-4 font-medium drop-shadow-md">{location}</p>
							<p class="mb-6 drop-shadow-md">
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
