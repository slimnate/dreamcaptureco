<script>
	import Quote from '../icons/Quote.svelte';
	import TestimonialsItem from './TestimonialsItem.svelte';
</script>

<!-- Section: Testimonials -->
<section class="mb-32 text-center text-gray-800">
	<h2 class="mb-12 text-3xl font-bold">Testimonials</h2>

	<div
		id="testimonialsCarousel"
		class="slide carousel-dark carousel relative"
		data-bs-ride="carousel"
	>
		<div class="carousel-inner relative h-full w-full overflow-hidden">
			<TestimonialsItem name="Maria Kate" location="Kansas City" active
				>In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar. Sed semper ligula sed
				lorem tincidunt dignissim. Nam sed cursus lectus. Proin non rutrum magna. Proin gravida,
				justo et imperdiet tristique, turpis nisi viverra est, nec posuere ex arcu sit amet erat.
				Sed a dictum sem. Duis pretium condimentum nulla.
			</TestimonialsItem>

			<TestimonialsItem name="John Doe" location="St. Louis"
				>Maecenas auctor, quam eget tincidunt pretium, felis diam semper turpis, sed scelerisque
				diam libero facilisis libero. Quisque vitae semper metus. Aliquam eu dui aliquam, faucibus
				metus quis, elementum nunc.
			</TestimonialsItem>

			<TestimonialsItem name="Anna Deynah" location="Wichita"
				>Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet rutrum enim
				massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc ligula felis, sagittis
				eget nisi vitae.
			</TestimonialsItem>
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
