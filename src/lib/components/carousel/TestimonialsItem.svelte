<script>
	import Quote from '../icons/Quote.svelte';

	export let name = '';
	export let location = '';
	export let image = '/images/placeholder_landscape.jpg';
	export let active = false;
</script>

<div
	class="carousel-item relative float-left w-full justify-end overflow-hidden bg-cover bg-no-repeat"
	class:active
	style="
					background-position: 50%;
					background-image: url({image});
					height: 500px;
				"
>
	<div class="flex h-full flex-wrap justify-center">
		<div class="flex w-full flex-col justify-end px-3 lg:w-8/12 lg:justify-center">
			<h5 class="mb-3 text-lg font-bold text-black drop-shadow-md">{name}</h5>
			<p class="mb-4 font-medium text-gray-900 drop-shadow-md">{location}</p>
			<p class="mb-6 text-black drop-shadow-md">
				<Quote /><slot />
			</p>
		</div>
	</div>
</div>
