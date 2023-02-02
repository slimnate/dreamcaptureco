<script>
	import Gallery from '$lib/components/carousel/Gallery.svelte';

	/** @type {import('./$types').PageServerData} */
	export let data;

	const { portraitItems, boudoirItems, couplesItems, familyItems, maternityItems, newbornItems } =
		data;
</script>

<Gallery items={portraitItems} id="portraitsGallery" title="Portfolio" />

<Gallery items={boudoirItems} id="boudoirGallery" />

<Gallery items={couplesItems} id="couplesGallery" />

<Gallery items={familyItems} id="familyGallery" />

<Gallery items={maternityItems} id="maternityGallery" />

<Gallery items={newbornItems} id="newbornGallery" />
