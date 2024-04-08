<script>
	/** @type string[] */
	let images = [];

	for (let i = 0; i < 207; i++) {
		images.push(`/images/kcfw/${i}.jpg`);
	}
</script>

<section class="pb-12">
	<h1 class="text-2xl">KCFW Gallery - Wednesday Night Runway</h1>

	<h2 class="pb-4 text-xl font-bold">Purchase Instructions</h2>
	<p class="mx-auto mb-2 max-w-3xl">
		Hey! Thank you for your interest in my photos from KCFW 2024!
	</p>
	<div class="mx-auto max-w-3xl">
		To purchase full resolution photos from the gallery please <span class="font-bold"
			>reach out with the number(s) of each photo requested</span
		>
		at one of the following contact methods:
		<ul class="py-4">
			<li>
				Email: <a
					href="mailto:dream.capture.co.42@gmail.com"
					class="font-bold text-blackcoffee-400 hover:underline">dream.capture.co.42@gmail.com</a
				>
			</li>
			<li class="font-bold">OR</li>
			<li>
				Instagram:
				<a
					href="https://www.instagram.com/dream.capture.co/"
					class="font-bold text-blackcoffee-400 hover:underline">@dream.capture.co</a
				>
			</li>
		</ul>
		<p class="mb-2">
			Each image is $10 and payment is accepted through venmo <a
				href="https://account.venmo.com/u/izzy-stevens-1"
				class="font-bold text-blackcoffee-400 hover:underline">@izzy-stevens-1</a
			>
		</p>

		<p class="mb-2">
			Once the venmo has gone through, your selected photos will be released to download! if posting
			on social media, please tag my instagram account
			<a
				href="https://www.instagram.com/dream.capture.co/"
				class="font-bold text-blackcoffee-400 hover:underline">@dream.capture.co</a
			>
		</p>
		Thanks!
	</div>

	<!-- Store images -->
	<div class="mx-10 my-8 columns-2 sm:columns-3 md:columns-4">
		{#each images as image, i}
			<div class="relative">
				<img src={image} alt="" class="py-2 drop-shadow-lg" />
				<div class="absolute right-0 top-2 h-8 w-8 bg-cream/50">
					<!-- pt-[.2rem] is just a hacky way to center the text, remember how to do this properly later -->
					<div class="mx-auto my-auto pt-[.2rem]">{i}</div>
				</div>
			</div>
		{/each}
	</div>

	<h2 class="pb-4 pt-8 text-xl font-bold">Purchase Instructions</h2>
	<p class="mx-auto mb-2 max-w-3xl">
		Hey! Thank you for your interest in my photos from KCFW 2024!
	</p>
	<div class="mx-auto max-w-3xl">
		To purchase full resolution photos from the gallery please <span class="font-bold"
			>reach out with the number(s) of each photo requested</span
		>
		at one of the following contact methods:
		<ul class="py-4">
			<li>
				Email: <a
					href="mailto:dream.capture.co.42@gmail.com"
					class="font-bold text-blackcoffee-400 hover:underline">dream.capture.co.42@gmail.com</a
				>
			</li>
			<li class="font-bold">OR</li>
			<li>
				Instagram:
				<a
					href="https://www.instagram.com/dream.capture.co/"
					class="font-bold text-blackcoffee-400 hover:underline">@dream.capture.co</a
				>
			</li>
		</ul>
		<p class="mb-2">
			Each image is $10 and payment is accepted through venmo <a
				href="https://account.venmo.com/u/izzy-stevens-1"
				class="font-bold text-blackcoffee-400 hover:underline">@izzy-stevens-1</a
			>
		</p>

		<p class="mb-2">
			Once the venmo has gone through, your selected photos will be released to download! if posting
			on social media, please tag my instagram account
			<a
				href="https://www.instagram.com/dream.capture.co/"
				class="font-bold text-blackcoffee-400 hover:underline">@dream.capture.co</a
			>
		</p>
		Thanks!
	</div>
</section>
