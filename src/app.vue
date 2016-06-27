<template>
	<div id="app">

		<header>
			<app-nav class="blue"></app-nav>
			<app-side-nav id="slide-out"
			>
				<li>
					<a href="#!">Link</a>
				</li>
			</app-side-nav>
		</header>
		
		<main>
			<div class="container">
				<div class="col s12">
				    <activator activates="side-nav"
				    		   target="slide-out"
				       		   class="show-on-large"
			        >
				    	<i class="material-icons">menu</i>
			    	</activator>
				</div>
				<div class="col s12">
					<activator class="btn"
							   activates="dropdown"
							   target="dropdown"
					>
						Click me!
					</activator>
					<dropdown id="dropdown">
						<li>
							<a href="#!">Click me!</a>
						</li>
					</dropdown>
				</div>
			</div>
		</main>

		<app-footer class="blue"></app-footer>

	</div>
</template>

<script type="text/babel">
	export default {
		name: 'App'
	}
</script>

<style>
	header, main, footer {
		/*padding-left: 240px;*/
	}

	@media only screen and (max-width : 992px) {
      header, main, footer {
        /*padding-left: 0;*/
      }
    }

	main {
		min-height: 48.5vh;
	}
</style>
