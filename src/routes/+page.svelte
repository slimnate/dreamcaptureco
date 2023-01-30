<script>
	import Gallery from '$lib/components/carousel/Gallery.svelte';
	import Testimonials from '$lib/components/carousel/Testimonials.svelte';
	import Collage from '$lib/components/Collage.svelte';
	import QuickAbout from '$lib/components/QuickAbout.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import Tagline from '$lib/components/Tagline.svelte';
	import TitleHero from '$lib/components/TitleHero.svelte';
	import { getHeaderImages } from '$lib/data/portfolio';

	const portfolioItems = getHeaderImages();
</script>

<TitleHero />

<Tagline />

<Collage />

<QuickAbout />

<Spacer>Testimonials</Spacer>

<Testimonials />

<Spacer>Portfolio</Spacer>

<Gallery items={portfolioItems} />
