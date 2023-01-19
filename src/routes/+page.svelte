<script>
	import Gallery from '$lib/components/carousel/Gallery.svelte';
	import Testimonials from '$lib/components/carousel/Testimonials.svelte';
	import Footer from '$lib/components/Footer.svelte';
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

<Testimonials />

<Gallery items={portfolioItems} title="Portfolio" titleFloating={false} />
