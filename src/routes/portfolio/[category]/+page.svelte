<script>
	/** @type {import('./$types').PageServerData} */
	export let data;

	const getPresenter = function () {
		return document.getElementsByClassName('presenter')[0];
	};

	const getPresenterImage = function () {
		return document.getElementsByClassName('presenter-image')[0];
	};

	const handleImageClick = function (event) {
		const target = event.target || event.srcElement;
		const source = target.attributes.src.value;

		getPresenterImage().setAttribute('src', source);
		getPresenter().classList.remove('hidden');
	};

	const handlePresenterClick = function () {
		getPresenter().classList.add('hidden');
	};
</script>

<section>
	<h1>{data.category}</h1>
	<div class="text-blackcoffee/70">Click an image to view fullscreen</div>
	<div class="mx-10 columns-1 sm:mx-auto sm:max-w-[90vw] sm:columns-2 md:max-w-[80vw] md:columns-3">
		{#each data.images as img}
			<img
				src={img}
				alt={img}
				class="py-2 drop-shadow-lg hover:scale-[101%] hover:brightness-90"
				on:click={handleImageClick}
			/>
		{/each}
	</div>

	<div
		class="presenter relative flex hidden items-center justify-center"
		on:click={handlePresenterClick}
	>
		<img
			class="presenter-image object-fit max-h-[100vh] max-w-[100vw]"
			id="presenter-image"
			src="/images/portrait/001.jpg"
			alt="Full screen"
		/>
		<div
			class="absolute top-0 rounded-b-lg bg-white/30 px-4 py-1 text-blackcoffee/70 backdrop-blur-md"
		>
			Click anywhere to close the preview
		</div>
	</div>
</section>

<style lang="postcss">
	.presenter {
		@apply inset-0 h-[100vh] w-[100vw] bg-black/50;
		position: fixed;
	}
</style>
