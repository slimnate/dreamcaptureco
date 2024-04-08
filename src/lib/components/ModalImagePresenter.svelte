<script>
	import { createEventDispatcher } from 'svelte';
	import { Hammer, swipe } from 'svelte-hammer';
	import { isTouchDevice } from '$lib/touch';

	const dispatch = createEventDispatcher();

	/**
	 * Hide the presenter and return focus back to the previousFocusedElement.
	 */
	function hide() {
		// remove event listeners
		document.removeEventListener('keydown', handleKeys);
		shown = false;
		dispatch('hide', currentIndex);
	}

	/**
	 * Show the presenter
	 * @param index {Number | null | undefined}
	 * @param returnFocusTo { HTMLElement | null }
	 */
	export function show(index) {
		// add event listeners
		document.addEventListener('keydown', handleKeys);

		currentIndex = index || 0;
		shown = true;
	}

	/**
	 * Navigate to the next image
	 */
	function nextImage() {
		if (currentIndex === images.length - 1) {
			currentIndex = 0;
		} else {
			currentIndex++;
		}
	}

	/**
	 * Navigate to previous image
	 */
	function previousImage() {
		if (currentIndex === 0) {
			currentIndex = images.length - 1;
		} else {
			currentIndex--;
		}
	}

	/**
	 * Handle keyboard events on the open presenter:
	 * - intercept tab to keep focus on modal
	 * - close on Escape, Enter, or space keys
	 * @param {KeyboardEvent} event
	 */
	function handleKeys(event) {
		const key = event.key;

		if (key === 'Tab') event.preventDefault();

		if (key === 'ArrowLeft') {
			previousImage();
		}

		if (key === 'ArrowRight') {
			nextImage();
		}

		if (key === 'ArrowUp' || key === 'ArrowDown') {
			event.preventDefault();
		}

		if (key === 'Escape' || key === 'Enter' || key === ' ') {
			// prevent default to keep space from reopening after focus is returned to calling element.
			event.preventDefault();
			hide();
		}
	}

	let /** @type {Boolean} */ shown = false;
	let /** @type {Number} */ currentIndex = 0;
	export let /** @type {string[]} */ images;
	export let /** @type {boolean}*/ showIndex = false;
</script>

<div class="fixed inset-0 z-10 bg-blackcoffee/50" class:hidden={!shown}>
	<button
		class=" h-full w-full"
		on:click|preventDefault={hide}
		use:swipe={{ direction: Hammer.DIRECTION_ALL }}
		on:swipeleft={nextImage}
		on:swiperight={previousImage}
		on:swipeup={hide}
		on:swipedown={hide}
	>
		<div class="relative flex items-center justify-center">
			<img
				class="object-fit max-h-[100vh] max-w-[100vw]"
				alt="Full screen"
				src={images[currentIndex]}
			/>
			<div
				class="balance absolute top-0 rounded-b-lg bg-eggshell/50 px-2 py-1 text-blackcoffee/90 backdrop-blur-lg"
			>
				{#if isTouchDevice()}
					Tap or swipe up/down to close the preview
				{:else}
					Click anywhere to close the preview
				{/if}
			</div>
			{#if showIndex}
				<div class="absolute bottom-0 h-16 w-16 bg-cream/50">
					<!-- pt-[.2rem] is just a hacky way to center the text, remember how to do this properly later -->
					<div class="mx-auto pt-[0.6rem] text-3xl">{currentIndex}</div>
				</div>
			{/if}
		</div>
	</button>
</div>

<style>
	.balance {
		text-wrap: balance;
	}
</style>
