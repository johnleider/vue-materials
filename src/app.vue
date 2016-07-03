<template>
	<div id="app">
        <main>
            <div class="container">
                <div class="row">
                    <div class="col s12">
                        <form action="">
                            <div class="input-field">
                            
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script type="text/babel">
	export default {
		name: 'App',

        data () {
            return {
                selected: false
            }
        },

        methods: {
            testing (val) {
                this.search = val
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
