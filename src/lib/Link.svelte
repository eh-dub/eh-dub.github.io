<script lang="typescript">
	export let href: string;

	const prodHref = `/eh-dub.github.io${href}`;
</script>

<a {href}><slot /></a>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}
</style>
