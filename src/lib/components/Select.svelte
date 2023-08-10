<script>
	/**
	 * @typedef {Object} SelectOption
	 * @property {string} value
	 * @property {string} display
	 * @property {string?} secondary
	 */

	/**
	 * Custom action that detects a mouse click anywhere outside the element to
	 * which it was applied, and fires a 'click_outside' event.
	 * @param {HTMLElement} node
	 */
	function clickOutside(node) {
		/**
		 * Event handle for click events on the DOM. Detects if a click was within
		 * the parent node, and fires an event if not.
		 * @param {MouseEvent} event */
		const handleClick = (event) => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('click_outside', node));
			}
		};

		document.addEventListener('click', handleClick);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			},
		};
	}

	function toggleOptionsShown() {
		isOpen = !isOpen;
	}

	function closeOptions() {
		isOpen = false;
	}

	let isOpen = false;
	let selectedValue = '';

	/** @type SelectOption[] */
	export let options = [];
	export let id = 'select';
	export let placeholder = 'Select a value:';

	$: isPlaceholderShown = selectedValue === '';
</script>

<div class="relative" use:clickOutside on:click_outside={closeOptions}>
	<select {id} name={id} value={selectedValue}>
		<option value="" />
		{#each options as option}
			<option value={option.value}>{option.display}</option>
		{/each}
	</select>

	<div
		class="select"
		class:open={isOpen}
		class:selected={!isPlaceholderShown}
		on:click={toggleOptionsShown}
		tabindex="0"
	>
		{isPlaceholderShown ? placeholder : selectedValue}
	</div>

	<div class="options" class:hide={!isOpen}>
		{#each options as option}
			<div
				on:click={() => {
					selectedValue = option.value;
					toggleOptionsShown();
				}}
			>
				{option.display}
			</div>
		{/each}
	</div>

	<label for="session" class:floating={!isPlaceholderShown}>{placeholder}</label>
</div>

<style lang="postcss">
	select {
		display: none;
	}

	.select {
		@apply variant-form-material border-blackcoffee-300 pb-1 pl-4 pt-3 text-left focus:border-blackcoffee-500;
	}

	.select.selected {
		@apply text-primary-500;
	}

	.select:focus {
		@apply border-blackcoffee-300 outline-none;
	}

	/*chevron inside select box*/
	.select:after {
		@apply border-b-[0.175rem] border-r-[0.175rem] border-blackcoffee-300;
		position: absolute;
		right: 1rem;
		content: '';
		top: 1rem;
		width: 0.5rem;
		height: 0.5rem;
		transform: rotate(45deg);
	}

	/*point the chevron upwards when options list shown:*/
	.select.open:after {
		transform: translateY(0.25rem) rotate(-135deg);
	}

	/*prevent select of options including current selected*/
	.options div,
	.select {
		user-select: none;
	}

	.hide {
		display: none;
	}
	.options {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		z-index: 99;
		@apply rounded-b-md border-[1px] border-t-0 border-blackcoffee-300 bg-surface-400;
	}

	.options div {
		@apply border-b-[1px] border-blackcoffee-300 py-2;
	}

	.options div:last-child {
		@apply rounded-b-md border-none;
	}

	.options div:hover {
		@apply bg-surface-500;
	}

	label.floating {
		@apply left-4 top-0 text-xs font-semibold text-blackcoffee-500/70 transition-all duration-200;
	}

	label {
		@apply absolute left-4 top-3 text-base font-normal text-transparent;
	}
</style>
