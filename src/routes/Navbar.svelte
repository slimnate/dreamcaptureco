<script>
	import IconHamburger from '$lib/components/icons/IconHamburger.svelte';

	const navItems = [
		{
			href: '/portfolio',
			text: 'Portfolio',
		},
		{
			href: '/booking',
			text: 'Booking',
		},
		{
			href: '/about',
			text: 'About',
		},
	];
</script>

<nav
	class="
  navbar
  navbar-light
  navbar-expand-md
	relative
  flex
  w-full
  flex-wrap
  items-center
  justify-between
  py-1 shadow-md
  "
>
	<div class="container-fluid flex w-full justify-between px-6">
		<!-- Toggler button -->
		<button
			class="
      navbar-toggler
      border-0
      bg-transparent
      py-2 px-2.5
      hover:no-underline
      hover:drop-shadow-md
      focus:no-underline focus:shadow-none focus:outline-none focus:ring-0
    "
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<IconHamburger />
		</button>
		<!-- END Toggler button -->

		<!-- Logo/Title TODO: move logo outside of nav collapse so it shows in center of navbar on mobile/tablet, not in dropdown -->
		<a
			class="
        flex
        items-center
        lg:mt-0
      "
			href="/"
		>
			<span class="semibold text-lg">Dream Capture</span>
		</a>

		<!-- navbar collapse -->
		<div
			class="navbar-collapse collapse flex-grow items-center border-t-2 border-black/80 md:border-none"
			id="navbarSupportedContent"
		>
			<!-- Page links -->
			<ul class="list-style-none navbar-nav flex flex-grow flex-col justify-end">
				{#each navItems as { href, text }}
					<li class="nav-item p-2">
						<a class="nav-link p-0 hover:drop-shadow-lg" {href}>{text}</a>
					</li>
				{/each}
			</ul>
		</div>
		<!-- END Collapsible wrapper -->

		<!-- Right elements -->
		<div class="relative flex items-center">
			<!-- PLACEHOLDER -->
		</div>
		<!-- END Right elements -->
	</div>
</nav>
