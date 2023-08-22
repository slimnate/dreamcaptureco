<script>
	/* @imagetools-generate name(izzy) image($lib/images/izzy.jpg) w(300) */
</script>

<section>
	<div class="flex flex-col items-center justify-center py-16 text-blackcoffee">
		<div class="pb-8 text-4xl font-bold" style="font-family:'Dancing Script'">
			Nice to meet you, I'm Izzy
		</div>
		<picture>
			<source srcset={izzy_avif} type="image/avif" />
			<source srcset={izzy_webp} type="image/webp" />
			<img
				srcset={izzy_jpg}
				alt="Izzy Stevens"
				loading="lazy"
				decoding="async"
				class="mx-auto mb-8 h-[50vw] max-h-[300px] w-[50vw] max-w-[300px] rounded-full object-cover"
			/>
		</picture>
		<p class="mx-8 max-w-[35rem] leading-8 tracking-wide opacity-80 sm:mx-28 md:mx-48">
			Hello, my name is Izzy Stevens and I am a 24-year-old published photographer based in Kansas
			City. I don't limit myself to one specific style of photography because I enjoy capturing a
			wide range of subjects. Whether it's families, boudoir, weddings, or anything in between, I
			collaborate with my clients to understand their vision and create photos that fulfill their
			expectations. My aim is to bring your photo dreams to life with a personalized style that
			works best for you
		</p>

		<a href="/about"><button class="button-glass mt-10 text-2xl">Learn more</button></a>
	</div>
</section>
