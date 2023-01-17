<script>
	import '../app.css';
	import Navbar from './Navbar.svelte';
</script>

<Navbar />

<div class="mx-auto bg-slate-300 text-center">
	<slot />
</div>
