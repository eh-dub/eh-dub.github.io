<script context="module">
	export async function load({ fetch }) {
		const posts = await fetch(`index.json`).then((r) => r.json());
		return {
			props: { posts }
		};
	}
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div>
	<h1>An Effort to See Clearly</h1>
	<p class="info">{posts.length} posts.</p>
	{#each posts as post}
		<a href={`${post.slug}`}>
			<h2 class="title">{post.metadata.title}</h2>
			<p>{post.metadata.excerpt}</p>
		</a>
	{/each}
</div>

<style lang="scss">
	h1 {
		margin-bottom: 0;
	}

	h2.title {
		margin-top: 32px;
		margin-bottom: 0;

		&:hover {
			color: #40b3ff;
		}
	}

	p {
		color: #555;
		margin: 0;
	}
</style>
