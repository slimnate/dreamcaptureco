<script>
	import Select from '$lib/components/Select.svelte';
	import Input from '$lib/components/form-fields/Input.svelte';
	import Radio from '$lib/components/form-fields/Radio.svelte';
	import DatePicker from '$lib/components/form-fields/DatePicker.svelte';
	import TimePicker from '$lib/components/form-fields/TimePicker.svelte';
	import TextArea from '$lib/components/form-fields/TextArea.svelte';

	import sessionTypes from '$lib/data/sessionTypes';
	import pricing from '$lib/data/pricing';
	import { notEmpty, validEmail, validPhone } from '$lib/validation';

	const sessionTypeOptions = sessionTypes.map((type) => {
		return { value: type, display: type };
	});

	const packageOptions = [
		...pricing.packages.map((p) => {
			const featureList = p.features.reduce((prev, curr) => {
				return prev + `<div class="p-0">${curr}</div>`;
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

	let /** @type string */ name;
	let /** @type string */ phone;
	let /** @type string */ email;
	let /** @type string */ preferredContact;
	let /** @type string */ packageType;
	let /** @type string */ sessionType;
	let /** @type string */ date;
	let /** @type string */ time;
	let /** @type string */ subjects;
	let /** @type string */ additionalInfo;

	let /** @type string */ nameError;
	let /** @type string */ phoneError;
	let /** @type string */ emailError;
	let /** @type string */ packageTypeError;
	let /** @type string */ sessionTypeError;
	let /** @type string */ dateError;
	let /** @type string */ timeError;

	function clearErrors() {
		nameError = '';
		phoneError = '';
		emailError = '';
		packageTypeError = '';
		sessionTypeError = '';
		dateError = '';
		timeError = '';
	}

	function validate() {
		let valid = true;

		// validate name
		if (!notEmpty(name)) {
			valid = false;
			nameError = 'Must supply name';
		}

		//validate phone
		if (!validPhone(phone)) {
			valid = false;
			phoneError = 'Invalid phone number';
		}

		//validate email
		if (!validEmail(email)) {
			valid = false;
			emailError = 'Invalid email address';
		}

		//validate package type
		if (!notEmpty(packageType)) {
			valid = false;
			packageTypeError = 'Must select a package';
		}

		//validate session type
		if (!notEmpty(sessionType)) {
			valid = false;
			sessionTypeError = 'Must select a session type';
		}

		if (!notEmpty(date)) {
			valid = false;
			dateError = 'Must select a date';
		}

		if (!notEmpty(time)) {
			valid = false;
			timeError = 'Must select a time';
		}

		return valid;
	}

	/**
	 * Submit the form
	 */
	function submit() {
		const formData = new FormData();

		if (!validate()) {
			return;
		}

		formData.append('form-name', 'booking'); // for netlify forms
		formData.append('name', name);
		formData.append('phone', phone);
		formData.append('email', email);
		formData.append('preferredContact', preferredContact);
		formData.append('packageType', packageType);
		formData.append('sessionType', sessionType);
		formData.append('date', date);
		formData.append('time', time);
		formData.append('subjects', subjects);
		formData.append('additionalInfo', additionalInfo);

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString(),
		})
			.then((response) => {
				alert('Thank you for your submission');
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
				alert(error);
			});
	}
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
	<div class="md:col-span-2">
		<Input name="name" id="name" label="Name" bind:value={name} error={nameError} />
	</div>

	<!-- PHONE -->
	<Input name="phone" id="phone" label="Phone" bind:value={phone} error={phoneError} />

	<!-- EMAIL -->
	<Input name="email" id="email" label="Email" bind:value={email} error={emailError} />

	<!-- CONTACT -->
	<div class="md:col-span-2">
		<Radio
			name="preferredContact"
			label="Preferred Contact"
			options={[
				{ id: 'radioEmail', value: 'Email' },
				{ id: 'radioPhone', value: 'Phone', checked: true },
			]}
			bind:value={preferredContact}
		/>
	</div>

	<!-- PACKAGE TYPE -->
	<Select
		id="package"
		name="package"
		options={packageOptions}
		placeholder="Package"
		bind:value={packageType}
		error={packageTypeError}
	/>

	<!-- SESSION TYPE -->
	<Select
		id="session"
		name="session"
		options={sessionTypeOptions}
		placeholder="Session Type"
		bind:value={sessionType}
		error={sessionTypeError}
	/>

	<!-- DATE -->
	<DatePicker id="date" name="date" label="Select a date" bind:value={date} error={dateError} />

	<!-- TIME -->
	<TimePicker id="time" name="time" label="Select a time" bind:value={time} error={timeError} />

	<!-- AVAILABILITY -->
	<!-- <div class="relative text-sm text-blackcoffee/70 md:col-span-2">
		<p>
			<b>NOTE:</b> Current only available on <i>weekends and after 5pm on weekdays</i>, but can be
			flexible in some circumstances.
		</p>
	</div> -->

	<!-- SUBJECTS -->
	<TextArea id="subjects" name="subjects" label="Subjects" bind:value={subjects} />

	<!-- ADDITIONAL INFO -->
	<TextArea
		id="additionalInfo"
		name="additionalInfo"
		label="Additional Info"
		bind:value={additionalInfo}
	/>

	<!-- SUBMIT BUTTON -->
	<button
		type="submit"
		class="mx-auto mb-4 mt-4 block min-w-[90%] rounded !bg-blackcoffee/95 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(58,45,50,0.8)] transition duration-150 ease-in-out hover:!bg-blackcoffee hover:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] focus:!bg-blackcoffee focus:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:!bg-blackcoffee active:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] md:col-span-2 md:min-w-[50%]"
		on:click|preventDefault={clearErrors}
		on:click|preventDefault={submit}
	>
		Submit
	</button>
</form>
