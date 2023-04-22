<script>
	import { onMount } from 'svelte';
	import IconArrowLeft from '../icons/IconArrowLeft.svelte';
	import IconArrowRight from '../icons/IconArrowRight.svelte';

	onMount(async () => {
		const { Carousel, initTE } = await import('tw-elements');
		initTE({ Carousel }, true);
	});

	/**
	 * @type {import("$lib/data/portfolio").GalleryItem[]}
	 */
	export let items = [];
	export let title = '';
	export let id = 'gallery';
</script>

<section class="text-blackcoffee">
	<h1>{title}</h1>
	<div {id} class="relative pb-16" data-te-carousel-init data-te-carousel-slide>
		<!-- Carousel buttons -->
		<div
			class="absolute right-0 bottom-0 left-0 mb-12 flex justify-center p-0"
			data-te-carousel-indicators
		>
			<!-- render carousel indicators -->
			{#each items as item, i}
				{@const propertiesActive = i === 0 ? { 'data-te-carousel-active': true } : {}}
				<button
					type="button"
					class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
					data-te-target={`#${id}`}
					data-te-slide-to={i}
					{...propertiesActive}
					aria-label={item.name}
				/>
			{/each}
		</div>

		<!-- Carousel items -->
		<div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
			<!-- render carousel items -->
			{#each items as { name, image, link, orientation }, i}
				{@const propertiesActive = i === 0 ? { 'data-te-carousel-active': true } : {}}
				<!-- Item -->
				<div
					class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
					class:hidden={i !== 0}
					data-te-carousel-item
					{...propertiesActive}
				>
					{#if name}
						<div class="absolute inset-0 z-10 h-min">
							<button class="button-glass button-floating-top text-2xl"
								><a href={link}>{name}</a></button
							>
						</div>
					{/if}
					<!-- carousel title -->
					<div class="mx-auto flex h-min items-start justify-center">
						<img
							src={image}
							alt={name}
							class="h-[150vw] max-h-[max(80vh,400px)] w-full object-contain object-top"
						/>
					</div>
				</div>
			{/each}

			<!-- carousel buttons-->
			<button
				class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:no-underline hover:opacity-90 hover:outline-none focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
				type="button"
				data-te-target={`#${id}`}
				data-te-slide="prev"
			>
				<span class="inline-block h-8 w-8">
					<IconArrowLeft />
				</span>
				<span
					class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
				>
					Previous
				</span>
			</button>
			<button
				class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:no-underline hover:opacity-90 hover:outline-none focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
				type="button"
				data-te-target={`#${id}`}
				data-te-slide="next"
			>
				<span class="inline-block h-8 w-8">
					<IconArrowRight />
				</span>
				<span
					class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
				>
					Next
				</span>
			</button>
		</div>
	</div>
</section>
