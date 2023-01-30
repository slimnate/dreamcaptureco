<script>
	import Spacer from '$lib/components/Spacer.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Spacer>{data.category}</Spacer>

<div class="mx-10 columns-1 sm:mx-auto sm:max-w-[90vw] sm:columns-2 md:max-w-[80vw] md:columns-3">
	{#each data.images as img}
		<img src={img} alt={img} class="py-2" />
	{/each}
</div>
