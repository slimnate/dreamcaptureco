<script>
	export let /** @type string */ name;
	export let /** @type string */ id;
	export let /** @type string */ label;
	export let /** @type string */ value = '';
</script>

<!--
  @component
  This is a custom `input` component that provides a material design
  with a floating placeholder/label

  Props:
  - `id` **required** - id of the underlying `textarea` element
  - `name` **required** - name of the underlying `textarea` element
  - `label` **required** - placeholder and label text for field
  - `value` **optional** - the value of the field, can also be bound to (default: `''`)
-->
<div class="relative">
	<input
		class="peer input variant-form-material border-0 border-b-2 !border-blackcoffee-300 bg-surface-500/10 pb-1 pl-4 pt-3 placeholder-transparent placeholder-shown:py-2"
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
</div>
