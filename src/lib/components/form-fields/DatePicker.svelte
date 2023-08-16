<script>
	import SveltyPicker from 'svelty-picker';

	function handleOpen() {
		// console.log('open');
		const picker = document.getElementById(pickerId);
		picker?.classList.remove('invisible');
	}

	/**
	 * Handle input changed events from underlying svelty-picker
	 * @param {CustomEvent | {detail: string}} e
	 */
	function handleInput(e) {
		const inputElement = /** @type {HTMLInputElement} */ (document.getElementById(id));
		if (inputElement) {
			inputElement.value = e.detail;
		}
		handleClose();
	}

	function handleClose() {
		// console.log('blur');
		const picker = document.getElementById(pickerId);
		picker?.classList.add('invisible');
	}

	export let id = '';
	export let name = '';
	export let label = 'Select date';
	export let format = 'mm-dd-yyyy';

	const pickerId = `${id}-picker`;
</script>

<div class="relative">
	<input
		type="text"
		{id}
		{name}
		class="peer input variant-form-material border-0 border-b-2 !border-blackcoffee-300 bg-surface-500/10 pb-1 pl-4 pt-3 placeholder-transparent placeholder-shown:py-2"
		placeholder={label}
		value=""
		autocomplete="off"
		on:click={handleOpen}
		on:focus={handleOpen}
		on:focusout={handleClose}
		on:keypress|preventDefault
		on:keydown|preventDefault
	/>
	<label
		for={name}
		class="absolute left-4 top-0 text-xs font-semibold text-blackcoffee-500/70 transition-all duration-200 peer-placeholder-shown:top-[0.55rem] peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-blackcoffee-500/60"
		>{label}</label
	>
	<span class="invisible absolute left-0 top-11 z-10" id={pickerId}
		><SveltyPicker
			pickerOnly={true}
			mode="date"
			{format}
			on:input={handleInput}
			on:blur={handleClose}
			on:mousedown={handleOpen}
		/></span
	>
</div>
