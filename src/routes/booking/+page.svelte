<script lang="js">
	import IconFacebook from '$lib/components/icons/IconFacebook.svelte';
	import IconInstagram from '$lib/components/icons/IconInstagram.svelte';
	import SveltyPicker from 'svelty-picker';
	import Select from '$lib/components/Select.svelte';

	import bgImageJpg from '$lib/images/header-booking.jpg?w=1400';
	import bgImageWebp from '$lib/images/header-booking.jpg?w=1400&format=webp';
	import { browser } from '$app/environment';
	import sessionTypes from '$lib/data/sessionTypes';
	import pricing from '$lib/data/pricing';

	function supportsWebp() {
		// console.log(browser && document.documentElement.classList.contains('webp'));
		return browser && document.documentElement.classList.contains('webp');
	}

	const bgImage = supportsWebp() ? bgImageWebp : bgImageJpg;

	function dateOpen() {
		// console.log('open');
		const picker = document.getElementById('date-picker');
		picker?.classList.remove('invisible');
	}

	function dateInput(e) {
		// console.log('input');
		const dateElement = document.getElementById('date');
		dateElement.value = e.detail;
		dateClose();
	}

	function dateClose(e) {
		// console.log('blur');
		const picker = document.getElementById('date-picker');
		picker?.classList.add('invisible');
	}

	function override(e) {
		console.log(e);
		e.preventDefault();
	}

	function timeOpen() {
		// console.log('open');
		const picker = document.getElementById('time-picker');
		picker?.classList.remove('invisible');
	}

	function timeInput(e) {
		// console.log('input');
		console.log(e);
		const timeElement = document.getElementById('time');
		timeElement.value = e.detail;
		timeClose();
	}

	function timeClose(e) {
		// console.log('blur');
		const picker = document.getElementById('time-picker');
		picker?.classList.add('invisible');
	}

	const sessionTypeOptions = sessionTypes.map((type) => {
		return { value: type, display: type };
	});

	const packageOptions = [
		...pricing.packages.map((p) => {
			const featureList = p.features.reduce((prev, curr) => {
				return prev + `<div class="p-1">${curr}</div>`;
			}, '');

			return {
				value: p.name,
				display: p.name,
				secondary: `$${p.price}`,
				description: `<div class="grid grid-cols-2">${featureList}</div>`,
			};
		}),
		{
			value: 'Event Consultation',
			display: 'Event Consultation',
			secondary: 'FREE',
			description: 'request a consultation for an upcoming event.',
		},
	];
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

	<form
		name="booking"
		method="POST"
		action="/booking/success"
		data-netlify="true"
		class="booking-form mx-auto grid gap-3 px-4 md:max-w-3xl md:grid-cols-2"
	>
		<!-- Hidden field for netlify form detection -->
		<input type="hidden" name="form-name" value="booking" />

		<!-- NAME -->
		<div class="relative md:col-span-2">
			<input
				type="text"
				class="floating peer input variant-form-material"
				id="name"
				name="name"
				placeholder="Name"
			/>
			<label for="name" class="floating label">Name</label>
		</div>

		<!-- PHONE -->
		<div class="relative">
			<input
				type="tel"
				class="floating peer input variant-form-material"
				id="phone"
				name="phone"
				placeholder="Phone Number"
			/>
			<label for="phone" class="floating label">Phone Number</label>
		</div>

		<!-- EMAIL -->
		<div class="relative">
			<input
				type="email"
				class="floating peer input variant-form-material"
				id="email"
				name="email"
				placeholder="Email"
			/>
			<label for="email" class="floating label">Email</label>
		</div>

		<!-- CONTACT -->
		<div class="relative flex flex-wrap justify-between px-4 md:col-span-2">
			<label for="prefferedContact" class="text-left text-blackcoffee/70"
				>Preferred Contact Method
			</label>
			<div class="flex gap-8">
				<label class="flex items-center space-x-2">
					<input class="radio" type="radio" name="preferredContact" id="radioEmail" value="Email" />
					<p>Email</p>
				</label>
				<label class="flex items-center space-x-2">
					<input
						class="radio"
						type="radio"
						name="preferredContact"
						id="radioPhone"
						value="Phone"
						checked
					/>
					<p>Phone</p>
				</label>
			</div>
		</div>

		<!-- PACKAGE TYPE -->
		<Select id="package" options={packageOptions} placeholder="Package" />

		<!-- SESSION TYPE -->
		<Select id="session" options={sessionTypeOptions} placeholder="Session Type" />

		<!-- DATE -->
		<div class="relative">
			<input
				type="text"
				id="date"
				name="date"
				class="floating peer input variant-form-material"
				placeholder="Select a date"
				value=""
				autocomplete="off"
				on:click={dateOpen}
				on:focus={dateOpen}
				on:focusout={dateClose}
				on:keypress={override}
				on:keydown={override}
			/>
			<label for="date" class="floating label">Select a date</label>
			<span class="svelty-container invisible" id="date-picker"
				><SveltyPicker
					pickerOnly={true}
					mode="date"
					format="mm-dd-yyyy"
					on:input={dateInput}
					on:blur={dateClose}
					on:mousedown={dateOpen}
				/></span
			>
		</div>

		<!-- TIME -->
		<div class="relative">
			<input
				type="text"
				id="time"
				name="time"
				class="floating peer input variant-form-material"
				placeholder="Select a time"
				value=""
				autocomplete="off"
				on:click={timeOpen}
				on:focus={timeOpen}
				on:focusout={timeClose}
				on:keypress={override}
				on:keydown={override}
			/>
			<label for="time" class="floating label">Select a time</label>
			<span class="svelty-container invisible" id="time-picker">
				<SveltyPicker
					pickerOnly={true}
					mode="time"
					format="HH:ii P"
					autocommit={false}
					on:input={timeInput}
					on:blur={timeClose}
					on:mousedown={timeOpen}
				/>
			</span>
		</div>

		<!-- AVAILABILITY -->
		<div class="relative text-sm text-blackcoffee/70 md:col-span-2">
			<p>
				<b>NOTE:</b> Current only available on <i>weekends and after 5pm on weekdays</i>, but can be
				flexible in some circumstances.
			</p>
		</div>

		<!-- SUBJECTS -->
		<div class="relative mb-14 sm:mb-8 md:col-span-2">
			<textarea
				class="floating peer textarea variant-form-material"
				id="subjects"
				name="subjects"
				rows="4"
				placeholder="Subjects"
			/>
			<label for="subjects" class="floating label">Subjects </label>
			<div class="helper">
				Who will be taking part in the shoot? Include name, age, and any special accommodation info
			</div>
		</div>

		<!-- ADDITIONAL INFO -->
		<div class="relative mb-14 sm:mb-8 md:col-span-2">
			<textarea
				class="floating peer textarea variant-form-material"
				id="additionalInfo"
				name="additionalInfo"
				rows="4"
				placeholder="Additional Info"
			/>
			<label for="additionalInfo" class="floating label">Additional Info </label>
			<div class="helper">
				Include any other information about the shoot such as the occasion, theme, color pallette,
				etc.
			</div>
		</div>

		<!-- SUBMIT BUTTON -->
		<button
			type="submit"
			class="mx-auto mb-4 mt-4 block min-w-[90%] rounded !bg-blackcoffee/95 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(58,45,50,0.8)] transition duration-150 ease-in-out hover:!bg-blackcoffee hover:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] focus:!bg-blackcoffee focus:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:!bg-blackcoffee active:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] md:col-span-2 md:min-w-[50%]"
		>
			Submit
		</button>
	</form>
	<p class="mb-8 font-bold text-blackcoffee/70">
		All bookings will require a 50% deposit before finalizing
	</p>
</section>

<style lang="postcss">
	.helper {
		@apply absolute w-full text-sm text-blackcoffee/70 peer-focus:text-blackcoffee/70;
	}

	label.floating {
		@apply absolute left-4 top-0 text-xs font-semibold text-blackcoffee-500/70 transition-all duration-200 peer-placeholder-shown:top-[0.55rem] peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-blackcoffee-500/60;
	}

	input.floating,
	textarea.floating {
		@apply border-blackcoffee-300 pb-1 pl-4 pt-3 placeholder-transparent placeholder-shown:py-2;
		border-width: 0px;
		border-bottom-width: 2px;
		background-color: rgb(var(--color-surface-500) / 0.1);
	}

	.radio {
		@apply bg-blackcoffee-300;
	}

	.svelty-container {
		/* display: none; */
		@apply absolute left-0 top-11 z-10;
	}
</style>
