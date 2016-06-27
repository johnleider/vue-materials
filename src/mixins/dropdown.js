export default {
	methods: {
		dropdown () {
			this.ready(() => $(this.$el).dropdown())
		}
	}
}