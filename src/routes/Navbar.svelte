<script>
	import IconHamburger from '$lib/components/icons/IconHamburger.svelte';
	import { onMount } from 'svelte';

	onMount(async () => {
		const { Collapse, initTE } = await import('tw-elements');
		initTE({ Collapse });
	});

	const navItems = [
		{
			href: '/portfolio',
			text: 'Portfolio',
		},
		{
			href: '/pricing',
			text: 'Pricing',
		},
		{
			href: '/booking',
			text: 'Booking',
		},
		{
			href: '/about',
			text: 'About',
		},
		{
			href: '/faq',
			text: 'FAQ',
		},
	];

	/**
	 * @param {MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement; }} event
	 */
	function handleNavItemClick(event) {
		document.querySelector('.navbar-collapse')?.classList.remove('show');
	}
</script>

<!-- Main navigation container -->
<nav class="relative flex w-full items-center justify-between py-3 shadow-lg" data-te-navbar-ref>
	<div class="my-auto flex w-full flex-wrap items-center justify-between px-3">
		<!-- Hamburger button for mobile view -->
		<button
			class="block border-0 bg-transparent px-2 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 md:hidden"
			type="button"
			data-te-collapse-init
			data-te-target="#navbarContent"
			aria-controls="navbarContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<IconHamburger />
		</button>

		<!-- Navbar title -->
		<div class="flex grow items-center justify-center md:justify-start">
			<a class="pr-2 text-center text-xl" href="/"><span class="semibold">Dream Capture</span></a>
		</div>

		<!-- Collapsible navbar container -->
		<div
			class="!visible hidden flex-grow basis-[100%] md:mt-0 md:!flex md:basis-auto md:justify-end"
			id="navbarContent"
			data-te-collapse-item
		>
			<!-- Left links -->
			<ul
				class="list-style-none my-auto flex flex-col justify-end pl-0 md:flex-row"
				data-te-navbar-nav-ref
			>
				{#each navItems as { href, text }, index}
					<li
						class:mt-4={index === 0}
						class:mb-0={index === navItems.length - 1}
						class="my-2 md:mt-0 md:mb-0 md:px-2 md:pr-2"
						data-te-nav-item-ref
					>
						<a
							class="text-blackcoffee/70 hover:text-blackcoffee hover:drop-shadow-lg sm:text-lg"
							{href}
							data-te-nav-link-ref>{text}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
