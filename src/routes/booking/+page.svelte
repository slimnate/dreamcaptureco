<script lang="js">
	import IconFacebook from '$lib/components/icons/IconFacebook.svelte';
	import IconInstagram from '$lib/components/icons/IconInstagram.svelte';
	import { onMount } from 'svelte';

	onMount(async () => {
		const { Select, Datepicker, Timepicker, Input, initTE } = await import('tw-elements');

		initTE({ Select, Datepicker, Timepicker, Input });
	});
</script>

<section>
	<h1 class="">Booking</h1>

	<p class="mx-8 mb-4 text-sm leading-tight tracking-tight text-blackcoffee/70">
		Fill out the form below and we'll reach out to finalize the details of your session!
	</p>

	<div class="mx-3 mb-8 mt-2 flex flex-col items-center justify-between gap-2">
		<p class="flex-grow md:text-left">Check my social media for sales and promotions</p>
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
	</div>

	<form
		name="booking"
		method="POST"
		data-netlify="true"
		class="booking-form mx-auto grid gap-3 px-4 md:max-w-3xl md:grid-cols-2"
	>
		<!-- Hidden field for netlify form detection -->
		<input type="hidden" name="form-name" value="booking" />

		<!-- NAME -->
		<div class="relative md:col-span-2" data-te-input-wrapper-init>
			<input
				type="text"
				class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
				id="name"
				name="name"
				placeholder="Name"
			/>
			<label
				for="name"
				class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-blackcoffee/70 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
				>Name</label
			>
		</div>

		<!-- PHONE -->
		<div class="relative" data-te-input-wrapper-init>
			<input
				type="tel"
				class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
				id="phone"
				name="phone"
				placeholder="Phone Number"
			/>
			<label
				for="phone"
				class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-blackcoffee/70 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
				>Phone Number</label
			>
		</div>

		<!-- EMAIL -->
		<div class="relative" data-te-input-wrapper-init>
			<input
				type="email"
				class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
				id="email"
				name="email"
				placeholder="Email"
			/>
			<label
				for="email"
				class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-blackcoffee/70 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
				>Email</label
			>
		</div>

		<div class="relative flex flex-wrap justify-between gap-3 px-3 md:col-span-2">
			<label for="prefferedContact" class="text-left text-blackcoffee/70"
				>Preferred Contact Method
			</label>
			<div class="flex gap-8">
				<div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
					<input
						class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
						type="radio"
						name="preferredContact"
						id="radioEmail"
					/>
					<label class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer" for="radioEmail">
						Email
					</label>
				</div>
				<div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
					<input
						class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
						type="radio"
						name="preferredContact"
						id="radioPhone"
						checked
					/>
					<label class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer" for="radioPhone">
						Phone
					</label>
				</div>
			</div>
		</div>

		<!-- PACKAGE TYPE -->
		<div class="relative text-blackcoffee/70">
			<select
				id="package"
				name="package"
				data-te-select-init
				data-te-select-size="lg"
				data-te-class-select-option="!h-auto !py-1 flex flex-row items-center bg-transparent justify-between w-full px-4 text-blackcoffee select-none cursor-pointer data-[te-input-multiple-active]:bg-blackcoffee/10 hover:[&:not([data-te-select-option-disabled])]:bg-blackcoffee/10 data-[te-input-state-active]:bg-blackcoffee/10 data-[te-select-option-selected]:data-[te-input-state-active]:bg-blackcoffee/10 data-[te-select-selected]:data-[te-select-option-disabled]:cursor-default data-[te-select-selected]:data-[te-select-option-disabled]:text-gray-400 data-[te-select-selected]:data-[te-select-option-disabled]:bg-transparent data-[te-select-option-selected]:bg-black/[0.02] data-[te-select-option-disabled]:text-gray-400 data-[te-select-option-disabled]:cursor-default group-data-[te-select-option-group-ref]/opt:pl-7 dark:text-gray-200 dark:hover:[&:not([data-te-select-option-disabled])]:bg-white/30 dark:data-[te-input-state-active]:bg-white/30 dark:data-[te-select-option-selected]:data-[te-input-state-active]:bg-white/30 dark:data-[te-select-option-disabled]:text-gray-400 dark:data-[te-input-multiple-active]:bg-white/30"
				data-te-class-options-list="!py-1 bg-eggshell/70"
				data-te-class-options-wrapper="!max-h-[40vh]"
				data-te-class-select-options-group="group/opt"
				data-te-class-select-option-secondary-text="block text-sm text-blackcoffee/70 tracking-tighter"
			>
				<option value="" hidden selected />
				<option
					value="Day Dreams"
					data-te-select-secondary-text="$100 - 1 hour - 1 location - up to 5 people - 20-30 edits"
					>Day Dream</option
				>
				<option
					value="Sweet Dream"
					data-te-select-secondary-text="$200 - 1.5 hours - up to 2 locations - up to 8 people - 30-40 edits"
					>Sweet Dream</option
				>
				<option
					value="Dream Come True"
					data-te-select-secondary-text="$300 - 2 hours - up to 3 locations - 8+ people - 40-50 edits"
					>Dream Come True</option
				>
			</select>
			<label data-te-select-label-ref for="package" class="!text-blackcoffee/70">Package</label>
		</div>

		<!-- SESSION TYPE -->
		<div class="relative">
			<select
				id="session"
				name="session"
				data-te-select-init
				data-te-select-size="lg"
				data-te-class-select-option="!h-auto !py-1 flex flex-row items-center bg-transparent justify-between w-full px-4 text-blackcoffee select-none cursor-pointer data-[te-input-multiple-active]:bg-blackcoffee/10 hover:[&:not([data-te-select-option-disabled])]:bg-blackcoffee/10 data-[te-input-state-active]:bg-blackcoffee/10 data-[te-select-option-selected]:data-[te-input-state-active]:bg-blackcoffee/10 data-[te-select-selected]:data-[te-select-option-disabled]:cursor-default data-[te-select-selected]:data-[te-select-option-disabled]:text-gray-400 data-[te-select-selected]:data-[te-select-option-disabled]:bg-transparent data-[te-select-option-selected]:bg-black/[0.02] data-[te-select-option-disabled]:text-gray-400 data-[te-select-option-disabled]:cursor-default group-data-[te-select-option-group-ref]/opt:pl-7 dark:text-gray-200 dark:hover:[&:not([data-te-select-option-disabled])]:bg-white/30 dark:data-[te-input-state-active]:bg-white/30 dark:data-[te-select-option-selected]:data-[te-input-state-active]:bg-white/30 dark:data-[te-select-option-disabled]:text-gray-400 dark:data-[te-input-multiple-active]:bg-white/30"
				data-te-class-options-list="!py-1 bg-eggshell/70"
				data-te-class-options-wrapper="!max-h-[40vh]"
			>
				<option value="" hidden selected />
				<option value="portrait">Portrait</option>
				<option value="Boudoir">Boudoir</option>
				<option value="Couples/Wedding">Couples/Wedding</option>
				<option value="Family">Family</option>
				<option value="Maternity/Newborn">Maternity/Newborn</option>
				<option value="Business">Business</option>
			</select>
			<label data-te-select-label-ref for="session" class="!text-blackcoffee/70">Session Type</label
			>
		</div>

		<!-- DATE -->
		<div
			class="relative"
			data-te-datepicker-init
			data-te-format="mm/dd/yyyy"
			data-te-disable-past="true"
			data-te-confirm-date-on-select="true"
			data-te-input-wrapper-init
			data-te-input-size="lg"
		>
			<input
				type="text"
				id="date"
				name="date"
				class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[.37rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
				placeholder="Select a date"
			/>
			<label
				for="date"
				class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-blackcoffee/70 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
				>Select a date</label
			>
		</div>

		<!-- TIME -->
		<div
			class="relative"
			data-te-timepicker-init
			data-te-input-wrapper-init
			data-te-inline="false"
			data-te-increment="true"
			data-te-close-modal-on-minutes-click="false"
			data-te-input-size="lg"
		>
			<input
				type="text"
				id="time"
				name="time"
				class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[.37rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
				placeholder="Select a time"
			/>
			<label
				for="time"
				class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-blackcoffee/70 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
				>Select a time</label
			>
		</div>

		<!-- AVAILABILITY -->
		<div class="relative text-sm text-blackcoffee/70 md:col-span-2">
			<p>
				<b>NOTE:</b> Current only available on <i>weekends and after 5pm on weekdays</i>, but can be
				flexible in some circumstances.
			</p>
		</div>

		<!-- SUBJECTS -->
		<div class="relative mb-14 sm:mb-8 md:col-span-2" data-te-input-wrapper-init>
			<textarea
				class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
				id="subjects"
				name="subjects"
				rows="4"
				placeholder="Tell us about your subjects"
			/>
			<label
				for="subjects"
				class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-blackcoffee/70 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
				>Subjects
			</label>
			<div
				class="absolute w-full text-sm text-blackcoffee/70 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary"
				data-te-input-helper-ref
			>
				Who will be taking part in the shoot? Include name, age, and any special accommodation info
			</div>
		</div>

		<!-- ADDITIONAL INFO -->
		<div class="relative mb-14 sm:mb-8 md:col-span-2" data-te-input-wrapper-init>
			<textarea
				class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
				id="additionalInfo"
				name="additionalInfo"
				rows="4"
				placeholder="Tell us about your subjects"
			/>
			<label
				for="additionalInfo"
				class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-blackcoffee/70 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
				>Additional Info
			</label>
			<div
				class="absolute w-full text-sm text-blackcoffee/70 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary"
				data-te-input-helper-ref
			>
				Include any other information about the shoot such as the occasion, theme, color pallette,
				etc.
			</div>
		</div>

		<!-- SUBMIT BUTTON -->
		<button
			type="submit"
			class="mx-auto mb-12 mt-4 block min-w-[90%] rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:col-span-2 md:min-w-[50%]"
		>
			Submit
		</button>
	</form>
</section>

<style lang="postcss">
</style>
