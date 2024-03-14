<script>
	import IconMinus from '../icons/IconMinus.svelte';
	import IconPlus from '../icons/IconPlus.svelte';

	function decrement(e) {
		if (value > min) {
			value--;
		} else if (wrap) {
			value = max;
		}
	}

	function increment(e) {
		if (value < max) {
			value++;
		} else if (wrap) {
			value = min;
		}
	}

	export let /** @type string */ id;
	export let /** @type string */ name;
	export let /** @type string */ label;
	export let /** @type number */ value = 0;
	export let /** @type number */ min = 0;
	export let /** @type number */ max = 500;
	export let /** @type boolean */ wrap = false;
</script>

<!--
  @component
  This is a numerical Spinner component that wraps an input element. Provides material design consistent with the rest of the component library, as well as customizable min/max values and optional wrapping functionality.

  Props:
  - `id` **required** - id of the underlying `input` element
  - `name` **required** - name of the underlying `input` element
  - `label` **required** - placeholder and label text for field
  - `hint` **optional** - Text hint for the field
  - `value` **optional** - the value of the field, can also be bound to (default: `0`)
  - `min` **optional** - the value of the field, can also be bound to (default: `0`)
  - `max` **optional** - the value of the field, can also be bound to (default: `500`)
-->
<div class="relative flex flex-row items-baseline justify-between gap-8 pl-4">
	<label for={name} class="h-full text-left text-blackcoffee/70">{label}</label>
	<div class="flex h-10 flex-row rounded-lg bg-transparent">
		<button
			on:click|preventDefault={decrement}
			class="h-full cursor-pointer rounded-l bg-blackcoffee/95 px-3 text-surface-500 hover:bg-blackcoffee hover:drop-shadow-lg"
		>
			<IconMinus />
		</button>
		<input
			{id}
			type="number"
			class="input variant-form-material border-0 border-b-2 !border-blackcoffee-300 bg-surface-500/10 pb-1 pl-4 pt-3 text-center placeholder-transparent outline-0"
			{name}
			bind:value
		/>
		<button
			on:click|preventDefault={increment}
			class="h-full cursor-pointer rounded-r bg-blackcoffee/95 px-3 text-cream hover:bg-blackcoffee hover:drop-shadow-lg"
		>
			<IconPlus />
		</button>
	</div>
</div>

<style>
	/** These are used to hide the browser default up/down arrows */
	input[type='number']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
