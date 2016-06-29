<template>
	<div id="app">

		<header>
			<main-nav @click="page"></main-nav>
		</header>
		
		<main>
			<component :is="component"></component>
		</main>
	</div>
</template>

<script type="text/babel">
	export default {
		name: 'App',

		data () {
			return {
				component: 'buttons'
			}
		},

		methods: {
			page (component) {
				this.component = component
			}
		}
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
