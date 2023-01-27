<script>
	import Gallery from '$lib/components/carousel/Gallery.svelte';
	import Testimonials from '$lib/components/carousel/Testimonials.svelte';
	import Collage from '$lib/components/Collage.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import Tagline from '$lib/components/Tagline.svelte';
	import TitleHero from '$lib/components/TitleHero.svelte';

	const portfolioItems = [
		{
			name: 'Slide 1',
			description: 'Some representative placeholder content for the first slide.',
			image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(123).jpg',
			link: '#!',
		},
		{
			name: 'Slide 2',
			description: 'Some representative placeholder content for the second slide.',
			image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(124).jpg',
			link: '#!',
		},
		{
			name: 'Slide 3',
			description: 'Some representative placeholder content for the third slide.',
			image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(125).jpg',
			link: '#!',
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
