<script lang="js">
	import IconFacebook from '$lib/components/icons/IconFacebook.svelte';
	import IconInstagram from '$lib/components/icons/IconInstagram.svelte';

	import bgImageJpg from '$lib/images/header-booking.jpg?w=1400';
	import bgImageWebp from '$lib/images/header-booking.jpg?w=1400&format=webp';
	import { browser } from '$app/environment';
	import BookingForm from '$lib/components/BookingForm.svelte';

	function supportsWebp() {
		// console.log(browser && document.documentElement.classList.contains('webp'));
		return browser && document.documentElement.classList.contains('webp');
	}

	const bgImage = supportsWebp() ? bgImageWebp : bgImageJpg;
</script>

<svelte:head>
	<title>Booking - Dream Capture Co</title>
</svelte:head>

<section>
	<!-- Booking header -->
	<div
		id="pricing"
		class="flex h-[300px] items-center justify-center overflow-hidden bg-cover bg-no-repeat text-center text-eggshell sm:h-[400px] md:h-[500px]"
		style:background-image={`url(${bgImage})`}
		style="
			background-position: 50%;
		"
	>
		<h2 class="text-5xl font-bold">Booking</h2>
	</div>

	<div class="mx-3 mb-8 mt-4 flex flex-col items-center justify-between gap-2">
		<div class="flex gap-4">
			<a href="https://www.facebook.com/profile.php?id=100088847065471">
				<div
					class="button-glass flex h-16 w-16 items-center justify-center border border-blackcoffee p-8"
				>
					<span><IconFacebook /></span>
				</div>
			</a>
			<a href="https://www.instagram.com/dream.capture.co/">
				<div
					class="button-glass flex h-16 w-16 items-center justify-center border border-blackcoffee p-8"
				>
					<span><IconInstagram /></span>
				</div>
			</a>
		</div>
		<p class="flex-grow md:text-left">Check my social media for sales and promotions</p>
	</div>

	<p class="mx-8 mb-4 text-sm leading-tight tracking-tight text-blackcoffee/70">
		Fill out the form below and we'll reach out to finalize the details of your session!
	</p>

	<BookingForm />

	<p class="mb-8 font-bold text-blackcoffee/70">
		All bookings will require a 50% deposit before finalizing
	</p>
</section>
