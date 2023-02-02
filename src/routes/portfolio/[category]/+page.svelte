<script>
	/** @type {import('./$types').PageServerData} */
	export let data;
</script>

<section>
	<h1>{data.category}</h1>
	<div class="mx-10 columns-1 sm:mx-auto sm:max-w-[90vw] sm:columns-2 md:max-w-[80vw] md:columns-3">
		{#each data.images as img}
			<img src={img} alt={img} class="py-2 hover:scale-[102%]" />
		{/each}
	</div>
</section>
