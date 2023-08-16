<script>
	import Select from '$lib/components/Select.svelte';
	import Input from '$lib/components/form-fields/Input.svelte';
	import Radio from '$lib/components/form-fields/Radio.svelte';
	import DatePicker from '$lib/components/form-fields/DatePicker.svelte';
	import TimePicker from '$lib/components/form-fields/TimePicker.svelte';
	import TextArea from '$lib/components/form-fields/TextArea.svelte';

	import sessionTypes from '$lib/data/sessionTypes';
	import pricing from '$lib/data/pricing';

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
	<div class="md:col-span-2"><Input name="name" id="name" label="Name" /></div>

	<!-- PHONE -->
	<Input
		name="phone"
		id="phone"
		label="Phone"
		on:click={() => {
			console.log('phone click');
		}}
	/>

	<!-- EMAIL -->
	<Input name="email" id="email" label="Email" />

	<!-- CONTACT -->
	<div class="md:col-span-2">
		<Radio
			name="preferredContact"
			label="Preferred Contact"
			options={[
				{ id: 'radioEmail', value: 'Email' },
				{ id: 'radioPhone', value: 'Phone', checked: true },
			]}
		/>
	</div>

	<!-- PACKAGE TYPE -->
	<Select id="package" options={packageOptions} placeholder="Package" />

	<!-- SESSION TYPE -->
	<Select id="session" options={sessionTypeOptions} placeholder="Session Type" />

	<!-- DATE -->
	<DatePicker id="date" name="date" label="Select a date" />

	<!-- TIME -->
	<TimePicker id="time" name="time" label="Select a time" />

	<!-- AVAILABILITY -->
	<div class="relative text-sm text-blackcoffee/70 md:col-span-2">
		<p>
			<b>NOTE:</b> Current only available on <i>weekends and after 5pm on weekdays</i>, but can be
			flexible in some circumstances.
		</p>
	</div>

	<!-- SUBJECTS -->
	<TextArea id="subjects" name="subjects" label="Subjects" />

	<!-- ADDITIONAL INFO -->
	<TextArea id="additionalInfo" name="additionalInfo" label="Additional Info" />

	<!-- SUBMIT BUTTON -->
	<button
		type="submit"
		class="mx-auto mb-4 mt-4 block min-w-[90%] rounded !bg-blackcoffee/95 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(58,45,50,0.8)] transition duration-150 ease-in-out hover:!bg-blackcoffee hover:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] focus:!bg-blackcoffee focus:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:!bg-blackcoffee active:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] md:col-span-2 md:min-w-[50%]"
	>
		Submit
	</button>
</form>
