import { getGalleryImagesFor } from '$lib/data/portfolio.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const portraitItems = await getGalleryImagesFor('portrait');
	const boudoirItems = await getGalleryImagesFor('boudoir');
	const couplesItems = await getGalleryImagesFor('couples');
	const familyItems = await getGalleryImagesFor('family');
	const maternityItems = await getGalleryImagesFor('maternity');
	const newbornItems = await getGalleryImagesFor('newborn');
  
  return {
    portraitItems,
    boudoirItems,
    couplesItems,
    familyItems,
    maternityItems,
    newbornItems,
  }
}
