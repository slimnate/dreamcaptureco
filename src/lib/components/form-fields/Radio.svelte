<script>
	/**
	 * @typedef RadioOption
	 * @property {string} id
	 * @property {string} value
	 * @property {string} [display]
	 * @property {boolean} [checked]
	 */

	export let label = 'Select';
	export let name = '';

	/** @type RadioOption[] */
	export let options = [];
</script>

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
				/>
				<p>{option.display ? option.display : option.value}</p>
			</label>
		{/each}
	</div>
</div>
