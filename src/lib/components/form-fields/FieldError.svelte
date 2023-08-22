<script>
	export let /** @type string */ error;
</script>

{#if error}
	<div class="text-left text-sm text-error-500">{error}</div>
{/if}
