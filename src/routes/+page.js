import { getHeaderImages } from '$lib/data/portfolio';
import testimonials from '$lib/data/testimonials';

export async function load() {
	return { testimonialItems: testimonials, portfolioItems: await getHeaderImages() };
}
