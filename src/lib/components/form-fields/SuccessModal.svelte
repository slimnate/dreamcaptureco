<script>
	let shown = false;
	export function show() {
		shown = true;
	}

	export let /** @type string */ name;
</script>

<div class="fixed inset-0 bg-blackcoffee/60" class:hidden={!shown} />
<div
	class=" fixed left-0 right-0 z-50 mx-8 rounded-lg bg-gradient-to-b from-eggshell to-eggshell px-4 py-10 shadow-2xl shadow-black drop-shadow-2xl sm:mx-auto sm:max-w-lg sm:!px-20 sm:!py-20"
	class:hidden={!shown}
>
	<h3 class="text-4xl uppercase">Thank you</h3>
	{#if name}
		<h3 class="text-4xl uppercase">{name}</h3>
	{/if}
	<p class="mt-6 text-xl leading-8 tracking-tight text-blackcoffee/70">
		We have received your booking inquiry and will reach out soon to finalize!
	</p>
	<button
		class="btn variant-soft-success mt-8 text-lg"
		on:click={() => {
			shown = false;
		}}>Continue</button
	>
</div>
