<script>
	import NavbarMenuItem from '$lib/components/NavbarMenuItem.svelte';
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
  bg-cream
  py-1
  text-gray-500
  shadow-lg hover:text-gray-700 focus:text-gray-700
  "
>
	<div class="container-fluid flex w-full flex-wrap items-center justify-between px-6">
		<!-- Toggler button -->
		<button
			class="
      navbar-toggler
      border-0
      bg-transparent
      py-2 px-2.5
      text-gray-500
      hover:no-underline
      hover:shadow-none
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

		<div class="navbar-collapse collapse flex-grow items-center" id="navbarSupportedContent">
			<!-- Logo/Title -->
			<a
				class="
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        lg:mt-0
      "
				href="/"
			>
				<span class="text-lg">Dream Capture</span>
			</a>
			<!-- END Logo/Title -->

			<!-- Page links -->
			<ul class="list-style-none navbar-nav flex flex-grow flex-col justify-end">
				<NavbarMenuItem href="/portfolio">Portfolio</NavbarMenuItem>
				<NavbarMenuItem href="/booking">Booking</NavbarMenuItem>
				<NavbarMenuItem href="/about">About</NavbarMenuItem>
			</ul>
			<!-- END Page links -->
		</div>
		<!-- END Collapsible wrapper -->

		<!-- Right elements -->
		<div class="relative flex items-center">
			<!-- PLACEHOLDER -->
		</div>
		<!-- END Right elements -->
	</div>
</nav>
