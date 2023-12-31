<script>
	import Gallery from '$lib/components/carousel/Gallery.svelte';

	/** @type {import('./$types').PageServerData} */
	export let data;

	const {
		portraitItems,
		boudoirItems,
		couplesItems,
		familyItems,
		maternityItems,
		classicPortraitItems,
	} = data;
</script>

<svelte:head>
	<title>Portfolio - Dream Capture Co</title>
</svelte:head>

<Gallery items={portraitItems} id="portraitsGallery" title="Portfolio" />

<Gallery items={classicPortraitItems} id="classicPortraitGallery" />

<Gallery items={boudoirItems} id="boudoirGallery" />

<Gallery items={couplesItems} id="couplesGallery" />

<Gallery items={familyItems} id="familyGallery" />

<Gallery items={maternityItems} id="maternityGallery" />
