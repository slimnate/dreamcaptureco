<script>
	import Gallery from '$lib/components/carousel/Gallery.svelte';
	import Testimonials from '$lib/components/carousel/Testimonials.svelte';
	import Collage from '$lib/components/Collage.svelte';
	import QuickAbout from '$lib/components/QuickAbout.svelte';
	import Tagline from '$lib/components/Tagline.svelte';
	import TitleHero from '$lib/components/TitleHero.svelte';

	/** @type {import('./$types').PageServerData} */
	export let data;

	const { portfolioItems, testimonialItems } = data;
</script>

<svelte:head>
	<title>Dream Capture Co</title>
</svelte:head>

<TitleHero />

<Tagline />

<Collage />

<QuickAbout />

<Testimonials items={testimonialItems} />

<Gallery items={portfolioItems} title="portfolio" />
