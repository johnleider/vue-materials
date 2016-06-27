export default {
	methods: {
		['side-nav'] () {
			this.ready(() => $(this.$el).sideNav())
		}
	}
}