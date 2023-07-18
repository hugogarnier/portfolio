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

<div class="topbar">
	<a href="/" class="navbar-brand">hg.</a>
	<nav>
		{#each navItems as item}
			<a href={item.href}>{item.label}</a>
		{/each}
	</nav>
</div>

<style lang="scss">
	.topbar {
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

	.topbar:before {
		content: '';
		position: absolute;
		top: -4px;
		left: 0;
		width: 100dvw;
		height: 4px;
		background: var(--aqua);
	}

	.navbar-brand {
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
	}
</style>
