<template>
	<div id="app">

		<header>
			<app-nav class="blue">
				<div slot="logo">
					<activator activates="side-nav" target="slide-out">
						<icon>list</icon>
					</activator>
				</div>
				<ul class="right hide-on-med-and-down" slot="items">
	                <li><a href="sass.html">Sass</a></li>
	                <li><a href="badges.html">Components</a></li>
	                <li><a href="collapsible.html">JavaScript</a></li>
	            </ul>
				<app-side-nav id="slide-out" fixed slot="side-nav">
					<li>
						<a href="#!">Link</a>
					</li>
				</app-side-nav>
			</app-nav>
		</header>
		
		<main>
			<div class="container">
				<div class="col s12">
					<btn v-tooltip="'d'">Here</btn>
				</div>
			</div>
		</main>
	</div>
</template>

<script type="text/babel">
	export default {
		name: 'App'
	}
</script>

<style>
	header, main, footer {
		padding-left: 240px;
	}

	@media only screen and (max-width : 992px) {
      header, main, footer {
        padding-left: 0;
      }
    }

	main {
		padding-top: 2rem;
		min-height: 150vh;
	}
</style>
