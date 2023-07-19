<section id="about">
	<h1>Mobile & Web Developer, implementing thoughtful, intuitive interfaces.</h1>
	<p>I’m Hugo Garnier, a French based Developer with over 2 years of experience in development.</p>
	<p>
		I specialize in mobile interface and web-based applications with a focus on simplicity and
		usability.
	</p>
	<p>
		I’m currently working at <a href="https://www.coinhouse.com/" target="_blank">Coinhouse</a>
		where I am developing the mobile application. Before Coinhouse, I worked at
		<a href="https://www.meilleurtaux.com/" target="_blank">Meilleurtaux</a> where I helped building
		3 applications.
	</p>
</section>

<style lang="scss">
	section {
		flex: 1;
		flex-direction: column;
		scroll-margin-top: 6rem;

		:not(first-child) {
			padding-top: 1rem;
		}
	}

	h1 {
		font-size: 2rem;
		padding-bottom: 2rem;
	}

	p {
		font-size: 1rem;
		color: var(--grey);
	}

	a {
		position: relative;
		color: var(--grey);

		&::after {
			position: absolute;
			content: '';
			height: 3px;
			bottom: -3px;
			left: 0;
			right: 0;
			width: 100%;
			background: var(--grey-light);

			-o-transition: 0.5s;
			-ms-transition: 0.5s;
			-moz-transition: 0.5s;
			-webkit-transition: 0.5s;
			transition: 0.5s;
		}

		&:hover:after {
			background: var(--aqua);
		}
	}
</style>
