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
				</div>
			</div>
		</main>

		<app-footer class="blue"></app-footer>

	</div>
</template>

<script type="text/babel">
	export default {
		name: 'App',

		data () {
			return {
				tooltip: {
					tooltip: 'Tooltip'
				}
			}
		}
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
		min-height: 100vh;
	}
</style>
