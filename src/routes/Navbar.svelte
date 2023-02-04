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

	/**
	 * @param {MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement; }} event
	 */
	function handleNavItemClick(event) {
		document.querySelector('.navbar-collapse')?.classList.remove('show');
	}
</script>

<!--bg-gradient-to-b from-cream/70 via-cream to-cream/70-->
<nav
	class="
  navbar
  navbar-expand-md
  navbar-light
	relative
  flex
  w-full
  flex-wrap
  items-center
  justify-between
  py-1 shadow-md
  "
>
	<div class="container-fluid flex w-full flex-wrap justify-between px-6">
		<!-- Toggler button -->
		<button
			class="
			navbar-toggler
      w-[10vw]
			border-0
      bg-transparent py-2
      pl-2.5
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
		<div class="logo flex grow items-center justify-center md:justify-start md:px-2">
			<a href="/" on:click={handleNavItemClick}>
				<span class="semibold text-lg">Dream Capture</span>
			</a>
		</div>
		<div class="navbar-collapse collapse" id="navbarSupportedContent">
			<!-- Page links -->
			<ul class="list-style-none navbar-nav flex flex-col md:justify-end">
				{#each navItems as { href, text }}
					<li class="nav-item p-2">
						<a class="nav-link p-0  hover:drop-shadow-lg" {href} on:click={handleNavItemClick}
							>{text}</a
						>
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
