<script>
	/**
	 * @typedef RadioOption
	 * @property {string} id
	 * @property {string} value
	 * @property {string} [display]
	 * @property {boolean} [checked]
	 */

	export let /** @type string */ label = 'Select';
	export let /** @type string */ name;
	export let /** @type RadioOption[] */ options;
	export let /** @type string */ value = '';

	// set default value
	options.forEach((option) => {
		if (option.checked) value = option.value;
	});

	/**
	 * @param event {Event & { currentTarget: EventTarget & HTMLInputElement }}
	 */
	function handleChange(event) {
		value = event.currentTarget.value;
	}
</script>

<!--
  @component
  This is a custom `radio` component that provides a material design
  with a floating placeholder/label.

  Props:
  - `name` **required** - name of the form field for each of the radio elements
  - `label` **optional** - placeholder and label text for field (default: `Select`)
  - `options` **required** - a list of `RadioOption` objects that will be used to render the options
  - `value` **optional** - the value of the field - **ONLY USE FOR BINDING - initial selection should be specified using the `checked` property on the option item**
  
  `RadioOption` props:
    - `id` **required** - `id` attribute for the specific radio item
    - `value` **required** - `value` attribute for the specific radio item
    - `display` **optional** - optional display text for the radio item, if not supplied `value` will be used
    - `checked` **optional** - optional boolean value, if truthy value supplied the radio item will default to checked
-->
<div class="relative flex flex-wrap justify-between px-4">
	<label for={name} class="text-left text-blackcoffee/70">{label} </label>
	<div class="flex gap-8">
		{#each options as option}
			<label class="flex items-center space-x-2">
				<input
					type="radio"
					class="bg-blackcoffee-300 text-blackcoffee-300 checked:bg-blackcoffee-300 focus:outline-2 focus:outline-blackcoffee-300/90"
					{name}
					id={option.id}
					value={option.value}
					checked={option.checked}
					on:change={handleChange}
				/>
				<p>{option.display ? option.display : option.value}</p>
			</label>
		{/each}
	</div>
</div>
