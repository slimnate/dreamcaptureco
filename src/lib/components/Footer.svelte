<script>
	import IconHouse from './icons/IconHouse.svelte';
	import IconFacebook from './icons/IconFacebook.svelte';
	import IconGoogle from './icons/IconGoogle.svelte';
	import IconInstagram from './icons/IconInstagram.svelte';
	import IconMail from './icons/IconMail.svelte';
	import IconPhone from './icons/IconPhone.svelte';
</script>

<footer class="bg-gray-100 text-center text-gray-600 lg:text-left">
	<div class="flex items-center justify-center border-b border-gray-300 p-6 md:justify-between">
		<div class="mr-12 hidden md:block">
			<span>Get connected with us on social networks:</span>
		</div>
		<div class="flex justify-center">
			<a
				href="https://www.facebook.com/profile.php?id=100088847065471"
				class="mr-6 text-gray-600"
				target="_blank"
				rel="noreferrer"
			>
				<IconFacebook />
			</a>
			<a
				href="mailto:dream.capture.co.42@gmail.com"
				class="mr-6 text-gray-600"
				target="_blank"
				rel="noreferrer"
			>
				<IconGoogle />
			</a>
			<a
				href="https://www.instagram.com/dream.capture.co/"
				class="mr-6 text-gray-600"
				target="_blank"
				rel="noreferrer"
			>
				<IconInstagram />
			</a>
		</div>
	</div>
	<div class="mx-6 py-6 text-center md:text-left">
		<div class="grid-1 grid gap-8 md:grid-cols-3">
			<div class="flex flex-col border-r-2 md:col-span-2 md:text-center">
				<h6 class="mb-4 flex justify-center font-semibold uppercase">Products</h6>
				<div class="grid-1 grid gap-4 md:grid-cols-2">
					<p>
						<a
							href="#!"
							class="hover:scale[102%] text-gray-600 hover:text-gray-800 hover:drop-shadow-lg"
							>Wedding</a
						>
					</p>
					<p>
						<a
							href="#!"
							class="hover:scale[102%] text-gray-600 hover:text-gray-800 hover:drop-shadow-lg"
							>Engagement</a
						>
					</p>
					<p>
						<a
							href="#!"
							class="hover:scale[102%] text-gray-600 hover:text-gray-800 hover:drop-shadow-lg"
							>Maternity</a
						>
					</p>
					<p>
						<a
							href="#!"
							class="hover:scale[102%] text-gray-600 hover:text-gray-800 hover:drop-shadow-lg"
							>Newborn</a
						>
					</p>
					<p>
						<a
							href="#!"
							class="hover:scale[102%] text-gray-600 hover:text-gray-800 hover:drop-shadow-lg"
							>Family</a
						>
					</p>
					<p>
						<a
							href="#!"
							class="hover:scale[102%] text-gray-600 hover:text-gray-800 hover:drop-shadow-lg"
							>Seniors</a
						>
					</p>
					<p>
						<a
							href="#!"
							class="hover:scale[102%] text-gray-600 hover:text-gray-800 hover:drop-shadow-lg"
							>Portrait</a
						>
					</p>
					<p>
						<a
							href="#!"
							class="hover:scale[102%] text-gray-600 hover:text-gray-800 hover:drop-shadow-lg"
							>Boudoir</a
						>
					</p>
				</div>
			</div>
			<div class="">
				<h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
				<p class="mb-4 flex items-center justify-center md:justify-start">
					<IconHouse />
					Kansas City, MO, US
				</p>
				<p class="mb-4 flex items-center justify-center md:justify-start">
					<IconMail />
					info@dreamcaptureco.com
				</p>
				<p class="mb-4 flex items-center justify-center md:justify-start">
					<IconPhone />
					+ 1 816 123 1234
				</p>
			</div>
		</div>
	</div>
	<div class="bg-gray-200 p-6 text-center">
		<span>© 2021 Copyright</span>
		<a class="font-semibold text-gray-600" href="https://www.slimnate.com/">slimnate</a>
	</div>
</footer>
