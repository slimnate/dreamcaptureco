<script>
	import { createEventDispatcher } from 'svelte';
	import { swipe } from 'svelte-hammer';

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

	function nextImage() {
		if (currentIndex === images.length - 1) {
			currentIndex = 0;
		} else {
			currentIndex++;
		}
	}

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

		console.log(key);
		// capture tab
		if (key === 'Tab') event.preventDefault();

		if (key == 'ArrowLeft') {
			previousImage();
		}

		if (key == 'ArrowRight') {
			nextImage();
		}

		if (key === 'Escape' || key === 'Enter' || key === ' ') {
			hide();
			event.preventDefault(); // prevent default to keep space from reopening after focus is returned to calling element.
		}
	}

	let /** @type {Boolean} */ shown = false;
	let /** @type {Number} */ currentIndex = 0;
	let /** @type {HTMLElement | null} */ previousFocusedElement;

	export let /** @type {string[]} */ images;
</script>

<div class="fixed inset-0 z-10 bg-blackcoffee/50" class:hidden={!shown}>
	<button
		class=" h-full w-full"
		on:click={hide}
		use:swipe
		on:swipeleft={nextImage}
		on:swiperight={previousImage}
		on:swipeup={close}
		on:swipedown={close}
	>
		<div class="relative flex items-center justify-center">
			<img
				class="object-fit max-h-[100vh] max-w-[100vw]"
				alt="Full screen"
				src={images[currentIndex]}
			/>
			<div
				class="absolute top-0 rounded-b-lg bg-eggshell/30 px-4 py-1 text-blackcoffee/70 backdrop-blur-md"
			>
				Click anywhere to close the preview
			</div>
		</div>
	</button>
</div>
