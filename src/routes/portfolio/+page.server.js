import { getGalleryImagesFor } from '$lib/data/portfolio.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const portraitItems = await getGalleryImagesFor('portrait');
	const boudoirItems = await getGalleryImagesFor('boudoir');
	const couplesItems = await getGalleryImagesFor('couples');
	const familyItems = await getGalleryImagesFor('family');
	const maternityItems = await getGalleryImagesFor('maternity');
	const businessItems = await getGalleryImagesFor('business');

	return {
		portraitItems,
		boudoirItems,
		couplesItems,
		familyItems,
		maternityItems,
		businessItems,
	};
}
