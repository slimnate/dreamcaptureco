<script lang="js">
	import { onMount } from 'svelte';
	import { Select, Datepicker, Input, initTE } from 'tw-elements';

	onMount(() => {
		initTE({ Select, Datepicker, Input });
	});
</script>

<section>
	<h1 class="">Booking</h1>

	<p class="mx-8 mb-8 text-sm leading-tight tracking-tight text-blackcoffee/70">
		Fill out the form below and we'll reach out to finalize the details of your session!
	</p>

	<form class="booking-form mx-8 mb-8">
		<!-- NAME -->
		<div class="relative mb-3" data-te-input-wrapper-init>
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
		<div class="relative mb-3" data-te-input-wrapper-init>
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
		<div class="relative mb-3" data-te-input-wrapper-init>
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
		<div class="relative mb-3">
			<select id="package" data-te-select-init data-te-select-size="lg">
				<option value="" hidden selected />
				<option value="Day Dreams">Day Dream</option>
				<option value="Sweet Dream">Sweet Dream</option>
				<option value="Dream Come True">Dream Come True</option>
			</select>
			<label data-te-select-label-ref for="package">Package</label>
		</div>

		<!-- SESSION TYPE -->
		<div class="relative mb-3">
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
			class="relative mb-3"
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

		<!-- SUBJECTS -->
		<div class="relative mb-[20vmin]" data-te-input-wrapper-init>
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
				class="peer-focus:text-primary dark:peer-focus:text-primary absolute h-full text-sm text-neutral-500 dark:text-neutral-200"
				data-te-input-helper-ref
			>
				Tell us about each of the people taking part in the shoot, include name, age, and any
				special accommodation info
			</div>
		</div>

		<!-- ADDITIONAL INFO -->
		<div class="relative mb-[20vmin]" data-te-input-wrapper-init>
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
				Include any other information about the shoot, such as the occasion, theme, color pallette,
				etc.
			</div>
		</div>
	</form>
</section>

<style lang="postcss">
</style>
