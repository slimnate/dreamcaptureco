<script>
	import FieldError from '$lib/components/form-fields/FieldError.svelte';

	export let /** @type string */ name;
	export let /** @type string */ id;
	export let /** @type string */ label;
	export let /** @type string */ hint = '';
	export let /** @type string */ value = '';
	export let /** @type string */ error = '';
</script>

<!--
  @component
  This is a custom `input` component that provides a material design
  with a floating placeholder/label

  Props:
  - `id` **required** - id of the underlying `textarea` element
  - `name` **required** - name of the underlying `textarea` element
  - `label` **required** - placeholder and label text for field
  - `hint` **optional** - Text hint for the field
  - `value` **optional** - the value of the field, can also be bound to (default: `''`)
  - `error` **optional** - the errors message to display on invalid value
-->
<div class="relative">
	<input
		class="peer input variant-form-material border-0 border-b-2 !border-blackcoffee-300 bg-surface-500/10 pb-1 pl-4 pt-3 placeholder-transparent outline-0 placeholder-shown:py-2 focus:outline-none"
		{id}
		{name}
		placeholder={label}
		bind:value
	/>
	<label
		for={name}
		class="peer-placeholder-shown:text-blackcoffee-500/60; absolute left-4 top-0 text-xs font-semibold text-blackcoffee-500/70 transition-all duration-200 peer-placeholder-shown:top-[0.55rem] peer-placeholder-shown:text-base peer-placeholder-shown:font-normal"
		>{label}</label
	>
	{#if hint != ''}
		<div class="absolute w-full text-sm text-blackcoffee/70 peer-focus:text-blackcoffee/70">
			{hint}
		</div>
	{/if}

	<FieldError {error} />
</div>
