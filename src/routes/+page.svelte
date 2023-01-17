<script>
	import Testimonials from '$lib/components/carousel/Testimonials.svelte';
	import TitleHero from '$lib/components/TitleHero.svelte';
</script>

<!-- Section: Title Hero -->
<TitleHero />

<!-- Testimonials -->
<Testimonials />

<!-- Section: Carousel -->
<section class="mb-32 text-center">
	<div id="galleryCarousel" class="slide carousel relative" data-bs-ride="carousel">
		<div class="carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0">
			<button
				type="button"
				data-bs-target="#galleryCarousel"
				data-bs-slide-to="0"
				class="active"
				aria-current="true"
				aria-label="Slide 1"
			/>
			<button
				type="button"
				data-bs-target="#galleryCarousel"
				data-bs-slide-to="1"
				aria-label="Slide 2"
			/>
			<button
				type="button"
				data-bs-target="#galleryCarousel"
				data-bs-slide-to="2"
				aria-label="Slide 3"
			/>
		</div>
		<div class="carousel-inner relative w-full overflow-hidden">
			<div class="carousel-item active relative float-left w-full">
				<div
					class="relative overflow-hidden bg-cover bg-no-repeat"
					style="background-position: 50%;"
				>
					<img
						src="https://mdbootstrap.com/img/Photos/Slides/img%20(123).jpg"
						class="block w-full"
						alt="Gallery Item 1"
					/>
					<div
						class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"
					/>
				</div>
				<div class="carousel-caption absolute hidden text-center md:block">
					<h5 class="text-xl">First slide label</h5>
					<p>Some representative placeholder content for the first slide.</p>
				</div>
			</div>
			<div class="carousel-item relative float-left w-full">
				<div
					class="relative overflow-hidden bg-cover bg-no-repeat"
					style="background-position: 50%;"
				>
					<img
						src="https://mdbootstrap.com/img/Photos/Slides/img%20(124).jpg"
						class="block w-full"
						alt="Gallery Item 2"
					/>
					<div
						class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"
					/>
				</div>
				<div class="carousel-caption absolute hidden text-center md:block">
					<h5 class="text-xl">Second slide label</h5>
					<p>Some representative placeholder content for the second slide.</p>
				</div>
			</div>
			<div class="carousel-item relative float-left w-full">
				<div
					class="relative overflow-hidden bg-cover bg-no-repeat"
					style="background-position: 50%;"
				>
					<img
						src="https://mdbootstrap.com/img/Photos/Slides/img%20(125).jpg"
						class="block w-full"
						alt="Gallery Item 3"
					/>
					<div
						class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"
					/>
				</div>
				<div class="carousel-caption absolute hidden text-center md:block">
					<h5 class="text-xl">Third slide label</h5>
					<p>Some representative placeholder content for the third slide.</p>
				</div>
			</div>
		</div>
		<!-- carousel buttons -->
		<button
			class="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide="prev"
		>
			<span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
			<span class="visually-hidden">Previous</span>
		</button>
		<button
			class="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide="next"
		>
			<span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
			<span class="visually-hidden">Next</span>
		</button>
	</div>
</section>
