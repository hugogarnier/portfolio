<script lang="ts">
	import Github from './assets/github.svelte';
	import Linkedin from './assets/linkedin.svelte';
	import Twitter from './assets/twitter.svelte';
</script>

<section>
	<div class="social">
		<a href="https://github.com/hugogarnier" target="_blank"><Github /></a>
		<a href="https://www.linkedin.com/in/hugogarnier/" target="_blank"><Linkedin /></a>
		<a href="https://twitter.com/garnier_hugo" target="_blank"><Twitter /></a>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 6rem;
	}
	.social {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;

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
