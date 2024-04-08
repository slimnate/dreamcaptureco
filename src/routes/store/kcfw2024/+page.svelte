<script>
	import ModalImagePresenter from '$lib/components/ModalImagePresenter.svelte';

	/** @type {string[]} */
	let images = [];

	for (let i = 0; i < 207; i++) {
		images.push(`/images/kcfw/${i}.jpg`);
	}

	let /** @type {ModalImagePresenter} */ presenter;

	/**
	 * Handle click of a gallery image, will also be called when enter/space pressed
	 * on focus for keyboard navigators/screenreaders.
	 * @param {MouseEvent & {currentTarget: HTMLElement | null}} event
	 */
	function handleClick(event) {
		const index = new Number(
			event.currentTarget?.querySelector('img')?.getAttribute('data-index')
		).valueOf();

		presenter.show(index);
	}

	/**
	 * Handle presenter 'hide' event to focus the image that was shown last
	 * @param event {CustomEvent<number>}
	 */
	function handlePresenterHide(event) {
		const currentIndex = event.detail;
		const toFocus = document.getElementById(`image-btn-${currentIndex}`);
		toFocus?.scrollIntoView({
			block: 'center',
		});
		toFocus?.focus();
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
				<button id={`image-btn-${i}`} type="button" on:click={handleClick} class="presenter-show">
					<img
						data-index={i}
						src={image}
						alt={image}
						class="py-2 drop-shadow-lg hover:brightness-90"
					/>
				</button>
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

	<ModalImagePresenter
		{images}
		bind:this={presenter}
		on:hide={handlePresenterHide}
		showIndex={true}
	/>
</section>
