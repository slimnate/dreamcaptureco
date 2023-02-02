import { getHeaderImages } from '$lib/data/portfolio';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return { portfolioItems: await getHeaderImages() };
}
