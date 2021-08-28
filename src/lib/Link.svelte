<script lang="ts">
	export let path: string;
	import p from '$lib/paths';
	const href = `${p}${path}`;
</script>

<a {href}><slot>{href}</slot></a>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}
</style>
