<script>
	import Gallery from '$lib/components/carousel/Gallery.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import { getGalleryImagesFor } from '$lib/data/portfolio.js';

	const portraitItems = getGalleryImagesFor('portrait');

	const boudoirItems = getGalleryImagesFor('boudoir');

	const couplesItems = getGalleryImagesFor('couples');

	const familyItems = getGalleryImagesFor('family');

	const maternityItems = getGalleryImagesFor('maternity');

	const newbornItems = getGalleryImagesFor('newborn');
</script>

<Spacer>Portfolio</Spacer>

<Gallery items={portraitItems} id="portraitsGallery" />

<Spacer />

<Gallery items={boudoirItems} id="boudoirGallery" />

<Spacer />

<Gallery items={couplesItems} id="couplesGallery" />

<Spacer />

<Gallery items={familyItems} id="familyGallery" />

<Spacer />

<Gallery items={maternityItems} id="maternityGallery" />

<Spacer />

<Gallery items={newbornItems} id="newbornGallery" />

<Spacer />
