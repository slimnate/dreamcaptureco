<script>
	/* @imagetools-generate name(izzy) image($lib/images/izzy.jpg) w(300) */

	/* @imagetools-generate name(magazine01) image($lib/images/magazine-01.jpg) w(1200) */
	/* @imagetools-generate name(magazine02) image($lib/images/magazine-02.jpg) w(1200) */
	/* @imagetools-generate name(magazine03) image($lib/images/magazine-03.jpg) w(1200) */
	/* @imagetools-generate name(magazine04) image($lib/images/magazine-04.jpg) w(1200) */
</script>

<svelte:head>
	<title>About - Dream Capture Co</title>
</svelte:head>

<section class="text-center">
	<h1 class="pb-8">About</h1>
	<div class="about mb-12">
		<picture>
			<source srcset={izzy_avif} type="image/avif" />
			<source srcset={izzy_webp} type="image/webp" />
			<img
				srcset={izzy_jpg}
				alt="Izzy Stevens"
				loading="lazy"
				decoding="async"
				class="mx-auto h-[50vw] max-h-[300px] w-[50vw] max-w-[300px] rounded-full object-cover"
			/>
		</picture>
		<div class="mx-auto mb-8 mt-6 text-4xl leading-10" style="font-family:'Dancing Script'">
			Izzy Stevens
		</div>
		<div class="about-text mx-auto max-w-[70ch] px-6 tracking-wide opacity-80">
			<p class="mb-4">
				Hello, my name is Izzy Stevens, and I am a 24-year-old published photographer based in
				Kansas City. You'll often find me either at a photoshoot, a concert, or traveling. I grew up
				in Kansas City, Missouri, and developed an interest in photography when I got a DSi at the
				age of 9. I would take hundreds of photos on my nature walks, and my passion for photography
				has grown ever since.
			</p>
			<p class="mb-4">
				Over the years, my work has been published in various magazines, and I have even had the
				privilege of having my work featured by Shutterfly and JC Penney's portraits. While I've
				been doing studio photography with JC Penney's portraits for almost two years, I've found
				that owning my own business has given me the creative freedom I need to capture the unique
				essence of each of my clients.
			</p>
			<p class="mb-4">
				I don't limit myself to one particular style of photography because I enjoy capturing a wide
				range of subjects. My aim is to make your experience with me as unique as possible by
				forming a genuine connection with you and making you feel comfortable in front of my camera.
				Whether indoors, outdoors, or in the studio, I work with your specific vision to make all
				your photo dreams come true!
			</p>
		</div>
		<p class="mb-4 mt-8 text-2xl uppercase text-blackcoffee">Published work:</p>
		<div
			class="published mx-4 grid max-w-3xl grid-cols-1 justify-center gap-4 md:!mx-auto md:grid-cols-2"
		>
			<picture>
				<source srcset={magazine01_avif} type="image/avif" />
				<source srcset={magazine01_webp} type="image/webp" />
				<img srcset={magazine01_jpg} alt="Magazine page 01" loading="lazy" decoding="async" />
			</picture>
			<picture>
				<source srcset={magazine02_avif} type="image/avif" />
				<source srcset={magazine02_webp} type="image/webp" />
				<img srcset={magazine02_jpg} alt="Magazine page 02" loading="lazy" decoding="async" />
			</picture>
			<picture>
				<source srcset={magazine03_avif} type="image/avif" />
				<source srcset={magazine03_webp} type="image/webp" />
				<img srcset={magazine03_jpg} alt="Magazine page 03" loading="lazy" decoding="async" />
			</picture>
			<picture>
				<source srcset={magazine04_avif} type="image/avif" />
				<source srcset={magazine04_webp} type="image/webp" />
				<img srcset={magazine04_jpg} alt="Magazine page 04" loading="lazy" decoding="async" />
			</picture>
		</div>
	</div>
</section>

<style lang="postcss">
	.published > picture {
		@apply shadow-xl;
	}
</style>
