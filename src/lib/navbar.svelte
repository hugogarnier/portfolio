<script>
	const navItems = [
		{
			label: 'about',
			href: '#about'
		},
		{
			label: 'projects',
			href: '#projects'
		}
	];
</script>

<header>
	<a href="/" class="brand">hg.</a>
	<nav>
		{#each navItems as item}
			<a href={item.href}>{item.label}</a>
		{/each}
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		width: 100dvw;
		position: fixed;
		top: 4px;
		z-index: 900;
		height: 55px;
		padding-right: 2rem;
		padding-left: 2rem;
		-webkit-backdrop-filter: blur(24px);
		backdrop-filter: blur(24px);
		border-bottom-width: 1px;
		border-bottom-style: solid;
		border-bottom-color: #eaeaea;
	}

	header:before {
		content: '';
		position: absolute;
		top: -4px;
		left: 0;
		width: 100dvw;
		height: 4px;
		background: var(--aqua);
	}

	.brand {
		font-size: 1rem;
		font-weight: 600;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;

		:last-child {
			margin-left: 1rem;
		}

		a {
			position: relative;

			&::after {
				position: absolute;
				content: '';
				height: 2px;
				bottom: -9px;
				left: 0;
				right: 0;
				width: 0%;
				background: var(--aqua);

				-o-transition: 0.5s;
				-ms-transition: 0.5s;
				-moz-transition: 0.5s;
				-webkit-transition: 0.5s;
				transition: 0.5s;
			}

			&:hover:after {
				width: 100%;
			}
		}
	}
</style>
