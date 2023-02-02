import { getHeaderImages } from '$lib/data/portfolio';
import testimonials from '$lib/data/testimonials';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return { portfolioItems: await getHeaderImages(), testimonialItems: testimonials };
}
