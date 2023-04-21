<script lang="js">
	import { onMount } from 'svelte';
	import { Select, Datepicker, Timepicker, Input, initTE } from 'tw-elements';

	onMount(() => {
		initTE({ Select, Datepicker, Timepicker, Input });
	});
</script>

<section>
	<h1 class="">Booking</h1>

	<p class="mx-8 mb-8 text-sm leading-tight tracking-tight text-blackcoffee/70">
		Fill out the form below and we'll reach out to finalize the details of your session!
	</p>

	<form class="booking-form mx-auto grid gap-3 px-8 md:max-w-3xl md:grid-cols-2">
		<!-- NAME -->
		<div class="relative  md:col-span-2" data-te-input-wrapper-init>
			<input
				type="text"
				class="peer-focus:text-primary dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
				id="name"
				placeholder="Name"
			/>
			<label
				for="name"
				class="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
				>Name</label
			>
		</div>

		<!-- PHONE -->
		<div class="relative " data-te-input-wrapper-init>
			<input
				type="tel"
				class="peer-focus:text-primary dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
				id="phone"
				placeholder="Phone Number"
			/>
			<label
				for="phone"
				class="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
				>Phone Number</label
			>
		</div>

		<!-- EMAIL -->
		<div class="relative " data-te-input-wrapper-init>
			<input
				type="email"
				class="peer-focus:text-primary dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
				id="email"
				placeholder="Email"
			/>
			<label
				for="email"
				class="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
				>Email</label
			>
		</div>

		<!-- PACKAGE TYPE -->
		<div class="relative ">
			<select id="package" data-te-select-init data-te-select-size="lg">
				<option value="" hidden selected />
				<option value="Day Dreams">Day Dream</option>
				<option value="Sweet Dream">Sweet Dream</option>
				<option value="Dream Come True">Dream Come True</option>
			</select>
			<label data-te-select-label-ref for="package">Package</label>
		</div>

		<!-- SESSION TYPE -->
		<div class="relative ">
			<select id="session" data-te-select-init data-te-select-size="lg">
				<option value="" hidden selected />
				<option value="portrait">Protrait</option>
				<option value="Boudoir">Boudoir</option>
				<option value="Couples/Wedding">Couples/Wedding</option>
				<option value="Family">Family</option>
				<option value="Maternity/Newborn">Maternity/Newborn</option>
				<option value="Business">Business</option>
			</select>
			<label data-te-select-label-ref for="session">Session Type</label>
		</div>

		<!-- DATE -->
		<div
			class="relative "
			data-te-datepicker-init
			data-te-input-wrapper-init
			data-te-datepicker-size="lg"
			data-te-input-size="lg"
		>
			<input
				type="text"
				id="date"
				class="peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[.37rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
				placeholder="Select a date"
			/>
			<label
				for="date"
				class="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
				>Select a date</label
			>
		</div>

		<!-- TIME -->
		<div
			class="relative "
			data-te-timepicker-init
			data-te-input-wrapper-init
			data-te-timepicker-size="lg"
			data-te-input-size="lg"
		>
			<input
				type="text"
				id="time"
				class="peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[.37rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
				placeholder="Select a time"
			/>
			<label
				for="time"
				class="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
				>Select a time</label
			>
		</div>

		<!-- SUBJECTS -->
		<div class="relative mb-14 sm:mb-8 md:col-span-2" data-te-input-wrapper-init>
			<textarea
				class="peer-focus:text-primary dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
				id="subjects"
				rows="4"
				placeholder="Tell us about your subjects"
			/>
			<label
				for="subjects"
				class="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
				>Subjects
			</label>
			<div
				class="peer-focus:text-primary dark:peer-focus:text-primary absolute w-full text-sm text-neutral-500 dark:text-neutral-200"
				data-te-input-helper-ref
			>
				Who will be taking part in the shoot? Include name, age, and any special accommodation info
			</div>
		</div>

		<!-- ADDITIONAL INFO -->
		<div class="relative mb-14 sm:mb-8 md:col-span-2" data-te-input-wrapper-init>
			<textarea
				class="peer-focus:text-primary dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
				id="additionalInfo"
				rows="4"
				placeholder="Tell us about your subjects"
			/>
			<label
				for="additionalInfo"
				class="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
				>Additional Info
			</label>
			<div
				class="peer-focus:text-primary dark:peer-focus:text-primary absolute w-full text-sm text-neutral-500 dark:text-neutral-200"
				data-te-input-helper-ref
			>
				Include any other information about the shoot such as the occasion, theme, color pallette,
				etc.
			</div>
		</div>

		<!-- SUBMIT BUTTON -->
		<button
			type="button"
			class="bg-primary hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 mx-auto mb-12 mt-4 block min-w-[90%] rounded px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:col-span-2 md:min-w-[50%]"
		>
			Submit
		</button>
	</form>
</section>

<style lang="postcss">
</style>
