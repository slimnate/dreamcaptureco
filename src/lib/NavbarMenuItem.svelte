<script>
	export let href = '';
</script>

<li class="nav-item p-2">
	<a
		class="nav-link p-0 text-gray-500
    hover:bg-transparent hover:text-gray-700 hover:drop-shadow-lg
    focus:text-gray-800"
		{href}><slot /></a
	>
</li>
