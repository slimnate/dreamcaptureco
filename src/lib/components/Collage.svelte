<script>
	/* @imagetools-generate name(collage01) image($lib/images/collage/01.jpg) w(1500;900;400) */
	/* @imagetools-generate name(collage02) image($lib/images/collage/02.jpg) w(1500;900;400) */
	/* @imagetools-generate name(collage03) image($lib/images/collage/03.jpg) w(1500;900;400) */

	const sizes = '(max-width: 600px) 400px, (max-width: 1200px) 900px, 1500px';
</script>

<section class="py-16">
	<div class="-mb-[40vw] flex w-full flex-col items-center justify-center">
		<div class="translate-x-[5vw] bg-eggshell p-2 shadow-lg">
			<picture>
				<source {sizes} srcset={collage01_avif} type="image/avif" />
				<source {sizes} srcset={collage01_webp} type="image/webp" />
				<img
					srcset={collage01_jpg}
					{sizes}
					alt="Small boy on stairs smiling wearing a beanie"
					loading="lazy"
					decoding="async"
					class="w-[60vw]"
				/>
			</picture>
		</div>
		<div class="relative z-10 -translate-x-[15vw] -translate-y-[10vw] bg-eggshell p-2 shadow-lg">
			<picture>
				<source {sizes} srcset={collage02_avif} type="image/avif" />
				<source {sizes} srcset={collage02_webp} type="image/webp" />
				<img
					src={collage02_jpg}
					{sizes}
					alt="Small boy on stairs smiling wearing a beanie"
					loading="lazy"
					decoding="async"
					class="w-[60vw]"
				/>
			</picture>
		</div>
		<div class="relative -translate-y-[40vw] translate-x-[15vw] bg-eggshell p-2 shadow-lg">
			<picture>
				<source {sizes} srcset={collage03_avif} type="image/avif" />
				<source {sizes} srcset={collage03_webp} type="image/webp" />
				<img
					src={collage03_jpg}
					{sizes}
					alt="Small boy on stairs smiling wearing a beanie"
					loading="lazy"
					decoding="async"
					class="w-[60vw]"
				/>
			</picture>
		</div>
	</div>
</section>
