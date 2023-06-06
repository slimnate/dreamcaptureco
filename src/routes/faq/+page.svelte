<script>
	import { onMount } from 'svelte';
	import bgImageJpg from '$lib/images/header-faq.jpg?w=1400';
	import bgImageWebp from '$lib/images/header-faq.jpg?w=1400&format=webp';
	import { browser } from '$app/environment';

	function supportsWebp() {
		// console.log(browser && document.documentElement.classList.contains('webp'));
		return browser && document.documentElement.classList.contains('webp');
	}

	const bgImage = supportsWebp() ? bgImageWebp : bgImageJpg;

	const faqs = [
		{
			question: 'What type of photography do you do?',
			answer:
				'I do it all! Kids, weddings, boudoir, fantasy shoots - I have yet to find something I don’t love photographing, and love working with you to bring any vision you have to life!',
		},
		{
			question: 'What type of locations do you shoot?',
			answer:
				'I have a studio space in my home with different backdrop options, and I know a ton of beautiful outdoor locations. Each package comes with a different number of locations. After you fill out a <a href="/booking">booking inquiry</a> I’ll work with you in finding the best location(s) for your needs.',
		},
		{
			question: 'How long does it take to get my photos?',
			answer:
				'Turn around times will vary depending on the package you choose, but averages around 2-3 weeks. I also offer a package add-on for reduced turnaroud time (See <a href="/pricing">pricing</a> for more info). ',
		},
		{ question: 'What camera do you shoot with?', answer: 'Canon EOS R' }, // maybe include more info about lenses/lighting
		{
			question: 'How will I receive my photos?',
			answer:
				'Images will be delivered digitally on Google Drive. I will send you a link to the Google Drive folder where you can view and save your photos. This folder will only be accessible for 2 weeks, so in that time you will need to download the images to a device of your own. It is recommended to backup these images to a dedicated flash drive. I do keep all my photos on a hard drive forever though in case anything happens to your device and you need them again in the future.',
		},
		{
			question: 'Do you offer prints? ',
			answer:
				'Not at this time, all I currently offer are the digital copies of your images. I might add print options in the future.',
		},
		{
			question: 'Do you work with pets?',
			answer:
				'Yes! I love working with pets of all kinds, but they do count as a subject so keep that in mind while booking.',
		},
		{
			question: 'How do I book?',
			answer:
				'Fill out the form on the <a href="/booking">booking</a> page and I will reach out to schedule your session.',
		},
		{
			question: 'Do you require a deposit?',
			answer:
				'After filling out a <a href="/booking">booking inquiry</a> I will contact you directly. Once you’ve paid a 50% non refundable deposit I can secure your date in my calander.',
		},
		{
			question: 'What if I need to reschedule my session?',
			answer:
				'If an emergency happens, you get sick, or the weather is bad I can reschedule the appointment once for free. If you have to reschedule again, you will forfeit your deposit and have to rebook.',
		},
		{
			question: 'Do you travel?',
			answer: 'Yes! For specific questions about travel and pricing please email/text me directly.',
		},
		{
			question: 'What payment methods do you accept?',
			answer:
				'I accept cash as well as most online payment methods, including CashApp, Venmo, PayPal, Facebook Pay, etc.',
		},
	];

	onMount(async () => {
		const { Collapse, initTE } = await import('tw-elements');

		initTE({ Collapse });
	});
</script>

<svelte:head>
	<title>FAQ - Dream Capture Co</title>
</svelte:head>

<section class="pb-12">
	<!-- Booking header -->
	<div
		id="pricing"
		class="flex h-[300px] items-center justify-center overflow-hidden bg-cover bg-no-repeat text-center text-eggshell sm:h-[400px] md:h-[500px]"
		style:background-image={`url(${bgImage})`}
		style="
			background-position: 50%;
		"
	>
		<h2 class="text-5xl font-bold">FAQ</h2>
	</div>

	<div id="faq-accordian" class="mx-auto mt-4 md:max-w-xl lg:max-w-3xl">
		{#each faqs as faq, index}
			<div
				class:border-t-0={index === 0}
				class="rounded-none border border-b-0 border-l-0 border-r-0 border-neutral-200 dark:border-neutral-600 dark:bg-neutral-800"
			>
				<h2 class="mb-0" id={`faq-heading${index}`}>
					<button
						class="group relative flex w-full items-center rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white md:text-lg [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-px_0_rgba(75,85,99)]"
						type="button"
						data-te-collapse-init
						data-te-collapse-collapsed
						data-te-target={`#faq-collapse${index}`}
						aria-expanded="false"
						aria-controls={`faq-collapse${index}`}
					>
						{faq.question}
						<span
							class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="h-6 w-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</span>
					</button>
				</h2>
				<div
					id={`faq-collapse${index}`}
					class="!visible hidden border-0"
					data-te-collapse-item
					aria-labelledby={`faq-heading${index}`}
					data-te-parent="#faq-accordian"
				>
					<div class="answer-body md:text-md leading-wide px-5 py-4 text-left text-sm">
						{@html faq.answer}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="postcss">
	.answer-body :global(a) {
		@apply font-semibold text-blackcoffee hover:drop-shadow-xl;
	}
</style>
