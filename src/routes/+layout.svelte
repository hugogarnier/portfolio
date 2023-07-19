<script>
	import '../app.css';
	import '@fontsource/roboto-mono';
	import Navbar from '$lib/navbar.svelte';
</script>

<svelte:head>
	<meta name="robots" content="noindex nofollow" />
	<title>hg. developer</title>
</svelte:head>

<div class="app">
	<Navbar />
	<main>
		<slot />
	</main>
	<footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
	}
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem 2rem;
		width: 100%;
		max-width: 45rem;
		margin: 0 auto;
		margin-top: 5rem;
	}
</style>
