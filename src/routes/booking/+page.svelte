<script lang="js">
	import { onMount } from 'svelte';
	import { Select, initTE } from 'tw-elements';

	onMount(() => {
		initTE({ Select });
	});
</script>

<section>
	<h1 class="">Booking</h1>

	<p class="mx-8 mb-8 text-sm leading-tight tracking-tight text-blackcoffee/70">
		Fill out the form below and we'll reach out to finalize the details of your session!
	</p>

	<form class="booking-form mx-8 mb-8">
		<!-- NAME -->
		<div class="relative mb-3">
			<input
				type="email"
				class="focus:border-primary peer-focus:text-primary dark:focus:border-primary dark:peer-focus:text-primary peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
				id="name"
				placeholder="Name"
			/>
			<label
				for="name"
				class="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-blackcoffee/50 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
				>Name</label
			>
		</div>

		<select data-te-select-init data-te-select-placeholder="Example placeholder">
			<option value="Day Dreams">Day Dream</option>
			<option value="Sweet Dream">Sweet Dream</option>
			<option value="Dream Come True">Dream Come True</option>
		</select>

		<div class="relative mb-3" data-te-datepicker-init data-te-input-wrapper-init>
			<input
				type="text"
				class="peer-focus:text-primary dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
				placeholder="Select a date"
			/>
			<label
				for="floatingInput"
				class="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
				>Select a date</label
			>
		</div>
	</form>
</section>

<style lang="postcss">
</style>
