import { getAllImagesFor, getDisplayName, isValidCategory } from '$lib/data/portfolio';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const category = params.category;
	if (!isValidCategory(category)) throw error(404, 'Not a valid category');
	const images = await getAllImagesFor(category);
	const name = getDisplayName(category);

	return {
		name,
		category,
		images,
	};
}
