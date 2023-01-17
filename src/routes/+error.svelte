<!-- Section: Design Block -->
<section class="background-radial-gradient mb-32 text-center text-gray-800 lg:text-left">
	<div
		class="relative overflow-hidden bg-cover bg-no-repeat"
		style="
            background-position: 50%;
            background-image: url('/images/404.png');
            height: 500px;
          "
	>
		<div
			class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
			style="background-color: rgba(0, 0, 0, 0.75)"
		>
			<div class="flex h-full items-center justify-center">
				<div class="max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12">
					<h2 class="mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
						Page not found
					</h2>
					<p class="text-lg">The page you are looking for is not found or is no longer valid.</p>
					<div class="flex justify-center space-x-4">
						<button
							type="button"
							on:click={() => history.go(-1)}
							class="mt-6 inline-block rounded-full border-2 border-gray-200 px-6 py-2
            text-xs font-medium uppercase leading-tight text-gray-200
            transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-50 focus:outline-none focus:ring-0"
							>Go Back
						</button>
						<button
							type="button"
							class="mt-6 inline-block rounded-full border-2 border-gray-200 px-6 py-2
            text-xs font-medium uppercase leading-tight text-gray-200
            transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-50 focus:outline-none focus:ring-0"
						>
							<a href="/">Go Home</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section: Design Block -->
