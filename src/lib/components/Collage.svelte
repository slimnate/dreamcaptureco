<script>
	import collage01avif from '$lib/images/collage/01.jpg?w=1500;900;400&format=avif&as=srcset';
	import collage01webp from '$lib/images/collage/01.jpg?w=1500;900;400&format=webp&as=srcset';
	import collage01jpeg from '$lib/images/collage/01.jpg?w=1500;900;400&format=jpg&as=srcset';

	import collage02avif from '$lib/images/collage/02.jpg?w=1500;900;400&format=avif&as=srcset';
	import collage02webp from '$lib/images/collage/02.jpg?w=1500;900;400&format=webp&as=srcset';
	import collage02jpeg from '$lib/images/collage/02.jpg?w=1500;900;400&format=jpg&as=srcset';

	import collage03avif from '$lib/images/collage/03.jpg?w=1500;900;400&format=avif&as=srcset';
	import collage03webp from '$lib/images/collage/03.jpg?w=1500;900;400&format=webp&as=srcset';
	import collage03jpeg from '$lib/images/collage/03.jpg?w=1500;900;400&format=jpg&as=srcset';

	const sizes = '(max-width: 500px) 400px, (max-width: 1000px) 900px, 1500px';
</script>

<section class="py-16">
	<div class="-mb-[40vw] flex w-full flex-col items-center justify-center">
		<div class="translate-x-[5vw] bg-eggshell p-2 shadow-lg">
			<picture>
				<source {sizes} srcset={collage01avif} type="image/avif" />
				<source {sizes} srcset={collage01webp} type="image/webp" />
				<img
					srcset={collage01jpeg}
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
				<source {sizes} srcset={collage02avif} type="image/avif" />
				<source {sizes} srcset={collage02webp} type="image/webp" />
				<img
					src={collage02jpeg}
					alt="Small boy on stairs smiling wearing a beanie"
					loading="lazy"
					decoding="async"
					class="w-[60vw]"
				/>
			</picture>
		</div>
		<div class="relative -translate-y-[40vw] translate-x-[15vw] bg-eggshell p-2 shadow-lg">
			<picture>
				<source {sizes} srcset={collage03avif} type="image/avif" />
				<source {sizes} srcset={collage03webp} type="image/webp" />
				<img
					src={collage03jpeg}
					alt="Small boy on stairs smiling wearing a beanie"
					loading="lazy"
					decoding="async"
					class="w-[60vw]"
				/>
			</picture>
		</div>
	</div>
</section>
