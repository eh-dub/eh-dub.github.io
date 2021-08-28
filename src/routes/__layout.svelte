<script>
	import '../app.scss';
	import Nav from '$lib/Nav.svelte';
</script>

<div class="g-app-wrapper">
	<Nav />
	<slot />
</div>

<style lang="scss">
	.g-app-wrapper {
		max-width: 800px;
		margin: 0 auto;
		padding: 10px;
	}
</style>
