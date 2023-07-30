<script>
	import Footer from '$lib/components/Footer.svelte';
	import '../theme.postcss'; // skeleton theme
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.css';
	import Navbar from './Navbar.svelte';
	import 'tw-elements/dist/css/tw-elements.min.css';
	// import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
	// import '@fortawesome/fontawesome-free/css/solid.css';
</script>

<Navbar />

<div class="mx-auto text-center">
	<slot />
</div>

<Footer />
