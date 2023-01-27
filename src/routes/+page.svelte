<script>
	import Gallery from '$lib/components/carousel/Gallery.svelte';
	import Testimonials from '$lib/components/carousel/Testimonials.svelte';
	import Collage from '$lib/components/Collage.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import Tagline from '$lib/components/Tagline.svelte';
	import TitleHero from '$lib/components/TitleHero.svelte';

	const portfolioItems = [
		{
			name: 'Portrait',
			image: '/images/portrait/gallery.jpg',
			link: '/portfolio/portrait',
		},
		{
			name: 'Boudoir',
			image: '/images/boudoir/gallery.jpg',
			link: '/portfolio/boudoir',
		},
		{
			name: 'Couples',
			image: '/images/couples/gallery.jpg',
			link: '/portfolio/couples',
		},
		{
			name: 'Family',
			image: '/images/family/gallery.jpg',
			link: '/portfolio/family',
		},
		{
			name: 'Maternity',
			image: '/images/maternity/gallery.jpg',
			link: '/portfolio/maternity',
		},
		{
			name: 'Newborn',
			image: '/images/newborn/gallery.jpg',
			link: '/portfolio/newborn',
		},
	];
</script>

<TitleHero />

<Tagline />

<Collage />

<Spacer>Testimonials</Spacer>

<Testimonials />

<Spacer>Portfolio</Spacer>

<Gallery items={portfolioItems} />
