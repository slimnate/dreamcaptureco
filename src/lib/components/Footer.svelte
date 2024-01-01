<script>
	import IconHouse from './icons/IconHouse.svelte';
	import IconFacebook from './icons/IconFacebook.svelte';
	import IconGoogle from './icons/IconGoogle.svelte';
	import IconInstagram from './icons/IconInstagram.svelte';
	import IconMail from './icons/IconMail.svelte';
	import IconPhone from './icons/IconPhone.svelte';

	const footerLinks = [
		{ name: 'Creative Portrait', href: '/portfolio/portrait' },
		{ name: 'Classic Portrait', href: '/portfolio/classic' },
		{ name: 'Boudoir', href: '/portfolio/boudoir' },
		{ name: 'Couples', href: '/portfolio/couples' },
		{ name: 'Family', href: '/portfolio/family' },
		{ name: 'Maternity', href: '/portfolio/maternity' },
	];
</script>

<footer class="text-center lg:text-left">
	<div
		class="flex items-center justify-center border-b border-xanadu p-4 md:justify-between md:p-6"
	>
		<div class="mr-12 hidden md:block">
			<span>Get connected on social networks:</span>
		</div>
		<div class="flex justify-center">
			<a
				href="https://www.facebook.com/profile.php?id=100088847065471"
				class="mr-6"
				target="_blank"
				rel="noreferrer"
			>
				<IconFacebook />
			</a>
			<a href="mailto:dream.capture.co.42@gmail.com" class="mr-6" target="_blank" rel="noreferrer">
				<IconGoogle />
			</a>
			<a
				href="https://www.instagram.com/dream.capture.co/"
				class="mr-6"
				target="_blank"
				rel="noreferrer"
			>
				<IconInstagram />
			</a>
		</div>
	</div>
	<div class="mx-6 py-6 text-center md:text-left">
		<div class="grid-1 grid gap-8 md:grid-cols-3">
			<div class="flex flex-col border-blackcoffee md:col-span-2 md:border-r-2 md:text-center">
				<h6 class="mb-4 flex justify-center font-semibold uppercase">Categories</h6>
				<div class="grid-1 grid gap-4 sm:grid-cols-2">
					{#each footerLinks as { href, name }}
						<a {href} class="hover:scale-[1.02] hover:drop-shadow-lg">{name}</a>
					{/each}
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
					dream.capture.co.42@gmail.com
				</p>
				<p class="mb-4 flex items-center justify-center md:justify-start">
					<IconPhone />
					+ 1 816 501 8247
				</p>
			</div>
		</div>
	</div>
	<div class="p-4 text-center text-sm">
		<span>© 2023 Copyright</span>
		<a class="font-semibold text-gray-600" href="https://www.slimnate.com/">slimnate</a>
	</div>
</footer>
