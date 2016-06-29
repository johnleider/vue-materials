<template>
	<a :href="target"
	   :data-activates="target"
	   :class="options"
	   @click="click"
	>
		<slot></slot>
	</a>
</template>

<script>
	import Dropdown from '../mixins/dropdown'
	import Modal from '../mixins/modal'
	import SideNav from '../mixins/side-nav'

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
			Modal,
			SideNav
		],

		computed: {
			options () {
				return {
					'button-collapse': this.activates === 'side-nav',
					'dropdown-button btn': this.activates === 'dropdown',
					'modal-trigger': this.activates === 'modal'
				}
			}
		},

		mounted () {
			this.init()
		},

		methods: {
			init () {
				if (typeof this[this.activates] !== 'function') {
					throw `Method '${this.activates}' does not exist in <activator> component.`
				}

				this[this.activates]()
			},

			click () {
				this.$emit(`${this.activates}:click`)
			},

			load (cb) {
				if (document.readyState === 'complete') {
					return cb()
				}

				document.addEventListener('DOMContentLoaded', () => cb())
			}
		}
	}
</script>