<script>
	import ModalImagePresenter from '$lib/components/ModalImagePresenter.svelte';
	import { capitalize } from '$lib/string';

	/** @type {import('./$types').PageServerData} */
	export let data;

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
		document.getElementById(`image-btn-${currentIndex}`)?.focus();
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
		{#each data.images as img, i}
			<button id={`image-btn-${i}`} type="button" on:click={handleClick} class="presenter-show">
				<img
					data-index={i}
					src={img}
					alt={img}
					class="py-2 drop-shadow-lg hover:scale-[101%] hover:brightness-90"
				/>
			</button>
		{/each}
	</div>
	<ModalImagePresenter images={data.images} bind:this={presenter} on:hide={handlePresenterHide} />
</section>
