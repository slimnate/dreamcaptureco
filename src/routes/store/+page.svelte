<script>
	/**
	 * TODO:
	 * Add shipping address fields
	 * Change image grid size on larger layouts
	 * show images in add new image dropdown
	 */
	import Input from '$lib/components/form-fields/Input.svelte';
	import Select from '$lib/components/form-fields/Select.svelte';
	import Spinner from '$lib/components/form-fields/Spinner.svelte';
	import SuccessModal from '$lib/components/form-fields/SuccessModal.svelte';
	import TextArea from '$lib/components/form-fields/TextArea.svelte';
	import IconTrash from '$lib/components/icons/IconTrash.svelte';
	import store from '$lib/data/store.js';
	import { notEmpty, validEmail, validPhone, inSet } from '$lib/validation';

	/**
	 * @typedef {Object} OrderItem
	 * @property {number} id
	 * @property {number} quantity
	 * @property {string} size
	 * @property {string} path
	 */

	const images = store.images;
	const sizes = store.sizes;

	/** @type {OrderItem} */
	const defaultOrderItem = {
		id: images[0].id,
		quantity: 1,
		size: sizes[0].name,
		path: images[0].path,
	};

	const imageSelectOptions = images.map((item) => {
		return { value: item.id.toString(), display: item.id.toString(), path: item.path };
	});

	const sizeSelectOptions = sizes.map((size) => {
		return { value: size.name, display: size.name, secondary: size.price };
	});

	const validImageIDs = images.map((item) => item.id);

	/** @type {OrderItem[]}*/
	let orderItems = [defaultOrderItem];

	/** @type {OrderItem}*/
	let stagedOrderItem = JSON.parse(JSON.stringify(defaultOrderItem));

	let /** @type string */ name;
	let /** @type string */ phone;
	let /** @type string */ email;
	let /** @type string */ address;
	let /** @type string */ city;
	let /** @type string */ state;
	let /** @type string */ zip;
	let /** @type string */ order;

	let /** @type string */ nameError;
	let /** @type string */ phoneError;
	let /** @type string */ emailError;
	let /** @type string */ addressError;
	let /** @type string */ cityError;
	let /** @type string */ stateError;
	let /** @type string */ zipError;

	let /** @type string */ stagedOrderItemError;
	let /** @type string */ stagedOrderSizeError;

	function clearStagedOrderErrors() {
		stagedOrderItemError = '';
		stagedOrderSizeError = '';
	}

	function validateStagedOrderItem() {
		let valid = true;

		stagedOrderItem.id = Number(stagedOrderItem.id);

		if (!inSet(stagedOrderItem.id, validImageIDs)) {
			valid = false;
			stagedOrderItemError = 'Must select an item';
		}

		if (!notEmpty(stagedOrderItem.size)) {
			valid = false;
			stagedOrderSizeError = 'Must select a size';
		}

		return valid;
	}

	function addStagedItemToCart() {
		if (!validateStagedOrderItem()) {
			return;
		}
		stagedOrderItem.path = images.filter((i) => i.id === stagedOrderItem.id)[0].path;

		orderItems = [...orderItems, stagedOrderItem];
		stagedOrderItem = JSON.parse(JSON.stringify(defaultOrderItem));
	}

	/**
	 * Remove an item from the cart
	 * @param {number} index index of item to remove
	 */
	function removeItemFromCart(index) {
		return () => {
			orderItems = orderItems.filter((_, i) => i != index);
		};
	}

	/**
	 * @type {SuccessModal | null}
	 */
	let successModal = null;

	function clearErrors() {
		nameError = '';
		phoneError = '';
		emailError = '';
		addressError = '';
		cityError = '';
		stateError = '';
		zipError = '';
	}

	function validate() {
		let valid = true;

		console.log(orderItems);
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

		//validate address
		if (!notEmpty(address)) {
			valid = false;
			addressError = 'Invalid shipping address';
		}

		//validate city
		if (!notEmpty(city)) {
			valid = false;
			cityError = 'Invalid city';
		}

		//validate state
		if (!notEmpty(state)) {
			valid = false;
			stateError = 'Invalid state';
		}

		//validate zip
		if (!notEmpty(zip)) {
			valid = false;
			zipError = 'Invalid zip';
		}

		return valid;
	}

	function submit() {
		const formData = new FormData();

		if (!validate()) {
			return;
		}

		formData.append('form-name', 'store');
		formData.append('name', name);
		formData.append('phone', phone);
		formData.append('email', email);
		formData.append('address', address);
		formData.append('city', city);
		formData.append('state', state);
		formData.append('zip', zip);
		formData.append('order', order);

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString(),
		})
			.then((response) => {
				if (response.ok) {
					if (successModal) {
						successModal.show();
					} else {
						alert('Thank you for your submission');
					}
				} else {
					console.log(response);
					alert(`${response.status} - ${response.statusText}`);
				}
			})
			.catch((error) => {
				console.log(error);
				alert(error);
			});
	}
</script>

<section class="pb-12">
	<!-- TODO - Store Header image ?? -->

	<!-- Store images -->
	<div class="mx-10 columns-2">
		{#each images as image}
			<div class="relative">
				<img src={image.path} alt="" class="py-2 drop-shadow-lg" />
				<div class="absolute right-0 top-2 h-8 w-8 bg-cream/50">
					<!-- pt-[.2rem] is just a hacky way to center the text, remember how to do this properly later -->
					<div class="mx-auto my-auto pt-[.2rem]">{image.id}</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Store sizes -->
	<div class="mx-10">
		Available sizes:
		<div class="columns-2">
			{#each sizes as size}
				<div
					class="rounded-lg border-2 border-solid border-blackcoffee-500 bg-cream py-6 text-lg drop-shadow-lg"
				>
					<div>{size.name}</div>
					<div class="font-semibold">{size.price}</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Store form -->
	<div class="mt-8">
		<div class="text-lg font-bold">Order Form</div>
		<form
			name="store"
			data-netlify="true"
			class="mx-auto grid gap-3 px-4 md:max-w-3xl md:grid-cols-2"
		>
			<!-- Hidden field for netlify form detection -->
			<input type="hidden" name="form-name" value="store" />

			<!-- NAME -->
			<div class="md:col-span-2">
				<Input name="name" id="name" label="Name" bind:value={name} error={nameError} />
			</div>

			<!-- PHONE -->
			<Input name="phone" id="phone" label="Phone" bind:value={phone} error={phoneError} />

			<!-- EMAIL -->
			<Input name="email" id="email" label="Email" bind:value={email} error={emailError} />

			<!-- SHIPPING ADDRESS -->
			<Input
				name="address"
				id="adress"
				label="Shipping Address"
				bind:value={address}
				error={addressError}
			/>
			<Input name="city" id="city" label="City" bind:value={city} error={cityError} />
			<Input name="state" id="state" label="State" bind:value={state} error={stateError} />
			<Input name="zip" id="zip" label="Zip" bind:value={zip} error={zipError} />

			<!-- ADD TO CART FORM -->
			<div
				class="mt-4 grid gap-3 rounded-lg border-2 border-blackcoffee-300 p-4 pt-2 md:col-span-2 md:grid-cols-2"
			>
				<div class="font-semibold md:col-span-2">Add To Order</div>
				<div class="md:col-span-2">
					<Select
						id="staged-order-itemid"
						name="staged-order-itemid"
						placeholder="Image"
						options={imageSelectOptions}
						bind:value={stagedOrderItem.id}
						error={stagedOrderItemError}
					/>
				</div>

				<Select
					id="staged-order-size"
					name="staged-order-size"
					placeholder="Size"
					options={sizeSelectOptions}
					bind:value={stagedOrderItem.size}
					error={stagedOrderSizeError}
				/>

				<Spinner
					id="staged-order-quantity"
					name="staged-order-quantity"
					label="Quantity"
					bind:value={stagedOrderItem.quantity}
				/>

				<!-- ADD TO ORDER BUTTON -->
				<button
					class="mx-auto mt-2 block rounded !bg-blackcoffee/95 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-cream shadow-[0_4px_9px_-4px_rgba(58,45,50,0.8)] transition duration-150 ease-in-out hover:!bg-blackcoffee hover:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] focus:!bg-blackcoffee focus:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:!bg-blackcoffee active:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] md:col-span-2 md:w-48"
					on:click|preventDefault={clearStagedOrderErrors}
					on:click|preventDefault={addStagedItemToCart}
				>
					Add
				</button>
			</div>

			<!-- CART -->
			<div
				class="mt-4 grid gap-3 rounded-lg border-2 border-blackcoffee-300 p-4 pt-2 md:col-span-2"
			>
				<div class="font-semibold">Cart</div>
				{#each orderItems as item, i}
					<div class="flex w-full flex-col items-center justify-items-center gap-4 md:flex-row">
						<div class="flex w-48 flex-col items-center md:flex-row">
							<img src={item.path} alt={item.id.toString()} />
							<button
								class="mt-4 h-12 rounded !bg-blackcoffee/95 px-4 text-sm font-medium uppercase leading-normal text-cream shadow-[0_4px_9px_-4px_rgba(58,45,50,0.8)] transition duration-150 ease-in-out hover:!bg-blackcoffee hover:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] focus:!bg-blackcoffee focus:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:!bg-blackcoffee active:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] md:hidden"
								on:click|preventDefault={removeItemFromCart(i)}
							>
								<IconTrash />
							</button>
						</div>
						<div class="flex w-full flex-col justify-items-center gap-6">
							<div class="">
								<Select
									id="staged-order-size"
									name="staged-order-size"
									placeholder="Size"
									options={sizeSelectOptions}
									bind:value={item.size}
									error={stagedOrderSizeError}
								/>
							</div>
							<div class="">
								<Spinner
									id="staged-order-quantity"
									name="staged-order-quantity"
									label="Quantity"
									bind:value={item.quantity}
								/>
							</div>
						</div>
						<button
							class="hidden h-12 rounded !bg-blackcoffee/95 px-4 text-sm font-medium uppercase leading-normal text-cream shadow-[0_4px_9px_-4px_rgba(58,45,50,0.8)] transition duration-150 ease-in-out hover:!bg-blackcoffee hover:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] focus:!bg-blackcoffee focus:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:!bg-blackcoffee active:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] md:block"
							on:click|preventDefault={submit}
						>
							<IconTrash />
						</button>
					</div>
				{/each}
			</div>

			<!-- SUBMIT BUTTON -->
			<button
				class="mx-auto mb-4 mt-4 block min-w-[90%] rounded !bg-blackcoffee/95 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-cream shadow-[0_4px_9px_-4px_rgba(58,45,50,0.8)] transition duration-150 ease-in-out hover:!bg-blackcoffee hover:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] focus:!bg-blackcoffee focus:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:!bg-blackcoffee active:shadow-[0_8px_9px_-4px_rgba(58,45,50,0.8),0_4px_18px_0_rgba(59,113,202,0.2)] md:col-span-2 md:min-w-[50%]"
				on:click|preventDefault={clearErrors}
				on:click|preventDefault={submit}
			>
				Submit
			</button>

			<SuccessModal {name} bind:this={successModal} />
		</form>
	</div>
</section>
