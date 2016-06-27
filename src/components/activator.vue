<template>
	<a href="#!"
	   :data-activates="target"
	   :class="options"
	   @click="click"
	>
		<slot></slot>
	</a>
</template>

<script>
	import SideNav from '../mixins/side-nav'
	import Dropdown from '../mixins/dropdown'

	export default {
		props: {
			activates: {
				type: String,
				required: true
			},

			target: {
				type: String,
				required: true
			}
		},

		mixins: [
			Dropdown,
			SideNav
		],

		computed: {
			options () {
				return {
					'button-collapse': this.activates === 'side-nav',
					'dropdown-button btn': this.activates === 'dropdown'
				}
			}
		},

		mounted () {
			this.activate()
		},

		methods: {
			activate () {
				if (typeof this[this.activates] !== 'function') {
					throw `Method '${this.activates}' does not exist in <activator> component.`
				}

				this[this.activates]()
			},

			click () {
				this.$emit(`${this.activates}:clicked`)
			},

			ready (cb) {
				document.addEventListener('DOMContentLoaded', () => cb())
			}
		}
	}
</script>