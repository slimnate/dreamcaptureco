import { getAllImagesFor } from '$lib/data/portfolio';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const category = params.category;
	const images = getAllImagesFor(category);
  
	return {
		category,
		images,
	};
}
