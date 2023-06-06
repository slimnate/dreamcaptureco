<script>
	import bgImageJpg from '$lib/images/hero.jpg';
	import bgImageWebp from '$lib/images/hero.jpg?format=webp';
	import { browser } from '$app/environment';

	function supportsWebp() {
		// console.log(browser && document.documentElement.classList.contains('webp'));
		return browser && document.documentElement.classList.contains('webp');
	}

	const bgImage = supportsWebp() ? bgImageWebp : bgImageJpg;
</script>

<section class="text-center text-eggshell">
	<!-- fixed size container with background image, relative parent for absolute children -->
	<div
		class="relative h-[300px] overflow-hidden bg-cover bg-no-repeat sm:h-[400px] md:h-[500px]"
		style:background-image={`url(${bgImage})`}
		style="
			background-position-y: 50%;
		"
	>
		<!-- absolute, full size container with bg color overlay -->
		<div
			class="absolute inset-0 overflow-hidden bg-fixed"
			style="background-color: rgba(0, 0, 0, 0.35)"
		>
			<!-- items positioning container for text/button -->
			<div class="flex h-full flex-col items-center justify-between">
				<!-- heading -->
				<h2
					class="my-auto p-[0.25em] text-5xl font-bold tracking-tight sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem]"
				>
					Dream Capture Co
				</h2>

				<!-- button-->
				<button type="button" class="button-glass my-auto text-xl sm:text-2xl lg:text-3xl">
					<a href="/booking">Book Now</a>
				</button>
			</div>
		</div>
	</div>
</section>
