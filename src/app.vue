<template>
	<div id="app">

		<header>
			<main-nav @click="page" :items="items" :title="component"></main-nav>
		</header>
		
		<main>
        	<div  class="container docs"
		          transition-mode="out-in"
		          transition
		          v-if="component"
            >
				<component :is="component"></component>
        		<docs :elements="data.elements" 
	        		  :headers="data.headers" 
	        		  :properties="data.properties" 
	        		  :mheaders="data.mheaders" 
	        		  :mproperties="data.mproperties"
			     ></docs>
        	</div>
		</main>
	</div>
</template>

<script type="text/babel">
    import menu from '../docs/data/items.json'	

	export default {
		name: 'App',

		data () {
			return {
				component: '',
				items: menu['items'],
				doc_data: {},
				data: {
					elements: [],
					headers: [],
					properties: [],
					mheaders: [],
					mproperties: []
				}
			}
		},

		mounted () {
			this.init()
			this.page('buttons')
		},

		methods: {
			page (component) {
				this.component = ''
				this.data = this.doc_data[component]
				this.$nextTick(() => this.component = component)
			},

			init () {
				menu['items'].forEach((i) => {
					let name = i.toLowerCase().replace(' ', '-')
			    	this.doc_data[name] = require(`../docs/data/${name}.json`)
			    })
			}
		}
	}
</script>

<style lang="sass">
	body {
        overflow-x: hidden;
	}

    .docs {
        transition: all .4s ease;
        box-sizing: border-box;

        &.v-enter-active {
        	transform: translateX(150%);
        	opacity: 0;
        }

        &.v-enter {
        	opacity: 0;
        }

        &.v-leave-active {
        	transform: translateX(-150%);
        	opacity: 0;
        }
    }

	h4 {
		margin: 2rem 0;
	}

	section {
		margin-bottom: 2rem;
	}

	header, main, footer {
		padding-left: 240px;
	}

	@media only screen and (max-width : 992px) {
      header, main, footer {
        padding-left: 0;
      }
    }

    .container {
    	width: 85% !important;
    	max-width: 85% !important;
    }

	main {
		padding-top: 2rem;
		min-height: 150vh;
	}
</style>
