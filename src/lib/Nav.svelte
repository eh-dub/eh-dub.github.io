<script>
	import Link from '$lib/Link.svelte';
</script>

<div>
	<nav>
		<Link href="/"><h3 class="home">HOME</h3></Link>
		<Link href="/about"><h3 class="about">about</h3></Link>
	</nav>
</div>

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	h3 {
		margin-bottom: 0px;
		&.home {
			color: #444;
		}
		&.about {
			color: #ff3e00;
		}
	}
</style>
