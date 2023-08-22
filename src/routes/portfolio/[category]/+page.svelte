<script>
	import { capitalize } from '$lib/string';

	/** @type {import('./$types').PageServerData} */
	export let data;

	/** @type {HTMLElement | null} */
	let focusedElementBeforePresenter;

	/** @type {HTMLButtonElement | null} */
	let presenterElement;

	/** @type {HTMLImageElement | null} */
	let presenterImageElement;

	/**
	 * Hide the presenter and return focus back to the previously focused element.
	 */
	function hidePresenter() {
		presenterElement?.classList.add('hidden');
		focusedElementBeforePresenter?.focus();
	}

	/**
	 * Show the presenter with the specified image source
	 * @param {string} source
	 */
	function showPresenter(source) {
		presenterImageElement?.setAttribute('src', source);
		presenterElement?.classList.remove('hidden');
		presenterElement?.addEventListener('keydown', handleKeys);
		presenterElement?.focus();
	}

	/**
	 * Handle keyboard events on the open presenter:
	 * - intercept tab to keep focus on modal
	 * - close on Escape, Enter, or space keys
	 * @param {KeyboardEvent} event
	 */
	function handleKeys(event) {
		const key = event.key;

		console.log(key);
		// handle tab key press
		if (key === 'Tab') event.preventDefault();

		//close modal
		if (key === 'Escape' || key === 'Enter' || key === ' ') hidePresenter();
	}

	/**
	 * Handle click of a gallery image, will also be called when enter/space pressed
	 * on focus for keyboard navigators/screenreaders.
	 * @param {MouseEvent} event
	 */
	function handleClick(event) {
		// save reference to previously focused element before opening presenter
		// @ts-ignore
		focusedElementBeforePresenter = document.activeElement;

		// @ts-ignore
		const imageElement = event.currentTarget?.querySelector('img');
		const source = imageElement.getAttribute('src');

		showPresenter(source);
	}
</script>

<svelte:head>
	<title>{capitalize(data.name)} - Dream Capture Co</title>
</svelte:head>

<section>
	<h1>{data.name}</h1>
	<div class="text-blackcoffee/70">Click an image to view fullscreen</div>
	<div
		class="mx-10 columns-1 sm:!mx-auto sm:max-w-[90vw] sm:columns-2 md:max-w-[80vw] md:columns-3"
	>
		{#each data.images as img}
			<button type="button" on:click={handleClick} class="presenter-show">
				<img
					src={img}
					alt={img}
					class="py-2 drop-shadow-lg hover:scale-[101%] hover:brightness-90"
				/>
			</button>
		{/each}
	</div>
	<button
		class="presenter hidden h-full w-full"
		on:click={hidePresenter}
		bind:this={presenterElement}
	>
		<div class="relative flex items-center justify-center">
			<img
				class="presenter-image object-fit max-h-[100vh] max-w-[100vw]"
				id="presenter-image"
				alt="Full screen"
				bind:this={presenterImageElement}
			/>
			<div
				class="absolute top-0 rounded-b-lg bg-eggshell/30 px-4 py-1 text-blackcoffee/70 backdrop-blur-md"
			>
				Click anywhere to close the preview
			</div>
		</div></button
	>
</section>

<style lang="postcss">
	.presenter {
		@apply inset-0 h-[100vh] w-[100vw] bg-black/50;
		position: fixed;
	}
</style>
