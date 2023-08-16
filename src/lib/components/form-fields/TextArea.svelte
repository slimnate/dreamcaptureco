<script>
	export let id = '';
	export let name = '';
	export let label = '';
</script>

<div class="relative mb-14 sm:mb-8 md:col-span-2">
	<textarea
		class="peer input variant-form-material border-0 border-b-2 !border-blackcoffee-300 bg-surface-500/10 pb-1 pl-4 pt-3 placeholder-transparent placeholder-shown:py-2"
		{id}
		{name}
		rows="4"
		placeholder={label}
	/>
	<label
		for={name}
		class="peer-placeholder-shown:text-blackcoffee-500/60; absolute left-4 top-0 text-xs font-semibold text-blackcoffee-500/70 transition-all duration-200 peer-placeholder-shown:top-[0.55rem] peer-placeholder-shown:text-base peer-placeholder-shown:font-normal"
		>{label}</label
	>
	<div class="absolute w-full text-sm text-blackcoffee/70 peer-focus:text-blackcoffee/70">
		Who will be taking part in the shoot? Include name, age, and any special accommodation info
	</div>
</div>
