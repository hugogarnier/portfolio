<script>
	import About from '$lib/about.svelte';
	import Projects from '$lib/projects.svelte';
	import Contact from '$lib/contact.svelte';
</script>

<div>
	<About />
	<Contact />
</div>
<div>
	<Projects />
</div>

<style>
	div {
		height: 100vh;
	}
</style>
