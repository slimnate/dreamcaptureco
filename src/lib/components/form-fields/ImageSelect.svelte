<script>
	import FieldError from '$lib/components/form-fields/FieldError.svelte';
	import { clickOutside } from '$lib/actions';
	/**
	 * @typedef {Object} ImageSelectOption
	 * @property {string} value
	 * @property {string} path
	 */

	function toggleOptionsShown() {
		isOpen = !isOpen;
	}

	function closeOptions() {
		isOpen = false;
	}

	/**
	 * @param {KeyboardEvent  & { currentTarget: EventTarget & HTMLDivElement }} event
	 */
	function handleSelectKeypress(event) {
		throw new Error('Function not implemented.');
	}

	/**
	 * @param {KeyboardEvent  & { currentTarget: EventTarget & HTMLDivElement }} event
	 */
	function handleOptionKeypress(event) {
		throw new Error('Function not implemented.');
	}

	let isOpen = false;
	export let /** @type string */ id;
	export let /** @type string */ name;
	export let /** @type string */ placeholder = 'Select a value';
	export let /** @type ImageSelectOption[] */ options;
	export let /** @type string|number */ value = '';
	export let /** @type string */ error;

	// use non-strict equality comparison, because values can be strings or numbers
	$: currentPath = options.findLast((o) => o.value == value)?.path;
	$: isPlaceholderShown = value === '';
</script>

<!--
  @component
  This is a custom `select` component that provides a material design
  with a floating placeholder/label, and a customizable option list.

  Props:
  - `id` **required** - `id` attribute for the select element
  - `name` **required** - `name` attribute of the select element
  - `label` **optional** - placeholder and label text for field (default: `Select a value`)
  - `options` **required** - a list of `SelectOption` objects that will be used to render the options list
  - `value` **optional** - the value of the field, can also be bound to (default: `''`)
  - `error` **optional** - the errors message to display on invalid value
  
  `SelectOption` props:
		- `value` **required** - `value` attribute for the option item
		- `path` **required** - path to image for option
-->
<div class="relative" use:clickOutside on:click_outside={closeOptions}>
	<!-- Hidden select element that will store the selected item. -->
	<select {id} {name} {value} class="hidden">
		<option value="" />
		{#each options as option}
			<option value={option.value}>{option.value}</option>
		{/each}
	</select>

	<!-- Custom listbox implementation that will update the hidden select field. -->
	<div
		role="listbox"
		class="select variant-form-material border-blackcoffee-300 pb-1 pl-4 pt-3 text-left text-blackcoffee/70 after:absolute after:right-4 after:top-4 after:h-2 after:w-2 after:border-b-[0.175rem] after:border-r-[0.127rem] after:border-blackcoffee-300 after:content-[''] focus:border-blackcoffee-300 focus:outline-none"
		class:open={isOpen}
		class:selected={!isPlaceholderShown}
		on:click={toggleOptionsShown}
		on:keypress={handleSelectKeypress}
		tabindex="0"
	>
		<img src={currentPath} alt="Selected" class="mx-auto w-16" />
	</div>

	<!-- Options list container -->
	<div
		class="options max-h-96 overflow-y-scroll rounded-b-md border-[1px] border-t-0 border-blackcoffee-300 bg-surface-400"
		class:hide={!isOpen}
	>
		{#each options as option}
			<!-- Option item container -->
			<div
				class="border-b-[1px] border-blackcoffee-300 p-1 text-left last:rounded-b-md last:border-none hover:bg-surface-500"
				role="option"
				tabindex="0"
				aria-selected={option.value === value}
				on:click={() => {
					value = option.value;
					toggleOptionsShown();
				}}
				on:keypress={handleOptionKeypress}
			>
				<img src={option.path} alt="" class="mx-auto w-16" />
			</div>
		{/each}
	</div>

	<label
		for="session"
		class="absolute left-4 top-3 text-base font-normal"
		class:floating={!isPlaceholderShown}
		class:hidden={isPlaceholderShown}
	>
		{placeholder}
	</label>

	<FieldError {error} />
</div>

<style lang="postcss">
	.select.selected {
		@apply text-primary-500;
	}

	/*chevron inside select box*/
	.select:after {
		transform: rotate(45deg);
	}

	/*point the chevron upwards when options list shown:*/
	.select.open:after {
		transform: translateY(0.25rem) rotate(-135deg);
	}

	/*prevent select of options and current selected*/
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
	}

	label.floating {
		left: 1rem;
		top: 0px;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 600;

		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 200ms;
		@apply text-blackcoffee-500/70;
	}
</style>
