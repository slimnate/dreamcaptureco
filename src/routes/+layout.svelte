<script>
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import Navbar from './Navbar.svelte';
</script>

<Navbar />

<div class="mx-auto text-center">
	<slot />
</div>

<Footer />
