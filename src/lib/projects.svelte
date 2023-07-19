<script lang="ts">
	type Projects = {
		title: string;
		description: string;
		logo: string;
		url: string;
	};
	const projects: Projects[] = [
		{
			title: 'Killer App',
			description:
				'Help application for the Killer game. It allows you to create and manage games between friends without the risk of collision between players.',
			logo: '/images/killer_logo.png',
			url: 'https://github.com/hugogarnier/killer-app#readme'
		},
		{
			title: 'Photo Contest',
			description:
				'Web application for creating and managing photo contests. An admin section is also available.',
			logo: '/images/test.jpg',
			url: 'https://github.com/hugogarnier/killer-app#readme'
		}
	];
</script>

<section id="projects">
	{#each projects as project}
		<a href={project.url} target="_blank" class="card">
			<div class="image">
				<img src={project.logo} alt={project.title} width="100%" height="100%" />
			</div>
			<div class="description">
				<h1>{project.title}</h1>
				<p>{project.description}</p>
			</div>
		</a>
	{/each}
</section>

<style lang="scss">
	section {
		margin-top: 5rem;
	}

	.card {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 1rem;
		background-color: var(--background-project);
		border-radius: 1rem;
		border-style: solid;
		border-width: 1px;
		border-color: var(--stroke);
		margin: 2rem 0;
		padding: 1rem;

		-o-transition: 0.5s;
		-ms-transition: 0.5s;
		-moz-transition: 0.5s;
		-webkit-transition: 0.5s;
		transition: 0.5s;

		&:hover {
			background-color: var(--background-grey-hover-light);
		}
	}

	.image {
		display: flex;
		flex-shrink: 0;
		width: 50px;
		height: 50px;
		background-color: var(--aqua);
		border-radius: 1rem;
		overflow: hidden;
	}

	.description {
		h1 {
			font-size: 1rem;
			margin-bottom: 0.5rem;
		}

		p {
			color: var(--grey);
		}
	}

	@media (prefers-color-scheme: dark) {
		.card {
			background-color: var(--background-grey);

			&:hover {
				background-color: var(--grey);
			}
		}
	}
</style>
