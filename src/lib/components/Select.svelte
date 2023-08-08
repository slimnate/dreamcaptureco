<script>
	import { onMount } from 'svelte';

	onMount(() => {
		function optionItemClick(e) {
			// TODO
		}

		function closeAllSelect(element) {}

		const selectContainer = document.getElementsByClassName('custom-select')[0];
		const selectElement = selectContainer.getElementsByTagName('select')[0];
		const itemCount = selectElement.length;

		// Create and display div to show current selected element
		const selectedItemDiv = document.createElement('div');
		selectedItemDiv.setAttribute('class', 'select-selected');
		console.log(selectElement);
		selectedItemDiv.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
		selectContainer.appendChild(selectedItemDiv);

		// Create options list
		const optionList = document.createElement('div');
		optionList.setAttribute('class', 'select-items select-hide');

		// populate options list with items
		for (let i = 0; i < itemCount; i++) {
			const optionItem = document.createElement('div');
			optionItem.innerHTML = selectElement.options[i].innerHTML;
			optionItem.addEventListener('click', optionItemClick);
			optionList.appendChild(optionItem);
		}

		// add option list to DOM
		selectContainer.appendChild(optionList);
		selectedItemDiv.addEventListener('click', function (e) {
			e.stopPropagation();
			closeAllSelect(this);
			this.nextSibling.classList.toggle('select-hide');
			this.classList.toggle('select-arrow-active');
		});
	});

	/**
	 * @typedef {Object} SelectOption
	 * @property {string} value
	 * @property {string} display
	 * @property {string?} secondary
	 */

	/** @type SelectOption[] */
	export let options = [];
	export let id = 'select';
	let selectedItemIndex = 0;
</script>

<div class="relative">
	<select
		{id}
		name={id}
		class="peer select"
		data-selected=""
		on:change={(e) => {
			e.currentTarget.dataset.selected = e.currentTarget.value;
			console.log(e);
		}}
		on:click={(e) => {
			if (e.currentTarget.dataset.open == 'true') e.currentTarget.dataset.open = 'true';
			else e.currentTarget.dataset.open = 'false';
		}}
	>
		{#each options as option}
			<option value={option.value}>{option.display}</option>
		{/each}
	</select>
	<label for="session" class="floating-select">Session Type</label>
</div>

<!-- .custom-select select {
		display: none; /*hide original SELECT element:*/
	} -->

<style lang="postcss">
	select {
		@apply variant-form-material border-blackcoffee-300 pb-1 pl-4 pt-3 focus:border-blackcoffee-500;
	}

	label.floating-select {
		@apply absolute left-4 top-0 text-xs font-semibold text-blackcoffee-500/70 transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-blackcoffee-500 peer-[[data-selected=""]]:left-4 peer-[[data-selected=""]]:top-2 peer-[[data-selected=""]]:text-base peer-[[data-selected=""]]:font-normal peer-[[data-selected=""]]:text-blackcoffee-500/60;
	}

	/*the container must be positioned relative:*/
	.custom-select {
		position: relative;
		font-family: Arial;
	}

	.select-selected {
		background-color: DodgerBlue;
	}

	/*style the arrow inside the select element:*/
	.select-selected:after {
		position: absolute;
		content: '';
		top: 14px;
		right: 10px;
		width: 0;
		height: 0;
		border: 6px solid transparent;
		border-color: #fff transparent transparent transparent;
	}

	/*point the arrow upwards when the select box is open (active):*/
	.select-selected.select-arrow-active:after {
		border-color: transparent transparent #fff transparent;
		top: 7px;
	}

	/*style the items (options), including the selected item:*/
	.select-items div,
	.select-selected {
		color: #ffffff;
		padding: 8px 16px;
		border: 1px solid transparent;
		border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
		cursor: pointer;
		user-select: none;
	}

	/*style items (options):*/
	.select-items {
		position: absolute;
		background-color: DodgerBlue;
		top: 100%;
		left: 0;
		right: 0;
		z-index: 99;
	}

	/*hide the items when the select box is closed:*/
	.select-hide {
		display: none;
	}

	.select-items div:hover,
	.same-as-selected {
		background-color: rgba(0, 0, 0, 0.1);
	}
</style>
